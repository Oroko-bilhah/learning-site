import { Link, NavLink } from 'react-router-dom'
import '../App.css'

function Navbar() {
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

        <NavLink to="/bookmarks">
          Saved Lessons 
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar