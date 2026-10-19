import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { gradeOptions, getLearningAreas } from '../curriculumLevels'
import '../App.css'

const form3Subjects = [
  {
    name: 'Mathematics',
    icon: '∑',
    color: 'blue',
    description: 'Practise mathematical concepts and problem-solving.',
  },
  {
    name: 'English',
    icon: 'Aa',
    color: 'gold',
    description: 'Develop grammar, comprehension and writing skills.',
  },
  {
    name: 'Kiswahili',
    icon: 'K',
    color: 'green',
    description: 'Build language, grammar and communication skills.',
  },
  {
    name: 'Biology',
    icon: '♧',
    color: 'green',
    description: 'Study living organisms and life processes.',
  },
  {
    name: 'Chemistry',
    icon: '⚗',
    color: 'orange',
    description: 'Learn about matter, reactions and experiments.',
  },
  {
    name: 'Physics',
    icon: 'ϟ',
    color: 'blue',
    description: 'Explore forces, energy, waves and electricity.',
  },
  {
    name: 'Geography',
    icon: '◎',
    color: 'gold',
    description: 'Explore environments, landscapes and human activities.',
  },
  {
    name: 'History and Government',
    icon: '⌛',
    color: 'orange',
    description: 'Understand historical events and government.',
  },
  {
    name: 'Business Studies',
    icon: '↗',
    color: 'blue',
    description: 'Learn about business, trade and entrepreneurship.',
  },
  {
    name: 'Computer Studies',
    icon: '⌘',
    color: 'green',
    description: 'Develop computing and information technology skills.',
  },
]

const grade10Pathways = [
  {
    id: 'all',
    name: 'All pathways',
    description: 'Browse learning areas across Senior School.',
  },
  {
    id: 'stem',
    name: 'STEM',
    description: 'Science, Technology, Engineering and Mathematics.',
  },
  {
    id: 'social-sciences',
    name: 'Social Sciences',
    description: 'Humanities, languages, business and social learning.',
  },
  {
    id: 'arts-sports',
    name: 'Arts & Sports Science',
    description: 'Creative arts, performance, physical education and sports.',
  },
]

