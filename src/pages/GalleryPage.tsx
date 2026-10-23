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
  Image as ImageIcon
} from 'lucide-react';
import { galleryItems } from '../data/siteConfig';
import { GalleryItem, GalleryCategory } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: 'All Photos' },
    { key: 'favorites', label: 'Favorites' },
    { key: 'candid', label: 'Candid Moments' },
    { key: 'portraits', label: 'Portraits' },
    { key: 'places', label: 'Favorite Places' },
    { key: 'memories', label: 'Special Memories' },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const activePhoto: GalleryItem | null =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  // Lightbox navigation
  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === null || prev === 0 ? filteredItems.length - 1 : prev - 1));
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === null || prev === filteredItems.length - 1 ? 0 : prev + 1));
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
      {/* Editorial Header Section */}
      <section className="text-center pt-2 sm:pt-4 pb-8 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EBD9] text-[#8C565F] text-xs font-medium tracking-wide mb-3 border border-[#EADBC1]">
          <Camera className="w-3.5 h-3.5" />
          <span>Theme 01 • Her Gallery</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2C2727] mb-3">
          A Visual Diary
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#645450] leading-relaxed">
          Moments frozen in soft light. A visual anthology of genuine smiles, candid glimpses, and quiet memories.
        </p>

        <p className="font-handwriting text-xl sm:text-2xl text-[#8C565F] mt-2">
          "Every picture holds a quiet little story."
        </p>
      </section>

      {/* Category Filter Tabs */}
      <section className="mb-8" aria-label="Filter by photo category">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
          <div className="hidden sm:flex items-center gap-1 text-xs text-[#8C7A75] mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </div>
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
        </div>
      </section>

      {/* Photo Grid with Polaroid and Editorial frames */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-20 bg-white/60 rounded-2xl border border-dashed border-[#DFCBA8] max-w-md mx-auto p-6">
          <ImageIcon className="w-10 h-10 text-[#DFCBA8] mx-auto mb-3" />
          <h3 className="font-serif text-lg font-medium text-[#2C2727] mb-1">
            No photographs in this collection yet
          </h3>
          <p className="text-xs text-[#8C7A75]">
            When new photographs are added for this category, they will appear here.
          </p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="mt-4 px-4 py-1.5 bg-[#8C565F] text-white text-xs rounded-full"
          >
            Show All Photos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              className="polaroid-frame rounded-md p-3 sm:p-4 cursor-pointer group flex flex-col justify-between"
              tabIndex={0}
              role="button"
              aria-label={`Open photo: ${photo.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
            >
              {/* Photo Canvas */}
              <div className="relative aspect-4/5 sm:aspect-square w-full overflow-hidden bg-[#FAF6EE] rounded-sm mb-3">
                <img
                  src={photo.imagePath}
                  alt={photo.title}
                  loading="lazy"
                  style={{ objectPosition: photo.focalPosition || 'center' }}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to elegant graphic placeholder if missing
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const placeholder = document.createElement('div');
                      placeholder.className = "w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#FAF0E6]";
                      placeholder.innerHTML = `<span class="text-3xl mb-1">🌸</span><p class="text-xs font-serif text-[#8C565F]">${photo.title}</p>`;
                      parent.appendChild(placeholder);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2 rounded-full bg-white/90 text-[#2C2727] shadow-sm transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Polaroid Caption & Handwritten note */}
              <div className="pt-1 px-1">
                <div className="flex items-center justify-between text-[11px] text-[#A08883] mb-1">
                  <span className="uppercase tracking-wider font-medium text-[#8C565F]">
                    {photo.category}
                  </span>
                  {photo.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {photo.date}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-base sm:text-lg font-medium text-[#2C2727] leading-snug">
                  {photo.title}
                </h3>

                <p className="font-handwriting text-base sm:text-lg text-[#645450] line-clamp-1 mt-0.5">
                  {photo.note || photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {activePhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
        >
          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Prev Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right/Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-3 md:right-[380px] top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Canvas */}
            <div className="flex-1 bg-black/95 flex items-center justify-center min-h-[300px] sm:min-h-[450px] relative overflow-hidden">
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
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FED7DF]">
                    {activePhoto.category}
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

                <div className="text-sm text-[#4D3F3B] leading-relaxed mb-4 p-3 bg-white/70 rounded-xl border border-[#EADBC1]">
                  <p className="font-sans">{activePhoto.caption}</p>
                </div>

                {activePhoto.note && (
                  <div className="pt-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#8C7A75] font-semibold block mb-1">
                      A Little Note:
                    </span>
                    <p className="font-handwriting text-xl text-[#8C565F] leading-snug">
                      "{activePhoto.note}"
                    </p>
                  </div>
                )}
              </div>

              {/* Lightbox Footer Navigation helper */}
              <div className="pt-6 border-t border-[#E8DFD3] flex items-center justify-between text-xs text-[#A08883]">
                <span>Use ← and → arrow keys</span>
                <button
                  onClick={handleClose}
                  className="text-[#8C565F] hover:underline font-medium"
                >
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
