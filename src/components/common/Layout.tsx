import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2727] relative selection:bg-[#FED7DF] selection:text-[#8C565F]">
      {/* Delicate background ambient gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-40">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FED7DF] rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#E6DCF3] rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-[#FEEDDE] rounded-full blur-3xl" />
      </div>

      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};
