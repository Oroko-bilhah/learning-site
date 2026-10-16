// Comprehensive Kenyan Senior High Curriculum Data
// Covers 8-4-4 Form 3 and CBC Grade 10 (Senior School) across all official KICD learning areas

export const gradeOptions = [
  {
    id: 'form-3',
    name: 'Form 3',
    curriculum: '8-4-4 Curriculum',
    subtitle: 'KCSE Preparation Stage',
    badge: '8-4-4 KCSE',
    color: 'blue',
    description:
      'In-depth syllabus notes, worked examples, and exam-standard practice questions for Form 3 learners preparing for KCSE.',
  },
  {
    id: 'grade-10',
    name: 'Grade 10',
    curriculum: 'CBC / CBE Senior School',
    subtitle: 'Pathway Specialization',
    badge: 'CBC Senior School',
    color: 'green',
    description:
      'Competency-based learning areas across STEM, Social Sciences, and Arts & Sports Science pathways with real-world applications.',
  },
]

export const grade10Pathways = [
  {
    id: 'all',
    name: 'All Pathways',
    description: 'Browse all learning areas across Senior School Grade 10.',
    icon: '🌐',
  },
  {
    id: 'core',
    name: 'Core Areas',
    description: 'Mandatory cross-cutting subjects studied by all Senior School learners.',
    icon: '⭐',
  },
  {
    id: 'stem',
    name: 'STEM',
    description: 'Science, Technology, Engineering and Mathematics pathway.',
    icon: '🔬',
  },
  {
    id: 'social-sciences',
    name: 'Social Sciences',
    description: 'Humanities, Languages, Business, and Citizenship studies.',
    icon: '📚',
  },
  {
    id: 'arts-sports',
    name: 'Arts & Sports Science',
    description: 'Visual arts, Performing arts, Music, Film, and Sports science.',
    icon: '🎨',
  },
]

export const form3Categories = [
  { id: 'all', name: 'All Subjects', icon: '📖' },
  { id: 'sciences', name: 'Sciences', icon: '⚗️' },
  { id: 'mathematics', name: 'Mathematics', icon: '∑' },
  { id: 'languages', name: 'Languages', icon: '🗣️' },
  { id: 'humanities', name: 'Humanities', icon: '🌍' },
  { id: 'applied', name: 'Applied & Technical', icon: '⚙️' },
]

