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
  PoetryVideoItem,
} from '../types';
import { allGalleryPhotos, allPoetryVideos } from './mediaData';

/* ==========================================================================
   CENTRALIZED PERSONALIZATION CONFIGURATION
   ========================================================================== */

export const siteConfig: SiteConfig = {
  recipientName: "Kakun",
  recipientNickname: "Pookie Kakun 🧸🎀",
  welcomeHeading: "A Little Space, Just For You 🧸",
  welcomeSubheading: "A dreamy scrapbook of captured smiles, soulful poetry reels, quiet memories, and endless teddy hugs.",
  heroNote: "ज़िंदगी के हर रंग में तुम्हारी ही सादगी की खुशबू है... 🌸✨",
  
  themeCards: [
    {
      id: "gallery",
      title: "HER SCRAPBOOK GALLERY",
      subtitle: "49 Moments & Moodboard 📸🧸",
      description: "Organic collage, tilted polaroids, washi tape, and fresh new photos displayed in multiple artistic manners.",
      path: "/gallery",
      accentColor: "#F4EBD9",
      badge: "49 Photos • Scrapbook 🧸",
      iconName: "Camera",
      previewImage: "/assets/gallery/photo-47.jpg", // Showing one of the newly added photos!
    },
    {
      id: "poetry",
      title: "POETRY & REELS 📜🎥",
      subtitle: "56 Poetic Video Moments 🎀",
      description: "Heartfelt poetry videos, Urdu/Hindi shayaris, soulful couplets, and soft cinematic reels.",
      path: "/poetry",
      accentColor: "#FED7DF",
      badge: "56 Poetry Videos 🎥✨",
      iconName: "ScrollText",
      previewImage: "/assets/videos/thumbnails/video-01.jpg",
    },
    {
      id: "mindset",
      title: "HER MIND & PERSONALITY",
      subtitle: "Essence & Radiance 💖",
      description: "Her quiet strengths, values, gentle intellect, and the pure pookie traits that make her unique.",
      path: "/mindset",
      accentColor: "#FED7DF",
      badge: "Portrait of Spirit 🌸",
      iconName: "Sparkles",
      previewImage: "/assets/gallery/photo-48.jpg", // Showing newly added photo 2!
    },
    {
      id: "perspective",
      title: "THE WAY I SEE HER",
      subtitle: "Sincere Words & Nazms 🕊️",
      description: "Poetic appreciation, honest observations, and the quiet light you bring into every space you enter.",
      path: "/perspective",
      accentColor: "#E6DCF3",
      badge: "Soulful Reflections 💌",
      iconName: "HeartHandshake",
      previewImage: "/assets/gallery/photo-49.jpg", // Showing newly added photo 3!
    },
    {
      id: "reminders",
      title: "THINGS SHE SHOULD REMEMBER",
      subtitle: "Teddy Hugs & Anchors 🧸✨",
      description: "Gentle grounding words, emergency teddy cuddles, permission to rest, and reminders of your worth.",
      path: "/reminders",
      accentColor: "#FEEDDE",
      badge: "Teddy Care Corner 🧸",
      iconName: "BookHeart",
      previewImage: "/assets/gallery/photo-04.webp",
    },
    {
      id: "personal-space",
      title: "HER PERSONAL SPACE",
      subtitle: "Scrapbook & Surprises 🎀",
      description: "Gentle daily rituals, timeline milestones, personal letter, and cute interactive surprises.",
      path: "/personal-space",
      accentColor: "#FAF6EE",
      badge: "Interactive Journal 🍯",
      iconName: "Feather",
      previewImage: "/assets/gallery/photo-05.webp",
    },
  ],
};

/* Re-export media datasets */
export const galleryItems: GalleryItem[] = allGalleryPhotos;
export const poetryVideos: PoetryVideoItem[] = allPoetryVideos;

/* ==========================================================================
   THEME 2: HER MIND & PERSONALITY
   ========================================================================== */

