import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { TeddyWidget } from './TeddyWidget';
import { LilyPetals } from './LilyPetals';
import { safeStorage } from '../../utils';
import { SoftThemeMode } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  const [lilyPetalsEnabled, setLilyPetalsEnabled] = useState<boolean>(() => {
    return safeStorage.get('pref_lily_petals', true);
  });

  const [softTheme, setSoftTheme] = useState<SoftThemeMode>(() => {
    return safeStorage.get<SoftThemeMode>('pref_soft_theme', 'blush');
  });

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Persist lily petals preference
  useEffect(() => {
    safeStorage.set('pref_lily_petals', lilyPetalsEnabled);
  }, [lilyPetalsEnabled]);

  // Apply soft theme class to html root
  useEffect(() => {
    safeStorage.set('pref_soft_theme', softTheme);
    const root = document.documentElement;
    root.classList.remove('theme-lily', 'theme-lavender', 'theme-vanilla');
    if (softTheme !== 'blush') {
      root.classList.add(`theme-${softTheme}`);
    }
  }, [softTheme]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2727] relative selection:bg-[#FED7DF] selection:text-[#8C565F]">
      {/* Delicate background ambient gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-40">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FED7DF] rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#E6DCF3] rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-[#EBF4EE] rounded-full blur-3xl" />
      </div>

      {/* Floating Lily Petals drifting softly */}
      <LilyPetals enabled={lilyPetalsEnabled} />

      <Navbar
        lilyPetalsEnabled={lilyPetalsEnabled}
        onToggleLilyPetals={() => setLilyPetalsEnabled(!lilyPetalsEnabled)}
        softTheme={softTheme}
        onChangeSoftTheme={setSoftTheme}
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {children}
      </main>

      <Footer />
      {/* Interactive Cute Teddy Companion */}
      <TeddyWidget />
    </div>
  );
};
