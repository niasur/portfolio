import React from 'react';
import { NavTab } from './Navbar';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  isScrolled?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ activeTab, onSelectTab, isScrolled = false }) => {
  const tabs: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'certificate', label: 'Certificate' },
  ];

  const handleNavClick = (tabId: NavTab) => {
    if (tabId === 'certificate') {
      window.open(PERSONAL_INFO.certificateDriveUrl, '_blank');
      return;
    }
    onSelectTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Footer hanya muncul saat scroll di halaman selain Home (di Home navigasi selalu stay di navbar)
  const isFooterVisible = activeTab !== 'home' && isScrolled;

  return (
    <>
      {/* Spacer so page content at the very bottom is never covered */}
      {activeTab !== 'home' && <div className="h-20 pointer-events-none" />}

      {/* Fixed Bottom Navigation Footer - Only Home | About | Portfolio | Certificate */}
      <footer
        className={`fixed bottom-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-md border-t border-[#2b2b2c] py-3.5 px-4 no-print shadow-[0_-4px_25px_rgba(0,0,0,0.7)] transition-all duration-300 ease-in-out ${
          isFooterVisible
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          {/* Only the Navigation Tabs: Home | About | Portfolio | Certificate */}
          <nav className="flex items-center justify-center gap-6 sm:gap-9 md:gap-11 text-sm font-semibold">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleNavClick(tab.id)}
                  className={`transition-colors py-1 px-1.5 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'nav-link-active text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </footer>
    </>
  );
};
