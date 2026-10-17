import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { Code2, ArrowUpRight } from 'lucide-react';

interface PortfolioViewProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Fullstack & Web', 'Mobile App', 'Game Development', 'Backend & API', 'UI/UX & Desain', 'Data & Riset'];

  const filteredProjects = PROJECTS.filter((proj) => {
    return activeCategory === 'Semua' || proj.category === activeCategory;
  });

  return (
    <div className="py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Header matching Image 1: Rata Tengah (Center Aligned) */}
      <div className="mb-8 text-center max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
          Past Project Experience
        </h2>
        <p className="text-sm sm:text-base text-[#2ec4b6] mt-2 font-medium">
          Explore the projects I've worked on so far
        </p>
      </div>

      {/* Filter Tabs: Rata Tengah */}
      <div className="flex items-center justify-start sm:justify-center gap-1.5 pb-4 mb-8 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#2ec4b6] text-[#121212] shadow-sm'
                : 'bg-[#1e1e1f] text-slate-400 hover:text-white border border-[#383838]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((proj) => {
          // Direct project URL fallback to Nia's GitHub
          const projectUrl = proj.demoUrl || proj.link || proj.github || 'https://github.com/niasur';

          return (
            <div
              key={proj.id}
              className="group rounded-xl bg-[#1e1e1f] border border-[#2b2b2c] hover:border-[#2ec4b6] transition-all duration-300 flex flex-col overflow-hidden hover:shadow-lg hover:shadow-[#2ec4b6]/15"
            >
              {/* 1. Gambar Proyek: Gambar diam saja saat diklik (navigasi langsung menggunakan tombol panah di kanan bawah) */}
              <div className="aspect-video w-full bg-[#121212] overflow-hidden relative block select-none">
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-[#121212] to-[#1e1e1f] flex items-center justify-center border-b border-[#2b2b2c]">
                    <Code2 className="w-8 h-8 text-[#2ec4b6]" />
                  </div>
                )}
              </div>

              {/* 2. Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                {/* Bagian Teks Penjelasan: Statis tanpa animasi dan tanpa tooltip */}
                <div
                  onClick={() => onSelectProject(proj)}
                  className="cursor-pointer space-y-1"
                >
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-[11px] text-[#2ec4b6] font-mono">
                    {proj.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                {/* 3. Row Sejajar: Tools yang digunakan di kiri & Tanda Panah Proyek di kanan */}
                <div className="flex items-center justify-between gap-2 pt-3 border-t border-[#2b2b2c]">
                  {/* Tools / Tech Stack Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 overflow-hidden">
                    {proj.technologies.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-[#2ec4b6]">
                        #{t}
                      </span>
                    ))}
                    {proj.technologies.length > 3 && (
                      <span className="text-[10px] font-mono text-slate-500">
                        +{proj.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Tanda Panah Kecil untuk Lihat Proyek Langsung */}
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    title={`Kunjungi Website / Proyek: ${projectUrl}`}
                    aria-label={`Kunjungi ${proj.title}`}
                    className="p-1.5 rounded-lg bg-[#282829] hover:bg-[#2ec4b6] text-slate-300 hover:text-[#121212] border border-[#383838] hover:border-[#2ec4b6] transition-all flex items-center justify-center shrink-0 cursor-pointer shadow-xs group/link"
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
