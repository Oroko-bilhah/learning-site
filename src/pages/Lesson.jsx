import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { readTeacherLessons } from '../teacherContent'
import { createCurriculumLesson } from '../curriculumLesson'
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
      {
        question: 'In the expression 5a + 2, which number is the coefficient?',
        options: ['5', 'a', '2', '5a'],
        answer: '5',
        explanation:
          'The coefficient is the number multiplying the variable. Here, 5 multiplies a.',
      },
      {
        question: 'How many terms are in 2x + 4?',
        options: ['1', '2', '3', '4'],
        answer: '2',
        explanation:
          'The terms are separated by plus or minus signs: 2x and 4.',
      },
      {
        question: 'Which expression means 6 more than a number n?',
        options: ['6n', 'n - 6', 'n + 6', 'n ÷ 6'],
        answer: 'n + 6',
        explanation:
          'More than means add, so add 6 to the number n.',
      },
      {
        question: 'If x = 3, what is the value of 2x + 1?',
        options: ['5', '6', '7', '8'],
        answer: '7',
        explanation:
          'Replace x with 3: 2 × 3 + 1 = 6 + 1 = 7.',
      },
      {
        question: 'Which expression means a number m divided by 4?',
        options: ['m + 4', '4m', 'm - 4', 'm ÷ 4'],
        answer: 'm ÷ 4',
        explanation:
          'Divided by 4 is written as m ÷ 4 (or m/4).',
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

  const authoredLesson = readTeacherLessons().find(
    (item) => item.id === lessonSlug && item.status === 'published'
  )
  const savedLesson = authoredLesson
    ? {
        ...authoredLesson,
        duration: `${authoredLesson.duration} minutes`,
        sections: authoredLesson.contentSections?.length
          ? authoredLesson.contentSections.map((section) => ({
              heading: section.topic,
              paragraphs: section.content
                .split(/\n\s*\n/)
                .map((paragraph) => paragraph.trim())
                .filter(Boolean),
            }))
          : [
              {
                heading: authoredLesson.topic,
                paragraphs: (authoredLesson.content || '')
                  .split(/\n\s*\n/)
                  .map((paragraph) => paragraph.trim())
                  .filter(Boolean),
              },
            ],
      }
    : null
  const curriculumLesson = createCurriculumLesson(
    gradeId,
    subjectName,
    lessonSlug
  )
  const lesson = lessons[lessonSlug] || savedLesson || curriculumLesson

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
              to={`/subjects/${gradeId}/${subjectName}`}
              className="secondary-button"
            >
              <LessonIcon name="arrowLeft" />
              Back to topics
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
