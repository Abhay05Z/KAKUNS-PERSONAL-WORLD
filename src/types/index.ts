export interface SiteConfig {
  recipientName: string; // Configurable placeholder e.g. "Kakun" or "[Her Name]"
  recipientNickname?: string;
  welcomeHeading: string;
  welcomeSubheading: string;
  heroNote: string;
  themeCards: ThemeCardConfig[];
}

export interface ThemeCardConfig {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  path: string;
  accentColor: string;
  badge: string;
  iconName: string;
  previewImage?: string;
  pookieEmoji?: string;
}

export type GalleryCategory =
  | 'all'
  | 'favorites'
  | 'candid'
  | 'portraits'
  | 'places'
  | 'memories'
  | 'newest';

export interface GalleryItem {
  id: string;
  imagePath: string;
  title: string;
  caption: string;
  category: GalleryCategory;
  date?: string;
  focalPosition?: string;
  note?: string;
  rotation?: string; // e.g. '-2deg', '1.5deg' for scrapbook feel
  washiColor?: string; // washi tape tint
  pookieEmoji?: string; // e.g. 🧸, 🎀, 🥺, 🌸, 🍓
}

export interface VideoItem {
  id: string;
  videoPath: string;
  title: string;
  poetrySnippet?: string;
  category: 'poetry' | 'moments' | 'candid' | 'vibes' | 'aesthetic';
  pookieEmoji: string;
  duration?: string;
}

export interface PoetryEnvelopeItem {
  id: string;
  title: string;
  verses: string[];
  imagePath?: string;
  videoPath?: string;
  pookieEmoji: string;
  envelopeColor: string;
  waxSealColor: string;
  dedication?: string;
}

export interface PersonalityEntry {
  id: string;
  heading: string;
  body: string;
  sourceType: 'her-words' | 'observation' | 'strength' | 'dream' | 'quirk';
  categoryTitle?: string;
  quote?: string;
  tags?: string[];
  pookieEmoji?: string;
}

export interface PerspectiveEntry {
  id: string;
  heading: string;
  body: string;
  highlightPhrase?: string;
  category: 'appreciation' | 'noticed' | 'respect' | 'unique' | 'letter';
  pookieEmoji?: string;
}

export interface ReminderItem {
  id: string;
  title: string;
  message: string;
  category: 'difficult-day' | 'worth' | 'daily' | 'rest' | 'control';
  tag: string;
  isDailyFeatured?: boolean;
  pookieEmoji?: string;
}

export interface RitualItem {
  id: string;
  title: string;
  description: string;
  frequency: string;
  category: string;
  iconName: string;
  pookieEmoji?: string;
}

export interface MemoryItem {
  id: string;
  title: string;
  date?: string;
  location?: string;
  description: string;
  imagePath?: string;
  personalNote?: string;
  pookieEmoji?: string;
}

export interface LetterConfig {
  date: string;
  salutation: string;
  paragraphs: string[];
  closing: string;
  signature: string;
  postscript?: string;
}

export interface SurpriseItem {
  id: string;
  title: string;
  previewText: string;
  revealedContent: string;
  interactionType: 'envelope' | 'jar' | 'scratch' | 'gentle-card';
  icon?: string;
}

export interface JarQuote {
  id: string;
  text: string;
  category: string;
  pookieEmoji?: string;
}
