import {
  SiteConfig,
  GalleryItem,
  PersonalityEntry,
  PerspectiveEntry,
  ReminderItem,
  RitualItem,
  MemoryItem,
  LetterConfig,
  SurpriseItem,
  JarQuote,
} from '../types';

/* ==========================================================================
   CENTRALIZED PERSONALIZATION CONFIGURATION
   Update her name, messages, photographs, or sections here in one place.
   ========================================================================== */

export const siteConfig: SiteConfig = {
  // Recipient's display name or nickname. Update here anytime:
  recipientName: "Kakun",
  recipientNickname: "Kakun",
  welcomeHeading: "A little space, just for you.",
  welcomeSubheading: "A quiet, gentle corner of the web made with care. Explore at your own pace.",
  heroNote: "No hurry, no expectations — just a thoughtful world to wander through whenever you need a pause.",
  
  themeCards: [
    {
      id: "gallery",
      title: "HER GALLERY",
      subtitle: "Frames & Moments",
      description: "A warm, curated visual collection of candid smiles, quiet portraits, and captured glimpses.",
      path: "/gallery",
      accentColor: "#F4EBD9",
      badge: "Visual Diary",
      iconName: "Camera",
      previewImage: "/assets/gallery/photo-01.webp",
    },
    {
      id: "mindset",
      title: "HER MIND & PERSONALITY",
      subtitle: "Essence & Ambition",
      description: "Her values, the way she perceives the world, her quiet strengths, and what brings her joy.",
      path: "/mindset",
      accentColor: "#FED7DF",
      badge: "Portrait of Mind",
      iconName: "Sparkles",
      previewImage: "/assets/gallery/photo-02.webp",
    },
    {
      id: "perspective",
      title: "THE WAY I SEE HER",
      subtitle: "Honest Reflections",
      description: "Sincere observations, subtle qualities you might overlook in yourself, and heartfelt appreciation.",
      path: "/perspective",
      accentColor: "#E6DCF3",
      badge: "Sincere Words",
      iconName: "HeartHandshake",
      previewImage: "/assets/gallery/photo-03.webp",
    },
    {
      id: "reminders",
      title: "THINGS SHE SHOULD REMEMBER",
      subtitle: "Gentle Anchors",
      description: "Comforting words for difficult days, permission to rest, and reminders of your quiet resilience.",
      path: "/reminders",
      accentColor: "#FEEDDE",
      badge: "For Tough Days",
      iconName: "BookHeart",
      previewImage: "/assets/gallery/photo-04.webp",
    },
    {
      id: "personal-space",
      title: "HER PERSONAL SPACE",
      subtitle: "Scrapbook & Surprises",
      description: "Gentle daily rituals, timeline memories, a personal letter, and interactive surprises.",
      path: "/personal-space",
      accentColor: "#FAF6EE",
      badge: "Interactive Journal",
      iconName: "Feather",
      previewImage: "/assets/gallery/photo-05.webp",
    },
  ],
};

