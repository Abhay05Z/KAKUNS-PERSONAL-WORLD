import React from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  Sparkles,
  HeartHandshake,
  BookHeart,
  Feather,
  ArrowRight,
  Heart,
  Compass
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Home: React.FC = () => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Camera,
    Sparkles,
    HeartHandshake,
    BookHeart,
    Feather,
  };

  // Visual card configurations with distinctive identities
  const cardThemes = [
    {
      gradient: "from-[#FFF6E9] to-[#FDF4EE]",
      border: "border-[#EADBC1]",
      tagBg: "bg-[#F4EBD9]",
      tagText: "text-[#8C565F]",
      buttonBg: "bg-[#8C565F] hover:bg-[#72434B]",
      accentRing: "hover:ring-[#D2B88D]/40",
      illustrationSymbol: "📸",
      actionText: "Explore Gallery",
    },
    {
      gradient: "from-[#FFF0F3] to-[#FFEBEF]",
      border: "border-[#FED7DF]",
      tagBg: "bg-[#FED7DF]",
      tagText: "text-[#B47B82]",
      buttonBg: "bg-[#B47B82] hover:bg-[#9E676E]",
      accentRing: "hover:ring-[#FED7DF]/60",
      illustrationSymbol: "✨",
      actionText: "Her Mind & Heart",
    },
    {
      gradient: "from-[#F8F5FC] to-[#F3EEF9]",
      border: "border-[#E6DCF3]",
      tagBg: "bg-[#E6DCF3]",
      tagText: "text-[#7B619E]",
      buttonBg: "bg-[#7B619E] hover:bg-[#684E8B]",
      accentRing: "hover:ring-[#E6DCF3]/60",
      illustrationSymbol: "🕊️",
      actionText: "How I See Her",
    },
    {
      gradient: "from-[#FFF7F0] to-[#FEEDDE]",
      border: "border-[#FCD8BD]",
      tagBg: "bg-[#FEEDDE]",
      tagText: "text-[#B5673E]",
      buttonBg: "bg-[#B5673E] hover:bg-[#9C542D]",
      accentRing: "hover:ring-[#FCD8BD]/60",
      illustrationSymbol: "🌿",
      actionText: "Gentle Reminders",
    },
    {
      gradient: "from-[#FAF6EE] to-[#F5ECE1]",
      border: "border-[#DFCBA8]",
      tagBg: "bg-[#EADBC1]",
      tagText: "text-[#645450]",
      buttonBg: "bg-[#645450] hover:bg-[#4D3F3B]",
      accentRing: "hover:ring-[#DFCBA8]/60",
      illustrationSymbol: "💌",
      actionText: "Her Personal Space",
    },
  ];

  return (
    <div className="w-full">
      {/* Welcome Heading Section */}
      <section className="text-center pt-2 sm:pt-6 pb-8 sm:pb-12 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEBEF] text-[#8C565F] text-xs font-medium tracking-wide mb-3 border border-[#FED7DF]">
          <Heart className="w-3 h-3 fill-[#FED7DF]" />
          <span>A dedicated space for {siteConfig.recipientName}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#2C2727] mb-3 leading-tight">
          {siteConfig.welcomeHeading}
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#645450] leading-relaxed max-w-xl mx-auto">
          {siteConfig.welcomeSubheading}
        </p>

        <p className="font-handwriting text-xl sm:text-2xl text-[#8C565F] mt-2">
          {siteConfig.heroNote}
        </p>
      </section>

      {/* Five-Theme Cards Grid */}
      <section aria-label="Five Theme Gateways" className="w-full">
        {/* On desktop: A balanced 3-on-top + 2-on-bottom layout that feels intentional and editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {siteConfig.themeCards.slice(0, 3).map((card, idx) => {
            const Icon = iconMap[card.iconName] || Sparkles;
            const themeStyle = cardThemes[idx];

            return (
              <div
                key={card.id}
                className={`group relative rounded-2xl p-6 sm:p-7 bg-gradient-to-br ${themeStyle.gradient} border ${themeStyle.border} shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
              >
                {/* Card Top: Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${themeStyle.tagBg} ${themeStyle.tagText}`}>
                      {card.badge}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-lg shadow-2xs group-hover:scale-110 transition-transform">
                      {themeStyle.illustrationSymbol}
                    </span>
                  </div>

                  {/* Thumbnail / Visual preview */}
                  {card.previewImage && (
                    <div className="w-full h-36 rounded-xl overflow-hidden mb-4 bg-white/60 border border-white/80 shadow-2xs relative">
                      <img
                        src={card.previewImage}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback to elegant pattern if image file not loaded
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Subtitle & Title */}
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#8C7A75] block mb-1">
                    {card.subtitle}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#2C2727] mb-2 group-hover:text-[#8C565F] transition-colors">
                    {card.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#4D3F3B] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Bottom interactive action button */}
                <Link
                  to={card.path}
                  className={`w-full py-2.5 px-4 rounded-xl text-white text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-sm ${themeStyle.buttonBg} transition-all`}
                >
                  <span>{themeStyle.actionText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom 2 cards: slightly wider and expansive editorial presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-5 sm:mt-6">
          {siteConfig.themeCards.slice(3, 5).map((card, idx) => {
            const actualIdx = idx + 3;
            const Icon = iconMap[card.iconName] || Sparkles;
            const themeStyle = cardThemes[actualIdx];

            return (
              <div
                key={card.id}
                className={`group relative rounded-2xl p-6 sm:p-7 bg-gradient-to-br ${themeStyle.gradient} border ${themeStyle.border} shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${themeStyle.tagBg} ${themeStyle.tagText}`}>
                      {card.badge}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-lg shadow-2xs group-hover:scale-110 transition-transform">
                      {themeStyle.illustrationSymbol}
                    </span>
                  </div>

                  {card.previewImage && (
                    <div className="w-full h-36 rounded-xl overflow-hidden mb-4 bg-white/60 border border-white/80 shadow-2xs relative">
                      <img
                        src={card.previewImage}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                  <span className="text-xs uppercase tracking-wider font-semibold text-[#8C7A75] block mb-1">
                    {card.subtitle}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#2C2727] mb-2 group-hover:text-[#8C565F] transition-colors">
                    {card.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#4D3F3B] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <Link
                  to={card.path}
                  className={`w-full py-2.5 px-4 rounded-xl text-white text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-sm ${themeStyle.buttonBg} transition-all`}
                >
                  <span>{themeStyle.actionText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Small comforting quote at the bottom of the home screen */}
      <section className="mt-14 text-center">
        <div className="inline-flex items-center gap-2 text-xs text-[#8C7A75] bg-white/60 px-4 py-2 rounded-full border border-[#E8DFD3]">
          <Compass className="w-3.5 h-3.5 text-[#B47B82]" />
          <span>Each theme is independent. Choose wherever your heart wanders.</span>
        </div>
      </section>
    </div>
  );
};
