// Server-side lesson content. Do not import this module into client code.
const lessons = {
  'introduction-to-algebra': {
    title: 'Introduction to Algebra',
    subject: 'Mathematics',
    grade: 'Form 3',
    topic: 'Algebra and Expressions',
    duration: '10 minutes',
    objectives: [
      'Understand what a variable represents.',
      'Identify constants, coefficients and terms.',
      'Write simple algebraic expressions.',
    ],
    sections: [
      {
        heading: 'What is algebra?',
        paragraphs: [
          'Algebra is a branch of mathematics that uses letters and symbols to represent numbers and quantities.',
          'A letter such as x can represent a number we know or a number we want to find. These letters are called variables.',
        ],
      },
      {
        heading: 'Understanding expressions',
        paragraphs: [
          'An algebraic expression combines numbers, variables and mathematical operations.',
          'For example, 3x + 5 means three multiplied by x, then add five.',
        ],
      },
    ],
    example: {
      question: 'Write an expression for a number increased by 7.',
      steps: [
        'Represent the unknown number with x.',
        'Increased by 7 means add 7.',
        'The expression is x + 7.',
      ],
      answer: 'x + 7',
    },
    questions: [
      {
        question: 'Which of the following is a variable?',
        options: ['12', 'x', '+', '7'],
        answer: 'x',
        explanation:
          'A variable is a letter or symbol that represents a number.',
      },
      {
        question: 'What does 4y mean?',
        options: [
          '4 plus y',
          '4 minus y',
          '4 multiplied by y',
          'y divided by 4',
        ],
        answer: '4 multiplied by y',
        explanation:
          'When a number is written next to a variable, multiplication is implied.',
      },
      {
        question: 'Which expression represents a number decreased by 3?',
        options: ['x + 3', '3x', 'x - 3', 'x ÷ 3'],
        answer: 'x - 3',
        explanation:
          'Decreased by 3 means subtract 3 from the number.',
      },
      {
        question: 'In the expression 5a + 2, which number is the coefficient?',
        options: ['5', 'a', '2', '5a'],
        answer: '5',
        explanation:
          'The coefficient is the number multiplying the variable. Here, 5 multiplies a.',
      },
      {
        question: 'How many terms are in 2x + 4?',
        options: ['1', '2', '3', '4'],
        answer: '2',
        explanation:
          'The terms are separated by plus or minus signs: 2x and 4.',
      },
      {
        question: 'Which expression means 6 more than a number n?',
        options: ['6n', 'n - 6', 'n + 6', 'n ÷ 6'],
        answer: 'n + 6',
        explanation:
          'More than means add, so add 6 to the number n.',
      },
      {
        question: 'If x = 3, what is the value of 2x + 1?',
        options: ['5', '6', '7', '8'],
        answer: '7',
        explanation:
          'Replace x with 3: 2 × 3 + 1 = 6 + 1 = 7.',
      },
      {
        question: 'Which expression means a number m divided by 4?',
        options: ['m + 4', '4m', 'm - 4', 'm ÷ 4'],
        answer: 'm ÷ 4',
        explanation:
          'Divided by 4 is written as m ÷ 4 (or m/4).',
      },
    ],
  },
}

export { lessons }
