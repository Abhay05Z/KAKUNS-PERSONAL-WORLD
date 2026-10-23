import React from 'react';

export const BackgroundPookiePhotos: React.FC = () => {
  const pookiePhotos = [
    {
      id: 'bg-p-1',
      src: '/assets/gallery/photo-01.webp',
      alt: "Kakun's smile",
      position: 'top-28 -left-4 sm:top-36 sm:left-4 xl:left-8',
      rotation: '-rotate-3 hover:rotate-0',
      washiColor: 'rgba(254, 215, 223, 0.85)',
      sticker: '🧸',
      stickerPos: '-top-3 -left-3',
      caption: 'Pookie Kakun 🧸💖',
      hideOnMobile: true,
    },
    {
      id: 'bg-p-2',
      src: '/assets/gallery/photo-06.webp',
      alt: "Kakun's portrait",
      position: 'top-32 -right-4 sm:top-40 sm:right-4 xl:right-8',
      rotation: 'rotate-3 hover:rotate-0',
      washiColor: 'rgba(208, 232, 215, 0.85)',
      sticker: '🪷',
      stickerPos: '-top-3 -right-3',
      caption: 'Lily Softness 🪷✨',
      hideOnMobile: true,
    },
    {
      id: 'bg-p-3',
      src: '/assets/gallery/photo-10.webp',
      alt: 'Kakun glowing',
      position: 'top-[650px] -left-4 sm:left-6 xl:left-10',
      rotation: 'rotate-2 hover:rotate-0',
      washiColor: 'rgba(230, 220, 245, 0.85)',
      sticker: '🎀',
      stickerPos: '-bottom-3 -left-2',
      caption: 'Sweetest Spark 🎀',
      hideOnMobile: true,
    },
    {
      id: 'bg-p-4',
      src: '/assets/gallery/photo-15.webp',
      alt: 'Kakun candid',
      position: 'top-[720px] -right-4 sm:right-6 xl:right-10',
      rotation: '-rotate-2 hover:rotate-0',
      washiColor: 'rgba(254, 237, 222, 0.85)',
      sticker: '🥺',
      stickerPos: '-bottom-3 -right-2',
      caption: 'Pure Sunshine 🌸',
      hideOnMobile: true,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none" aria-hidden="true">
      {pookiePhotos.map((photo) => (
        <div
          key={photo.id}
          className={`absolute ${photo.position} ${photo.rotation} transition-all duration-500 hover:scale-110 pointer-events-auto cursor-pointer z-10 ${
            photo.hideOnMobile ? 'hidden lg:block' : 'block'
          }`}
        >
          {/* Polaroid Frame */}
          <div className="relative p-2.5 pb-4 bg-white/95 rounded-xl shadow-2xl border border-white/80 w-36 sm:w-40 xl:w-44 backdrop-blur-xs group">
            {/* Washi Tape Strip */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 rounded-xs shadow-xs border-l border-r border-dashed border-black/20"
              style={{ backgroundColor: photo.washiColor }}
            />

            {/* Cute Corner Sticker */}
            <span
              className={`absolute ${photo.stickerPos} text-xl filter drop-shadow-md group-hover:scale-125 transition-transform`}
            >
              {photo.sticker}
            </span>

            {/* Photo Canvas */}
            <div className="aspect-square w-full rounded-lg overflow-hidden bg-[#FAF0E6] mb-2 border border-[#F2ECE4]">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback to photo-01 if this specific index is missing
                  (e.target as HTMLImageElement).src = '/assets/gallery/photo-01.webp';
                }}
              />
            </div>

            {/* Handwritten Caption */}
            <p className="font-handwriting text-center text-sm font-semibold text-[#8C565F] tracking-wide leading-tight">
              {photo.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
