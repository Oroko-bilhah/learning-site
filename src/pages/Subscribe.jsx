import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  createSubscriptionPaymentRequest,
  getMySubscription,
  getMySubscriptionPaymentRequests,
} from '../backend'
import { contactPhone } from '../contactInfo'
import '../App.css'

const plans = {
  1: { months: 1, amount: 499, label: '1 month' },
  3: { months: 3, amount: 999, label: '3 months' },
}

function formatDate(value) {
  return new Date(value).toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function Subscribe() {
  const [subscription, setSubscription] = useState(null)
  const [requests, setRequests] = useState([])
  const [planMonths, setPlanMonths] = useState('1')
  const [payerPhone, setPayerPhone] = useState('')
  const [receipt, setReceipt] = useState('')
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const refresh = useCallback(async () => {
    const [current, paymentRequests] = await Promise.all([
      getMySubscription(),
      getMySubscriptionPaymentRequests(),
    ])
    setSubscription(current)
    setRequests(paymentRequests)
  }, [])

  useEffect(() => {
    refresh().catch((loadError) => setError(loadError.message)).finally(() => setLoading(false))
  }, [refresh])

  const active = subscription && new Date(subscription.ends_at) > new Date()
  const plan = plans[planMonths]

  async function handleSubmit(event) {
    event.preventDefault()
    setBusy(true)
    setError('')
    setMessage('')
    try {
      await createSubscriptionPaymentRequest({
        planMonths: plan.months,
        amountKes: plan.amount,
        payerPhone: payerPhone.trim(),
        mpesaReceipt: receipt.trim().toUpperCase(),
      })
      setReceipt('')
      setMessage('Your payment receipt was submitted. Access will be activated after it is checked against the Pochi statement.')
      await refresh()
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="subscription-page">
      <header className="subscription-heading">
        <span className="eyebrow">ELIMUNEST PLUS</span>
        <h1>Keep learning beyond lesson 3</h1>
        <p>Lessons 1–3 stay free. A subscription unlocks the rest of the lessons across grades and subjects.</p>
      </header>

      {active && (
        <section className="subscription-active" role="status">
          <strong>Your subscription is active</strong>
          <span>Access through {formatDate(subscription.ends_at)}</span>
        </section>
      )}

      <div className="subscription-grid">
        <section className="subscription-plans" aria-label="Subscription plans">
          <article className={`subscription-plan${planMonths === '1' ? ' selected' : ''}`}>
            <span className="subscription-plan-duration">1 month</span>
            <strong>KSh 499</strong>
            <span>Full access to lessons 4 and onward</span>
            <button type="button" className="secondary-button" onClick={() => setPlanMonths('1')}>Choose monthly</button>
          </article>
          <article className={`subscription-plan${planMonths === '3' ? ' selected' : ''}`}>
            <span className="subscription-plan-badge">BEST VALUE</span>
            <span className="subscription-plan-duration">3 months</span>
            <strong>KSh 999</strong>
            <span>Full access to lessons 4 and onward</span>
            <button type="button" className="secondary-button" onClick={() => setPlanMonths('3')}>Choose 3 months</button>
          </article>
        </section>

        <section className="subscription-payment-card">
          <h2>Pay with Pochi La Biashara</h2>
          <ol>
            <li>Open M-PESA and choose <strong>Pochi La Biashara</strong> under Pay.</li>
            <li>Pay <strong>KSh {plan.amount}</strong> to <strong>{contactPhone}</strong>.</li>
            <li>Enter your phone number and M-PESA receipt below so we can verify it.</li>
          </ol>
          <form className="subscription-form" onSubmit={handleSubmit}>
            <label htmlFor="subscription-plan">Plan</label>
            <select id="subscription-plan" value={planMonths} onChange={(event) => setPlanMonths(event.target.value)}>
              {Object.values(plans).map((item) => <option key={item.months} value={item.months}>{item.label} — KSh {item.amount}</option>)}
            </select>
            <label htmlFor="payer-phone">Phone used to pay</label>
            <input id="payer-phone" type="tel" autoComplete="tel" placeholder="07... or 2547..." required value={payerPhone} onChange={(event) => setPayerPhone(event.target.value)} />
            <label htmlFor="mpesa-receipt">M-PESA receipt code</label>
            <input id="mpesa-receipt" autoComplete="off" autoCapitalize="characters" maxLength={12} minLength={8} pattern="[A-Za-z0-9]{8,12}" placeholder="e.g. QWE123ABC4" required value={receipt} onChange={(event) => setReceipt(event.target.value.toUpperCase())} />
            {error && <p className="subscription-message error" role="alert">{error}</p>}
            {message && <p className="subscription-message success" role="status">{message}</p>}
            <button className="primary-button" type="submit" disabled={busy || loading}>
              {busy ? 'Submitting…' : `Submit KSh ${plan.amount} receipt`}
            </button>
            <p className="subscription-note">Payments are checked manually. Please wait for approval before expecting paid lessons to unlock.</p>
          </form>
        </section>
      </div>

      <section className="subscription-history">
        <h2>Your payment requests</h2>
        {loading ? <p>Loading your subscription details…</p> : requests.length ? (
          <ul>
            {requests.map((request) => (
              <li key={request.id}>
                <span>{request.plan_months} month{request.plan_months === 1 ? '' : 's'} · KSh {request.amount_kes} · {request.mpesa_receipt}</span>
                <strong className={`request-status ${request.status}`}>{request.status}</strong>
                {request.review_note && <span>{request.review_note}</span>}
              </li>
            ))}
          </ul>
        ) : <p>No payment requests yet.</p>}
      </section>

      <p className="subscription-back"><Link to="/subjects">Back to subjects</Link></p>
    </main>
  )
}
