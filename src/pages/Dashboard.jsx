
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../App.css'

const icons = {
  book: (
    <>
      <path d="M12 7v14" />
      <path d="M3 18V5a2 2 0 0 1 2-2h2a5 5 0 0 1 5 5 5 5 0 0 1 5-5h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-2a5 5 0 0 0-5 2 5 5 0 0 0-5-2H5a2 2 0 0 1-2-2Z" />
    </>
  ),
  progress: (
    <>
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-5 5" />
    </>
  ),
  bookmark: <path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-4-6 4V4.75Z" />,
  mathematics: (
    <>
      <path d="m7 5 4 7-4 7" />
      <path d="M13 7h5M13 12h5M13 17h5" />
    </>
  ),
  biology: (
    <>
      <path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 10-6 8-16Z" />
      <path d="M4 21c3-5 7-8 12-11" />
    </>
  ),
  english: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
      <path d="M4 5.5v16M8 7h8M8 11h8M8 15h5" />
    </>
  ),
  tip: (
    <>
      <path d="M9 18h6M10 22h4" />
      <path d="M8.5 14.5A7 7 0 1 1 15.5 14.5c-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5Z" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
}

function DashboardIcon({ name, size = 20 }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  )
}

const subjects = [
  {
    name: 'Mathematics',
    grade: 'Form 3',
    progress: 65,
    color: 'blue',
  },
  {
    name: 'Biology',
    grade: 'Form 3',
    progress: 40,
    color: 'green',
  },
  {
    name: 'English',
    grade: 'Form 3',
    progress: 80,
    color: 'gold',
  },
]

const totalLessons = 30

function readSavedList(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '[]')
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

function Dashboard() {
  const [completedLessons, setCompletedLessons] = useState(
    () => readSavedList('elimuNestCompletedLessons').length
  )

  const [bookmarkCount, setBookmarkCount] = useState(
    () => readSavedList('elimuNestBookmarks').length
  )

  useEffect(() => {
    function updateStats() {
      setCompletedLessons(
        readSavedList('elimuNestCompletedLessons').length
      )

      setBookmarkCount(
        readSavedList('elimuNestBookmarks').length
      )
    }

    // Refresh when the student returns to the Dashboard.
    updateStats()

    // Listen for changes made in another browser tab.
    window.addEventListener('storage', updateStats)

    return () => {
      window.removeEventListener('storage', updateStats)
    }
  }, [])

  const overallProgress = Math.min(
    100,
    Math.round((completedLessons / totalLessons) * 100)
  )

  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">STUDENT LEARNING SPACE</p>
          <h1>Welcome back!</h1>
          <p>Keep learning, one lesson at a time.</p>
        </div>

        <Link to="/subjects" className="dashboard-primary-button">
          Explore subjects <DashboardIcon name="arrow" size={18} />
        </Link>
      </header>

      <section className="dashboard-stats">
        <article className="dashboard-stat-card">
          <span className="stat-icon">
            <DashboardIcon name="book" size={24} />
          </span>
          <p>Lessons completed</p>
          <h2>{completedLessons}</h2>
          <span>Keep up the good work</span>
        </article>

        <article className="dashboard-stat-card">
          <span className="stat-icon">
            <DashboardIcon name="progress" size={24} />
          </span>
          <p>Overall progress</p>
          <h2>{overallProgress}%</h2>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <span>
            {completedLessons} of {totalLessons} learning lessons completed
          </span>
        </article>

        <article className="dashboard-stat-card">
          <span className="stat-icon">
            <DashboardIcon name="bookmark" size={24} />
          </span>
          <p>Saved lessons</p>
          <h2>{bookmarkCount}</h2>
          <Link to="/bookmarks">
            View saved lessons <DashboardIcon name="arrow" size={16} />
          </Link>
        </article>
      </section>

      <section className="dashboard-section">
        <div className="dashboard-section-heading">
          <div>
            <p className="eyebrow">YOUR LEARNING</p>
            <h2>Continue learning</h2>
          </div>

          <Link to="/subjects">
            Browse all subjects <DashboardIcon name="arrow" size={16} />
          </Link>
        </div>

        <div className="dashboard-subject-grid">
          {subjects.map((subject) => (
            <article
              className="dashboard-subject-card"
              key={subject.name}
            >
              <div className={`dashboard-subject-icon ${subject.color}`}>
                <DashboardIcon
                  name={subject.name.toLowerCase()}
                  size={24}
                />
              </div>

              <p className="dashboard-grade">{subject.grade}</p>
              <h3>{subject.name}</h3>

              <div className="dashboard-progress-label">
                <span>Sample progress</span>
                <strong>{subject.progress}%</strong>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${subject.progress}%` }}
                />
              </div>

              <Link
                to={`/subjects/form-3/${subject.name.toLowerCase()}`}
                className="dashboard-continue-link"
              >
                Study subject <DashboardIcon name="arrow" size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="dashboard-tip">
        <div className="dashboard-tip-icon">
          <DashboardIcon name="tip" size={30} />
        </div>
        <div>
          <p className="eyebrow">STUDY TIP</p>
          <h2>Small steps lead to progress</h2>
          <p>
            Choose one topic, study it carefully, and test your
            understanding before moving to the next.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
