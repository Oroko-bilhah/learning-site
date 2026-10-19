import { useEffect, useMemo, useState } from 'react'
import { getStoredSession, isAuthConfigured, restoreSession, signIn, signOut, signUp } from './auth'
import AuthContext from './auth-context'

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [recovery, setRecovery] = useState(false)

  useEffect(() => {
    let active = true
    restoreSession().then(({ session: restored, recovery: isRecovery }) => {
      if (!active) return
      setSession(restored)
      setRecovery(isRecovery)
      setLoading(false)
    }).catch(() => {
      if (active) setLoading(false)
    })
    const sync = () => setSession(getStoredSession())
    window.addEventListener('elimu-auth-change', sync)
    window.addEventListener('storage', sync)
    return () => {
      active = false
      window.removeEventListener('elimu-auth-change', sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const value = useMemo(() => ({
    session,
    user: session?.user || null,
    loading,
    recovery,
    configured: isAuthConfigured,
    signIn,
    signUp,
    signOut,
    clearRecovery: () => setRecovery(false),
  }), [session, loading, recovery])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
