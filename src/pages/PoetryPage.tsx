import React, { useState, useRef } from 'react';
import {
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Mail,
  Heart,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Film,
  BookOpen,
  Filter
} from 'lucide-react';
import { videoItems, poetryEnvelopes, siteConfig } from '../data/siteConfig';
import { VideoItem, PoetryEnvelopeItem } from '../types';

export const PoetryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeEnvelope, setActiveEnvelope] = useState<PoetryEnvelopeItem | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);
  const [isPlayingMap, setIsPlayingMap] = useState<Record<string, boolean>>({});
  const [isMutedMap, setIsMutedMap] = useState<Record<string, boolean>>({});

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const toggleVideoPlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setIsPlayingMap((prev) => ({ ...prev, [id]: true }));
      }).catch(() => {});
    } else {
      video.pause();
      setIsPlayingMap((prev) => ({ ...prev, [id]: false }));
    }
  };

  const toggleVideoMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;

    video.muted = !video.muted;
    setIsMutedMap((prev) => ({ ...prev, [id]: video.muted }));
  };

  const filteredVideos = videoItems.filter((vid) => {
    if (selectedCategory === 'all') return true;
    return vid.category === selectedCategory;
  });

  const categories = [
    { key: 'all', label: `All Reels (56) 🎬` },
    { key: 'poetry', label: 'Poetry Verses 🧸' },
    { key: 'moments', label: 'Soft Moments 🌸' },
    { key: 'candid', label: 'Candid Joy 🎀' },
    { key: 'aesthetic', label: 'Aesthetic Light ✨' },
    { key: 'vibes', label: 'Cozy Vibes 🍓' },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="text-center pt-2 sm:pt-4 pb-8 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFEBEF] text-[#8C565F] text-xs font-medium tracking-wide mb-3 border border-[#FED7DF]">
          <span className="text-sm">🧸</span>
          <span>Poetry & Video Vault • 56 Reels & Wax Envelopes</span>
          <span className="text-sm">🎀</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2C2727] mb-3">
          Verses, Reels & Envelopes
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#645450] leading-relaxed">
          All 56 videos paired with lyrical poetry, alongside interactive wax-sealed envelopes that open with poems and photographs.
        </p>

        <p className="font-handwriting text-xl sm:text-2xl text-[#8C565F] mt-2">
          "Where every reel tells a quiet story and every envelope holds a rhyme 🧸✨"
        </p>
      </section>

      {/* =========================================================================
          SECTION 1: INTERACTIVE POETRY ENVELOPES
         ========================================================================= */}
      <section className="mb-16 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C565F]">
              <span>💌</span>
              <span>Wax-Sealed Envelopes</span>
              <span>🧸</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2727]">
              Poetry Envelopes for You
            </h2>
          </div>
          <span className="text-xs text-[#8C7A75] bg-white/70 px-3 py-1 rounded-full border border-[#E8DFD3]">
            Click to unseal
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#645450] mb-6">
          Each envelope is stamped with a wax seal. Click any envelope to break the seal, unfold the parchment poem, and view the associated photograph.
        </p>

        {/* Envelopes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {poetryEnvelopes.map((env) => (
            <div
              key={env.id}
              onClick={() => setActiveEnvelope(env)}
              className="group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-soft hover:shadow-card-hover flex flex-col justify-between"
              style={{
                backgroundColor: env.envelopeColor,
                borderColor: `${env.waxSealColor}30`,
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveEnvelope(env);
                }
              }}
            >
              {/* Envelope flap decor */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8C565F] bg-white/70 px-2.5 py-1 rounded-full">
                  Poetry Letter
                </span>
                <span className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {env.pookieEmoji}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-[#2C2727] mb-2 group-hover:text-[#8C565F] transition-colors">
                  {env.title}
                </h3>
                <p className="text-xs text-[#4D3F3B] italic line-clamp-2 mb-4 font-serif">
                  "{env.verses[0]} {env.verses[1]}"
                </p>
              </div>

              <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs font-medium text-[#8C565F]">
                <span>Open Envelope ✉️</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ALL 56 VIDEO REELS THEATRE
         ========================================================================= */}
      <section className="mb-16 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C565F]">
              <Film className="w-3.5 h-3.5" />
              <span>Video Reels Collection (All 56 Videos)</span>
              <span>🧸🎬</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2727]">
              Poetry in Motion
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#8C565F] text-white shadow-xs'
                      : 'bg-white/80 text-[#645450] hover:bg-[#FED7DF] border border-[#E8DFD3]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Reels Grid - Responsive and dynamic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVideos.map((vid, idx) => {
            const isPlaying = isPlayingMap[vid.id] || false;
            const isMuted = isMutedMap[vid.id] ?? true;

            return (
              <div
                key={vid.id}
                className="rounded-2xl overflow-hidden bg-white/95 border border-[#E8DFD3] shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Video Player Box */}
                <div className="relative aspect-9/16 sm:aspect-3/4 bg-black overflow-hidden rounded-t-2xl">
                  <video
                    ref={(el) => (videoRefs.current[vid.id] = el)}
                    src={vid.videoPath}
                    playsInline
                    loop
                    muted={isMuted}
                    preload="metadata"
                    className="w-full h-full object-cover"
                    onClick={() => toggleVideoPlay(vid.id)}
                  />

                  {/* Play / Pause Center Overlay Button */}
                  <button
                    onClick={() => toggleVideoPlay(vid.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all text-white focus:outline-none"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {!isPlaying && (
                      <span className="p-3.5 rounded-full bg-white/90 text-[#8C565F] shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </span>
                    )}
                  </button>

                  {/* Top-Right Sound & Fullscreen controls */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                    <button
                      onClick={(e) => toggleVideoMute(vid.id, e)}
                      className="p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-xs transition-colors"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveVideoModal(vid);
                      }}
                      className="p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-xs transition-colors"
                      title="Enlarge Video"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Pookie Badge */}
                  <div className="absolute bottom-2.5 left-2.5 z-10">
                    <span className="px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-xs text-[11px] text-white flex items-center gap-1">
                      <span>{vid.pookieEmoji}</span>
                      <span>#{idx + 1}</span>
                    </span>
                  </div>
                </div>

                {/* Video Info & Poetry Snippet */}
                <div className="p-4 flex flex-col justify-between flex-1 bg-[#FCFAF7]">
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#2C2727] mb-1">
                      {vid.title}
                    </h4>
                    <p className="font-serif italic text-xs text-[#645450] line-clamp-2">
                      {vid.poetrySnippet}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#F0E6D8] flex items-center justify-between text-[11px] text-[#A08883]">
                    <span className="capitalize">{vid.category}</span>
                    <button
                      onClick={() => toggleVideoPlay(vid.id)}
                      className="text-[#8C565F] font-semibold hover:underline"
                    >
                      {isPlaying ? 'Pause' : 'Play 🧸'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          ENVELOPE MODAL (Detailed Unfolded Poem & Photo)
         ========================================================================= */}
      {activeEnvelope && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveEnvelope(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-2xl w-full bg-[#FCFAF7] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#DFCBA8] paper-texture max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveEnvelope(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF6EE] text-[#8C565F] hover:bg-[#FED7DF] transition-colors"
              aria-label="Close poem envelope"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Envelope Header */}
            <div className="text-center mb-6">
              <span className="text-4xl mb-2 inline-block animate-bounce">
                {activeEnvelope.pookieEmoji}
              </span>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#8C565F] mb-1">
                Wax-Sealed Poetry Envelope
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2727]">
                {activeEnvelope.title}
              </h2>
              {activeEnvelope.dedication && (
                <p className="text-xs text-[#8C7A75] italic mt-1 font-serif">
                  {activeEnvelope.dedication}
                </p>
              )}
            </div>

            {/* Poem Verses */}
            <div className="my-6 p-6 sm:p-8 bg-white/80 rounded-2xl border border-[#EADBC1] shadow-inner text-center space-y-2">
              {activeEnvelope.verses.map((verse, vIdx) => (
                <p key={vIdx} className="font-serif italic text-base sm:text-lg text-[#2C2727] leading-relaxed">
                  {verse}
                </p>
              ))}
            </div>

            {/* Associated Photo */}
            {activeEnvelope.imagePath && (
              <div className="mt-6 flex flex-col items-center">
                <span className="text-xs font-semibold text-[#8C7A75] uppercase tracking-wider mb-2">
                  Captured Frame Included 📸
                </span>
                <div className="polaroid-frame p-3 bg-white rounded-md shadow-md max-w-xs w-full">
                  <div className="aspect-square overflow-hidden rounded-sm bg-[#FAF0E6]">
                    <img
                      src={activeEnvelope.imagePath}
                      alt={activeEnvelope.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-handwriting text-center text-lg text-[#8C565F] mt-2">
                    For Kakun 🧸💖
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-[#EADBC1] text-center">
              <button
                onClick={() => setActiveEnvelope(null)}
                className="px-6 py-2 rounded-full bg-[#8C565F] text-white text-xs font-medium hover:bg-[#72434B] transition-colors"
              >
                Close & Seal Envelope 💌
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          FOCUSED VIDEO MODAL
         ========================================================================= */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveVideoModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-md w-full bg-[#1A1A1A] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-9/16 w-full bg-black flex items-center justify-center">
              <video
                src={activeVideoModal.videoPath}
                autoPlay
                controls
                playsInline
                loop
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 bg-[#262626] text-white">
              <div className="flex items-center gap-2 text-xs text-[#FED7DF] font-semibold mb-1">
                <span>{activeVideoModal.pookieEmoji}</span>
                <span>{activeVideoModal.title}</span>
              </div>
              <p className="font-serif italic text-sm text-[#E0D8D5]">
                {activeVideoModal.poetrySnippet}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