/* ==========================================================================
   THEME 1: GALLERY ITEMS
   ========================================================================== */

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    imagePath: "/assets/gallery/photo-01.webp",
    title: "Soft Morning Glow",
    caption: "[ADD PERSONAL CAPTION] A quiet, luminous moment capturing her natural warmth.",
    category: "favorites",
    date: "A quiet Sunday",
    focalPosition: "center",
    note: "One of those frames where genuine peace shows through effortlessly.",
  },
  {
    id: "gal-2",
    imagePath: "/assets/gallery/photo-02.webp",
    title: "A Genuine Smile",
    caption: "[ADD PERSONAL CAPTION] The kind of effortless expression that lights up the entire room.",
    category: "portraits",
    date: "An unhurried afternoon",
    focalPosition: "center top",
    note: "Nothing staged — just pure, contagious joy.",
  },
  {
    id: "gal-3",
    imagePath: "/assets/gallery/photo-03.webp",
    title: "Candid Grace",
    caption: "[ADD PERSONAL CAPTION] In between thoughts, caught in a quiet, thoughtful pause.",
    category: "candid",
    date: "Golden hour",
    focalPosition: "center",
  },
  {
    id: "gal-4",
    imagePath: "/assets/gallery/photo-04.webp",
    title: "Wandering & Exploring",
    caption: "[ADD PERSONAL CAPTION] Taking in new sights with quiet curiosity.",
    category: "places",
    date: "Travel memory",
    focalPosition: "center",
    note: "Her eyes always find the delicate details others walk right past.",
  },
  {
    id: "gal-5",
    imagePath: "/assets/gallery/photo-05.webp",
    title: "An Everyday Wonder",
    caption: "[ADD PERSONAL CAPTION] Ordinary moments made memorable simply because she was there.",
    category: "memories",
    date: "A simple evening",
    focalPosition: "center",
  },
  {
    id: "gal-6",
    imagePath: "/assets/gallery/photo-06.webp",
    title: "Quiet Strength",
    caption: "[ADD PERSONAL CAPTION] Poise, calm confidence, and subtle determination.",
    category: "portraits",
    date: "Captured moment",
    focalPosition: "center",
  },
  {
    id: "gal-7",
    imagePath: "/assets/gallery/photo-07.webp",
    title: "Mid-Laughter",
    caption: "[ADD PERSONAL CAPTION] When laughter takes over completely.",
    category: "candid",
    date: "Good times",
    focalPosition: "center",
  },
  {
    id: "gal-8",
    imagePath: "/assets/gallery/photo-08.webp",
    title: "Favorite Corner",
    caption: "[ADD PERSONAL CAPTION] Surrounded by books, coffee, or a cozy view.",
    category: "places",
    date: "Cozy afternoon",
    focalPosition: "center",
  },
  {
    id: "gal-9",
    imagePath: "/assets/gallery/photo-09.webp",
    title: "Soft Focus Memory",
    caption: "[ADD PERSONAL CAPTION] A memory worth keeping safe in an album.",
    category: "favorites",
    date: "A special day",
    focalPosition: "center",
  },
  {
    id: "gal-10",
    imagePath: "/assets/gallery/photo-10.webp",
    title: "Golden Hour Shimmer",
    caption: "[ADD PERSONAL CAPTION] Wrapped in evening sunlight.",
    category: "portraits",
    date: "Twilight",
    focalPosition: "center",
  },
  {
    id: "gal-11",
    imagePath: "/assets/gallery/photo-11.webp",
    title: "Thoughtful Expression",
    caption: "[ADD PERSONAL CAPTION] Deep in thought, quietly brilliant.",
    category: "candid",
    date: "Quiet hour",
    focalPosition: "center",
  },
  {
    id: "gal-12",
    imagePath: "/assets/gallery/photo-12.webp",
    title: "A Timeless Frame",
    caption: "[ADD PERSONAL CAPTION] Simplicity and elegance in a single picture.",
    category: "favorites",
    date: "Treasured snapshot",
    focalPosition: "center",
  },
];

/* ==========================================================================
   THEME 2: HER MIND & PERSONALITY
   ========================================================================== */

export const personalityEntries: PersonalityEntry[] = [
  {
    id: "pers-1",
    heading: "Who She Is",
    categoryTitle: "Identity & Nature",
    sourceType: "observation",
    body: "She is a rare blend of gentle sensitivity and quiet grounded resilience. She doesn't need to be loud to make an impact; her presence alone brings clarity, warmth, and an instinctive sense of comfort to people around her.",
    tags: ["Gentle Grounding", "Authentic", "Observant"],
  },
  {
    id: "pers-2",
    heading: "The Way She Thinks",
    categoryTitle: "Mind & Curiosity",
    sourceType: "observation",
    body: "Her mind is both analytical and deeply empathetic. She looks beneath the surface of things — noticing small emotional nuances, weighing things thoughtfully before speaking, and approaching complex situations with fairness and patience.",
    tags: ["Thoughtful", "Balanced", "Reflective"],
  },
  {
    id: "pers-3",
    heading: "Her Core Values",
    categoryTitle: "What Guides Her",
    sourceType: "her-words",
    body: "Loyalty, emotional honesty, kindness, and staying true to oneself even when it isn't the easiest path. She values genuine people over superficial noise, and protects the peace of those she holds close.",
    quote: "[ADD PERSONAL QUOTE] 'Kindness is never wasted, and peace of mind is worth protecting.'",
    tags: ["Integrity", "Kindness", "Sincerity"],
  },
  {
    id: "pers-4",
    heading: "Her Quiet Strengths",
    categoryTitle: "Resilience & Grace",
    sourceType: "strength",
    body: "The ability to keep moving forward even when days feel heavy, without growing bitter. She carries a gentle dignity through storms, often underestimating just how extraordinarily resilient she truly is.",
    tags: ["Resilience", "Dignity", "Grace Under Pressure"],
  },
  {
    id: "pers-5",
    heading: "Her Dreams & Ambitions",
    categoryTitle: "Visions for Tomorrow",
    sourceType: "dream",
    body: "A life built on purpose, creative fulfillment, continuous learning, and meaningful connection. She carries dreams she works quietly toward, steadily laying bricks one day at a time.",
    quote: "[ADD PERSONAL GOAL/DREAM] 'Building a life that feels peaceful on the inside, not just impressive on the outside.'",
    tags: ["Purpose-Driven", "Lifelong Learner", "Growth"],
  },
  {
    id: "pers-6",
    heading: "Things That Make Her Unique",
    categoryTitle: "Her Signature Spark",
    sourceType: "quirk",
    body: "The specific way she laughs when something is truly funny, how she notices the moon or the color of the sky on busy days, her intuitive emotional intelligence, and her uncanny ability to make people feel truly heard.",
    tags: ["Attentive", "Warm Humor", "Intuitive"],
  },
  {
    id: "pers-7",
    heading: "What Makes Her Smile",
    categoryTitle: "Little Joys",
    sourceType: "observation",
    body: "Warm cups of tea or coffee, unhurried conversations without rush, cozy spaces, soft music, finding a song that matches her exact mood, and simple, unforced moments with people who understand her.",
    tags: ["Simple Pleasures", "Cozy Atmosphere", "Music"],
  },
  {
    id: "pers-8",
    heading: "Things Worth Appreciating About Her",
    categoryTitle: "Things She May Forget",
    sourceType: "observation",
    body: "Her patience with others, the sincerity she puts into the things she cares about, her capacity to care deeply, and how she never lets the roughness of the world harden her soft, generous heart.",
    tags: ["Patience", "Generous Spirit", "Enduring Warmth"],
  },
];

