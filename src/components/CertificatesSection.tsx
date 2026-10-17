import React, { useState } from 'react';
import { CERTIFICATIONS, CertificateItem } from '../data/portfolioData';
import { Award, ShieldCheck, Search, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import { useActivity } from '../context/ActivityContext';

interface CertificatesSectionProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onSelectCertificate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { recordActivity } = useActivity();

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
    recordActivity({
      type: 'view_certificate',
      title: 'Tinjau Sertifikat',
      detail: `Rekruter memeriksa bukti sertifikasi: ${cert.title}`,
    });
    onSelectCertificate(cert);
  };

  const handleCategoryFilter = (cat: string) => {
    setActiveCategory(cat);
    recordActivity({
      type: 'filter_change',
      title: 'Filter Sertifikat',
      detail: `Menyaring arsip sertifikat kategori: ${cat}`,
    });
  };

  return (
    <section id="sertifikasi" className="py-20 sm:py-28 bg-slate-900/40 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
              Validasi Kompetensi & Lisensi
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sertifikat & Penghargaan Terbaik
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Dokumentasi sertifikasi resmi nasional BNSP, kelulusan MSIB Kampus Merdeka, kepemimpinan ParagonCorp, workshop teknis, serta kepanitiaan.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari sertifikat..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/60 rounded-xl border border-slate-800/80 mb-10 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryFilter(cat)}
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

        {/* Certificate Cards Grid */}
        {filteredCerts.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/30 rounded-2xl border border-slate-800 text-slate-400 text-sm">
            Tidak ada sertifikat yang cocok dengan pencarian "{searchQuery}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                onClick={() => handleCertificateClick(cert)}
                className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all flex flex-col justify-between shadow-sm hover:shadow-lg hover:shadow-cyan-950/20"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    
                    {/* Quiet metadata */}
                    <div className="text-right text-[11px] font-mono text-slate-400">
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-cyan-400 block mb-1">
                    {cert.category}
                  </span>

                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {cert.issuer}
                  </p>

                  {cert.credential && (
                    <div className="mt-3 text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span className="truncate">{cert.credential}</span>
                    </div>
                  )}

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <span className="font-medium">Lihat Bukti & Keterangan</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
