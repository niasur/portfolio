import React, { useState } from 'react';
import { EXPERIENCES, ExperienceItem } from '../data/portfolioData';
import { GraduationCap, Briefcase, Users, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { useActivity } from '../context/ActivityContext';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Semua' | 'Pendidikan' | 'Pekerjaan' | 'Organisasi' | 'Kepanitiaan'>('Semua');
  const { recordActivity } = useActivity();

  const handleTabChange = (tab: typeof activeTab) => {
    setActiveTab(tab);
    recordActivity({
      type: 'filter_change',
      title: 'Filter Pengalaman',
      detail: `Pengunjung memfilter riwayat pengalaman berdasarkan kategori: ${tab}`,
    });
  };

  const filteredExperiences = activeTab === 'Semua'
    ? EXPERIENCES
    : EXPERIENCES.filter((exp) => exp.type === activeTab);

  const getTypeIcon = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'Pendidikan':
        return <GraduationCap className="w-4 h-4 text-cyan-400" />;
      case 'Pekerjaan':
        return <Briefcase className="w-4 h-4 text-emerald-400" />;
      case 'Organisasi':
        return <Users className="w-4 h-4 text-teal-400" />;
      default:
        return <Calendar className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section id="pengalaman" className="py-20 sm:py-28 bg-slate-900/30 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
              Rekam Jejak & Dedikasi
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pendidikan & Pengalaman
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Riwayat studi akademik, pengalaman magang industri, kepengurusan organisasi mahasiswa, serta kepanitiaan.
            </p>
          </div>

          {/* Filter Tabs (Interactive buttons allowed by design constitution) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800">
            {(['Semua', 'Pendidikan', 'Pekerjaan', 'Organisasi', 'Kepanitiaan'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="p-5 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 transition-all hover:bg-slate-900"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-800/60">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    {getTypeIcon(exp.type)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-cyan-300 font-medium mt-0.5">
                      <span>{exp.institution}</span>
                      <span className="text-slate-600" aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-slate-400 font-normal">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quiet unboxed metadata: Period & Type */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 sm:text-right shrink-0">
                  <span className="text-slate-300">{exp.period}</span>
                  <span className="text-slate-600" aria-hidden="true">/</span>
                  <span className="text-cyan-400">{exp.type}</span>
                </div>
              </div>

              {/* Badges / Highlights (Clean unboxed tags) */}
              {exp.badges && exp.badges.length > 0 && (
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 my-3 text-xs text-slate-300 font-mono">
                  {exp.badges.map((b, i) => (
                    <span key={i} className="flex items-center gap-2">
                      <span className="text-emerald-400 font-medium">✓ {b}</span>
                      {i < exp.badges!.length - 1 && <span className="text-slate-600">·</span>}
                    </span>
                  ))}
                </div>
              )}

              {/* Bullet Points */}
              <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-slate-300">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400/80 mt-2 shrink-0" />
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