/* ==========================================================================
   THEME 3: THE WAY I SEE HER
   ========================================================================== */

export const perspectiveEntries: PerspectiveEntry[] = [
  {
    id: "persp-1",
    heading: "What I Appreciate About You",
    category: "appreciation",
    highlightPhrase: "You make the world feel calmer just by being in it.",
    body: "There is an ease and warmth to your nature that you might take for granted, but to everyone who interacts with you, it is unmistakable. You listen with real presence, you speak with kindness, and you never demand the spotlight — yet you naturally bring lightness into any room you enter.",
  },
  {
    id: "persp-2",
    heading: "Qualities You May Not Notice in Yourself",
    category: "noticed",
    highlightPhrase: "You are far stronger and more capable than you give yourself credit for.",
    body: "I notice how hard you try, even on days when your energy is low. I notice how you carry responsibilities quietly, how you figure things out step by step, and how you show up with grace even when no one is applauding. You are not just getting by — you are growing, every single day.",
  },
  {
    id: "persp-3",
    heading: "Small Things That Stand Out",
    category: "unique",
    highlightPhrase: "It's the little details that reveal your genuine character.",
    body: "The way your expression softens when you speak of things you love. The careful thoughtfulness behind your words. The quiet way you look out for others. These aren't big dramatic gestures; they are steady, daily proofs of a truly beautiful character.",
  },
  {
    id: "persp-4",
    heading: "Things I Respect Deeply About You",
    category: "respect",
    highlightPhrase: "Your authenticity in a world full of pretense.",
    body: "You stay true to what you believe in. You don't put on an artificial persona to impress strangers. You have self-respect, moral clarity, and a quiet sense of boundaries that protects your peace. That kind of quiet self-assurance is rare and deeply admirable.",
  },
  {
    id: "persp-5",
    heading: "Things I Hope You Never Forget",
    category: "appreciation",
    highlightPhrase: "You never need to prove your worth to deserve kindness and respect.",
    body: "On days when you feel uncertain, remember that your value does not hinge on flawless productivity or anyone else's validation. You are inherently worthy, your feelings are valid, and your journey is unfolding exactly as it should.",
  },
  {
    id: "persp-6",
    heading: "Words I Wanted to Put Into Writing",
    category: "letter",
    highlightPhrase: "May you always see yourself with the kindness you offer everyone else.",
    body: "Sometimes the most important things go unsaid in daily life. This page exists simply so you have a tangible reminder: you are appreciated, you are respected, and your presence in this world is a meaningful gift to those who know you.",
  },
];

/* ==========================================================================
   THEME 4: THINGS SHE SHOULD REMEMBER
   ========================================================================== */

