import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, X, MessageCircleHeart } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const TeddyWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogueIndex, setDialogueIndex] = useState(0);

  const teddyQuotes = [
    `Hey ${siteConfig.recipientName}! I'm your little digital teddy bear 🧸💖 Here to keep you company!`,
    "Sending you the biggest, softest warm hug right now! 🥺✨",
    "Don't forget: rest is allowed, and small steps always count! 🌸🍓",
    "Did you explore all 56 video reels and the poetry envelopes yet? 🎀🎬",
    "You have the sweetest smile, never forget it! 🧸🧁",
    "Drink some water, relax your shoulders, and breathe softly! 💫🍰",
    `Pookie power activated for ${siteConfig.recipientName}! 🧸🎀✨`,
  ];

  const handleTeddyClick = () => {
    // Next quote
    setDialogueIndex((prev) => (prev + 1) % teddyQuotes.length);
    setIsOpen(true);

    // Burst tiny pastel hearts
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { x: 0.9, y: 0.9 },
      colors: ['#FED7DF', '#FFEBEF', '#F4EBD9', '#E6DCF3'],
      disableForReducedMotion: true,
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Speech Bubble */}
      {isOpen && (
        <div className="mb-3 max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#FED7DF] animate-fade-in relative text-xs text-[#4D3F3B] leading-relaxed">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-[#A08883] hover:text-[#8C565F] p-0.5"
            aria-label="Close teddy note"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 font-bold text-[#8C565F] mb-1">
            <span className="text-sm">🧸</span>
            <span>Teddy's Note:</span>
          </div>
          <p className="font-sans pr-2">{teddyQuotes[dialogueIndex]}</p>
          <div className="mt-2 pt-2 border-t border-[#F2ECE4] flex items-center justify-between text-[10px] text-[#A08883]">
            <span>Tap teddy for another hug!</span>
            <span className="text-pink-500 font-semibold">💖</span>
          </div>
          {/* Speech bubble pointer */}
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-b border-r border-[#FED7DF] transform rotate-45" />
        </div>
      )}

      {/* Interactive Teddy Button */}
      <button
        onClick={handleTeddyClick}
        className="group relative p-3 bg-gradient-to-tr from-[#FFF5F5] to-[#FED7DF] hover:from-[#FED7DF] hover:to-[#FBAEBF] border-2 border-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C565F]"
        title="Tap the cute teddy for a hug!"
        aria-label="Teddy companion widget"
      >
        <span className="text-3xl block filter drop-shadow-xs group-hover:rotate-12 transition-transform duration-300">
          🧸
        </span>
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#8C565F] text-[9px] text-white font-bold animate-pulse">
          ✨
        </span>
      </button>
    </div>
  );
};