export const personalityEntries: PersonalityEntry[] = [
  {
    id: "pers-1",
    heading: "Who She Is",
    categoryTitle: "Identity & Nature 🌸",
    sourceType: "observation",
    body: "She is a rare blend of gentle sensitivity and quiet grounded resilience. She doesn't need to be loud to make an impact; her presence alone brings clarity, warmth, and an instinctive sense of comfort to people around her.",
    tags: ["Gentle Grounding", "Authentic Pookie 🧸", "Observant"],
    poeticVerse: "तेरी सादगी में भी एक अजब सी दिलकशी है, जिसे देख कर ज़माना खुद ब खुद झुक जाए...",
  },
  {
    id: "pers-2",
    heading: "The Way She Thinks",
    categoryTitle: "Mind & Curiosity ✨",
    sourceType: "observation",
    body: "Her mind is both analytical and deeply empathetic. She looks beneath the surface of things — noticing small emotional nuances, weighing things thoughtfully before speaking, and approaching complex situations with fairness and patience.",
    tags: ["Thoughtful", "Balanced", "Reflective"],
    poeticVerse: "खामोशी में भी तेरी एक गहरी बात होती है, जो लफ़्ज़ों से परे रूह को छू जाती है...",
  },
  {
    id: "pers-3",
    heading: "Her Core Values",
    categoryTitle: "What Guides Her 🌿",
    sourceType: "her-words",
    body: "Loyalty, emotional honesty, kindness, and staying true to oneself even when it isn't the easiest path. She values genuine people over superficial noise, and protects the peace of those she holds close.",
    quote: "[ADD PERSONAL QUOTE] 'Kindness is never wasted, and peace of mind is worth protecting.'",
    tags: ["Integrity", "Kindness", "Sincerity"],
    poeticVerse: "दिलों को जीतना तेरी आदत में शुमार है, तेरे उसूलों पर तो कायनात भी कुर्बान है...",
  },
  {
    id: "pers-4",
    heading: "Her Quiet Strengths",
    categoryTitle: "Resilience & Grace 🎀",
    sourceType: "strength",
    body: "The ability to keep moving forward even when days feel heavy, without growing bitter. She carries a gentle dignity through storms, often underestimating just how extraordinarily resilient she truly is.",
    tags: ["Resilience", "Dignity", "Grace Under Pressure"],
    poeticVerse: "तू जो तूफानों में भी मुस्कुरा दे, तो अंधेरी रात भी सुबह बन जाए...",
  },
  {
    id: "pers-5",
    heading: "Her Dreams & Ambitions",
    categoryTitle: "Visions for Tomorrow 🕊️",
    sourceType: "dream",
    body: "A life built on purpose, creative fulfillment, continuous learning, and meaningful connection. She carries dreams she works quietly toward, steadily laying bricks one day at a time.",
    quote: "[ADD PERSONAL GOAL/DREAM] 'Building a life that feels peaceful on the inside, not just impressive on the outside.'",
    tags: ["Purpose-Driven", "Lifelong Learner", "Growth"],
    poeticVerse: "तेरे ख्वाबों की उड़ान आसमान से भी ऊंची हो, तेरी हर मंजिल तेरे कदमों में हो...",
  },
  {
    id: "pers-6",
    heading: "Things That Make Her Unique",
    categoryTitle: "Her Signature Spark 🧸",
    sourceType: "quirk",
    body: "The specific way she laughs when something is truly funny, how she notices the moon or the color of the sky on busy days, her intuitive emotional intelligence, and her certified pookie sweetness.",
    tags: ["Attentive", "Warm Humor", "Cutest Pookie 🧸🎀"],
    poeticVerse: "तेरी हंसी जैसे बच्चों की मासूम शरारत, जो हर गम को एक पल में भुला दे...",
  },
  {
    id: "pers-7",
    heading: "What Makes Her Smile",
    categoryTitle: "Little Joys 🍯",
    sourceType: "observation",
    body: "Warm cups of tea or coffee, unhurried conversations without rush, cozy teddy bear blankets, soft poetry, finding a song that matches her exact mood, and simple, unforced moments with people who understand her.",
    tags: ["Simple Pleasures", "Teddy Cuddles 🧸", "Music"],
    poeticVerse: "तेरी मुस्कान का मोल कोई लगा नहीं सकता, ये वो दौलत है जो हर दिल को अमीर बना दे...",
  },
  {
    id: "pers-8",
    heading: "Things Worth Appreciating About Her",
    categoryTitle: "Things She May Forget 💖",
    sourceType: "observation",
    body: "Her patience with others, the sincerity she puts into the things she cares about, her capacity to care deeply, and how she never lets the roughness of the world harden her soft, generous heart.",
    tags: ["Patience", "Generous Spirit", "Enduring Warmth"],
    poeticVerse: "तू जैसी है वैसी ही रहना हमेशा, इस मतलबी जहां में तेरी जैसी रूहें बहुत कम हैं...",
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
    body: "There is an ease and warmth to your nature that you might take for granted, but to everyone who interacts with you, it is unmistakable. You listen with real presence, you speak with kindness, and you naturally bring lightness into any room you enter.",
    poeticNote: "तेरी मौजूदगी ही काफी है किसी महफिल को पुरसुकून बनाने के लिए...",
  },
  {
    id: "persp-2",
    heading: "Qualities You May Not Notice in Yourself",
    category: "noticed",
    highlightPhrase: "You are far stronger and more capable than you give yourself credit for.",
    body: "I notice how hard you try, even on days when your energy is low. I notice how you carry responsibilities quietly, how you figure things out step by step, and how you show up with grace even when no one is applauding. You are not just getting by — you are growing, every single day.",
    poeticNote: "आईने में तू सिर्फ चेहरा देखती है, कभी मेरी नजरों से देख कितनी खास है तू...",
  },
  {
    id: "persp-3",
    heading: "Small Things That Stand Out",
    category: "unique",
    highlightPhrase: "It's the little details that reveal your genuine character.",
    body: "The way your expression softens when you speak of things you love. The careful thoughtfulness behind your words. The quiet way you look out for others. These aren't big dramatic gestures; they are steady, daily proofs of a truly beautiful character.",
    poeticNote: "तेरी छोटी-छोटी बातों में भी एक बड़ी सादगी छिपी होती है...",
  },
  {
    id: "persp-4",
    heading: "Things I Respect Deeply About You",
    category: "respect",
    highlightPhrase: "Your authenticity in a world full of pretense.",
    body: "You stay true to what you believe in. You don't put on an artificial persona to impress strangers. You have self-respect, moral clarity, and a quiet sense of boundaries that protects your peace. That kind of quiet self-assurance is rare and deeply admirable.",
    poeticNote: "दिखावे की इस दुनिया में तेरी असलियत ही तेरी सबसे बड़ी ताकत है...",
  },
  {
    id: "persp-5",
    heading: "Things I Hope You Never Forget",
    category: "appreciation",
    highlightPhrase: "You never need to prove your worth to deserve kindness and respect.",
    body: "On days when you feel uncertain, remember that your value does not hinge on flawless productivity or anyone else's validation. You are inherently worthy, your feelings are valid, and your journey is unfolding exactly as it should.",
    poeticNote: "तू अनमोल है, किसी के तराजू में खुद को तौलना बंद कर दे 🧸...",
  },
  {
    id: "persp-6",
    heading: "Words I Wanted to Put Into Writing",
    category: "letter",
    highlightPhrase: "May you always see yourself with the kindness you offer everyone else.",
    body: "Sometimes the most important things go unsaid in daily life. This page exists simply so you have a tangible reminder: you are appreciated, you are respected, and your presence in this world is a meaningful gift to those who know you.",
    poeticNote: "ये अल्फाज सिर्फ तारीफ नहीं, तेरी शख्शियत की सच्ची गवाही हैं...",
  },
];

