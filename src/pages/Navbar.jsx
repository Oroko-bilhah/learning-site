import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../useAuth'
import '../App.css'

function Navbar() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    try {
      await signOut()
    } catch {
      // The local session is cleared even if the remote logout endpoint is unavailable.
    }
    navigate('/')
  }

  return (
    <header className="elimu-navbar">
      <Link to="/" className="elimu-brand">
        <span className="elimu-brand-icon">E</span>
        <span>ElimuNest</span>
      </Link>

      <nav className="elimu-nav-links" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/subjects">
          Subjects
        </NavLink>

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        {user?.app_metadata?.role === 'teacher' && <NavLink to="/teacher">
          Teacher
        </NavLink>}

        <NavLink to="/bookmarks">
          Saved Lessons 
        </NavLink>
      </nav>
      <div className="elimu-nav-account">
        {user ? <>
          <span className="elimu-nav-email" title={user.email}>{user.user_metadata?.full_name || user.email}</span>
          <button type="button" className="elimu-signout-button" onClick={handleSignOut}>Sign out</button>
        </> : <>
          <Link className="elimu-signin-link" to="/auth">Sign in</Link>
          <Link className="elimu-signup-link" to="/register">Register</Link>
        </>}
      </div>
    </header>
  )
}

export default Navbar
