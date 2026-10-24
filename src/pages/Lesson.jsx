import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getStoredSession, scopedStorageKey } from '../auth'
import '../App.css'

function LessonIcon({ name, size = 16 }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    arrowLeft: (
      <>
        <path d="M19 12H5" />
        <path d="m11 18-6-6 6-6" />
      </>
    ),
    bookmark: (
      <path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-4-6 4V4.75Z" />
    ),
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  }

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
      {paths[name]}
    </svg>
  )
}

const picturePrompts = [
  ['Look closely', 'Find something like this around you.'],
  ['Try it yourself', 'Use what you have learned in a quick activity.'],
  ['Tell someone', 'Explain what you noticed in your own words.'],
]

function getPictureTheme(subjectName) {
  const key = decodeURIComponent(subjectName || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')

  if (/math/.test(key)) return 'math'
  if (/english|language|kiswahili|arabic|french|german|mandarin/.test(key)) {
    return 'language'
  }
  if (/environment|science|agriculture|biology|nature/.test(key)) return 'nature'
  if (/creative|art|music|sport|physical/.test(key)) return 'creative'
  return 'community'
}

function PictureArtwork({ theme, variant, title }) {
  const titleId = `picture-title-${theme}-${variant}-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')}`
  const backgrounds = ['#FFF0B8', '#DDF4F4', '#E9E2FF']

  return (
    <svg
      className={`picture-artwork picture-artwork-${theme}`}
      viewBox="0 0 240 150"
      role="img"
      aria-labelledby={titleId}
      focusable="false"
    >
      <title id={titleId}>{title}</title>
      <rect width="240" height="150" rx="18" fill={backgrounds[variant]} />
      <circle cx="207" cy="28" r="12" fill="#FFFFFF" opacity=".75" />
      <path
        d="M0 119Q55 98 110 119T240 115V150H0Z"
        fill={variant === 1 ? '#BDE8D0' : '#C7E9D6'}
      />
      {theme === 'math' && variant === 0 && (
        <>
          <rect x="61" y="39" width="118" height="75" rx="14" fill="#FFFFFF" />
          <circle cx="92" cy="67" r="13" fill="#FF9A76" />
          <circle cx="129" cy="67" r="13" fill="#6EC6CE" />
          <circle cx="166" cy="67" r="13" fill="#FFD45D" />
          <path d="M84 92h92" stroke="#596B88" strokeWidth="6" strokeLinecap="round" />
        </>
      )}
      {theme === 'math' && variant === 1 && (
        <>
          <path d="M48 82h145" stroke="#8E6CC7" strokeWidth="6" strokeLinecap="round" />
          {[65, 101, 137, 173].map((x, index) => (
            <g key={x}>
              <path d={`M${x} 53v58`} stroke="#8E6CC7" strokeWidth="3" />
              <circle cx={x} cy={index % 2 ? 73 : 91} r="11" fill={['#FF9A76', '#6EC6CE', '#FFD45D', '#9AD67D'][index]} />
            </g>
          ))}
        </>
      )}
      {theme === 'math' && variant === 2 && (
        <>
          <circle cx="88" cy="77" r="31" fill="#FF9A76" />
          <rect x="127" y="47" width="60" height="60" rx="8" fill="#6EC6CE" />
          <path d="m111 109 28-49 28 49Z" fill="#FFD45D" stroke="#FFFFFF" strokeWidth="5" strokeLinejoin="round" />
        </>
      )}
      {theme === 'language' && variant === 0 && (
        <>
          <path d="M49 49q35-19 71 0v60q-36-19-71 0Zm71 0q35-19 71 0v60q-36-19-71 0Z" fill="#FFFFFF" stroke="#7761B5" strokeWidth="5" strokeLinejoin="round" />
          <path d="M65 69h36m-36 15h27m25-15h37m-37 15h29" stroke="#6EC6CE" strokeWidth="5" strokeLinecap="round" />
        </>
      )}
      {theme === 'language' && variant === 1 && (
        <>
          {['A', 'B', 'C'].map((letter, index) => (
            <g key={letter}>
              <rect x={44 + index * 58} y="48" width="48" height="58" rx="10" fill={['#FF9A76', '#FFD45D', '#8EC9F2'][index]} />
              <text x={68 + index * 58} y="88" textAnchor="middle" fill="#34445D" fontSize="30" fontWeight="800">{letter}</text>
            </g>
          ))}
          <path d="m194 52 17 9-17 9Z" fill="#8E6CC7" />
        </>
      )}
      {theme === 'language' && variant === 2 && (
        <>
          <path d="M45 49h89a15 15 0 0 1 15 15v21a15 15 0 0 1-15 15h-34l-20 17v-17H45a15 15 0 0 1-15-15V64a15 15 0 0 1 15-15Z" fill="#FFFFFF" />
          <path d="M120 48h69a14 14 0 0 1 14 14v12a14 14 0 0 1-14 14h-8v15l-18-15h-43" fill="#FFD45D" />
          <circle cx="60" cy="76" r="5" fill="#8E6CC7" />
          <circle cx="82" cy="76" r="5" fill="#8E6CC7" />
          <circle cx="104" cy="76" r="5" fill="#8E6CC7" />
        </>
      )}
      {theme === 'nature' && (
        <>
          <circle cx="73" cy="49" r="22" fill="#FFD45D" />
          <path d="M119 111V65" stroke="#8D633D" strokeWidth="12" strokeLinecap="round" />
          <circle cx="119" cy="58" r="31" fill={variant === 1 ? '#6EC6CE' : '#83CC83'} />
          <circle cx="97" cy="75" r="20" fill="#9AD67D" />
          <circle cx="143" cy="75" r="20" fill="#69B978" />
          <path d="M91 112h57l-8 20H99Z" fill="#E98A61" />
          <path d="M119 131v-17m0-5-12-10m12 15 12-13" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        </>
      )}
      {theme === 'creative' && (
        <>
          <path d="M66 111c-22-10-27-37-12-55 19-24 60-24 83-5 19 16 22 42 7 59-10 12-21 12-33 5-11-6-29 4-45-4Z" fill="#FFFFFF" />
          <circle cx="75" cy="68" r="8" fill="#FF8178" />
          <circle cx="101" cy="55" r="8" fill="#FFD45D" />
          <circle cx="128" cy="65" r="8" fill="#6EC6CE" />
          <circle cx="135" cy="89" r="8" fill="#8E6CC7" />
          <path d="m153 44 42 48-12 11-42-48Z" fill="#E98A61" />
          <path d="m141 55 12-11 8 9-12 11Z" fill="#34445D" />
        </>
      )}
      {theme === 'community' && (
        <>
          <circle cx="86" cy="58" r="20" fill="#8B5E4A" />
          <circle cx="151" cy="58" r="20" fill="#A86E50" />
          <path d="M50 113c3-25 15-37 36-37s33 12 36 37Zm65 0c3-25 15-37 36-37s33 12 36 37Z" fill="#6EC6CE" />
          <path d="M103 91q16 15 31 0" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
          <path d="M92 119h54" stroke="#8E6CC7" strokeWidth="7" strokeLinecap="round" />
        </>
      )}
    </svg>
  )
}

function YoungLearnerIllustration({ subjectName, title }) {
  const theme = getPictureTheme(subjectName)

  return (
    <figure className="young-lesson-illustration">
      <PictureArtwork
        theme={theme}
        variant={0}
        title={`${title}: a colourful ${theme} learning picture`}
      />
      <figcaption>A picture to help you explore {title}</figcaption>
    </figure>
  )
}

function LearningPictureGallery({ subjectName, title }) {
  const theme = getPictureTheme(subjectName)

  return (
    <section className="learning-picture-gallery" aria-label="Picture activities">
      {picturePrompts.map(([heading, prompt], index) => (
        <figure className="learning-picture-card" key={heading}>
          <PictureArtwork
            theme={theme}
            variant={index}
            title={`${heading}: ${title}`}
          />
          <figcaption>
            <strong>{heading}</strong>
            <span>{prompt}</span>
          </figcaption>
        </figure>
      ))}
    </section>
  )
}

function CountObject({ object, index }) {
  const color = ['#EF765F', '#F2B94B', '#63A979', '#6C9FD1'][index % 4]

  return (
    <svg
      className={`count-object count-object-${object.split(' ')[0]}`}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      {object.includes('stick') ? (
        <path d="M16 4 19 28" stroke="#A66D3F" strokeWidth="5" strokeLinecap="round" />
      ) : object.includes('pencil') ? (
        <>
          <path d="M11 6h10v19H11z" fill={color} />
          <path d="m11 25 5 5 5-5" fill="#F1D2A4" />
          <path d="M13 9h6" stroke="#fff" strokeWidth="2" />
        </>
      ) : object.includes('bean') ? (
        <ellipse cx="16" cy="16" rx="8" ry="12" transform="rotate(-35 16 16)" fill={color} />
      ) : object.includes('bottle') ? (
        <>
          <circle cx="16" cy="17" r="10" fill={color} />
          <circle cx="16" cy="17" r="6" fill="none" stroke="#fff" strokeWidth="2" />
          <path d="M12 5h8v4h-8z" fill="#527CA8" />
        </>
      ) : (
        <>
          <path d="M16 10c-8-8-15 1-10 11 2 5 8 8 10 3 2 5 8 2 10-3 5-10-2-19-10-11Z" fill={color} />
          <path d="M16 10c0-4 3-6 7-6" fill="none" stroke="#79543B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M19 7c3-4 7-2 7-2-1 4-4 5-7 2Z" fill="#5E9C5B" />
        </>
      )}
    </svg>
  )
}

function CountPicture({ visual }) {
  const objectName = (quantity) => {
    if (quantity !== 1) return visual.object
    return {
      beans: 'bean',
      guavas: 'guava',
      mangoes: 'mango',
      oranges: 'orange',
      pencils: 'pencil',
      sticks: 'stick',
      'bottle tops': 'bottle top',
    }[visual.object] || visual.object
  }
  const label = visual.groups
    .map((quantity) => `${quantity} ${objectName(quantity)}`)
    .join(` ${visual.operator} `)

  return (
    <figure className="count-picture" aria-label={`Countable picture: ${label}`}>
      {visual.groups.map((quantity, groupIndex) => (
        <div className="count-picture-part" key={`${quantity}-${groupIndex}`}>
          {groupIndex > 0 && (
            <span className="count-picture-operator" aria-hidden="true">{visual.operator}</span>
          )}
          <div className="count-picture-group">
            <div className="count-picture-items" aria-hidden="true">
              {Array.from({ length: quantity }, (_, index) => (
                <CountObject object={visual.object} index={index} key={index} />
              ))}
            </div>
            <span>{quantity} {objectName(quantity)}</span>
          </div>
        </div>
      ))}
    </figure>
  )
}

function readSavedList(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(scopedStorageKey(key)) || '[]')
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

function LessonContent() {
  const { gradeId, subjectName, lessonSlug } = useParams()

  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const [bookmarked, setBookmarked] = useState(() =>
    readSavedList('elimuNestBookmarks').includes(lessonSlug)
  )

  const [completed, setCompleted] = useState(() =>
    readSavedList('elimuNestCompletedLessons').includes(lessonSlug)
  )
  const [lesson, setLesson] = useState(null)
  const [lessonSequence, setLessonSequence] = useState([])
  const [lessonError, setLessonError] = useState('')
  const [lessonLoading, setLessonLoading] = useState(true)

  useEffect(() => {
    let active = true
    const token = getStoredSession()?.access_token
    const params = new URLSearchParams({ gradeId, subjectName, lessonSlug })
    fetch(`/api/lesson?${params}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }).then(async (response) => {
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.error || 'Could not load this lesson.')
      return data
    }).then((data) => {
      if (active) {
        setLesson(data.lesson)
        setLessonSequence(data.sequence || [])
        setLessonError('')
      }
    }).catch((error) => {
      if (active) setLessonError(error.message)
    }).finally(() => { if (active) setLessonLoading(false) })
    return () => { active = false }
  }, [gradeId, subjectName, lessonSlug])

  useEffect(() => {
    const saved = readSavedList('elimuNestBookmarks')

    const updated = bookmarked
      ? [...new Set([...saved, lessonSlug])]
      : saved.filter((slug) => slug !== lessonSlug)

    localStorage.setItem(
      scopedStorageKey('elimuNestBookmarks'),
      JSON.stringify(updated)
    )
  }, [bookmarked, lessonSlug])

  useEffect(() => {
    const saved = readSavedList('elimuNestCompletedLessons')

    const updated = completed
      ? [...new Set([...saved, lessonSlug])]
      : saved.filter((slug) => slug !== lessonSlug)

    localStorage.setItem(
      scopedStorageKey('elimuNestCompletedLessons'),
      JSON.stringify(updated)
    )
  }, [completed, lessonSlug])

  const isPrimaryLearningPage = ['grade-1', 'grade-2', 'grade-3', 'grade-4'].includes(gradeId)

  if (lessonLoading) return <main className="lesson-page"><p>Loading lesson…</p></main>
  if (/subscribe|subscription|sign in/i.test(lessonError)) {
    const needsSignIn = /sign in/i.test(lessonError)
    return <main className="lesson-page"><section className="lesson-not-found"><span className="eyebrow">{needsSignIn ? 'SIGN IN REQUIRED' : 'SUBSCRIPTION REQUIRED'}</span><h1>Keep learning with ElimuNest</h1><p>{lessonError}</p><Link className="primary-button" to={needsSignIn ? '/auth' : '/subscribe'}>{needsSignIn ? 'Sign in' : 'View subscription plans'} <LessonIcon name="arrow" /></Link></section></main>
  }

  if (!lesson) {
    return (
      <main className="lesson-page">
        <section className="lesson-not-found">
          <span className="eyebrow">LESSON NOT AVAILABLE</span>
          <h1>This lesson is not ready yet.</h1>
          <p>
            We're still preparing this learning material.
            Explore other topics while we work on more lessons.
          </p>
          <Link
            to={`/subjects/${gradeId}/${subjectName}`}
            className="primary-button"
          >
            Back to subject <LessonIcon name="arrow" />
          </Link>
        </section>
      </main>
    )
  }

  const correctAnswers = lesson.questions.filter(
    (question, index) => answers[index] === question.answer
  ).length
  const answeredCount = Object.keys(answers).length
  const currentLessonIndex = lessonSequence.findIndex(
    (item) => item.slug === lessonSlug
  )
  const nextLesson = lessonSequence[currentLessonIndex + 1]
  const subjectPath = `/subjects/${gradeId}/${subjectName}`

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  function handleRetry() {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <main className={`lesson-page${isPrimaryLearningPage ? ' young-learner-page' : ''}`}>
      <nav className="detail-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/subjects">Subjects</Link>
        <span>/</span>
        <Link to={`/subjects/${gradeId}/${subjectName}`}>
          {lesson.subject}
        </Link>
        <span>/</span>
        <span>{lesson.title}</span>
      </nav>

      <div className="lesson-layout">
        <article className="lesson-content">
          <nav className="lesson-roadmap" aria-label="Lesson steps">
            <a href="#lesson-goals">1. Learn</a>
            <span aria-hidden="true">/</span>
            <a href="#lesson-quiz">2. Practise</a>
            <span aria-hidden="true">/</span>
            <a href="#lesson-review">3. Review</a>
          </nav>

          <header className="lesson-header">
            <span className="eyebrow">
              {lesson.grade} · {lesson.subject}
            </span>

            <h1>{lesson.title}</h1>
            <p>{lesson.topic}</p>
            {isPrimaryLearningPage && (
              <p className="young-learner-prompt">
                Young explorer challenge: learn, try the activity, and tell someone what you discovered.
              </p>
            )}

            <div className="lesson-meta">
              <span>
                <LessonIcon name="clock" />
                {lesson.duration}
              </span>
              <span>
                {lesson.questions.length} practice questions
              </span>
            </div>

            <div className="lesson-actions">
              <button
                type="button"
                className="bookmark-button"
                onClick={() =>
                  setBookmarked((previous) => !previous)
                }
              >
                <LessonIcon name="bookmark" />
                {bookmarked ? 'Bookmarked' : 'Bookmark lesson'}
              </button>

              <button
                type="button"
                className="bookmark-button"
                onClick={() =>
                  setCompleted((previous) => !previous)
                }
              >
                {completed
                  ? 'Lesson completed'
                  : 'Mark as completed'}
              </button>
            </div>
          </header>

          <section className="lesson-objectives" id="lesson-goals">
            <h2>What you'll learn</h2>
            <ul>
              {lesson.objectives.map((objective) => (
                <li key={objective}>
                  <span aria-hidden="true">
                    <LessonIcon name="check" />
                  </span>
                  {objective}
                </li>
              ))}
            </ul>
          </section>

          {isPrimaryLearningPage && (
            <>
              <YoungLearnerIllustration subjectName={subjectName} title={lesson.title} />
              <LearningPictureGallery subjectName={subjectName} title={lesson.title} />
            </>
          )}

          {lesson.sections.map((section) => (
            <section
              className="lesson-section"
              id={`lesson-section-${section.heading
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')}`}
              key={section.heading}
            >
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          {lesson.example && (
            <section className="worked-example" id="lesson-example">
              <span className="eyebrow">WORKED EXAMPLE</span>
              <h2>{lesson.example.question}</h2>

              <ol>
                {lesson.example.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <div className="example-answer">
                <strong>Answer:</strong> {lesson.example.answer}
              </div>
            </section>
          )}

          <section className="lesson-quiz" id="lesson-quiz">
            <div className="lesson-quiz-heading">
              <span className="eyebrow">
                CHECK YOUR UNDERSTANDING
              </span>
              <h2>Quick practice</h2>
              <p>
                Take your time. Choose an answer for each question, then check
                your score and read the explanations.
              </p>
              <div className="quiz-progress">
                <div className="quiz-progress-label">
                  <span>Questions answered</span>
                  <strong>
                    {answeredCount} of {lesson.questions.length}
                  </strong>
                </div>
                <div
                  className="progress-track"
                  role="progressbar"
                  aria-label="Quiz questions answered"
                  aria-valuemin="0"
                  aria-valuemax={lesson.questions.length}
                  aria-valuenow={answeredCount}
                >
                  <div
                    className="progress-fill"
                    style={{
                      width: `${
                        (answeredCount / lesson.questions.length) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {lesson.questions.map((question, index) => {
                const isCorrect =
                  answers[index] === question.answer

                return (
                  <fieldset
                    className="practice-question"
                    key={`${index}-${question.question}`}
                  >
                    <legend>
                      {index + 1}. {question.question}
                    </legend>

                    <div className="practice-question-content">
                      <div className="practice-question-options">
                        {question.options.map((option) => (
                          <label
                            className="practice-option"
                            key={option}
                          >
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={option}
                              checked={answers[index] === option}
                              disabled={submitted}
                              onChange={() =>
                                setAnswers((previous) => ({
                                  ...previous,
                                  [index]: option,
                                }))
                              }
                              required
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                      {question.countVisual && (
                        <CountPicture visual={question.countVisual} />
                      )}
                    </div>

                    {submitted && (
                      <div
                        className={`practice-feedback ${
                          isCorrect ? 'correct' : 'incorrect'
                        }`}
                      >
                        <strong>
                          {isCorrect
                            ? 'Correct!'
                            : `Answer: ${question.answer}`}
                        </strong>
                        <p>{question.explanation}</p>
                      </div>
                    )}
                  </fieldset>
                )
              })}

              {!submitted ? (
                <button
                  className="primary-button"
                  type="submit"
                >
                  Check my answers
                </button>
              ) : (
                <div className="quiz-results">
                  <span className="eyebrow">QUIZ REVIEW</span>
                  <h3>
                    Your score: {correctAnswers} /{' '}
                    {lesson.questions.length}
                  </h3>
                  <p>
                    {correctAnswers === lesson.questions.length
                      ? 'Excellent work. You got every question right.'
                      : correctAnswers >= lesson.questions.length / 2
                        ? 'Good progress. Review any missed answers, then try again.'
                        : 'Every attempt helps. Read the explanations and try again.'}
                  </p>
                  <button
                    className="secondary-button"
                    type="button"
                    onClick={handleRetry}
                  >
                    Try again
                  </button>
                </div>
              )}
            </form>
          </section>

          <section className="lesson-finish" id="lesson-review">
            <div>
              <span className="eyebrow">FINISH THIS LESSON</span>
              <h2>{completed ? 'Lesson complete' : 'Ready for the next step?'}</h2>
              <p>
                {completed
                  ? 'Your progress is saved. Keep your learning streak going.'
                  : 'Mark this lesson complete to track your progress.'}
              </p>
            </div>
            <button
              type="button"
              className="primary-button"
              onClick={() => setCompleted(true)}
              disabled={completed}
            >
              {completed ? 'Completed' : 'Mark complete'}
            </button>
          </section>

          <div className="lesson-footer-navigation">
            <Link
              to={subjectPath}
              className="secondary-button"
            >
              <LessonIcon name="arrowLeft" />
              Back to topics
            </Link>
            <Link
              to={nextLesson
                ? `${subjectPath}/lessons/${nextLesson.slug}`
                : subjectPath}
              className="primary-button"
              aria-label={nextLesson ? `Next lesson: ${nextLesson.title}` : 'Explore more lessons'}
            >
              {nextLesson ? `Next lesson: ${nextLesson.title}` : 'Explore more lessons'}
              <LessonIcon name="arrow" />
            </Link>
          </div>
        </article>

        <aside className="lesson-sidebar">
          <nav
            className="lesson-sidebar-card lesson-outline"
            aria-label="On this lesson"
          >
            <span className="eyebrow">ON THIS LESSON</span>
            <h3>Lesson guide</h3>
            <a href="#lesson-goals">What you'll learn</a>
            {lesson.sections.map((section) => (
              <a
                href={`#lesson-section-${section.heading
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')}`}
                key={section.heading}
              >
                {section.heading}
              </a>
            ))}
            {lesson.example && <a href="#lesson-example">Worked example</a>}
            <a href="#lesson-quiz">Practice quiz</a>
            <a href="#lesson-review">Finish lesson</a>
          </nav>

          <div className="lesson-sidebar-card">
            <span className="eyebrow">STUDY TIP</span>
            <h3>Learn actively</h3>
            <p>
              After reading a concept, close your notes and explain it
              in your own words. Then attempt the practice questions.
            </p>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default function Lesson() {
  const { gradeId, subjectName, lessonSlug } = useParams()

  return (
    <LessonContent key={`${gradeId}/${subjectName}/${lessonSlug}`} />
  )
}
