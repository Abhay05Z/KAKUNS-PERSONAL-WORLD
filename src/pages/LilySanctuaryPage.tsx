import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Flower2,
  Heart,
  Volume2,
  VolumeX,
  Feather,
  Sun,
  Moon,
  Wind
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { PookiePhotoEnvelope } from '../components/common/PookiePhotoEnvelope';

export const LilySanctuaryPage: React.FC = () => {
  const [bloomCount, setBloomCount] = useState(1);
  const [isBlooming, setIsBlooming] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  const lilyAffirmations = [
    "You bloom at your own pace, with unmatched grace and quiet peace 🪷🤍",
    "Like a white lily on still water, your presence brings calmness to the stormiest days ✨",
    "Softness is not weakness; it is the gentlest form of strength in this world 🌸",
    "May your heart remain as light as a petal carried by morning breeze 🌿",
    "You don't need to compete with any flower in the garden — you are uniquely rare 🧸💖",
    "Rest your thoughts, Kakun. You are protected, cherished, and deeply admired 🪷",
  ];

  const lilyFlowersList = [
    {
      id: "lf-1",
      name: "White Madonna Lily",
      botanicalName: "Lilium candidum",
      meaning: "Purity of Intention & Peace",
      whisper: "A quiet heart that radiates warmth to anyone who draws near.",
      pookieEmoji: "🪷",
      bgColor: "bg-[#F4FAF6]",
      borderColor: "border-[#D6E8DC]",
      textColor: "text-[#3E5F4B]",
    },
    {
      id: "lf-2",
      name: "Still Water Lily",
      botanicalName: "Nymphaea alba",
      meaning: "Inner Calm Amidst Chaos",
      whisper: "Roots anchored deep, floating peacefully above the surface noise.",
      pookieEmoji: "🤍",
      bgColor: "bg-[#F7FAFD]",
      borderColor: "border-[#D4E3F3]",
      textColor: "text-[#3D5B78]",
    },
    {
      id: "lf-3",
      name: "Blushing Lily",
      botanicalName: "Lilium rubellum",
      meaning: "Gentle Affection & Sweetness",
      whisper: "The sweetest smile that brightens any room without a sound.",
      pookieEmoji: "🌸",
      bgColor: "bg-[#FFF6F8]",
      borderColor: "border-[#FAD2DB]",
      textColor: "text-[#8C566A]",
    },
    {
      id: "lf-4",
      name: "Lily of the Valley",
      botanicalName: "Convallaria majalis",
      meaning: "Return of Happiness & Joy",
      whisper: "Small, bell-like blossoms ringing with quiet joy and gentle laughter.",
      pookieEmoji: "🎐",
      bgColor: "bg-[#FAF7FD]",
      borderColor: "border-[#E5D8F6]",
      textColor: "text-[#634E7F]",
    },
  ];

  const handleBloomClick = () => {
    setIsBlooming(true);
    setBloomCount((prev) => prev + 1);

    confetti({
      particleCount: 35,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFFFFF', '#E8F5E9', '#FED7DF', '#E0F2FE', '#FFF9C4'],
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      setIsBlooming(false);
    }, 800);
  };

  // Synthetic Gentle Chime Player via Web Audio API (Offline & instant)
  const toggleSoundscape = () => {
    if (soundPlaying) {
      if (audioCtx) {
        audioCtx.close();
        setAudioCtx(null);
      }
      setSoundPlaying(false);
    } else {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        setAudioCtx(ctx);
        setSoundPlaying(true);

        const playChimeNote = (freq: number, delay: number) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
          gain.gain.setValueAtTime(0, ctx.currentTime + delay);
          gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + delay + 0.1);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + 3.5);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + delay);
          osc.stop(ctx.currentTime + delay + 3.6);
        };

        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
        notes.forEach((freq, idx) => {
          playChimeNote(freq, idx * 0.4);
        });

        const interval = setInterval(() => {
          if (ctx.state === 'closed') {
            clearInterval(interval);
            return;
          }
          const randomNote = notes[Math.floor(Math.random() * notes.length)];
          playChimeNote(randomNote, 0);
        }, 3500);
      } catch {
        setSoundPlaying(false);
      }
    }
  };

  const currentAffirmation =
    lilyAffirmations[bloomCount % lilyAffirmations.length];

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="text-center pt-2 sm:pt-4 pb-6 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF4EE] text-[#3E5F4B] text-xs font-semibold tracking-wide mb-3 border border-[#D0E5D7] shadow-2xs">
          <span>🪷</span>
          <span>Theme 07 • The Lily Sanctuary & Soft Haven</span>
          <span>🤍</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#25332B] mb-3">
          The White Lily Garden
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#52665B] leading-relaxed">
          A serene sanctuary dedicated to white lilies, whisper-soft breezes, and peaceful breathing for {siteConfig.recipientName} 🪷✨
        </p>

        {/* Ambient Chimes Action */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={toggleSoundscape}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all shadow-sm ${
              soundPlaying
                ? 'bg-[#3E5F4B] text-white animate-pulse'
                : 'bg-white/90 text-[#3E5F4B] hover:bg-[#EBF4EE] border border-[#D0E5D7]'
            }`}
          >
            {soundPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{soundPlaying ? 'Soothing Chimes Playing 🎐' : 'Listen to Soft Lily Chimes 🎐'}</span>
          </button>
        </div>
      </section>

      {/* Featured Photo Envelope for Lily Sanctuary */}
      <section className="max-w-4xl mx-auto mb-10">
        <PookiePhotoEnvelope
          title="A Lily Garden Letter for Kakun 🪷✉️"
          subtitle="Click to unseal a serene reflection with your framed photograph"
          sealEmoji="🪷"
          envelopeColor="#F4FAF6"
          sealColor="#3E5F4B"
          photoSrc="/assets/gallery/photo-10.webp"
          photoCaption="Radiance and gentle poise 🪷✨"
          highlightText="The lily blooms in its own time without comparing itself to the rose."
          paragraph="Like a white lily, your spirit is calm, elegant, and sincere. You bring peace to noisy rooms simply by being gentle. May this sanctuary always remind you that the world is lucky to have your quiet, tender light."
          pookieBadge="Sacred Lily Envelope • Serenity 🤍"
          washiColor="rgba(208, 232, 215, 0.85)"
        />
      </section>

      {/* =========================================================================
          SECTION 1: THE BLOOMING LILY INTERACTIVE CARD
         ========================================================================= */}
      <section className="mb-14 max-w-3xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#F9FCFA] via-[#F2F8F4] to-[#EAF3EC] border border-[#D2E6D9] shadow-soft text-center relative overflow-hidden">
          <div className="absolute top-4 right-4 text-xs font-semibold text-[#5A7866] bg-white/80 px-3 py-1 rounded-full border border-[#D2E6D9]">
            Bloomed #{bloomCount} Times 🪷
          </div>

          {/* Large Blooming Flower Visual */}
          <div className="my-4">
            <span
              className={`text-6xl sm:text-7xl block filter drop-shadow-md transition-transform duration-700 select-none ${
                isBlooming ? 'scale-125 rotate-12' : 'scale-100 hover:scale-105'
              }`}
            >
              🪷
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#25332B] mb-3">
            Whisper of the Lily
          </h2>

          <div className="p-4 sm:p-6 bg-white/80 backdrop-blur-xs rounded-2xl border border-[#D2E6D9] shadow-2xs max-w-xl mx-auto mb-6">
            <p className="font-serif italic text-base sm:text-lg text-[#32483C] leading-relaxed">
              "{currentAffirmation}"
            </p>
          </div>

          <button
            onClick={handleBloomClick}
            className="px-6 py-2.5 rounded-full bg-[#3E5F4B] hover:bg-[#2F4A39] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md hover:scale-103 active:scale-95 flex items-center gap-2 mx-auto"
          >
            <span>Bloom Another Lily 🪷</span>
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE FOUR SACRED LILIES (LANGUAGE OF FLOWERS)
         ========================================================================= */}
      <section className="mb-16 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3E5F4B]">
            Floriography • Meanings Dedicated to You
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#25332B] mt-1">
            The Language of Lilies
          </h2>
          <p className="text-xs sm:text-sm text-[#52665B] mt-1">
            Every petal reflects a quiet truth about your gentle character 🤍
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {lilyFlowersList.map((flower) => (
            <div
              key={flower.id}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 shadow-soft hover:shadow-card-hover flex flex-col justify-between ${flower.bgColor} ${flower.borderColor}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{flower.pookieEmoji}</span>
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 border ${flower.borderColor} ${flower.textColor}`}>
                    {flower.meaning}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#25332B] mb-1">
                  {flower.name}
                </h3>
                <span className="text-xs italic text-[#7A9183] block mb-3 font-serif">
                  {flower.botanicalName}
                </span>

                <p className="font-sans text-xs sm:text-sm text-[#44554B] leading-relaxed">
                  {flower.whisper}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] text-[#7A9183]">
                <span>A quiet gift of peace</span>
                <span className="font-serif italic font-medium">For Kakun 🪷</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: A LILY POEM PAIRED WITH HER FRAMED PHOTO
         ========================================================================= */}
      <section className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-white/95 border border-[#D2E6D9] shadow-soft text-center paper-texture">
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
          <div className="w-36 sm:w-44 shrink-0 mx-auto">
            <div className="polaroid-frame p-2.5 pb-3 bg-white rounded-xl shadow-md rotate-[-2deg]">
              <div className="washi-tape bg-[#D0E8D7]" />
              <img
                src="/assets/gallery/photo-15.webp"
                alt="Kakun"
                className="aspect-square w-full object-cover rounded-lg mb-1"
              />
              <p className="font-handwriting text-center text-xs font-semibold text-[#3E5F4B]">
                Pure & gentle 🪷
              </p>
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <span className="text-3xl mb-2 block">🪷✨🤍</span>
            <h3 className="font-serif text-2xl font-semibold text-[#25332B] mb-2">
              To the One with the Lily-Soft Heart
            </h3>
            <div className="space-y-1.5 text-sm font-serif italic text-[#3E5F4B] leading-relaxed mb-3">
              <p>The lily does not worry when the winter wind is cold,</p>
              <p>It sleeps beneath the quiet soil, patiently and bold.</p>
              <p>And when the warm sun calls its name, it rises pure and white,</p>
              <p>A gentle gift of elegance, of softness, and of light.</p>
            </div>
            <p className="font-handwriting text-xl text-[#2F4A39]">
              Always stay as gentle and wonderful as you are, Kakun 🧸🪷
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