/* ==========================================================================
   THEME 4: THINGS SHE SHOULD REMEMBER
   ========================================================================== */

export const remindersList: ReminderItem[] = [
  {
    id: "rem-1",
    title: "Read This on a Difficult Day 🧸",
    tag: "Anchoring Note",
    category: "difficult-day",
    message: "Today might feel heavy or frustrating, and that's okay. You do not have to fix everything right this moment. Take one slow, deep breath. Unclench your jaw. Drop your shoulders. Drink some water. The difficult feelings will pass, just like all the other storms you've weathered before. You're our sweetest pookie, and you've got this!",
    isDailyFeatured: true,
    teddyHugMessage: "A giant warm teddy bear hug is wrapping around you right now! 🧸💖",
  },
  {
    id: "rem-2",
    title: "Rest Is Not a Reward You Must Earn 🍯",
    tag: "Self-Compassion",
    category: "rest",
    message: "Rest is a fundamental human need, not something you only deserve after exhausting yourself. It is completely okay to pause, take a nap, cuddle with a soft blanket, or do absolutely nothing for an afternoon without feeling guilty.",
    teddyHugMessage: "Grab your favorite pillow, curl up, and just breathe 🧸☁️",
  },
  {
    id: "rem-3",
    title: "Small Steps Still Count as Progress 🌸",
    tag: "Growth",
    category: "daily",
    message: "You don't need giant leaps to move forward. Getting out of bed, finishing one small task, showing up for yourself in the quietest way — every millimeter of progress counts. Be proud of the quiet efforts nobody else sees.",
    teddyHugMessage: "Every little step is a victory! High five from Teddy 🧸🐾",
  },
  {
    id: "rem-4",
    title: "Focus on What Lies Within Your Hands ✨",
    tag: "Peace of Mind",
    category: "control",
    message: "You cannot control other people's reactions, past outcomes, or unpredictable tomorrows. What you can control is your own breath, your kindness to yourself right now, your next small decision, and where you choose to place your energy.",
    teddyHugMessage: "Protect your gentle heart and sweet peace 🧸🛡️",
  },
  {
    id: "rem-5",
    title: "You Don't Have to Have It All Figured Out 🎀",
    tag: "Clarity",
    category: "worth",
    message: "Life is not an exam with a fixed answer key. It is an exploration. It is completely natural to have questions, changing desires, and moments of doubt. Trust that the path becomes clear as you keep walking.",
    teddyHugMessage: "You are doing so much better than you realize 🧸💖",
  },
  {
    id: "rem-6",
    title: "Your Feelings Deserve Space and Validity 🥺",
    tag: "Gentle Reminder",
    category: "difficult-day",
    message: "Never apologize for feeling things deeply. Sadness, overwhelm, excitement, exhaustion — they are all valid signals from your soul. Listen to them with curiosity and tenderness rather than judgment.",
    teddyHugMessage: "It's okay to cry, it's okay to feel. Teddy is right here 🧸🫂",
  },
  {
    id: "rem-7",
    title: "Be as Patient with Yourself as You Are with Friends 🌷",
    tag: "Self-Compassion",
    category: "daily",
    message: "Think of how softly and generously you would speak to a friend who is struggling. Turn that same warm, patient voice toward yourself. You deserve your own friendship and compassion.",
    teddyHugMessage: "Treat yourself like the precious pookie you are 🧸🎀",
  },
  {
    id: "rem-8",
    title: "Your Dreams Matter and Have Room in This World 🍓",
    tag: "Inspiration",
    category: "worth",
    message: "The things that light a spark in your eyes aren't silly or impossible. Give them space to grow. Protect your curiosity, cultivate your talents, and remember that your aspirations belong to you.",
    teddyHugMessage: "Dream big, sweet girl! The universe is cheering for you 🧸✨",
  },
];

