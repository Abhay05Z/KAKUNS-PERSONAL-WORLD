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
}

export type GalleryCategory =
  | 'all'
  | 'favorites'
  | 'candid'
  | 'portraits'
  | 'places'
  | 'memories';

export interface GalleryItem {
  id: string;
  imagePath: string;
  title: string;
  caption: string;
  category: GalleryCategory;
  date?: string;
  focalPosition?: string; // e.g. 'center', 'top', '50% 30%'
  note?: string;
}

export interface PersonalityEntry {
  id: string;
  heading: string;
  body: string;
  sourceType: 'her-words' | 'observation' | 'strength' | 'dream' | 'quirk';
  categoryTitle?: string;
  quote?: string;
  tags?: string[];
}

export interface PerspectiveEntry {
  id: string;
  heading: string;
  body: string;
  highlightPhrase?: string;
  category: 'appreciation' | 'noticed' | 'respect' | 'unique' | 'letter';
}

export interface ReminderItem {
  id: string;
  title: string;
  message: string;
  category: 'difficult-day' | 'worth' | 'daily' | 'rest' | 'control';
  tag: string;
  isDailyFeatured?: boolean;
}

export interface RitualItem {
  id: string;
  title: string;
  description: string;
  frequency: string; // e.g. 'Every Morning', 'Whenever Needed', 'Evening Wind-down'
  category: string;
  iconName: string;
}

export interface MemoryItem {
  id: string;
  title: string;
  date?: string;
  location?: string;
  description: string;
  imagePath?: string;
  personalNote?: string;
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
}