const grade10Subjects = [
  {
    name: 'English',
    icon: 'Aa',
    color: 'gold',
    group: 'Core learning areas',
    pathways: ['stem', 'social-sciences', 'arts-sports'],
    description: 'Develop communication, comprehension and writing skills.',
  },
  {
    name: 'Kiswahili',
    icon: 'K',
    color: 'green',
    group: 'Core learning areas',
    pathways: ['stem', 'social-sciences', 'arts-sports'],
    description: 'Build Kiswahili language and communication skills.',
  },
  {
    name: 'Kenyan Sign Language',
    icon: 'KSL',
    color: 'blue',
    group: 'Core learning areas',
    pathways: ['stem', 'social-sciences', 'arts-sports'],
    description: 'Explore sign-language learning where applicable.',
  },
  {
    name: 'Community Service Learning',
    icon: '♡',
    color: 'green',
    group: 'Core learning areas',
    pathways: ['stem', 'social-sciences', 'arts-sports'],
    description: 'Connect learning with community needs and service.',
  },
  {
    name: 'Core Mathematics',
    icon: '∑',
    color: 'blue',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Develop mathematical reasoning and problem-solving.',
  },
  {
    name: 'Essential Mathematics',
    icon: '∑',
    color: 'blue',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Apply mathematics to practical and everyday situations.',
  },
  {
    name: 'Advanced Mathematics',
    icon: '∫',
    color: 'blue',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Explore advanced mathematical concepts where offered.',
  },
  {
    name: 'Biology',
    icon: '♧',
    color: 'green',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Study organisms, life processes and ecosystems.',
  },
  {
    name: 'Chemistry',
    icon: '⚗',
    color: 'orange',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Explore substances, chemical reactions and matter.',
  },
  {
    name: 'Physics',
    icon: 'ϟ',
    color: 'blue',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Learn about energy, forces, waves and electricity.',
  },
  {
    name: 'General Science',
    icon: '⚛',
    color: 'green',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Explore scientific ideas and their practical applications.',
  },
  {
    name: 'Agriculture',
    icon: '♧',
    color: 'green',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Learn about farming, food production and sustainability.',
  },
  {
    name: 'Computer Studies',
    icon: '⌘',
    color: 'blue',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Explore computing, programming and digital systems.',
  },
  {
    name: 'Home Science',
    icon: '⌂',
    color: 'gold',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Explore nutrition, home management and life skills.',
  },
  {
    name: 'Aviation',
    icon: '✈',
    color: 'blue',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Discover aviation concepts and related technologies.',
  },
  {
    name: 'Building Construction',
    icon: '⌂',
    color: 'orange',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Explore construction methods, materials and design.',
  },
  {
    name: 'Electricity',
    icon: 'ϟ',
    color: 'gold',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Learn about electrical systems and applications.',
  },
  {
    name: 'Metalwork',
    icon: '⚒',
    color: 'orange',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Explore metalworking tools, materials and techniques.',
  },
  {
    name: 'Power Mechanics',
    icon: '⚙',
    color: 'blue',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Study mechanical systems and power applications.',
  },
  {
    name: 'Wood Technology',
    icon: '⌁',
    color: 'gold',
    group: 'STEM',
    pathways: ['stem'],
    description: 'Develop woodworking and material-processing skills.',
  },
  {
    name: 'Literature in English',
    icon: '▤',
    color: 'gold',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Explore literary texts, interpretation and analysis.',
  },
  {
    name: 'Fasihi ya Kiswahili',
    icon: '▤',
    color: 'green',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Study Kiswahili literature and literary expression.',
  },
  {
    name: 'Indigenous Languages',
    icon: 'Aa',
    color: 'green',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Develop knowledge of indigenous languages and culture.',
  },
  {
    name: 'Arabic',
    icon: 'ع',
    color: 'gold',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Learn Arabic language and communication.',
  },
  {
    name: 'French',
    icon: 'Aa',
    color: 'blue',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Build French language and communication skills.',
  },
  {
    name: 'German',
    icon: 'Aa',
    color: 'orange',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Learn German vocabulary and communication.',
  },
  {
    name: 'Mandarin Chinese',
    icon: '文',
    color: 'red',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Explore Mandarin language and communication.',
  },
  {
    name: 'History and Citizenship',
    icon: '⌛',
    color: 'gold',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Explore history, citizenship and society.',
  },
  {
    name: 'Geography',
    icon: '◎',
    color: 'green',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Study places, environments and human activities.',
  },
  {
    name: 'Business Studies',
    icon: '↗',
    color: 'blue',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Explore business operations and entrepreneurship.',
  },
  {
    name: 'Christian Religious Education',
    icon: '✧',
    color: 'gold',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Study Christian beliefs, values and teachings.',
  },
  {
    name: 'Islamic Religious Education',
    icon: '☾',
    color: 'green',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Study Islamic beliefs, values and teachings.',
  },
  {
    name: 'Hindu Religious Education',
    icon: 'ॐ',
    color: 'orange',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    description: 'Explore Hindu teachings, traditions and values.',
  },
  {
    name: 'Sports and Recreation',
    icon: '⚽',
    color: 'green',
    group: 'Arts & Sports Science',
    pathways: ['arts-sports'],
    description: 'Develop sporting skills, fitness and recreation knowledge.',
  },
  {
    name: 'Music and Dance',
    icon: '♫',
    color: 'gold',
    group: 'Arts & Sports Science',
    pathways: ['arts-sports'],
    description: 'Explore musical performance, movement and creativity.',
  },
  {
    name: 'Theatre and Film',
    icon: '▣',
    color: 'orange',
    group: 'Arts & Sports Science',
    pathways: ['arts-sports'],
    description: 'Develop performance, storytelling and film skills.',
  },
  {
    name: 'Fine Arts',
    icon: '✎',
    color: 'blue',
    group: 'Arts & Sports Science',
    pathways: ['arts-sports'],
    description: 'Explore visual art, creative expression and design.',
  },
]

