import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  readTeacherLessons,
  writeTeacherLessons,
  readTeacherClasses,
  writeTeacherClasses,
  readTeacherAssessments,
  writeTeacherAssessments,
} from '../teacherContent'
import { gradeOptions } from '../curriculumLevels'
import { getSubjectsByGrade } from '../data/curriculumData.js'
import '../App.css'

const getSubjectOptions = (gradeId) => [
  ...new Set(getSubjectsByGrade(gradeId).map((subject) => subject.name)),
]

function updateGradeSelection(current, gradeId) {
  const subjects = getSubjectOptions(gradeId)
  return {
    ...current,
    gradeId,
    subject: subjects.includes(current.subject) ? current.subject : subjects[0],
  }
}

function createQuestion() {
  return {
    question: '',
    options: ['', '', '', ''],
    correctOption: 0,
    explanation: '',
  }
}

function createContentSection(topic = '', content = '') {
  return { topic, content }
}

function createLesson() {
  return {
    id: '',
    title: '',
    subject: 'Mathematics',
    gradeId: 'form-3',
    topic: '',
    duration: '10',
    objectivesText: '',
    contentSections: [createContentSection()],
    questions: [createQuestion()],
  }
}

function createLessonId() {
  return (
    globalThis.crypto?.randomUUID?.() ||
    `lesson-${Date.now()}-${Math.random().toString(36).slice(2)}`
  )
}

