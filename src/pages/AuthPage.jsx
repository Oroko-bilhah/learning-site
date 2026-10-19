import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import useAuth from '../useAuth'
import { requestPasswordReset, updatePassword } from '../auth'
import { gradeOptions } from '../curriculumLevels'
import '../App.css'

export default function AuthPage() {
  const { user, session, signIn, signUp, configured, recovery, clearRecovery } = useAuth()
  const [params] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()
  const requestedMode = params.get('mode')
  const [mode, setMode] = useState(location.pathname === '/register' ? 'signup' : ['signup', 'reset'].includes(requestedMode) ? requestedMode : 'signin')
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [gradeId, setGradeId] = useState('grade-1')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  if (user && !recovery) return <Navigate to={location.state?.from?.pathname || '/dashboard'} replace />

  async function handleSubmit(event) {
    event.preventDefault()
    setBusy(true)
    setError('')
    setMessage('')
    try {
      if (recovery) {
        await updatePassword(password, session?.access_token)
        clearRecovery()
        setMessage('Your password has been updated. You can continue learning.')
        navigate('/dashboard', { replace: true })
      } else if (mode === 'signup') {
        const result = await signUp({ email, password, fullName, gradeId })
        if (result.access_token) navigate('/dashboard', { replace: true })
        else setMessage('Check your email for a confirmation link, then sign in.')
      } else if (mode === 'reset') {
        await requestPasswordReset(email)
        setMessage('If an account uses that email, a password reset link is on its way.')
      } else {
        await signIn(email, password)
        navigate(location.state?.from?.pathname || '/dashboard', { replace: true })
      }
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setBusy(false)
    }
  }

  const title = recovery ? 'Choose a new password' : mode === 'signup' ? 'Create your learner account' : mode === 'reset' ? 'Reset your password' : 'Welcome back'

  return (
    <main className="auth-page">
      <section className="auth-card">
        <span className="eyebrow">ELIMUNEST ACCOUNT</span>
        <h1>{title}</h1>
        <p className="auth-intro">Sign in to save your progress and access your learning space.</p>
        {!configured && <p className="auth-message error" role="alert">Authentication is not configured. Add your Supabase project URL and publishable key as described in <code>.env.example</code>.</p>}
        {message && <p className="auth-message success" role="status">{message}</p>}
        {error && <p className="auth-message error" role="alert">{error}</p>}
        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === 'signup' && !recovery && <label>Full name<input autoComplete="name" required value={fullName} onChange={(event) => setFullName(event.target.value)} /></label>}
          {mode === 'signup' && !recovery && <label>Grade<select value={gradeId} onChange={(event) => setGradeId(event.target.value)}>{gradeOptions.filter((grade) => grade.id.startsWith('grade-')).map((grade) => <option key={grade.id} value={grade.id}>{grade.name}</option>)}</select></label>}
          <label>Email address<input type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} /></label>
          {mode !== 'reset' && <label>{recovery ? 'New password' : 'Password'}<input type="password" autoComplete={recovery ? 'new-password' : mode === 'signup' ? 'new-password' : 'current-password'} minLength={8} required value={password} onChange={(event) => setPassword(event.target.value)} /></label>}
          <button className="primary-button" disabled={!configured || busy} type="submit">{busy ? 'Please wait…' : recovery ? 'Update password' : mode === 'signup' ? 'Create account' : mode === 'reset' ? 'Send reset link' : 'Sign in'}</button>
        </form>
        {!recovery && <div className="auth-links">
          {mode === 'signin' && <button type="button" onClick={() => { setMode('reset'); setError(''); setMessage('') }}>Forgot password?</button>}
          {mode === 'reset' && <button type="button" onClick={() => { setMode('signin'); setError(''); setMessage('') }}>Back to sign in</button>}
          {mode === 'signup' ? <p>Already have an account? <button type="button" onClick={() => setMode('signin')}>Sign in</button></p> : mode === 'signin' ? <p>New to ElimuNest? <button type="button" onClick={() => setMode('signup')}>Create an account</button></p> : null}
        </div>}
        <Link className="auth-home-link" to="/">Back to learning</Link>
      </section>
    </main>
  )
}
