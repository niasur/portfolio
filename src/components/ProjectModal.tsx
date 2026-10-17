import React, { useState } from 'react';
import { X, CheckCircle2, Cpu, ExternalLink, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { ProjectItem, ProjectScreenshot } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<ProjectScreenshot | null>(null);

  if (!project) return null;

  const projectUrl = project.demoUrl || project.link || project.github || 'https://github.com/niasur';
  const hasVideo = Boolean(project.videoDemoUrl);

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 no-print"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Header with image/banner */}
          {project.image ? (
            <div className="relative w-full h-52 sm:h-64 bg-slate-950 overflow-hidden group/banner shrink-0">
              {hasVideo ? (
                <a
                  href={project.videoDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full cursor-pointer relative"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
                </a>
              ) : (
                <div className="block w-full h-full select-none relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent pointer-events-none" />
                </div>
              )}

              {/* Tombol Tutup X di pojok kanan atas */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-950 transition-colors backdrop-blur-md border border-slate-700/50 cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Judul & Kategori: Klik nama judul teks nge-link ke web proyek */}
              <div className="absolute bottom-4 left-6 right-6 z-10 pointer-events-auto">
                <span className="text-xs font-mono text-[#2ec4b6] uppercase tracking-wider">{project.category}</span>
                <div>
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Kunjungi: ${projectUrl}`}
                    className="group/title inline-flex items-center gap-2 text-xl sm:text-2xl font-bold text-white hover:text-[#2ec4b6] tracking-tight mt-1 transition-colors cursor-pointer"
                  >
                    <span>{project.title}</span>
                    <ExternalLink className="w-4 h-4 text-[#2ec4b6] opacity-75 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 pb-4 bg-slate-950 border-b border-slate-800 flex items-start justify-between gap-4 shrink-0">
              <div>
                <span className="text-xs font-mono text-[#2ec4b6] uppercase tracking-wider">{project.category}</span>
                <div>
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Kunjungi: ${projectUrl}`}
                    className="group/title inline-flex items-center gap-2 text-xl sm:text-2xl font-bold text-white hover:text-[#2ec4b6] tracking-tight mt-1 transition-colors cursor-pointer"
                  >
                    <span>{project.title}</span>
                    <ExternalLink className="w-4 h-4 text-[#2ec4b6] opacity-75 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 transition-transform" />
                  </a>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Scrollable details */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-slate-300">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Deskripsi Proyek</h3>
              <p className="leading-relaxed text-slate-200">{project.description}</p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2ec4b6]" />
                  <span>Fitur & Kapabilitas Utama</span>
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2ec4b6] mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Screenshots & Documentation Gallery */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4 text-[#2ec4b6]" />
                  <span>Dokumentasi & Bukti Eksekusi ({project.screenshots.length} Foto)</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.screenshots.map((shot, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedScreenshot(shot)}
                      className="group/shot rounded-xl bg-slate-950 border border-slate-800 hover:border-[#2ec4b6] transition-all overflow-hidden flex flex-col cursor-pointer hover:shadow-lg hover:shadow-[#2ec4b6]/10"
                    >
                      <div className="relative aspect-video bg-black overflow-hidden">
                        <img
                          src={shot.image}
                          alt={shot.title}
                          className="w-full h-full object-cover group-hover/shot:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/shot:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-semibold text-white backdrop-blur-[2px]">
                          <ZoomIn className="w-4 h-4 text-[#2ec4b6]" />
                          <span>Klik untuk Perbesar</span>
                        </div>
                      </div>
                      <div className="p-3 bg-slate-900/80 flex-1 flex flex-col justify-between border-t border-slate-800/80">
                        <h4 className="text-xs font-bold text-white group-hover/shot:text-[#2ec4b6] transition-colors leading-snug">
                          {shot.title}
                        </h4>
                        {shot.caption && (
                          <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                            {shot.caption}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#2ec4b6]" />
                <span>Teknologi & Tools yang Digunakan</span>
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-300">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="flex items-center gap-2">
                    <span className="font-mono text-[#2ec4b6]">#{tech}</span>
                    {idx < project.technologies.length - 1 && (
                      <span className="text-slate-600" aria-hidden="true">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for screenshot full view */}
      {selectedScreenshot && (
        <div
          onClick={() => setSelectedScreenshot(null)}
          className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[92vh] bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="p-3.5 px-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">{selectedScreenshot.title}</h4>
                {selectedScreenshot.caption && (
                  <p className="text-xs text-slate-400 mt-0.5">{selectedScreenshot.caption}</p>
                )}
              </div>
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Tutup pratinjau"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto bg-black flex items-center justify-center p-2">
              <img
                src={selectedScreenshot.image}
                alt={selectedScreenshot.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
