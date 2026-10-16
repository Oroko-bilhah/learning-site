import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
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

const lessons = {
  'introduction-to-algebra': {
    title: 'Introduction to Algebra',
    subject: 'Mathematics',
    grade: 'Form 3',
    topic: 'Algebra and Expressions',
    duration: '10 minutes',
    objectives: [
      'Understand what a variable represents.',
      'Identify constants, coefficients and terms.',
      'Write simple algebraic expressions.',
    ],
    sections: [
      {
        heading: 'What is algebra?',
        paragraphs: [
          'Algebra is a branch of mathematics that uses letters and symbols to represent numbers and quantities.',
          'A letter such as x can represent a number we know or a number we want to find. These letters are called variables.',
        ],
      },
      {
        heading: 'Understanding expressions',
        paragraphs: [
          'An algebraic expression combines numbers, variables and mathematical operations.',
          'For example, 3x + 5 means three multiplied by x, then add five.',
        ],
      },
    ],
    example: {
      question: 'Write an expression for a number increased by 7.',
      steps: [
        'Represent the unknown number with x.',
        'Increased by 7 means add 7.',
        'The expression is x + 7.',
      ],
      answer: 'x + 7',
    },
    questions: [
      {
        question: 'Which of the following is a variable?',
        options: ['12', 'x', '+', '7'],
        answer: 'x',
        explanation:
          'A variable is a letter or symbol that represents a number.',
      },
      {
        question: 'What does 4y mean?',
        options: [
          '4 plus y',
          '4 minus y',
          '4 multiplied by y',
          'y divided by 4',
        ],
        answer: '4 multiplied by y',
        explanation:
          'When a number is written next to a variable, multiplication is implied.',
      },
      {
        question: 'Which expression represents a number decreased by 3?',
        options: ['x + 3', '3x', 'x - 3', 'x ÷ 3'],
        answer: 'x - 3',
        explanation:
          'Decreased by 3 means subtract 3 from the number.',
      },
    ],
  },
}

function readSavedList(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '[]')
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

export default function Lesson() {
  const { gradeId, subjectName, lessonSlug } = useParams()

  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const [bookmarked, setBookmarked] = useState(() =>
    readSavedList('elimuNestBookmarks').includes(lessonSlug)
  )

  const [completed, setCompleted] = useState(() =>
    readSavedList('elimuNestCompletedLessons').includes(lessonSlug)
  )

  useEffect(() => {
    const saved = readSavedList('elimuNestBookmarks')

    const updated = bookmarked
      ? [...new Set([...saved, lessonSlug])]
      : saved.filter((slug) => slug !== lessonSlug)

    localStorage.setItem(
      'elimuNestBookmarks',
      JSON.stringify(updated)
    )
  }, [bookmarked, lessonSlug])

  useEffect(() => {
    const saved = readSavedList('elimuNestCompletedLessons')

    const updated = completed
      ? [...new Set([...saved, lessonSlug])]
      : saved.filter((slug) => slug !== lessonSlug)

    localStorage.setItem(
      'elimuNestCompletedLessons',
      JSON.stringify(updated)
    )
  }, [completed, lessonSlug])

  const lesson = lessons[lessonSlug]

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

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  function handleRetry() {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <main className="lesson-page">
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
          <header className="lesson-header">
            <span className="eyebrow">
              {lesson.grade} · {lesson.subject}
            </span>

            <h1>{lesson.title}</h1>
            <p>{lesson.topic}</p>

            <div className="lesson-meta">
              <span>
                <LessonIcon name="clock" />
                {lesson.duration}
              </span>
              <span>
                {lesson.objectives.length} learning objectives
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

          <section className="lesson-objectives">
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

          {lesson.sections.map((section) => (
            <section
              className="lesson-section"
              key={section.heading}
            >
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className="worked-example">
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

          <section className="lesson-quiz">
            <div className="lesson-quiz-heading">
              <span className="eyebrow">
                CHECK YOUR UNDERSTANDING
              </span>
              <h2>Quick practice</h2>
              <p>
                Answer these questions to review what you've learned.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {lesson.questions.map((question, index) => {
                const isCorrect =
                  answers[index] === question.answer

                return (
                  <fieldset
                    className="practice-question"
                    key={question.question}
                  >
                    <legend>
                      {index + 1}. {question.question}
                    </legend>

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
                  <h3>
                    Your score: {correctAnswers} /{' '}
                    {lesson.questions.length}
                  </h3>
                  <p>
                    {correctAnswers === lesson.questions.length
                      ? 'Excellent work! You answered every question correctly.'
                      : 'Review the explanations, then try again.'}
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

          <div className="lesson-footer-navigation">
            <Link
              to={`/subjects/${gradeId}/${subjectName}`}
              className="secondary-button"
            >
              <LessonIcon name="arrowLeft" />
              Back to topics
            </Link>
          </div>
        </article>

        <aside className="lesson-sidebar">
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
