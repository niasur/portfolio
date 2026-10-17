import React, { useState } from 'react';
import { Download, Printer, Copy, Check, X, FileText, ExternalLink, Award, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, CERTIFICATIONS, SKILLS_DATA } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvDownloadModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'visual' | 'ats'>('visual');
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleAutomaticDownload = () => {
    setIsDownloading(true);

    // Generate ATS-compliant plain text / markdown file for immediate offline availability
    const cvContent = `CURRICULUM VITAE - NIA SURNIATI
Fullstack Developer Enthusiast | Information Systems Graduate
===================================================================
Kontak:
- Telepon / WA : ${PERSONAL_INFO.phoneFormatted}
- Email        : ${PERSONAL_INFO.email}
- LinkedIn     : ${PERSONAL_INFO.linkedinUrl}
- Instagram    : ${PERSONAL_INFO.instagram}
- Portofolio   : ${PERSONAL_INFO.portfolioUrl}
- Domisili     : ${PERSONAL_INFO.location}

TENTANG SAYA
${PERSONAL_INFO.aboutBio}

PENDIDIKAN
- ${PERSONAL_INFO.degree} | IPK: ${PERSONAL_INFO.gpa} / 4.00
  ${PERSONAL_INFO.university} (2022 - Sekarang)
  Fakultas Ilmu Komputer. Coursework: Flutter (Android/Web), Unit Testing (TDD), Big Data & Data Mining (RapidMiner), E-Commerce terintegrasi DB, VB.NET & ASP.NET, UML, DFD, ERD.

- SMKN 4 Kab. Tangerang (Lulus 2021)
  Program Keahlian: Akuntansi dan Keuangan Lembaga. Sertifikasi Kompetensi Nasional BNSP.

PENGALAMAN & PRESTASI UNGGULAN
- Fullstack Software Development - MSIB Kampus Merdeka Batch 7 (PT Produk Zilla)
  Predikat: "Luar Biasa" (Outstanding), Kehadiran 98%.
- Praktik Kerja Lapangan (PKL) - PT. Mega Property Group
  Administrasi Pemasaran & Keuangan Properti (Nilai: Amat Baik).
- Sekretaris II Himpunan Mahasiswa Sistem Informasi (HMSI UNIPI 2023 - 2024)
- Novo Club Leadership Bootcamp by ParagonCorp

SERTIFIKASI UTAMA
- Sertifikat Kompetensi BNSP: Akuntansi & Keuangan Lembaga
- Sertifikat Studi Independen MSIB Fullstack Software Development (Predikat Luar Biasa)
- Sertifikat Novo Club Leadership Bootcamp (ParagonCorp)
- Sertifikat Workshop Desain Prototype Mobile Apps (Figma)
- Sertifikat Workshop Data Analyst & Data Warehouse Management

KEAHLIAN TEKNIS (HARD SKILLS)
- Bahasa & Framework: React.js, TypeScript, JavaScript, HTML5/CSS3, Tailwind CSS, Flutter, Dart, Node.js, Express.js, PHP, C++, Swift
- Basis Data & Cloud: PostgreSQL, MongoDB, MySQL, Firebase (Firestore, Auth, Realtime DB)
- Tools & DevOps: Git/GitHub, Docker, CI/CD GitHub Actions, Postman, Swagger UI, Android Studio, VS Code
- Analisis Sistem & Desain: UML, DFD, ERD (Draw.io, Astah, PowerDesigner), Figma (UI/UX), Canva, RapidMiner
`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `CV_Nia_Surniati_Fullstack_Sistem_Informasi.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  const handleCopyText = () => {
    const textToCopy = `Nia Surniati - Fullstack Developer | S1 Sistem Informasi (IPK 3.94)
Email: ${PERSONAL_INFO.email} | Phone/WA: ${PERSONAL_INFO.phoneFormatted}
LinkedIn: ${PERSONAL_INFO.linkedinUrl} | Portofolio: ${PERSONAL_INFO.portfolioUrl}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 no-print">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:px-6 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Curriculum Vitae (CV) Nia Surniati
                <span className="hidden sm:inline-block text-xs font-mono text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded">IPK 3.94</span>
              </h2>
              <p className="text-xs text-slate-400">Siap Cetak / Unduh Otomatis · Terorganisir Standar Industri</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-800/80 p-1 rounded-lg border border-slate-700 text-xs">
              <button
                onClick={() => setViewMode('visual')}
                className={`px-3 py-1 rounded-md transition-all font-medium ${
                  viewMode === 'visual' ? 'bg-[#2ec4b6] text-[#121212] shadow-sm' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Tampilan Visual
              </button>
              <button
                onClick={() => setViewMode('ats')}
                className={`px-3 py-1 rounded-md transition-all font-medium ${
                  viewMode === 'ats' ? 'bg-[#2ec4b6] text-[#121212] shadow-sm' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                ATS Friendly
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action bar for Recruiter */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-2.5 bg-slate-900/90 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Tersedia untuk peluang kerja (Fresh Graduate)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin!' : 'Salin Data'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#2ec4b6] border border-[#2ec4b6]/30 transition-colors"
              title="Cetak atau simpan langsung ke file PDF berkualitas tinggi via browser"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF Bersih</span>
            </button>
            <button
              onClick={handleAutomaticDownload}
              disabled={isDownloading}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2ec4b6] hover:bg-[#25ab9e] text-[#121212] font-semibold shadow-md transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isDownloading ? 'Menyiapkan...' : 'Unduh Otomatis'}</span>
            </button>
          </div>
        </div>

        {/* CV Preview Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-900">
          
          {/* Visual Mode */}
          {viewMode === 'visual' ? (
            <div className="cv-printable-container max-w-3xl mx-auto bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-2xl border border-slate-200">
              
              {/* CV Header */}
              <div className="border-b-2 border-slate-800 pb-5 mb-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-sm font-semibold text-cyan-700 mt-0.5">
                      Fullstack Developer Enthusiast | Information Systems Graduate
                    </p>
                  </div>
                  <div className="text-xs text-slate-600 space-y-1 sm:text-right font-medium">
                    <p>Bitung, Tangerang, Banten, Indonesia</p>
                    <p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-700 hover:underline">{PERSONAL_INFO.email}</a>
                      {' · '}
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-800">{PERSONAL_INFO.phoneFormatted}</a>
                    </p>
                    <p>
                      <span>LinkedIn: {PERSONAL_INFO.linkedin}</span>
                      {' · '}
                      <span>IG: {PERSONAL_INFO.instagram}</span>
                    </p>
                    <p className="text-cyan-800 font-mono text-[11px]">{PERSONAL_INFO.portfolioUrl}</p>
                  </div>
                </div>
              </div>

              {/* Ringkasan Profil */}
              <div className="mb-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                  Ringkasan Profil
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                  {PERSONAL_INFO.aboutBio}
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <span className="font-semibold text-slate-900">Prestasi MSIB Kampus Merdeka:</span> {PERSONAL_INFO.msibHighlight}
                </p>
              </div>

              {/* Pendidikan & Coursework */}
              <div className="mb-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                  Pendidikan
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900">
                      <span>S1 Sistem Informasi — {PERSONAL_INFO.university}</span>
                      <span className="text-slate-600 font-normal">2022 – Sekarang</span>
                    </div>
                    <div className="text-xs text-cyan-800 font-semibold mt-0.5">
                      IPK : {PERSONAL_INFO.gpa} / 4.00 · Fakultas Ilmu Komputer · Mahasiswi Tingkat Akhir
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      <span className="font-semibold text-slate-800">Edukasi & Coursework:</span> Mengembangkan aplikasi Android/Web dengan Flutter, Firebase, JSON Server, MockAPI; Penerapan Unit Testing (TDD, White-box & Black-box); Big Data & Data Mining dengan RapidMiner; E-Commerce terintegrasi basis data; VB.NET & ASP.NET; Rekayasa perangkat lunak dengan diagram UML, DFD, dan ERD; Etika profesi TI & cyberlaw.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900">
                      <span>Akuntansi dan Keuangan Lembaga — SMKN 4 Kab. Tangerang</span>
                      <span className="text-slate-600 font-normal">Lulus 2021</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Tersertifikasi Kompetensi Resmi oleh Badan Nasional Sertifikasi Profesi (BNSP).
                    </p>
                  </div>
                </div>
              </div>

              {/* Pengalaman Organisasi & Kepanitiaan */}
              <div className="mb-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                  Pengalaman Organisasi & Kepanitiaan
                </h3>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div>
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Sekretaris II — Himpunan Mahasiswa Sistem Informasi (HMSI UNIPI)</span>
                      <span className="font-normal text-slate-600">2023 – 2024</span>
                    </div>
                    <p className="text-slate-600">
                      Bertanggung jawab penuh atas kebutuhan administrasi himpunan, koordinasi persuratan resmi, penyusunan LPJ, serta pengelolaan arsip AD/ART organisasi.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Novo Club by ParagonCorp — Bootcamp, Volunteer & Humas</span>
                      <span className="font-normal text-slate-600">Feb – Agu 2023</span>
                    </div>
                    <p className="text-slate-600">
                      Mengikuti pelatihan kepemimpinan (7 Habits, Design Thinking, Problem Solving) dan berperan sebagai Humas dalam eksekusi Group Project sosial.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Sie Publikasi, Desain & Dokumentasi (PDD) — Seminar Nasional & Dies Natalis HMSI</span>
                      <span className="font-normal text-slate-600">2023</span>
                    </div>
                    <p className="text-slate-600">
                      Merancang seluruh materi visual promosi, backdrop panggung, ID card, sertifikat digital/cetak, serta dokumentasi media.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Panitia Wisuda UNIPI 2024 — Pengarah Tamu Kehormatan</span>
                      <span className="font-normal text-slate-600">Okt 2024</span>
                    </div>
                    <p className="text-slate-600">
                      Memberikan arahan, bimbingan, dan pengaturan VIP demi kelancaran prosesi wisuda universitas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pengalaman Kerja Lapangan */}
              <div className="mb-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                  Pengalaman Kerja (PKL)
                </h3>
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-900">
                    <span>Administrasi Pemasaran — PT. Mega Property Group</span>
                    <span className="text-xs font-normal text-slate-600">Mar 2021 – Apr 2021</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Melayani konsumen properti, mencatat data calon pembeli harian, menerbitkan kuitansi pembayaran, mengelola pembukuan buku kas harian pada MS Excel, dan mengarsipkan dokumen legalitas. (Nilai: Amat Baik).
                  </p>
                </div>
              </div>

              {/* Sertifikasi Unggulan */}
              <div className="mb-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                  Sertifikat Kompetensi & Lisensi
                </h3>
                <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                  <li><span className="font-semibold text-slate-900">Sertifikat Kompetensi BNSP:</span> Program Keahlian Akuntansi dan Keuangan Lembaga</li>
                  <li><span className="font-semibold text-slate-900">MSIB Kampus Merdeka Batch 7:</span> Fullstack Software Development PT. Produk Zilla (Predikat Luar Biasa)</li>
                  <li><span className="font-semibold text-slate-900">MSIB Batch 7:</span> Certificate of Appreciation (98% Attendance and Active Participation)</li>
                  <li><span className="font-semibold text-slate-900">ParagonCorp:</span> Novo Club Leadership Bootcamp Online Training & Group Project</li>
                  <li><span className="font-semibold text-slate-900">Fakultas Ilmu Komputer UNIPI:</span> Sertifikat Workshop Figma (Prototype Mobile Apps)</li>
                  <li><span className="font-semibold text-slate-900">HMSI UNIPI:</span> Certificate of Achievement – Sekretaris II Periode 2023–2024</li>
                  <li><span className="font-semibold text-slate-900">HMSI & Glints:</span> Workshop Data Analyst & Data Warehouse Management</li>
                </ul>
              </div>

              {/* Keahlian (Skills) */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                  Keahlian Teknis & Bahasa
                </h3>
                <div className="text-xs text-slate-700 space-y-1">
                  <p><span className="font-semibold text-slate-900">Bahasa & Framework:</span> React.js, TypeScript, JavaScript, HTML5/CSS3, Tailwind CSS, Flutter, Dart, Node.js, Express.js, PHP, C++, Swift</p>
                  <p><span className="font-semibold text-slate-900">Basis Data & Cloud:</span> PostgreSQL, MongoDB, MySQL (phpMyAdmin), Firebase (Firestore, Realtime DB, Auth)</p>
                  <p><span className="font-semibold text-slate-900">Tools, Testing & DevOps:</span> Git, GitHub, Docker, CI/CD GitHub Actions, Unit Testing (Jest, React Testing Library), Swagger UI, Postman, Android Studio, VS Code</p>
                  <p><span className="font-semibold text-slate-900">Desain & Analisis:</span> UML, DFD, ERD (Draw.io, Astah), RapidMiner, Figma (UI/UX), Canva, Microsoft Office (Excel, Word, PowerPoint)</p>
                  <p><span className="font-semibold text-slate-900">Bahasa:</span> Bahasa Indonesia (Aktif/Native), Bahasa Inggris (Pasif)</p>
                </div>
              </div>

            </div>
          ) : (
            /* ATS Clean Plain Mode */
            <div className="max-w-3xl mx-auto bg-slate-950 text-slate-200 p-6 rounded-xl border border-slate-800 font-mono text-xs sm:text-sm leading-relaxed space-y-5">
              <div className="border-b border-slate-800 pb-4">
                <div className="text-xl font-bold text-white uppercase">{PERSONAL_INFO.name}</div>
                <div className="text-cyan-400">Fullstack Developer Enthusiast | S1 Sistem Informasi (IPK 3.94)</div>
                <div className="text-slate-400 text-xs mt-1">
                  Email: {PERSONAL_INFO.email} | Telp/WA: {PERSONAL_INFO.phoneFormatted} | {PERSONAL_INFO.location}
                </div>
                <div className="text-slate-400 text-xs">
                  LinkedIn: {PERSONAL_INFO.linkedin} | Portfolio: {PERSONAL_INFO.portfolioUrl}
                </div>
              </div>

              <div>
                <div className="font-bold text-cyan-400 uppercase tracking-wider mb-1">PROFIL PROFESIONAL</div>
                <div className="text-slate-300 text-xs leading-normal">{PERSONAL_INFO.aboutBio}</div>
              </div>

              <div>
                <div className="font-bold text-cyan-400 uppercase tracking-wider mb-1">PENDIDIKAN</div>
                <div className="text-white font-semibold">S1 Sistem Informasi — Universitas Insan Pembangunan Indonesia (UNIPI)</div>
                <div className="text-slate-400 text-xs">2022 - Sekarang | IPK: 3.94 / 4.00 (Cum Laude level)</div>
                <div className="text-slate-300 text-xs mt-1">
                  Fokus Pembelajaran: Rekayasa Perangkat Lunak, Fullstack Web & Mobile (Flutter, React, Node), Basis Data Relasional & NoSQL, Metodologi Pengujian Unit (TDD), Analisis Sistem UML/ERD, Big Data RapidMiner.
                </div>
              </div>

              <div>
                <div className="font-bold text-cyan-400 uppercase tracking-wider mb-1">SERTIFIKASI & PENGHARGAAN</div>
                <ul className="text-slate-300 text-xs space-y-1 list-disc list-inside">
                  <li>Sertifikasi Profesi BNSP: Akuntansi dan Keuangan Lembaga</li>
                  <li>MSIB Kampus Merdeka Batch 7 Fullstack Software Development - Predikat Luar Biasa (Outstanding)</li>
                  <li>MSIB Batch 7: Penghargaan Keaktifan & Kehadiran 98%</li>
                  <li>Novo Club Leadership Bootcamp - ParagonCorp</li>
                  <li>Sekretaris II Himpunan Mahasiswa Sistem Informasi (HMSI UNIPI 2023 - 2024)</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-cyan-400 uppercase tracking-wider mb-1">KEAHLIAN TEKNIS (TECHNICAL SKILLS)</div>
                <div className="text-slate-300 text-xs space-y-1">
                  <div>- Web & Frontend: React.js, TypeScript, JavaScript, HTML5/CSS, Tailwind CSS</div>
                  <div>- Mobile: Flutter, Dart, Android Studio</div>
                  <div>- Backend & API: Node.js, Express.js, RESTful API, Swagger UI, PHP</div>
                  <div>- Basis Data: PostgreSQL, MongoDB, MySQL, Firebase Firestore & Realtime DB</div>
                  <div>- DevOps & Tools: Git, GitHub Actions (CI/CD), Docker, Unit Testing (Jest), Postman</div>
                  <div>- Analisis & Desain: UML, DFD, ERD, RapidMiner, Figma UI/UX, Canva</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal footer */}
        <div className="p-4 sm:px-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            Format sesuai dengan dokumen CV resmi Nia Surniati (Universitas Insan Pembangunan Indonesia).
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium shadow-md shadow-cyan-900/30 transition-all flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
