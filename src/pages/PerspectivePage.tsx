import React from 'react';
import {
  HeartHandshake,
  Heart,
  Feather,
  Sparkles,
  Quote,
  CheckCircle2
} from 'lucide-react';
import { perspectiveEntries, siteConfig } from '../data/siteConfig';
import { PookiePhotoEnvelope } from '../components/common/PookiePhotoEnvelope';

export const PerspectivePage: React.FC = () => {
  const photoList = [
    { src: '/assets/gallery/photo-01.webp', sticker: '🧸', rot: '-rotate-2', washi: 'rgba(254, 215, 223, 0.85)', tag: 'Kakun\'s smile 🧸' },
    { src: '/assets/gallery/photo-06.webp', sticker: '🎀', rot: 'rotate-2', washi: 'rgba(230, 220, 245, 0.85)', tag: 'Grace in every moment 🎀' },
    { src: '/assets/gallery/photo-10.webp', sticker: '✨', rot: '-rotate-1', washi: 'rgba(254, 237, 222, 0.85)', tag: 'Golden glow ✨' },
    { src: '/assets/gallery/photo-15.webp', sticker: '🪷', rot: 'rotate-1.5', washi: 'rgba(208, 232, 215, 0.85)', tag: 'Gentle soul 🪷' },
    { src: '/assets/gallery/photo-20.webp', sticker: '🌸', rot: '-rotate-2', washi: 'rgba(254, 215, 223, 0.85)', tag: 'Sweet warmth 🌸' },
    { src: '/assets/gallery/photo-25.webp', sticker: '🥺', rot: 'rotate-1', washi: 'rgba(230, 220, 245, 0.85)', tag: 'Treasured presence 🥺' },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="text-center pt-2 sm:pt-4 pb-8 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6DCF3] text-[#7B619E] text-xs font-semibold tracking-wide mb-3 border border-[#D2C1EA] shadow-2xs">
          <span>🧸</span>
          <span>Theme 03 • The Way I See Her</span>
          <span>🎀</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2C2727] mb-3">
          Sincere Words & Observations
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#645450] leading-relaxed">
          The qualities you might overlook in yourself, honest appreciation, and thoughts written with genuine respect, paired with your sweetest frames 🧸💖
        </p>

        <p className="font-handwriting text-xl sm:text-2xl text-[#7B619E] mt-2">
          "Sometimes we need someone else's mirror to see our own light clearly."
        </p>
      </section>

      {/* Featured Photo Envelope */}
      <section className="max-w-4xl mx-auto mb-10">
        <PookiePhotoEnvelope
          title="An Envelope of Sincere Words for Kakun 🧸✉️"
          subtitle="Click to unseal and read a dedicated reflection with your picture"
          sealEmoji="🧸"
          envelopeColor="#FFF5F7"
          sealColor="#8C565F"
          photoSrc="/assets/gallery/photo-01.webp"
          photoCaption="That genuine, effortless smile 🧸💖"
          highlightText="You bring more calm and beauty into the world than you realize."
          paragraph="When I look at you, I don't see someone who needs to prove anything. I see someone with a generous heart, steady resilience, and an effortless ability to make any space feel brighter. Never doubt how rare and valued you truly are."
          pookieBadge="Dedicated Envelope • The Way I See You 🎀"
        />
      </section>

      {/* Editorial Perspective Sections Paired with Her Cute Framed Photos */}
      <section className="space-y-8 sm:space-y-10 max-w-5xl mx-auto">
        {perspectiveEntries.map((item, idx) => {
          const photoInfo = photoList[idx % photoList.length];
          const isEven = idx % 2 === 0;

          return (
            <div
              key={item.id}
              className="rounded-3xl p-6 sm:p-8 bg-white/95 border border-[#E8DFD3] shadow-soft hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
            >
              {/* Index watermark badge */}
              <div className="absolute top-4 right-6 text-4xl sm:text-5xl font-serif text-[#E6DCF3]/60 font-bold select-none pointer-events-none">
                0{idx + 1}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                {/* Photo Frame (Alternates left/right on desktop) */}
                <div className={`w-44 sm:w-52 shrink-0 ${isEven ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
                  <div className={`polaroid-frame p-2.5 pb-3 bg-white rounded-xl shadow-md ${photoInfo.rot} hover:rotate-0 transition-transform relative group`}>
                    {/* Washi Tape */}
                    <div
                      className="washi-tape"
                      style={{ backgroundColor: photoInfo.washi }}
                    />
                    {/* Sticker */}
                    <span className="absolute -top-2.5 -right-2.5 text-xl filter drop-shadow-sm group-hover:scale-125 transition-transform">
                      {photoInfo.sticker}
                    </span>
                    {/* Image */}
                    <div className="aspect-square w-full rounded-lg overflow-hidden bg-[#FAF0E6] mb-1.5 border border-[#F2ECE4]">
                      <img
                        src={photoInfo.src}
                        alt={item.heading}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/gallery/photo-01.webp';
                        }}
                      />
                    </div>
                    <p className="font-handwriting text-center text-xs font-semibold text-[#8C565F]">
                      {photoInfo.tag}
                    </p>
                  </div>
                </div>

                {/* Paragraph Content */}
                <div className={`flex-1 relative z-10 ${isEven ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#7B619E] bg-[#F3EEF9] px-2.5 py-1 rounded-full inline-block mb-2">
                    {item.category === 'appreciation'
                      ? 'Appreciation 💖'
                      : item.category === 'noticed'
                      ? 'Things I Notice 🥺'
                      : item.category === 'respect'
                      ? 'Deep Respect 🌸'
                      : item.category === 'unique'
                      ? 'What Stands Out ✨'
                      : 'A Personal Note 🧸'}
                  </span>

                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2727] mb-2">
                    {item.heading}
                  </h2>

                  {/* Callout Highlight Phrase */}
                  {item.highlightPhrase && (
                    <div className="mb-3 pl-3 border-l-3 border-[#7B619E] py-0.5">
                      <p className="font-serif italic text-base text-[#5A4577]">
                        "{item.highlightPhrase}"
                      </p>
                    </div>
                  )}

                  {/* Sincere Content Body */}
                  <p className="font-sans text-sm sm:text-base text-[#4D3F3B] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Gentle Closing Note */}
      <section className="mt-14 max-w-2xl mx-auto text-center p-8 bg-gradient-to-br from-[#FAF8FC] to-[#F3EEF9] rounded-3xl border border-[#E6DCF3]">
        <Feather className="w-5 h-5 text-[#7B619E] mx-auto mb-2" />
        <h3 className="font-serif text-xl font-medium text-[#2C2727] mb-2">
          An Enduring Anchor
        </h3>
        <p className="text-xs sm:text-sm text-[#645450] leading-relaxed max-w-lg mx-auto mb-4">
          Whenever you feel doubt creeping in, return to these words. They aren't compliments meant to flatter — they are steady truths about who you are.
        </p>
        <div className="font-handwriting text-2xl text-[#7B619E]">
          Always rooting for you, {siteConfig.recipientName} 🧸💖
        </div>
      </section>
    </div>
  );
};
