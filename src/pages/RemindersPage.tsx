import React, { useState, useEffect } from 'react';
import {
  BookHeart,
  Heart,
  Shuffle,
  Sparkles,
  Coffee,
  CheckCircle2,
  Compass,
  Sun,
  Smile
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { remindersList, siteConfig } from '../data/siteConfig';
import { ReminderItem } from '../types';
import { safeStorage } from '../utils';

export const RemindersPage: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    return safeStorage.get<string[]>('reminder_favorites', ['rem-1']);
  });
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [randomModalItem, setRandomModalItem] = useState<ReminderItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [hugGiven, setHugGiven] = useState(false);

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

  const deliverTeddyCuddle = () => {
    setHugGiven(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#FED7DF', '#FFB6C1', '#F4EBD9', '#E6DCF3'],
      disableForReducedMotion: true,
    });
    setTimeout(() => setHugGiven(false), 4000);
  };

  const filteredReminders = remindersList.filter((item) => {
    if (activeCategory === 'favorites') {
      return favorites.includes(item.id);
    }
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const categories = [
    { key: 'all', label: 'All Reminders 🧸' },
    { key: 'favorites', label: `Saved (${favorites.length}) 💖` },
    { key: 'difficult-day', label: 'For Difficult Days 🫂' },
    { key: 'rest', label: 'Rest & Peace ☁️' },
    { key: 'worth', label: 'Self-Worth 🎀' },
    { key: 'control', label: 'Perspective 🌿' },
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
      <section className="text-center pt-2 sm:pt-4 pb-8 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEEDDE] text-[#B5673E] text-xs font-semibold tracking-wide mb-3 border border-[#FCD8BD] shadow-2xs">
          <span>🧸</span>
          <span>Theme 04 • Things She Should Remember</span>
          <span>🎀</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2C2727] mb-3">
          Gentle Anchors & Teddy Hugs 🧸
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#645450] leading-relaxed">
          Supportive thoughts to revisit whenever life feels overwhelming. Nonjudgmental, calm, and grounded in pure pookie warmth.
        </p>

        {/* Teddy Cuddle Dispenser Banner */}
        <div className="mt-5 p-4 rounded-2xl bg-[#FFF5F5] border border-[#FED7DF] max-w-md mx-auto shadow-2xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-left">
            <span className="text-3xl">🧸</span>
            <div>
              <span className="text-xs font-bold text-[#8C565F] uppercase block">
                Emergency Teddy Hug Dispenser
              </span>
              <span className="text-xs text-[#645450]">
                {hugGiven ? "Warm hug delivered! 🧸💖" : "Tap for an instant warm cuddle"}
              </span>
            </div>
          </div>
          <button
            onClick={deliverTeddyCuddle}
            className="px-3.5 py-1.5 rounded-full bg-[#FED7DF] hover:bg-[#FBAEBf] text-[#8C565F] text-xs font-bold transition-transform active:scale-95 shadow-xs"
          >
            Hug Me 🧸
          </button>
        </div>

        {/* Action button to reveal a random reminder */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={getRandomReminder}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B5673E] hover:bg-[#9C542D] text-white text-xs sm:text-sm font-medium transition-all shadow-sm hover:scale-103"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Draw a Random Reminder 🔀</span>
          </button>
        </div>
      </section>

      {/* Featured Card: Read This on a Difficult Day */}
      <section className="mb-10 max-w-4xl mx-auto">
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#FFF8F4] to-[#FEEDDE] border border-[#FCD8BD] shadow-soft relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#B5673E] bg-white/80 px-3 py-1 rounded-full flex items-center gap-1">
              <span>🧸</span>
              <span>Primary Anchor For Kakun</span>
            </span>
            <button
              onClick={() => toggleFavorite('rem-1')}
              className="p-2 rounded-full bg-white/70 hover:bg-white text-[#B5673E] transition-colors"
              title="Save to favorites"
            >
              <Heart
                className={`w-4 h-4 ${
                  favorites.includes('rem-1') ? 'fill-[#B5673E] text-[#B5673E]' : 'text-[#B5673E]'
                }`}
              />
            </button>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2727] mb-3">
            Read This on a Difficult Day 🧸
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#4D3F3B] leading-relaxed mb-4">
            Today might feel heavy, discouraging, or physically exhausting. You do not have to solve every problem before the sun sets. You do not need to prove yourself to anyone right now. Take one slow, long breath. Drink a sip of water. Let your shoulders drop away from your ears. The intensity of this feeling will soften, just like every other difficult storm before it. You are safe, you are capable, and you are allowed to rest.
          </p>

          <div className="pt-2 flex items-center justify-between text-xs text-[#8C7A75] border-t border-[#FCD8BD]/60">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-[#B5673E]" />
              <span>Take today one gentle hour at a time.</span>
            </div>
            <span className="font-handwriting text-base text-[#B5673E]">
              Sending you teddy hugs 🧸💖
            </span>
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

      {/* Reminder Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {filteredReminders.map((reminder) => {
          const isFav = favorites.includes(reminder.id);
          return (
            <div
              key={reminder.id}
              className="rounded-2xl p-6 bg-white/90 border border-[#E8DFD3] shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B5673E] bg-[#FEEDDE] px-2.5 py-1 rounded-full">
                    {reminder.tag}
                  </span>
                  <button
                    onClick={() => toggleFavorite(reminder.id)}
                    className="p-1.5 rounded-full hover:bg-[#FFF7F0] transition-colors focus:outline-none"
                    title={isFav ? "Saved to device" : "Save to device"}
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFav ? 'text-[#B5673E] fill-[#B5673E]' : 'text-[#C5B3AF]'
                      }`}
                    />
                  </button>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#2C2727] mb-2.5">
                  {reminder.title}
                </h3>

                <p className="font-sans text-sm text-[#4D3F3B] leading-relaxed mb-3">
                  {reminder.message}
                </p>
              </div>

              {reminder.teddyHugMessage && (
                <div className="p-3 bg-[#FFF9F5] rounded-xl border border-[#FEEDDE] text-xs text-[#B5673E] font-medium flex items-center gap-2">
                  <span>🧸</span>
                  <span>{reminder.teddyHugMessage}</span>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Infographic: Within Control vs Outside Control */}
      <section className="mt-12 max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 bg-white/95 border border-[#E8DFD3] shadow-soft">
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2C2727] text-center mb-2">
          Grounded Perspective: Where to Direct Your Energy 🧸
        </h3>
        <p className="text-xs sm:text-sm text-[#645450] text-center max-w-md mx-auto mb-6">
          A gentle reminder when your mind feels crowded with things you cannot change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-[#F0F7F4] border border-[#CDE5DA]">
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

          <div className="p-5 rounded-xl bg-[#FAF6EE] border border-[#EADBC1]">
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

      {/* Random Reminder Modal */}
      {randomModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setRandomModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#FAF7F2] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#FCD8BD] relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-[#FEEDDE] text-[#B5673E] flex items-center justify-center mx-auto mb-3 shadow-xs text-2xl">
              🧸
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
                onClick={() => toggleFavorite(randomModalItem.id)}
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
                Thank you 🧸
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
