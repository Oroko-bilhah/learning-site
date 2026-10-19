import { Link, Navigate, useLocation } from 'react-router-dom'
import useAuth from './useAuth'

export default function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <main className="auth-page"><p className="auth-loading">Checking your account…</p></main>
  if (!user) return <Navigate to="/auth" state={{ from: location }} replace />
  if (role && user.app_metadata?.role !== role && !user.app_metadata?.roles?.includes(role)) {
    return <main className="auth-page"><section className="auth-card"><span className="eyebrow">ACCESS RESTRICTED</span><h1>Teacher access required</h1><p className="auth-intro">This account is not set up as a teacher. Ask your ElimuNest administrator to grant teacher access.</p><Link className="primary-button" to="/dashboard">Go to your dashboard</Link></section></main>
  }
  return children
}
