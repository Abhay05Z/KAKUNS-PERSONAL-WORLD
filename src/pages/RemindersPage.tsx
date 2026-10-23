import React, { useState, useEffect } from 'react';
import {
  BookHeart,
  Heart,
  Shuffle,
  Sparkles,
  Coffee,
  CheckCircle2,
  ShieldCheck,
  Compass,
  ArrowRight,
  Sun,
  Smile
} from 'lucide-react';
import { remindersList, siteConfig } from '../data/siteConfig';
import { ReminderItem } from '../types';
import { safeStorage } from '../utils';
import { PookiePhotoEnvelope } from '../components/common/PookiePhotoEnvelope';

export const RemindersPage: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    return safeStorage.get<string[]>('reminder_favorites', ['rem-1']);
  });
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [randomModalItem, setRandomModalItem] = useState<ReminderItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const photoList = [
    { src: '/assets/gallery/photo-01.webp', sticker: '🧸', rot: '-rotate-2', washi: 'rgba(254, 215, 223, 0.85)', tag: 'Look at this smile 🧸' },
    { src: '/assets/gallery/photo-10.webp', sticker: '🌸', rot: 'rotate-2', washi: 'rgba(254, 237, 222, 0.85)', tag: 'Rest is allowed 🌸' },
    { src: '/assets/gallery/photo-15.webp', sticker: '✨', rot: '-rotate-1.5', washi: 'rgba(230, 220, 245, 0.85)', tag: 'Small steps count ✨' },
    { src: '/assets/gallery/photo-20.webp', sticker: '🍓', rot: 'rotate-1.5', washi: 'rgba(208, 232, 215, 0.85)', tag: 'Within your hands 🍓' },
    { src: '/assets/gallery/photo-25.webp', sticker: '🎀', rot: '-rotate-2', washi: 'rgba(254, 215, 223, 0.85)', tag: 'Dreams matter 🎀' },
    { src: '/assets/gallery/photo-30.webp', sticker: '🥺', rot: 'rotate-2', washi: 'rgba(230, 220, 245, 0.85)', tag: 'Valid feelings 🥺' },
  ];

  // Save favorites to localStorage
  useEffect(() => {
    safeStorage.set('reminder_favorites', favorites);
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
      showToast('Removed from your saved reminders.');
    } else {
      setFavorites([...favorites, id]);
      showToast('Saved to your favorites on this device.');
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const getRandomReminder = () => {
    const randomIndex = Math.floor(Math.random() * remindersList.length);
    setRandomModalItem(remindersList[randomIndex]);
  };

  const filteredReminders = remindersList.filter((item) => {
    if (activeCategory === 'favorites') {
      return favorites.includes(item.id);
    }
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const categories = [
    { key: 'all', label: 'All Reminders 🌸' },
    { key: 'favorites', label: `Saved (${favorites.length}) 💖` },
    { key: 'difficult-day', label: 'For Difficult Days 🧸' },
    { key: 'rest', label: 'Rest & Peace 🌿' },
    { key: 'worth', label: 'Self-Worth ✨' },
    { key: 'control', label: 'Perspective 🎀' },
  ];

  return (
    <div className="w-full">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2C2727] text-white text-xs px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 animate-fade-in">
          <Heart className="w-3.5 h-3.5 text-[#FED7DF] fill-[#FED7DF]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Section */}
      <section className="text-center pt-2 sm:pt-4 pb-6 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FEEDDE] text-[#B5673E] text-xs font-semibold tracking-wide mb-3 border border-[#FCD8BD] shadow-2xs">
          <span>🧸</span>
          <span>Theme 04 • Things She Should Remember</span>
          <span>🍓</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2C2727] mb-3">
          Gentle Anchors & Reminders
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#645450] leading-relaxed">
          Supportive thoughts to revisit whenever life feels overwhelming, paired with your most comforting smiles 🧸💖
        </p>

        {/* Action button to reveal a random reminder */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={getRandomReminder}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B5673E] hover:bg-[#9C542D] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:scale-103"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Draw a Random Reminder 🧸</span>
          </button>
        </div>
      </section>

      {/* Featured Photo Envelope for Difficult Days */}
      <section className="max-w-4xl mx-auto mb-8">
        <PookiePhotoEnvelope
          title="A Pocket of Encouragement for Tough Days 🧸✉️"
          subtitle="Click to unseal a comforting note and sweet photo"
          sealEmoji="🧸"
          envelopeColor="#FFF7F0"
          sealColor="#B5673E"
          photoSrc="/assets/gallery/photo-01.webp"
          photoCaption="Remember this smile on heavy days 🧸💖"
          highlightText="You do not have to solve everything today. Just breathe."
          paragraph="Whenever the world feels like it is moving too fast or expecting too much, open this note. Look at your picture: full of warmth, life, and quiet grace. Take one gentle breath, drink some water, and remember that you have weathered every difficult moment before. This one will pass too."
          pookieBadge="Gentle Envelope • For Kakun 🌸"
        />
      </section>

      {/* Primary Anchor Card Paired with Her Cute Framed Photo */}
      <section className="mb-10 max-w-4xl mx-auto">
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#FFF8F4] to-[#FEEDDE] border border-[#FCD8BD] shadow-soft relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Cute Framed Photo of Her Face */}
            <div className="w-44 sm:w-52 shrink-0">
              <div className="polaroid-frame p-2.5 pb-3 bg-white rounded-xl shadow-md rotate-[-2deg] hover:rotate-0 transition-transform relative group">
                <div className="washi-tape bg-[#FED7DF]" />
                <span className="absolute -top-2.5 -right-2.5 text-xl filter drop-shadow-sm group-hover:scale-125 transition-transform">
                  🧸
                </span>
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-[#FAF0E6] mb-1.5 border border-[#F2ECE4]">
                  <img
                    src="/assets/gallery/photo-01.webp"
                    alt="Kakun smiling"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="font-handwriting text-center text-xs font-semibold text-[#8C565F]">
                  You are safe & loved 🧸💖
                </p>
              </div>
            </div>

            {/* Paragraph Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#B5673E] bg-white/80 px-3 py-1 rounded-full">
                  Primary Anchor 🌿
                </span>
                <button
                  onClick={() => toggleFavorite('rem-1')}
                  className="p-2 rounded-full bg-white/70 hover:bg-white text-[#B5673E] transition-colors"
                  title="Save to favorites"
                  aria-label="Save to favorites"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes('rem-1') ? 'fill-[#B5673E] text-[#B5673E]' : 'text-[#B5673E]'
                    }`}
                  />
                </button>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2727] mb-3">
                Read This on a Difficult Day
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#4D3F3B] leading-relaxed mb-4">
                Today might feel heavy, discouraging, or physically exhausting. You do not have to solve every problem before the sun sets. You do not need to prove yourself to anyone right now. Take one slow, long breath. Drink a sip of water. Let your shoulders drop away from your ears. The intensity of this feeling will soften, just like every other difficult storm before it. You are safe, you are capable, and you are allowed to rest.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#8C7A75]">
                <Sun className="w-4 h-4 text-[#B5673E]" />
                <span>Take today one gentle hour at a time 🧸</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="mb-8 flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? 'bg-[#B5673E] text-white shadow-xs'
                  : 'bg-white/80 text-[#645450] hover:bg-[#FEEDDE] border border-[#E8DFD3]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </section>

      {/* Reminder Cards Grid Paired with Her Cute Framed Photos */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {filteredReminders.length === 0 ? (
          <div className="col-span-full text-center py-12 bg-white/60 rounded-2xl border border-dashed border-[#FCD8BD]">
            <Heart className="w-8 h-8 text-[#FCD8BD] mx-auto mb-2" />
            <p className="text-sm font-medium text-[#2C2727]">No saved reminders yet</p>
            <p className="text-xs text-[#8C7A75] mt-1">
              Click the heart icon on any reminder card to save it to your personal favorites.
            </p>
          </div>
        ) : (
          filteredReminders.map((reminder, idx) => {
            const isFav = favorites.includes(reminder.id);
            const photoInfo = photoList[idx % photoList.length];

            return (
              <div
                key={reminder.id}
                className="rounded-3xl p-6 bg-white/95 border border-[#E8DFD3] shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B5673E] bg-[#FEEDDE] px-2.5 py-1 rounded-full flex items-center gap-1">
                      <span>{photoInfo.sticker}</span>
                      <span>{reminder.tag}</span>
                    </span>
                    <button
                      onClick={() => toggleFavorite(reminder.id)}
                      className="p-1.5 rounded-full hover:bg-[#FFF7F0] transition-colors focus:outline-none"
                      title={isFav ? "Saved to device" : "Save to device"}
                      aria-label="Toggle favorite"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isFav ? 'text-[#B5673E] fill-[#B5673E]' : 'text-[#C5B3AF]'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Inline Cute Polaroid Thumbnail */}
                  <div className="float-right ml-3 mb-2 w-20 sm:w-24">
                    <div className={`polaroid-frame p-1 pb-1.5 bg-white rounded-lg shadow-xs ${photoInfo.rot} hover:rotate-0 transition-transform`}>
                      <div className="aspect-square w-full rounded overflow-hidden bg-[#FAF0E6] mb-0.5">
                        <img
                          src={photoInfo.src}
                          alt={reminder.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/gallery/photo-01.webp';
                          }}
                        />
                      </div>
                      <p className="font-handwriting text-center text-[9px] text-[#8C565F] line-clamp-1">
                        {photoInfo.tag}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#2C2727] mb-2">
                    {reminder.title}
                  </h3>

                  <p className="font-sans text-sm text-[#4D3F3B] leading-relaxed">
                    {reminder.message}
                  </p>
                </div>

                <div className="clear-both pt-4 mt-3 border-t border-[#F2ECE4] flex items-center justify-between text-[11px] text-[#A08883]">
                  <span>Gentle reminder</span>
                  <span className="font-serif italic text-[#B5673E]">For {siteConfig.recipientName} 🧸</span>
                </div>
              </div>
            );
          })
        )}
      </section>

      {/* Visual Infographic Card: Within Control vs Outside Control */}
      <section className="mt-12 max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-white/95 border border-[#E8DFD3] shadow-soft">
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2C2727] text-center mb-2">
          Grounded Perspective: Where to Direct Your Energy
        </h3>
        <p className="text-xs sm:text-sm text-[#645450] text-center max-w-md mx-auto mb-6">
          A gentle reminder when your mind feels crowded with things you cannot change 🧸✨
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Within Control */}
          <div className="p-5 rounded-2xl bg-[#F0F7F4] border border-[#CDE5DA]">
            <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Within Your Gentle Control 🌸</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>How softly you speak to yourself today</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>When you decide to pause, stretch, and rest</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>The boundaries you place around your peace</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Your next single, bite-sized decision</span>
              </li>
            </ul>
          </div>

          {/* Outside Control */}
          <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#EADBC1]">
            <div className="flex items-center gap-2 text-[#7A6B67] font-semibold text-sm mb-3">
              <Compass className="w-4 h-4" />
              <span>Safe to Release (Outside Your Control) 🍃</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#645450]">
              <li className="flex items-start gap-2">
                <span className="text-[#B5673E] font-bold">•</span>
                <span>Other people's moods, assumptions, or haste</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B5673E] font-bold">•</span>
                <span>Past mistakes that already taught their lessons</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B5673E] font-bold">•</span>
                <span>Unpredictable tomorrows that haven't arrived</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B5673E] font-bold">•</span>
                <span>Needing everyone to understand your journey</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Random Reminder Modal / Reveal */}
      {randomModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setRandomModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#FCD8BD] relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-[#FEEDDE] text-[#B5673E] flex items-center justify-center mx-auto mb-3 shadow-xs">
              <span className="text-2xl">🧸</span>
            </div>

            <span className="text-xs uppercase tracking-wider font-semibold text-[#B5673E] mb-1 block">
              Drawn Just For You Right Now
            </span>

            <h3 className="font-serif text-2xl font-semibold text-[#2C2727] mb-3">
              {randomModalItem.title}
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#4D3F3B] leading-relaxed mb-6">
              {randomModalItem.message}
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  toggleFavorite(randomModalItem.id);
                }}
                className="px-4 py-2 rounded-full bg-white border border-[#E8DFD3] text-xs font-medium text-[#4D3F3B] hover:bg-[#FEEDDE] flex items-center gap-1.5 transition-colors"
              >
                <Heart
                  className={`w-3.5 h-3.5 ${
                    favorites.includes(randomModalItem.id)
                      ? 'text-[#B5673E] fill-[#B5673E]'
                      : 'text-[#8C7A75]'
                  }`}
                />
                <span>
                  {favorites.includes(randomModalItem.id) ? 'Saved' : 'Save to Favorites'}
                </span>
              </button>

              <button
                onClick={() => setRandomModalItem(null)}
                className="px-5 py-2 rounded-full bg-[#B5673E] text-white text-xs font-medium hover:bg-[#9C542D] transition-colors"
              >
                Got It 🧸
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
