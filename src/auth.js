const SESSION_KEY = 'elimuNestAuthSession'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, '')
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const isAuthConfigured = Boolean(supabaseUrl && supabaseKey)

function readSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null')
  } catch {
    return null
  }
}

function saveSession(session) {
  if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  else localStorage.removeItem(SESSION_KEY)
  window.dispatchEvent(new Event('elimu-auth-change'))
  return session
}

async function request(path, { method = 'GET', body, accessToken } = {}) {
  if (!isAuthConfigured) {
    throw new Error('Authentication is not configured yet. Add the Supabase URL and publishable key to the environment.')
  }
  const response = await fetch(`${supabaseUrl}/auth/v1${path}`, {
    method,
    headers: {
      apikey: supabaseKey,
      'Content-Type': 'application/json',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
  const payload = response.status === 204 ? null : await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(payload.msg || payload.message || payload.error_description || payload.error || 'Authentication request failed.')
  return payload
}

function withExpiry(session) {
  return {
    ...session,
    expires_at: session.expires_at || Math.floor(Date.now() / 1000) + (session.expires_in || 3600),
  }
}

export async function signIn(email, password) {
  const result = await request('/token?grant_type=password', { method: 'POST', body: { email, password } })
  const session = withExpiry(result)
  saveSession(session)
  return session
}

export async function signUp({ email, password, fullName, gradeId }) {
  const result = await request('/signup', {
    method: 'POST',
    body: { email, password, data: { full_name: fullName, grade_id: gradeId } },
  })
  if (result.access_token) saveSession(withExpiry(result))
  return result
}

export async function signOut() {
  const session = readSession()
  try {
    if (session?.access_token) await request('/logout', { method: 'POST', accessToken: session.access_token })
  } finally {
    saveSession(null)
  }
}

export async function requestPasswordReset(email) {
  return request('/recover', {
    method: 'POST',
    body: { email, redirect_to: `${window.location.origin}/auth` },
  })
}

export async function updatePassword(password, accessToken) {
  return request('/user', { method: 'PUT', body: { password }, accessToken })
}

async function refreshSession(session) {
  if (!session?.refresh_token) return null
  const result = await request('/token?grant_type=refresh_token', {
    method: 'POST',
    body: { refresh_token: session.refresh_token },
  })
  return saveSession(withExpiry(result))
}

export async function restoreSession() {
  let session = readSession()
  const hash = new URLSearchParams(window.location.hash.slice(1))
  const callbackAccess = hash.get('access_token')
  const callbackRefresh = hash.get('refresh_token')
  const callbackType = hash.get('type')
  if (callbackAccess && callbackRefresh) {
    session = withExpiry({
      access_token: callbackAccess,
      refresh_token: callbackRefresh,
      expires_in: Number(hash.get('expires_in')) || 3600,
    })
    window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.search}`)
    try {
      const user = await request('/user', { accessToken: session.access_token })
      session = saveSession({ ...session, user })
    } catch {
      saveSession(null)
      return { session: null, recovery: false }
    }
    return { session, recovery: callbackType === 'recovery' }
  }

  if (!session?.access_token) return { session: null, recovery: false }

  if (session.expires_at < Date.now() / 1000 + 30) {
    try {
      session = await refreshSession(session)
    } catch {
      saveSession(null)
      return { session: null, recovery: false }
    }
  }
  try {
    const user = await request('/user', { accessToken: session.access_token })
    session = saveSession({ ...session, user })
    return { session, recovery: false }
  } catch {
    try {
      session = await refreshSession(session)
      const user = await request('/user', { accessToken: session.access_token })
      session = saveSession({ ...session, user })
      return { session, recovery: false }
    } catch {
      saveSession(null)
      return { session: null, recovery: false }
    }
  }
}

export function getStoredSession() {
  return readSession()
}

export function getUserStoragePrefix() {
  const userId = readSession()?.user?.id
  return userId ? `user:${userId}:` : 'guest:'
}

export function scopedStorageKey(key) {
  return `${getUserStoragePrefix()}${key}`
}
