import { GalleryItem, PoetryVideoItem } from '../types';

/* ==========================================================================
   ALL 49 PHOTOS (46 WebP + 3 Newly Added JFIF)
   Configured with non-linear scrapbook tilt angles, tapes, stickers & poetry
   ========================================================================== */

const pookieStickers = ['🧸', '🎀', '💖', '✨', '🌸', '🍓', '🍯', '🥺', '🌷', '🧁'];
const tapeColors = [
  'rgba(254, 215, 223, 0.7)', // Blush pink
  'rgba(230, 220, 243, 0.7)', // Lavender
  'rgba(254, 235, 222, 0.7)', // Peach
  'rgba(244, 235, 217, 0.7)', // Cream
  'rgba(255, 240, 245, 0.7)', // Rosewater
];

// Poetic lines to accompany photos
const photoPoetry = [
  "तेरी सादगी में भी एक अजब सी दिलकशी है...",
  "A quiet grace that needs no spotlight to shine.",
  "हंसी तुम्हारी जैसे सुबह की ताज़ा हवा...",
  "In your eyes, the world slows down into peace.",
  "मासूमियत का दूसरा नाम जैसे तुम ही हो 🧸",
  "Gentle as dusk, radiant as the morning sun.",
  "कुछ तस्वीरें खुद ही पूरी गज़ल बन जाती हैं...",
  "A silhouette of calm and unhurried kindness.",
  "तेरी मुस्कुराहट से ही तो ये जहां खूबसूरत है ✨",
  "Like vintage parchment steeped in warm light.",
  "हर अंदाज़ में इक रूहानी सी बात है...",
  "Candid moments where purity takes the lead.",
  "तुम्हारे होने से हर सादा लम्हा खास हो जाता है...",
  "Soft laughter echoing like wind chimes in spring.",
  "तेरा ख्याल भी दिल को सुकूँ दे जाता है 🎀",
  "Poetry written not in words, but in your poise.",
];

export const allGalleryPhotos: GalleryItem[] = Array.from({ length: 49 }, (_, i) => {
  const index = i + 1;
  const num = String(index).padStart(2, '0');
  const isNew = index >= 47;
  const ext = isNew ? 'jpg' : 'webp';

  const categories: ('favorites' | 'candid' | 'portraits' | 'places' | 'memories')[] = [
    'favorites', 'portraits', 'candid', 'places', 'memories',
    'favorites', 'candid', 'portraits', 'favorites', 'portraits',
    'candid', 'places', 'memories', 'candid', 'portraits'
  ];
  const cat = isNew ? 'favorites' : categories[(index - 1) % categories.length];

  // Distinct non-linear tilt angles for organic scrapbook moodboard (-4deg to +4deg)
  const angles = [-3.5, 2.8, -1.5, 4.2, -2.4, 1.8, -4.0, 3.2, -1.2, 2.5, -3.0, 1.4];
  const tilt = angles[i % angles.length];

  return {
    id: `photo-${num}`,
    imagePath: `/assets/gallery/photo-${num}.${ext}`,
    title: isNew
      ? `Fresh Moment 0${index - 46} 🎀`
      : `Captured Grace 0${index}`,
    caption: isNew
      ? `[Newly Added Photo 0${index - 46}] A fresh, radiant snapshot overflowing with warmth.`
      : `[Memory ${index}] A tender frame capturing her natural smile and gentle presence.`,
    category: isNew ? 'new' : cat,
    date: isNew ? 'Recently Added ✨' : `Special Frame #${index}`,
    focalPosition: index % 3 === 0 ? 'center top' : 'center',
    isNewAddition: isNew,
    tiltAngle: tilt,
    tapeColor: tapeColors[i % tapeColors.length],
    pookieSticker: pookieStickers[i % pookieStickers.length],
    note: isNew
      ? "Brand new addition to the scrapbook! Pure cuteness 🧸🎀"
      : "One of those snapshots where the heart speaks louder than words.",
    poetrySnippet: photoPoetry[i % photoPoetry.length],
  };
});

/* ==========================================================================
   ALL 56 POETRY VIDEOS (POETRY REELS & SPOKEN VERSES)
   Rich poetry in Hindi/Urdu script, English translation, moods & pookie badges
   ========================================================================== */

