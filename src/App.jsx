import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import { AuthProvider } from './AuthContext'
import ProtectedRoute from './ProtectedRoute'
import Subjects from './pages/Subjects'
import SubjectDetail from './pages/SubjectDetail'
import Lesson from './pages/Lesson'
import Bookmarks from './pages/Bookmarks'
import Navbar from './pages/Navbar'
import Dashboard from './pages/Dashboard'
import Teacher from './pages/Teacher'
import './App.css'

const subjects = [
  {
    name: 'Mathematics',
    description: 'Build confidence through examples and practice.',
    icon: 'M',
    color: 'blue',
  },
  {
    name: 'English',
    description: 'Improve grammar, writing, and comprehension.',
    icon: 'Aa',
    color: 'gold',
  },
  {
    name: 'Biology',
    description: 'Explore living things and how life works.',
    icon: 'B',
    color: 'green',
  },
  {
    name: 'Chemistry',
    description: 'Understand reactions, elements, and matter.',
    icon: 'C',
    color: 'orange',
  },
]

const homeFeatures = [
  {
    title: 'Expert teachers',
    description: 'Get clear guidance from expert teachers who help you master each topic.',
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21a7 7 0 0 1 14 0M19 8h3M20.5 6.5v3" />
      </>
    ),
  },
  {
    title: 'Flexible schedules',
    description: 'Arrange learning around your day with flexible class times and self-paced study.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: 'Online classes',
    description: 'Join online classes from wherever you are and continue learning between sessions.',
    icon: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
        <path d="M4 5.5v16M8 7h8M8 11h8M8 15h5" />
      </>
    ),
  },
  {
    title: 'Track your progress',
    description: 'See what you have completed and what to study next.',
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-5 5" />
      </>
    ),
  },
]

function FeatureIcon({ children }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

function HomePage() {
  return (
    <div className="app">
<main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">LEARN FROM ANYWHERE</span>

            <h1>
              Learn better.
              <br />
              <span>Achieve more.</span>
            </h1>

            <p className="hero-description">
              Explore clear lessons, practise what you learn, and build
              confidence one step at a time.
            </p>

            <div className="hero-actions">
              <Link to="/subjects" className="primary-button">
                Explore subjects <span>&gt;</span>
              </Link>

              <a href="#how-it-works" className="secondary-button">
                Discover how it works
              </a>
            </div>

            <div className="hero-note">
              <span className="note-check">01</span>
              Flexible learning for your next academic milestone.
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img
                className="hero-photo"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
                alt="Students collaborating on their studies"
                fetchPriority="high"
              />
              <div className="hero-photo-caption">
                <strong>Your next chapter starts here.</strong>
                <span>Build knowledge, confidence, and new possibilities.</span>
              </div>
            </div>

            <div className="floating-badge badge-top">
              <span>01</span> Learn something new
            </div>

            <div className="floating-badge badge-bottom">
              <span>02</span> Progress starts here
            </div>
          </div>
        </section>

        <section className="home-features" aria-label="Learning benefits">
          {homeFeatures.map((feature) => (
            <article className="home-feature-card" key={feature.title}>
              <div className="home-feature-icon">
                <FeatureIcon>{feature.icon}</FeatureIcon>
              </div>
              <div>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="curriculum-section">
          <div className="section-heading">
            <span className="eyebrow">FIND YOUR LEARNING PATH</span>
            <h2>Where are you in your journey?</h2>
            <p>
              Choose your level to explore the right learning materials.
            </p>
          </div>

          <div className="curriculum-grid">
            <article className="curriculum-card form-three">
              <div className="curriculum-icon">03</div>
              <div className="curriculum-copy">
                <span>COMPETENCY-BASED CURRICULUM</span>
                <h3>Grades 1 to 11</h3>
                <p>
                  Explore CBC learning areas from lower primary through senior school.
                </p>
                <Link to="/subjects?grade=grade-1">
                  Choose a grade <span>&gt;</span>
                </Link>
              </div>
            </article>

            <article className="curriculum-card grade-ten">
              <div className="curriculum-icon">10</div>
              <div className="curriculum-copy">
                <span>8-4-4 CURRICULUM</span>
                <h3>Form 3 and Form 4</h3>
                <p>
                  Continue secondary learning and prepare for KCSE.
                </p>
                <Link to="/subjects?grade=form-4">
                  Choose a form <span>&gt;</span>
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="subjects-section" id="subjects">
          <div className="section-heading">
            <span className="eyebrow">EXPLORE AND DISCOVER</span>
            <h2>Make every subject count.</h2>
            <p>
              Start exploring the subjects that help you reach your goals.
            </p>
          </div>

          <div className="subject-grid">
            {subjects.map((subject) => (
              <article className="subject-card" key={subject.name}>
                <div className={`subject-icon ${subject.color}`}>
                  {subject.icon}
                </div>

                <h3>{subject.name}</h3>
                <p>{subject.description}</p>

                <Link
                  to="/subjects"
                  aria-label={`Explore ${subject.name}`}
                >
                  Explore subject <span>&gt;</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="subjects-more">
            <Link to="/subjects" className="primary-button">
              Explore all subjects <span>&gt;</span>
            </Link>
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="how-copy">
            <span className="eyebrow">LEARNING MADE SIMPLE</span>
            <h2>Your goals. Your pace. Your progress.</h2>
            <p>
              ElimuNest is designed to help you take charge of
              your learning, one topic at a time.
            </p>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">01</span>
              <h3>Choose your level</h3>
              <p>
                Find learning materials suited to your curriculum and grade.
              </p>
            </article>

            <article className="step-card">
              <span className="step-number">02</span>
              <h3>Learn and practise</h3>
              <p>
                Study notes, understand examples, and test your knowledge.
              </p>
            </article>

            <article className="step-card">
              <span className="step-number">03</span>
              <h3>Keep improving</h3>
              <p>
                Use your results to identify topics that need more practice.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Link to="/" className="brand footer-brand">
          <span className="brand-icon">E</span>
          <span>
            Elimu<span className="brand-highlight">Nest</span>
          </span>
        </Link>

        <p>Learn. Practise. Grow.</p>
        <span>(c) {new Date().getFullYear()} ElimuNest</span>
      </footer>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route
          path="/subjects/:gradeId/:subjectName"
          element={<SubjectDetail />}
        />
        <Route
          path="/subjects/:gradeId/:subjectName/lessons/:lessonSlug"
          element={<Lesson />}
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/bookmarks" element={<ProtectedRoute><Bookmarks /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/teacher" element={<ProtectedRoute role="teacher"><Teacher /></ProtectedRoute>} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
