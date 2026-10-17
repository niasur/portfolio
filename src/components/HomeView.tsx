import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profileImg from '../assets/images/nia_surniati.jpg';

const ROLES = [
  'Fullstack Developer Enthusiast',
  'S1 Sistem Informasi UNIPI (IPK 3.94)',
  'Mobile & Web Developer (Flutter & React)',
  'MSIB Kampus Merdeka Batch 7 Graduate',
  'Certified Accounting & Business Analyst',
];

export const HomeView: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect
  useEffect(() => {
    const fullText = ROLES[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, isDeleting ? 40 : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 md:py-20">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* Left Text Column */}
          <div className="flex-1 text-center md:text-left space-y-4">
            
            {/* Greeting */}
            <p className="text-[#2ec4b6] font-medium text-base sm:text-lg tracking-wide">
              Hello World, I'm
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.name} <span className="wave-hand">👋🏻</span>
            </h1>

            {/* Typewriter role */}
            <div className="py-1">
              <span className="text-lg sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-teal-200 to-[#2ec4b6]">
                {currentText}
              </span>
              <span className="typewrite-cursor" />
            </div>

            {/* Welcome intro */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0 pt-2">
              Welcome to My personal website.
            </p>

          </div>

          {/* Right Column: Avatar Photo with Green Border */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative group">
              <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full p-1.5 border-4 border-[#2ec4b6] shadow-[0_0_35px_rgba(46,196,182,0.25)] transition-all duration-300 group-hover:shadow-[0_0_45px_rgba(46,196,182,0.4)]">
                <img
                  src={profileImg}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
