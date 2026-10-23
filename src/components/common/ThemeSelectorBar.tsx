import React from 'react';
import confetti from 'canvas-confetti';
import { useTheme, THEME_PALETTES } from '../../context/ThemeContext';
import { SoftThemeMode } from '../../types';

export const ThemeSelectorBar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes: { id: SoftThemeMode; name: string; emoji: string; confettiColors: string[] }[] = [
    {
      id: 'blush',
      name: 'Blush & Rose',
      emoji: '🌸',
      confettiColors: ['#FED7DF', '#FFEBEF', '#FBAEBF', '#FFFFFF'],
    },
    {
      id: 'lily',
      name: 'White Lily & Sage',
      emoji: '🪷',
      confettiColors: ['#FFFFFF', '#D0E8D7', '#EAF5EE', '#C6E3CE'],
    },
    {
      id: 'lavender',
      name: 'Muted Lavender',
      emoji: '💜',
      confettiColors: ['#E6DCF5', '#F3ECFA', '#DFD1F3', '#FFFFFF'],
    },
    {
      id: 'vanilla',
      name: 'Vanilla Honey',
      emoji: '🍯',
      confettiColors: ['#EADBC1', '#F6EEDB', '#FFFBF2', '#E2CEAE'],
    },
  ];

  const handleSelect = (th: typeof themes[0]) => {
    setTheme(th.id);
    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.3 },
      colors: th.confettiColors,
      disableForReducedMotion: true,
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 sm:p-2 rounded-2xl bg-white/70 backdrop-blur-md border border-black/10 shadow-sm max-w-xl mx-auto my-4">
      <span className="text-[11px] font-semibold text-[#8C7A75] uppercase tracking-wider px-2 flex items-center gap-1">
        <span>🎨</span>
        <span className="hidden sm:inline">Soft Theme:</span>
      </span>

      {themes.map((th) => {
        const isActive = theme === th.id;
        const palette = THEME_PALETTES[th.id];

        return (
          <button
            key={th.id}
            onClick={() => handleSelect(th)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 shadow-2xs ${
              isActive
                ? 'scale-105 shadow-md border'
                : 'bg-white/60 hover:bg-white text-[#4D3F3B] hover:scale-102 border border-transparent'
            }`}
            style={
              isActive
                ? {
                    backgroundColor: palette.accentSoft,
                    color: palette.accentDeep,
                    borderColor: palette.accentMedium,
                  }
                : {}
            }
          >
            <span>{th.emoji}</span>
            <span>{th.name}</span>
            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-current ml-0.5" />}
          </button>
        );
      })}
    </div>
  );
};
