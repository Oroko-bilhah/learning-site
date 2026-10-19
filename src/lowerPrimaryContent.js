const slugify = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const activities = {
  mathematics: {
    1: [
      ['Counting Things Around Us', 'Count bottle tops, beans, or mangoes from 1 to 20. Touch each object once so none are missed.', 'Put 7 beans on a plate. Count them aloud, then add 2 more. How many beans are there now?', 'How many objects are there after adding 2 to 7?', ['8', '9', '10', '11'], '9'],
      ['Adding and Taking Away', 'Use fingers or counters to act out small addition and subtraction stories within 10.', 'A child has 5 pencils and receives 3 more. Count on: 6, 7, 8. There are 8 pencils.', 'What is 4 + 3?', ['5', '6', '7', '8'], '7'],
      ['Shapes We Can See', 'Find circles, squares, and triangles in classroom objects. Trace each shape in the air.', 'A clock face is usually round. Its face is shaped like a circle.', 'Which shape has three straight sides?', ['Circle', 'Triangle', 'Square', 'Rectangle'], 'Triangle'],
    ],
    2: [
      ['Tens and Ones', 'Bundle 10 sticks together. Loose sticks are ones; each bundle is one ten.', '23 is 2 tens and 3 ones. Two bundles and 3 loose sticks make 23.', 'How many tens and ones are in 35?', ['3 tens and 5 ones', '5 tens and 3 ones', '3 tens and 2 ones', '5 ones'], '3 tens and 5 ones'],
      ['Adding and Subtracting to 100', 'Draw tens sticks and ones dots, or use beans. Make both numbers before joining or taking away.', 'For 24 + 13, add tens (20 + 10) and ones (4 + 3). The total is 37.', 'What is 32 + 15?', ['37', '47', '45', '57'], '47'],
      ['Patterns and Measuring', 'Make a repeating pattern with coloured pencils, then measure your desk using hand spans.', 'In red, blue, red, blue, the pattern repeats every two colours.', 'What comes next: red, blue, red, blue, red, ...?', ['Red', 'Blue', 'Green', 'Yellow'], 'Blue'],
    ],
    3: [
      ['Numbers to 1,000', 'Make hundreds, tens, and ones with groups of counters. Say the number and write its digits.', '426 means 4 hundreds, 2 tens, and 6 ones.', 'In 582, what does the digit 8 show?', ['8 hundreds', '8 tens', '8 ones', '80 hundreds'], '8 tens'],
      ['Multiplication and Sharing', 'Make equal groups with seeds or counters. Count by the same number for multiplication; share equally for division.', 'Three baskets with 4 oranges each make 4 + 4 + 4 = 12 oranges, or 3 × 4.', 'There are 4 groups of 2 counters. How many counters altogether?', ['6', '8', '10', '12'], '8'],
      ['Fractions, Time, and Money', 'Fold paper into equal parts to explore halves and quarters. Read a clock and practise using Kenyan shilling amounts.', 'If a chapati is shared into 2 equal pieces, each piece is one half.', 'A whole chapati is cut into 2 equal pieces. One piece is called a ...', ['Half', 'Third', 'Quarter', 'Ten'], 'Half'],
    ],
  },
  'english-activities': {
    1: [
      ['Letter Sounds and First Words', 'Say a sound, find its letter, then think of a familiar word that begins with it.', 'The letter m makes the first sound in moon and mango.', 'Which word begins with the letter s?', ['Moon', 'Sand', 'Tap', 'Hen'], 'Sand'],
      ['Listening and Speaking', 'Listen to a short story. Tell a friend who was in it and what happened first.', 'Good listeners face the speaker, wait for a turn, and answer about the story.', 'What should you do while a friend is speaking?', ['Listen carefully', 'Shout over them', 'Walk away', 'Hide the storybook'], 'Listen carefully'],
      ['Reading Simple Sentences', 'Point to each word as you read. Look at the picture for clues and read the sentence again smoothly.', '“The hen has a chick.” tells us which animal has a chick.', 'In “The cat can run,” which animal can run?', ['Cat', 'Hen', 'Fish', 'Cow'], 'Cat'],
    ],
    2: [
      ['Word Families and Spelling', 'Make new words by changing the first sound: cat, bat, hat. Clap the sounds as you spell.', 'Cat and bat rhyme and share the ending sound pattern -at.', 'Which word rhymes with cake?', ['Lake', 'Book', 'Cup', 'Sun'], 'Lake'],
      ['Reading for Meaning', 'Read a short paragraph, then find a person, place, or action named in it.', 'If a story says Amina watered the beans, Amina is the person and watering is the action.', 'In “Kamau rides a bicycle,” who rides?', ['A bicycle', 'Kamau', 'A friend', 'Nobody'], 'Kamau'],
      ['Writing Clear Sentences', 'Put words in order, start with a capital letter, and finish with a full stop.', '“we play at school” becomes “We play at school.”', 'Which sentence is written correctly?', ['the bird sings', 'The bird sings.', 'the Bird sings.', 'The bird sings'], 'The bird sings.'],
    ],
    3: [
      ['Reading and Finding Main Ideas', 'Read a short passage twice. Ask: who or what is it mostly about?', 'A passage describing how pupils plant trees is mainly about planting and caring for trees.', 'What does the main idea tell you?', ['What a passage is mostly about', 'The last letter only', 'The page number', 'The colour of the book'], 'What a passage is mostly about'],
      ['Building Strong Sentences', 'Use a naming word and an action word. Add describing words to make your sentence clearer.', '“The small goat jumps.” Goat names; jumps tells the action; small describes it.', 'Which word tells the action in “The small goat jumps”?', ['The', 'Small', 'Goat', 'Jumps'], 'Jumps'],
      ['Writing a Short Story', 'Plan who is in your story, where it happens, and what happens first, next, and last.', 'A story about helping at home can begin with a problem, show how someone helps, and end with what changed.', 'What helps a story make sense?', ['Events in a clear order', 'Random words only', 'No people or events', 'Every sentence on a new page'], 'Events in a clear order'],
    ],
  },
  kiswahili: {
    1: [
      ['Salamu na Majibu', 'Cheza mchezo wa salamu: sema “Habari?” na mwenzako ajibu “Nzuri.”', 'Tunatumia salamu kuanza mazungumzo kwa heshima.', 'Jibu linalofaa kwa “Habari?” ni lipi?', ['Nzuri', 'Meza', 'Kalamu', 'Kimbia'], 'Nzuri'],
      ['Maneno ya Nyumbani', 'Taja vitu unavyoona nyumbani, kisha urudie majina yake kwa sauti.', 'Maneno kama kikombe, mlango na kiti hutusaidia kueleza vitu.', 'Ni kipi ni kitu cha kukalia?', ['Kiti', 'Maji', 'Jua', 'Ndege'], 'Kiti'],
      ['Kusikiliza Hadithi Fupi', 'Sikiliza hadithi, kisha eleza mhusika mmoja na alichofanya.', 'Kusikiliza kwa makini hutusaidia kuelewa hadithi.', 'Baada ya kusikiliza hadithi, tufanye nini?', ['Tueleze tulichosikia', 'Tupige kelele', 'Tufunge kitabu', 'Tukimbie'], 'Tueleze tulichosikia'],
    ],
    2: [
      ['Silabi na Maneno', 'Piga makofi kwa kila silabi unapotamka maneno ya kawaida.', 'Katika neno ma-ma, tunasikia silabi mbili.', 'Neno “ki-ti” lina silabi ngapi?', ['Moja', 'Mbili', 'Tatu', 'Nne'], 'Mbili'],
      ['Kusoma Sentensi', 'Soma sentensi fupi, kisha eleza nani anafanya nini.', '“Asha analima shamba.” Asha ndiye anayefanya kitendo.', 'Katika “Juma anasoma kitabu,” nani anasoma?', ['Kitabu', 'Juma', 'Shamba', 'Mwalimu'], 'Juma'],
      ['Kuandika Sentensi', 'Panga maneno ili sentensi iwe na maana. Tumia herufi kubwa mwanzo na alama ya mwisho.', '“mama anapika” huandikwa “Mama anapika.”', 'Sentensi huanza na herufi gani?', ['Herufi kubwa', 'Namba', 'Alama ya kuuliza kila mara', 'Herufi ndogo tu'], 'Herufi kubwa'],
    ],
    3: [
      ['Msamiati na Maelezo', 'Chagua maneno yanayoeleza mtu, mahali au kitu. Tumia neno jipya katika sentensi.', '“Mti mrefu uko karibu na shule.” Mrefu linaeleza mti.', 'Katika sentensi “ua jekundu limechanua,” neno “jekundu” linaeleza nini?', ['Ua', 'Shule', 'Maji', 'Mwalimu'], 'Ua'],
      ['Ufahamu wa Kifungu', 'Soma kifungu na ujibu maswali kwa kutumia taarifa ulizosoma.', 'Tafuta sentensi inayotoa jibu badala ya kubahatisha.', 'Jibu la swali la ufahamu litokane na nini?', ['Kifungu ulichosoma', 'Rangi ya kalamu', 'Hadithi nyingine', 'Kubahatisha'], 'Kifungu ulichosoma'],
      ['Kuandika Kifungu Kifupi', 'Andika sentensi kadhaa kuhusu jambo moja. Ziweke kwa mpangilio unaoeleweka.', 'Unaweza kueleza jinsi ya kutunza mche: kumwagilia, kuuweka salama, na kuuangalia ukikua.', 'Sentensi katika kifungu kifupi zizungumzie nini?', ['Mada moja inayohusiana', 'Mada zisizohusiana kabisa', 'Herufi moja tu', 'Namba pekee'], 'Mada moja inayohusiana'],
    ],
  },
  'environmental-activities': {
    1: [
      ['Me, My Family, and School', 'Draw yourself with people who care for you. Name one way to help at home or school.', 'People in a family can care for one another in different ways.', 'Which action helps keep our classroom friendly?', ['Sharing materials', 'Pushing a friend', 'Littering', 'Shouting at everyone'], 'Sharing materials'],
      ['Our Senses Help Us', 'Go on a quiet classroom discovery walk. What can you see, hear, smell, and touch safely?', 'Our senses help us notice what is around us.', 'Which sense helps you hear a bell?', ['Hearing', 'Taste', 'Smell', 'Touch'], 'Hearing'],
      ['Plants and Animals Nearby', 'Observe a plant without picking it. Look for leaves, roots, or flowers. Name an animal you see nearby.', 'Plants need care, water, and a suitable place to grow.', 'What helps a plant grow?', ['Water and care', 'Plastic wrappers', 'No light ever', 'Being pulled up'], 'Water and care'],
    ],
    2: [
      ['Healthy Habits', 'Make a healthy-habits chart: wash hands, drink clean water, eat a variety of foods, and rest.', 'Washing hands with soap helps remove dirt and germs.', 'When should we wash our hands?', ['Before eating', 'Only once a year', 'Never', 'After drawing only'], 'Before eating'],
      ['Weather Watchers', 'Look outside with an adult. Draw the weather today and record it for several days.', 'A weather chart helps us notice sunny, cloudy, windy, or rainy days.', 'What can we use to record daily weather?', ['A weather chart', 'A cooking pot', 'A shoe', 'A story character'], 'A weather chart'],
      ['Keeping Our School Clean', 'Work as a team to sort waste safely and put litter in the right bin.', 'A clean school is safer and more pleasant for everyone.', 'What should you do with litter?', ['Put it in the right bin', 'Throw it in a stream', 'Hide it under a desk', 'Leave it on a path'], 'Put it in the right bin'],
    ],
    3: [
      ['Living Things and Their Needs', 'Compare a plant and an animal. Talk about what each needs to stay alive.', 'Living things grow and need resources such as air, water, and food or nutrients.', 'Which is a basic need for both plants and animals?', ['Water', 'A toy', 'A school bag', 'A television'], 'Water'],
      ['Soil and Growing Food', 'With an adult, compare soil from two safe places. Notice colour, texture, and what grows there.', 'Healthy soil supports plants that provide food for people and animals.', 'Why do farmers care for soil?', ['To help crops grow', 'To turn it into plastic', 'To stop all plants', 'To hide rubbish'], 'To help crops grow'],
      ['Caring for Our Environment', 'Choose one local place to care for, such as a school garden. Make a simple team action plan.', 'Small actions such as planting, saving water, and reducing litter help our surroundings.', 'Which action helps the environment?', ['Planting and caring for trees', 'Wasting clean water', 'Burning plastic near homes', 'Leaving taps running'], 'Planting and caring for trees'],
    ],
  },
  'creative-activities': {
    1: [
      ['Lines, Shapes, and Colour', 'Draw a happy place using circles, triangles, and lines. Give your picture a name.', 'Artists use shapes and colours to share ideas.', 'Which tool can make a coloured drawing?', ['Crayons', 'A spoon only', 'A shoe', 'A ruler only'], 'Crayons'],
      ['Clap a Rhythm', 'Clap a short pattern and invite a friend to copy it. Take turns being the rhythm leader.', 'A rhythm is a pattern of sounds and silences.', 'What can you use to make a rhythm?', ['Clapping', 'Sleeping', 'Reading silently', 'Hiding'], 'Clapping'],
      ['Move Like an Animal', 'Choose a safe animal movement, such as a bird stretching its wings. Move gently in your space.', 'Movement and dance can show ideas without words.', 'What should you check before moving around?', ['That there is safe space', 'That your eyes are closed', 'That you bump others', 'That you run into desks'], 'That there is safe space'],
    ],
    2: [
      ['Patterns with Paper and Nature', 'Arrange leaves that have fallen naturally or paper shapes into a repeating pattern.', 'A repeating pattern follows a rule you can describe.', 'What comes next in circle, square, circle, square?', ['Circle', 'Triangle', 'Leaf', 'Star'], 'Circle'],
      ['Make a Simple Instrument', 'With adult help, make a shaker from a sealed container and a few beans. Shake gently to explore sound.', 'Different materials can make sounds that are high, low, loud, or soft.', 'How can you make a shaker sound?', ['Shake it gently', 'Put it in water', 'Throw it', 'Tear it apart'], 'Shake it gently'],
      ['Tell a Story with Pictures', 'Draw three pictures showing what happened first, next, and last in a story you invent.', 'Pictures can help an audience follow a story.', 'Which picture should come first?', ['The beginning', 'The ending', 'A random middle part', 'No picture'], 'The beginning'],
    ],
    3: [
      ['Design a Helpful Object', 'Draw an object that could help your class, such as a book holder. Label its parts.', 'Designers notice a need, imagine an idea, and share how it might work.', 'What should a designer think about first?', ['What need the object will solve', 'Only its colour', 'How to hide it', 'How to break it'], 'What need the object will solve'],
      ['Music and Performance', 'Make a short group performance with a beginning, a repeated rhythm, and a clear ending.', 'Performers practise together and listen for their cues.', 'What helps a group perform together?', ['Listening and taking turns', 'Everyone changing the plan secretly', 'Pushing to the front', 'Ignoring the rhythm'], 'Listening and taking turns'],
      ['Create and Improve', 'Make a small artwork, show it to a partner, and choose one change that makes your idea clearer.', 'Artists can improve their work after looking carefully and hearing kind feedback.', 'What is helpful feedback?', ['A kind idea that helps improve the work', 'A hurtful name', 'A loud interruption', 'A rule to stop creating'], 'A kind idea that helps improve the work'],
    ],
  },
}

