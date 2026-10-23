# A Personalized Interactive Digital World 🌸
> Dedicated to Kakun — A quiet, beautiful corner of the web designed for reflection, memories, and personal exploration.

---

## 📖 Overview

This project is an intimate, scrapbook-inspired digital experience structured around **five distinct, independently accessible themes**. It is intentionally art-directed to feel like a warm personal journal rather than a generic portfolio or conventional blog.

### 🌟 The Five Themes
1. **Her Gallery (`/#/gallery`)**: Curated photo grids, polaroid-style frames, category filtering (Favorites, Candid, Portraits, Places, Memories), responsive image lightbox with keyboard controls (Arrow keys, Escape) and custom captions.
2. **Her Mind & Personality (`/#/mindset`)**: Editorial cards showcasing her nature, values, quiet strengths, dreams, and signature traits. Thoughtfully distinguishes her direct words from observations.
3. **The Way I See Her (`/#/perspective`)**: Warm, sincere reflections, subtle qualities she might overlook in herself, things to respect, and words put into writing.
4. **Things She Should Remember (`/#/reminders`)**: Grounding advice for difficult days, permission to rest, small steps, what is within control, interactive random reminder reveal, and local "Save to Favorites" support.
5. **Her Personal Space (`/#/personal-space`)**:
   - **Personal Rituals**: Gentle routines (morning quiet, deep breaths, music) with zero-guilt completion toggles.
   - **Timeline Memories**: Scrapbook-style milestones with date, location, photo, and notes.
   - **Personal Letter**: Paper-textured personal letter with comfortable reading width and wax-seal aesthetic.
   - **Interactive Surprises**: Clickable wax-sealed envelope, digital Jar of Kind Words (12 uplifting slips to draw), hidden message reveal card, and soft confetti celebration.
   - **Private Notes**: Private scratchpad stored strictly on the local device.

---

## 🎨 Visual Identity & Design System

- **Palette**: Warm Ivory (`#FAF7F2`, `#FAF6EE`), Soft Blush Pink (`#FED7DF`, `#FFEBEF`), Dusty Rose (`#B47B82`), Deep Berry (`#8C565F`), Muted Lavender (`#E6DCF3`), Warm Peach (`#FEEDDE`), and Warm Brown/Charcoal (`#2C2727`).
- **Typography**:
  - Headings: *Playfair Display* (Editorial Serif)
  - Body: *Plus Jakarta Sans* (Clean, readable modern sans)
  - Accents/Scribbles: *Caveat* (Warm, handwritten cursive)
- **Scrapbook Motifs**: Washi tape, polaroid photo frames with subtle rotation, delicate paper shadows, tactile parchment texture.
- **Accessibility & Motion**: Includes a prominent **Reduced-Motion Toggle** in the navigation bar that persists in `localStorage`.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom color palette and typography tokens
- **Routing**: React Router (`HashRouter` for zero-configuration static hosting and deep links)
- **Icons**: Lucide Icons
- **Interactions**: Canvas Confetti, localStorage persistence

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 2. Development Mode
Start the local development server with hot reload:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
Create an optimized production bundle:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```
Visit [http://localhost:4173](http://localhost:4173) to test the exact production output.

---

## ✏️ How to Personalize & Replace Content

All personal content is centralized in **`src/data/siteConfig.ts`** so you never have to edit component code to customize texts or memories!

### 1. Updating Her Name & Welcome Copy
Open `src/data/siteConfig.ts`:
```typescript
export const siteConfig: SiteConfig = {
  recipientName: "Kakun", // Change her name here
  welcomeHeading: "A little space, just for you.",
  welcomeSubheading: "A quiet, gentle corner of the web...",
  ...
};
```

### 2. Adding or Replacing Photographs
- Place image files (`.webp`, `.jpg`, or `.png`) inside `public/assets/gallery/`.
- Open `src/data/siteConfig.ts` and update the `galleryItems` array:
```typescript
{
  id: "gal-1",
  imagePath: "/assets/gallery/photo-01.webp",
  title: "Soft Morning Glow",
  caption: "Your caption here...",
  category: "favorites", // "favorites" | "candid" | "portraits" | "places" | "memories"
  date: "A quiet Sunday",
  focalPosition: "center", // CSS object-position e.g. "top", "50% 30%"
  note: "Your personal note here...",
}
```

### 3. Editing the Personal Letter
In `src/data/siteConfig.ts`, look for `personalLetter`:
```typescript
export const personalLetter: LetterConfig = {
  date: "For You, Whenever You Read This",
  salutation: "Dear Kakun,",
  paragraphs: [
    "Paragraph 1...",
    "Paragraph 2...",
  ],
  closing: "With sincere warmth,",
  signature: "[Your Name]",
};
```

### 4. Customizing Memories, Reminders, and Kind Words Jar
All memories, rituals, and the 12 quotes in `jarQuotes` can be updated directly inside `src/data/siteConfig.ts`.

---

## 🔒 Privacy & Security

- **100% Client-Side**: No backend database, cookies, analytics tracking, or external API calls.
- **Local Storage Only**: Favorites, ritual checkboxes, and personal scratchpad notes are saved only inside her browser's `localStorage` on that specific device.
- **Confidentiality Notice**: For maximum privacy, deploy behind a basic password or private link (such as Vercel Password Protection or Cloudflare Access) if the site contains personal photographs.

---

## 🌐 Free Static Deployment

You can deploy the generated `dist/` folder for free on:
- **Vercel**: Run `vercel` or link your Git repository.
- **Netlify**: Drag and drop the `dist/` folder onto Netlify Drop.
- **GitHub Pages**: Push the repository and configure GitHub Actions for static pages.
- **Cloudflare Pages**: Connect your repository and set build command to `npm run build` with output directory `dist`.
