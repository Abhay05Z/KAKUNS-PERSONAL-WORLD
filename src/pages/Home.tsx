import React, { useState } from 'react';
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
  ScrollText,
  Film,
  Smile
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteConfig';

export const Home: React.FC = () => {
  const [teddyHugCount, setTeddyHugCount] = useState(0);
  const [teddyMessage, setTeddyMessage] = useState<string | null>(null);

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Camera,
    ScrollText,
    Sparkles,
    HeartHandshake,
    BookHeart,
    Feather,
  };

  const cardThemes = [
    {
      gradient: "from-[#FFF6E9] to-[#FDF4EE]",
      border: "border-[#EADBC1]",
      tagBg: "bg-[#F4EBD9]",
      tagText: "text-[#8C565F]",
      buttonBg: "bg-[#8C565F] hover:bg-[#72434B]",
      illustrationSymbol: "📸",
      actionText: "Open 49-Photo Scrapbook",
    },
    {
      gradient: "from-[#FFF0F3] to-[#FFEBEF]",
      border: "border-[#FED7DF]",
      tagBg: "bg-[#FED7DF]",
      tagText: "text-[#D53A60]",
      buttonBg: "bg-[#D53A60] hover:bg-[#B82B4E]",
      illustrationSymbol: "📜",
      actionText: "Watch 56 Poetry Reels 🎥",
    },
    {
      gradient: "from-[#F8F5FC] to-[#F3EEF9]",
      border: "border-[#E6DCF3]",
      tagBg: "bg-[#E6DCF3]",
      tagText: "text-[#7B619E]",
      buttonBg: "bg-[#7B619E] hover:bg-[#684E8B]",
      illustrationSymbol: "✨",
      actionText: "Her Mind & Heart",
    },
    {
      gradient: "from-[#FFF7F0] to-[#FEEDDE]",
      border: "border-[#FCD8BD]",
      tagBg: "bg-[#FEEDDE]",
      tagText: "text-[#B5673E]",
      buttonBg: "bg-[#B5673E] hover:bg-[#9C542D]",
      illustrationSymbol: "🕊️",
      actionText: "How I See Her",
    },
    {
      gradient: "from-[#FFF8F4] to-[#FDF3EE]",
      border: "border-[#FCD8BD]",
      tagBg: "bg-[#FCD8BD]",
      tagText: "text-[#B5673E]",
      buttonBg: "bg-[#B5673E] hover:bg-[#9C542D]",
      illustrationSymbol: "🧸",
      actionText: "Gentle Reminders & Hugs",
    },
    {
      gradient: "from-[#FAF6EE] to-[#F5ECE1]",
      border: "border-[#DFCBA8]",
      tagBg: "bg-[#EADBC1]",
      tagText: "text-[#645450]",
      buttonBg: "bg-[#645450] hover:bg-[#4D3F3B]",
      illustrationSymbol: "💌",
      actionText: "Scrapbook & Surprises",
    },
  ];

  const sendTeddyHug = () => {
    setTeddyHugCount((prev) => prev + 1);
    const messages = [
      "A giant warm teddy hug is wrapping around Kakun! 🧸💖",
      "Certified 100% sweetest pookie in the whole world! 🎀🥺",
      "Softest bear cuddle dispatched with love and warm tea! ☕🧸",
      "You are precious, loved, and deeply appreciated! ✨🍓",
      "Teddy says: take a deep breath and smile, cutie! 🧸🌸",
    ];
    setTeddyMessage(messages[teddyHugCount % messages.length]);

    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#FED7DF', '#FFB6C1', '#F4EBD9', '#E6DCF3', '#FFD700'],
      disableForReducedMotion: true,
    });
  };

  return (
    <div className="w-full">
      {/* Welcome Heading Section */}
      <section className="text-center pt-2 sm:pt-6 pb-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEBEF] text-[#8C565F] text-xs font-semibold tracking-wide mb-3 border border-[#FED7DF] shadow-2xs">
          <span>🧸</span>
          <span>Dedicated to {siteConfig.recipientNickname || siteConfig.recipientName}</span>
          <span>🎀</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#2C2727] mb-3 leading-tight">
          {siteConfig.welcomeHeading}
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#645450] leading-relaxed max-w-xl mx-auto mb-3">
          {siteConfig.welcomeSubheading}
        </p>

        {/* Poetic couplet banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FFF5F5] via-[#FFF8F4] to-[#FAF8FC] border border-[#FED7DF] max-w-lg mx-auto shadow-2xs mb-4">
          <p className="font-serif text-base sm:text-lg text-[#8C565F] font-semibold">
            "{siteConfig.heroNote}"
          </p>
          <span className="font-sans text-xs text-[#A08883] mt-1 block">
            A sanctuary of 49 photographs, 56 poetry reels, and infinite kindness.
          </span>
        </div>

        {/* Interactive Teddy Hug Dispenser */}
        <div className="inline-flex flex-col items-center p-4 rounded-2xl bg-white/80 border border-[#FED7DF] shadow-soft max-w-md w-full mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-3xl animate-bounce">🧸</span>
            <div className="text-left">
              <span className="text-xs font-bold text-[#8C565F] uppercase tracking-wider block">
                Kakun's Pookie Corner 🎀
              </span>
              <span className="text-xs text-[#645450]">
                {teddyHugCount === 0 ? "Need a little warmth today?" : `Hugs delivered: ${teddyHugCount} 🧸`}
              </span>
            </div>
            <button
              onClick={sendTeddyHug}
              className="ml-auto px-4 py-2 rounded-full bg-[#FED7DF] hover:bg-[#FBAEBf] text-[#8C565F] font-semibold text-xs shadow-xs transition-transform active:scale-95 flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-[#8C565F]" />
              <span>Teddy Hug 🧸</span>
            </button>
          </div>

          {teddyMessage && (
            <p className="mt-3 text-xs text-[#8C565F] font-serif italic animate-fade-in bg-[#FFF5F5] px-3 py-1.5 rounded-lg border border-[#FED7DF] w-full text-center">
              {teddyMessage}
            </p>
          )}
        </div>
      </section>

      {/* Six Distinct Gateways Grid (Including the new Poetry & Reels experience) */}
      <section aria-label="Theme Gateways" className="w-full mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {siteConfig.themeCards.map((card, idx) => {
            const themeStyle = cardThemes[idx % cardThemes.length];

            return (
              <div
                key={card.id}
                className={`group relative rounded-2xl p-6 sm:p-7 bg-gradient-to-br ${themeStyle.gradient} border ${themeStyle.border} shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5`}
              >
                <div>
                  {/* Badge & Pookie Emoji */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${themeStyle.tagBg} ${themeStyle.tagText}`}>
                      {card.badge}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-xl shadow-2xs group-hover:scale-115 transition-transform">
                      {themeStyle.illustrationSymbol}
                    </span>
                  </div>

                  {/* Thumbnail / Visual preview */}
                  {card.previewImage && (
                    <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-white/60 border border-white/80 shadow-2xs relative">
                      <img
                        src={card.previewImage}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
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

      {/* Comforting Bottom Note */}
      <section className="mt-14 text-center">
        <div className="inline-flex items-center gap-2 text-xs text-[#8C7A75] bg-white/70 px-4 py-2 rounded-full border border-[#E8DFD3] shadow-2xs">
          <span>🧸</span>
          <span>"No rush, no rules. Wander wherever your heart feels happiest." 🎀✨</span>
        </div>
      </section>
    </div>
  );
};