const extraAreaNames = {
  cre: 'Christian Religious Education',
  ire: 'Islamic Religious Education',
  hre: 'Hindu Religious Education',
  'indigenous-languages': 'Indigenous Languages',
}

// Additional strands make the learner paths cover the wider lower-primary
// design: communication, numeracy, health, environment, creativity and values.
const strandTopics = {
  mathematics: [
    ['More number work', 'Use objects, number lines, and place-value groups to compare numbers and choose addition or subtraction for a simple story.', 'Make two number cards, compare them, then create and solve a matching story problem.', 'Which tool can help you compare numbers?', ['A number line', 'A pillow', 'A cup only', 'A shoe'], 'A number line'],
    ['Measure and describe', 'Compare length, mass, and capacity using familiar objects and suitable units. Notice that a measurement answers a question about how much or how long.', 'Estimate, then measure a book with a ruler or a container with cups of water alongside an adult.', 'What does a ruler help us measure?', ['Length', 'Taste', 'Sound', 'Smell'], 'Length'],
    ['Space, shapes, and position', 'Recognise and sort flat and solid shapes. Use words such as above, below, beside, and between to describe position.', 'Build a shape picture from paper pieces and describe where each shape is.', 'How many sides does a triangle have?', ['Three', 'Two', 'Four', 'One'], 'Three'],
    ['Fractions, money, and data', 'Share objects into equal parts, recognise familiar Kenyan coins and notes, and collect or sort simple information.', 'Share fruit pictures equally, sort classroom votes into groups, and draw a simple picture graph.', 'What makes two shares fair?', ['They are equal', 'One is hidden', 'They are different sizes', 'No one counts'], 'They are equal'],
  ],
  'english-activities': [
    ['Listening for sounds and words', 'Listen for beginning, middle, and ending sounds. Say familiar words clearly and take turns in a conversation.', 'Play I-spy with sounds, then tell a partner one sentence about the object you found.', 'What helps you understand a speaker?', ['Listening carefully', 'Talking over them', 'Turning away', 'Guessing only'], 'Listening carefully'],
    ['Read words and short texts', 'Use letter sounds, familiar words, pictures, and punctuation to read increasingly longer sentences and short texts.', 'Choose a short story, point to each line, and find one word or event you can explain.', 'What can a picture do when you read?', ['Give a clue about the text', 'Replace every word', 'Hide the story', 'Change the page'], 'Give a clue about the text'],
    ['Words and sentence patterns', 'Build vocabulary and use naming, action, and describing words in clear sentences. Notice capitals and end marks.', 'Pick a classroom object and make a sentence that names it and describes what it does.', 'Which word is an action in “Birds fly”?', ['Fly', 'Birds', 'The', 'Blue'], 'Fly'],
    ['Write to share ideas', 'Practise handwriting, spelling, and planning. Write labels, messages, and connected sentences for a real audience.', 'Make a short illustrated note inviting a friend to a class activity.', 'What should a clear sentence usually have?', ['Words in an order that makes sense', 'Only random letters', 'No spaces', 'A drawing instead of all words'], 'Words in an order that makes sense'],
  ],
  kiswahili: [
    ['Kusikiliza na kuzungumza', 'Sikiliza maelekezo na hadithi fupi, zungumza kwa zamu, na tumia salamu na maneno ya heshima.', 'Salimiana na mwenzako kisha eleza jambo ulilofanya leo.', 'Tunapozungumza na rafiki, tufanye nini?', ['Tusikilize kwa zamu', 'Tupige kelele', 'Tukatishe kila mara', 'Tuondoke'], 'Tusikilize kwa zamu'],
    ['Sauti, silabi na msamiati', 'Tambua sauti na silabi katika maneno. Jifunze msamiati unaohusu watu, vitu, vitendo na mazingira.', 'Piga makofi kwa silabi za jina lako na utaje neno lingine lenye silabi hizo.', 'Neno “maji” lina silabi ngapi?', ['Mbili', 'Moja', 'Tatu', 'Nne'], 'Mbili'],
    ['Kusoma na ufahamu', 'Soma maneno, sentensi na vifungu vifupi. Tumia picha na maelezo ya kifungu kuelewa maana na matukio.', 'Soma hadithi fupi, kisha taja mhusika na jambo moja alilofanya.', 'Jibu la ufahamu litokane na nini?', ['Kifungu ulichosoma', 'Rangi ya meza', 'Kubahatisha tu', 'Hadithi tofauti'], 'Kifungu ulichosoma'],
    ['Sarufi na uandishi', 'Panga maneno katika sentensi, tumia alama za uandishi na andika ujumbe au kifungu kifupi chenye mawazo yanayofuatana.', 'Andika sentensi tatu kuhusu jinsi unavyosaidia nyumbani.', 'Sentensi huanza kwa herufi gani?', ['Herufi kubwa', 'Namba', 'Herufi ndogo kila mara', 'Alama ya mwisho'], 'Herufi kubwa'],
  ],
  'environmental-activities': [
    ['People, places, and community', 'Learn about family roles, school, local places, safety, cooperation, and ways people help one another.', 'Draw a simple map from your classroom to a familiar safe place and name people who help there.', 'Who can help keep a school safe?', ['Learners and adults working together', 'Only visitors', 'Nobody', 'People who litter'], 'Learners and adults working together'],
    ['Health, hygiene, and nutrition', 'Practise personal cleanliness, safe water habits, healthy food choices, rest, exercise, and asking a trusted adult for help.', 'Sort food pictures into a colourful meal and demonstrate handwashing steps.', 'When is it important to wash your hands?', ['Before eating', 'Never', 'Only on holidays', 'After sleeping only'], 'Before eating'],
    ['Plants, animals, and habitats', 'Observe living things, identify their basic needs, and describe how plants and animals depend on their surroundings.', 'Draw a local plant or animal and add the things it needs to live.', 'What do plants need to grow?', ['Water, air, and light', 'Plastic wrappers', 'Only toys', 'No care'], 'Water, air, and light'],
    ['Weather, resources, and care', 'Observe weather and seasons, use resources carefully, and practise keeping the home, school, and environment clean.', 'Keep a week-long weather picture chart and choose one way to save water.', 'Which action conserves water?', ['Turning off a tap after use', 'Leaving it running', 'Pouring it on a path', 'Throwing rubbish in it'], 'Turning off a tap after use'],
  ],
  'creative-activities': [
    ['Drawing, colour, and design', 'Use lines, shapes, colour, texture, and locally available safe materials to create and explain visual work.', 'Create a picture of a place you love using at least three colours and two shapes.', 'What can an artist use to make a picture?', ['Lines and shapes', 'Only numbers', 'A closed book', 'A clock'], 'Lines and shapes'],
    ['Music, rhythm, and sound', 'Listen for and make different sounds, repeat simple rhythms, sing, and explore safe instruments and materials.', 'Clap a rhythm for a partner to echo, then change one beat.', 'What is a rhythm?', ['A pattern of sounds and silences', 'A kind of shoe', 'A colour', 'A place on a map'], 'A pattern of sounds and silences'],
    ['Movement, dance, and drama', 'Move safely in personal space, use gestures and expression, and take roles in simple imaginative play.', 'Show an animal moving through rain using a safe movement and facial expression.', 'What should you check before dancing?', ['There is safe space', 'The floor is slippery', 'Friends are in the way', 'Your eyes are closed'], 'There is safe space'],
    ['Make, build, and improve', 'Plan and make simple objects or models, use materials responsibly, and talk about how a design can be improved.', 'Build a small paper bridge and test it with a light object; change it if needed.', 'What can you do after testing a design?', ['Improve it', 'Hide it', 'Stop thinking', 'Break the materials'], 'Improve it'],
  ],
}

