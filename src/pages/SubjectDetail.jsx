import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { listPublishedLessons } from '../backend'
import { getGradeName } from '../curriculumLevels'
import { getSubject } from '../data/curriculumData.js'
import { scopedStorageKey } from '../auth'
import '../App.css'

function readCompletedLessonSlugs() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(scopedStorageKey('elimuNestCompletedLessons')) || '[]'
    )
    return new Set(Array.isArray(saved) ? saved : [])
  } catch {
    return new Set()
  }
}

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

function createLearningArea(subjectSlug, gradeId) {
  const normalizedSlug = decodeURIComponent(subjectSlug).toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const name = decodeURIComponent(subjectSlug)
    .split('-')
    .map((word) => word.toUpperCase() === 'CRE' || word.toUpperCase() === 'IRE' || word.toUpperCase() === 'HRE'
      ? word.toUpperCase()
      : word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  const isLowerPrimary = ['grade-1', 'grade-2', 'grade-3'].includes(gradeId)
  const topicsByArea = {
    mathematics: ['Numbers and counting', 'Operations and patterns', 'Shapes and measurement'],
    'english-activities': ['Listening and speaking', 'Reading together', 'Early writing'],
    english: ['Listening and speaking', 'Reading and comprehension', 'Writing and grammar'],
    kiswahili: ['Kusikiliza na kuzungumza', 'Kusoma', 'Kuandika'],
    'environmental-activities': ['Myself and my family', 'Our school and community', 'Plants, animals and the environment'],
    'science-technology': ['Living things', 'Materials and forces', 'Health and environment'],
    'integrated-science': ['Life and living things', 'Matter and energy', 'Science in the environment'],
    'social-studies': ['People and relationships', 'Places and maps', 'Citizenship and community'],
    'creative-activities': ['Exploring materials', 'Making and creating', 'Sharing creative work'],
    'creative-arts': ['Art and design', 'Music and movement', 'Creative performance'],
  }
  const topicTitles = topicsByArea[subjectSlug] || [
    `${name} foundations`,
    `${name} skills and practice`,
    `Using ${name.toLowerCase()} in daily life`,
  ]
  return {
    name,
    icon: '✦',
    description: `${getGradeName(gradeId)} learning activities in ${name}, with examples connected to the Kenyan curriculum.`,
    topics: topicTitles.map((title, index) => ({
      id: index + 1,
      title,
      description: `Build ${isLowerPrimary ? 'foundational' : 'subject'} knowledge and practise ${title.toLowerCase()}.`,
      lessons: [`Introduction to ${title}`, `Practising ${title}`, `Applying ${title}`],
    })),
  }
}

export default function SubjectDetail() {
  const { gradeId, subjectName } = useParams()
  const [expandedTopic, setExpandedTopic] = useState(1)
  const [teacherLessons, setTeacherLessons] = useState([])
  const [serverTopics, setServerTopics] = useState(null)
  const [completedLessons, setCompletedLessons] = useState(
    readCompletedLessonSlugs
  )

  useEffect(() => {
    let active = true
    const refreshLessons = async () => {
      const savedLessons = await listPublishedLessons(gradeId)
      if (!active) return
      setTeacherLessons(savedLessons)
      setCompletedLessons(readCompletedLessonSlugs())
    }
    refreshLessons().catch(() => setTeacherLessons([]))
    window.addEventListener('storage', refreshLessons)
    window.addEventListener('elimu-content-change', refreshLessons)
    return () => {
      active = false
      window.removeEventListener('storage', refreshLessons)
      window.removeEventListener('elimu-content-change', refreshLessons)
    }
  }, [gradeId])

  useEffect(() => {
    let active = true
    const params = new URLSearchParams({ gradeId, subjectName })
    fetch(`/api/subject-outline?${params}`)
      .then((response) => response.ok ? response.json() : null)
      .then((data) => { if (active && data?.topics?.length) setServerTopics(data.topics) })
      .catch(() => {})
    return () => { active = false }
  }, [gradeId, subjectName])

  const isLowerPrimary = ['grade-1', 'grade-2', 'grade-3'].includes(gradeId)
  const isIntermediateGrade = /^grade-[4-9]$/.test(gradeId)
  const grade10Subject = ['grade-10', 'grade-11'].includes(gradeId)
    ? getSubject(gradeId, subjectName)
    : null
  const baseSubject = grade10Subject || ((isLowerPrimary || isIntermediateGrade)
    ? createLearningArea(subjectName || '', gradeId)
    : subjectContent[subjectName?.toLowerCase()]) || createLearningArea(subjectName || '', gradeId)
  const subject = serverTopics ? { ...baseSubject, topics: serverTopics } : baseSubject
  const gradeName = getGradeName(gradeId)

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

  const publishedLessons = teacherLessons.filter(
    (lesson) =>
      lesson.status === 'published' &&
      lesson.gradeId === gradeId &&
      lesson.subject.toLowerCase() === subject.name.toLowerCase()
  )

  const normalizedTopic = (topic) => topic.trim().toLowerCase()
  const visibleTopics = subject.topics.map((topic) => {
    const matchingLessons = publishedLessons.filter(
      (lesson) => normalizedTopic(lesson.topic) === normalizedTopic(topic.title)
    )

    return {
      ...topic,
      lessons: [
        ...topic.lessons.map((title) => ({
          title,
          slug: title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, ''),
          available: true,
        })),
        ...matchingLessons.map((lesson) => ({
          title: lesson.title,
          slug: lesson.id,
          available: true,
        })),
      ],
    }
  })

  const existingTopicNames = new Set(
    subject.topics.map((topic) => normalizedTopic(topic.title))
  )
  const additionalTopics = [
    ...new Set(
      publishedLessons
        .map((lesson) => lesson.topic.trim())
        .filter((topic) => !existingTopicNames.has(normalizedTopic(topic)))
    ),
  ].map((topic, index) => ({
    id: `teacher-topic-${index}`,
    title: topic,
    description: 'Teacher-created learning material.',
    lessons: publishedLessons
      .filter((lesson) => normalizedTopic(lesson.topic) === normalizedTopic(topic))
      .map((lesson) => ({
        title: lesson.title,
        slug: lesson.id,
        available: true,
      })),
  }))
  const topicsToShow = [...visibleTopics, ...additionalTopics]
  const availableLessonSlugs = topicsToShow.flatMap((topic) =>
    topic.lessons
      .filter((lesson) => lesson.available)
      .map((lesson) => lesson.slug)
  )
  const completedCount = availableLessonSlugs.filter((slug) =>
    completedLessons.has(slug)
  ).length
  const completionPercent = availableLessonSlugs.length
    ? Math.round((completedCount / availableLessonSlugs.length) * 100)
    : 0

  return (
    <main className={`subject-detail-page${isLowerPrimary ? ' lower-primary-page' : ''}`}>
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
          <span>{topicsToShow.length} topics</span>
          <span>{availableLessonSlugs.length} lessons ready</span>
        </div>
        <div className="subject-learning-progress">
          <div className="subject-learning-progress-label">
            <span>Your progress</span>
            <strong>
              {completedCount} of {availableLessonSlugs.length} ready lessons
            </strong>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label={`${subject.name} learning progress`}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={completionPercent}
          >
            <div
              className="progress-fill"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
        </div>
      </section>

      <section className="topic-list-section">
        <div className="section-heading">
          <span className="eyebrow">YOUR LEARNING PATH</span>
          <h2>Topics and lessons</h2>
          <p>Choose a topic to see the lessons inside it.</p>
        </div>

        <div className="topic-list">
          {topicsToShow.map((topic, index) => {
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
                      <div className="topic-lesson" key={lesson.slug}>
                        <span className="lesson-number">
                          {String(lessonIndex + 1).padStart(2, '0')}
                        </span>

                        {lesson.available ? (
                          <Link
                            className={`topic-lesson-link ${
                              completedLessons.has(lesson.slug)
                                ? 'completed'
                                : ''
                            }`}
                            aria-label={`${lesson.title}${
                              completedLessons.has(lesson.slug)
                                ? ', completed'
                                : ', ready to start'
                            }`}
                            to={`/subjects/${gradeId}/${subjectName}/lessons/${lesson.slug}`}
                          >
                            <span>{lesson.title}</span>
                            <span className="lesson-status">
                              {completedLessons.has(lesson.slug)
                                ? 'Completed'
                                : 'Start lesson'}
                            </span>
                          </Link>
                        ) : (
                          <div className="topic-lesson-link unavailable">
                            <span>{lesson.title}</span>
                            <span className="lesson-status">Coming soon</span>
                          </div>
                        )}
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
