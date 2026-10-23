import React, { useState, useEffect, useCallback } from 'react';
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Sparkles,
  Heart,
  Maximize2,
  Filter,
  Shuffle,
  Grid,
  Layers,
  Film,
  Smile,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { allGalleryPhotos } from '../data/mediaData';
import { siteConfig } from '../data/siteConfig';
import { GalleryItem, GalleryCategory } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [photos, setPhotos] = useState<GalleryItem[]>(allGalleryPhotos);
  const [viewMode, setViewMode] = useState<'scrapbook' | 'grid' | 'filmstrip'>('scrapbook');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: `All Photos (${allGalleryPhotos.length}) 📸` },
    { key: 'new', label: '✨ Fresh New Additions (3) 🎀' },
    { key: 'favorites', label: 'Favorites 💖' },
    { key: 'candid', label: 'Candid Moments 🧸' },
    { key: 'portraits', label: 'Portraits 🌸' },
    { key: 'places', label: 'Favorite Places 🌿' },
    { key: 'memories', label: 'Special Memories 🍯' },
  ];

  // Shuffle photos to break any linear sequence
  const shufflePhotos = () => {
    const shuffled = [...photos].sort(() => Math.random() - 0.5);
    setPhotos(shuffled);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FED7DF', '#F4EBD9', '#B47B82', '#E6DCF3'],
      disableForReducedMotion: true,
    });
  };

  const filteredItems = photos.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'new') return item.isNewAddition;
    return item.category === selectedCategory;
  });

  const activePhoto: GalleryItem | null =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  // Lightbox navigation
  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null || prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null || prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  }, [lightboxIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="text-center pt-2 sm:pt-4 pb-8 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EBD9] text-[#8C565F] text-xs font-medium tracking-wide mb-3 border border-[#EADBC1] shadow-2xs">
          <Camera className="w-3.5 h-3.5" />
          <span>The 49 Moments Scrapbook • Kakun 🧸🎀</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#2C2727] mb-3">
          Tilted Polaroids & Captured Grace 🌸
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#645450] leading-relaxed max-w-xl mx-auto">
          All 49 photographs scattered artfully with washi tape, teddy stickers, and poetic verses.
          Explore in different manners — as a moodboard, cinematic filmstrip, or classic grid.
        </p>

        {/* Poetic couplet banner */}
        <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[#FFF5F5] via-[#FFF8F4] to-[#FAF8FC] border border-[#FED7DF] max-w-lg mx-auto text-xs sm:text-sm text-[#8C565F] font-serif italic">
          "हर तस्वीर में तेरी इक नई अदा है, <br />
          तू मुस्कुरा दे तो सारा जहां फिदा है... ✨🧸"
        </div>

        {/* Controls: Manner/View Switcher & Shuffle */}
        <div className="mt-6 flex items-center justify-center gap-2.5 flex-wrap">
          <button
            onClick={shufflePhotos}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8C565F] hover:bg-[#72434B] text-white text-xs sm:text-sm font-medium transition-all shadow-sm hover:scale-103"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Shuffle Photos (Non-Sequence) 🔀</span>
          </button>

          <div className="inline-flex items-center bg-white p-1 rounded-full border border-[#E8DFD3] shadow-2xs">
            <button
              onClick={() => setViewMode('scrapbook')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors ${
                viewMode === 'scrapbook' ? 'bg-[#FED7DF] text-[#8C565F]' : 'text-[#645450]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Scrapbook Moodboard 🧸</span>
            </button>

            <button
              onClick={() => setViewMode('filmstrip')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors ${
                viewMode === 'filmstrip' ? 'bg-[#FED7DF] text-[#8C565F]' : 'text-[#645450]'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Filmstrip Reel 🎞️</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors ${
                viewMode === 'grid' ? 'bg-[#FED7DF] text-[#8C565F]' : 'text-[#645450]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Classic Grid 📸</span>
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="mb-10 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setLightboxIndex(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? 'bg-[#8C565F] text-white shadow-xs'
                  : 'bg-white/80 text-[#645450] hover:bg-[#FED7DF]/60 border border-[#E8DFD3]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </section>

      {/* =========================================================================
          VIEW MANNER 1: SCATTERED SCRAPBOOK & MOODBOARD (Tilted, Taped & Pookie)
         ========================================================================= */}
      {viewMode === 'scrapbook' && (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-9 p-2">
          {filteredItems.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              style={{
                transform: `rotate(${photo.tiltAngle || 0}deg)`,
              }}
              className="polaroid-frame rounded-md p-3 sm:p-4 cursor-pointer group flex flex-col justify-between relative bg-white transition-all duration-300 hover:z-30 hover:!rotate-0 hover:scale-105"
              tabIndex={0}
              role="button"
              aria-label={`Open photo: ${photo.title}`}
            >
              {/* Washi Tape Strip on Top */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 backdrop-blur-xs border-x-2 border-dashed border-white/60 shadow-2xs z-10 pointer-events-none"
                style={{ backgroundColor: photo.tapeColor || 'rgba(254, 215, 223, 0.7)' }}
              />

              {/* Pookie Sticker in Corner */}
              <div className="absolute -bottom-2 -right-2 text-2xl z-20 transform group-hover:scale-125 transition-transform select-none">
                {photo.pookieSticker || '🧸'}
              </div>

              {/* Fresh New Photo Badge */}
              {photo.isNewAddition && (
                <div className="absolute top-2 left-2 z-20 bg-[#D53A60] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md animate-bounce">
                  ✨ NEW 🎀
                </div>
              )}

              {/* Photo Canvas */}
              <div className="relative aspect-4/5 w-full overflow-hidden bg-[#FAF6EE] rounded-sm mb-3">
                <img
                  src={photo.imagePath}
                  alt={photo.title}
                  loading="lazy"
                  style={{ objectPosition: photo.focalPosition || 'center' }}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2 rounded-full bg-white/90 text-[#2C2727] shadow-sm">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Handwritten Note & Poetry Snippet */}
              <div className="pt-1 px-1">
                <div className="flex items-center justify-between text-[11px] text-[#A08883] mb-1">
                  <span className="uppercase tracking-wider font-semibold text-[#8C565F]">
                    {photo.isNewAddition ? 'Fresh Moment' : photo.category}
                  </span>
                  <span>{photo.date}</span>
                </div>

                <h3 className="font-serif text-base font-semibold text-[#2C2727] leading-snug truncate">
                  {photo.title}
                </h3>

                {photo.poetrySnippet && (
                  <p className="font-handwriting text-base text-[#8C565F] line-clamp-1 mt-1">
                    "{photo.poetrySnippet}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* =========================================================================
          VIEW MANNER 2: CINEMATIC FILMSTRIP REEL
         ========================================================================= */}
      {viewMode === 'filmstrip' && (
        <section className="space-y-6">
          <div className="p-4 bg-[#1F1D1D] rounded-2xl shadow-xl overflow-x-auto pb-6">
            <div className="flex items-center gap-1 text-white/50 text-xs uppercase tracking-widest mb-3 px-2">
              <Film className="w-4 h-4 text-[#FED7DF]" />
              <span>Vintage 35mm Memory Reel • Kakun's Anthology</span>
            </div>

            {/* Horizontal Film Strip Container */}
            <div className="flex items-center gap-4 min-w-max">
              {filteredItems.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(index)}
                  className="w-56 sm:w-64 bg-black p-3 rounded-lg border-y-4 border-dashed border-white/30 cursor-pointer group hover:scale-102 transition-transform"
                >
                  <div className="flex justify-between items-center text-[10px] text-white/60 mb-2 px-1">
                    <span>FRAME 0{index + 1}</span>
                    <span>{photo.pookieSticker || '🧸'}</span>
                  </div>

                  <div className="relative aspect-4/5 w-full overflow-hidden bg-stone-900 rounded-sm mb-2">
                    <img
                      src={photo.imagePath}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="text-white text-xs">
                    <h4 className="font-serif text-white/90 truncate">{photo.title}</h4>
                    <p className="text-[10px] text-[#FED7DF] font-serif italic truncate">
                      {photo.poetrySnippet || photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          VIEW MANNER 3: CLASSIC EDITORIAL GRID
         ========================================================================= */}
      {viewMode === 'grid' && (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              className="rounded-2xl p-4 bg-white border border-[#E8DFD3] shadow-soft hover:shadow-card-hover transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#FAF6EE] mb-3">
                  <img
                    src={photo.imagePath}
                    alt={photo.title}
                    loading="lazy"
                    style={{ objectPosition: photo.focalPosition || 'center' }}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform"
                  />
                  {photo.isNewAddition && (
                    <span className="absolute top-2 left-2 bg-[#D53A60] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      ✨ NEW
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-[#8C565F] font-semibold mb-1">
                  <span className="uppercase">{photo.category}</span>
                  <span>{photo.pookieSticker || '🧸'}</span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-[#2C2727] mb-1">
                  {photo.title}
                </h3>

                <p className="font-sans text-xs text-[#645450] line-clamp-2">
                  {photo.caption}
                </p>
              </div>

              {photo.poetrySnippet && (
                <div className="pt-2 mt-2 border-t border-[#F2ECE4] text-xs font-serif italic text-[#8C565F]">
                  "{photo.poetrySnippet}"
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* =========================================================================
          LIGHTBOX MODAL WITH POETRY & POOKIE HUGS
         ========================================================================= */}
      {activePhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Prev */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right/Next */}
            <button
              onClick={handleNext}
              className="absolute right-3 md:right-[380px] top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Canvas */}
            <div className="flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[460px]">
              <img
                src={activePhoto.imagePath}
                alt={activePhoto.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Photo Details Sidebar */}
            <div className="w-full md:w-80 lg:w-96 p-6 sm:p-7 flex flex-col justify-between bg-[#FAF7F2] border-t md:border-t-0 md:border-l border-[#E8DFD3] overflow-y-auto">
              <div>
                <div className="flex items-center justify-between text-xs text-[#8C565F] font-semibold uppercase tracking-wider mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FED7DF] flex items-center gap-1">
                    <span>{activePhoto.pookieSticker || '🧸'}</span>
                    <span>{activePhoto.isNewAddition ? '✨ Fresh New Image' : activePhoto.category}</span>
                  </span>
                  <span>{lightboxIndex + 1} of {filteredItems.length}</span>
                </div>

                <h2 className="font-serif text-2xl font-semibold text-[#2C2727] mb-2">
                  {activePhoto.title}
                </h2>

                {activePhoto.date && (
                  <div className="flex items-center gap-1.5 text-xs text-[#8C7A75] mb-4">
                    <Calendar className="w-3.5 h-3.5 text-[#B47B82]" />
                    <span>{activePhoto.date}</span>
                  </div>
                )}

                {/* Poetry verse callout */}
                {activePhoto.poetrySnippet && (
                  <div className="p-4 rounded-xl bg-[#FFF5F5] border border-[#FED7DF] mb-4 text-xs sm:text-sm text-[#8C565F] font-serif italic">
                    "{activePhoto.poetrySnippet}"
                  </div>
                )}

                <div className="text-sm text-[#4D3F3B] leading-relaxed mb-4 p-3 bg-white/70 rounded-xl border border-[#EADBC1]">
                  <p className="font-sans">{activePhoto.caption}</p>
                </div>

                {activePhoto.note && (
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8C7A75] font-semibold block mb-1">
                      A Tender Note:
                    </span>
                    <p className="font-handwriting text-xl text-[#8C565F] leading-snug">
                      "{activePhoto.note}"
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Navigation helper */}
              <div className="pt-6 border-t border-[#E8DFD3] flex items-center justify-between text-xs text-[#A08883]">
                <span>Use ← and → arrow keys</span>
                <button onClick={handleClose} className="text-[#8C565F] hover:underline font-medium">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
