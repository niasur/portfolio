import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export type NavTab = 'home' | 'about' | 'portfolio' | 'certificate';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  isScrolled?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab, isScrolled = false }) => {
  // Navigation tabs (text only)
  const tabs: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'certificate', label: 'Certificate' },
  ];

  // Pada halaman Home, navigasi tetap stay di navbar walaupun di-scroll
  const shouldTransitionToFooter = activeTab !== 'home' && isScrolled;

  const handleNavClick = (tabId: NavTab) => {
    if (tabId === 'certificate') {
      window.open(PERSONAL_INFO.certificateDriveUrl, '_blank');
      return;
    }
    onSelectTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#121212]/95 backdrop-blur-md border-b border-[#2b2b2c] py-3 sm:py-4 transition-all no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-2.5">
        
        {/* Top Header Row: Brand (left) | Desktop Nav (center) | Social Icons (right) */}
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Name linking to Canva CV */}
          <a
            href={PERSONAL_INFO.canvaCvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-left group focus:outline-none cursor-pointer flex items-center gap-2 sm:gap-2.5"
            title="Buka CV di Canva"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ec4b6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2ec4b6] shadow-[0_0_10px_#2ec4b6]"></span>
            </span>
            <span className="text-base sm:text-xl font-bold text-[#2ec4b6] hover:text-[#38d9c7] tracking-tight transition-colors">
              {PERSONAL_INFO.name.replace(/\s+/g, '')}
            </span>
          </a>

          {/* Center: Desktop Navigation Links (stay in navbar on Home, transitions to Footer when scrolling on other pages) */}
          <nav
            className={`hidden md:flex items-center gap-7 lg:gap-9 text-sm font-semibold transition-all duration-300 ${
              shouldTransitionToFooter
                ? 'opacity-0 pointer-events-none -translate-y-2'
                : 'opacity-100 pointer-events-auto translate-y-0'
            }`}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleNavClick(tab.id)}
                className={`transition-colors py-1 cursor-pointer ${
                  activeTab === tab.id
                    ? 'nav-link-active text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right: Round Social Media Icons - Always visible on BOTH Mobile & Desktop */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* GitHub */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black border border-slate-700/80 flex items-center justify-center text-white hover:scale-110 hover:border-slate-500 transition-all shadow-sm"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 transition-all shadow-sm"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
            </a>

            {/* Instagram */}
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:scale-110 transition-all shadow-sm"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </a>
          </div>

        </div>

        {/* Mobile Navigation Links: Visible at top of page (and always on Home), collapses when scrolling on other pages */}
        <nav
          className={`md:hidden flex items-center justify-around w-full pt-2.5 border-t border-[#2b2b2c]/60 text-sm font-semibold transition-all duration-300 overflow-hidden ${
            shouldTransitionToFooter
              ? 'max-h-0 opacity-0 pt-0 border-transparent pointer-events-none'
              : 'max-h-12 opacity-100 pointer-events-auto'
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleNavClick(tab.id)}
              className={`transition-colors py-1 px-1.5 cursor-pointer ${
                activeTab === tab.id
                  ? 'nav-link-active text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
};
