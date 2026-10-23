import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { TeddyWidget } from './TeddyWidget';
import { LilyPetals } from './LilyPetals';
import { useTheme } from '../../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const { theme, colors, lilyPetals, toggleLilyPetals, setTheme } = useTheme();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className="min-h-screen flex flex-col relative transition-colors duration-500 selection:bg-[#FED7DF] selection:text-[#8C565F]"
      style={{
        backgroundColor: colors.bgMain,
        color: colors.textMain,
      }}
    >
      {/* Ambient background glowing circles matching the active soft theme */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-50 transition-all duration-700">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl transition-colors duration-700"
          style={{ backgroundColor: colors.gradient1 }}
        />
        <div
          className="absolute top-1/3 -right-32 w-96 h-96 rounded-full blur-3xl transition-colors duration-700"
          style={{ backgroundColor: colors.gradient2 }}
        />
        <div
          className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-700"
          style={{ backgroundColor: colors.gradient3 }}
        />
      </div>

      {/* Floating Lily Petals drifting softly across the screen */}
      <LilyPetals enabled={lilyPetals} />

      <Navbar
        lilyPetalsEnabled={lilyPetals}
        onToggleLilyPetals={toggleLilyPetals}
        softTheme={theme}
        onChangeSoftTheme={setTheme}
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 relative z-10">
        {children}
      </main>

      <Footer />
      {/* Interactive Cute Teddy Companion */}
      <TeddyWidget />
    </div>
  );
};
