import { scopedStorageKey } from './auth'

const TEACHER_LESSONS_KEY = 'elimuNestTeacherLessons'
const TEACHER_CLASSES_KEY = 'elimuNestTeacherClasses'
const TEACHER_ASSESSMENTS_KEY = 'elimuNestTeacherAssessments'

function readCollection(key) {
  try {
    const items = JSON.parse(localStorage.getItem(scopedStorageKey(key)) || '[]')
    return Array.isArray(items) ? items : []
  } catch {
    return []
  }
}

export function readTeacherLessons() {
  return readCollection(TEACHER_LESSONS_KEY)
}

export function writeTeacherLessons(lessons) {
  localStorage.setItem(scopedStorageKey(TEACHER_LESSONS_KEY), JSON.stringify(lessons))
}

export const readTeacherClasses = () => readCollection(TEACHER_CLASSES_KEY)
export const writeTeacherClasses = (classes) =>
  localStorage.setItem(scopedStorageKey(TEACHER_CLASSES_KEY), JSON.stringify(classes))

export const readTeacherAssessments = () =>
  readCollection(TEACHER_ASSESSMENTS_KEY)
export const writeTeacherAssessments = (assessments) =>
  localStorage.setItem(scopedStorageKey(TEACHER_ASSESSMENTS_KEY), JSON.stringify(assessments))
