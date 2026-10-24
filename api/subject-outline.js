import { getLowerPrimaryTopics } from '../src/lowerPrimaryContent.js'
import { getGradeBandTopics } from '../src/gradeBandContent.js'

export default function handler(req, res) {
  const { gradeId, subjectName } = req.query
  if (!gradeId || !subjectName) return res.status(400).json({ error: 'Subject details are incomplete.' })
  const subject = decodeURIComponent(subjectName).toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const topics = /^grade-[1-3]$/.test(gradeId)
    ? getLowerPrimaryTopics(subject, gradeId)
    : /^grade-[4-9]$/.test(gradeId)
      ? getGradeBandTopics(subject, gradeId)
      : null
  const outline = topics?.map((topic, index) => ({
    id: topic.id ?? index + 1,
    title: topic.title,
    description: topic.description,
    lessons: (topic.lessons || []).map((item) => typeof item === 'string' ? item : item.title).filter(Boolean),
  }))
  return res.status(200).json({ topics: outline || null })
}