for (const area of ['cre', 'ire', 'hre', 'indigenous-languages']) {
  const areaName = extraAreaNames[area]
  strandTopics[area] = [
    ['Stories and identity', `Listen to age-appropriate ${areaName} stories and identify people, places, important events, and lessons.`, 'Draw one part of a story and retell it in your own words.', 'What can a story help us learn?', ['Ideas and lessons', 'Only shoe sizes', 'Nothing at all', 'A timetable'], 'Ideas and lessons'],
    ['Beliefs and practices', `Explore familiar ${areaName} words, symbols, celebrations, or practices respectfully with guidance from family and teachers.`, 'Make a picture or word card that shows a practice or idea you have learned about.', 'How should we learn about another person’s beliefs?', ['With respect and curiosity', 'By laughing at them', 'By interrupting', 'By refusing to listen'], 'With respect and curiosity'],
    ['Values and caring choices', 'Practise kindness, honesty, responsibility, gratitude, and care for people and shared places.', 'Act out a kind choice with a partner, then explain why it helps.', 'Which action shows kindness?', ['Helping a classmate', 'Taking their things', 'Laughing at a mistake', 'Breaking shared items'], 'Helping a classmate'],
    ['Language and community', `Use simple ${areaName} words, greetings, songs, or oral traditions to share knowledge and strengthen a sense of belonging.`, 'Ask a family member to teach you a greeting, song, or saying and share what it means.', 'What is a respectful way to learn a community tradition?', ['Ask and listen carefully', 'Make fun of it', 'Change its meaning', 'Ignore the speaker'], 'Ask and listen carefully'],
  ]
}