export const remindersList: ReminderItem[] = [
  {
    id: "rem-1",
    title: "Read This on a Difficult Day",
    tag: "Anchoring Note",
    category: "difficult-day",
    message: "Today might feel heavy or frustrating, and that's okay. You do not have to fix everything right this moment. Take one slow, deep breath. Unclench your jaw. Drop your shoulders. Drink some water. The difficult feelings will pass, just like all the other storms you've weathered before.",
    isDailyFeatured: true,
  },
  {
    id: "rem-2",
    title: "Rest Is Not a Reward You Must Earn",
    tag: "Self-Compassion",
    category: "rest",
    message: "Rest is a fundamental human need, not something you only deserve after exhausting yourself. It is completely okay to pause, take a nap, read quietly, or do absolutely nothing for an afternoon without feeling guilty.",
  },
  {
    id: "rem-3",
    title: "Small Steps Still Count as Progress",
    tag: "Growth",
    category: "growth" as any,
    message: "You don't need giant leaps to move forward. Getting out of bed, finishing one small task, showing up for yourself in the quietest way — every millimeter of progress counts. Be proud of the quiet efforts nobody else sees.",
  },
  {
    id: "rem-4",
    title: "Focus on What Lies Within Your Hands",
    tag: "Peace of Mind",
    category: "control",
    message: "You cannot control other people's reactions, past outcomes, or unpredictable tomorrows. What you can control is your own breath, your kindness to yourself right now, your next small decision, and where you choose to place your energy.",
  },
  {
    id: "rem-5",
    title: "You Don't Have to Have It All Figured Out",
    tag: "Clarity",
    category: "worth",
    message: "Life is not an exam with a fixed answer key. It is an exploration. It is completely natural to have questions, changing desires, and moments of doubt. Trust that the path becomes clear as you keep walking.",
  },
  {
    id: "rem-6",
    title: "Your Feelings Deserve Space and Validity",
    tag: "Gentle Reminder",
    category: "difficult-day",
    message: "Never apologize for feeling things deeply. Sadness, overwhelm, excitement, exhaustion — they are all valid signals from your soul. Listen to them with curiosity and tenderness rather than judgment.",
  },
  {
    id: "rem-7",
    title: "Be as Patient with Yourself as You Are with Friends",
    tag: "Self-Compassion",
    category: "daily",
    message: "Think of how softly and generously you would speak to a friend who is struggling. Turn that same warm, patient voice toward yourself. You deserve your own friendship.",
  },
  {
    id: "rem-8",
    title: "Your Dreams Matter and Have Room in This World",
    tag: "Inspiration",
    category: "worth",
    message: "The things that light a spark in your eyes aren't silly or impossible. Give them space to grow. Protect your curiosity, cultivate your talents, and remember that your aspirations belong to you.",
  },
];

/* ==========================================================================
   THEME 5: HER PERSONAL SPACE
   ========================================================================== */

export const ritualsList: RitualItem[] = [
  {
    id: "rit-1",
    title: "A Quiet Morning Moment",
    description: "Ten minutes of quiet before looking at screens or jumping into tasks. A glass of water, warm tea, or a glance out the window.",
    frequency: "Morning Ritual",
    category: "Gentle Start",
    iconName: "Sun",
  },
  {
    id: "rit-2",
    title: "Three Deep Calming Breaths",
    description: "Inhale slowly for 4 seconds, hold for 4, exhale softly for 6. Reset your nervous system whenever you feel tension rising.",
    frequency: "Whenever Needed",
    category: "Nervous System Reset",
    iconName: "Wind",
  },
  {
    id: "rit-3",
    title: "A Song That Restores Your Rhythm",
    description: "Put on a favorite piece of music, close your eyes, and let yourself just listen without multitasking.",
    frequency: "Daily Comfort",
    category: "Sound Sanctuary",
    iconName: "Music",
  },
  {
    id: "rit-4",
    title: "Unplugging from the Noise",
    description: "Setting your phone on Do Not Disturb for an hour in the evening to read, sketch, or daydream without interruption.",
    frequency: "Evening Routine",
    category: "Boundaries",
    iconName: "Moon",
  },
  {
    id: "rit-5",
    title: "One Kind Thing for Yourself",
    description: "Eating something nourishing, putting on cozy clothes, or stepping out into the fresh air for a gentle stroll.",
    frequency: "Self-Care",
    category: "Daily Nourishment",
    iconName: "Sparkle",
  },
];

