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
  Compass,
  Film,
  Flower2
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { ThemeSelectorBar } from '../components/common/ThemeSelectorBar';
import { PookiePhotoEnvelope } from '../components/common/PookiePhotoEnvelope';

export const Home: React.FC = () => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Camera,
    Sparkles,
    HeartHandshake,
    BookHeart,
    Feather,
    Film,
    Flower2,
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
      actionText: "Explore 49 Photos",
    },
    {
      gradient: "from-[#FFF0F5] to-[#FFEBEF]",
      border: "border-[#FED7DF]",
      tagBg: "bg-[#FED7DF]",
      tagText: "text-[#8C565F]",
      buttonBg: "bg-[#B47B82] hover:bg-[#8C565F]",
      accentRing: "hover:ring-[#FED7DF]/60",
      illustrationSymbol: "🧸",
      actionText: "56 Reels & Poetry",
    },
    {
      gradient: "from-[#F2F8F4] to-[#EAF3EC]",
      border: "border-[#D0E5D7]",
      tagBg: "bg-[#DCEEE2]",
      tagText: "text-[#3E5F4B]",
      buttonBg: "bg-[#3E5F4B] hover:bg-[#2F4A39]",
      accentRing: "hover:ring-[#D0E5D7]/60",
      illustrationSymbol: "🪷",
      actionText: "Enter Lily Sanctuary",
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
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFEBEF] text-[#8C565F] text-xs font-semibold tracking-wide mb-3 border border-[#FED7DF] shadow-2xs">
          <span>🧸</span>
          <span>A dedicated space for {siteConfig.recipientName}</span>
          <span>🪷✨</span>
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

        {/* Prominent One-Click Soft Theme Switcher Bar */}
        <div className="mt-5">
          <ThemeSelectorBar />
        </div>

        {/* Featured Welcome Envelope with Her Photo */}
        <div className="mt-6 text-left">
          <PookiePhotoEnvelope
            title="A Welcome Envelope for Kakun 🧸✉️"
            subtitle="Click to unseal and read a sweet welcome note with your framed portrait"
            sealEmoji="🧸"
            envelopeColor="#FFF0F3"
            sealColor="#8C565F"
            photoSrc="/assets/gallery/photo-01.webp"
            photoCaption="A sweet smile to start your journey 🧸💖"
            highlightText="Take your time. There is no hurry here."
            paragraph="Welcome to your personal digital world. Explore all 49 photos, 56 video reels, poetry envelopes, soothing lily chimes, and gentle reminders whenever you need a peaceful breath. This space was crafted entirely for you."
            pookieBadge="Welcome Envelope • For Kakun 🌸"
          />
        </div>
      </section>

      {/* Gateway Cards Grid */}
      <section aria-label="Theme Gateways" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {siteConfig.themeCards.map((card, idx) => {
            const themeStyle = cardThemes[idx] || cardThemes[0];

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
                      {card.pookieEmoji || themeStyle.illustrationSymbol}
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
      </section>

      {/* Small comforting quote at the bottom of the home screen */}
      <section className="mt-14 text-center">
        <div className="inline-flex items-center gap-2 text-xs text-[#8C7A75] bg-white/70 px-4 py-2 rounded-full border border-[#E8DFD3] shadow-2xs">
          <span className="text-sm">🪷</span>
          <span>Every theme is independent. Wander wherever your heart leads you.</span>
          <span className="text-sm">🧸</span>
        </div>
      </section>
    </div>
  );
};