const strandLessons = (subjectSlug) => (strandTopics[subjectSlug] || []).map(([title, focus, activity, question, options, answer], index) => ({
  id: `strand-${index + 1}`,
  title,
  description: focus,
  lessons: [`Discover ${title}`, `Play and practise ${title}`, `Show what you know: ${title}`],
  focus,
  activity,
  question,
  options,
  answer,
  subject: extraAreaNames[subjectSlug],
}))

function makeExtraTopics(subjectSlug, gradeNumber) {
  const subject = extraAreaNames[subjectSlug] || subjectSlug.replace(/-/g, ' ')
  return [
    { title: 'Stories and Good Choices', focus: `Listen to an age-appropriate ${subject} story. Name a kind or wise choice in it.`, activity: 'Draw a story moment and tell a friend what the character learned.', question: 'What can a story help us think about?', options: ['Choices and lessons', 'Only shoe sizes', 'The weather next year', 'A shopping list'], answer: 'Choices and lessons' },
    { title: 'Care and Respect', focus: 'Practise showing respect, kindness, and care for other people and shared places.', activity: 'Act out a kind choice at home or school, then swap roles with a partner.', question: 'Which action shows respect?', options: ['Listening kindly', 'Taking a friend’s things', 'Laughing when someone is hurt', 'Breaking shared materials'], answer: 'Listening kindly' },
    { title: 'Sharing What We Learn', focus: `Use a picture, short sentence, or spoken explanation to share something learned in ${subject}.`, activity: 'Make a mini-poster with one picture and one sentence. Share it with your group.', question: 'What helps you share an idea clearly?', options: ['A picture or clear words', 'Hiding the idea', 'Speaking so softly no one hears', 'Changing the subject'], answer: 'A picture or clear words' },
  ].map((item, index) => ({
    id: index + 1,
    title: item.title,
    description: item.focus,
    lessons: [`Discover ${item.title}`, `Try ${item.title}`, `Share ${item.title}`],
    focus: item.focus,
    activity: item.activity,
    question: item.question,
    options: item.options,
    answer: item.answer,
    subject,
  }))
}

