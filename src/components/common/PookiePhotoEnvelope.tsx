import React, { useState } from 'react';
import { Mail, X, Sparkles, Heart } from 'lucide-react';

interface PookiePhotoEnvelopeProps {
  title: string;
  subtitle?: string;
  sealEmoji?: string;
  envelopeColor?: string;
  sealColor?: string;
  photoSrc: string;
  photoAlt?: string;
  photoCaption?: string;
  paragraph: string;
  highlightText?: string;
  pookieBadge?: string;
  washiColor?: string;
}

export const PookiePhotoEnvelope: React.FC<PookiePhotoEnvelopeProps> = ({
  title,
  subtitle = "Click to unseal and open",
  sealEmoji = "🧸",
  envelopeColor = "#FFF0F3",
  sealColor = "#B47B82",
  photoSrc,
  photoAlt = "Kakun",
  photoCaption = "A captured frame of sweetness 🧸💖",
  paragraph,
  highlightText,
  pookieBadge = "Special Letter & Frame 💌",
  washiColor = "rgba(254, 215, 223, 0.85)",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full my-6">
      {/* Closed Envelope Button Card */}
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="group relative p-6 sm:p-7 rounded-3xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-soft hover:shadow-card-hover flex items-center justify-between"
          style={{
            backgroundColor: envelopeColor,
            borderColor: `${sealColor}40`,
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(true);
            }
          }}
        >
          <div className="flex items-center gap-4">
            <span
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-sm border border-white/80 group-hover:scale-110 transition-transform"
              style={{ backgroundColor: `${sealColor}25` }}
            >
              {sealEmoji}
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C565F] block mb-0.5">
                {pookieBadge}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#2C2727] group-hover:text-[#8C565F] transition-colors">
                {title}
              </h3>
              <p className="text-xs text-[#7A6B67] mt-0.5">{subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8C565F] bg-white/80 px-3.5 py-1.5 rounded-full border border-black/5 shadow-2xs group-hover:bg-white">
            <span>Open Envelope ✉️</span>
            <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      ) : (
        /* Unfolded Envelope Letter & Frame Modal / Accordion */
        <div className="relative p-6 sm:p-10 rounded-3xl bg-[#FCFAF7] border border-[#E8DFD3] shadow-xl paper-texture animate-fade-in">
          {/* Close Button on Top Right */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white text-[#8C565F] hover:bg-[#FED7DF] transition-colors shadow-2xs"
            aria-label="Close envelope"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Washi Tape Accent */}
          <div
            className="washi-tape"
            style={{ backgroundColor: washiColor }}
          />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 pt-2">
            {/* Cute Framed Photo of Her Face */}
            <div className="w-48 sm:w-56 shrink-0">
              <div className="polaroid-frame p-3 bg-white rounded-xl shadow-md rotate-[-1.5deg] hover:rotate-0 transition-transform">
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-[#FAF0E6] mb-2 border border-[#F2ECE4]">
                  <img
                    src={photoSrc}
                    alt={photoAlt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/gallery/photo-01.webp';
                    }}
                  />
                </div>
                <p className="font-handwriting text-center text-sm sm:text-base font-semibold text-[#8C565F]">
                  {photoCaption}
                </p>
              </div>
            </div>

            {/* Paragraph & Dedication */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C565F] uppercase tracking-wider bg-[#FFEBEF] px-3 py-1 rounded-full mb-3">
                <span>{sealEmoji}</span>
                <span>{pookieBadge}</span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#2C2727] mb-3">
                {title}
              </h3>

              {highlightText && (
                <div className="mb-4 pl-3 md:border-l-3 border-[#8C565F] py-0.5">
                  <p className="font-serif italic text-base text-[#645450]">
                    "{highlightText}"
                  </p>
                </div>
              )}

              <p className="font-sans text-sm sm:text-base text-[#4D3F3B] leading-relaxed mb-6">
                {paragraph}
              </p>

              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-full bg-[#8C565F] hover:bg-[#72434B] text-white text-xs font-medium transition-colors shadow-2xs inline-flex items-center gap-1.5"
              >
                <span>Fold & Close Envelope 💌</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