const poetryTitles = [
  { urdu: "नफ़स नफ़स में तेरी खुशबू", en: "A Fragrance in Every Breath", mood: "soulful" as const },
  { urdu: "तेरी हंसी जैसे सावन की फुहार", en: "Laughter Like Spring Rain", mood: "whimsical" as const },
  { urdu: "चांदनी भी शरमाए तेरे नूर से", en: "Soft Light in Your Eyes", mood: "nazm" as const },
  { urdu: "सुकून का दूसरा नाम", en: "A Sanctuary of Calm", mood: "warm" as const },
  { urdu: "मासूमियत का जहां", en: "A World of Pure Innocence", mood: "whimsical" as const },
  { urdu: "कुछ लफ़्ज़ जो कह न सके", en: "Unspoken Lines of Admiration", mood: "nazm" as const },
  { urdu: "ज़िंदगी के खूबसूरत रंग", en: "Colors of Living Grace", mood: "aesthetic" as const },
  { urdu: "तेरी सादगी पर दिल निसार", en: "The Poetry of Your Simplicity", mood: "soulful" as const },
  { urdu: "ख्वाबों से भी प्यारी हकीकत", en: "Sweeter Than Any Dream", mood: "warm" as const },
  { urdu: "एक शाम तेरे नाम", en: "An Evening of Gentle Echoes", mood: "nazm" as const },
  { urdu: "रूह को छूती हुई बातें", en: "Words That Touch the Soul", mood: "soulful" as const },
  { urdu: "मुस्कुराते रहो सदा", en: "A Prayer for Your Smile", mood: "warm" as const },
  { urdu: "हवाओं में घुली तुम्हारी याद", en: "Breezes Carrying Your Grace", mood: "aesthetic" as const },
  { urdu: "दिल की मासूम धड़कन", en: "The Softest Heartbeat", mood: "whimsical" as const },
];

const poetryCouplets = [
  {
    couplet: "तेरी मुस्कुराहट में वो सुकून है, जो सदियों की तलाश के बाद मिलता है...",
    translation: "In your quiet smile lies the sanctuary the wandering heart searches for across lifetimes.",
  },
  {
    couplet: "सादगी तेरी ऐसी है जैसे ओस की बूंद गुलाब की पंखुड़ी पर...",
    translation: "Your simplicity rests as gently as morning dew upon a velvet rose petal.",
  },
  {
    couplet: "हंसी तुम्हारी जैसे अंधेरे कमरे में रोशनदान से आती पहली किरण...",
    translation: "Your laughter breaks through the heaviest gloom like the very first ray of dawn.",
  },
  {
    couplet: "कुछ लोग पास न होकर भी रूह के सबसे करीब होते हैं...",
    translation: "Some souls reside within our quietest prayers, closer than distance can ever measure.",
  },
  {
    couplet: "तू जो हंस दे तो बहारों का असर होता है, हर तरफ सिर्फ खुशबुओं का सफर होता है...",
    translation: "When you smile, spring awakens early, turning every path into fragrant reverie.",
  },
  {
    couplet: "ना कोई शिकवा, ना कोई गिला, तुझे देख कर हर गम से किनारा मिला...",
    translation: "In your peaceful presence, grievances dissolve and stormy thoughts find their shore.",
  },
  {
    couplet: "तेरी मासूमियत पे ये दिल बार-बार मुस्कुराता है, तू सच में कुदरत का नायाब तोहफा है 🧸...",
    translation: "Your tender innocence brings an effortless smile; you are truly nature's rarest gift.",
  },
  {
    couplet: "आंखों में तेरे वो गहराइयां हैं, जहां सिर्फ सच्चाई और अपनापन बसता है...",
    translation: "In the depth of your gaze resides nothing but truth, kindness, and belonging.",
  },
  {
    couplet: "वक़्त ठहर सा जाता है जब तू अपनी धुन में मगन होती है...",
    translation: "Time itself seems to pause whenever you are lost in your own gentle rhythm.",
  },
  {
    couplet: "दुआ है यही रब से कि तेरी आंखों में कभी आंसू न आए, सिर्फ खुशियों के फूल खिलें 🌸...",
    translation: "My only quiet prayer: may your eyes know only the blossoms of happiness, never sorrow.",
  },
  {
    couplet: "तू जहां रहे, वहां रौशनी रहे, तेरी हर राह में खुशियों की चांदनी रहे...",
    translation: "Wherever your steps wander, may gentle moonlight and joy illuminate the road.",
  },
  {
    couplet: "नज़ाकत, नफ़ासत और रूहानियत — इन तीनों का संगम हो तुम...",
    translation: "Grace, elegance, and deep soulful warmth — all harmonized within your spirit.",
  },
];

export const allPoetryVideos: PoetryVideoItem[] = Array.from({ length: 56 }, (_, i) => {
  const index = i + 1;
  const num = String(index).padStart(2, '0');
  const titleObj = poetryTitles[i % poetryTitles.length];
  const poetryObj = poetryCouplets[i % poetryCouplets.length];
  const emoji = pookieStickers[i % pookieStickers.length];

  return {
    id: `video-${num}`,
    videoPath: `/assets/videos/video-${num}.mp4`,
    thumbnailPath: `/assets/videos/thumbnails/video-${num}.jpg`,
    title: `${titleObj.urdu} • ${titleObj.en}`,
    couplet: poetryObj.couplet,
    translation: poetryObj.translation,
    mood: titleObj.mood,
    durationTag: 'Poetry Reel',
    pookieEmoji: emoji,
  };
});