export function getLowerPrimaryTopics(subjectSlug, gradeId) {
  const gradeNumber = Number(gradeId.replace('grade-', ''))
  if (gradeNumber < 1 || gradeNumber > 3) return null
  const data = activities[subjectSlug]?.[gradeNumber]
  if (data) {
    return [...data.map(([title, focus, activity, question, options, answer], index) => ({
      id: index + 1,
      title,
      description: focus,
      lessons: [`Discover ${title}`, `Play and practise ${title}`, `Show what you know: ${title}`],
      focus,
      activity,
      question,
      options,
      answer,
    })), ...strandLessons(subjectSlug)]
  }
  if (['cre', 'ire', 'hre', 'indigenous-languages'].includes(subjectSlug)) {
    return [...makeExtraTopics(subjectSlug, gradeNumber), ...strandLessons(subjectSlug)]
  }
  return null
}

export function createLowerPrimaryLesson(gradeId, subjectName, lessonSlug) {
  const subjectSlug = slugify(decodeURIComponent(subjectName))
  const topics = getLowerPrimaryTopics(subjectSlug, gradeId)
  const topic = topics?.find((item) => item.lessons.some((title) => slugify(title) === lessonSlug))
  if (!topic) return null
  const title = topic.lessons.find((item) => slugify(item) === lessonSlug)
  const grade = `Grade ${gradeId.replace('grade-', '')}`
  const quizQuestions = [
    {
      question: topic.question,
      options: topic.options,
      answer: topic.answer,
      explanation: `You can use what you learned about ${topic.title.toLowerCase()} to work it out.`,
    },
    {
      question: 'Which is the best way to learn during this activity?',
      options: ['Try it, notice what happens, and talk about it', 'Hide all the materials', 'Rush without looking', 'Give up before starting'],
      answer: 'Try it, notice what happens, and talk about it',
      explanation: 'Trying, observing, and explaining helps young learners remember new ideas.',
    },
    {
      question: `Which learning area are you exploring?`,
      options: [topic.subject || decodeURIComponent(subjectName).replace(/-/g, ' '), 'A school timetable', 'A lunch box', 'A football score'],
      answer: topic.subject || decodeURIComponent(subjectName).replace(/-/g, ' '),
      explanation: 'This lesson belongs to the learning area shown at the top of the page.',
    },
  ]
  return {
    title,
    subject: topic.subject || decodeURIComponent(subjectName).replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()),
    grade,
    topic: topic.title,
    duration: '10 minutes',
    objectives: [`Learn one new idea about ${topic.title.toLowerCase()}.`, 'Try a playful activity using things you can find safely.', 'Tell someone what you noticed or learned.'],
    sections: [
      { heading: 'Let’s discover!', paragraphs: [topic.focus, `Take your time and say what you notice. There may be more than one good idea to share.`] },
      { heading: 'Play and practise', paragraphs: [topic.activity, 'Ask an adult or classmate to join you. Take turns, use kind words, and keep materials safe.'] },
      { heading: 'Tell what you learned', paragraphs: [`Can you explain one thing you learned about ${topic.title.toLowerCase()}? Draw it, say it aloud, or write a short sentence.`, 'Great exploring! Learning grows when we try, practise, and ask curious questions.'] },
    ],
    example: {
      question: `Can you try the activity for “${topic.title}”?`,
      steps: ['Look at the materials or picture carefully.', 'Try the activity one step at a time.', 'Tell a friend what happened and what you learned.'],
      answer: 'A thoughtful try and a simple explanation of what you noticed.',
    },
    questions: quizQuestions,
  }
}
