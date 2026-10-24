import { useState } from 'react'
import '../App.css'

const phoneNumber = '+254746468436'
const contactEmail = 'lawrencesagini663@gmail.com'
const whatsappNumber = phoneNumber.replace(/\D/g, '')

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function buildMessage() {
    return [
      `Hello ElimuNest, my name is ${name.trim()}.`,
      email.trim() ? `My email is ${email.trim()}.` : '',
      '',
      message.trim(),
    ].filter(Boolean).join('\n')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const text = buildMessage()

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  function handleEmail(event) {
    if (!event.currentTarget.form.reportValidity()) return
    const subject = `Message from ${name.trim()}`
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage())}`
  }

  return (
    <main className="contact-page">
      <header className="contact-heading">
        <span className="eyebrow">WE'RE HERE TO HELP</span>
        <h1>Contact ElimuNest</h1>
        <p>Have a question about learning or your account? Send us a message on WhatsApp.</p>
      </header>

      <div className="contact-layout">
        <section className="contact-details" aria-labelledby="contact-details-title">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2 id="contact-details-title">Talk to our team</h2>
          <p>Reach us by phone or WhatsApp. We'll be glad to hear from you.</p>
          <a className="contact-number" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          <a className="contact-whatsapp-link" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
            Open WhatsApp <span aria-hidden="true">&gt;</span>
          </a>
          <a className="contact-email-link" href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </section>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a message</h2>
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" autoComplete="name" required maxLength={100} value={name} onChange={(event) => setName(event.target.value)} />
          <label htmlFor="contact-email">Email address <span>(optional)</span></label>
          <input id="contact-email" type="email" autoComplete="email" maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} />
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" required rows={5} maxLength={2000} value={message} onChange={(event) => setMessage(event.target.value)} />
          <div className="contact-form-actions">
            <button className="primary-button" type="submit">Continue to WhatsApp <span aria-hidden="true">&gt;</span></button>
            <button className="secondary-button" type="button" onClick={handleEmail}>Send by email</button>
          </div>
          <p className="contact-form-note">Your message opens in WhatsApp for you to review and send. It isn't stored on this website.</p>
        </form>
      </div>
    </main>
  )
}
