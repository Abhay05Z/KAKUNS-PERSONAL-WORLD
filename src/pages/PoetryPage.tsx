import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Shuffle,
  ScrollText,
  Film,
  Maximize2,
  Music,
  Smile
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { poetryVideos, siteConfig } from '../data/siteConfig';
import { PoetryVideoItem } from '../types';

export const PoetryPage: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>('all');
  const [videos, setVideos] = useState<PoetryVideoItem[]>(poetryVideos);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isModalPlaying, setIsModalPlaying] = useState<boolean>(true);

  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Filter videos
  const filteredVideos = videos.filter((vid) => {
    if (selectedMood === 'all') return true;
    return vid.mood === selectedMood;
  });

  // Shuffle videos to present them "NOT IN A SEQUENCE"
  const shuffleVideos = () => {
    const shuffled = [...videos].sort(() => Math.random() - 0.5);
    setVideos(shuffled);
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#FED7DF', '#E6DCF3', '#DFCBA8'],
      disableForReducedMotion: true,
    });
  };

  const activeVideo: PoetryVideoItem | null =
    activeVideoIndex !== null && filteredVideos[activeVideoIndex]
      ? filteredVideos[activeVideoIndex]
      : null;

  // Modal navigation
  const handlePrev = useCallback(() => {
    if (activeVideoIndex === null) return;
    setActiveVideoIndex((prev) =>
      prev === null || prev === 0 ? filteredVideos.length - 1 : prev - 1
    );
    setIsModalPlaying(true);
  }, [activeVideoIndex, filteredVideos.length]);

  const handleNext = useCallback(() => {
    if (activeVideoIndex === null) return;
    setActiveVideoIndex((prev) =>
      prev === null || prev === filteredVideos.length - 1 ? 0 : prev + 1
    );
    setIsModalPlaying(true);
  }, [activeVideoIndex, filteredVideos.length]);

  const handleClose = useCallback(() => {
    setActiveVideoIndex(null);
    setPlayingVideoId(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeVideoIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === ' ' && modalVideoRef.current) {
        e.preventDefault();
        if (modalVideoRef.current.paused) {
          modalVideoRef.current.play();
          setIsModalPlaying(true);
        } else {
          modalVideoRef.current.pause();
          setIsModalPlaying(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideoIndex, handleClose, handlePrev, handleNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeVideoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeVideoIndex]);

  const triggerPookieLove = () => {
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#FED7DF', '#FFB6C1', '#FFD700', '#B47B82'],
      disableForReducedMotion: true,
    });
  };

  const moods = [
    { key: 'all', label: `All Poetry Reels (${videos.length})` },
    { key: 'soulful', label: 'Soulful & Deep 📜' },
    { key: 'nazm', label: 'Shayari & Nazms 🌸' },
    { key: 'aesthetic', label: 'Aesthetic Vibe ✨' },
    { key: 'whimsical', label: 'Pookie Sweetness 🧸' },
    { key: 'warm', label: 'Warm & Comforting ☕' },
  ];

  return (
    <div className="w-full">
      {/* Editorial Poetry Header */}
      <section className="text-center pt-2 sm:pt-4 pb-8 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FED7DF] text-[#8C565F] text-xs font-medium tracking-wide mb-3 border border-[#FBAEBf] shadow-2xs">
          <ScrollText className="w-3.5 h-3.5" />
          <span>Poetry & Spoken Reels • Dedicated to {siteConfig.recipientName} 🧸🎀</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#2C2727] mb-3">
          नफ़स नफ़स में नज़्में • Poetic Reels
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#645450] leading-relaxed max-w-xl mx-auto">
          Every video is a quiet stanza of spoken poetry, aesthetic moments, and heartfelt warmth.
          Click any reel to watch, listen, and let the verses sink in.
        </p>

        {/* Urdu/Hindi Hero Couplet */}
        <div className="my-5 p-5 rounded-2xl bg-[#FFF5F5] border border-[#FED7DF] max-w-xl mx-auto shadow-2xs">
          <p className="font-serif text-lg sm:text-xl text-[#8C565F] leading-relaxed font-semibold">
            "तेरी सादगी में भी एक गज़ल सी रवानगी है, <br />
            तू जो मुस्कुरा दे तो हर लम्हा सुहाना हो जाए..."
          </p>
          <span className="font-handwriting text-base sm:text-lg text-[#A08883] mt-2 block">
            ~ Dedicated to the sweetest pookie, Kakun 🧸✨
          </span>
        </div>

        {/* Action Controls: Shuffle & Sound advice */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={shuffleVideos}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8C565F] hover:bg-[#72434B] text-white text-xs sm:text-sm font-medium transition-all shadow-sm hover:scale-103"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Shuffle Reels (Non-Sequence) 🔀</span>
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#E8DFD3] text-xs font-medium text-[#4D3F3B] hover:bg-[#FAF0E6] transition-colors"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#8C565F]" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-600" />}
            <span>Sound: {isMuted ? 'Muted (Tap to unmute)' : 'Active 🔊'}</span>
          </button>
        </div>
      </section>

      {/* Mood Filter Tabs */}
      <section className="mb-8 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
        {moods.map((m) => {
          const isActive = selectedMood === m.key;
          return (
            <button
              key={m.key}
              onClick={() => setSelectedMood(m.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? 'bg-[#8C565F] text-white shadow-xs'
                  : 'bg-white/80 text-[#645450] hover:bg-[#FED7DF]/60 border border-[#E8DFD3]'
              }`}
            >
              {m.label}
            </button>
          );
        })}
      </section>

      {/* Video Reels Grid — 9:16 Vertical Reel Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVideos.map((video, idx) => (
          <div
            key={video.id}
            onClick={() => setActiveVideoIndex(idx)}
            className="group relative rounded-2xl bg-white border border-[#E8DFD3] shadow-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            role="button"
            tabIndex={0}
            aria-label={`Play poetry reel: ${video.title}`}
          >
            {/* Top Washi Tape & Pookie Badge */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1">
                <span>{video.pookieEmoji || '🧸'}</span>
                <span>Reel {idx + 1}</span>
              </span>
            </div>

            <div className="absolute top-3 right-3 z-20">
              <span className="w-7 h-7 rounded-full bg-white/80 backdrop-blur-xs text-[#8C565F] flex items-center justify-center shadow-xs text-xs">
                ✨
              </span>
            </div>

            {/* Video Canvas Container (9:16 Aspect Ratio) */}
            <div className="relative aspect-[9/15] w-full bg-[#1A1818] overflow-hidden">
              <img
                src={video.thumbnailPath}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Dark gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-13 h-13 rounded-full bg-white/90 text-[#8C565F] flex items-center justify-center shadow-lg transform group-hover:scale-115 transition-transform duration-300">
                  <Play className="w-6 h-6 fill-[#8C565F] ml-1" />
                </span>
              </div>

              {/* Bottom Poetry Overlay inside the Reel */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-white pointer-events-none z-10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#FED7DF] block mb-1">
                  नज़्म • Poetry
                </span>
                <p className="font-serif text-sm font-semibold text-white/95 leading-snug line-clamp-2 mb-1">
                  "{video.couplet}"
                </p>
                <p className="font-sans text-[11px] text-white/75 line-clamp-1 italic">
                  {video.translation}
                </p>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="p-3 bg-[#FAF7F2] border-t border-[#E8DFD3] flex items-center justify-between text-xs">
              <span className="font-serif text-[#2C2727] font-medium truncate max-w-[170px]">
                {video.title.split('•')[0]}
              </span>
              <span className="text-[11px] text-[#8C565F] font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Watch
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* =========================================================================
          THEATER / CINEMA VIDEO MODAL
         ========================================================================= */}
      {activeVideo && activeVideoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fade-in"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh] border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-30 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Prev Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Previous reel"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right/Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-3 md:right-[380px] top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Next reel"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Video Player Canvas */}
            <div className="flex-1 bg-black flex items-center justify-center min-h-[350px] sm:min-h-[520px] relative">
              <video
                ref={modalVideoRef}
                src={activeVideo.videoPath}
                autoPlay
                loop
                playsInline
                muted={isMuted}
                controls
                className="max-h-[80vh] w-auto max-w-full object-contain"
                onPlay={() => setIsModalPlaying(true)}
                onPause={() => setIsModalPlaying(false)}
              />

              {/* Sound toggle overlay */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 hover:bg-black/80 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-[#FED7DF]" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                <span>{isMuted ? 'Tap for Sound' : 'Sound On'}</span>
              </button>
            </div>

            {/* Poetry Sidebar & Pookie Hugs */}
            <div className="w-full md:w-88 lg:w-96 p-6 sm:p-7 flex flex-col justify-between bg-[#FAF7F2] border-t md:border-t-0 md:border-l border-[#E8DFD3] overflow-y-auto">
              <div>
                <div className="flex items-center justify-between text-xs text-[#8C565F] font-semibold uppercase tracking-wider mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FED7DF] flex items-center gap-1">
                    <span>{activeVideo.pookieEmoji || '🧸'}</span>
                    <span>Poetic Reel</span>
                  </span>
                  <span>{activeVideoIndex + 1} of {filteredVideos.length}</span>
                </div>

                <h2 className="font-serif text-2xl font-semibold text-[#2C2727] mb-3">
                  {activeVideo.title}
                </h2>

                {/* Poetry Card */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#FFF5F5] to-[#FED7DF]/40 border border-[#FED7DF] mb-4 shadow-2xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C565F] block mb-1">
                    📜 ख़ास नज़्म • The Verse
                  </span>
                  <p className="font-serif text-base sm:text-lg text-[#382D2A] leading-relaxed font-semibold mb-2">
                    "{activeVideo.couplet}"
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#645450] italic leading-relaxed">
                    {activeVideo.translation}
                  </p>
                </div>

                {/* Sweet Pookie Note */}
                <div className="p-3 bg-white/80 rounded-xl border border-[#E8DFD3] text-xs text-[#7A6B67] flex items-center gap-2">
                  <span className="text-xl">🧸</span>
                  <span>Dedicated with genuine care for Kakun 🎀✨</span>
                </div>
              </div>

              {/* Bottom Actions: Cuddle / Love button */}
              <div className="pt-6 border-t border-[#E8DFD3] space-y-3">
                <button
                  onClick={triggerPookieLove}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#8C565F] hover:bg-[#72434B] text-white text-xs font-medium flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Send a Teddy Hug & Confetti 🧸💖</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-[#A08883]">
                  <span>Use ← and → keys to browse</span>
                  <button onClick={handleClose} className="hover:underline font-medium text-[#8C565F]">
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
