import React, { useState } from 'react';
import {
  Sparkles,
  Quote,
  Compass,
  Heart,
  Feather,
  BookOpen,
  Sun,
  Filter
} from 'lucide-react';
import { personalityEntries } from '../data/siteConfig';
import { PersonalityEntry } from '../types';

export const MindsetPage: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');

  const filterOptions = [
    { key: 'all', label: 'All Dimensions' },
    { key: 'observation', label: 'Observations' },
    { key: 'strength', label: 'Quiet Strengths' },
    { key: 'dream', label: 'Dreams & Ambitions' },
    { key: 'quirk', label: 'Unique Details' },
  ];

  const filteredEntries = personalityEntries.filter((item) => {
    if (filterType === 'all') return true;
    return item.sourceType === filterType;
  });

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="text-center pt-2 sm:pt-4 pb-8 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FED7DF] text-[#8C565F] text-xs font-medium tracking-wide mb-3 border border-[#FED7DF]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Theme 02 • Her Mind & Personality</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2C2727] mb-3">
          Portrait of Mind & Spirit
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#645450] leading-relaxed">
          The values she holds close, the quiet intelligence in how she navigates the world, and the gentle strength that defines her.
        </p>

        <p className="font-handwriting text-xl sm:text-2xl text-[#8C565F] mt-2">
          "A thoughtful mind with a gentle, generous heart."
        </p>
      </section>

      {/* Distinction Banner: Explains that observations are respectful reflections */}
      <section className="max-w-2xl mx-auto mb-8 bg-[#FAF6EE] border border-[#EADBC1] rounded-xl p-4 text-xs text-[#7A6B67] flex items-start gap-3 shadow-2xs">
        <BookOpen className="w-4 h-4 text-[#8C565F] shrink-0 mt-0.5" />
        <p>
          <strong className="text-[#4D3F3B]">Reading note:</strong> Entries clearly distinguish between direct expressions (<span className="text-[#8C565F] font-semibold">her own words & quotes</span>) and thoughtful observations of her qualities.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="mb-8 flex items-center justify-center gap-2 flex-wrap">
        {filterOptions.map((opt) => {
          const isActive = filterType === opt.key;
          return (
            <button
              key={opt.key}
              onClick={() => setFilterType(opt.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? 'bg-[#B47B82] text-white shadow-xs'
                  : 'bg-white/80 text-[#645450] hover:bg-[#FED7DF]/60 border border-[#E8DFD3]'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </section>

      {/* Editorial Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredEntries.map((entry) => (
          <article
            key={entry.id}
            className="rounded-2xl p-6 sm:p-7 bg-white/85 border border-[#E8DFD3] shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Delicate top washi tape decorative accent */}
            <div className="absolute top-0 left-8 right-8 h-1 bg-[#FED7DF]" />

            <div>
              {/* Category / Source Badge */}
              <div className="flex items-center justify-between mb-3 pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8C565F] bg-[#FFEBEF] px-2.5 py-1 rounded-full">
                  {entry.categoryTitle || 'Essence'}
                </span>
                <span className="text-[11px] text-[#A08883] font-medium italic">
                  {entry.sourceType === 'her-words'
                    ? 'In her own words'
                    : entry.sourceType === 'dream'
                    ? 'Aspiration'
                    : entry.sourceType === 'strength'
                    ? 'Quiet strength'
                    : 'Reflected observation'}
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-2xl font-semibold text-[#2C2727] mb-3">
                {entry.heading}
              </h2>

              {/* Body */}
              <p className="font-sans text-sm sm:text-base text-[#4D3F3B] leading-relaxed mb-4">
                {entry.body}
              </p>

              {/* Optional Quote Callout */}
              {entry.quote && (
                <div className="p-4 bg-[#FAF6EE] rounded-xl border-l-4 border-[#B47B82] mb-4 text-xs sm:text-sm text-[#4D3F3B] italic flex gap-2">
                  <Quote className="w-4 h-4 text-[#B47B82] shrink-0 mt-0.5" />
                  <span>{entry.quote}</span>
                </div>
              )}
            </div>

            {/* Tags Footer */}
            {entry.tags && entry.tags.length > 0 && (
              <div className="pt-4 border-t border-[#F0E6D8] flex flex-wrap gap-1.5 mt-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-[#FAF6EE] text-[#7A6B67] border border-[#E8DFD3]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </section>

      {/* Inspiring Bottom Note */}
      <section className="mt-14 max-w-xl mx-auto text-center p-6 bg-gradient-to-r from-[#FFF5F5] via-[#FFF8F4] to-[#FAF8FC] rounded-2xl border border-[#FED7DF]">
        <Sun className="w-5 h-5 text-[#B47B82] mx-auto mb-2" />
        <h3 className="font-serif text-lg font-medium text-[#2C2727] mb-1">
          A Mind That Keeps Growing
        </h3>
        <p className="text-xs sm:text-sm text-[#645450] leading-relaxed">
          Character is not something static. As you learn, evolve, and step into new chapters, this space expands right alongside you.
        </p>
      </section>
    </div>
  );
};
