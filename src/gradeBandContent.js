const slugify = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const lessonNames = (title) => [
  `Explore ${title}`,
  `Practise ${title}`,
  `Apply ${title} in real life`,
]

const topic = (title, focus, activity, question, answer, distractors) => ({
  title,
  focus,
  activity,
  question,
  answer,
  options: [answer, ...distractors].sort(),
  lessons: lessonNames(title),
})

const byGrade = {
  mathematics: {
    4: [
      topic('Place Value and Whole Numbers', 'Read, write, compare, and compose whole numbers using place value.', 'Make a number with digit cards, then ask a partner to name the value of one digit.', 'In 4,582, what is the value of the digit 5?', '500', ['5', '50', '5,000']),
      topic('Fractions and Measurement', 'Represent simple fractions and measure length, mass, and capacity using suitable units.', 'Measure objects around the classroom and record the results in a table.', 'Which fraction means one of four equal parts?', 'One quarter', ['One half', 'One third', 'One whole']),
      topic('Shapes and Data', 'Describe common 2D and 3D shapes and organise information in simple charts.', 'Survey classmates about a favourite fruit and draw a picture graph of the answers.', 'Which chart uses pictures to show amounts?', 'A pictograph', ['A story map', 'A timetable', 'A number line']),
    ],
    5: [
      topic('Factors, Multiples, and Fractions', 'Find factors and multiples and compare fractions with familiar denominators.', 'Use bottle tops to make equal groups and explain which numbers divide a group evenly.', 'Which number is a factor of 18?', '6', ['5', '7', '11']),
      topic('Decimals and Operations', 'Read decimal notation in everyday measures and solve calculations with whole numbers and decimals.', 'Use prices from a pretend market to add the cost of two items.', 'In 3.47, what does the 4 represent?', 'Four tenths', ['Four ones', 'Four hundredths', 'Four tens']),
      topic('Geometry and Perimeter', 'Classify angles and shapes and find the perimeter by adding side lengths.', 'Draw a garden plan on squared paper and calculate the length around its boundary.', 'How do you find the perimeter of a rectangle?', 'Add the lengths of all its sides', ['Multiply its colours', 'Count only one side', 'Divide its area by two']),
    ],
    6: [
      topic('Ratio, Fractions, and Percentages', 'Use equivalent fractions and simple percentages to compare quantities.', 'Mix a pretend juice recipe with counters, then double the quantities while keeping the ratio.', 'What is 50% of 20?', '10', ['5', '15', '20']),
      topic('Area, Volume, and Coordinates', 'Calculate area of rectangles, explore volume with unit cubes, and read coordinates on a grid.', 'Design a classroom garden on squared paper and compare the area of two beds.', 'How is the area of a rectangle found?', 'Length multiplied by width', ['Length plus width', 'All sides added', 'Width divided by length']),
      topic('Averages and Data', 'Collect data and interpret tables, bar graphs, and simple averages.', 'Record daily temperatures for a week and present them in a bar graph.', 'What does the average help us describe?', 'A typical value in a set of data', ['The tallest bar only', 'The first answer only', 'The graph title']),
    ],
    7: [
      topic('Integers and Algebraic Expressions', 'Compare positive and negative integers and represent unknown values with algebraic symbols.', 'Use a number line to model temperatures above and below zero, then write a matching expression.', 'What is -2 + 5?', '3', ['-7', '-3', '7']),
      topic('Ratio, Rate, and Proportion', 'Use ratios and rates to compare quantities and solve familiar problems.', 'Compare the amount of water used by two groups and express it as a ratio.', 'A recipe uses 2 cups of flour for 1 cup of water. What is the flour-to-water ratio?', '2:1', ['1:2', '2:3', '1:1']),
      topic('Geometry and Statistics', 'Investigate angle properties, scale drawings, and ways to summarise collected data.', 'Measure angles in a pattern found on a school building and record the results.', 'How many degrees are in a straight angle?', '180 degrees', ['90 degrees', '120 degrees', '360 degrees']),
    ],
    8: [
      topic('Equations and Number Patterns', 'Form and solve simple linear equations and describe rules in number sequences.', 'Create a number pattern, write its rule, and challenge a classmate to find the next term.', 'Solve x + 7 = 15.', '8', ['7', '9', '22']),
      topic('Similarity, Scale, and Measurement', 'Use scale and proportional reasoning to interpret drawings and compare shapes.', 'Draw a map of a familiar place using a simple scale and label key distances.', 'What does a map scale help you compare?', 'Map distance with real distance', ['Colours with symbols', 'Time with temperature', 'Angles with mass']),
      topic('Probability and Data', 'Describe likelihood and use data displays to compare outcomes.', 'Run a fair coin-toss experiment, tally results, and compare the results with your prediction.', 'For a fair coin, which outcome is equally likely?', 'Heads or tails', ['Heads only', 'Tails only', 'Neither outcome']),
    ],
    9: [
      topic('Linear Relationships and Graphs', 'Represent linear relationships with tables, equations, and graphs.', 'Compare two mobile data bundles by plotting their cost against data amount.', 'What does a point on a graph represent?', 'A pair of related values', ['A title only', 'A unit by itself', 'A random colour']),
      topic('Transformations and Geometric Reasoning', 'Describe translations, reflections, rotations, and geometric relationships.', 'Use a grid to move a shape, then describe exactly how its position changed.', 'A reflection produces what kind of image?', 'A mirror image', ['A larger number', 'A measurement unit', 'A data table']),
      topic('Probability and Statistical Investigation', 'Plan a simple investigation, summarise data, and interpret probability in context.', 'Ask a fair survey question, collect class responses, and explain one pattern you notice.', 'Why should a survey question be fair?', 'So responses are not pushed toward one answer', ['So it is longer', 'So it has no choices', 'So only one person can answer']),
    ],
  },
  english: {
    4: [
      topic('Reading for Meaning', 'Use clues in a text to identify characters, events, and the main message.', 'Read a short local story and draw a three-picture sequence of what happened.', 'What does the main idea tell a reader?', 'What the text is mostly about', ['The page number', 'The longest word', 'The colour of the cover']),
      topic('Grammar in Everyday Sentences', 'Use nouns, verbs, adjectives, and punctuation to make clear sentences.', 'Build a sentence about a school activity and label its naming and action words.', 'Which word is the verb in “The pupils sing”?', 'Sing', ['The', 'Pupils', 'A']),
      topic('Writing a Short Description', 'Plan and write a short description with related details and correct sentence endings.', 'Describe a favourite place in your county using sight, sound, and feeling words.', 'What helps a description feel clear?', 'Details connected to the subject', ['Unrelated words', 'No punctuation', 'Only a title']),
    ],
    5: [
      topic('Comprehension and Inference', 'Combine information in a text with clues to make a sensible inference.', 'Read a short passage about a rainy day and list clues that tell you how people feel.', 'An inference is a conclusion made from what?', 'Clues and information', ['A guess with no clues', 'The book cover only', 'The last word only']),
      topic('Vocabulary and Word Choice', 'Use context, synonyms, and antonyms to understand and select words.', 'Play a word detective game: find a new word, use nearby clues, and suggest its meaning.', 'What can help you work out an unfamiliar word?', 'Clues around the word', ['Ignoring the sentence', 'Changing the page', 'Counting letters only']),
      topic('Paragraphs and Letters', 'Organise ideas into a focused paragraph and use an appropriate letter format.', 'Write a friendly letter inviting a classmate to a school event.', 'What should a paragraph mostly focus on?', 'One main idea', ['Many unrelated ideas', 'Only punctuation marks', 'A list of page numbers']),
    ],
    6: [
      topic('Summarising and Note-Making', 'Identify key points and record them in concise notes using your own words.', 'Read a short informational text and make a five-point class poster.', 'A good summary includes what?', 'The most important ideas', ['Every word from the text', 'Only examples', 'Unrelated opinions']),
      topic('Tenses and Direct Speech', 'Choose verb tenses that show time and use punctuation to present direct speech.', 'Write a short dialogue between a visitor and a student at a Kenyan museum.', 'Which sentence shows past tense?', 'We visited the museum yesterday.', ['We visit the museum tomorrow.', 'We are visiting now.', 'We will visit soon.']),
      topic('Reports and Creative Writing', 'Plan a short report or story with a clear purpose, audience, and sequence.', 'Interview a classmate about a hobby and write a brief report of the answers.', 'Before writing, what is useful to plan?', 'Purpose and main ideas', ['The page colour', 'A random ending only', 'Someone else’s answer']),
    ],
    7: [
      topic('Close Reading and Evidence', 'Support an interpretation of a text with specific words or details from the text.', 'Choose one claim about a story and highlight the sentence that supports it.', 'What should support an interpretation?', 'Evidence from the text', ['A guess alone', 'The font size', 'The page number']),
      topic('Sentence Structure and Style', 'Use varied sentence structures and accurate grammar for clear communication.', 'Edit a paragraph by combining short sentences and correcting agreement.', 'Why vary sentence structure?', 'To make writing clear and engaging', ['To hide the meaning', 'To remove every verb', 'To make it unrelated']),
      topic('Argument and Persuasion', 'State a position and support it with reasons and examples.', 'Hold a class mini-debate on a school garden and give one reason for your view.', 'A persuasive argument needs what?', 'A clear position and supporting reasons', ['Only a loud voice', 'No examples', 'An unrelated story']),
    ],
    8: [
      topic('Analysing Text and Point of View', 'Compare perspectives and distinguish facts, opinions, and implied meanings.', 'Compare two short reports about the same community event and note differences in viewpoint.', 'A viewpoint shows what?', 'A person’s perspective', ['The word count', 'The paper size', 'The weather only']),
      topic('Research and Source Use', 'Gather relevant information from more than one source and record where it came from.', 'Research a local environmental issue using two sources and create a source list.', 'Why record your sources?', 'To show where information came from', ['To make work longer', 'To avoid checking facts', 'To replace your explanation']),
      topic('Formal and Creative Writing', 'Adapt tone, structure, and vocabulary to the audience and purpose.', 'Write the same announcement once for a friend and once for a school noticeboard.', 'Why change tone for different audiences?', 'Readers and purposes differ', ['Words never have meaning', 'Every text is a poem', 'It makes writing shorter']),
    ],
    9: [
      topic('Evaluating Media Messages', 'Identify claims, evidence, bias, and persuasive choices in media texts.', 'Compare a social media post with a trusted information source before sharing it.', 'What should you check before sharing a claim?', 'Its evidence and source', ['How many colours it uses', 'Whether it is exciting', 'The number of emojis only']),
      topic('Building a Supported Argument', 'Develop a clear claim with relevant evidence, reasoning, and a considered conclusion.', 'Write a short argument about improving a shared school space.', 'What makes evidence useful?', 'It is relevant to the claim', ['It is unrelated', 'It is repeated many times', 'It is hidden']),
      topic('Editing and Presentation', 'Revise structure, grammar, and word choice for a clear final text.', 'Swap drafts with a partner and use a checklist to give kind, specific feedback.', 'What is a helpful editing step?', 'Read again and check clarity', ['Submit without reading', 'Delete every example', 'Ignore the audience']),
    ],
  },
  'science-technology': {
    4: [
      topic('Living Things and Habitats', 'Observe living things and describe how their features help them live in their habitats.', 'Make a labelled habitat poster using plants and animals found in Kenya.', 'What is a habitat?', 'A place where an organism lives', ['A type of graph', 'A cooking tool', 'A weather instrument']),
      topic('Materials and Their Uses', 'Compare material properties and choose suitable materials for familiar objects.', 'Test which safe classroom material absorbs water best and record what happens.', 'Why choose materials carefully?', 'Different materials have different properties', ['All materials are identical', 'Materials cannot be tested', 'Only colour matters']),
      topic('Energy, Light, and Sound', 'Explore light and sound through safe observations and simple investigations.', 'Make a shadow with a torch and object, then observe how it changes when the object moves.', 'A shadow forms when light is what?', 'Blocked by an object', ['Turned into soil', 'Changed to water', 'Removed from the Sun']),
    ],
    5: [
      topic('Human Body and Healthy Living', 'Describe basic body systems and habits that support health and wellbeing.', 'Design a daily health routine that includes movement, clean water, and rest.', 'Which habit supports health?', 'Regular physical activity', ['Skipping sleep every night', 'Avoiding clean water', 'Never washing hands']),
      topic('Forces and Simple Machines', 'Investigate pushes, pulls, and how simple machines make tasks easier.', 'Find safe examples of levers or ramps and explain what task each one helps with.', 'A ramp is an example of what?', 'An inclined plane', ['A food chain', 'A weather chart', 'A sound source']),
      topic('Weather, Water, and the Environment', 'Record weather patterns and describe how water moves through the environment.', 'Keep a week-long weather diary and compare it with local observations.', 'What helps make weather observations useful?', 'Recording them regularly', ['Guessing once', 'Changing the results', 'Ignoring the date']),
    ],
    6: [
      topic('Plant Growth and Ecosystems', 'Explain what plants need and how living things interact in an ecosystem.', 'Grow a seed safely, record changes, and compare growth with a plant receiving less light.', 'What do green plants need for healthy growth?', 'Water, light, and suitable conditions', ['Plastic and smoke', 'Darkness only', 'No water']),
      topic('Electricity and Energy', 'Identify simple circuit components and discuss safe ways to use energy.', 'Build a circuit with a classroom kit under teacher guidance and draw its parts.', 'What is needed for a simple circuit to work?', 'A complete conducting path', ['A broken wire', 'A paper drawing only', 'An open switch']),
      topic('Earth, Space, and Data', 'Use observations and simple models to describe patterns in the sky and on Earth.', 'Create a day-and-night model with a lamp and ball under adult guidance.', 'What causes day and night?', 'Earth rotating on its axis', ['Clouds moving', 'The Moon changing shape', 'The Sun moving around Earth each day']),
    ],
  },
  'integrated-science': {
    7: [
      topic('Cells and Living Systems', 'Use models to describe cells as basic units of living things and compare specialised functions.', 'Build a labelled cell model from reusable classroom materials.', 'What is a cell?', 'A basic unit of living things', ['A type of weather', 'A force only', 'A map symbol']),
      topic('Mixtures and Separation', 'Describe mixtures and choose suitable methods for separating their components.', 'Plan how to separate a safe mixture of sand and water and explain each step.', 'Which method can separate sand from water?', 'Filtration', ['Freezing the container', 'Using a magnet on water', 'Adding more sand']),
      topic('Forces and the Environment', 'Investigate forces and connect scientific ideas to environmental care.', 'Measure how far a toy car travels on different safe surfaces and compare results.', 'Why repeat a fair test?', 'To make results more dependable', ['To change the answer', 'To avoid measuring', 'To use different questions']),
    ],
    8: [
      topic('Nutrition and Body Systems', 'Relate nutrients to body needs and explain how body systems work together.', 'Compare a meal plan with a balanced plate guide and suggest helpful changes.', 'Why does the body need a varied diet?', 'Different nutrients have different roles', ['Every food has the same nutrients', 'Food is only for taste', 'The body needs no water']),
      topic('Chemical and Physical Changes', 'Distinguish changes that form new substances from changes that do not.', 'Observe safe examples such as dissolving salt and discuss what changed.', 'Which is usually a physical change?', 'Ice melting', ['Iron rusting', 'Wood burning', 'Food spoiling']),
      topic('Heat, Light, and Sound', 'Investigate energy transfer and describe patterns in waves and everyday devices.', 'Compare how different safe materials feel after being near sunlight and discuss heat transfer.', 'Heat moves naturally from what to what?', 'Warmer objects toward cooler surroundings', ['Cool objects to hotter ones only', 'The Moon to the stars', 'Sound to light']),
    ],
    9: [
      topic('Inheritance and Variation', 'Describe how characteristics can be inherited and why individuals vary.', 'Use fictional family traits in a class activity and distinguish inherited traits from learned skills.', 'What can inheritance help explain?', 'Some similarities among relatives', ['The colour of a classroom wall', 'A map scale', 'A weather forecast']),
      topic('Chemical Reactions and Conservation', 'Recognise evidence of chemical reactions and use simple models to discuss conservation of matter.', 'Observe a teacher-led safe reaction and list changes that suggest a new substance formed.', 'In a chemical reaction, what happens to atoms?', 'They rearrange to form new substances', ['They disappear completely', 'They turn into light only', 'They stop existing']),
      topic('Electricity and Sustainable Energy', 'Explain basic electrical ideas and compare renewable energy options used in Kenya.', 'Compare solar, wind, and geothermal energy and identify where each could be useful.', 'Which is a renewable energy source used in Kenya?', 'Geothermal energy', ['Coal', 'Petrol', 'Diesel']),
    ],
  },
  'social-studies': {
    4: [
      topic('Our County and Community', 'Describe community roles, local services, and ways people work together.', 'Draw a simple map of a community service and explain who it helps.', 'Who helps provide public services in a county?', 'Community and county workers', ['Only visitors', 'No one', 'Animals only']),
      topic('Maps and Kenyan Places', 'Use map keys and directions to locate familiar places in Kenya.', 'Create a classroom map with a key and compass directions.', 'What does a map key explain?', 'The meaning of map symbols', ['The story ending', 'A weather forecast', 'A number pattern']),
      topic('Citizenship and Shared Responsibility', 'Identify ways learners can contribute to safe, fair, and caring communities.', 'Make a class agreement for caring for shared resources.', 'What is one responsible community action?', 'Caring for shared spaces', ['Damaging public property', 'Ignoring safety', 'Excluding neighbours']),
    ],
    5: [
      topic('Kenya’s Physical Features', 'Locate major physical features and connect them with settlement and livelihoods.', 'Use a map to trace a river or highland area and discuss how people use it.', 'What is a physical feature?', 'A natural part of the landscape', ['A school rule', 'A type of sentence', 'A classroom timetable']),
      topic('Culture and Heritage', 'Explore cultural practices and heritage while showing respect for diversity.', 'Interview a family member about a local tradition and share what you learn respectfully.', 'How should we learn about other cultures?', 'With respect and curiosity', ['By mocking differences', 'By making assumptions', 'By refusing to listen']),
      topic('Trade and Resources', 'Explain how people exchange goods and services and use resources responsibly.', 'Make a role-play market and practise fair exchange using pretend tokens.', 'What is trade?', 'Exchange of goods or services', ['A map direction', 'A science measurement', 'A story setting']),
    ],
    6: [
      topic('Kenya’s Regions and Resources', 'Compare regions and describe how climate and resources influence livelihoods.', 'Create a county profile showing one resource and how people use it responsibly.', 'Why do livelihoods differ between regions?', 'Places have different environments and resources', ['Everyone has identical surroundings', 'Maps cause weather', 'Counties have no communities']),
      topic('Government and Public Services', 'Describe basic roles of national and county government and public services.', 'Match community services with the level of government responsible for them.', 'Which level of government manages county services?', 'County government', ['A school club', 'A market stall', 'A family only']),
      topic('Environment and Community Action', 'Discuss environmental challenges and plan practical community responses.', 'Work in groups to plan a safe clean-up or tree-care activity with adult support.', 'What makes a community action plan useful?', 'A clear goal and shared roles', ['No roles or goal', 'A list of unrelated games', 'Keeping it secret']),
    ],
    7: [
      topic('Maps, Scale, and Human Settlement', 'Interpret maps and explain how location influences human activities.', 'Compare settlement patterns near a road, river, and highland on a map.', 'What can a map scale tell us?', 'The relationship between map and ground distance', ['The age of a place', 'The population’s language', 'The colour of the paper']),
      topic('Resources and Economic Activities', 'Connect natural and human resources with economic activities and sustainability.', 'Map a local product from its source to a market and identify people involved.', 'What is one reason to use resources sustainably?', 'To protect them for future needs', ['To waste them faster', 'To stop all livelihoods', 'To hide them from everyone']),
      topic('Citizenship and Human Rights', 'Discuss rights, responsibilities, and respectful participation in community decisions.', 'Hold a class council and practise listening to different views before voting.', 'What supports a fair class decision?', 'Listening and considering everyone’s views', ['Interrupting others', 'Choosing secretly for everyone', 'Ignoring the question']),
    ],
    8: [
      topic('Kenya’s History and Heritage', 'Use evidence and accounts to describe change and continuity in Kenyan communities.', 'Create a simple timeline from oral histories shared by family or community members.', 'Why compare more than one account of the past?', 'Accounts can offer different evidence and perspectives', ['There is only one viewpoint', 'Dates are never useful', 'Stories cannot teach us']),
      topic('Population and Urbanisation', 'Interpret population patterns and consider opportunities and challenges of urban growth.', 'Compare a rural and urban settlement using a map and a short information source.', 'What is urbanisation?', 'Growth of towns and cities', ['Movement of clouds', 'A farming tool', 'A type of rainfall']),
      topic('Governance and Public Participation', 'Explain how citizens can take part in decisions and hold institutions accountable.', 'Design a respectful petition about a school or community improvement.', 'What is public participation?', 'People contributing to decisions that affect them', ['One person hiding information', 'A private game', 'Ignoring community views']),
    ],
    9: [
      topic('Regional Connections and Trade', 'Explain links between East African communities through trade, transport, and shared resources.', 'Trace a product from a local source to a regional market using a map.', 'What can regional trade support?', 'Exchange and cooperation', ['Isolation only', 'No transport', 'Loss of all communication']),
      topic('Conflict, Cooperation, and Peace', 'Identify causes of conflict and practise approaches that support dialogue and peace.', 'Role-play a disagreement and use listening, turn-taking, and a fair solution.', 'What is a peaceful first step in resolving disagreement?', 'Listen and discuss the problem', ['Use threats', 'Spread rumours', 'Refuse to hear anyone']),
      topic('Sustainable Development and Citizenship', 'Evaluate local development choices using fairness, environmental care, and community wellbeing.', 'Compare two community project ideas and explain who benefits and what resources they need.', 'A sustainable project considers what?', 'People, resources, and future effects', ['Only immediate cost', 'One person’s opinion', 'Nothing beyond the opening day']),
    ],
  },
}

