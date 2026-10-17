import React from 'react';
import { User, Code2, Database, Smartphone, BookOpen, CheckCircle2, Award, FileSpreadsheet, Building } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: 'Fullstack Software Development',
      description: 'Mampu membangun antarmuka web interaktif berbasis React.js & Tailwind CSS, arsitektur REST API dengan Express.js & MongoDB, serta pipeline pengujian terotomasi.',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-teal-400" />,
      title: 'Mobile Development (Flutter)',
      description: 'Pengalaman mengembangkan aplikasi Android & Web menggunakan Flutter, integrasi Google ML Kit untuk Face Detection, GPS location tracking, dan database cloud Firebase.',
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-400" />,
      title: 'Dasar Akuntansi & Analisis Bisnis',
      description: 'Lulusan SMKN 4 Kab. Tangerang dengan lisensi BNSP Akuntansi dan Keuangan. Memahami pembukuan, arus kas, rekonsiliasi, serta penerjemahan kebutuhan bisnis ke sistem TI.',
    },
    {
      icon: <Building className="w-5 h-5 text-blue-400" />,
      title: 'Pengalaman Organisasi & Manajerial',
      description: 'Pernah menjabat sebagai Sekretaris II Himpunan Mahasiswa Sistem Informasi (HMSI UNIPI) dan panitia acara seminar nasional, mahir dalam tata kelola administrasi formal.',
    },
  ];

  return (
    <section id="tentang" className="py-20 sm:py-28 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
            Profil & Latar Belakang
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tentang Saya
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Mengenal lebih dekat dedikasi kerja, fondasi keilmuan sistem informasi, dan keahlian teknis saya.
          </p>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Halo! Perkenalkan, saya <strong className="text-white font-semibold">Nia Surniati</strong>, mahasiswi tingkat akhir dan fresh graduate dari Program Studi S1 Sistem Informasi, Fakultas Ilmu Komputer <span className="text-cyan-400 font-medium">Universitas Insan Pembangunan Indonesia (UNIPI)</span> dengan perolehan Indeks Prestasi Kumulatif (IPK) <span className="font-mono text-emerald-400 font-bold">3.94 / 4.00</span>.
            </p>
            
            <p>
              Sejak awal masa perkuliahan, ketertarikan saya terhadap dunia Teknologi Informasi tumbuh pesat, khususnya dalam rekayasa perangkat lunak dan bagaimana sistem informasi dapat mengoptimalkan efisiensi proses bisnis. Saya mengasah keahlian pemrograman melalui program intensif <strong className="text-white font-semibold">MSIB Fullstack Software Development Kampus Merdeka</strong> di PT. Produk Zilla Akademi Indonesia hingga lulus dengan predikat <strong className="text-emerald-400 font-semibold">"Luar Biasa"</strong>.
            </p>

            <p>
              Sebelum menempuh pendidikan sarjana, saya memiliki latar belakang di bidang Akuntansi dan Keuangan Lembaga serta telah lulus uji kompetensi resmi dari <strong className="text-white font-semibold">Badan Nasional Sertifikasi Profesi (BNSP)</strong>. Kombinasi pemahaman alur keuangan dan keahlian teknis perangkat lunak ini menjadi nilai tambah yang memampukan saya merancang sistem informasi dengan integritas data dan logika bisnis yang akurat.
            </p>

            <p>
              Saya adalah individu yang berdedikasi tinggi, memiliki kedisiplinan dan etos kerja kuat, siap beradaptasi dengan standar operasional perusahaan, serta berkomitmen memberikan kontribusi nyata bagi kesuksesan tim kerja.
            </p>

            {/* Quick check points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Cepat Beradaptasi dengan Tech Stack Baru</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Terbiasa dengan Standar Clean Code & TDD</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Kemampuan Komunikasi & Kerjasama Tim</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Orientasi Detail & Problem Solving</span>
              </div>
            </div>
          </div>

          {/* Core Strengths Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all hover:bg-slate-900/90"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
