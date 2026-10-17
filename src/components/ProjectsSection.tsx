import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { Search, Eye, ExternalLink, Code2, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { useActivity } from '../context/ActivityContext';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { recordActivity } = useActivity();

  const categories = ['Semua', 'Fullstack & Web', 'Mobile App', 'Game Development', 'Backend & API', 'UI/UX & Desain', 'Data & Riset'];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = activeCategory === 'Semua' || proj.category === activeCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleProjectClick = (proj: ProjectItem) => {
    recordActivity({
      type: 'view_project',
      title: 'Tinjau Detail Proyek',
      detail: `Rekruter memeriksa detail fitur & arsitektur proyek: ${proj.title}`,
    });
    onSelectProject(proj);
  };

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    recordActivity({
      type: 'filter_change',
      title: 'Filter Kategori Proyek',
      detail: `Menyaring proyek portofolio kategori: ${cat}`,
    });
  };

  return (
    <section id="proyek" className="py-20 sm:py-28 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
              Karya & Implementasi Nyata
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proyek Pilihan & Portofolio
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Koleksi aplikasi web, aplikasi mobile Flutter, sistem REST API, dan perancangan sistem informasi yang terorganisir rapi.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari proyek / teknologi..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/60 rounded-xl border border-slate-800/80 mb-10 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/30 rounded-2xl border border-slate-800 text-slate-400 text-sm">
            Tidak ada proyek yang sesuai dengan pencarian "{searchQuery}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-cyan-950/20"
              >
                {/* Visual Thumbnail */}
                {proj.image ? (
                  <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="relative h-28 w-full bg-gradient-to-br from-slate-900 to-slate-950 p-5 flex items-center justify-between border-b border-slate-800/80">
                    <div className="p-3 rounded-xl bg-slate-800/60 text-cyan-400">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {proj.category}
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Quiet Metadata (Category · Year) without pills */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5 font-mono">
                      <span className="text-cyan-400">{proj.category}</span>
                      {proj.highlight && (
                        <>
                          <span className="text-slate-600">·</span>
                          <span className="text-emerald-400">★ Unggulan</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-cyan-200/70 font-medium mt-0.5">
                      {proj.subtitle}
                    </p>

                    <p className="text-xs text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>

                  <div>
                    {/* Technologies unboxed list */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800/60 mb-3.5">
                      {proj.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="flex items-center gap-2">
                          <span className="text-slate-300">{tech}</span>
                          {i < Math.min(proj.technologies.length, 4) - 1 && (
                            <span className="text-slate-600">·</span>
                          )}
                        </span>
                      ))}
                      {proj.technologies.length > 4 && (
                        <span className="text-cyan-400">+{proj.technologies.length - 4}</span>
                      )}
                    </div>

                    {/* Action button */}
                    <button
                      onClick={() => handleProjectClick(proj)}
                      className="w-full py-2 px-3.5 rounded-xl bg-slate-800/80 hover:bg-cyan-600 text-slate-200 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 group-hover:bg-cyan-600 group-hover:text-white"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Detail Proyek</span>
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
