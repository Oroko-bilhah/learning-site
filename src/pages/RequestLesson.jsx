import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { gradeOptions } from '../curriculumLevels'
import { contactEmail, whatsappNumber } from '../contactInfo'
import '../App.css'

function localDateTimeMinimum() {
  const now = new Date()
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
  return now.toISOString().slice(0, 16)
}

export default function RequestLesson() {
  const [params] = useSearchParams()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [gradeId, setGradeId] = useState(params.get('gradeId') || '')
  const [subject, setSubject] = useState(params.get('subject') || '')
  const [topic, setTopic] = useState(params.get('topic') || '')
  const [preferredTime, setPreferredTime] = useState('')
  const [details, setDetails] = useState('')

  function buildRequest() {
    const grade = gradeOptions.find((item) => item.id === gradeId)?.name || gradeId
    return [
      'Hello, I would like to request or schedule a lesson with ElimuNest.',
      '',
      `Student name: ${name.trim()}`,
      `Reply phone/WhatsApp: ${phone.trim()}`,
      `Grade/Form: ${grade}`,
      `Subject: ${subject.trim()}`,
      `Topic: ${topic.trim()}`,
      `Preferred date and time: ${new Date(preferredTime).toLocaleString()}`,
      details.trim() ? `Additional details: ${details.trim()}` : '',
      '',
      'Please let me know if this time is available or suggest another time.',
    ].filter(Boolean).join('\n')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const request = buildRequest()

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(request)}`, '_blank', 'noopener,noreferrer')
  }

  function handleEmail() {
    const form = document.getElementById('lesson-request-form')
    if (!form?.reportValidity()) return
    const subjectLine = `Lesson request: ${subject.trim()} - ${topic.trim()}`
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(buildRequest())}`
  }

  return (
    <main className="lesson-request-page">
      <header className="lesson-request-heading">
        <span className="eyebrow">PERSONAL LESSONS</span>
        <h1>Request a lesson</h1>
        <p>Tell us what you would like help with and when you are available. We will open WhatsApp with your request ready to send.</p>
      </header>

      <form id="lesson-request-form" className="lesson-request-form" onSubmit={handleSubmit}>
        <label htmlFor="request-name">Student name</label>
        <input id="request-name" autoComplete="name" maxLength={100} required value={name} onChange={(event) => setName(event.target.value)} />

        <label htmlFor="request-phone">Your phone/WhatsApp number</label>
        <input id="request-phone" type="tel" autoComplete="tel" maxLength={24} required placeholder="e.g. 07... or +254..." value={phone} onChange={(event) => setPhone(event.target.value)} />

        <label htmlFor="request-grade">Grade or Form</label>
        <select id="request-grade" required value={gradeId} onChange={(event) => setGradeId(event.target.value)}>
          <option value="">Choose your grade</option>
          {gradeOptions.map((grade) => <option value={grade.id} key={grade.id}>{grade.name}</option>)}
        </select>

        <label htmlFor="request-subject">Subject or learning area</label>
        <input id="request-subject" maxLength={100} required value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="e.g. Mathematics" />

        <label htmlFor="request-topic">Topic you want help with</label>
        <input id="request-topic" maxLength={150} required value={topic} onChange={(event) => setTopic(event.target.value)} placeholder="e.g. Linear equations" />

        <label htmlFor="request-time">Preferred date and time</label>
        <input id="request-time" type="datetime-local" min={localDateTimeMinimum()} required value={preferredTime} onChange={(event) => setPreferredTime(event.target.value)} />

        <label htmlFor="request-details">Anything else the teacher should know <span>(optional)</span></label>
        <textarea id="request-details" rows={4} maxLength={1000} value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Tell us what you are finding difficult or whether you prefer online or in-person learning." />

        <div className="lesson-request-actions">
          <button className="primary-button" type="submit">Continue to WhatsApp</button>
          <button className="secondary-button" type="button" onClick={handleEmail}>Send by email</button>
        </div>
        <p className="lesson-request-note">Your request is not stored on this website. WhatsApp or your email app opens with the details ready for you to send.</p>
      </form>
      <p className="subscription-back"><Link to="/subjects">Back to subjects</Link></p>
    </main>
  )
}
