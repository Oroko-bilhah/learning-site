import { createCurriculumLesson, getCurriculumLessonSequence } from '../src/curriculumLesson.js'
import { lessons } from './lessonExamples.js'

const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_PUBLISHABLE_KEY
const legacySubjects = {
  mathematics: ['Introduction to Algebra', 'Simplifying Expressions', 'Solving Linear Equations', 'Introduction to Functions', 'Drawing Graphs', 'Interpreting Graphs', 'Angles and Lines', 'Properties of Triangles', 'Geometric Constructions'],
  english: ['Parts of Speech', 'Sentence Structure', 'Subject-Verb Agreement', 'Reading for Main Ideas', 'Making Inferences', 'Summarising Texts', 'Paragraph Writing', 'Essay Structure', 'Editing and Proofreading'],
  biology: ['Introduction to Cells', 'Cell Structure', 'Plant and Animal Cells', 'Introduction to Nutrition', 'Photosynthesis', 'Human Nutrition', 'Ecosystems', 'Food Chains and Food Webs', 'Environmental Conservation'],
  chemistry: ['States of Matter', 'Particle Theory', 'Physical and Chemical Changes', 'Elements and Symbols', 'Compounds and Mixtures', 'Introduction to the Periodic Table', 'Introduction to Reactions', 'Word Equations', 'Conservation of Mass'],
}

function slug(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') }

async function getJson(path, token) {
  const response = await fetch(`${url}${path}`, {
    headers: { apikey: key, Authorization: `Bearer ${token}` },
  })
  const data = await response.json().catch(() => ({}))
  return { response, data }
}

export default async function handler(req, res) {
  if (!url || !key) return res.status(500).json({ error: 'Supabase server configuration is missing.' })
  const { gradeId, subjectName, lessonSlug } = req.query
  if (!gradeId || !subjectName || !lessonSlug) return res.status(400).json({ error: 'Lesson details are incomplete.' })
  const subjectSlug = slug(decodeURIComponent(subjectName))
  let sequence = getCurriculumLessonSequence(gradeId, subjectName)
  if (/^form-[34]$/.test(gradeId) && legacySubjects[subjectSlug]) {
    sequence = legacySubjects[subjectSlug].map((title) => ({ title, slug: slug(title) }))
  } else if (/^form-[34]$/.test(gradeId)) {
    const subject = decodeURIComponent(subjectName).split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    const topics = [`${subject} foundations`, `${subject} skills and practice`, `Using ${subject.toLowerCase()} in daily life`]
    sequence = topics.flatMap((topic) => [`Introduction to ${topic}`, `Practising ${topic}`, `Applying ${topic}`].map((title) => ({ title, slug: slug(title) })))
  }
  const index = sequence.findIndex((item) => item.slug === lessonSlug)
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, '')
  if (!token) {
    if (index >= 0 && index < 3) {
      const lesson = lessons[lessonSlug] || createCurriculumLesson(gradeId, subjectName, lessonSlug)
      return lesson ? res.status(200).json({ lesson, sequence }) : res.status(404).json({ error: 'Lesson not found.' })
    }
    return res.status(401).json({ error: 'Sign in to access this lesson.' })
  }
  const { response: authResponse, data: user } = await getJson('/auth/v1/user', token)
  if (!authResponse.ok || !user.id) return res.status(401).json({ error: 'Please sign in again.' })

  const admin = user.app_metadata?.role === 'admin'
  const { response: subResponse, data: subscriptions } = await getJson(`/rest/v1/subscriptions?select=ends_at&user_id=eq.${user.id}&limit=1`, token)
  const active = subResponse.ok && subscriptions?.[0]?.ends_at && new Date(subscriptions[0].ends_at) > new Date()
  if (!admin && (index >= 3 || index < 0) && !active) return res.status(402).json({ error: 'Subscribe to unlock lessons after the first three.', subscribe: true })

  let teacherLesson = null
  if (index < 0) {
    const query = new URLSearchParams({ select: 'lesson_data,id,grade_id,subject,status', id: `eq.${lessonSlug}`, grade_id: `eq.${gradeId}`, status: 'eq.published', limit: '1' })
    const { response: lessonResponse, data } = await getJson(`/rest/v1/teacher_lessons?${query}`, token)
    if (!lessonResponse.ok) return res.status(lessonResponse.status).json({ error: 'Could not load this lesson.' })
    teacherLesson = data[0]?.lesson_data || null
    if (!teacherLesson) return res.status(404).json({ error: 'Lesson not found.' })
  }

  const rawLesson = lessons[lessonSlug] || teacherLesson || createCurriculumLesson(gradeId, subjectName, lessonSlug)
  const lesson = teacherLesson ? {
    ...rawLesson,
    duration: `${rawLesson.duration || 15} minutes`,
    sections: rawLesson.sections || rawLesson.contentSections?.map((section) => ({
      heading: section.topic,
      paragraphs: section.content.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean),
    })) || [{ heading: rawLesson.topic, paragraphs: (rawLesson.content || '').split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean) }],
    objectives: rawLesson.objectives || [],
    example: rawLesson.example || null,
    questions: rawLesson.questions || [],
  } : rawLesson
  if (!lesson) return res.status(404).json({ error: 'Lesson not found.' })
  return res.status(200).json({ lesson, sequence: [...sequence, ...(teacherLesson ? [{ title: teacherLesson.title, slug: lessonSlug }] : [])] })
}
