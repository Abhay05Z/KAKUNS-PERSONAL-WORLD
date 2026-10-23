import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-[#E8DFD3] bg-[#F7F2EB] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 text-[#8C565F] font-serif text-lg font-medium">
            <Sparkles className="w-4 h-4 text-[#B47B82]" />
            <span>Dedicated to {siteConfig.recipientName}</span>
          </div>
          <p className="text-xs text-[#7A6B67] mt-1 max-w-sm">
            Created as an enduring, gentle world to wander through at your own pace.
          </p>
        </div>

        {/* Five Themes Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#645450]">
          <Link to="/" className="hover:text-[#8C565F] transition-colors">Home</Link>
          <Link to="/gallery" className="hover:text-[#8C565F] transition-colors">Gallery</Link>
          <Link to="/mindset" className="hover:text-[#8C565F] transition-colors">Mind & Personality</Link>
          <Link to="/perspective" className="hover:text-[#8C565F] transition-colors">The Way I See Her</Link>
          <Link to="/reminders" className="hover:text-[#8C565F] transition-colors">Things to Remember</Link>
          <Link to="/personal-space" className="hover:text-[#8C565F] transition-colors">Personal Space</Link>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-[#8C7A75]">
          <span>Crafted with care</span>
          <Heart className="w-3.5 h-3.5 text-[#B47B82] fill-[#FED7DF]" />
          <span>• Private & Offline</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-[#E8DFD3]/60 text-center text-[11px] text-[#A08883]">
        Interface preferences (such as favorites and ritual checks) are saved locally on your browser.
      </div>
    </footer>
  );
};