export const memoriesList: MemoryItem[] = [
  {
    id: "mem-1",
    title: "[ADD MEMORY TITLE: A Uniquely Wonderful Day]",
    date: "[Add Date e.g., A golden autumn afternoon]",
    location: "[Add Location or Setting]",
    description: "[ADD PERSONAL MEMORY DESCRIPTION: A place where hours slipped by effortlessly, filled with easy laughter, good food, and conversations that felt timeless.]",
    imagePath: "/assets/gallery/photo-01.webp",
    personalNote: "[ADD PERSONAL NOTE: A memory that still brings an instant smile whenever it comes to mind.]",
  },
  {
    id: "mem-2",
    title: "[ADD MEMORY TITLE: The Evening of Laughter]",
    date: "[Add Date]",
    location: "[Add Location]",
    description: "[ADD PERSONAL MEMORY DESCRIPTION: That time something simple sparked uncontrollable laughter that neither of us could stop for ten minutes straight.]",
    imagePath: "/assets/gallery/photo-03.webp",
    personalNote: "[ADD PERSONAL NOTE: One of the purest, brightest moments of genuine joy.]",
  },
  {
    id: "mem-3",
    title: "[ADD MEMORY TITLE: A Quiet Shared Moment]",
    date: "[Add Date]",
    location: "[Add Location]",
    description: "[ADD PERSONAL MEMORY DESCRIPTION: Sitting in comfortable silence, watching the sky change colors, feeling that words weren't even necessary.]",
    imagePath: "/assets/gallery/photo-05.webp",
    personalNote: "[ADD PERSONAL NOTE: Peaceful memories are often the ones that stay the longest.]",
  },
];

export const personalLetter: LetterConfig = {
  date: "For You, Whenever You Read This",
  salutation: "Dear Kakun,",
  paragraphs: [
    "I wanted to build something that was entirely your own — not a temporary social media post that disappears in a day, but an enduring, peaceful space you could open on your phone or laptop whenever you need a moment of calm.",
    "The world moves fast, and it can be demanding, noisy, and quick to overlook how much quiet effort people carry inside. But I notice the sincerity you bring into everything, the softness you protect despite everything, and the thoughtful way you treat those around you.",
    "This website isn't here to ask for anything in return. It's simply here as a reminder that you are seen, you are respected, and you deserve a digital world crafted with genuine care — one where you can browse photographs, read supportive thoughts, or simply breathe for five minutes without any pressure.",
    "Whatever season of life you find yourself in as you read this, I hope you remember to be proud of your journey, gentle with your mistakes, and hopeful for all the bright chapters ahead.",
  ],
  closing: "With sincere warmth and highest regard,",
  signature: "[Your Name]",
  postscript: "P.S. Come back to this corner anytime you need a reminder of how wonderful you truly are.",
};

export const jarQuotes: JarQuote[] = [
  { id: "jq-1", text: "You are allowed to take up space, speak your mind, and protect your peace.", category: "Affirmation" },
  { id: "jq-2", text: "Your smile is a genuine gift to the people who get to share your day.", category: "Joy" },
  { id: "jq-3", text: "You have survived every single difficult day so far. Your track record is 100%.", category: "Strength" },
  { id: "jq-4", text: "Drink some water, stretch your back, and take one long, slow breath right now.", category: "Gentle Care" },
  { id: "jq-5", text: "The universe is in no hurry, yet everything gets accomplished. Give yourself time.", category: "Patience" },
  { id: "jq-6", text: "You don't need to be perfect to be loved, respected, and worthy of every good thing.", category: "Grace" },
  { id: "jq-7", text: "Your sensitivity is not a weakness; it is your capacity to love deeply and understand truly.", category: "Inner Light" },
  { id: "jq-8", text: "One good thing is waiting for you today. Keep an open heart for it.", category: "Hope" },
  { id: "jq-9", text: "You bring more calm and beauty into the world than you realize.", category: "Presence" },
  { id: "jq-10", text: "It's okay to put your phone on silent and just exist for an hour.", category: "Rest" },
  { id: "jq-11", text: "Be gentle with your heart today. You are doing the best you can.", category: "Kindness" },
  { id: "jq-12", text: "Whatever you are working on, trust your instincts and steady hands.", category: "Confidence" },
];

export const surpriseItems: SurpriseItem[] = [
  {
    id: "surp-envelope",
    title: "A Sealed Envelope",
    previewText: "A small sealed envelope with your name on it...",
    revealedContent: "May today bring you a quiet moment of happiness, a reason to smile unexpectedly, and the peaceful reminder that you are deeply appreciated exactly as you are.",
    interactionType: "envelope",
  },
  {
    id: "surp-scratch",
    title: "A Hidden Affirmation",
    previewText: "Click to unveil the hidden note underneath...",
    revealedContent: "✨ You are far more resilient, capable, and wonderfully made than any fleeting self-doubt tries to tell you.",
    interactionType: "scratch",
  },
];
