import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Cpu, HeartHandshake, Wrench, CheckCircle2, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hard' | 'soft' | 'tools'>('hard');

  return (
    <section id="keahlian" className="py-20 sm:py-28 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
              Kapasitas & Kemampuan
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Keahlian Teknis & Personal
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Kombinasi solid antara software engineering modern, analisis sistem bisnis, pengujian otomatis, serta soft skill kolaboratif.
            </p>
          </div>

          {/* Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('hard')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'hard'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Hard Skills
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'soft'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Soft Skills
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'tools'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Software & Tools
            </button>
          </div>
        </div>

        {/* Tab 1: Hard Skills Grid */}
        {activeTab === 'hard' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILLS_DATA.hardSkills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex items-center justify-between gap-3"
              >
                <div>
                  <div className="text-sm font-semibold text-white tracking-tight">
                    {skill.name}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {skill.category}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-cyan-400 font-medium">
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Soft Skills Grid */}
        {activeTab === 'soft' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SKILLS_DATA.softSkills.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Software & Tools */}
        {activeTab === 'tools' && (
          <div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 mb-6 text-sm text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Ekosistem Perangkat Lunak & Lingkungan Pengembangan:</span> Diperoleh melalui perkuliahan S1 Sistem Informasi UNIPI, pelatihan intensif MSIB, sertifikasi profesi BNSP, serta riset mandiri.
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {SKILLS_DATA.softwareTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all text-center"
                >
                  <span className="text-xs font-mono text-cyan-400 block mb-0.5">
                    {tool.category}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
