import React, { useState } from 'react';
import { CERTIFICATIONS, CertificateItem, PERSONAL_INFO } from '../data/portfolioData';
import { Award, ShieldCheck, Search, ChevronRight, Eye } from 'lucide-react';

interface CertificateViewProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

export const CertificateView: React.FC<CertificateViewProps> = ({ onSelectCertificate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Semua',
    'Kompetensi & Profesi',
    'Bootcamp & Kepemimpinan',
    'Workshop & Teknis',
    'Kepanitiaan & Organisasi',
    'Webinar & Seminar',
  ];

  const filteredCerts = CERTIFICATIONS.filter((cert) => {
    const matchesCategory = activeCategory === 'Semua' || cert.category === activeCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.credential && cert.credential.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCertificateClick = (cert: CertificateItem) => {
    onSelectCertificate(cert);
  };

  return (
    <div className="py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Certificates & Awards
          </h2>
        </div>

        {/* Google Drive Action Button */}
        <a
          href={PERSONAL_INFO.certificateDriveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2ec4b6] hover:bg-[#25ab9e] text-[#121212] font-semibold text-xs shadow-md transition-all self-start sm:self-auto cursor-pointer"
        >
          <span>Buka di Google Drive</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 pb-4 mb-6 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#2ec4b6] text-[#121212] font-semibold'
                : 'bg-[#1e1e1f] text-slate-400 hover:text-white border border-[#383838]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredCerts.length === 0 ? (
        <div className="text-center py-16 text-slate-500 text-xs rounded-xl bg-[#1e1e1f] border border-[#383838]">
          Tidak ada sertifikat yang cocok dengan pencarian "{searchQuery}".
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => handleCertificateClick(cert)}
              className="group cursor-pointer p-4 rounded-xl bg-[#1e1e1f] border border-[#383838] hover:border-[#2ec4b6] transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-[#2ec4b6]/10"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-[#121212] text-[#2ec4b6] group-hover:text-white transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">{cert.date}</span>
                </div>

                <span className="text-[10px] font-mono text-[#2ec4b6] block mb-1">
                  {cert.category}
                </span>

                <h3 className="text-sm font-bold text-white group-hover:text-[#2ec4b6] transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                  {cert.issuer}
                </p>

                {cert.credential && (
                  <div className="mt-2 text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{cert.credential}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 mt-3 border-t border-[#383838] flex items-center justify-between text-xs text-slate-400 group-hover:text-[#2ec4b6] transition-colors">
                <span className="text-[11px]">Lihat Keterangan</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
