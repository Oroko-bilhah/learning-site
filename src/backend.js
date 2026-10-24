import { getStoredSession, isAuthConfigured, scopedStorageKey } from './auth'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, '')
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const isBackendConfigured = Boolean(supabaseUrl && apiKey)

function localCollection(key) {
  try {
    const value = JSON.parse(localStorage.getItem(scopedStorageKey(key)) || '[]')
    return Array.isArray(value) ? value : []
  } catch {
    return []
  }
}

function writeLocalCollection(key, rows) {
  localStorage.setItem(scopedStorageKey(key), JSON.stringify(rows))
}

function notifyContentChange() {
  window.dispatchEvent(new Event('elimu-content-change'))
}

async function dbRequest(table, { query = {}, method = 'GET', body, prefer, select = '*' } = {}) {
  if (!isBackendConfigured) throw new Error('Backend database is not configured. Set the Supabase project URL and publishable key.')
  const params = new URLSearchParams({ select, ...query })
  const session = getStoredSession()
  const authorization = session?.access_token
    ? `Bearer ${session.access_token}`
    : apiKey.startsWith('sb_publishable_')
      ? null
      : `Bearer ${apiKey}`
  const response = await fetch(`${supabaseUrl}/rest/v1/${table}?${params}`, {
    method,
    headers: {
      apikey: apiKey,
      'Content-Type': 'application/json',
      ...(authorization ? { Authorization: authorization } : {}),
      ...(prefer ? { Prefer: prefer } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
  const payload = response.status === 204 ? null : await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(payload.message || payload.details || payload.hint || 'The database request failed.')
  return payload
}

function requireSignedInUser() {
  const user = getStoredSession()?.user
  if (!isAuthConfigured || !user?.id) throw new Error('Sign in to manage a subscription.')
  return user
}

export async function getMySubscription() {
  const user = getStoredSession()?.user
  if (!user?.id || !isBackendConfigured) return null
  const rows = await dbRequest('subscriptions', { query: { user_id: `eq.${user.id}` } })
  return rows[0] || null
}

export async function getMySubscriptionPaymentRequests() {
  const user = requireSignedInUser()
  return dbRequest('subscription_payment_requests', {
    query: { user_id: `eq.${user.id}`, order: 'created_at.desc' },
  })
}

export async function createSubscriptionPaymentRequest({ planMonths, amountKes, payerPhone, mpesaReceipt }) {
  const user = requireSignedInUser()
  const rows = await dbRequest('subscription_payment_requests', {
    method: 'POST',
    body: {
      user_id: user.id,
      plan_months: planMonths,
      amount_kes: amountKes,
      payer_phone: payerPhone,
      mpesa_receipt: mpesaReceipt.trim().toUpperCase(),
    },
    prefer: 'return=representation',
  })
  return rows[0]
}

export async function listPendingSubscriptionPayments() {
  const user = requireSignedInUser()
  if (user.app_metadata?.role !== 'admin') throw new Error('Administrator access is required.')
  return dbRequest('subscription_payment_requests', {
    query: { status: 'eq.pending', order: 'created_at.asc' },
  })
}

export async function reviewSubscriptionPayment(id, decision, reviewNote = '') {
  const user = requireSignedInUser()
  if (user.app_metadata?.role !== 'admin') throw new Error('Administrator access is required.')
  if (!isBackendConfigured) throw new Error('Supabase is not configured.')
  const session = getStoredSession()
  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/review_subscription_payment`, {
    method: 'POST',
    headers: {
      apikey: apiKey,
      Authorization: `Bearer ${session.access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ p_request_id: id, p_decision: decision, p_review_note: reviewNote }),
  })
  const payload = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(payload.message || payload.details || 'Could not review this payment request.')
  return payload
}

function requireTeacher() {
  const user = getStoredSession()?.user
  const metadata = user?.app_metadata || {}
  if (!isAuthConfigured || !user?.id) throw new Error('Sign in again to save this content.')
  if (metadata.role !== 'teacher' && !metadata.roles?.includes('teacher')) {
    throw new Error('Teacher access is required to make changes.')
  }
  return user
}

function lessonRow(lesson, teacherId) {
  return {
    id: lesson.id,
    teacher_id: teacherId,
    grade_id: lesson.gradeId,
    subject: lesson.subject,
    topic: lesson.topic,
    title: lesson.title,
    status: lesson.status,
    lesson_data: lesson,
    created_at: lesson.createdAt,
    updated_at: lesson.updatedAt,
  }
}

function classRow(item, teacherId) {
  return {
    id: item.id,
    teacher_id: teacherId,
    grade_id: item.gradeId,
    subject: item.subject,
    title: item.title,
    starts_at: item.startsAt || null,
    flexible: Boolean(item.flexible),
    mode: item.mode || 'Online',
    class_data: item,
  }
}

function assessmentRow(item, teacherId) {
  return {
    id: item.id,
    teacher_id: teacherId,
    grade_id: item.gradeId,
    subject: item.subject,
    title: item.title,
    deadline: item.deadline,
    assessment_data: item,
  }
}

export async function listTeacherLessons() {
  if (!isBackendConfigured) return localCollection('elimuNestTeacherLessons')
  const user = getStoredSession()?.user
  const query = { order: 'updated_at.desc' }
  if (user?.id && (user.app_metadata?.role === 'teacher' || user.app_metadata?.roles?.includes('teacher'))) query.teacher_id = `eq.${user.id}`
  const rows = await dbRequest('teacher_lessons', { query })
  return rows.map((row) => row.lesson_data)
}

export async function listPublishedLessons(gradeId, subject) {
  if (!isBackendConfigured) return localCollection('elimuNestTeacherLessons').filter((item) => item.status === 'published' && item.gradeId === gradeId && item.subject.toLowerCase() === subject.toLowerCase())
  const query = { status: 'eq.published', grade_id: `eq.${gradeId}`, order: 'updated_at.desc' }
  if (subject) query.subject = `eq.${subject}`
  const rows = await dbRequest('teacher_lessons', { query, select: 'id,grade_id,subject,topic,title,status,created_at' })
  return rows.map((row) => ({ id: row.id, gradeId: row.grade_id, subject: row.subject, topic: row.topic, title: row.title, status: row.status, createdAt: row.created_at }))
}

export async function listClassSchedules() {
  if (!isBackendConfigured) return localCollection('elimuNestTeacherClasses')
  const user = getStoredSession()?.user
  const query = { order: 'starts_at.asc.nullslast' }
  if (user?.app_metadata?.role === 'teacher' || user?.app_metadata?.roles?.includes('teacher')) query.teacher_id = `eq.${user.id}`
  else if (user?.user_metadata?.grade_id) query.grade_id = `eq.${user.user_metadata.grade_id}`
  const rows = await dbRequest('class_schedules', { query })
  return rows.map((row) => row.class_data)
}

export async function listAssessments() {
  if (!isBackendConfigured) return localCollection('elimuNestTeacherAssessments')
  const user = getStoredSession()?.user
  const query = { order: 'deadline.asc' }
  if (user?.app_metadata?.role === 'teacher' || user?.app_metadata?.roles?.includes('teacher')) query.teacher_id = `eq.${user.id}`
  else if (user?.user_metadata?.grade_id) query.grade_id = `eq.${user.user_metadata.grade_id}`
  const rows = await dbRequest('assessments', { query })
  return rows.map((row) => row.assessment_data)
}

async function saveItem(table, row, localKey, item) {
  if (!isBackendConfigured) {
    const existing = localCollection(localKey)
    writeLocalCollection(localKey, [item, ...existing.filter((entry) => entry.id !== item.id)])
    notifyContentChange()
    return item
  }
  const user = requireTeacher()
  const saved = await dbRequest(table, {
    method: 'POST',
    query: { on_conflict: 'id' },
    body: row(item, user.id),
    prefer: 'resolution=merge-duplicates,return=representation',
  })
  notifyContentChange()
  return saved[0]?.lesson_data || saved[0]?.class_data || saved[0]?.assessment_data || item
}

export const saveTeacherLesson = (lesson) => saveItem('teacher_lessons', lessonRow, 'elimuNestTeacherLessons', lesson)
export const saveClassSchedule = (item) => saveItem('class_schedules', classRow, 'elimuNestTeacherClasses', item)
export const saveAssessment = (item) => saveItem('assessments', assessmentRow, 'elimuNestTeacherAssessments', item)

async function deleteItem(table, id, localKey) {
  if (!isBackendConfigured) {
    writeLocalCollection(localKey, localCollection(localKey).filter((item) => item.id !== id))
    notifyContentChange()
    return
  }
  requireTeacher()
  await dbRequest(table, { method: 'DELETE', query: { id: `eq.${id}` } })
  notifyContentChange()
}

export const deleteTeacherLesson = (id) => deleteItem('teacher_lessons', id, 'elimuNestTeacherLessons')
export const deleteClassSchedule = (id) => deleteItem('class_schedules', id, 'elimuNestTeacherClasses')
export const deleteAssessmentRecord = (id) => deleteItem('assessments', id, 'elimuNestTeacherAssessments')

export async function migrateLocalTeacherContent() {
  if (!isBackendConfigured) return
  const user = requireTeacher()
  const migrationKey = scopedStorageKey('elimuNestCloudMigrationComplete')
  if (localStorage.getItem(migrationKey) === 'yes') return
  const collections = [
    ['elimuNestTeacherLessons', 'teacher_lessons', lessonRow],
    ['elimuNestTeacherClasses', 'class_schedules', classRow],
    ['elimuNestTeacherAssessments', 'assessments', assessmentRow],
  ]
  for (const [key, table, makeRow] of collections) {
    const items = localCollection(key)
    for (const item of items) {
      const row = makeRow(item, user.id)
      await dbRequest(table, {
        method: 'POST', query: { on_conflict: 'id' }, body: row,
        prefer: 'resolution=ignore-duplicates,return=minimal',
      })
    }
  }
  localStorage.setItem(migrationKey, 'yes')
}