/* ==========================================================================
   THEME 5: HER PERSONAL SPACE
   ========================================================================== */

export const ritualsList: RitualItem[] = [
  {
    id: "rit-1",
    title: "A Quiet Morning Moment ☀️",
    description: "Ten minutes of quiet before looking at screens or jumping into tasks. A glass of water, warm tea, or a glance out the window.",
    frequency: "Morning Ritual",
    category: "Gentle Start",
    iconName: "Sun",
  },
  {
    id: "rit-2",
    title: "Three Deep Calming Breaths 🌬️",
    description: "Inhale slowly for 4 seconds, hold for 4, exhale softly for 6. Reset your nervous system whenever you feel tension rising.",
    frequency: "Whenever Needed",
    category: "Nervous System Reset",
    iconName: "Wind",
  },
  {
    id: "rit-3",
    title: "A Song That Restores Your Rhythm 🎶",
    description: "Put on a favorite piece of music, close your eyes, and let yourself just listen without multitasking.",
    frequency: "Daily Comfort",
    category: "Sound Sanctuary",
    iconName: "Music",
  },
  {
    id: "rit-4",
    title: "Unplugging from the Noise 🌙",
    description: "Setting your phone on Do Not Disturb for an hour in the evening to read, sketch, or daydream without interruption.",
    frequency: "Evening Routine",
    category: "Boundaries",
    iconName: "Moon",
  },
  {
    id: "rit-5",
    title: "One Kind Thing for Yourself 🧸",
    description: "Eating something nourishing, putting on cozy clothes, hugging a soft plushie, or stepping out into the fresh air.",
    frequency: "Self-Care",
    category: "Daily Nourishment",
    iconName: "Sparkle",
  },
];