function genericTopics(subjectName, gradeNumber) {
  const isUpperPrimary = gradeNumber <= 6
  const subject = subjectName.replace(/-/g, ' ')
  const set = /agriculture/.test(subject)
    ? [
        ['Soil, Plants, and Food', 'Explore how soil, seeds, and care support food production.', 'Plan a small container garden and label what a plant needs.', 'What helps a crop grow?', 'Healthy soil and water', ['Plastic wrappers', 'No sunlight ever', 'Broken glass']],
        ['Farm Tools and Safe Work', 'Identify suitable tools and safe practices for simple agricultural tasks.', 'Match a tool picture to a safe task and explain the choice.', 'Why use tools safely?', 'To prevent harm and do the task well', ['To make work dangerous', 'To damage crops', 'To avoid instructions']],
        ['Harvest, Storage, and Nutrition', 'Explain how careful harvesting and storage reduce food loss.', 'Design a poster showing ways to keep harvested food clean and safe.', 'Why store food properly?', 'To keep it safe and reduce spoilage', ['To make it dirty', 'To waste it', 'To hide it outdoors']],
      ]
    : /creative|art|music|sport|physical|health/.test(subject)
      ? [
          ['Explore and Observe', 'Notice how artists, performers, or athletes use materials, movement, and space.', 'Collect examples from your environment and describe one feature you notice.', 'What is a helpful first step in a creative task?', 'Observe and explore ideas', ['Copy without looking', 'Skip planning', 'Hide your materials']],
          ['Practise a Skill', 'Build a skill through safe practice, feedback, and repetition.', 'Practise a short sequence, then ask a partner for one kind suggestion.', 'What helps a skill improve?', 'Practice and useful feedback', ['Never trying again', 'Unsafe equipment', 'Ignoring instructions']],
          ['Create and Share', 'Plan a small performance, artwork, or wellbeing message for a real audience.', 'Work as a team to create something that shares a positive message.', 'What makes sharing work respectful?', 'Listening and appreciating others', ['Mocking a classmate', 'Taking someone’s work', 'Interrupting the performance']],
        ]
      : /language|arabic|french|german|mandarin|kiswahili|english/.test(subject)
        ? [
            ['Listening and Speaking', 'Listen for key information and speak clearly for a familiar audience.', 'Interview a partner and report one thing you learned.', 'What helps a speaker communicate clearly?', 'Clear words and attention to the listener', ['Speaking without a purpose', 'Ignoring questions', 'Changing every topic']],
            ['Reading and Vocabulary', 'Use context and text features to understand new words and ideas.', 'Choose a short text and make a mini glossary of useful words.', 'What can help explain a new word?', 'Context around the word', ['Ignoring the sentence', 'The page colour', 'A random guess only']],
            ['Writing and Sharing Ideas', 'Plan, write, and revise a short text with a clear purpose.', 'Write a message about a local place and edit it with a peer.', 'What is a useful step before writing?', 'Plan the purpose and main idea', ['Submit before starting', 'Use unrelated facts', 'Avoid rereading']],
          ]
        : [
            [`Key Ideas in ${subject}`, `Explore important ideas and vocabulary in ${subject} at Grade ${gradeNumber} level.`, 'Make a mind map with one main idea and three connected examples.', 'What helps you understand a new idea?', 'Connecting it to an example', ['Memorising without meaning', 'Ignoring the topic', 'Guessing without clues']],
            [`Skills and Evidence in ${subject}`, `Practise gathering information, using evidence, and explaining your thinking in ${subject}.`, 'Use a class example to make a claim, then give one reason or piece of evidence.', 'What should support a claim?', 'A relevant reason or evidence', ['An unrelated story', 'A louder voice', 'A random colour']],
            [`${subject} in Everyday Life`, `Connect ${subject} to home, school, and community life in Kenya.`, 'Find one example from your community and explain how this learning area helps us understand it.', 'Why connect learning to daily life?', 'It helps us apply ideas in real situations', ['It makes learning unrelated', 'It removes the need to think', 'It changes the subject']],
          ]
  return set.map(([title, focus, activity, question, answer, distractors], index) => ({
    id: index + 1,
    title,
    focus,
    activity,
    question,
    answer,
    options: [answer, ...distractors].sort(),
    lessons: lessonNames(title),
  }))
}