export const form3Subjects = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    curriculum: 'form-3',
    category: 'mathematics',
    icon: '∑',
    color: 'blue',
    description: 'Master quadratic equations, commercial arithmetic, trigonometry, and analytical geometry.',
    syllabusHighlights: 'Focuses on Paper 1 and Paper 2 KCSE core competencies, algebraic proofs, and coordinate methods.',
    topics: [
      {
        id: 1,
        title: 'Quadratic Expressions and Equations (2)',
        description: 'Factorization, completing the square, quadratic formula, and graphing parabolas.',
        lessons: [
          'Completing the Square Method',
          'The Quadratic Formula and Discriminant',
          'Graphical Solutions of Quadratic Equations',
          'Simultaneous Equations: One Linear and One Quadratic',
        ],
      },
      {
        id: 2,
        title: 'Approximations and Errors',
        description: 'Absolute, relative, and percentage errors with error propagation in operations.',
        lessons: [
          'Absolute, Relative and Percentage Errors',
          'Propagation of Errors in Addition and Subtraction',
          'Propagation of Errors in Multiplication and Division',
        ],
      },
      {
        id: 3,
        title: 'Trigonometry (2)',
        description: 'Trigonometric ratios for all quadrants, Sine rule, Cosine rule, and wave graphs.',
        lessons: [
          'Trigonometric Ratios of Angles (0° to 360°)',
          'The Sine and Cosine Rules',
          'Area of a Triangle using Sine',
          'Trigonometric Graphs and Wave Properties',
        ],
      },
      {
        id: 4,
        title: 'Surds and Further Logarithms',
        description: 'Rationalizing surds, laws of logarithms, and exponential equations.',
        lessons: [
          'Simplification of Surds and Conjugates',
          'Rationalizing the Denominator',
          'Laws of Logarithms and Natural Logarithms',
          'Solving Exponential and Logarithmic Equations',
        ],
      },
      {
        id: 5,
        title: 'Commercial Arithmetic (2)',
        description: 'Compound interest, hire purchase transactions, income tax calculations, and appreciation.',
        lessons: [
          'Compound Interest and Depreciation',
          'Hire Purchase and Carrying Charges',
          'Income Tax: PAYE, Tax Brackets and Relief',
        ],
      },
      {
        id: 6,
        title: 'Circles: Chords and Tangents',
        description: 'Geometric properties of tangents, cyclic quadrilaterals, and chord theorems.',
        lessons: [
          'Chords, Secants and Tangent Properties',
          'Angles in Alternate Segments',
          'Intersecting Chords Theorems',
        ],
      },
      {
        id: 7,
        title: 'Matrices and Transformations',
        description: 'Matrix multiplication, 2x2 determinants, inverses, and transformation matrices.',
        lessons: [
          'Matrix Operations and Multiplication',
          'Determinants and Inverses of 2x2 Matrices',
          'Solving Linear Simultaneous Equations using Matrices',
        ],
      },
      {
        id: 8,
        title: 'Formulae and Variations',
        description: 'Direct, inverse, joint, and partial variations with change of formula subjects.',
        lessons: [
          'Direct and Inverse Variations',
          'Joint and Partial Variations',
          'Changing the Subject of a Formula',
        ],
      },
      {
        id: 9,
        title: 'Sequences and Series',
        description: 'Arithmetic progressions (AP), geometric progressions (GP), and sum of series.',
        lessons: [
          'Arithmetic Progression (AP) and General Term',
          'Geometric Progression (GP) and Common Ratio',
          'Sum of the First n Terms of AP and GP',
        ],
      },
      {
        id: 10,
        title: 'Vectors (2)',
        description: '3D coordinates, magnitude, position vectors, and collinearity in space.',
        lessons: [
          'Vectors in Three Dimensions (3D Coordinates)',
          'Magnitude and Scalar Multiplication of Vectors',
          'Collinearity and Ratio Theorem in Vectors',
        ],
      },
    ],
  },
  {
    id: 'english',
    name: 'English',
    curriculum: 'form-3',
    category: 'languages',
    icon: 'Aa',
    color: 'gold',
    description: 'Advanced functional writing, syntactic structures, literary criticism, and poetry.',
    syllabusHighlights: 'Covers KCSE Paper 1 (Functional Skills), Paper 2 (Comprehension & Grammar), and Paper 3 (Literature Set Texts).',
    topics: [
      {
        id: 1,
        title: 'Advanced Functional Writing',
        description: 'Minutes of meetings, investigative reports, curriculum vitae, and book reviews.',
        lessons: [
          'Writing Formal Minutes of a Meeting',
          'Investigative and Field Reports',
          'Curriculum Vitae (CV) and Application Letters',
          'Writing Critical Book and Play Reviews',
        ],
      },
      {
        id: 2,
        title: 'Grammar and Sentence Mechanics',
        description: 'Participle phrases, relative clauses, inversion, and conditional clauses.',
        lessons: [
          'Participle Phrases and Dangling Modifiers',
          'Inversion and Emphatic Structures',
          'Conditional Clauses (Types 1, 2, and 3)',
          'Phrasal Verbs and Idiomatic Prepositions',
        ],
      },
      {
        id: 3,
        title: 'Oral Literature in East Africa',
        description: 'Folk narratives, proverbs, riddles, oral poetry, and fieldwork techniques.',
        lessons: [
          'Classification and Features of Folk Tales',
          'Short Forms: Proverbs, Riddles, and Puns',
          'Oral Poetry: Lullabies, Dirges, and Panegyrics',
        ],
      },
      {
        id: 4,
        title: 'Poetry Appreciation and Analysis',
        description: 'Analyzing poetic devices, tone, persona, mood, rhythm, and rhyme schemes.',
        lessons: [
          'Deciphering Subject Matter, Tone, and Mood',
          'Stylistic Devices in African Poetry',
          'Rhyme Scheme, Rhythm, and Metre',
        ],
      },
    ],
  },
  {
    id: 'kiswahili',
    name: 'Kiswahili',
    curriculum: 'form-3',
    category: 'languages',
    icon: 'K',
    color: 'green',
    description: 'Sarufi ya kina, ushairi wa kimapokeo na kisasa, fasihi simulizi, na isimu jamii.',
    syllabusHighlights: 'Maandalizi ya KCSE Karatasi ya 1 (Insha), Karatasi ya 2 (Lugha na Sarufi), na Karatasi ya 3 (Fasihi).',
    topics: [
      {
        id: 1,
        title: 'Sarufi na Matumizi ya Lugha',
        description: 'Upatanisho wa kisarufi, shamirisho, chagizo, na mnyambuliko wa vitenzi.',
        lessons: [
          'Ngeli za Nomino na Upatanisho wa Kisarufi',
          'Shamirisho Kipozi, Kitondo na Kielezi',
          'Mnyambuliko wa Vitenzi na Hali ya Utendaji',
          'Usemi Halisi na Usemi wa Taarifa',
        ],
      },
      {
        id: 2,
        title: 'Ushairi na Bahari Zake',
        description: 'Arudhi ya ushairi, urari wa vina na mizani, tarbia, tathlitha, na ukwapi.',
        lessons: [
          'Misingi ya Arudhi ya Ushairi',
          'Bahari za Ushairi kulingana na Vipande na Mistari',
          'Uchambuzi wa Maudhui na Dhamira Katika Shairi',
        ],
      },
      {
        id: 3,
        title: 'Isimu Jamii na Mawasiliano',
        description: 'Sajili za lugha mbalimbali, kuchanganya ndimi, na sera ya lugha nchini Kenya.',
        lessons: [
          'Sifa za Sajili ya Kortini na Bungeni',
          'Sajili ya Hospitalini na Sokoni',
          'Sera ya Lugha na Umuhimu wa Kiswahili Kitaifa',
        ],
      },
      {
        id: 4,
        title: 'Fasihi Simulizi na Tanzu Zake',
        description: 'Ngano, soga, mighani, vitendawili, methali, na njia za kukusanya fasihi simulizi.',
        lessons: [
          'Mighani na Ngano za Mashujaa',
          'Semi: Methali, Vitendawili na Misimu',
          'Mbinu za Utafiti Katika Fasihi Simulizi',
        ],
      },
    ],
  },
  {
    id: 'biology',
    name: 'Biology',
    curriculum: 'form-3',
    category: 'sciences',
    icon: '♧',
    color: 'green',
    description: 'Taxonomy, ecology, reproductive biology in flora and fauna, and embryonic growth.',
    syllabusHighlights: 'Focuses on KCSE practical investigations, microscopic slides, ecological quadrat sampling, and organ diagrams.',
    topics: [
      {
        id: 1,
        title: 'Classification II',
        description: 'Principles of taxonomy, constructing and using dichotomous keys, and five kingdoms.',
        lessons: [
          'Principles of Modern Biological Classification',
          'Construction and Use of Dichotomous Keys',
          'The Five Kingdoms of Living Organisms',
          'General Characteristics of Arthropoda and Chordata',
        ],
      },
      {
        id: 2,
        title: 'Ecology and Ecosystems',
        description: 'Biotic and abiotic factors, energy flow, food webs, nitrogen cycle, and sampling methods.',
        lessons: [
          'Abiotic Factors and Measuring Instruments',
          'Food Chains, Food Webs and Trophic Pyramids',
          'The Nitrogen and Carbon Cycles in Nature',
          'Population Estimation: Quadrat and Capture-Recapture',
        ],
      },
      {
        id: 3,
        title: 'Reproduction in Plants',
        description: 'Flower structure, pollination mechanisms, fertilization, seed and fruit formation.',
        lessons: [
          'Structure and Functions of Floral Parts',
          'Pollination Adaptations in Insect and Wind Pollinated Flowers',
          'Double Fertilization in Angiosperms',
          'Seed and Fruit Structure and Dispersal Mechanisms',
        ],
      },
      {
        id: 4,
        title: 'Reproduction in Animals',
        description: 'Mammalian reproductive anatomy, gametogenesis, menstrual cycle, and fertilization.',
        lessons: [
          'Male and Female Mammalian Reproductive Systems',
          'Gametogenesis: Spermatogenesis and Oogenesis',
          'The Menstrual Cycle and Hormonal Control',
          'Fertilization, Implantation and Role of the Placenta',
        ],
      },
      {
        id: 5,
        title: 'Growth and Development',
        description: 'Epigeal and hypogeal germination, plant growth curves, meristems, and insect metamorphosis.',
        lessons: [
          'Epigeal and Hypogeal Seed Germination',
          'Measurement of Growth and Sigmoid Curves',
          'Primary and Secondary Growth in Stems and Roots',
          'Complete and Incomplete Metamorphosis in Insects',
        ],
      },
    ],
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    curriculum: 'form-3',
    category: 'sciences',
    icon: '⚗',
    color: 'orange',
    description: 'Gas laws, stoichiometry & mole concept, organic chemistry I, nitrogen and sulphur compounds.',
    syllabusHighlights: 'Laboratory volumetric analysis, titrations, gas collection apparatus, and industrial manufacturing plants.',
    topics: [
      {
        id: 1,
        title: 'Gas Laws',
        description: 'Boyle’s Law, Charles’s Law, Graham’s Law of diffusion, and ideal gas equation.',
        lessons: [
          'Boyle’s Law and Charles’s Law Calculations',
          'The Combined Gas Law Equation',
          'Graham’s Law of Diffusion of Gases',
        ],
      },
      {
        id: 2,
        title: 'The Mole Concept and Stoichiometry',
        description: 'Avogadro’s constant, molar gas volume, empirical formulas, and volumetric analysis.',
        lessons: [
          'Molar Mass, Moles and Avogadro’s Number',
          'Empirical and Molecular Formula Calculations',
          'Molarity and Volumetric Titration Calculations',
          'Percentage Yield and Percentage Purity',
        ],
      },
      {
        id: 3,
        title: 'Organic Chemistry I (Hydrocarbons)',
        description: 'Alkanes, alkenes, alkynes: IUPAC nomenclature, preparation, isomerism, and reactions.',
        lessons: [
          'Alkanes: Nomenclature, Isomerism and Fractional Distillation',
          'Alkenes: Unsaturation, Addition Reactions and Tests',
          'Alkynes: Ethyne Preparation and Combustion',
        ],
      },
      {
        id: 4,
        title: 'Nitrogen and Its Compounds',
        description: 'Laboratory isolation of nitrogen, Haber process for ammonia, and Ostwald nitric acid process.',
        lessons: [
          'Laboratory Preparation and Properties of Nitrogen',
          'The Haber Process for Ammonia Synthesis',
          'Manufacture of Nitric(V) Acid by Ostwald Process',
          'Environmental Effects of Nitrate Fertilizers',
        ],
      },
      {
        id: 5,
        title: 'Sulphur and Its Compounds',
        description: 'Allotropes of sulphur, Contact Process for sulphuric acid, and sulfur dioxide properties.',
        lessons: [
          'Allotropes of Sulphur: Rhombic and Monoclinic',
          'Sulphur(IV) Oxide: Preparation, Bleaching and Tests',
          'The Contact Process for Sulphuric(VI) Acid Manufacture',
        ],
      },
      {
        id: 6,
        title: 'Chlorine and Its Compounds',
        description: 'Chlorine gas generation, bleaching action, hydrogen chloride gas, and chloride tests.',
        lessons: [
          'Preparation and Properties of Chlorine Gas',
          'Bleaching Action of Chlorine and Hypochlorites',
          'Manufacture of Hydrogen Chloride Gas and Hydrochloric Acid',
        ],
      },
    ],
  },
  {
    id: 'physics',
    name: 'Physics',
    curriculum: 'form-3',
    category: 'sciences',
    icon: 'ϟ',
    color: 'blue',
    description: 'Kinematics, Newton’s laws of motion, refraction of light, work, energy, machines, and current electricity.',
    syllabusHighlights: 'Ray diagrams, Snell’s law, momentum conservation, machine velocity ratios, and circuit diagrams.',
    topics: [
      {
        id: 1,
        title: 'Linear Motion',
        description: 'Displacement, velocity, acceleration, equations of motion, and velocity-time graphs.',
        lessons: [
          'Speed, Velocity and Acceleration Concepts',
          'The Three Equations of Uniformly Accelerated Motion',
          'Motion Under Gravity and Free Fall',
          'Analyzing Velocity-Time and Displacement-Time Graphs',
        ],
      },
      {
        id: 2,
        title: 'Refraction of Light',
        description: 'Snell’s law, refractive index, critical angle, total internal reflection, and thin lenses.',
        lessons: [
          'Laws of Refraction and Snell’s Law',
          'Critical Angle and Total Internal Reflection',
          'Image Formation in Convex and Concave Lenses',
          'The Lens Formula and Magnification Calculations',
        ],
      },
      {
        id: 3,
        title: 'Newton’s Laws of Motion',
        description: 'Inertia, momentum, F=ma, impulse, and conservation of linear momentum.',
        lessons: [
          'Newton’s First and Second Laws of Motion',
          'Linear Momentum and Impulse Calculations',
          'The Principle of Conservation of Linear Momentum',
          'Friction and Practical Dynamic Applications',
        ],
      },
      {
        id: 4,
        title: 'Work, Energy, Power and Machines',
        description: 'Work done, mechanical efficiency, velocity ratio, pulleys, levers, and gears.',
        lessons: [
          'Work, Kinetic Energy and Potential Energy',
          'Mechanical Advantage, Velocity Ratio and Efficiency',
          'Pulley Systems and Wheel-and-Axle Calculations',
        ],
      },
      {
        id: 5,
        title: 'Current Electricity (2)',
        description: 'Ohm’s law, series and parallel circuits, EMF, internal resistance, and Wheatstone bridge.',
        lessons: [
          'Resistors in Series and Parallel Combinations',
          'Electromotive Force (EMF) and Internal Resistance',
          'The Potentiometer and Wheatstone Bridge Circuit',
        ],
      },
      {
        id: 6,
        title: 'Waves (2)',
        description: 'Transverse and longitudinal waves, reflection, refraction, diffraction, and interference.',
        lessons: [
          'Wave Properties: Speed, Wavelength and Frequency',
          'Diffraction and Superposition of Waves',
          'Stationary Waves in Strings and Air Columns',
        ],
      },
    ],
  },
  {
    id: 'geography',
    name: 'Geography',
    curriculum: 'form-3',
    category: 'humanities',
    icon: '◎',
    color: 'gold',
    description: 'Mapwork, statistical methods, weathering, fluvial systems, arid landscapes, and forestry in Kenya.',
    syllabusHighlights: 'Topographical map interpretations, calculating gradients, cross-sections, and Kenyan field studies.',
    topics: [
      {
        id: 1,
        title: 'Statistical Methods and Fieldwork',
        description: 'Data collection methods, compound bar charts, divided circles, and field survey ethics.',
        lessons: [
          'Methods of Statistical Data Collection',
          'Constructing and Interpreting Divided Circles and Bar Graphs',
          'Planning and Executing a Geographical Field Study',
        ],
      },
      {
        id: 2,
        title: 'Mapwork and Topographical Interpretation',
        description: 'Grid references, calculating gradient, cross-sections, intervisibility, and human activities on maps.',
        lessons: [
          'Measuring Distances, Bearings and Calculating Gradient',
          'Drawing Cross-Sections and Determining Intervisibility',
          'Identifying Settlement Patterns and Land Use on Maps',
        ],
      },
      {
        id: 3,
        title: 'External Land-Forming Processes: Weathering and Mass Wasting',
        description: 'Mechanical and chemical weathering, soil creep, landslides, and mudflows in Kenya.',
        lessons: [
          'Mechanical and Chemical Weathering Processes',
          'Factors Influencing Weathering in the Tropics',
          'Types and Impacts of Mass Wasting on Kenyan Highlands',
        ],
      },
      {
        id: 4,
        title: 'Action of Rivers and River Basins',
        description: 'River erosion, transportation, deposition, drainage patterns, and river rejuvenation.',
        lessons: [
          'Processes of Fluvial Erosion, Transport and Deposition',
          'Features of Youthful, Mature and Old Stages of a River',
          'River Drainage Patterns and River Capture',
        ],
      },
      {
        id: 5,
        title: 'Action of Wind and Water in Arid Areas',
        description: 'Deflation, yardangs, zeugen, sand dunes, wadis, and bajadas in Northern Kenya.',
        lessons: [
          'Wind Erosion Features: Rock Pedestals, Yardangs and Zeugen',
          'Wind Deposition Features: Barchans and Seif Dunes',
          'Action of Water in Arid Landscapes: Wadis and Playas',
        ],
      },
      {
        id: 6,
        title: 'Forestry and Forest Conservation in Kenya',
        description: 'Indigenous vs exotic forests, economic importance, deforestation, and agroforestry.',
        lessons: [
          'Distribution of Major Forest Reserves in Kenya',
          'Economic Importance of Forestry to Kenya’s Economy',
          'Forest Depletion, Management and Afforestation Programmes',
        ],
      },
    ],
  },
  {
    id: 'history-and-government',
    name: 'History and Government',
    curriculum: 'form-3',
    category: 'humanities',
    icon: '⌛',
    color: 'orange',
    description: 'European colonization of Africa, colonial rule in Kenya, struggle for independence, and national governance.',
    syllabusHighlights: 'Scramble for Africa, resistance movements, colonial administration systems, and the 2010 Constitution.',
    topics: [
      {
        id: 1,
        title: 'European Invasion of Africa and Colonization',
        description: 'The Scramble for Africa, Berlin Conference (1884-1885), and colonial conquest methods.',
        lessons: [
          'Causes of the European Scramble for Africa',
          'The Berlin Conference and Partition of Africa',
          'Methods Used by Europeans to Acquire Colonies',
        ],
      },
      {
        id: 2,
        title: 'Establishment of Colonial Rule in Kenya',
        description: 'British conquest, African responses: Nandi resistance, Agiriama resistance, and Maasai collaboration.',
        lessons: [
          'The British Occupation of Kenya (1895-1920)',
          'African Resistance: The Nandi Resistance',
          'African Collaboration: The Maasai and Wanga Agreements',
        ],
      },
      {
        id: 3,
        title: 'Colonial Economy and Social Developments in Kenya',
        description: 'Land alienation, Kipande system, settler agriculture, taxation, and the Uganda Railway.',
        lessons: [
          'Colonial Land Policies and Alienation of White Highlands',
          'Introduction of Forced Labour, Kipande and Poll Taxes',
          'Economic and Social Impacts of the Uganda Railway',
        ],
      },
      {
        id: 4,
        title: 'Struggle for Independence and Nationalism',
        description: 'Early political associations (KAU, Kavirondo Taxpayers), Mau Mau uprising, and Lancaster conferences.',
        lessons: [
          'Early Political Organizations in Colonial Kenya',
          'The Mau Mau Movement and Declaration of Emergency',
          'The Lancaster House Conferences and Road to 1963 Independence',
        ],
      },
      {
        id: 5,
        title: 'The National Government of Kenya',
        description: 'Structure, composition, and functions of the Executive, Legislature, and Judiciary under 2010 Constitution.',
        lessons: [
          'Composition and Functions of Parliament (National Assembly & Senate)',
          'The Executive: Powers and Duties of the President and Cabinet',
          'The Judiciary: Court Hierarchy, Independence and Judicial Service Commission',
        ],
      },
    ],
  },
  {
    id: 'business-studies',
    name: 'Business Studies',
    curriculum: 'form-3',
    category: 'applied',
    icon: '↗',
    color: 'blue',
    description: 'Demand & supply, theory of the firm, market structures, chain of distribution, national income, and ledger accounting.',
    syllabusHighlights: 'Supply & demand graphs, market equilibrium, three-column cash books, ledger balancing, and trial balance.',
    topics: [
      {
        id: 1,
        title: 'Demand and Supply',
        description: 'Law of demand, law of supply, determinants, shifts vs movements, and equilibrium price.',
        lessons: [
          'The Law of Demand and Determinants of Demand',
          'The Law of Supply and Supply Curves',
          'Determination of Equilibrium Price and Quantity',
          'Price Elasticity of Demand and Supply',
        ],
      },
      {
        id: 2,
        title: 'Theory of the Firm and Production',
        description: 'Location of a firm, localization vs delocalization, economies and diseconomies of scale.',
        lessons: [
          'Factors Influencing the Location of a Business Firm',
          'Internal and External Economies of Scale',
          'Diseconomies of Scale and Optimal Firm Size',
        ],
      },
      {
        id: 3,
        title: 'Product Markets and Market Structures',
        description: 'Perfect competition, monopoly, monopolistic competition, and oligopoly.',
        lessons: [
          'Features of Perfect Competition Market',
          'Monopoly: Sources of Power, Advantages and Disadvantages',
          'Monopolistic Competition and Oligopolistic Markets',
        ],
      },
      {
        id: 4,
        title: 'Chain of Distribution and Intermediaries',
        description: 'Roles of wholesalers, retailers, middle-men, and modern channels of distribution.',
        lessons: [
          'Functions of Wholesalers in the Chain of Distribution',
          'Types and Functions of Modern Retailers',
          'Factors Determining the Choice of Distribution Channel',
        ],
      },
      {
        id: 5,
        title: 'National Income and Economic Welfare',
        description: 'Gross Domestic Product (GDP), Gross National Product (GNP), circular flow of income, and measurement methods.',
        lessons: [
          'Concepts of GDP, GNP, NNP and Per Capita Income',
          'The Circular Flow of Income in a Closed and Open Economy',
          'Methods of Measuring National Income: Output, Income and Expenditure',
        ],
      },
      {
        id: 6,
        title: 'Financial Accounting: The Ledger and Cash Book',
        description: 'Double-entry rule, posting transactions, three-column cash book, discount calculations, and trial balance.',
        lessons: [
          'The Rules of Debit and Credit in Double Entry',
          'Posting to the Ledger and Balancing Accounts',
          'The Three-Column Cash Book (Cash, Bank, Discount)',
          'Extraction and Purpose of the Trial Balance',
        ],
      },
    ],
  },
  {
    id: 'computer-studies',
    name: 'Computer Studies',
    curriculum: 'form-3',
    category: 'applied',
    icon: '⌘',
    color: 'green',
    description: 'Data representation, data processing systems, elementary programming algorithms, and systems development life cycle.',
    syllabusHighlights: 'Binary/hex conversions, flowcharts, pseudocode control structures, and SDLC project documentation.',
    topics: [
      {
        id: 1,
        title: 'Data Representation in Computers',
        description: 'Binary, octal, hexadecimal, two’s complement arithmetic, BCD, ASCII, and Unicode.',
        lessons: [
          'Binary, Decimal and Hexadecimal Number Conversions',
          'Binary Arithmetic and Two’s Complement Representation',
          'Coding Schemes: BCD, EBCDIC, ASCII and Unicode',
        ],
      },
      {
        id: 2,
        title: 'Data Processing Methods',
        description: 'Data collection stages, processing modes: batch, real-time, online, time-sharing, and data validation.',
        lessons: [
          'The Data Processing Cycle: Input, Processing, Output',
          'Data Processing Modes: Batch, Real-Time and Online',
          'Data Integrity: Verification vs Validation Checks',
        ],
      },
      {
        id: 3,
        title: 'Elementary Programming Principles',
        description: 'Algorithm design, flowchart symbols, pseudocode, sequence, selection, and looping structures.',
        lessons: [
          'Characteristics and Development of Computer Programs',
          'Designing Algorithms Using Standard Flowchart Symbols',
          'Writing Structured Pseudocode with Selection and Loops',
        ],
      },
      {
        id: 4,
        title: 'System Development Life Cycle (SDLC)',
        description: 'Stages: problem recognition, feasibility study, systems analysis, design, implementation, and maintenance.',
        lessons: [
          'Overview and Stages of the Systems Development Life Cycle',
          'System Analysis and Fact-Finding Techniques',
          'System Design, Testing and Changeover Strategies',
        ],
      },
    ],
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    curriculum: 'form-3',
    category: 'applied',
    icon: '♧',
    color: 'green',
    description: 'Livestock breeding, poultry production, farm structures, and land tenure systems in Kenya.',
    syllabusHighlights: 'Artificial insemination, incubator management, livestock diseases, dip tank construction, and land reforms.',
    topics: [
      {
        id: 1,
        title: 'Livestock Production III: Selection and Breeding',
        description: 'Reproductive anatomy, breeding systems (crossbreeding, inbreeding), artificial insemination, and selection.',
        lessons: [
          'Reproductive Systems of Farm Animals',
          'Selection Methods and Breeding Systems in Cattle',
          'Artificial Insemination (AI): Technique, Advantages and Disadvantages',
        ],
      },
      {
        id: 2,
        title: 'Livestock Production IV: Poultry and Small Stock',
        description: 'Incubation of eggs, brooding management, disease management in poultry, and rabbit husbandry.',
        lessons: [
          'Natural and Artificial Incubation of Chicken Eggs',
          'Brooding Management and Care of Chicks',
          'Poultry Housing Systems: Deep Litter vs Battery Cage',
          'Common Poultry Diseases and Prevention Measures',
        ],
      },
      {
        id: 3,
        title: 'Farm Structures and Materials',
        description: 'Fences, crushes, cattle dips, grain silos, farm buildings, and structural maintenance.',
        lessons: [
          'Types and Construction of Farm Fences',
          'Livestock Handling Structures: Crushes, Sheds and Dips',
          'Crop Storage Structures and Modern Grain Silos',
        ],
      },
      {
        id: 4,
        title: 'Agricultural Economics II: Land Tenure and Reform',
        description: 'Customary tenure, individual title deeds, land consolidation, adjudication, and settlement schemes in Kenya.',
        lessons: [
          'Land Tenure Systems in Kenya: Communal vs Private',
          'Land Consolidation, Adjudication and Registration',
          'Settlement Schemes and Modern Land Reforms',
        ],
      },
    ],
  },
  {
    id: 'christian-religious-education',
    name: 'Christian Religious Education',
    curriculum: 'form-3',
    category: 'humanities',
    icon: '✧',
    color: 'gold',
    description: 'Gifts of the Holy Spirit, unity of believers, teachings of Old Testament prophets, and Christian approaches to wealth.',
    syllabusHighlights: 'Prophets Amos, Jeremiah, and Nehemiah, Biblical metaphors for the Church, Christian work ethics, and stewardship.',
    topics: [
      {
        id: 1,
        title: 'The Gifts of the Holy Spirit',
        description: 'Paul’s teaching on spiritual gifts (1 Cor 12-14), discernment, and the fruit of the Holy Spirit.',
        lessons: [
          'Paul’s Teaching on the Gifts of the Holy Spirit',
          'Criteria for Discerning the True Manifestations of the Holy Spirit',
          'The Fruit of the Holy Spirit and Christian Living',
        ],
      },
      {
        id: 2,
        title: 'The Unity of Believers',
        description: 'Biblical analogies for Christian unity: The Body of Christ, The Vine and Branches, The Bride of Christ.',
        lessons: [
          'The Metaphor of the Church as the Body of Christ',
          'The Vine and the Branches: Abiding in Christ',
          'Causes and Solutions to Disunity in the Church Today',
        ],
      },
      {
        id: 3,
        title: 'Selected Old Testament Prophets: Amos and Jeremiah',
        description: 'Prophet Amos on social justice and false worship; Prophet Jeremiah on personal faith and the New Covenant.',
        lessons: [
          'Prophet Amos’s Critique of Social Injustices in Israel',
          'Hypocritical Religion and Judgment in Amos',
          'Prophet Jeremiah’s Temple Sermon and the New Covenant',
        ],
      },
      {
        id: 4,
        title: 'Christian Approaches to Wealth, Work and Leisure',
        description: 'Biblical work ethic, fair wages, acquisition and stewardship of riches, corruption, and recreational leisure.',
        lessons: [
          'The Christian Meaning of Work and Vocation',
          'Christian Attitude Towards Wealth, Money and Poverty',
          'Christian Perspective on Leisure, Alcohol and Substance Abuse',
        ],
      },
    ],
  },
  {
    id: 'islamic-religious-education',
    name: 'Islamic Religious Education',
    curriculum: 'form-3',
    category: 'humanities',
    icon: '☾',
    color: 'green',
    description: 'Ulumul Quran, selected Surahs (Al-Hujurat, An-Nur), Hadith sciences, Islamic family law, and Islamic civilization.',
    syllabusHighlights: 'Quranic compilation history, authentic Hadith chains (Isnad & Matn), Sharia inheritance rules, and East African Islamic heritage.',
    topics: [
      {
        id: 1,
        title: 'Ulumul Quran and Selected Surahs',
        description: 'Compilation of the Quran during Caliph Abu Bakr and Uthman, Surah Al-Hujurat morals and social brotherhood.',
        lessons: [
          'History of the Compilation and Standardization of the Holy Quran',
          'Surah Al-Hujurat: Moral Teachings and Islamic Brotherhood',
          'Surah An-Nur: Modesty, Hijab and Safeguarding Chaste Conduct',
        ],
      },
      {
        id: 2,
        title: 'Hadith Sciences and Sunnah',
        description: 'Classification of Hadith (Sahih, Hasan, Da’if), components of Hadith (Isnad, Matn), and moral collections.',
        lessons: [
          'Structure of Hadith: Isnad and Matn Explained',
          'Classification of Hadith According to Authenticity',
          'Selected Prophetic Traditions on Honesty and Integrity',
        ],
      },
      {
        id: 3,
        title: 'Islamic Family Law (Muamalat)',
        description: 'Marriage prerequisites in Islam, Nikah contract, spousal rights, Talaq regulations, and inheritance (Mirath).',
        lessons: [
          'Conditions and Pillars of a Valid Islamic Marriage (Nikah)',
          'Rights and Responsibilities of Spouses in Islam',
          'Islamic Laws of Divorce (Talaq) and Custody of Children',
          'Principles of Inheritance (Mirath) in Sharia',
        ],
      },
      {
        id: 4,
        title: 'Islamic Civilization in East Africa',
        description: 'Spread of Islam along the Swahili coast, contributions to Swahili architecture, trade, and education.',
        lessons: [
          'Historical Spread of Islam Along the East African Coast',
          'Role of Islam in the Growth of Swahili Culture and Language',
          'Contributions of Muslim Scholars to Science and Society',
        ],
      },
    ],
  },
]