export default function Subjects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialGrade = gradeOptions.some((grade) => grade.id === searchParams.get('grade'))
    ? searchParams.get('grade')
    : 'grade-1'
  const [selectedGrade, setSelectedGrade] = useState(initialGrade)
  const [selectedPathway, setSelectedPathway] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const currentGrade = gradeOptions.find(
    (grade) => grade.id === selectedGrade
  )

  const isSeniorSchool = currentGrade?.stage === 'Senior School'
  const isEightFourFour = currentGrade?.stage === '8-4-4'
  const catalogSubjects = isSeniorSchool
    ? grade10Subjects
    : isEightFourFour
      ? form3Subjects
      : getLearningAreas(selectedGrade)
  const visibleSubjects = catalogSubjects.filter((subject) => {
    const matchesPathway = !isSeniorSchool ||
      selectedPathway === 'all' ||
      subject.pathways.includes(selectedPathway)
    return matchesPathway && subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  const subjectsToShow = visibleSubjects
  const groupedSubjects = isSeniorSchool
    ? ['Core learning areas', 'STEM', 'Social Sciences', 'Arts & Sports Science']
        .map((group) => ({
          name: group,
          subjects: visibleSubjects.filter((subject) => subject.group.toLowerCase() === group.toLowerCase()),
        }))
        .filter((group) => group.subjects.length > 0)
    : [{ name: currentGrade?.stage === '8-4-4' ? `${currentGrade.name} subjects` : `${currentGrade?.stage} learning areas`, subjects: visibleSubjects }]
        .filter((group) => group.subjects.length > 0)

  return (
    <main className={`subjects-page${['grade-1', 'grade-2', 'grade-3'].includes(selectedGrade) ? ' lower-primary-page' : ''}`}>
      <section className="subjects-page-header">
        <span className="eyebrow">YOUR LEARNING JOURNEY</span>
        <h1>Explore your subjects.</h1>
        <p>
          Find learning materials, explore topics and build your
          confidence one lesson at a time.
        </p>
      </section>

      <section className="subjects-grade-selector">
        <label htmlFor="grade-select">Choose your grade</label>

        <select
          id="grade-select"
          value={selectedGrade}
          onChange={(event) => {
            setSelectedGrade(event.target.value)
            setSearchParams({ grade: event.target.value })
            setSelectedPathway('all')
            setSearchTerm('')
          }}
        >
          {gradeOptions.map((grade) => (
            <option key={grade.id} value={grade.id}>
              {grade.name} — {grade.curriculum}
            </option>
          ))}
        </select>

        <p>{currentGrade?.description}</p>
      </section>

      {isSeniorSchool && (
        <section className="subjects-grade-selector">
          <label htmlFor="pathway-select">Explore a pathway</label>

          <select
            id="pathway-select"
            value={selectedPathway}
            onChange={(event) =>
              setSelectedPathway(event.target.value)
            }
          >
            {grade10Pathways.map((pathway) => (
              <option key={pathway.id} value={pathway.id}>
                {pathway.name}
              </option>
            ))}
          </select>

          <p>
            {grade10Pathways.find(
              (pathway) => pathway.id === selectedPathway
            )?.description}
          </p>
        </section>
      )}

      <section className="subjects-list-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{currentGrade?.curriculum}</span>
            <h2>{currentGrade?.name} learning areas</h2>
          </div>

          <span className="subject-count">
            {subjectsToShow.length} subjects
          </span>
        </div>

        <div className="subjects-search">
          <label htmlFor="subject-search">Find a subject</label>
          <input
            id="subject-search"
            type="search"
            placeholder="Search subjects..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        {groupedSubjects.length > 0 ? (
          groupedSubjects.map((group) => (
            <section className="subject-group" key={group.name}>
              <h3 className="subject-group-title">{group.name}</h3>

              <div className="subjects-grid">
                {group.subjects.map((subject) => (
                  <article className="subject-card" key={subject.name}>
                    <div className={`subject-icon ${subject.color}`}>
                      {subject.icon}
                    </div>

                    <h3>{subject.name}</h3>
                    <p>{subject.description}</p>

                    <Link
                      className="subject-link"
                      to={`/subjects/${selectedGrade}/${encodeURIComponent(
                        subject.name.toLowerCase()
                      )}`}
                    >
                      Explore subject <span>→</span>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p className="subjects-empty">
            No subjects match your search. Try another name.
          </p>
        )}
      </section>

      {isSeniorSchool && (
        <p className="subjects-disclaimer">
          This is a subject catalogue, not a prescribed subject combination.
          Available choices and requirements depend on the official curriculum
          and the learner's school. Check the{' '}
          <a
            href="https://kicd.ac.ke/cbc-materials/"
            target="_blank"
            rel="noreferrer"
          >
            KICD curriculum resources
          </a>{' '}
          when confirming subject requirements.
        </p>
      )}
    </main>
  )
}
