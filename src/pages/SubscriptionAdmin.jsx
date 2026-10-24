import { useCallback, useEffect, useState } from 'react'
import {
  listPendingSubscriptionPayments,
  reviewSubscriptionPayment,
} from '../backend'
import '../App.css'

export default function SubscriptionAdmin() {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [busyId, setBusyId] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const refresh = useCallback(async () => {
    setRequests(await listPendingSubscriptionPayments())
  }, [])

  useEffect(() => {
    refresh().catch((loadError) => setError(loadError.message)).finally(() => setLoading(false))
  }, [refresh])

  async function review(request, decision) {
    const status = decision === 'approve' ? 'approved' : 'rejected'
    if (decision === 'approve' && !window.confirm(`Confirm that receipt ${request.mpesa_receipt} for KSh ${request.amount_kes} appears in the Pochi statement?`)) return
    setBusyId(request.id)
    setError('')
    setMessage('')
    try {
      await reviewSubscriptionPayment(request.id, decision)
      setMessage(`Payment request ${status}.`)
      await refresh()
    } catch (reviewError) {
      setError(reviewError.message)
    } finally {
      setBusyId('')
    }
  }

  return (
    <main className="subscription-admin-page">
      <header className="subscription-heading">
        <span className="eyebrow">ADMINISTRATION</span>
        <h1>Verify Pochi payments</h1>
        <p>Check each receipt in the Pochi La Biashara statement before approving it. Approval activates or extends the learner's subscription.</p>
      </header>
      {error && <p className="subscription-message error" role="alert">{error}</p>}
      {message && <p className="subscription-message success" role="status">{message}</p>}
      {loading ? <p>Loading payment requests…</p> : requests.length ? (
        <div className="admin-payment-list">
          {requests.map((request) => (
            <article className="admin-payment-card" key={request.id}>
              <div>
                <span className="eyebrow">PENDING REQUEST</span>
                <h2>KSh {request.amount_kes} · {request.plan_months} month{request.plan_months === 1 ? '' : 's'}</h2>
                <dl>
                  <div><dt>Receipt</dt><dd>{request.mpesa_receipt}</dd></div>
                  <div><dt>Paying phone</dt><dd>{request.payer_phone}</dd></div>
                  <div><dt>Learner ID</dt><dd>{request.user_id}</dd></div>
                  <div><dt>Submitted</dt><dd>{new Date(request.created_at).toLocaleString()}</dd></div>
                </dl>
              </div>
              <div className="admin-payment-actions">
                <button className="primary-button" type="button" disabled={Boolean(busyId)} onClick={() => review(request, 'approve')}>
                  {busyId === request.id ? 'Saving…' : 'Approve payment'}
                </button>
                <button className="secondary-button" type="button" disabled={Boolean(busyId)} onClick={() => review(request, 'reject')}>
                  Reject
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : <section className="subscription-empty"><h2>No pending receipts</h2><p>New Pochi payment submissions will show here.</p></section>}
    </main>
  )
}
