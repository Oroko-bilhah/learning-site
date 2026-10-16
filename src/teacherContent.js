const TEACHER_LESSONS_KEY = 'elimuNestTeacherLessons'

export function readTeacherLessons() {
  try {
    const lessons = JSON.parse(
      localStorage.getItem(TEACHER_LESSONS_KEY) || '[]'
    )
    return Array.isArray(lessons) ? lessons : []
  } catch {
    return []
  }
}

export function writeTeacherLessons(lessons) {
  localStorage.setItem(TEACHER_LESSONS_KEY, JSON.stringify(lessons))
}
