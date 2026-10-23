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

export const PerspectivePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="text-center pt-2 sm:pt-4 pb-8 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6DCF3] text-[#7B619E] text-xs font-medium tracking-wide mb-3 border border-[#D2C1EA]">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Theme 03 • The Way I See Her</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2C2727] mb-3">
          Sincere Words & Observations
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#645450] leading-relaxed">
          The qualities you might overlook in yourself, honest appreciation, and thoughts written with genuine respect and warmth.
        </p>

        <p className="font-handwriting text-xl sm:text-2xl text-[#7B619E] mt-2">
          "Sometimes we need someone else's mirror to see our own light clearly."
        </p>
      </section>

      {/* Editorial Perspective Sections */}
      <section className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
        {perspectiveEntries.map((item, idx) => (
          <div
            key={item.id}
            className="rounded-2xl p-6 sm:p-8 bg-white/90 border border-[#E8DFD3] shadow-soft hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
          >
            {/* Index water-mark badge */}
            <div className="absolute top-4 right-6 text-4xl sm:text-5xl font-serif text-[#E6DCF3]/60 font-bold select-none pointer-events-none">
              0{idx + 1}
            </div>

            <div className="relative z-10">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#7B619E] bg-[#F3EEF9] px-2.5 py-1 rounded-full inline-block mb-3">
                {item.category === 'appreciation'
                  ? 'Appreciation'
                  : item.category === 'noticed'
                  ? 'Things I Notice'
                  : item.category === 'respect'
                  ? 'Deep Respect'
                  : item.category === 'unique'
                  ? 'What Stands Out'
                  : 'A Personal Note'}
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2727] mb-3">
                {item.heading}
              </h2>

              {/* Callout Highlight Phrase */}
              {item.highlightPhrase && (
                <div className="mb-4 pl-4 border-l-3 border-[#7B619E] py-1">
                  <p className="font-serif italic text-base sm:text-lg text-[#5A4577]">
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
        ))}
      </section>

      {/* Gentle Closing Note */}
      <section className="mt-14 max-w-2xl mx-auto text-center p-8 bg-gradient-to-br from-[#FAF8FC] to-[#F3EEF9] rounded-2xl border border-[#E6DCF3]">
        <Feather className="w-5 h-5 text-[#7B619E] mx-auto mb-2" />
        <h3 className="font-serif text-xl font-medium text-[#2C2727] mb-2">
          An Enduring Anchor
        </h3>
        <p className="text-xs sm:text-sm text-[#645450] leading-relaxed max-w-lg mx-auto mb-4">
          Whenever you feel doubt creeping in, return to these words. They aren't compliments meant to flatter — they are steady truths about who you are.
        </p>
        <div className="font-handwriting text-2xl text-[#7B619E]">
          Always rooting for you, {siteConfig.recipientName}
        </div>
      </section>
    </div>
  );
};
