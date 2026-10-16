import { form3Subjects, grade10Subjects } from './data/curriculumData'

const toSlug = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export function createCurriculumLesson(gradeId, subjectName, lessonSlug) {
  const subjects = gradeId === 'grade-10' ? grade10Subjects : form3Subjects
  const subject = subjects.find(
    (item) => item.name.toLowerCase() === decodeURIComponent(subjectName).toLowerCase()
  )
  if (!subject) return null

  for (const topic of subject.topics) {
    const title = topic.lessons.find((item) => toSlug(item) === lessonSlug)
    if (!title) continue

    const grade = gradeId === 'grade-10' ? 'Grade 10' : 'Form 3'
    const focus = topic.description.replace(/[.]+$/, '')
    return {
      title,
      subject: subject.name,
      grade,
      topic: topic.title,
      duration: '15 minutes',
      objectives: [
        `Explain the main ideas in ${title.toLowerCase()}.`,
        `Apply the lesson to the wider topic of ${topic.title.toLowerCase()}.`,
        'Use evidence, clear steps, or an appropriate method to justify your answer.',
      ],
      sections: [
        {
          heading: `Understanding ${title}`,
          paragraphs: [
            `${title} is studied within ${topic.title}, which focuses on ${focus}. Start by identifying the key terms, facts, symbols, or processes in the lesson and how they relate to one another.`,
            `In the Kenyan ${grade} curriculum, learning is strengthened by connecting classroom ideas to familiar situations. Consider examples from your school, home, county, or community, then explain how the concept helps you understand or solve a real problem.`,
          ],
        },
        {
          heading: 'A useful way to learn this lesson',
          paragraphs: [
            `First, state what the question or task is asking about ${title.toLowerCase()}. Next, recall the relevant knowledge from ${topic.title}. Organise your response in a logical order, show working where calculations or procedures are involved, and check that your conclusion answers the task.`,
            `For a practical investigation or project, record observations accurately, use suitable materials safely, and explain what your evidence shows. For language and humanities tasks, support ideas with relevant examples and clear reasoning.`,
          ],
        },
        {
          heading: 'Check your understanding',
          paragraphs: [
            `Summarise the central idea of ${title} in your own words. Then give one example that links it to ${topic.title}. If you are unsure, revisit the key terms and explain how each one contributes to the topic.`,
          ],
        },
      ],
      example: {
        question: `How can you approach a class task about ${title.toLowerCase()}?`,
        steps: [
          `Identify the specific idea or skill from ${title}.`,
          `Connect it to the relevant concepts in ${topic.title}.`,
          'Use a suitable example or show clear working, then check that your conclusion answers the task.',
        ],
        answer: 'A clear, relevant explanation supported by an example or appropriate working.',
      },
      questions: [
        {
          question: 'Which approach best supports strong learning in this lesson?',
          options: ['Memorise words without understanding them', 'Connect key ideas and apply them to an example', 'Skip instructions and guess', 'Copy an answer without checking it'],
          answer: 'Connect key ideas and apply them to an example',
          explanation: 'Understanding and applying the ideas helps you transfer learning to new tasks.',
        },
        {
          question: 'When answering a task, what should you do after identifying the relevant concept?',
          options: ['Ignore the question', 'Give unrelated facts', 'Use suitable evidence or working and check your conclusion', 'Leave the answer unexplained'],
          answer: 'Use suitable evidence or working and check your conclusion',
          explanation: 'Evidence, clear working, and a checked conclusion make an answer reasoned and relevant.',
        },
        {
          question: `Which topic contains the lesson “${title}”?`,
          options: [topic.title, 'An unrelated topic', 'A school timetable', 'A list of classroom rules'],
          answer: topic.title,
          explanation: `${title} is listed under ${topic.title} in this curriculum learning path.`,
        },
      ],
    }
  }
  return null
}
