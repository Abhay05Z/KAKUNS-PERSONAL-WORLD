import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Feather,
  Mail,
  Heart,
  CheckCircle2,
  Circle,
  Calendar,
  MapPin,
  Sparkles,
  Sun,
  Wind,
  Music,
  Moon,
  Gift,
  HelpCircle,
  Lock,
  Trash2,
  Save,
  PenTool
} from 'lucide-react';
import {
  ritualsList,
  memoriesList,
  personalLetter,
  jarQuotes,
  surpriseItems,
  siteConfig
} from '../data/siteConfig';
import { safeStorage } from '../utils';

export const PersonalSpacePage: React.FC = () => {
  // Rituals completion state in localStorage (no streaks/no guilt)
  const [completedRituals, setCompletedRituals] = useState<string[]>(() => {
    return safeStorage.get<string[]>('completed_rituals', []);
  });

  // Letter folded/opened state
  const [letterOpen, setLetterOpen] = useState(false);

  // Digital Jar state
  const [currentJarQuote, setCurrentJarQuote] = useState<string | null>(null);
  const [drawnCount, setDrawnCount] = useState(0);

  // Envelope surprise reveal
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  // Secret card reveal
  const [secretRevealed, setSecretRevealed] = useState(false);

  // Local private notes
  const [personalNoteText, setPersonalNoteText] = useState<string>(() => {
    return safeStorage.get<string>('visitor_private_note', '');
  });
  const [noteSavedFeedback, setNoteSavedFeedback] = useState(false);

  // Active sub-tab for easy navigation within Personal Space
  const [activeTab, setActiveTab] = useState<'all' | 'rituals' | 'memories' | 'letter' | 'surprises' | 'notes'>('all');

  // Persist ritual completion
  useEffect(() => {
    safeStorage.set('completed_rituals', completedRituals);
  }, [completedRituals]);

  // Persist notes
  const savePersonalNote = () => {
    safeStorage.set('visitor_private_note', personalNoteText);
    setNoteSavedFeedback(true);
    setTimeout(() => setNoteSavedFeedback(false), 2500);
  };

  const clearPersonalNote = () => {
    if (window.confirm("Are you sure you want to clear your private notes?")) {
      setPersonalNoteText('');
      safeStorage.set('visitor_private_note', '');
    }
  };

  const toggleRitual = (id: string) => {
    if (completedRituals.includes(id)) {
      setCompletedRituals(completedRituals.filter((rId) => rId !== id));
    } else {
      setCompletedRituals([...completedRituals, id]);
    }
  };

  // Draw from digital jar
  const drawFromJar = () => {
    const randomIndex = Math.floor(Math.random() * jarQuotes.length);
    setCurrentJarQuote(jarQuotes[randomIndex].text);
    setDrawnCount((prev) => prev + 1);
  };

  // Soft Confetti effect with blush, gold, rose colors
  const triggerSoftConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FED7DF', '#F4EBD9', '#B47B82', '#E6DCF3', '#FEEDDE'],
      disableForReducedMotion: true,
    });
  };

  const ritualIcons: Record<string, React.FC<{ className?: string }>> = {
    Sun,
    Wind,
    Music,
    Moon,
    Sparkle: Sparkles,
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="text-center pt-2 sm:pt-4 pb-8 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EE] text-[#645450] text-xs font-medium tracking-wide mb-3 border border-[#EADBC1]">
          <Feather className="w-3.5 h-3.5 text-[#8C565F]" />
          <span>Theme 05 • Her Personal Space</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2C2727] mb-3">
          The Personal Scrapbook
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#645450] leading-relaxed">
          A peaceful, tactile digital corner of rituals, captured timeline memories, a written letter, and quiet little surprises.
        </p>

        <p className="font-handwriting text-xl sm:text-2xl text-[#8C565F] mt-2">
          "A quiet sanctuary with no expectations."
        </p>
      </section>

      {/* Internal Navigation Sub-tabs */}
      <section className="mb-10 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
        {[
          { key: 'all', label: 'View All' },
          { key: 'rituals', label: 'Personal Rituals' },
          { key: 'memories', label: 'Scrapbook Memories' },
          { key: 'letter', label: 'Personal Letter' },
          { key: 'surprises', label: 'Interactive Surprises' },
          { key: 'notes', label: 'My Private Notes' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === tab.key
                ? 'bg-[#645450] text-white shadow-xs'
                : 'bg-white/80 text-[#645450] hover:bg-[#F4EBD9] border border-[#E8DFD3]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </section>

      {/* =========================================================================
          SECTION A: PERSONAL RITUALS
         ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'rituals') && (
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8C565F]">
                Part A • Daily Rhythm
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2727]">
                Gentle Daily Rituals
              </h2>
            </div>
            <span className="text-xs text-[#8C7A75] bg-white/70 px-3 py-1 rounded-full border border-[#E8DFD3]">
              Zero guilt • No streaks
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#645450] mb-6">
            Small, tender pauses to care for yourself. Check them off simply for your own peace of mind whenever you enjoy them.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ritualsList.map((ritual) => {
              const isDone = completedRituals.includes(ritual.id);
              const Icon = ritualIcons[ritual.iconName] || Sparkles;

              return (
                <div
                  key={ritual.id}
                  onClick={() => toggleRitual(ritual.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    isDone
                      ? 'bg-[#F9F7F4] border-[#DFCBA8] shadow-xs'
                      : 'bg-white/90 border-[#E8DFD3] hover:border-[#FED7DF] shadow-soft'
                  }`}
                  role="checkbox"
                  aria-checked={isDone}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      toggleRitual(ritual.id);
                    }
                  }}
                >
                  <div className="mt-1 text-[#8C565F]">
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Circle className="w-5 h-5 text-[#C5B3AF]" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between text-[11px] text-[#A08883] mb-1">
                      <span className="uppercase tracking-wider font-medium text-[#8C565F]">
                        {ritual.frequency}
                      </span>
                    </div>

                    <h3
                      className={`font-serif text-base sm:text-lg font-medium text-[#2C2727] mb-1 ${
                        isDone ? 'line-through text-[#8C7A75]' : ''
                      }`}
                    >
                      {ritual.title}
                    </h3>

                    <p className="text-xs text-[#645450] leading-relaxed">
                      {ritual.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION B: FAVORITE MEMORIES (TIMELINE / SCRAPBOOK)
         ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'memories') && (
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C565F]">
              Part B • Timeline
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2727]">
              Treasured Scrapbook Memories
            </h2>
            <p className="text-xs sm:text-sm text-[#645450] mt-1">
              Data-driven memory milestones. Editable with real photographs, dates, and locations.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-[#E8DFD3]">
            {memoriesList.map((mem, idx) => (
              <div key={mem.id} className="relative pl-10 sm:pl-16">
                {/* Timeline node */}
                <span className="absolute left-2.5 sm:left-6.5 top-5 w-4 h-4 rounded-full bg-[#FED7DF] border-2 border-[#8C565F] shadow-xs" />

                <div className="p-6 sm:p-7 rounded-2xl bg-white/95 border border-[#E8DFD3] shadow-soft hover:shadow-card-hover transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8C565F] bg-[#FFEBEF] px-2.5 py-0.5 rounded-full">
                      Memory 0{idx + 1}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-[#8C7A75]">
                      {mem.date && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#B47B82]" />
                          {mem.date}
                        </span>
                      )}
                      {mem.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#B47B82]" />
                          {mem.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2C2727] mb-2">
                    {mem.title}
                  </h3>

                  <p className="font-sans text-sm text-[#4D3F3B] leading-relaxed mb-4">
                    {mem.description}
                  </p>

                  {/* Optional photo frame */}
                  {mem.imagePath && (
                    <div className="w-full sm:w-80 h-44 rounded-xl overflow-hidden mb-4 border border-[#E8DFD3] shadow-2xs">
                      <img
                        src={mem.imagePath}
                        alt={mem.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  {mem.personalNote && (
                    <div className="pt-2 border-t border-[#F2ECE4]">
                      <p className="font-handwriting text-lg text-[#8C565F]">
                        "{mem.personalNote}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION C: PERSONAL LETTER
         ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'letter') && (
        <section className="mb-16 max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C565F]">
              Part C • Words in Writing
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2727]">
              A Letter For You
            </h2>
            <p className="text-xs sm:text-sm text-[#645450] mt-1">
              Read comfortably on beautiful paper-inspired parchment.
            </p>
          </div>

          {/* Letter Container */}
          <div className="rounded-2xl p-6 sm:p-12 bg-[#FCFAF7] border border-[#DFCBA8] shadow-polaroid relative paper-texture">
            {/* Washi tape header */}
            <div className="washi-tape" />

            <div className="flex items-center justify-between text-xs text-[#8C7A75] mb-6 pt-2 pb-4 border-b border-[#EADBC1]">
              <span className="font-serif italic">{personalLetter.date}</span>
              <span className="font-sans">Private & Personal</span>
            </div>

            <div className="font-serif text-xl sm:text-2xl font-semibold text-[#2C2727] mb-6">
              {personalLetter.salutation}
            </div>

            {/* Letter Paragraphs */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-[#3D3838] leading-relaxed">
              {personalLetter.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* Closing & Signature */}
            <div className="mt-8 pt-6 border-t border-[#EADBC1]">
              <p className="font-sans text-sm text-[#645450] mb-2">{personalLetter.closing}</p>
              <p className="font-handwriting text-3xl text-[#8C565F]">
                {personalLetter.signature}
              </p>

              {personalLetter.postscript && (
                <div className="mt-6 pt-4 border-t border-dashed border-[#DFCBA8] text-xs text-[#7A6B67] italic font-serif">
                  {personalLetter.postscript}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION D: INTERACTIVE SURPRISES
         ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'surprises') && (
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C565F]">
              Part D • Interactive Surprises
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2727]">
              Little Moments of Joy
            </h2>
            <p className="text-xs sm:text-sm text-[#645450] mt-1">
              Tasteful, optional surprises crafted to bring a quiet smile to your day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Surprise 1: Clickable Sealed Envelope */}
            <div className="rounded-2xl p-6 bg-white/95 border border-[#E8DFD3] shadow-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8C565F] uppercase tracking-wider mb-2">
                  <Mail className="w-4 h-4" />
                  <span>Wax-Sealed Note</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2C2727] mb-2">
                  An Envelope Addressed to You
                </h3>
                <p className="text-xs text-[#645450] mb-4">
                  Tap to unseal and read the small note tucked inside.
                </p>

                {envelopeOpen ? (
                  <div className="p-4 rounded-xl bg-[#FFF5F5] border border-[#FED7DF] animate-fade-in">
                    <p className="font-handwriting text-xl text-[#8C565F] leading-snug">
                      "{surpriseItems[0].revealedContent}"
                    </p>
                    <button
                      onClick={() => setEnvelopeOpen(false)}
                      className="mt-3 text-[11px] text-[#A08883] hover:underline"
                    >
                      Fold note back into envelope
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => setEnvelopeOpen(true)}
                    className="p-8 rounded-xl bg-gradient-to-br from-[#FFF5F5] to-[#FED7DF] border border-[#FED7DF] cursor-pointer flex flex-col items-center justify-center text-center hover:scale-102 transition-transform shadow-xs"
                    role="button"
                    tabIndex={0}
                  >
                    <span className="w-12 h-12 rounded-full bg-[#8C565F] text-white flex items-center justify-center text-lg shadow-md mb-2">
                      ✉️
                    </span>
                    <span className="text-xs font-medium text-[#8C565F]">
                      Click to Unseal Envelope
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Surprise 2: Digital Jar of Kind Words */}
            <div className="rounded-2xl p-6 bg-white/95 border border-[#E8DFD3] shadow-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#B5673E] uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Digital Affirmation Jar</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2C2727] mb-2">
                  Jar of Kind Words
                </h3>
                <p className="text-xs text-[#645450] mb-4">
                  Contains 12 gentle notes. Click the jar to pull out a slip whenever you need a lift.
                </p>

                {currentJarQuote ? (
                  <div className="p-4 rounded-xl bg-[#FFF8F4] border border-[#FCD8BD] animate-fade-in mb-3">
                    <span className="text-[10px] uppercase font-bold text-[#B5673E] tracking-wider block mb-1">
                      Paper Slip Drawn #{drawnCount}
                    </span>
                    <p className="font-serif italic text-base text-[#382D2A]">
                      "{currentJarQuote}"
                    </p>
                  </div>
                ) : (
                  <div className="p-6 rounded-xl bg-[#FFF8F4] border border-[#FCD8BD] text-center mb-3">
                    <span className="text-3xl mb-1 block">🏺</span>
                    <p className="text-xs text-[#8C7A75]">The jar is full of kind words.</p>
                  </div>
                )}
              </div>

              <button
                onClick={drawFromJar}
                className="w-full py-2.5 px-4 rounded-xl bg-[#B5673E] hover:bg-[#9C542D] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Draw a Note from the Jar</span>
              </button>
            </div>

            {/* Surprise 3: Hidden Message Reveal */}
            <div className="rounded-2xl p-6 bg-white/95 border border-[#E8DFD3] shadow-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#7B619E] uppercase tracking-wider mb-2">
                  <Lock className="w-4 h-4" />
                  <span>Unveilable Note</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2C2727] mb-2">
                  A Hidden Thought
                </h3>
                <p className="text-xs text-[#645450] mb-4">
                  Deliberately click to scratch off the veil and view what's written beneath.
                </p>

                <div
                  onClick={() => setSecretRevealed(!secretRevealed)}
                  className={`p-6 rounded-xl border text-center cursor-pointer transition-all ${
                    secretRevealed
                      ? 'bg-[#F3EEF9] border-[#D2C1EA] text-[#5A4577]'
                      : 'bg-[#FAF8FC] border-dashed border-[#D2C1EA] text-[#8C7A75] hover:bg-[#F3EEF9]'
                  }`}
                  role="button"
                  tabIndex={0}
                >
                  {secretRevealed ? (
                    <div className="animate-fade-in">
                      <p className="font-serif text-base sm:text-lg font-medium text-[#5A4577]">
                        {surpriseItems[1].revealedContent}
                      </p>
                      <span className="text-[11px] text-[#7B619E] mt-2 block underline">
                        (Tap to conceal again)
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-2xl mb-1 block">✨</span>
                      <span className="text-xs font-medium text-[#7B619E]">
                        Click here to reveal secret message
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Surprise 4: Gentle Confetti Celebration */}
            <div className="rounded-2xl p-6 bg-white/95 border border-[#E8DFD3] shadow-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8C565F] uppercase tracking-wider mb-2">
                  <Gift className="w-4 h-4" />
                  <span>Celebration</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2C2727] mb-2">
                  Celebrate Being You
                </h3>
                <p className="text-xs text-[#645450] mb-4">
                  For no special reason other than appreciating your presence in this world.
                </p>

                <div className="p-6 rounded-xl bg-[#FFF5F5] border border-[#FED7DF] text-center mb-4">
                  <p className="text-xs text-[#8C7A75]">
                    Click the button below for a shower of soft blush and gold celebration.
                  </p>
                </div>
              </div>

              <button
                onClick={triggerSoftConfetti}
                className="w-full py-2.5 px-4 rounded-xl bg-[#8C565F] hover:bg-[#72434B] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Celebrate You ✨</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION E: PERSONAL NOTES (PRIVATE SCRATCHPAD)
         ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'notes') && (
        <section className="mb-16 max-w-3xl mx-auto">
          <div className="rounded-2xl p-6 sm:p-8 bg-white/95 border border-[#E8DFD3] shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <PenTool className="w-4 h-4 text-[#8C565F]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C565F]">
                  Part E • Private Scratchpad
                </span>
              </div>
              <span className="text-[11px] text-[#8C7A75] bg-[#FAF6EE] px-2.5 py-0.5 rounded-full border border-[#EADBC1]">
                Stored only in your browser
              </span>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-[#2C2727] mb-2">
              Your Personal Notes
            </h3>

            <p className="text-xs sm:text-sm text-[#645450] mb-4">
              Write thoughts, memories, book quotes, or reflections you want to keep for yourself.
              This text is stored entirely in your local browser storage and is never uploaded anywhere.
            </p>

            <textarea
              value={personalNoteText}
              onChange={(e) => setPersonalNoteText(e.target.value)}
              placeholder="Write anything you'd like to remember here..."
              rows={5}
              className="w-full p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] text-sm text-[#2C2727] focus:outline-none focus:ring-2 focus:ring-[#B47B82] font-sans resize-y"
            />

            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-emerald-700 font-medium h-5">
                {noteSavedFeedback && '✓ Saved to your device!'}
              </div>

              <div className="flex items-center gap-2">
                {personalNoteText && (
                  <button
                    onClick={clearPersonalNote}
                    className="px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-1 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear</span>
                  </button>
                )}
                <button
                  onClick={savePersonalNote}
                  className="px-4 py-1.5 text-xs font-medium text-white bg-[#645450] hover:bg-[#4D3F3B] rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Note</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