export function getGradeBandTopics(subjectSlug, gradeId) {
  const gradeNumber = Number(gradeId.replace('grade-', ''))
  if (gradeNumber < 4 || gradeNumber > 9) return null
  const specific = byGrade[subjectSlug]?.[gradeNumber]
  if (specific) return specific.map((item, index) => ({ ...item, id: index + 1, description: item.focus }))
  return genericTopics(subjectSlug, gradeNumber).map((item) => ({ ...item, description: item.focus }))
}

export function createGradeBandLesson(gradeId, subjectName, lessonSlug) {
  const subjectSlug = slugify(decodeURIComponent(subjectName))
  const topics = getGradeBandTopics(subjectSlug, gradeId)
  const topicData = topics?.find((item) => item.lessons.some((title) => slugify(title) === lessonSlug))
  if (!topicData) return null
  const title = topicData.lessons.find((item) => slugify(item) === lessonSlug)
  const grade = `Grade ${gradeId.replace('grade-', '')}`
  return {
    title,
    subject: decodeURIComponent(subjectName).replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()),
    grade,
    topic: topicData.title,
    duration: '15 minutes',
    objectives: [`Explain a key idea in ${topicData.title.toLowerCase()}.`, 'Use evidence or a clear method to support your thinking.', 'Connect the learning to a familiar Kenyan example.'],
    sections: [
      { heading: 'Understand the idea', paragraphs: [topicData.focus, `In ${grade}, practise naming the important ideas and showing how they connect. Use examples from your school, home, county, or community to make the learning meaningful.`] },
      { heading: 'Try this activity', paragraphs: [topicData.activity, 'Record what you notice, compare ideas with a partner, and explain why your example fits the topic.'] },
      { heading: 'Check your thinking', paragraphs: [`Ask yourself: what did I learn about ${topicData.title.toLowerCase()}? Can I explain it in my own words and use it in a new example?`, 'If your first answer is not clear, revisit the key idea and try again with a different example.'] },
    ],
    example: {
      question: `How can you use ${topicData.title.toLowerCase()} to solve a task?`,
      steps: ['Identify what the task asks.', 'Choose the relevant idea, evidence, or method.', 'Explain your answer and check that it fits the task.'],
      answer: 'A clear answer supported by relevant subject knowledge and an example.',
    },
    questions: [
      { question: topicData.question, options: topicData.options, answer: topicData.answer, explanation: `This checks the key idea in ${topicData.title.toLowerCase()}.` },
      { question: 'Which approach helps you learn this topic well?', options: ['Try the activity, record what happens, and explain it', 'Skip the evidence', 'Use an unrelated example', 'Guess without reading'], answer: 'Try the activity, record what happens, and explain it', explanation: 'Active practice and evidence help you understand and remember learning.' },
      { question: `Where could you apply ${topicData.title.toLowerCase()}?`, options: ['In a familiar home, school, or community situation', 'Only on the cover of a book', 'Nowhere outside a quiz', 'In an unrelated subject only'], answer: 'In a familiar home, school, or community situation', explanation: 'CBC learning encourages using knowledge and skills in real situations.' },
    ],
  }
}