export const grade10Subjects = [
  // Core Learning Areas
  {
    id: 'english',
    name: 'English',
    curriculum: 'grade-10',
    group: 'Core Learning Areas',
    pathways: ['core', 'stem', 'social-sciences', 'arts-sports'],
    icon: 'Aa',
    color: 'gold',
    description: 'Advanced communicative competence, digital literacy, persuasive discourse, and critical literary critique.',
    syllabusHighlights: 'Senior School CBC Core competence: Critical thinking, communication, analytical writing, and digital media synthesis.',
    topics: [
      {
        id: 1,
        title: 'Advanced Communicative Discourse and Public Speaking',
        description: 'Art of persuasion, audience awareness, rhetorical devices, and critical listening in formal symposiums.',
        lessons: [
          'Principles of Persuasive Oratory and Rhetoric',
          'Active Listening and Debating Dynamics in Academic Forums',
          'Public Speaking and Presentation Delivery Techniques',
        ],
      },
      {
        id: 2,
        title: 'Critical Reading, Synthesis and Media Literacy',
        description: 'Evaluating media narratives, identifying algorithmic bias, fact-checking, and synthesizing academic research.',
        lessons: [
          'Deconstructing Bias and Persuasion in Digital Media',
          'Fact-Checking, Source Verification and Information Ethics',
          'Synthesizing Multi-Source Information for Academic Writing',
        ],
      },
      {
        id: 3,
        title: 'Academic, Technical and Expository Writing',
        description: 'Writing research reports, thesis-driven argumentative essays, executive summaries, and formal proposals.',
        lessons: [
          'Developing a Thesis Statement and Argumentative Structure',
          'Writing Research Abstracts and Executive Summaries',
          'Technical Writing and Professional Project Proposals',
        ],
      },
      {
        id: 4,
        title: 'Literary Critique and Pan-African Expression',
        description: 'Analysis of post-colonial texts, dramatic staging techniques, and contemporary African poetic innovation.',
        lessons: [
          'Thematic Critique of Contemporary African Novels',
          'Dramatic Conventions, Staging and Subtext Analysis',
          'Poetic Innovations and Spoken Word Traditions in Africa',
        ],
      },
    ],
  },
  {
    id: 'kiswahili',
    name: 'Kiswahili',
    curriculum: 'grade-10',
    group: 'Core Learning Areas',
    pathways: ['core', 'stem', 'social-sciences', 'arts-sports'],
    icon: 'K',
    color: 'green',
    description: 'Mawasiliano ya kitaaluma, utunzi wa kidijitali, uhakiki wa habari, na uandishi wa kiubunifu katika Karne ya 21.',
    syllabusHighlights: 'Umahiri wa CBC: Mawasiliano na ushirikiano, kufikiri kwa kina, uzalendo, na stadi za kidijitali.',
    topics: [
      {
        id: 1,
        title: 'Mawasiliano ya Kiwango cha Juu na Majadiliano',
        description: 'Mijadala ya kitaaluma, hotuba za kidiplomasia, na mazungumzo katika muktadha rasmi.',
        lessons: [
          'Kanuni za Uwasilishaji wa Hotuba Rasmi na Dhehebu',
          'Stadi za Usikilizaji Makini Katika Mikutano ya Kielektroniki',
          'Uendeshaji wa Mijadala ya Kijamii na Kiuchumi',
        ],
      },
      {
        id: 2,
        title: 'Uhakiki wa Makala na Vyombo vya Habari',
        description: 'Uchambuzi wa tahariri, habari za mtandaoni, sera za lugha, na maadili ya uandishi wa habari.',
        lessons: [
          'Uchambuzi wa Tahariri na Makala za Kiuchumi',
          'Vyombo vya Habari vya Kidijitali na Athari Zake kwa Lugha',
          'Sera ya Kiswahili Kama Lugha Rasmi ya Afrika Mashariki',
        ],
      },
      {
        id: 3,
        title: 'Utunzi wa Kitaaluma na Barua Rasmi',
        description: 'Uandishi wa ripoti za kiutafiti, kumbukumbu za mikutano rasmi, na makala za kibiashara.',
        lessons: [
          'Uandishi wa Ripoti za Kiutendaji na Matokeo ya Miradi',
          'Kumbukumbu Rasmi za Mikutano ya Kitaasisi',
          'Uandishi wa Wasifu Kazi na Barua za Maombi',
        ],
      },
      {
        id: 4,
        title: 'Fasihi Simulizi na ya Maandishi Katika Ulimwengu wa Sasa',
        description: 'Uhifadhi wa fasihi simulizi kidijitali, uhakiki wa riwaya za kisasa, na tamthilia za mazingira.',
        lessons: [
          'Uhifadhi na Uwasilishaji wa Fasihi Simulizi Kidijitali',
          'Uhakiki wa Riwaya za Kisasa zenye Maudhui ya Maendeleo',
          'Uchambuzi wa Ushairi Huru na Nyimbo za Kisasa',
        ],
      },
    ],
  },
  {
    id: 'kenyan-sign-language',
    name: 'Kenyan Sign Language',
    curriculum: 'grade-10',
    group: 'Core Learning Areas',
    pathways: ['core', 'stem', 'social-sciences', 'arts-sports'],
    icon: 'KSL',
    color: 'blue',
    description: 'Visual-gestural linguistic communication, spatial syntax, facial morphology, and Deaf cultural identity.',
    syllabusHighlights: 'CBC Competencies: Inclusion, non-verbal linguistic mastery, spatial grammar, and legal human rights.',
    topics: [
      {
        id: 1,
        title: 'Spatial Grammar and Morphosyntax in KSL',
        description: 'Signing space, directional verbs, classifier predicates, and non-manual signals.',
        lessons: [
          'The Five Parameters of Sign Production in KSL',
          'Directional Verbs and Spatial Verb Agreement',
          'Classifiers and Handling Predicates in KSL Discourse',
        ],
      },
      {
        id: 2,
        title: 'Advanced Academic and Civic Vocabulary in KSL',
        description: 'Signs for governance, science, technology, mathematics, and legal proceedings.',
        lessons: [
          'Specialized STEM Terminology in Sign Language',
          'Governance, Constitutional and Legal Signs in KSL',
          'Idiomatic Expressions and Cultural Storytelling in KSL',
        ],
      },
      {
        id: 3,
        title: 'Deaf Culture, Identity and Rights in Kenya',
        description: 'History of Deaf education in Kenya, assistive technologies, and constitutional inclusion.',
        lessons: [
          'Evolution and Milestones of Kenyan Deaf Education',
          'Constitutional Protections and Disability Rights in Kenya',
          'Assistive Video Technologies and Accessibility Solutions',
        ],
      },
    ],
  },
  {
    id: 'community-service-learning',
    name: 'Community Service Learning',
    curriculum: 'grade-10',
    group: 'Core Learning Areas',
    pathways: ['core', 'stem', 'social-sciences', 'arts-sports'],
    icon: '♡',
    color: 'green',
    description: 'Community participatory research, social project design, resource mobilization, and civic responsibility.',
    syllabusHighlights: 'CBC Core Pillar: Real-world community impact projects, leadership, ethics, and sustainability reporting.',
    topics: [
      {
        id: 1,
        title: 'Participatory Community Needs Assessment',
        description: 'Methodologies for identifying local environmental, health, and economic community challenges in Kenya.',
        lessons: [
          'Conducting Participatory Rural and Urban Needs Appraisals',
          'Community Stakeholder Mapping and Ethical Protocols',
          'Data Collection and Priority Problem Ranking',
        ],
      },
      {
        id: 2,
        title: 'Project Design, Budgeting and Resource Mobilization',
        description: 'Designing Logical Frameworks, formulating SMART project goals, and mobilizing local community resources.',
        lessons: [
          'Developing a Community Project Logical Framework Matrix',
          'Budgeting, Material Sourcing and Local Resource Mobilization',
          'Risk Management and Community Partnership Building',
        ],
      },
      {
        id: 3,
        title: 'Project Execution, Monitoring and Sustainability',
        description: 'Implementing community solutions (tree planting, clean water access, literacy drives) with long-term maintenance.',
        lessons: [
          'Executing Community Environmental and Educational Initiatives',
          'Monitoring Key Performance Indicators During Project Rollout',
          'Ensuring Long-Term Community Ownership and Sustainability',
        ],
      },
      {
        id: 4,
        title: 'Reflective Documentation and Social Impact Reporting',
        description: 'Evaluating social return on investment, writing reflective journals, and presenting reports to county forums.',
        lessons: [
          'Writing Reflective Journals and Experiential Learning Records',
          'Measuring Social Impact and Community Feedback',
          'Presenting Project Outcomes to Community Stakeholders',
        ],
      },
    ],
  },
  {
    id: 'physical-education',
    name: 'Physical Education and Sports',
    curriculum: 'grade-10',
    group: 'Core Learning Areas',
    pathways: ['core', 'stem', 'social-sciences', 'arts-sports'],
    icon: '⚽',
    color: 'orange',
    description: 'Exercise physiology, biomechanics of movement, sports nutrition, tournament officiating, and mental wellness.',
    syllabusHighlights: 'CBC Physical Well-being: Athletic stamina, tactical intelligence, injury rehabilitation, and fair play ethics.',
    topics: [
      {
        id: 1,
        title: 'Exercise Physiology and Human Movement Mechanics',
        description: 'Aerobic and anaerobic energy pathways, muscular contractions, cardiovascular endurance, and biomechanics.',
        lessons: [
          'Human Energy Systems: Phosphagen, Glycolytic and Oxidative',
          'Cardiopulmonary Adaptations to Physical Conditioning',
          'Biomechanics of Sprinting, Jumping and Throwing',
        ],
      },
      {
        id: 2,
        title: 'Athletic Nutrition, Hydration and Recovery',
        description: 'Macronutrient distribution for sport, electrolyte replacement, sleep hygiene, and active recovery.',
        lessons: [
          'Nutritional Requirements for High-Performance Athletes',
          'Fluid Balance, Thermoregulation and Hydration Strategies',
          'Rest, Muscle Repair and Active Recovery Protocols',
        ],
      },
      {
        id: 3,
        title: 'Sports Safety, Injury Prevention and First Aid',
        description: 'Common athletic injuries (sprains, strains, concussions), R.I.C.E protocol, and basic life support in sports.',
        lessons: [
          'Mechanisms and Prevention of Common Sports Injuries',
          'Emergency First Aid: R.I.C.E Regimen and Concussion Protocols',
          'Rehabilitation and Return-to-Play Criteria',
        ],
      },
    ],
  },

  // STEM Pathway
  {
    id: 'core-mathematics',
    name: 'Core Mathematics',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: '∑',
    color: 'blue',
    description: 'Advanced polynomial functions, coordinate geometry proofs, trigonometric modeling, and probability calculus.',
    syllabusHighlights: 'Grade 10 STEM Pillar: Algorithmic modeling, spatial proofs, rates of change, and statistical modeling.',
    topics: [
      {
        id: 1,
        title: 'Advanced Polynomial and Rational Functions',
        description: 'Synthetic division, remainder and factor theorems, rational functions, and asymptotes.',
        lessons: [
          'Polynomial Division, Remainder and Factor Theorems',
          'Graphing Polynomial Functions and Finding Real Roots',
          'Rational Functions: Vertical and Horizontal Asymptotes',
        ],
      },
      {
        id: 2,
        title: 'Coordinate Geometry and Analytic Conics',
        description: 'Equations of circles, tangent lines, parabolas, and vector coordinate systems.',
        lessons: [
          'Equations of Circles with Center (h, k) and Tangents',
          'Geometric Loci and Standard Forms of Parabolas',
          '3D Coordinate Geometry and Vector Distances',
        ],
      },
      {
        id: 3,
        title: 'Trigonometric Identities and Wave Modeling',
        description: 'Double angle identities, compound angles, solving trigonometric equations, and periodic waveforms.',
        lessons: [
          'Compound Angle and Double Angle Identities',
          'Solving Trigonometric Equations in Specified Domains',
          'Modeling Harmonic Motion with Sine and Cosine Waves',
        ],
      },
      {
        id: 4,
        title: 'Probability Distributions and Combinatorics',
        description: 'Permutations, combinations, binomial probability distribution, and expected value.',
        lessons: [
          'Permutations and Combinations Principles',
          'Binomial Probability Distribution and Calculations',
          'Expected Value and Real-World Risk Analysis',
        ],
      },
    ],
  },
  {
    id: 'essential-mathematics',
    name: 'Essential Mathematics',
    curriculum: 'grade-10',
    group: 'Social Sciences',
    pathways: ['social-sciences', 'arts-sports'],
    icon: '∑',
    color: 'blue',
    description: 'Financial mathematics, micro-enterprise bookkeeping, practical scale modeling, and data interpretation.',
    syllabusHighlights: 'Everyday applications: Mortgage formulas, tax filing, inflation adjustments, and consumer analytics.',
    topics: [
      {
        id: 1,
        title: 'Consumer and Enterprise Financial Mathematics',
        description: 'Compound interest, inflation index, currency exchange, hire purchase, and investment yields.',
        lessons: [
          'Calculating Compound Growth and Inflation Adjustments',
          'Foreign Exchange Rates and International Trade Math',
          'Loan Amortization Schedules and Microfinance Rates',
        ],
      },
      {
        id: 2,
        title: 'Measurement, Scale Drawing and Construction Math',
        description: 'Surveying formulas, area and volume of composite solids, scale models, and construction estimates.',
        lessons: [
          'Estimating Material Quantities for Building Structures',
          'Land Surveying Calculations Using Offsets and Traverses',
          'Scale Drawings, Contours and Gradient Estimations',
        ],
      },
      {
        id: 3,
        title: 'Data Literacy and Statistical Inferences',
        description: 'Interpreting national economic reports, census distributions, infographics, and statistical bias.',
        lessons: [
          'Analyzing National Economic and Demographic Data',
          'Detecting Misleading Statistics in Advertising and Media',
          'Practical Data Visualization for Social Science Projects',
        ],
      },
    ],
  },
  {
    id: 'advanced-mathematics',
    name: 'Advanced Mathematics',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: '∫',
    color: 'blue',
    description: 'Foundations of differential calculus, complex numbers, 3x3 matrices, and vector spaces for future engineers.',
    syllabusHighlights: 'Higher STEM: Differentiation from first principles, Argand diagrams, and linear transformations.',
    topics: [
      {
        id: 1,
        title: 'Foundations of Differential Calculus',
        description: 'Limits, continuity, derivative from first principles, power rule, product and quotient rules.',
        lessons: [
          'Concept of Limits and Continuity of Functions',
          'Finding Derivatives from First Principles',
          'The Power, Product and Quotient Differentiation Rules',
          'Stationary Points, Maxima, Minima and Optimization',
        ],
      },
      {
        id: 2,
        title: 'Complex Numbers and the Argand Plane',
        description: 'Imaginary units, complex conjugates, modulus-argument form, and operations on the Argand plane.',
        lessons: [
          'The Imaginary Unit i and Arithmetic of Complex Numbers',
          'Modulus-Argument Form and the Argand Diagram',
          'De Moivre’s Theorem and Roots of Complex Numbers',
        ],
      },
      {
        id: 3,
        title: 'Matrix Algebra and 3x3 Systems',
        description: 'Determinants of 3x3 matrices, Gaussian elimination, inverse matrices, and 3D transformations.',
        lessons: [
          'Determinants and Minors of 3x3 Matrices',
          'Gaussian Elimination and Solving 3-Variable Linear Systems',
          'Geometric Interpretation of 3D Linear Transformations',
        ],
      },
    ],
  },
  {
    id: 'biology',
    name: 'Biology',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: '♧',
    color: 'green',
    description: 'Molecular genetics, cell biology, enzyme kinetics, biotechnology fundamentals, and modern physiology.',
    syllabusHighlights: 'Grade 10 STEM: DNA replication, CRISPR & recombinant DNA concepts, electron microscopy, and bioethics.',
    topics: [
      {
        id: 1,
        title: 'Cell Ultrastructure and Molecular Techniques',
        description: 'Organelles under electron microscopy, cellular membrane transport, and centrifugation techniques.',
        lessons: [
          'Ultrastructure of Eukaryotic and Prokaryotic Organelles',
          'Fluid Mosaic Membrane and Active Transport Mechanisms',
          'Fractionation and Centrifugation in Cell Research',
        ],
      },
      {
        id: 2,
        title: 'Biochemistry and Enzyme Kinetics',
        description: 'Structures of biomolecules, lock-and-key vs induced fit, allosteric regulation, and enzyme inhibitors.',
        lessons: [
          'Molecular Structure of Carbohydrates, Proteins and Lipids',
          'Enzyme Action: Lock-and-Key and Induced-Fit Mechanisms',
          'Factors Affecting Enzyme Kinetics and Competitive Inhibition',
        ],
      },
      {
        id: 3,
        title: 'Molecular Genetics and Gene Expression',
        description: 'DNA double helix, semi-conservative replication, transcription, translation, and genetic code.',
        lessons: [
          'DNA Molecular Structure and Semi-Conservative Replication',
          'Transcription and Translation Mechanisms (Protein Synthesis)',
          'Mutations: Point Mutations, Frameshifts and Chromosomal Aberrations',
        ],
      },
      {
        id: 4,
        title: 'Principles of Biotechnology and Genetic Engineering',
        description: 'Recombinant DNA technology, plasmids, PCR amplification, gel electrophoresis, and bioethics in Kenya.',
        lessons: [
          'Recombinant DNA Technology and Bacterial Plasmids',
          'Polymerase Chain Reaction (PCR) and Gel Electrophoresis',
          'Applications of Biotechnology in Agriculture and Medicine',
        ],
      },
    ],
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: '⚗',
    color: 'orange',
    description: 'Quantum electron configuration, chemical periodicity, molecular geometry (VSEPR), and thermochemistry.',
    syllabusHighlights: 'Grade 10 STEM: Orbitals (s,p,d), hybridization, Hess’s Law, calorimetry, and reaction kinetics.',
    topics: [
      {
        id: 1,
        title: 'Atomic Structure and Quantum Electron Configuration',
        description: 'Sub-energy levels (s, p, d, f), Aufbau principle, Hund’s rule, Pauli exclusion, and ionization energy trends.',
        lessons: [
          'Quantum Energy Levels and s, p, d Orbital Configurations',
          'Aufbau Principle, Hund’s Rule and Pauli Exclusion',
          'Periodic Trends in First Ionization Energy and Electronegativity',
        ],
      },
      {
        id: 2,
        title: 'Chemical Bonding and Molecular Geometry (VSEPR)',
        description: 'Valence Shell Electron Pair Repulsion theory, molecular shapes, dipole moments, and intermolecular forces.',
        lessons: [
          'Ionic, Covalent and Dative Covalent Bonding Models',
          'VSEPR Theory and Predicting 3D Molecular Shapes',
          'Intermolecular Forces: Hydrogen Bonding and London Dispersion',
        ],
      },
      {
        id: 3,
        title: 'Stoichiometry and Solution Chemistry',
        description: 'Concentration calculations, gravimetric analysis, redox titrations, and limiting reactant determination.',
        lessons: [
          'Molar Concentrations and Standard Solution Preparation',
          'Redox Titrations: Potassium Permanganate and Dichromate',
          'Limiting Reactants and Theoretical Yield Calculations',
        ],
      },
      {
        id: 4,
        title: 'Energetics and Thermochemistry',
        description: 'Enthalpy changes (combustion, neutralization, formation), calorimetry, and Hess’s Law cycles.',
        lessons: [
          'Standard Enthalpy Changes of Formation and Combustion',
          'Calorimetry Calculations for Enthalpy of Neutralization',
          'Applying Hess’s Law Using Energy Cycles and Bond Energies',
        ],
      },
    ],
  },
  {
    id: 'physics',
    name: 'Physics',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: 'ϟ',
    color: 'blue',
    description: '2D kinematics, projectile motion, circular motion dynamics, thermodynamics, and optical wave mechanics.',
    syllabusHighlights: 'Grade 10 STEM: Trajectory modeling, centripetal force, heat engines, geothermal cycles, and wave interference.',
    topics: [
      {
        id: 1,
        title: 'Two-Dimensional Kinematics and Projectile Motion',
        description: 'Horizontal and angled projectiles, flight time, maximum height, range, and vector resolution.',
        lessons: [
          'Resolving Velocity Vectors into Horizontal and Vertical Components',
          'Calculating Time of Flight, Peak Height and Maximum Range',
          'Real-World Ballistic Applications and Trajectory Analysis',
        ],
      },
      {
        id: 2,
        title: 'Uniform Circular Motion and Gravitational Dynamics',
        description: 'Angular velocity, centripetal acceleration, banking of roads, and Newton’s Law of Universal Gravitation.',
        lessons: [
          'Angular Velocity and Centripetal Acceleration Relations',
          'Dynamics of Centripetal Force: Banked Tracks and Centrifuges',
          'Newton’s Law of Universal Gravitation and Satellite Orbits',
        ],
      },
      {
        id: 3,
        title: 'Thermal Physics and Thermodynamic Principles',
        description: 'Thermal expansion, specific heat capacity calculations, latent heat of vaporization, and heat engines.',
        lessons: [
          'Specific Heat Capacity and Electrical Calorimetry Methods',
          'Latent Heat of Fusion and Vaporization Calculations',
          'First and Second Laws of Thermodynamics and Geothermal Power',
        ],
      },
      {
        id: 4,
        title: 'Wave Mechanics and Physical Optics',
        description: 'Young’s double slit experiment, diffraction gratings, polarization of light, and laser applications.',
        lessons: [
          'Interference of Light and Young’s Double Slit Calculations',
          'Diffraction Gratings and Optical Spectroscopy',
          'Polarization of Light and Fiber Optic Communication',
        ],
      },
    ],
  },
  {
    id: 'computer-studies',
    name: 'Computer Studies',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: '⌘',
    color: 'blue',
    description: 'Computational thinking, Python programming, computer networks (OSI model), and cybersecurity ethics.',
    syllabusHighlights: 'Grade 10 STEM: Modular coding, data structures, routing protocols, encryption, and Kenya cyber law.',
    topics: [
      {
        id: 1,
        title: 'Computational Thinking and Algorithmic Design',
        description: 'Decomposition, pattern recognition, abstraction, sorting algorithms (bubble, insertion), and search algorithms.',
        lessons: [
          'Four Pillars of Computational Thinking in Problem Solving',
          'Algorithm Efficiency and Big-O Notation Concepts',
          'Sorting and Searching Algorithms: Binary Search vs Linear Search',
        ],
      },
      {
        id: 2,
        title: 'Programming with Python',
        description: 'Data types, control flow, functions, lists, dictionaries, file handling, and basic OOP principles.',
        lessons: [
          'Python Variables, Data Types and Dynamic Typing',
          'Control Structures: Conditionals, Loops and List Comprehensions',
          'Functions, Modular Architecture and Error Handling in Python',
          'Working with Files, JSON and Data Collections',
        ],
      },
      {
        id: 3,
        title: 'Computer Networking and Internet Protocols',
        description: 'OSI and TCP/IP models, IP addressing (IPv4 vs IPv6), routing, and network hardware.',
        lessons: [
          'The 7 Layers of the OSI Networking Model',
          'IP Addressing, Subnet Masks and Domain Name System (DNS)',
          'Network Topologies, Routers, Switches and Wireless Protocols',
        ],
      },
      {
        id: 4,
        title: 'Cybersecurity, Data Privacy and Digital Ethics',
        description: 'Malware vectors, encryption (symmetric vs asymmetric), Kenya Computer Misuse and Cybercrimes Act.',
        lessons: [
          'Common Cyber Threats: Phishing, Ransomware and Social Engineering',
          'Principles of Cryptography: Public and Private Key Encryption',
          'Kenya’s Data Protection Act and Legal Responsibilities of Tech Creators',
        ],
      },
    ],
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: '♧',
    color: 'green',
    description: 'Agricultural biotechnology, precision soil management, climate-smart farming, and agri-enterprise models.',
    syllabusHighlights: 'Grade 10 STEM: Hydroponics, greenhouse telemetry, tissue culture in bananas, and agro-value addition.',
    topics: [
      {
        id: 1,
        title: 'Agricultural Biotechnology and Tissue Culture',
        description: 'Micropropagation of crops (bananas, sweet potatoes), transgenic crops, and biological pest control.',
        lessons: [
          'Plant Tissue Culture Techniques and Disease-Free Seedlings',
          'Genetically Modified Crops: Opportunities, Risks and Regulations',
          'Integrated Pest Management (IPM) Using Biological Agents',
        ],
      },
      {
        id: 2,
        title: 'Precision Soil Health and Chemistry',
        description: 'Soil pH testing, cation exchange capacity, micro-nutrient remediation, and digital soil mapping.',
        lessons: [
          'Soil Chemical Properties and Cation Exchange Capacity (CEC)',
          'Precision Soil Sampling, Soil pH Correction and Liming',
          'Organic Matter Management and Regenerative Agriculture',
        ],
      },
      {
        id: 3,
        title: 'Climate-Smart Crop Husbandry and Controlled Farming',
        description: 'Drip irrigation automation, shade net farming, greenhouses, and hydroponic fodder systems.',
        lessons: [
          'Automated Drip Irrigation and Water Harvesting Systems',
          'Greenhouse Construction, Climate Control and Sensor Monitoring',
          'Hydroponic and Aquaponic Systems for Arid Environments',
        ],
      },
      {
        id: 4,
        title: 'Agri-Business Enterprise and Value Addition',
        description: 'Market research, post-harvest processing (dairy, horticulture), farm packaging, and digital marketplaces.',
        lessons: [
          'Developing a Commercial Farm Business Plan and Cashflow',
          'Value Addition Techniques in Dairy and Horticultural Produce',
          'Digital Platforms for Farm Marketing and Supply Chain Links',
        ],
      },
    ],
  },
  {
    id: 'general-science',
    name: 'General Science',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: '⚛',
    color: 'green',
    description: 'Integrated science principles, renewable energy systems, environmental public health, and sustainable tech.',
    syllabusHighlights: 'Applied STEM: Solar voltaic arrays, water recycling plants, biotechnology basics, and consumer science.',
    topics: [
      {
        id: 1,
        title: 'Renewable Energy Technologies in Kenya',
        description: 'Photovoltaic cells, solar thermal collectors, biogas digesters, and wind turbine mechanics.',
        lessons: [
          'Solar Photovoltaic Systems: Sizing Panels, Inverters and Batteries',
          'Biogas Digester Construction and Anaerobic Fermentation',
          'Wind and Mini-Hydro Energy Harvesting in Rural Kenya',
        ],
      },
      {
        id: 2,
        title: 'Environmental Sanitation and Water Purification',
        description: 'Reverse osmosis, UV sterilization, wastewater treatment stages, and air quality index monitoring.',
        lessons: [
          'Physical and Chemical Water Purification Technologies',
          'Municipal and Industrial Wastewater Treatment Stages',
          'Air Quality Standards and Monitoring Particulate Matter',
        ],
      },
      {
        id: 3,
        title: 'Consumer Science and Everyday Chemistry',
        description: 'Formulation of detergents, food preservatives, plastic polymers recycling, and household safety.',
        lessons: [
          'Chemistry of Soaps, Detergents and Emulsifiers',
          'Food Preservation Methods and Food Safety Standards',
          'Polymer Types, Plastics Recycling Codes and Biodegradability',
        ],
      },
    ],
  },
  {
    id: 'aviation',
    name: 'Aviation',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: '✈',
    color: 'blue',
    description: 'Principles of flight, aircraft systems, aerodynamics, navigation instrumentation, and aviation safety.',
    syllabusHighlights: 'Technical STEM: Bernoulli’s lift, airfoils, jet engines, altimeters, and air traffic control communication.',
    topics: [
      {
        id: 1,
        title: 'Principles of Aerodynamics and Flight',
        description: 'Bernoulli’s theorem, the four forces of flight (lift, weight, thrust, drag), and airfoil stall behavior.',
        lessons: [
          'The Four Forces of Flight: Lift, Gravity, Thrust and Drag',
          'Airfoil Geometry, Angle of Attack and Stall Conditions',
          'Flight Control Surfaces: Ailerons, Elevators and Rudders',
        ],
      },
      {
        id: 2,
        title: 'Aircraft Powerplants and Systems',
        description: 'Piston aircraft engines, turbojet and turbofan engines, hydraulic systems, and landing gear.',
        lessons: [
          'Four-Stroke Aircraft Piston Engines vs Gas Turbines',
          'Aircraft Fuel, Electrical and Hydraulic Subsystems',
          'Aircraft Weight and Balance Calculations',
        ],
      },
      {
        id: 3,
        title: 'Navigation, Meteorology and Flight Instruments',
        description: 'Pitot-static instruments, altimeter setting, VOR/GPS navigation, and aviation weather charts.',
        lessons: [
          'Pitot-Static System: Airspeed Indicator and Altimeter',
          'Aviation Weather: Pressure Systems, Clouds and Turbulence',
          'Basic Radio Navigation Aids and Air Traffic Control Protocol',
        ],
      },
    ],
  },
  {
    id: 'power-mechanics',
    name: 'Power Mechanics',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: '⚙',
    color: 'blue',
    description: 'Internal combustion engines, automotive drivetrain, braking systems, and mechanical diagnostic tools.',
    syllabusHighlights: 'Technical STEM: Two-stroke & four-stroke engines, fuel injection, transmission gears, and workshop safety.',
    topics: [
      {
        id: 1,
        title: 'Internal Combustion Engine Fundamentals',
        description: 'Otto and Diesel cycles, engine cylinder anatomy, valve timing, and compression ratios.',
        lessons: [
          'Operating Principles of Four-Stroke Petrol and Diesel Engines',
          'Engine Cylinder Block, Piston and Crankshaft Assembly',
          'Valve Operating Mechanisms and Valve Timing Diagrams',
        ],
      },
      {
        id: 2,
        title: 'Automotive Fuel and Ignition Systems',
        description: 'Electronic fuel injection (EFI), carburetors, spark ignition coils, and common rail diesel injection.',
        lessons: [
          'Components and Operation of Electronic Fuel Injection (EFI)',
          'Automotive Ignition Systems: Distributorless and Coil-on-Plug',
          'Engine Cooling and Lubrication Systems',
        ],
      },
      {
        id: 3,
        title: 'Power Transmission and Chassis Mechanics',
        description: 'Clutch assemblies, manual and automatic gearboxes, propeller shafts, differentials, and disc brakes.',
        lessons: [
          'Clutch Operation, Flywheels and Friction Discs',
          'Manual Gearbox Mechanics and Epicyclic Gear Trains',
          'Differential Units, Drive Axles and Hydraulic Braking Systems',
        ],
      },
    ],
  },
  {
    id: 'electricity',
    name: 'Electricity',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: 'ϟ',
    color: 'gold',
    description: 'AC circuit analysis, domestic electrical wiring, electrical machines, semiconductor devices, and power safety.',
    syllabusHighlights: 'Technical STEM: Wiring regulations, transformers, single-phase motors, diodes, and earthing systems.',
    topics: [
      {
        id: 1,
        title: 'Alternating Current (AC) Theory and Circuits',
        description: 'Sinusoidal waveforms, RMS values, inductive and capacitive reactance, impedance, and power factor.',
        lessons: [
          'AC Waveforms: Peak, Peak-to-Peak and RMS Calculations',
          'Pure Inductance, Capacitance and R-L-C Series Circuits',
          'Power in AC Circuits and Power Factor Correction',
        ],
      },
      {
        id: 2,
        title: 'Electrical Installation and Consumer Units',
        description: 'Kenyan wiring regulations, ring main circuits, radial circuits, consumer units, RCDs, and earthing.',
        lessons: [
          'Design and Wiring of Ring Main and Radial Lighting Circuits',
          'Consumer Units: Miniature Circuit Breakers (MCB) and RCDs',
          'Earthing Systems and Electrical Testing Procedures',
        ],
      },
      {
        id: 3,
        title: 'Transformers and Electrical Machines',
        description: 'Single-phase transformers, efficiency calculations, DC motors, and single-phase AC induction motors.',
        lessons: [
          'Transformer Principles, Turns Ratio and Losses',
          'Construction and Principle of DC Motors',
          'Single-Phase Induction Motors: Starting and Speed Control',
        ],
      },
    ],
  },
  {
    id: 'building-construction',
    name: 'Building Construction',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: '⌂',
    color: 'orange',
    description: 'Architectural drafting, foundation systems, masonry, concrete technology, and building site surveying.',
    syllabusHighlights: 'Technical STEM: Strip foundations, concrete mix ratios, mortar bonds, roof trusses, and building codes.',
    topics: [
      {
        id: 1,
        title: 'Site Surveying, Setting Out and Foundation Systems',
        description: '3:4:5 right angle method, profile boards, strip foundations, pad foundations, and damp-proof courses.',
        lessons: [
          'Site Clearing and Setting Out a Building Using Profile Boards',
          'Types of Foundations for Varying Soil Types in Kenya',
          'Excavation Safety, Timbering and Damp-Proof Course (DPC)',
        ],
      },
      {
        id: 2,
        title: 'Masonry Walls and Concrete Technology',
        description: 'Brick and stone bonds (English, Flemish, Stretcher), mortar batching, concrete curing, and reinforcement.',
        lessons: [
          'Brick and Stone Bonding Techniques in Masonry',
          'Concrete Mix Proportions: Batching, Slump Test and Curing',
          'Reinforced Concrete Beams, Columns and Lintels',
        ],
      },
      {
        id: 3,
        title: 'Roof Construction and Building Finishes',
        description: 'Timber roof trusses, pitches, roof coverings (corrugated sheets, tiles), plastering, and drainage.',
        lessons: [
          'Components and Assembly of Timber Roof Trusses',
          'Roof Covering Materials: Sheet Metal, Concrete Tiles and Gutters',
          'Internal Finishes: Plastering, Screeding and Painting',
        ],
      },
    ],
  },
  {
    id: 'wood-technology',
    name: 'Wood Technology',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: '⌁',
    color: 'gold',
    description: 'Timber seasoning, woodworking joints, wood turning, power tools, and contemporary furniture fabrication.',
    syllabusHighlights: 'Technical STEM: Moisture content calculations, mortise and tenon joints, wood finishes, and safety.',
    topics: [
      {
        id: 1,
        title: 'Timber Science, Classification and Seasoning',
        description: 'Hardwoods vs softwoods, tree growth rings, defects, air seasoning, and kiln seasoning methods.',
        lessons: [
          'Botanical Classification: Hardwood and Softwood Species in Kenya',
          'Timber Defects: Natural and Conversion Defects',
          'Moisture Content and Methods of Timber Seasoning',
        ],
      },
      {
        id: 2,
        title: 'Woodworking Joints and Fabrication Techniques',
        description: 'Mortise and tenon, dovetail, housing joints, dowel joints, and modern woodworking adhesives.',
        lessons: [
          'Framing Joints: Mortise and Tenon, Bridle and Mitre',
          'Widening and Carcase Joints: Dovetail and Housing Joints',
          'Selection and Application of Modern Wood Adhesives',
        ],
      },
      {
        id: 3,
        title: 'Wood Finishing and Furniture Preservation',
        description: 'Sanding grits, stains, varnishes, polyurethane, veneer lamination, and spray equipment.',
        lessons: [
          'Surface Preparation: Planing, Scraping and Abrasive Grits',
          'Application of Stains, Varnishes and Polyurethane Finishes',
          'Manufactured Boards: Plywood, MDF and Chipboard Technology',
        ],
      },
    ],
  },
  {
    id: 'metalwork',
    name: 'Metalwork',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: '⚒',
    color: 'orange',
    description: 'Ferrous and non-ferrous metallurgy, lathe turning, metal fabrication, welding, and heat treatments.',
    syllabusHighlights: 'Technical STEM: Oxy-acetylene welding, arc welding, center lathe machining, and annealing processes.',
    topics: [
      {
        id: 1,
        title: 'Metallurgy and Heat Treatment Processes',
        description: 'Properties of mild steel, cast iron, copper, aluminum; hardening, tempering, annealing, and case hardening.',
        lessons: [
          'Classification of Ferrous and Non-Ferrous Metals and Alloys',
          'Heat Treatment: Annealing, Normalizing, Hardening and Tempering',
          'Mechanical Testing of Metals: Tensile, Hardness and Impact Tests',
        ],
      },
      {
        id: 2,
        title: 'Center Lathe Machining and Bench Operations',
        description: 'Turning operations (facing, taper turning, knurling), cutting tools, thread cutting, and precision calipers.',
        lessons: [
          'Parts and Safety Operations of the Center Lathe Machine',
          'Cylindrical Turning, Facing and Taper Turning Techniques',
          'Precision Measurement Using Vernier Calipers and Micrometers',
        ],
      },
      {
        id: 3,
        title: 'Fabrication and Welding Technology',
        description: 'Oxy-acetylene gas welding, shielded metal arc welding (SMAW), sheet metal folding, and joint inspection.',
        lessons: [
          'Oxy-Acetylene Gas Welding: Flame Types and Safety Procedures',
          'Shielded Metal Arc Welding (SMAW): Electrodes, Currents and Joints',
          'Sheet Metal Work: Marking Out, Hemming and Riveted Joints',
        ],
      },
    ],
  },
  {
    id: 'home-science',
    name: 'Home Science',
    curriculum: 'grade-10',
    group: 'STEM',
    pathways: ['stem'],
    icon: '⌂',
    color: 'gold',
    description: 'Advanced nutritional biochemistry, food preservation, textile technology, clothing construction, and home economics.',
    syllabusHighlights: 'Applied STEM: Meal planning for special diets, culinary chemistry, fabric testing, and garment tailoring.',
    topics: [
      {
        id: 1,
        title: 'Advanced Food Science and Nutritional Therapy',
        description: 'Nutritional requirements across life cycles, therapeutic diets for diabetes and hypertension, and food chemistry.',
        lessons: [
          'Therapeutic Diet Planning: Diabetes, Hypertension and Coeliac',
          'Nutritional Biochemistry: Protein Denaturation, Gelatinization and Caramelization',
          'Food Spoilage Microorganisms and Modern Preservation Methods',
        ],
      },
      {
        id: 2,
        title: 'Textile Science and Fabric Performance',
        description: 'Natural and synthetic fibers, yarn production, fabric weave structures, and fiber burn identification tests.',
        lessons: [
          'Chemical and Physical Properties of Natural and Synthetic Fibres',
          'Yarn Spinning and Weaving Methods: Plain, Twill and Satin Weaves',
          'Identification of Textile Fibres Using Microscopic and Burn Tests',
        ],
      },
      {
        id: 3,
        title: 'Garment Construction, Pattern Drafting and Fashion',
        description: 'Body measurements, flat pattern drafting, dart manipulation, seam finishes, and sustainable fashion design.',
        lessons: [
          'Taking Accurate Body Measurements and Drafting Basic Blocks',
          'Pattern Adaptation: Dart Manipulation and Style Lines',
          'Garment Assembly: Seams, Collars, Sleeves and Fasteners',
        ],
      },
    ],
  },

  // Social Sciences Pathway
  {
    id: 'history-and-citizenship',
    name: 'History and Citizenship',
    curriculum: 'grade-10',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    icon: '⌛',
    color: 'gold',
    description: 'Constitutional governance in Kenya, devolution, African civilizations, pan-Africanism, and global diplomacy.',
    syllabusHighlights: 'CBC Social Sciences: Bill of rights, county executive systems, AfCFTA trade union, and international courts.',
    topics: [
      {
        id: 1,
        title: 'The Constitution of Kenya (2010) and Devolution',
        description: 'Devolved government principles, County Governments (Governor, County Assembly), public participation, and CDF.',
        lessons: [
          'Key Milestones in Kenya’s Constitutional History to 2010',
          'Structure and Functions of County Governments in Kenya',
          'Principles of Public Participation and Financial Devolution',
        ],
      },
      {
        id: 2,
        title: 'Classical African Civilizations and Heritage',
        description: 'Kingdom of Aksum, Ancient Egypt, Mali Empire, Swahili Coast civilizations, and traditional African governance.',
        lessons: [
          'Economic and Political Systems of Ancient Egypt and Nubia',
          'The Swahili Coast Civilizations and Trans-Indian Ocean Trade',
          'The Mali and Songhai Empires: Scholarship and Urbanization',
        ],
      },
      {
        id: 3,
        title: 'Pan-Africanism, Decolonization and Continental Unity',
        description: 'Founders of Pan-Africanism, liberation struggles in Southern Africa, and the transition from OAU to African Union.',
        lessons: [
          'Ideological Origins and Conferences of the Pan-African Movement',
          'Liberation Struggles and the Collapse of Apartheid in South Africa',
          'The African Union (AU) and African Continental Free Trade Area (AfCFTA)',
        ],
      },
      {
        id: 4,
        title: 'Global Citizenship, Human Rights and International Law',
        description: 'United Nations agencies, International Court of Justice, human rights charters, and refugee conventions.',
        lessons: [
          'The Universal Declaration of Human Rights and Regional Protocols',
          'The Structure and Roles of Key United Nations Organs',
          'International Humanitarian Law and Conflict Resolution Mechanisms',
        ],
      },
    ],
  },
  {
    id: 'geography',
    name: 'Geography',
    curriculum: 'grade-10',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    icon: '◎',
    color: 'green',
    description: 'Dynamic geomorphic systems, global climate change mitigation, Geographic Information Systems (GIS), and conservation.',
    syllabusHighlights: 'CBC Social Sciences: Plate tectonics, IPCC models, satellite remote sensing, and Kenya blue economy.',
    topics: [
      {
        id: 1,
        title: 'Geodynamic Earth Systems and Tectonic Hazards',
        description: 'Plate boundaries, mantle convection currents, volcanism in the East African Rift, and seismic disaster mitigation.',
        lessons: [
          'Plate Tectonics Theory and Types of Plate Margins',
          'Volcanism in the Great Rift Valley: Calderas, Geysers and Fissures',
          'Earthquake Mechanics, Seismic Waves and Disaster Preparedness',
        ],
      },
      {
        id: 2,
        title: 'Climate Change Science, Vulnerability and Resilience',
        description: 'Greenhouse gas radiative forcing, extreme weather events, Kenya Climate Action Plan, and carbon credit markets.',
        lessons: [
          'The Physics of the Greenhouse Effect and Anthropogenic Drivers',
          'Climate Impacts on Kenya’s ASALs and Water Towers',
          'National Mitigation Strategies: Carbon Sinks, Afforestation and Renewables',
        ],
      },
      {
        id: 3,
        title: 'Geographic Information Systems (GIS) and Remote Sensing',
        description: 'Spatial data layers (vector and raster), GPS coordinate capture, satellite imagery interpretation, and drone mapping.',
        lessons: [
          'Introduction to GIS Architecture: Vector and Raster Data Layers',
          'GPS Spatial Positioning and Fieldwork Data Capture',
          'Interpreting Satellite Multispectral Images for Land Cover Change',
        ],
      },
      {
        id: 4,
        title: 'Sustainable Ocean Resources and the Blue Economy',
        description: 'Kenyan marine territorial waters, Exclusive Economic Zone (EEZ), coral reef ecosystems, and offshore fisheries.',
        lessons: [
          'Marine Geomorphology of Kenya’s Coastal Waters and Mangroves',
          'Harnessing Kenya’s Blue Economy: Fisheries, Shipping and Ports',
          'Marine Conservation and Plastic Pollution Mitigation',
        ],
      },
    ],
  },
  {
    id: 'business-studies',
    name: 'Business Studies',
    curriculum: 'grade-10',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    icon: '↗',
    color: 'blue',
    description: 'Startup entrepreneurship, business model canvas, digital finance (fintech), capital markets, and corporate governance.',
    syllabusHighlights: 'CBC Social Sciences: Mobile money systems, Nairobi Securities Exchange, venture capital, and consumer rights.',
    topics: [
      {
        id: 1,
        title: 'Entrepreneurial Innovation and the Startup Ecosystem',
        description: 'Design thinking methodology, Business Model Canvas (BMC), minimum viable product (MVP), and seed funding.',
        lessons: [
          'Design Thinking Principles for Identifying Market Opportunities',
          'Developing a 9-Building-Block Business Model Canvas (BMC)',
          'Prototyping, Customer Validation and Seed Pitching',
        ],
      },
      {
        id: 2,
        title: 'Digital Finance, Fintech and Mobile Money',
        description: 'M-Pesa architecture, agent banking, payment gateways, micro-lending apps, and digital currency regulations.',
        lessons: [
          'Evolution and Impact of Mobile Money Ecosystems in Kenya',
          'Payment Gateway Systems, E-Commerce and Digital Point of Sale',
          'Cybersecurity in Digital Banking and Regulatory Frameworks',
        ],
      },
      {
        id: 3,
        title: 'Capital Markets and Investment Portfolio Management',
        description: 'Nairobi Securities Exchange (NSE), equities, treasury bills, government infrastructure bonds, and mutual funds.',
        lessons: [
          'Structure and Trading Mechanisms of the Nairobi Securities Exchange',
          'Government Securities: Treasury Bills and Treasury Bonds',
          'Unit Trusts, Mutual Funds and Portfolio Diversification',
        ],
      },
      {
        id: 4,
        title: 'Corporate Social Responsibility and Business Ethics',
        description: 'Consumer Protection Act of Kenya, environmental social governance (ESG), and anti-monopoly fair trade practices.',
        lessons: [
          'Consumer Rights and the Role of the Competition Authority of Kenya',
          'Environmental, Social and Governance (ESG) Frameworks for Firms',
          'Ethical Practices in Advertising, Employment and Supply Chains',
        ],
      },
    ],
  },
  {
    id: 'literature-in-english',
    name: 'Literature in English',
    curriculum: 'grade-10',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    icon: '▤',
    color: 'gold',
    description: 'Post-colonial African prose, drama staging, Shakespearean tragedy, spoken word poetry, and critical theory.',
    syllabusHighlights: 'CBC Social Sciences: Thematic deconstruction, dramatic monologue, feminist criticism, and African dramaturgy.',
    topics: [
      {
        id: 1,
        title: 'Post-Colonial African Prose and Identity',
        description: 'Themes of cultural alienation, political disillusionment, neocolonialism, and narrative perspectives in African novels.',
        lessons: [
          'Narrative Voice, Point of View and Structure in Modern African Novels',
          'Thematic Concerns: Decolonization, Gender and Governance',
          'Character Motivation and Psychological Realism in Fiction',
        ],
      },
      {
        id: 2,
        title: 'Dramatic Analysis, Staging and Characterization',
        description: 'Aristotelian dramatic unities, tragedy vs comedy, stage directions, subtext, and monologue delivery.',
        lessons: [
          'Conventions of Classical and Modern Theatrical Plays',
          'Analyzing Dramatic Tension, Irony and Dialogue Delivery',
          'Staging Dramatic Texts: Lighting, Scenography and Blocking',
        ],
      },
      {
        id: 3,
        title: 'Modern and Contemporary Poetic Traditions',
        description: 'Free verse, imagism, political protest poetry, musicality in lyrics, and African performance poetry.',
        lessons: [
          'Stylistic and Structural Analysis of Modern Free Verse',
          'Symbolism, Allegory and Metaphorical Density in Poetry',
          'Spoken Word, Slam Poetry and the Oral-Written Synthesis',
        ],
      },
    ],
  },
  {
    id: 'fasihi-ya-kiswahili',
    name: 'Fasihi ya Kiswahili',
    curriculum: 'grade-10',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    icon: '▤',
    color: 'green',
    description: 'Uhakiki wa riwaya za Kiswahili, tamthilia za kisasa, mashairi huru na ya arudhi, na nadharia za kifasihi.',
    syllabusHighlights: 'Umahiri wa CBC: Uhakiki wa kina, nadharia za kimapokeo na kisasa, uchambuzi wa wahusika, na falsafa za kiafrika.',
    topics: [
      {
        id: 1,
        title: 'Nadharia za Uhakiki wa Fasihi ya Kiswahili',
        description: 'Uhakiki wa kijamii (uhalisia), ufeministi, muundo (utunzi), na uhakiki wa kisaikolojia.',
        lessons: [
          'Nadharia ya Uhalisia na Uhalisia wa Kijamii Katika Riwaya',
          'Mtazamo wa Kifeministi na Nafasi ya Mwanamke Katika Fasihi',
          'Nadharia ya Kimuundo na Mtindo Katika Kazi za Fasihi',
        ],
      },
      {
        id: 2,
        title: 'Uhakiki wa Riwaya na Hadithi Fupi',
        description: 'Maudhui ya utawala bora, ufisadi, utangamano, mikondo ya wahusika, na matumizi ya tamathali za usemi.',
        lessons: [
          'Muundo wa Ploti na Migogoro Katika Riwaya Teule',
          'Uchambuzi wa Wahusika: Wahusika Wakuu, Wadogo na Bapa',
          'Mbinu za Kimtindo: Jazanda, Taswira, Sadfa na Majazi',
        ],
      },
      {
        id: 3,
        title: 'Tamthilia na Sanaa ya Maonyesho',
        description: 'Ujenzi wa mandhari, vitendo, maelekezo ya jukwaa, mazungumzo, na mbinu za uigizaji.',
        lessons: [
          'Misingi ya Uandishi na Uelekezaji wa Tamthilia ya Kisasa',
          'Dhima ya Monolojia na Majibizano Katika Kuibua Maudhui',
          'Sanaa ya Uigizaji na Uwasilishaji Jukwaani',
        ],
      },
      {
        id: 4,
        title: 'Ushairi wa Kisasa: Arudhi na Ushairi Huru',
        description: 'Mgogoro wa ushairi (wanamapokeo vs wanamabadiliko), uchambuzi wa maudhui, urari wa vina, na mishororo.',
        lessons: [
          'Mjadala wa Ushairi: Wanamapokeo na Wanamabadiliko',
          'Uchambuzi wa Mistari, Vina na Mizani Katika Mashairi ya Arudhi',
          'Uchambuzi wa Shairi Huru: Urari wa Maana na Toni',
        ],
      },
    ],
  },
  {
    id: 'christian-religious-education',
    name: 'Christian Religious Education',
    curriculum: 'grade-10',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    icon: '✧',
    color: 'gold',
    description: 'Christian ethics, contemporary social justice, bioethics, environmental theology, and servant leadership.',
    syllabusHighlights: 'CBC Social Sciences: Bioethics (cloning, organ transplant), social equity, integrity, and interfaith peace.',
    topics: [
      {
        id: 1,
        title: 'Christian Ethics, Moral Philosophy and Conscience',
        description: 'Sources of Christian ethical guidance, deontological vs teleological ethics, and moral decision making.',
        lessons: [
          'Biblical Foundations of Christian Moral Conduct',
          'The Formation and Function of Human Conscience',
          'Ethical Decision Making in Complex Contemporary Dilemmas',
        ],
      },
      {
        id: 2,
        title: 'Bioethics and Christian Sanctity of Life',
        description: 'Christian perspectives on organ donation, euthanasia, abortion, genetic modifications, and palliative care.',
        lessons: [
          'The Principle of Sanctity of Human Life in Bioethics',
          'Christian Approaches to Euthanasia and End-of-Life Decisions',
          'Ethical Dilemmas in Reproductive Technologies and Genetic Screening',
        ],
      },
      {
        id: 3,
        title: 'Christian Perspectives on Social Justice and Governance',
        description: 'Biblical principles of human rights, integrity in leadership, poverty eradication, and peace building.',
        lessons: [
          'The Prophetic Call for Social and Economic Justice',
          'Christian Servant Leadership and Combating Public Corruption',
          'The Role of the Church in National Reconciliation and Peacebuilding',
        ],
      },
    ],
  },
  {
    id: 'islamic-religious-education',
    name: 'Islamic Religious Education',
    curriculum: 'grade-10',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    icon: '☾',
    color: 'green',
    description: 'Islamic jurisprudence (Usul al-Fiqh), contemporary bioethics, Islamic economics, and interfaith harmony.',
    syllabusHighlights: 'CBC Social Sciences: Sharia sources, Takaful insurance, bioethical rulings, and religious co-existence.',
    topics: [
      {
        id: 1,
        title: 'Sources of Islamic Jurisprudence (Usul al-Fiqh)',
        description: 'The Quran, Sunnah, Ijma (consensus), and Qiyas (analogical deduction) in determining Islamic rulings.',
        lessons: [
          'Primary Sources: The Holy Quran and Authentic Sunnah',
          'Secondary Sources: Ijma (Consensus) and Qiyas (Analogy)',
          'The Concept of Ijtihad and Adapting Rulings to Modern Times',
        ],
      },
      {
        id: 2,
        title: 'Principles of Islamic Economics and Banking',
        description: 'Prohibition of Riba (interest), Gharar (excessive uncertainty), Murabaha financing, and Takaful (Islamic insurance).',
        lessons: [
          'The Moral Framework of Islamic Economics and Ban on Riba',
          'Islamic Banking Instruments: Murabaha, Mudaraba and Musharaka',
          'The Concept and Practice of Takaful (Mutual Cooperation Insurance)',
        ],
      },
      {
        id: 3,
        title: 'Islamic Bioethics and Contemporary Social Issues',
        description: 'Sanctity of life, organ transplantation, assisted reproduction, and Islamic teachings on environmental stewardship.',
        lessons: [
          'Islamic Medical Ethics: Preservation of Life and Organ Donation',
          'Sharia Perspectives on Assisted Reproductive Technologies',
          'The Islamic Doctrine of Khilafah (Environmental Stewardship)',
        ],
      },
    ],
  },
  {
    id: 'french',
    name: 'French',
    curriculum: 'grade-10',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    icon: 'Aa',
    color: 'blue',
    description: 'Advanced conversational fluency, professional correspondence, Francophone literature, and cultural appreciation.',
    syllabusHighlights: 'Foreign Languages: DELF B1 syllabus alignment, professional email drafting, and cultural exchange.',
    topics: [
      {
        id: 1,
        title: 'Communication Professionnelle et Correspondance',
        description: 'Rédiger des courriels formels, des lettres de motivation, et participer à un entretien d’embauche.',
        lessons: [
          'La Rédaction de Courriels Professionnels et Formules de Politesse',
          'Préparation et Simulation d’un Entretien d’Embauche',
          'Exprimer une Opinion, Négocier et Défendre un Projet',
        ],
      },
      {
        id: 2,
        title: 'Grammaire Avancée et Structures Complexes',
        description: 'Le subjonctif présent, le conditionnel passé, la voix passive, et le discours indirect.',
        lessons: [
          'L’Emploi et la Conjugaison du Subjonctif Présent',
          'Les Hypothèses avec Si et le Conditionnel Passé',
          'Le Discours Rapporté au Passé et la Concordance des Temps',
        ],
      },
      {
        id: 3,
        title: 'La Francophonie et les Cultures Africaines',
        description: 'L’histoire de la Francophonie, la littérature d’Afrique francophone (Senghor, Camara Laye), et les médias.',
        lessons: [
          'La Diversité et l’Importance de l’Espace Francophone Africain',
          'Découverte des Auteurs Classiques de la Littérature Francophone',
          'Analyse d’Articles de Presse et de Reportages Multimédia',
        ],
      },
    ],
  },
  {
    id: 'german',
    name: 'German',
    curriculum: 'grade-10',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    icon: 'Aa',
    color: 'orange',
    description: 'Conversational German, B1 grammar structures, socio-cultural insights of DACH countries, and workplace dialogue.',
    syllabusHighlights: 'Foreign Languages: Goethe-Zertifikat B1 competencies, compound sentence structures, and intercultural skills.',
    topics: [
      {
        id: 1,
        title: 'Berufswelt und Formelle Kommunikation',
        description: 'Bewerbungsschreiben, Lebenslauf auf Deutsch verfassen, und formelle Telefongespräche führen.',
        lessons: [
          'Verfassen eines Lebenslaufs und Bewerbungsschreibens',
          'Formelle E-Mails und Höflichkeitsformen im Geschäftsleben',
          'Führen von Vorstellungsgesprächen und Diskussionen',
        ],
      },
      {
        id: 2,
        title: 'Komplexe Grammatik und Satzstrukturen',
        description: 'Passivformen, Konjunktiv II (Wünsche und Höflichkeit), Relativsätze, und Verb-Präposition-Verbindungen.',
        lessons: [
          'Der Konjunktiv II für Höflichkeitsbitten und Irreale Wünsche',
          'Das Vorgangs- und Zustandspassiv in Verschiedenen Zeiten',
          'Relativsätze mit Präpositionen im Dativ und Akkusativ',
        ],
      },
      {
        id: 3,
        title: 'Landeskunde und Kultur der DACH-Länder',
        description: 'Kultur, Bildungssystem, und Umweltschutz in Deutschland, Österreich und der Schweiz.',
        lessons: [
          'Das Duale Ausbildungssystem in Deutschland',
          'Umweltschutz und Nachhaltige Energiewende in Europa',
          'Kulturelle Bräuche und Alltag in den DACH-Ländern',
        ],
      },
    ],
  },
  {
    id: 'arabic',
    name: 'Arabic',
    curriculum: 'grade-10',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    icon: 'ع',
    color: 'gold',
    description: 'Modern Standard Arabic, classical rhetoric (Balagha), Arabic grammar (Nahw and Sarf), and diplomatic dialogue.',
    syllabusHighlights: 'Foreign Languages: Advanced Arabic morphology, formal reading comprehension, and Arabic calligraphy styles.',
    topics: [
      {
        id: 1,
        title: 'قواعد النحو والصرف المتقدمة (Nahw and Sarf)',
        description: 'الممنوع من الصرف، الأفعال الخمسة، التمييز والحال، والمشتقات في اللغة العربية.',
        lessons: [
          'إعراب الأسماء الخمسة والممنوع من الصرف',
          'التمييز والحال وأحكام إعرابهما في الجملة',
          'صيغ المشتقات: اسم الفاعل واسم المفعول واسم المكان',
        ],
      },
      {
        id: 2,
        title: 'البلاغة العربية والتعبير الأدبي (Arabic Rhetoric)',
        description: 'علم البيان: التشبيه، الاستعارة، والكناية، وعلم البديع في النصوص الأدبية.',
        lessons: [
          'أركان التشبيه وأنواعه في النصوص البلاغية',
          'الاستعارة التصريحية والمكنية في الشعر العربي',
          'المحسنات البديعية: الجناس والطباق والسجع',
        ],
      },
      {
        id: 3,
        title: 'المحادثة الرسمية والمراسلات الدبلوماسية',
        description: 'صياغة المراسلات الرسمية، المقابلات الدبلوماسية، والترجمة من وإلى اللغة العربية.',
        lessons: [
          'كتابة الرسائل والتقارير الإدارية باللغة العربية الفصحى',
          'المصطلحات الدبلوماسية والدولية في المحافل الرسمية',
          'مبادئ الترجمة بين اللغتين العربية والإنجليزية',
        ],
      },
    ],
  },
  {
    id: 'mandarin-chinese',
    name: 'Mandarin Chinese',
    curriculum: 'grade-10',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    icon: '文',
    color: 'red',
    description: 'HSK Level 3 competencies, Hanzi character etymology, formal Chinese dialogue, and Sino-African trade communication.',
    syllabusHighlights: 'Foreign Languages: Pinyin tonal mastery, business communication, Chinese culture, and characters writing.',
    topics: [
      {
        id: 1,
        title: 'Advanced Conversational Mandarin and Business Chinese',
        description: 'Conducting trade negotiations, travel arrangements, formal introductions, and digital messaging.',
        lessons: [
          'Formal Business Greetings, Introductions and Etiquette',
          'Commercial Price Negotiation and Trade Dialogue in Mandarin',
          'Navigating Airports, Hotels and Transport in China',
        ],
      },
      {
        id: 2,
        title: 'Hanzi Radical Analysis, Structure and Grammar',
        description: 'Character stroke orders, radical identification, complex sentences using 虽然...但是..., and aspect particles (了, 着, 过).',
        lessons: [
          'Deconstructing Chinese Radicals and Character Etymology',
          'Using Complex Conjunctions and Conditional Sentence Patterns',
          'The Aspect Particles: Le (了), Zhe (着), and Guo (过) Explained',
        ],
      },
      {
        id: 3,
        title: 'Sino-African Relations and Chinese Cultural Insights',
        description: 'Festivals (Spring Festival, Mid-Autumn), Chinese tea culture, Belt and Road infrastructure, and philosophy.',
        lessons: [
          'Traditional Chinese Festivals, Customs and Culinary Culture',
          'Key Philosophies: Confucian Respect and Harmony Concepts',
          'Sino-African Economic Cooperation and Cultural Exchanges',
        ],
      },
    ],
  },
  {
    id: 'indigenous-languages',
    name: 'Indigenous Languages',
    curriculum: 'grade-10',
    group: 'Social Sciences',
    pathways: ['social-sciences'],
    icon: 'Aa',
    color: 'green',
    description: 'Documentation of Kenyan indigenous languages, phonology, oral folklore preservation, and indigenous knowledge.',
    syllabusHighlights: 'CBC Heritage: Endangered dialect conservation, orthography systems, traditional wisdom, and cultural identity.',
    topics: [
      {
        id: 1,
        title: 'Orthography, Phonology and Linguistic Structures',
        description: 'Tonal systems, vowel harmony, consonant clusters, and writing systems of Kenyan indigenous languages.',
        lessons: [
          'Phonological Systems and Tonal Patterns in Indigenous Languages',
          'Developing and Standardizing Orthographic Writing Systems',
          'Noun Classes and Morphological Structures Across Language Families',
        ],
      },
      {
        id: 2,
        title: 'Oral Literature, Ethnobotany and Indigenous Knowledge',
        description: 'Traditional proverbs, riddles, historical epics, traditional ecological knowledge (TEK), and medicine.',
        lessons: [
          'Oral History and Clan Genealogies as Living Records',
          'Traditional Ecological Knowledge and Ethnobotanical Names',
          'Proverbs as Ethical Frameworks for Community Conflict Resolution',
        ],
      },
      {
        id: 3,
        title: 'Digital Preservation and Language Documentation',
        description: 'Audio recording methodologies, linguistic archiving, digital dictionary creation, and community revitalization.',
        lessons: [
          'Ethical Protocols in Community Linguistic Fieldwork',
          'Building Audio-Visual Archives for Endangered Dialects',
          'Creating Digital Dictionaries and Educational Reading Materials',
        ],
      },
    ],
  },

  // Arts & Sports Science Pathway
  {
    id: 'sports-and-recreation',
    name: 'Sports and Recreation',
    curriculum: 'grade-10',
    group: 'Arts & Sports Science',
    pathways: ['arts-sports'],
    icon: '⚽',
    color: 'green',
    description: 'Sports physiology, performance psychology, sports marketing, event management, and officiating standards.',
    syllabusHighlights: 'Grade 10 Arts & Sports: Tournament structures, anti-doping regulations (WADA), athlete mental coaching.',
    topics: [
      {
        id: 1,
        title: 'Sports Psychology and Mental Performance',
        description: 'Goal-setting strategies, visualization, arousal regulation, anxiety management, and building team cohesion.',
        lessons: [
          'Mental Toughness, Self-Talk and Arousal Control in Athletes',
          'Visualization and Pre-Competition Routines for Performance',
          'Team Dynamics, Leadership and Conflict Resolution in Squads',
        ],
      },
      {
        id: 2,
        title: 'Tournament Organization and Sports Event Management',
        description: 'Round-robin, knockout tournament design, sponsorship proposals, venue logistics, and spectator safety.',
        lessons: [
          'Designing Round-Robin and Single Elimination Tournament Fixtures',
          'Drafting Sports Sponsorship Proposals and Event Budgeting',
          'Venue Operations, Crowd Safety and Media Coordination',
        ],
      },
      {
        id: 3,
        title: 'Officiating Rules, Technology and Anti-Doping',
        description: 'Rules of track and field, ball games, Video Assistant Referee (VAR) systems, and WADA anti-doping code.',
        lessons: [
          'Officiating Mechanics and Rules Enforcement in Major Sports',
          'The Role of Technology: VAR, Photo-Finish and Tracking Sensors',
          'The World Anti-Doping Code and Anti-Doping Agency of Kenya (ADAK)',
        ],
      },
    ],
  },
  {
    id: 'music-and-dance',
    name: 'Music and Dance',
    curriculum: 'grade-10',
    group: 'Arts & Sports Science',
    pathways: ['arts-sports'],
    icon: '♫',
    color: 'gold',
    description: 'Music theory, African polyrhythms, ethnomusicology, dance choreography, and digital audio production.',
    syllabusHighlights: 'Grade 10 Arts & Sports: Staff notation, traditional Kenyan instruments, DAW production, and copyright laws.',
    topics: [
      {
        id: 1,
        title: 'Music Theory, Harmony and Sight-Reading',
        description: 'Treble and bass staves, major and minor scales, interval calculations, triad construction, and cadence identification.',
        lessons: [
          'Staff Notation: Reading Pitch, Rhythm, Time Signatures and Key Signatures',
          'Constructing Major, Minor Scales and Identifying Primary Triads',
          'Cadences: Perfect, Imperfect, Plagal and Interrupted Cadences',
        ],
      },
      {
        id: 2,
        title: 'African Ethnomusicology and Traditional Dance',
        description: 'Classification of traditional Kenyan instruments (Nyatiti, Orutu, Kayamba, Isukuti), polyrhythms, and cultural dance motifs.',
        lessons: [
          'Classification of Traditional African Musical Instruments',
          'African Polyrhythms, Call-and-Response and Syncopation',
          'Choreographing Traditional Kenyan Folk Dances and Costume Design',
        ],
      },
      {
        id: 3,
        title: 'Digital Audio Production and Music Business',
        description: 'Digital Audio Workstations (DAW), MIDI sequencing, microphone polar patterns, audio mixing, and copyright in Kenya.',
        lessons: [
          'Introduction to DAW Software, MIDI Sequencing and Virtual Instruments',
          'Microphone Types, Placement Techniques and Audio Recording',
          'Mixing Fundamentals: EQ, Compression and Intellectual Property Rights',
        ],
      },
    ],
  },
  {
    id: 'theatre-and-film',
    name: 'Theatre and Film',
    curriculum: 'grade-10',
    group: 'Arts & Sports Science',
    pathways: ['arts-sports'],
    icon: '▣',
    color: 'orange',
    description: 'Screenwriting, Stanislavski acting methods, cinematography, lighting setups, digital film editing, and directing.',
    syllabusHighlights: 'Grade 10 Arts & Sports: 3-act story arc, color grading, multi-camera setups, and Kenya Film Commission.',
    topics: [
      {
        id: 1,
        title: 'Screenwriting, Storytelling and Character Arcs',
        description: 'Three-act screenplay structure, scene treatment, dialogue subtext, writing loglines, and visual exposition.',
        lessons: [
          'Structuring a Screenplay: The Three-Act Dramatic Arc',
          'Developing Compelling Characters and Writing Authentic Dialogue',
          'Formatting Industry-Standard Scripts and Pitch Decks',
        ],
      },
      {
        id: 2,
        title: 'Acting Methodologies, Voice and Stagecraft',
        description: 'Stanislavski system, physical theatre, vocal projection, stage combat safety, and audition preparation.',
        lessons: [
          'Stanislavski Method: The Magic If and Emotional Memory',
          'Vocal Projection, Diction and Breath Control for Actors',
          'Blocking, Stage Movement and Stage Combat Safety Protocols',
        ],
      },
      {
        id: 3,
        title: 'Cinematography, Directing and Post-Production Editing',
        description: 'Camera shot types, three-point lighting, sound design, non-linear video editing, and color grading.',
        lessons: [
          'Camera Angles, Shot Framing and the Rule of Thirds in Cinematography',
          'Three-Point Lighting Setup: Key, Fill and Backlight Techniques',
          'Non-Linear Video Editing: Cuts, Transitions and Color Grading',
        ],
      },
    ],
  },
  {
    id: 'fine-arts',
    name: 'Fine Arts',
    curriculum: 'grade-10',
    group: 'Arts & Sports Science',
    pathways: ['arts-sports'],
    icon: '✎',
    color: 'blue',
    description: 'Drawing & composition, acrylic & oil painting, 3D sculpture, graphic design branding, and art exhibition curation.',
    syllabusHighlights: 'Grade 10 Arts & Sports: One/two-point perspective, color harmonies, pottery firing, and portfolio curation.',
    topics: [
      {
        id: 1,
        title: 'Drawing, Perspective and Figurative Composition',
        description: 'One-point and two-point linear perspective, human proportions, cross-hatching, and chiaroscuro tonal rendering.',
        lessons: [
          'Linear Perspective: Vanishing Points and Horizon Lines',
          'Human Figure Proportions and Gesture Drawing Techniques',
          'Tonal Shading, Cross-Hatching and Chiaroscuro Light Studies',
        ],
      },
      {
        id: 2,
        title: 'Painting Techniques, Color Theory and Mixed Media',
        description: 'Color wheel harmonies (analogous, complementary, triadic), acrylic glazes, impasto, and canvas stretching.',
        lessons: [
          'Advanced Color Theory: Hue, Value, Saturation and Color Harmonies',
          'Acrylic and Oil Painting Techniques: Glazing, Scumbling and Impasto',
          'Mixed Media Collage and Exploring Contemporary African Themes',
        ],
      },
      {
        id: 3,
        title: '3D Sculpture, Pottery and Ceramic Arts',
        description: 'Clay modeling methods (pinch, coil, slab), armature construction, kiln firing, and glazing chemistry.',
        lessons: [
          'Hand-Building Pottery Techniques: Coil, Slab and Pinch Methods',
          'Sculpting with Clay, Plaster and Wire Armatures',
          'Ceramic Glazing, Kiln Firing Stages and Safety Protocols',
        ],
      },
      {
        id: 4,
        title: 'Graphic Design, Digital Illustration and Exhibition',
        description: 'Typography, logo design, digital vector illustration, branding guidelines, and gallery curatorial practices.',
        lessons: [
          'Principles of Graphic Design: Contrast, Balance and Visual Hierarchy',
          'Typography Selection, Vector Illustration and Brand Identity',
          'Curating an Art Exhibition and Documenting a Creative Portfolio',
        ],
      },
    ],
  },
]

// Helper function to look up a subject by grade and slug/name
export function getSubject(gradeId, subjectSlug) {
  const normalizedSlug = subjectSlug?.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const subjectList = gradeId === 'grade-10' ? grade10Subjects : form3Subjects

  return subjectList.find(
    (subj) =>
      subj.id === normalizedSlug ||
      subj.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === normalizedSlug
  )
}

// Helper function to look up subjects for a specific grade
export function getSubjectsByGrade(gradeId) {
  return gradeId === 'grade-10' ? grade10Subjects : form3Subjects
}

// Global search across all curricula and subjects
export function searchAllSubjects(query) {
  if (!query || query.trim() === '') return []
  const clean = query.toLowerCase().trim()
  const all = [...form3Subjects, ...grade10Subjects]

  return all.filter(
    (s) =>
      s.name.toLowerCase().includes(clean) ||
      s.description.toLowerCase().includes(clean) ||
      s.topics.some((t) => t.title.toLowerCase().includes(clean))
  )
}