function toEditorLesson(lesson) {
  return {
    ...lesson,
    objectivesText: lesson.objectives.join('\n'),
    contentSections: lesson.contentSections?.length
      ? lesson.contentSections
      : [createContentSection(lesson.topic, lesson.content || '')],
    questions: lesson.questions.length
      ? lesson.questions
      : [createQuestion()],
  }
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function canPublish(lesson) {
  const durationMinutes = Number.parseInt(lesson.duration, 10)

  return Boolean(
    lesson.title.trim() &&
      lesson.topic.trim() &&
      durationMinutes >= 1 &&
      durationMinutes <= 600 &&
      (lesson.contentSections?.some(
        (section) => section.topic.trim() && section.content.trim()
      ) || lesson.content?.trim()) &&
      lesson.objectives.length &&
      lesson.questions.length &&
      lesson.questions.every(
        (question) =>
          question.question.trim() &&
          question.options.every((option) => option.trim()) &&
          question.explanation.trim()
      )
  )
}

function Teacher() {
  const [lessons, setLessons] = useState(readTeacherLessons)
  const [classes, setClasses] = useState(readTeacherClasses)
  const [assessments, setAssessments] = useState(readTeacherAssessments)
  const [classForm, setClassForm] = useState(null)
  const [assessmentForm, setAssessmentForm] = useState(null)
  const [form, setForm] = useState(null)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  function beginCreate() {
    setForm(createLesson())
    setError('')
    setNotice('')
  }

  function beginEdit(lesson) {
    setForm(toEditorLesson(lesson))
    setError('')
    setNotice('')
  }

  function updateQuestion(index, field, value) {
    setForm((current) => ({
      ...current,
      questions: current.questions.map((question, questionIndex) =>
        questionIndex === index
          ? { ...question, [field]: value }
          : question
      ),
    }))
  }

  function updateOption(questionIndex, optionIndex, value) {
    setForm((current) => ({
      ...current,
      questions: current.questions.map((question, index) =>
        index === questionIndex
          ? {
              ...question,
              options: question.options.map((option, itemIndex) =>
                itemIndex === optionIndex ? value : option
              ),
            }
          : question
      ),
    }))
  }

  function updateContentSection(index, field, value) {
    setForm((current) => ({
      ...current,
      contentSections: current.contentSections.map((section, sectionIndex) =>
        sectionIndex === index ? { ...section, [field]: value } : section
      ),
    }))
  }

  function saveLesson(event) {
    event.preventDefault()
    setError('')
    setNotice('')

    const status = event.nativeEvent.submitter?.value || 'draft'
    const objectives = form.objectivesText
      .split('\n')
      .map((objective) => objective.trim())
      .filter(Boolean)
    const questions = form.questions.map((question) => ({
      ...question,
      question: question.question.trim(),
      options: question.options.map((option) => option.trim()),
      explanation: question.explanation.trim(),
    }))
    const contentSections = form.contentSections.map((section) => ({
      topic: section.topic.trim(),
      content: section.content.trim(),
    })).filter((section) => section.topic && section.content)
    const content = contentSections.map((section) => section.content).join('\n\n')

    if (
      status === 'published' &&
      !canPublish({
        ...form,
        objectives,
        contentSections,
        questions,
      })
    ) {
      setError(
        'Complete the lesson title, topic, content, at least one objective, and a quiz question with four options and an explanation before publishing.'
      )
      return
    }

    const grade = gradeOptions.find((option) => option.id === form.gradeId)
    const savedLesson = {
      id: form.id || createLessonId(),
      title: form.title.trim(),
      subject: form.subject,
      gradeId: form.gradeId,
      grade: grade.name,
      topic: form.topic.trim(),
      duration: form.duration.trim(),
      objectives,
      content,
      contentSections,
      questions: questions.map((question) => ({
        ...question,
        answer: question.options[question.correctOption],
      })),
      status,
      updatedAt: new Date().toISOString(),
      createdAt:
        lessons.find((lesson) => lesson.id === form.id)?.createdAt ||
        new Date().toISOString(),
    }

    const nextLessons = form.id
      ? lessons.map((lesson) =>
          lesson.id === form.id ? savedLesson : lesson
        )
      : [savedLesson, ...lessons]

    try {
      writeTeacherLessons(nextLessons)
      setLessons(nextLessons)
      setForm(null)
      setNotice(
        status === 'published'
          ? 'Lesson published and available to students.'
          : 'Draft saved.'
      )
    } catch {
      setError('Unable to save this lesson in browser storage.')
    }
  }

  function changeStatus(lesson, status) {
    if (status === 'published' && !canPublish(lesson)) {
      setError(
        'Edit this draft and complete its lesson content, learning objectives, and quiz before publishing.'
      )
      setNotice('')
      return
    }

    const nextLessons = lessons.map((item) =>
      item.id === lesson.id
        ? { ...item, status, updatedAt: new Date().toISOString() }
        : item
    )

    try {
      writeTeacherLessons(nextLessons)
      setLessons(nextLessons)
      setNotice(
        status === 'published'
          ? `"${lesson.title}" is now published.`
          : `"${lesson.title}" has been moved to drafts.`
      )
      setError('')
    } catch {
      setError('Unable to update this lesson in browser storage.')
    }
  }

  function deleteLesson(lesson) {
    const nextLessons = lessons.filter((item) => item.id !== lesson.id)

    try {
      writeTeacherLessons(nextLessons)
      setLessons(nextLessons)
      setNotice(`"${lesson.title}" was deleted.`)
      setError('')
    } catch {
      setError('Unable to delete this lesson from browser storage.')
    }
  }

  function saveClass(event) {
    event.preventDefault()
    const savedClass = {
      ...classForm,
      id: createLessonId(),
      title: classForm.title.trim(),
      subject: classForm.subject,
      grade: gradeOptions.find((grade) => grade.id === classForm.gradeId).name,
      availability: classForm.availability.trim(),
      meetingLink: classForm.meetingLink.trim(),
    }
    const nextClasses = [...classes, savedClass].sort((a, b) =>
      (a.startsAt || a.availability).localeCompare(b.startsAt || b.availability)
    )
    try {
      writeTeacherClasses(nextClasses)
      setClasses(nextClasses)
      setClassForm(null)
      setNotice('Class schedule saved and shown in the student dashboard.')
      setError('')
    } catch {
      setError('Unable to save this class schedule in browser storage.')
    }
  }

  function saveAssessment(event) {
    event.preventDefault()
    const savedAssessment = {
      ...assessmentForm,
      id: createLessonId(),
      title: assessmentForm.title.trim(),
      instructions: assessmentForm.instructions.trim(),
      questions: assessmentForm.questionsText
        .split('\n')
        .map((question) => question.trim())
        .filter(Boolean),
      grade: gradeOptions.find((grade) => grade.id === assessmentForm.gradeId).name,
    }
    const nextAssessments = [...assessments, savedAssessment].sort((a, b) =>
      a.deadline.localeCompare(b.deadline)
    )
    try {
      writeTeacherAssessments(nextAssessments)
      setAssessments(nextAssessments)
      setAssessmentForm(null)
      setNotice('Assessment assigned with a deadline and shown in the student dashboard.')
      setError('')
    } catch {
      setError('Unable to save this assessment in browser storage.')
    }
  }

  function deleteClass(item) {
    const nextClasses = classes.filter((entry) => entry.id !== item.id)
    writeTeacherClasses(nextClasses)
    setClasses(nextClasses)
    setNotice(`Class "${item.title}" removed from the schedule.`)
  }

  function deleteAssessment(item) {
    const nextAssessments = assessments.filter((entry) => entry.id !== item.id)
    writeTeacherAssessments(nextAssessments)
    setAssessments(nextAssessments)
    setNotice(`Assessment "${item.title}" removed.`)
  }

  return (
    <main className="teacher-page">
      <header className="teacher-header">
        <div>
          <p className="eyebrow">TEACHER WORKSPACE</p>
          <h1>Manage learning content</h1>
          <p>Create lessons, schedule flexible online or in-person classes, and set deadline-based assessments.</p>
        </div>
        <button
          className="teacher-primary-button"
          type="button"
          onClick={beginCreate}
        >
          Create lesson
        </button>
      </header>

      <div className="teacher-summary" aria-label="Content summary">
        <div>
          <strong>{lessons.length}</strong>
          <span>Total lessons</span>
        </div>
        <div>
          <strong>{lessons.filter((lesson) => lesson.status === 'draft').length}</strong>
          <span>Drafts</span>
        </div>
        <div>
          <strong>
            {lessons.filter((lesson) => lesson.status === 'published').length}
          </strong>
          <span>Published</span>
        </div>
      </div>

      <section className="teacher-library teacher-activity-tools">
        <div className="teacher-section-heading">
          <div>
            <p className="eyebrow">LIVE LEARNING</p>
            <h2>Classes and schedules</h2>
            <p>Set a fixed class time or offer a flexible time window. Online classes can include a meeting link.</p>
          </div>
          <button
            className="teacher-primary-button"
            type="button"
            onClick={() => {
              setClassForm({ title: '', subject: 'Mathematics', gradeId: 'form-3', startsAt: '', flexible: false, availability: '', mode: 'Online', meetingLink: '' })
              setAssessmentForm(null)
              setNotice('')
              setError('')
            }}
          >
            Schedule a class
          </button>
        </div>

        {classForm && (
          <form className="teacher-form activity-form" onSubmit={saveClass}>
            <div className="teacher-field-grid">
              <label className="teacher-field teacher-field-wide">Class title
                <input required maxLength={120} value={classForm.title} onChange={(event) => setClassForm({ ...classForm, title: event.target.value })} />
              </label>
              <label className="teacher-field">Subject
                <select value={classForm.subject} onChange={(event) => setClassForm({ ...classForm, subject: event.target.value })}>{getSubjectOptions(classForm.gradeId).map((subject) => <option key={subject}>{subject}</option>)}</select>
              </label>
              <label className="teacher-field">Grade
                <select value={classForm.gradeId} onChange={(event) => setClassForm(updateGradeSelection(classForm, event.target.value))}>{gradeOptions.map((grade) => <option key={grade.id} value={grade.id}>{grade.name}</option>)}</select>
              </label>
              <label className="teacher-field">Class format
                <select value={classForm.mode} onChange={(event) => setClassForm({ ...classForm, mode: event.target.value })}><option>Online</option><option>In person</option></select>
              </label>
              <label className="teacher-field teacher-flexible-option">
                <input type="checkbox" checked={classForm.flexible} onChange={(event) => setClassForm({ ...classForm, flexible: event.target.checked })} /> Offer flexible scheduling
              </label>
              {classForm.flexible ? (
                <label className="teacher-field teacher-field-wide">Available times / scheduling note
                  <input required maxLength={160} placeholder="For example: Weekdays after 4 pm; agree a time with the teacher" value={classForm.availability} onChange={(event) => setClassForm({ ...classForm, availability: event.target.value })} />
                </label>
              ) : (
                <label className="teacher-field teacher-field-wide">Class date and time
                  <input required type="datetime-local" value={classForm.startsAt} onChange={(event) => setClassForm({ ...classForm, startsAt: event.target.value })} />
                </label>
              )}
              {classForm.mode === 'Online' && (
                <label className="teacher-field teacher-field-wide">Online meeting link
                  <input type="url" placeholder="https://..." value={classForm.meetingLink} onChange={(event) => setClassForm({ ...classForm, meetingLink: event.target.value })} />
                </label>
              )}
            </div>
            <div className="teacher-form-actions">
              <button className="teacher-secondary-button" type="button" onClick={() => setClassForm(null)}>Cancel</button>
              <button className="teacher-primary-button" type="submit">Save class</button>
            </div>
          </form>
        )}

        {classes.length ? (
          <div className="teacher-lesson-list">
            {classes.map((item) => (
              <article className="teacher-lesson-card" key={item.id}>
                <div className="teacher-lesson-information"><span className="teacher-status published">{item.mode}{item.flexible ? ' · Flexible' : ''}</span><h3>{item.title}</h3><p>{item.grade} · {item.subject} · {item.flexible ? item.availability : new Date(item.startsAt).toLocaleString()}</p>{item.meetingLink && <a href={item.meetingLink} target="_blank" rel="noreferrer" className="teacher-text-button">Online class link</a>}</div>
                <button className="teacher-text-button danger" type="button" onClick={() => deleteClass(item)}>Remove</button>
              </article>
            ))}
          </div>
        ) : <p className="teacher-storage-note">No classes scheduled yet.</p>}
      </section>

      <section className="teacher-library teacher-activity-tools">
        <div className="teacher-section-heading">
          <div>
            <p className="eyebrow">ASSIGNED WORK</p>
            <h2>Quizzes and tests</h2>
            <p>These are separate assignments with deadlines, independent of lesson practice questions.</p>
          </div>
          <button
            className="teacher-primary-button"
            type="button"
            onClick={() => {
              setAssessmentForm({ title: '', type: 'Quiz', subject: 'Mathematics', gradeId: 'form-3', deadline: '', instructions: '', questionsText: '' })
              setClassForm(null)
              setNotice('')
              setError('')
            }}
          >
            Create assessment
          </button>
        </div>

        {assessmentForm && (
          <form className="teacher-form activity-form" onSubmit={saveAssessment}>
            <div className="teacher-field-grid">
              <label className="teacher-field teacher-field-wide">Assessment title
                <input required maxLength={120} value={assessmentForm.title} onChange={(event) => setAssessmentForm({ ...assessmentForm, title: event.target.value })} />
              </label>
              <label className="teacher-field">Assessment type
                <select value={assessmentForm.type} onChange={(event) => setAssessmentForm({ ...assessmentForm, type: event.target.value })}><option>Quiz</option><option>Test</option></select>
              </label>
              <label className="teacher-field">Subject
                <select value={assessmentForm.subject} onChange={(event) => setAssessmentForm({ ...assessmentForm, subject: event.target.value })}>{getSubjectOptions(assessmentForm.gradeId).map((subject) => <option key={subject}>{subject}</option>)}</select>
              </label>
              <label className="teacher-field">Grade
                <select value={assessmentForm.gradeId} onChange={(event) => setAssessmentForm(updateGradeSelection(assessmentForm, event.target.value))}>{gradeOptions.map((grade) => <option key={grade.id} value={grade.id}>{grade.name}</option>)}</select>
              </label>
              <label className="teacher-field">Deadline
                <input required type="datetime-local" value={assessmentForm.deadline} onChange={(event) => setAssessmentForm({ ...assessmentForm, deadline: event.target.value })} />
              </label>
              <label className="teacher-field teacher-field-wide">Instructions
                <textarea rows="3" placeholder="Tell learners what to do and how to submit." value={assessmentForm.instructions} onChange={(event) => setAssessmentForm({ ...assessmentForm, instructions: event.target.value })} />
              </label>
              <label className="teacher-field teacher-field-wide">Assessment questions (one per line)
                <textarea required rows="6" placeholder="Enter the questions for this quiz or test, one per line." value={assessmentForm.questionsText} onChange={(event) => setAssessmentForm({ ...assessmentForm, questionsText: event.target.value })} />
              </label>
            </div>
            <div className="teacher-form-actions">
              <button className="teacher-secondary-button" type="button" onClick={() => setAssessmentForm(null)}>Cancel</button>
              <button className="teacher-primary-button" type="submit">Assign assessment</button>
            </div>
          </form>
        )}

        {assessments.length ? (
          <div className="teacher-lesson-list">
            {assessments.map((item) => (
              <article className="teacher-lesson-card" key={item.id}>
                <div className="teacher-lesson-information"><span className="teacher-status draft">{item.type} · Due {new Date(item.deadline).toLocaleString()}</span><h3>{item.title}</h3><p>{item.grade} · {item.subject} · {item.questions.length} questions</p><span className="teacher-lesson-meta">{item.instructions}</span></div>
                <button className="teacher-text-button danger" type="button" onClick={() => deleteAssessment(item)}>Remove</button>
              </article>
            ))}
          </div>
        ) : <p className="teacher-storage-note">No separate quizzes or tests assigned yet.</p>}
      </section>

      {notice && <p className="teacher-message success" role="status">{notice}</p>}
      {error && <p className="teacher-message error" role="alert">{error}</p>}

      {form && (
        <section className="teacher-editor" aria-labelledby="teacher-editor-title">
          <div className="teacher-section-heading">
            <div>
              <p className="eyebrow">{form.id ? 'EDIT CONTENT' : 'NEW CONTENT'}</p>
              <h2 id="teacher-editor-title">
                {form.id ? 'Edit lesson' : 'Create a lesson'}
              </h2>
            </div>
            <button
              className="teacher-text-button"
              type="button"
              onClick={() => {
                setForm(null)
                setError('')
              }}
            >
              Cancel
            </button>
          </div>

          <form className="teacher-form" onSubmit={saveLesson} noValidate>
            <div className="teacher-field-grid">
              <label className="teacher-field teacher-field-wide">
                Lesson title
                <input
                  required
                  maxLength={120}
                  value={form.title}
                  onChange={(event) =>
                    setForm({ ...form, title: event.target.value })
                  }
                />
              </label>

              <label className="teacher-field">
                Subject
                <select
                  value={form.subject}
                  onChange={(event) =>
                    setForm({ ...form, subject: event.target.value })
                  }
                >
                  {getSubjectOptions(form.gradeId).map((subject) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
              </label>

              <label className="teacher-field">
                Grade
                <select
                  value={form.gradeId}
                  onChange={(event) =>
                    setForm(updateGradeSelection(form, event.target.value))
                  }
                >
                  {gradeOptions.map((grade) => (
                    <option key={grade.id} value={grade.id}>
                      {grade.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="teacher-field">
                Topic
                <input
                  required
                  maxLength={120}
                  value={form.topic}
                  onChange={(event) =>
                    setForm({ ...form, topic: event.target.value })
                  }
                />
              </label>

              <label className="teacher-field">
                Estimated duration (minutes)
                <input
                  type="number"
                  min="1"
                  max="600"
                  value={form.duration}
                  onChange={(event) =>
                    setForm({ ...form, duration: event.target.value })
                  }
                />
              </label>

              <label className="teacher-field teacher-field-wide">
                Learning objectives
                <textarea
                  required
                  rows="4"
                  placeholder="Enter one objective per line"
                  value={form.objectivesText}
                  onChange={(event) =>
                    setForm({ ...form, objectivesText: event.target.value })
                  }
                />
              </label>

            </div>

            <section className="teacher-quiz-editor teacher-content-editor">
              <div className="teacher-section-heading">
                <div>
                  <p className="eyebrow">LESSON MATERIAL</p>
                  <h3>Topic content</h3>
                  <p>Add a separate explanation for each topic or subtopic.</p>
                </div>
                <button
                  className="teacher-secondary-button"
                  type="button"
                  onClick={() => setForm({
                    ...form,
                    contentSections: [...form.contentSections, createContentSection()],
                  })}
                >
                  Add topic content
                </button>
              </div>
              {form.contentSections.map((section, index) => (
                <fieldset className="teacher-question" key={index}>
                  <legend>Content {index + 1}</legend>
                  <label className="teacher-field">
                    Topic or subtopic
                    <input
                      required
                      maxLength={120}
                      value={section.topic}
                      placeholder="For example: Identifying variables"
                      onChange={(event) => updateContentSection(index, 'topic', event.target.value)}
                    />
                  </label>
                  <label className="teacher-field">
                    Teaching content
                    <textarea
                      required
                      rows="6"
                      placeholder="Explain the ideas, give examples, or add instructions for this topic."
                      value={section.content}
                      onChange={(event) => updateContentSection(index, 'content', event.target.value)}
                    />
                  </label>
                  {form.contentSections.length > 1 && (
                    <button
                      className="teacher-text-button danger"
                      type="button"
                      onClick={() => setForm({
                        ...form,
                        contentSections: form.contentSections.filter((_, itemIndex) => itemIndex !== index),
                      })}
                    >
                      Remove content
                    </button>
                  )}
                </fieldset>
              ))}
            </section>

            <section className="teacher-quiz-editor">
              <div className="teacher-section-heading">
                <div>
                  <p className="eyebrow">ASSESSMENT</p>
                  <h3>Quiz questions</h3>
                </div>
                <button
                  className="teacher-secondary-button"
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      questions: [...form.questions, createQuestion()],
                    })
                  }
                >
                  Add question
                </button>
              </div>

              {form.questions.map((question, questionIndex) => (
                <fieldset className="teacher-question" key={questionIndex}>
                  <legend>Question {questionIndex + 1}</legend>
                  <label className="teacher-field">
                    Question text
                    <textarea
                      rows="2"
                      value={question.question}
                      onChange={(event) =>
                        updateQuestion(questionIndex, 'question', event.target.value)
                      }
                    />
                  </label>

                  <div className="teacher-options">
                    <span className="teacher-field-label">
                      Answer options - select the correct answer
                    </span>
                    {question.options.map((option, optionIndex) => (
                      <div className="teacher-option" key={optionIndex}>
                        <input
                          type="radio"
                          name={`correct-option-${questionIndex}`}
                          checked={question.correctOption === optionIndex}
                          onChange={() =>
                            updateQuestion(
                              questionIndex,
                              'correctOption',
                              optionIndex
                            )
                          }
                          aria-label={`Mark option ${optionIndex + 1} as correct`}
                        />
                        <input
                          aria-label={`Answer option ${optionIndex + 1}`}
                          value={option}
                          onChange={(event) =>
                            updateOption(
                              questionIndex,
                              optionIndex,
                              event.target.value
                            )
                          }
                        />
                      </div>
                    ))}
                  </div>

                  <label className="teacher-field">
                    Explanation
                    <textarea
                      rows="2"
                      value={question.explanation}
                      onChange={(event) =>
                        updateQuestion(
                          questionIndex,
                          'explanation',
                          event.target.value
                        )
                      }
                    />
                  </label>

                  {form.questions.length > 1 && (
                    <button
                      className="teacher-text-button danger"
                      type="button"
                      onClick={() =>
                        setForm({
                          ...form,
                          questions: form.questions.filter(
                            (_, index) => index !== questionIndex
                          ),
                        })
                      }
                    >
                      Remove question
                    </button>
                  )}
                </fieldset>
              ))}
            </section>

            <div className="teacher-form-actions">
              <button
                className="teacher-secondary-button"
                type="submit"
                value="draft"
              >
                Save draft
              </button>
              <button
                className="teacher-primary-button"
                type="submit"
                value="published"
              >
                Publish lesson
              </button>
            </div>
          </form>
        </section>
      )}

      <section className="teacher-library">
        <div className="teacher-section-heading">
          <div>
            <p className="eyebrow">CONTENT LIBRARY</p>
            <h2>Lessons</h2>
          </div>
        </div>

        {lessons.length === 0 ? (
          <div className="teacher-empty-state">
            <h3>No lessons yet</h3>
            <p>Create your first lesson to start building your content library.</p>
            <button
              className="teacher-primary-button"
              type="button"
              onClick={beginCreate}
            >
              Create lesson
            </button>
          </div>
        ) : (
          <div className="teacher-lesson-list">
            {lessons.map((lesson) => (
              <article className="teacher-lesson-card" key={lesson.id}>
                <div className="teacher-lesson-information">
                  <span className={`teacher-status ${lesson.status}`}>
                    {lesson.status}
                  </span>
                  <h3>{lesson.title}</h3>
                  <p>
                    {lesson.grade} / {lesson.subject} / {lesson.topic}
                  </p>
                  <span className="teacher-lesson-meta">
                    {lesson.questions.filter((question) => question.question).length} quiz questions
                    {' / '}
                    Updated {new Date(lesson.updatedAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="teacher-lesson-actions">
                  {lesson.status === 'published' && (
                    <Link
                      className="teacher-text-button"
                      to={`/subjects/${lesson.gradeId}/${slugify(
                        lesson.subject
                      )}/lessons/${lesson.id}`}
                    >
                      View lesson
                    </Link>
                  )}
                  <button
                    className="teacher-text-button"
                    type="button"
                    onClick={() => beginEdit(lesson)}
                  >
                    Edit
                  </button>
                  <button
                    className="teacher-text-button danger"
                    type="button"
                    onClick={() => deleteLesson(lesson)}
                  >
                    Delete
                  </button>
                  {lesson.status === 'draft' ? (
                    <button
                      className="teacher-secondary-button"
                      type="button"
                      onClick={() => changeStatus(lesson, 'published')}
                    >
                      Publish
                    </button>
                  ) : (
                    <button
                      className="teacher-secondary-button"
                      type="button"
                      onClick={() => changeStatus(lesson, 'draft')}
                    >
                      Unpublish
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <p className="teacher-storage-note">
        Teacher content is stored in this browser and is not shared with other devices.
      </p>
    </main>
  )
}

export default Teacher
