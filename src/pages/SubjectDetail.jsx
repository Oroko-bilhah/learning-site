import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import '../App.css'

const subjectContent = {
  mathematics: {
    name: 'Mathematics',
    icon: '∑',
    description:
      'Build your understanding through clear notes, worked examples and practice.',
    topics: [
      {
        id: 1,
        title: 'Algebra and Expressions',
        description: 'Review algebraic expressions and equations.',
        lessons: [
          'Introduction to Algebra',
          'Simplifying Expressions',
          'Solving Linear Equations',
        ],
      },
      {
        id: 2,
        title: 'Functions and Graphs',
        description: 'Understand relationships between variables.',
        lessons: [
          'Introduction to Functions',
          'Drawing Graphs',
          'Interpreting Graphs',
        ],
      },
      {
        id: 3,
        title: 'Geometry',
        description: 'Explore shapes, angles and geometric reasoning.',
        lessons: [
          'Angles and Lines',
          'Properties of Triangles',
          'Geometric Constructions',
        ],
      },
    ],
  },
  english: {
    name: 'English',
    icon: 'Aa',
    description:
      'Strengthen your language skills through reading, writing and practice.',
    topics: [
      {
        id: 1,
        title: 'Grammar',
        description: 'Build a strong foundation in English grammar.',
        lessons: [
          'Parts of Speech',
          'Sentence Structure',
          'Subject-Verb Agreement',
        ],
      },
      {
        id: 2,
        title: 'Comprehension',
        description: 'Improve your understanding of written texts.',
        lessons: [
          'Reading for Main Ideas',
          'Making Inferences',
          'Summarising Texts',
        ],
      },
      {
        id: 3,
        title: 'Writing Skills',
        description: 'Develop clear and effective written communication.',
        lessons: [
          'Paragraph Writing',
          'Essay Structure',
          'Editing and Proofreading',
        ],
      },
    ],
  },
  biology: {
    name: 'Biology',
    icon: '♧',
    description:
      'Discover living organisms, life processes and the world around you.',
    topics: [
      {
        id: 1,
        title: 'Cells',
        description: 'Learn about the basic units of life.',
        lessons: [
          'Introduction to Cells',
          'Cell Structure',
          'Plant and Animal Cells',
        ],
      },
      {
        id: 2,
        title: 'Nutrition',
        description: 'Explore how organisms obtain and use nutrients.',
        lessons: [
          'Introduction to Nutrition',
          'Photosynthesis',
          'Human Nutrition',
        ],
      },
      {
        id: 3,
        title: 'Ecology',
        description: 'Understand organisms and their environments.',
        lessons: [
          'Ecosystems',
          'Food Chains and Food Webs',
          'Environmental Conservation',
        ],
      },
    ],
  },
  chemistry: {
    name: 'Chemistry',
    icon: '⚗',
    description:
      'Understand matter, chemical changes and the principles behind reactions.',
    topics: [
      {
        id: 1,
        title: 'Matter and Particles',
        description: 'Explore the nature and properties of matter.',
        lessons: [
          'States of Matter',
          'Particle Theory',
          'Physical and Chemical Changes',
        ],
      },
      {
        id: 2,
        title: 'Elements and Compounds',
        description: 'Learn how substances are classified and combined.',
        lessons: [
          'Elements and Symbols',
          'Compounds and Mixtures',
          'Introduction to the Periodic Table',
        ],
      },
      {
        id: 3,
        title: 'Chemical Reactions',
        description: 'Explore how substances react and change.',
        lessons: [
          'Introduction to Reactions',
          'Word Equations',
          'Conservation of Mass',
        ],
      },
    ],
  },
}

export default function SubjectDetail() {
  const { gradeId, subjectName } = useParams()
  const [expandedTopic, setExpandedTopic] = useState(1)

  const subject = subjectContent[subjectName?.toLowerCase()]
  const gradeName =
    gradeId === 'form-3'
      ? 'Form 3'
      : gradeId === 'grade-10'
        ? 'Grade 10'
        : 'Selected grade'

  if (!subject) {
    return (
      <main className="subject-detail-page">
        <div className="subject-not-found">
          <span className="eyebrow">SUBJECT NOT FOUND</span>
          <h1>Let's find your subject.</h1>
          <p>
            This subject doesn't have a learning page yet.
            Choose another subject to continue exploring.
          </p>
          <Link to="/subjects" className="primary-button">
            Browse subjects →
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="subject-detail-page">
      <nav className="detail-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/subjects">Subjects</Link>
        <span>/</span>
        <span>{subject.name}</span>
      </nav>

      <section className="subject-detail-hero">
        <div className="subject-detail-icon">{subject.icon}</div>

        <span className="eyebrow">{gradeName} LEARNING</span>
        <h1>{subject.name}</h1>
        <p>{subject.description}</p>

        <div className="subject-detail-meta">
          <span>{subject.topics.length} topics</span>
          <span>
            {subject.topics.reduce(
              (total, topic) => total + topic.lessons.length,
              0
            )}{' '}
            lessons
          </span>
        </div>
      </section>

      <section className="topic-list-section">
        <div className="section-heading">
          <span className="eyebrow">YOUR LEARNING PATH</span>
          <h2>Topics and lessons</h2>
          <p>Choose a topic to see the lessons inside it.</p>
        </div>

        <div className="topic-list">
          {subject.topics.map((topic, index) => {
            const isExpanded = expandedTopic === topic.id

            return (
              <article className="topic-card" key={topic.id}>
                <button
                  type="button"
                  className="topic-toggle"
                  aria-expanded={isExpanded}
                  onClick={() =>
                    setExpandedTopic(isExpanded ? null : topic.id)
                  }
                >
                  <span className="topic-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="topic-heading">
                    <strong>{topic.title}</strong>
                    <span>{topic.description}</span>
                  </span>

                  <span className="topic-lesson-count">
                    {topic.lessons.length} lessons
                  </span>

                  <span className="topic-chevron">
                    {isExpanded ? '−' : '+'}
                  </span>
                </button>

                {isExpanded && (
                  <div className="topic-lessons">
                    {topic.lessons.map((lesson, lessonIndex) => (
                      <div className="topic-lesson" key={lesson}>
                        <span className="lesson-number">
                          {String(lessonIndex + 1).padStart(2, '0')}
                        </span>

<Link
  className="topic-lesson-link"
  to={`/subjects/${gradeId}/${subjectName}/lessons/${lesson
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`}
>
  <span>{lesson}</span>
  <span className="lesson-status">Open lesson →</span>
</Link>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
