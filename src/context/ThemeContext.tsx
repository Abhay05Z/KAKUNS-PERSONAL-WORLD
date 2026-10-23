import React, { createContext, useContext, useState, useEffect } from 'react';
import { SoftThemeMode } from '../types';
import { safeStorage } from '../utils';

export interface ThemeColors {
  id: SoftThemeMode;
  name: string;
  emoji: string;
  bgMain: string;
  bgCard: string;
  bgNav: string;
  accentSoft: string;
  accentMedium: string;
  accentDeep: string;
  textMain: string;
  textMuted: string;
  borderSoft: string;
  gradient1: string;
  gradient2: string;
  gradient3: string;
}

export const THEME_PALETTES: Record<SoftThemeMode, ThemeColors> = {
  blush: {
    id: 'blush',
    name: 'Blush & Rose',
    emoji: '🌸',
    bgMain: '#FFF5F7',
    bgCard: '#FFFFFF',
    bgNav: 'rgba(255, 245, 247, 0.94)',
    accentSoft: '#FED7DF',
    accentMedium: '#B47B82',
    accentDeep: '#8C565F',
    textMain: '#2C2727',
    textMuted: '#645450',
    borderSoft: '#FCD8DF',
    gradient1: '#FED7DF',
    gradient2: '#FFEBEF',
    gradient3: '#FDE4EA',
  },
  lily: {
    id: 'lily',
    name: 'White Lily & Sage',
    emoji: '🪷',
    bgMain: '#F2F8F4',
    bgCard: '#FFFFFF',
    bgNav: 'rgba(242, 248, 244, 0.94)',
    accentSoft: '#D0E8D7',
    accentMedium: '#5C8A6C',
    accentDeep: '#345E44',
    textMain: '#223328',
    textMuted: '#4B6354',
    borderSoft: '#CCE3D3',
    gradient1: '#D0E8D7',
    gradient2: '#EAF5EE',
    gradient3: '#C6E3CE',
  },
  lavender: {
    id: 'lavender',
    name: 'Muted Lavender',
    emoji: '💜',
    bgMain: '#F7F4FB',
    bgCard: '#FFFFFF',
    bgNav: 'rgba(247, 244, 251, 0.94)',
    accentSoft: '#E6DCF5',
    accentMedium: '#8C6BB3',
    accentDeep: '#613E8A',
    textMain: '#282133',
    textMuted: '#56486E',
    borderSoft: '#DECFF2',
    gradient1: '#E6DCF5',
    gradient2: '#F3ECFA',
    gradient3: '#DFD1F3',
  },
  vanilla: {
    id: 'vanilla',
    name: 'Vanilla Honey',
    emoji: '🍯',
    bgMain: '#FAF6ED',
    bgCard: '#FFFFFF',
    bgNav: 'rgba(250, 246, 237, 0.94)',
    accentSoft: '#EADBC1',
    accentMedium: '#A48455',
    accentDeep: '#705328',
    textMain: '#2D271E',
    textMuted: '#615340',
    borderSoft: '#E5D3B3',
    gradient1: '#EADBC1',
    gradient2: '#F6EEDB',
    gradient3: '#E2CEAE',
  },
};

interface ThemeContextType {
  theme: SoftThemeMode;
  colors: ThemeColors;
  setTheme: (newTheme: SoftThemeMode) => void;
  lilyPetals: boolean;
  setLilyPetals: (enabled: boolean) => void;
  toggleLilyPetals: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<SoftThemeMode>(() => {
    return safeStorage.get<SoftThemeMode>('pref_soft_theme', 'blush');
  });

  const [lilyPetals, setLilyPetalsState] = useState<boolean>(() => {
    return safeStorage.get<boolean>('pref_lily_petals', true);
  });

  const colors = THEME_PALETTES[theme] || THEME_PALETTES.blush;

  const setTheme = (newTheme: SoftThemeMode) => {
    setThemeState(newTheme);
    safeStorage.set('pref_soft_theme', newTheme);
  };

  const setLilyPetals = (enabled: boolean) => {
    setLilyPetalsState(enabled);
    safeStorage.set('pref_lily_petals', enabled);
  };

  const toggleLilyPetals = () => {
    setLilyPetals(!lilyPetals);
  };

  // Sync with document element and body
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-blush', 'theme-lily', 'theme-lavender', 'theme-vanilla');
    root.classList.add(`theme-${theme}`);
    document.body.style.backgroundColor = colors.bgMain;
    document.body.style.color = colors.textMain;
  }, [theme, colors]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors,
        setTheme,
        lilyPetals,
        setLilyPetals,
        toggleLilyPetals,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
