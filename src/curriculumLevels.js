export const gradeOptions = [
  ...Array.from({ length: 11 }, (_, index) => {
    const number = index + 1
    const band = number <= 3 ? 'Lower Primary' : number <= 6 ? 'Upper Primary' : number <= 9 ? 'Junior School' : 'Senior School'
    return {
      id: `grade-${number}`,
      name: `Grade ${number}`,
      curriculum: `CBC / CBE · ${band}`,
      description: `Explore Kenyan CBC learning areas and teacher-created materials for Grade ${number}.`,
      stage: band,
    }
  }),
  { id: 'form-3', name: 'Form 3', curriculum: '8-4-4 Curriculum', description: 'Explore Form 3 KCSE learning materials.', stage: '8-4-4' },
  { id: 'form-4', name: 'Form 4', curriculum: '8-4-4 Curriculum', description: 'Revise Form 4 topics and prepare for KCSE.', stage: '8-4-4' },
]

const areas = (names, group, description) => names.map((name, index) => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  name,
  group,
  description: `${description} · ${name}`,
  icon: ['M', 'Aa', 'K', '✦', '◎'][index % 5],
  color: ['blue', 'gold', 'green', 'orange'][index % 4],
}))

const lowerPrimary = areas(
  ['Creative Activities', 'CRE', 'English Activities', 'Environmental Activities', 'HRE', 'Indigenous Languages', 'IRE', 'Kiswahili', 'Mathematics'],
  'Lower Primary learning areas',
  'CBC Grade 1–3 foundational learning area'
)

const upperPrimary = areas(
  ['Agriculture', 'Arabic', 'Creative Arts', 'CRE', 'English', 'French', 'German', 'HRE', 'Home Science', 'Indigenous Language', 'IRE', 'Kiswahili', 'Mandarin', 'Mathematics', 'Physical and Health Education', 'Science & Technology', 'Social Studies'],
  'Upper Primary learning areas',
  'CBC Grade 4–6 learning area'
)

const juniorSchool = areas(
  ['Agriculture', 'Arabic', 'Creative Arts', 'CRE', 'English', 'French', 'German', 'HRE', 'Indigenous Language', 'Integrated Science', 'IRE', 'Kiswahili', 'Mandarin', 'Mathematics', 'Pre-Technical Studies', 'Social Studies'],
  'Junior School learning areas',
  'CBC Grade 7–9 learning area'
)

export function getLearningAreas(gradeId) {
  if (gradeId === 'grade-1' || gradeId === 'grade-2' || gradeId === 'grade-3') return lowerPrimary
  if (['grade-4', 'grade-5', 'grade-6'].includes(gradeId)) return upperPrimary
  if (['grade-7', 'grade-8', 'grade-9'].includes(gradeId)) return juniorSchool
  return []
}

export function getGradeName(gradeId) {
  return gradeOptions.find((grade) => grade.id === gradeId)?.name || 'Selected grade'
}