export const memoriesList: MemoryItem[] = [
  {
    id: "mem-1",
    title: "A Golden Unhurried Day 🌸",
    date: "A quiet Sunday",
    location: "Somewhere cozy & warm",
    description: "A place where hours slipped by effortlessly, filled with easy laughter, good food, and conversations that felt timeless.",
    imagePath: "/assets/gallery/photo-47.jpg",
    personalNote: "Fresh scrapbook memory — look at that genuine radiant glow! 🧸🎀",
    poeticLine: "वो दिन जैसे किसी पुरानी खूबसूरत नज़्म का हिस्सा था...",
  },
  {
    id: "mem-2",
    title: "The Evening of Laughter 🎀",
    date: "Twilight hour",
    location: "Under soft lights",
    description: "That time something simple sparked uncontrollable laughter that neither of us could stop for ten minutes straight.",
    imagePath: "/assets/gallery/photo-48.jpg",
    personalNote: "Pure contagious cuteness and unstoppable giggles 🧸✨",
    poeticLine: "हंसी तुम्हारी जैसे सन्नाटे में किसी साज का बजना...",
  },
  {
    id: "mem-3",
    title: "A Quiet Shared Moment 🕊️",
    date: "Golden hour sunset",
    location: "Where the sky turned lavender",
    description: "Sitting in comfortable silence, watching the sky change colors, feeling that words weren't even necessary.",
    imagePath: "/assets/gallery/photo-49.jpg",
    personalNote: "Peaceful memories are often the ones that stay the longest.",
    poeticLine: "खामोशियों में भी जब बातचीत होने लगे, वही तो रूह का रिश्ता है...",
  },
];

export const personalLetter: LetterConfig = {
  date: "For You, Whenever You Read This 💌",
  salutation: "Dear Kakun,",
  paragraphs: [
    "I wanted to build something that was entirely your own — not a temporary social media post that disappears in a day, but an enduring, peaceful space you could open on your phone or laptop whenever you need a moment of calm, poetry, or a warm smile.",
    "The world moves fast, and it can be demanding, noisy, and quick to overlook how much quiet effort people carry inside. But I notice the sincerity you bring into everything, the softness you protect despite everything, and the thoughtful way you treat those around you.",
    "This website isn't here to ask for anything in return. It's simply here as a reminder that you are seen, you are respected, and you deserve a digital world crafted with genuine care — one filled with photographs, poetry videos, reminders, and cute teddy hugs 🧸 whenever you need a pause.",
    "Whatever season of life you find yourself in as you read this, I hope you remember to be proud of your journey, gentle with your mistakes, and hopeful for all the bright chapters ahead.",
  ],
  closing: "With sincere warmth, highest regard, and a big teddy hug,",
  signature: "Your Friend & Well-Wisher 🧸🎀",
  postscript: "P.S. Come back to this corner anytime you need a reminder of how wonderful you truly are.",
};

export const jarQuotes: JarQuote[] = [
  { id: "jq-1", text: "You are allowed to take up space, speak your mind, and protect your peace 🧸", category: "Affirmation" },
  { id: "jq-2", text: "Your smile is a genuine gift to the people who get to share your day ✨", category: "Joy" },
  { id: "jq-3", text: "You have survived every single difficult day so far. Your track record is 100% 💖", category: "Strength" },
  { id: "jq-4", text: "Drink some water, stretch your back, and take one long, slow breath right now 🌸", category: "Gentle Care" },
  { id: "jq-5", text: "The universe is in no hurry, yet everything gets accomplished. Give yourself time 🍯", category: "Patience" },
  { id: "jq-6", text: "You don't need to be perfect to be loved, respected, and worthy of every good thing 🌷", category: "Grace" },
  { id: "jq-7", text: "Your sensitivity is not a weakness; it is your capacity to love deeply and understand truly 🧸", category: "Inner Light" },
  { id: "jq-8", text: "One good thing is waiting for you today. Keep an open heart for it 🎀", category: "Hope" },
  { id: "jq-9", text: "You bring more calm and beauty into the world than you realize 🕊️", category: "Presence" },
  { id: "jq-10", text: "It's okay to put your phone on silent and just exist for an hour 🌙", category: "Rest" },
  { id: "jq-11", text: "Be gentle with your heart today. You are doing the best you can 🥺🧸", category: "Kindness" },
  { id: "jq-12", text: "Whatever you are working on, trust your instincts and steady hands 🍓", category: "Confidence" },
];

export const surpriseItems: SurpriseItem[] = [
  {
    id: "surp-envelope",
    title: "A Sealed Envelope 💌",
    previewText: "A small sealed envelope with Kakun's name on it...",
    revealedContent: "May today bring you a quiet moment of happiness, a reason to smile unexpectedly, and the peaceful reminder that you are deeply appreciated exactly as you are. Sending you the warmest teddy cuddle! 🧸🎀✨",
    interactionType: "envelope",
  },
  {
    id: "surp-scratch",
    title: "A Hidden Affirmation ✨",
    previewText: "Click to unveil the hidden note underneath...",
    revealedContent: "✨ You are far more resilient, capable, and wonderfully made than any fleeting self-doubt tries to tell you. Certified 100% sweetest pookie! 🧸💖",
    interactionType: "scratch",
  },
];
