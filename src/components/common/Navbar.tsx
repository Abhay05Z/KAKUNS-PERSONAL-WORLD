import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sparkles,
  Camera,
  HeartHandshake,
  BookHeart,
  Feather,
  Home,
  Menu,
  X,
  Eye,
  EyeOff,
  ArrowLeft,
  Palette,
  Flower2
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { safeStorage } from '../../utils';
import { SoftThemeMode } from '../../types';

interface NavbarProps {
  lilyPetalsEnabled: boolean;
  onToggleLilyPetals: () => void;
  softTheme: SoftThemeMode;
  onChangeSoftTheme: (theme: SoftThemeMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lilyPetalsEnabled,
  onToggleLilyPetals,
  softTheme,
  onChangeSoftTheme,
}) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    return safeStorage.get('pref_reduced_motion', false);
  });

  const isHome = location.pathname === '/';

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
    safeStorage.set('pref_reduced_motion', reducedMotion);
  }, [reducedMotion]);

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };

  const navLinks = [
    { name: 'Gallery (49)', path: '/gallery', icon: Camera },
    { name: 'Poetry & Reels (56)', path: '/poetry', icon: Sparkles },
    { name: 'Lily Sanctuary', path: '/lily-sanctuary', icon: Flower2 },
    { name: 'Mind & Personality', path: '/mindset', icon: Sparkles },
    { name: 'Perspective', path: '/perspective', icon: HeartHandshake },
    { name: 'Reminders', path: '/reminders', icon: BookHeart },
    { name: 'Personal Space', path: '/personal-space', icon: Feather },
  ];

  const softThemes: { id: SoftThemeMode; name: string; emoji: string; preview: string }[] = [
    { id: 'blush', name: 'Blush & Rose', emoji: '🌸', preview: '#FED7DF' },
    { id: 'lily', name: 'White Lily & Sage', emoji: '🪷', preview: '#D0E5D7' },
    { id: 'lavender', name: 'Muted Lavender', emoji: '💜', preview: '#E6DCF3' },
    { id: 'vanilla', name: 'Vanilla Honey', emoji: '🍯', preview: '#EADBC1' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8DFD3]/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B47B82] rounded-lg p-1"
            aria-label="Return to theme selection screen"
          >
            <span className="w-8 h-8 rounded-full bg-[#FED7DF] flex items-center justify-center text-[#8C565F] group-hover:scale-105 transition-transform shadow-sm">
              <span className="text-base">🧸</span>
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#2C2727] group-hover:text-[#8C565F] transition-colors">
                {siteConfig.recipientName}'s Space
              </span>
              <span className="text-[11px] font-sans text-[#8C7A75] -mt-1 tracking-wide flex items-center gap-1">
                <span>a personal digital world</span>
                <span>🪷</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
          {!isHome && (
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 mr-1 text-xs font-medium uppercase tracking-wider text-[#8C565F] bg-[#FFEBEF] hover:bg-[#FED7DF] rounded-full transition-all border border-[#FED7DF]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Themes
            </Link>
          )}

          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#8C565F] font-semibold bg-[#FED7DF]/50 shadow-xs'
                    : 'text-[#4D3F3B] hover:text-[#8C565F] hover:bg-[#FAF0E6]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#8C565F]' : 'text-[#A08883]'}`} />
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#B47B82] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Lily Petals Toggle, Soft Theme Switcher, Reduced-motion, Mobile Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Lily Petals Toggle Button */}
          <button
            onClick={onToggleLilyPetals}
            className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 border ${
              lilyPetalsEnabled
                ? 'bg-[#EBF4EE] text-[#3E5F4B] border-[#D0E5D7] shadow-2xs'
                : 'bg-white/80 text-[#7A8C80] hover:bg-[#EBF4EE] border-[#E8DFD3]'
            }`}
            title="Toggle falling lily petals"
            aria-label="Toggle falling lily flower petals"
          >
            <span>🪷</span>
            <span className="hidden sm:inline">Lilies: {lilyPetalsEnabled ? 'ON' : 'OFF'}</span>
          </button>

          {/* Soft Theme Palette Picker */}
          <div className="relative">
            <button
              onClick={() => setThemePickerOpen(!themePickerOpen)}
              className="p-2 rounded-full text-[#645450] hover:text-[#8C565F] hover:bg-[#FAF0E6] transition-colors focus:outline-none"
              title="Change Soft Theme"
              aria-label="Change Soft Theme"
            >
              <Palette className="w-4 h-4" />
            </button>

            {themePickerOpen && (
              <div className="absolute right-0 top-12 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#E8DFD3] p-2 z-50 animate-fade-in text-xs">
                <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#A08883] block">
                  Select Soft Theme:
                </span>
                {softThemes.map((th) => (
                  <button
                    key={th.id}
                    onClick={() => {
                      onChangeSoftTheme(th.id);
                      setThemePickerOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl transition-colors ${
                      softTheme === th.id
                        ? 'bg-[#FED7DF]/60 font-semibold text-[#8C565F]'
                        : 'hover:bg-[#FAF6EE] text-[#4D3F3B]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{th.emoji}</span>
                      <span>{th.name}</span>
                    </div>
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-2xs"
                      style={{ backgroundColor: th.preview }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Reduced-Motion Accessibility Toggle */}
          <button
            onClick={toggleReducedMotion}
            className="p-2 rounded-full text-[#645450] hover:text-[#8C565F] hover:bg-[#FAF0E6] transition-colors focus:outline-none"
            title={reducedMotion ? "Enable animations" : "Reduce animations"}
            aria-label={reducedMotion ? "Enable animations" : "Reduce animations"}
          >
            {reducedMotion ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#4D3F3B] hover:bg-[#FAF0E6] focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#E8DFD3] bg-[#FAF7F2] px-4 pt-3 pb-6 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium flex items-center gap-3 ${
                isHome
                  ? 'bg-[#FED7DF] text-[#8C565F] font-semibold'
                  : 'text-[#4D3F3B] hover:bg-[#FAF0E6]'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Theme Selector (Home)</span>
            </Link>

            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-3 ${
                    isActive
                      ? 'bg-[#FED7DF] text-[#8C565F] font-semibold'
                      : 'text-[#4D3F3B] hover:bg-[#FAF0E6]'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#8C565F]" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E8DFD3]/70 text-xs text-[#8C7A75] flex items-center justify-between">
            <span>A little space, just for you 🪷</span>
            <span className="font-serif italic">Kakun 🧸</span>
          </div>
        </div>
      )}
    </header>
  );
};
