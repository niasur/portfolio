import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, GraduationCap, Briefcase, ExternalLink, Calendar, MapPin } from 'lucide-react';
import profileImg from '../assets/images/nia_surniati.jpg';

export const AboutView: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<'tech' | 'tools'>('tech');

  // Education items matching Screenshot 1
  const educationItems = [
    {
      institution: 'Universitas Insan Pembangunan Indonesia',
      degree: 'Information System (S1 Sistem Informasi)',
      period: 'Jan 2022 - Des 2025',
      grade: 'IPK 3.94 / 4.00 (Cum Laude)',
      iconBg: 'bg-emerald-950/60 border-emerald-700/50 text-emerald-400',
    },
    {
      institution: 'SMKN 4 Kab. Tangerang',
      degree: 'Akuntansi dan Keuangan Lembaga (AKL)',
      period: '2018 - 2021',
      grade: 'Sertifikasi Kompetensi Nasional BNSP',
      iconBg: 'bg-blue-950/60 border-blue-700/50 text-blue-400',
    },
  ];

  // Experience & Education items matching Screenshot 2 & 3
  const experienceItems = [
    {
      title: 'Fullstack Software Developer',
      organization: 'PT Produk Zilla Akademi Indonesia · Studi Independen Bersertifikat (MSIB Batch 7)',
      period: 'Aug 2024 - Des 2024',
      duration: '5 months',
      location: 'Jakarta Raya, Indonesia - Remote',
      icon: (
        <svg className="w-5 h-5 text-[#2ec4b6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      iconBg: 'bg-[#182635] border-[#224466]',
      bullets: [
        'Lulus dengan predikat tertinggi "Luar Biasa" serta tingkat kehadiran dan keaktifan 98%.',
        'Mengembangkan backend REST API menggunakan Express.js, MongoDB, JWT authentication, dan OpenAPI / Swagger UI.',
        'Membangun antarmuka web modern dengan React.js dan Tailwind CSS yang teruji otomatis via React Testing Library.',
        'Menerapkan pipeline CI/CD otomatis berbasis GitHub Actions dan containerization Docker.',
        'Berkolaborasi secara agile dalam tim mengembangkan Capstone Project "BEGAL (Beli Galon)" dari perancangan hingga deployment.',
      ],
    },
    {
      title: 'Administrasi Pemasaran & Operasional',
      organization: 'PT Mega Property Group · Praktik Kerja Industri (PKL)',
      period: 'Mar 2021 - Apr 2021',
      duration: '2 months',
      location: 'Tangerang, Indonesia - On-Site',
      icon: (
        <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      iconBg: 'bg-[#2b2416] border-[#55421c]',
      bullets: [
        'Meraih evaluasi nilai "Amat Baik" dalam pelayanan informasi konsumen dan administrasi properti.',
        'Mengelola dan memperbarui basis data calon konsumen harian ke sistem digital.',
        'Menerbitkan dan memvalidasi kuitansi bukti pembayaran uang muka dan cicilan konsumen.',
        'Menangani transaksi kas operasional harian, menyusun buku kas, dan merekapitulasi data keuangan ke Microsoft Excel.',
        'Mengarsipkan berkas legalitas dan dokumen administrasi perumahan secara rapi dan sistematis.',
      ],
    },
    {
      title: 'Sekretaris II Kepengurusan',
      organization: 'Himpunan Mahasiswa Sistem Informasi (HMSI) UNIPI · Organisasi Kampus',
      period: '2023 - 2024',
      duration: '1 year',
      location: 'Tangerang, Indonesia - Hybrid',
      icon: (
        <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      iconBg: 'bg-[#281c30] border-[#532e6a]',
      bullets: [
        'Mengelola tata kelola persuratan resmi, proposal sponsorship, anggaran biaya, dan laporan pertanggungjawaban (LPJ).',
        'Menyusun lembar notulensi rapat pleno serta memelihara arsip ketetapan konstitusi AD/ART himpunan.',
        'Mengkoordinasikan kelancaran komunikasi antar divisi kerja dan pimpinan program studi Sistem Informasi.',
      ],
    },
    {
      title: 'Volunteer & Humas Group Project',
      organization: 'Novo Club by ParagonCorp (PT Paragon Technology and Innovation)',
      period: 'Feb 2023 - Agu 2023',
      duration: '7 months',
      location: 'Tangerang, Indonesia - Hybrid',
      icon: (
        <svg className="w-5 h-5 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      iconBg: 'bg-[#2b1720] border-[#5a273e]',
      bullets: [
        'Terpilih dalam program pengembangan kepemimpinan Novo Club ParagonCorp Batch 2.',
        'Mendesain dan mengeksekusi Social Impact Project bertema "Pola Hidup Bersih Sehat".',
        'Bertindak sebagai Humas untuk menjalin kemitraan, kampanye edukatif, dan dokumentasi kegiatan publik.',
      ],
    },
  ];

  // Tech Stack items (including languages, frameworks, and databases from portfolio & screenshot)
  const techStack = [
    {
      name: 'React',
      icon: (
        <svg className="w-5 h-5 text-[#61DAFB]" viewBox="0 0 115.3 100" fill="currentColor">
          <ellipse cx="57.65" cy="50" rx="14.8" ry="14.8" />
          <path d="M57.65,0 C41.74,0 28.53,19.26 28.53,43 C28.53,45.47 28.7,47.88 29.02,50.21 C22.68,52.38 17.07,55.45 12.35,59.3 C2.41,67.41 -2.06,77.53 1.25,83.26 C4.56,88.99 15.65,88.16 28.27,81.2 C31.7,79.31 35.32,76.85 39.06,73.87 C44.88,77.53 51.13,79.79 57.65,79.79 C64.17,79.79 70.42,77.53 76.24,73.87 C79.98,76.85 83.6,79.31 87.03,81.2 C99.65,88.16 110.74,88.99 114.05,83.26 C117.36,77.53 112.89,67.41 102.95,59.3 C98.23,55.45 92.62,52.38 86.28,50.21 C86.6,47.88 86.77,45.47 86.77,43 C86.77,19.26 73.56,0 57.65,0 Z" fill="none" stroke="#61DAFB" strokeWidth="6" />
        </svg>
      ),
    },
    {
      name: 'Flutter',
      icon: (
        <svg className="w-5 h-5 text-[#02569B]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zM14.286 9.686L8.43 15.543l3.69 3.714 3.713-3.714 5.857-5.857h-7.404zM12.12 19.257l2.166 2.171h7.405l-5.871-5.871-3.7 3.7z" fill="#02569B" />
          <path d="M14.286 9.686l-5.856 5.857 3.69 3.714 5.856-5.857-3.69-3.714z" fill="#0175C2" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg className="w-5 h-5 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: 'NodeJS',
      icon: (
        <svg className="w-5 h-5 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#339933" />
        </svg>
      ),
    },
    {
      name: 'Kotlin',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <polygon points="24,0 0,0 0,24 24,0" fill="#7F52FF" />
          <polygon points="0,24 12,12 24,24" fill="#C711E1" />
          <polygon points="0,0 12,12 0,24" fill="#E4485D" />
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      icon: (
        <div className="w-5 h-5 bg-[#3178C6] rounded-sm flex items-center justify-end p-0.5">
          <span className="text-[10px] font-black text-white leading-none">TS</span>
        </div>
      ),
    },
    {
      name: 'Javascript',
      icon: (
        <div className="w-5 h-5 bg-[#F7DF1E] rounded-sm flex items-center justify-end p-0.5">
          <span className="text-[10px] font-black text-black leading-none">JS</span>
        </div>
      ),
    },
    {
      name: 'Visual Basic',
      icon: (
        <div className="w-5 h-5 bg-[#5C2D91] rounded-sm flex items-center justify-center text-white text-[10px] font-black">
          VB
        </div>
      ),
    },
    {
      name: 'MySQL',
      icon: (
        <div className="w-5 h-5 bg-[#00618A] rounded-sm flex items-center justify-center text-white text-[8px] font-black tracking-tighter">
          SQL
        </div>
      ),
    },
    {
      name: 'Postgre',
      icon: (
        <svg className="w-5 h-5 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.2 4.4c1.8.2 3.1 1.6 3.1 3.3 0 1.2-.7 2.3-1.7 2.8v3.9c0 .6-.4 1.1-1 1.1-.5 0-.9-.4-1-.9v-3.7h-.9v3.7c0 .5-.4.9-1 .9-.5 0-1-.5-1-1.1V12.5c-1-.5-1.7-1.6-1.7-2.8 0-1.7 1.3-3.1 3.1-3.3h2.1z" />
        </svg>
      ),
    },
    {
      name: 'Mongodb',
      icon: (
        <svg className="w-5 h-5 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.5s-6 6.5-6 12.5c0 5 3.5 8.5 6 8.5s6-3.5 6-8.5c0-6-6-12.5-6-12.5zm0 18.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
        </svg>
      ),
    },
    {
      name: 'PHP',
      icon: (
        <div className="px-1 py-0.5 rounded bg-[#777BB4] text-white text-[10px] font-black leading-none">
          PHP
        </div>
      ),
    },
    {
      name: 'ExpressJS',
      icon: (
        <div className="w-5 h-5 bg-[#2b2b2c] rounded-sm flex items-center justify-center text-white text-[10px] font-bold">
          ex
        </div>
      ),
    },
    {
      name: 'Java',
      icon: (
        <svg className="w-5 h-5 text-[#E76F00]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.85 17.8c-.8.1-1.6.2-2.3.4-.6.1-.9.3-.9.5 0 .4.9.7 2.6.7 1.6 0 3-.2 4.1-.5.7-.2 1.2-.4 1.2-.6 0-.3-.6-.6-1.8-.7-.9-.1-1.9-.1-2.9.2zm6.6-2.1c1.2-.3 1.9-.6 1.9-.9 0-.4-.9-.7-2.7-.8-1.7 0-3.6.2-5.4.6-.9.2-1.7.4-2.2.6-.5.2-.7.4-.7.6 0 .4.8.7 2.3.8 1.5.1 3.2.1 4.8-.1.7-.1 1.4-.4 2-.8z" />
          <path d="M12.9 8.2c.5 1-.2 1.9-1.2 2.6-.9.6-2 1.1-2.9 1.7-.4.2-.8.5-.8.8 0 .5.7.8 2 1 1.2.2 2.7.2 4.2-.2 1.3-.3 2.1-.8 2.1-1.3 0-.7-1.1-1.3-3.2-1.8.8-.4 1.7-1 2.3-1.6.7-.8.8-1.6.4-2.3-.4-.7-1.3-1.1-2.5-1.1-.3 0-.6 0-.8.1.3.6.4 1.3.4 2.1z" />
        </svg>
      ),
    },
    {
      name: 'Python',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M11.9 2c-5.1 0-4.8 2.2-4.8 2.2l.1 2.3h4.9v.7H5.2S2 6.8 2 11.9c0 5.1 2.8 4.9 2.8 4.9h1.7v-2.4s-.1-2.8 2.8-2.8h4.8s2.7.1 2.7-2.6V4.7S17.1 2 11.9 2zm-1.4 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB" />
          <path d="M12.1 22c5.1 0 4.8-2.2 4.8-2.2l-.1-2.3H11.9v-.7h6.9s3.2.4 3.2-4.7c0-5.1-2.8-4.9-2.8-4.9h-1.7v2.4s.1 2.8-2.8 2.8H9.9s-2.7-.1-2.7 2.6v4.3s-.3 2.7 4.9 2.7zm1.4-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD43B" />
        </svg>
      ),
    },
    {
      name: 'HTML & CSS',
      icon: (
        <div className="w-5 h-5 bg-[#E44D26] rounded-sm flex items-center justify-center text-white text-[10px] font-black">
          &lt;/&gt;
        </div>
      ),
    },
  ];

  // Tools items matching Screenshot 1 & uploaded skills list
  const toolItems = [
    {
      name: 'Figma',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="#19BCFE" />
          <path d="M9 3h3v6H9a3 3 0 0 1 0-6z" fill="#F24E1E" />
          <path d="M12 3h3a3 3 0 0 1 0 6h-3V3z" fill="#FF7262" />
          <path d="M9 9h3v6H9a3 3 0 0 1 0-6z" fill="#A259FF" />
          <path d="M9 15h3v3a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3z" fill="#0ACF83" />
        </svg>
      ),
    },

    {
      name: 'Microsoft Office',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="18" rx="2.5" fill="#242426" stroke="#444" strokeWidth="1" />
          <rect x="6.5" y="6.5" width="4.5" height="4.5" fill="#F25022" />
          <rect x="13" y="6.5" width="4.5" height="4.5" fill="#7FBA00" />
          <rect x="6.5" y="13" width="4.5" height="4.5" fill="#00A4EF" />
          <rect x="13" y="13" width="4.5" height="4.5" fill="#FFB900" />
        </svg>
      ),
    },
    {
      name: 'Visual Studio Code',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 1.5L6.5 10.3 2.8 7.3.5 8.9 4 12 .5 15.1l2.3 1.6 3.7-3 11 8.8 6-3.2V4.7l-6-3.2zm0 4.8v11.4l-7.7-5.7 7.7-5.7z" fill="#007ACC" />
        </svg>
      ),
    },
    {
      name: 'Microsoft Visual Studio',
      icon: (
        <svg className="w-5 h-5 text-[#9A4993]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 1.5L6.5 10.3 2.8 7.3.5 8.9 4 12 .5 15.1l2.3 1.6 3.7-3 11 8.8 6-3.2V4.7l-6-3.2zm0 4.8v11.4l-7.7-5.7 7.7-5.7z" />
        </svg>
      ),
    },
    {
      name: 'Android Studio',
      icon: (
        <svg className="w-5 h-5 text-[#3DDC84]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.1 12 8.1s-3.5902.3116-5.1368.8497L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
        </svg>
      ),
    },
    {
      name: 'GIT',
      icon: (
        <svg className="w-5 h-5 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.6 10.7l-8.3-8.3c-.8-.8-2.1-.8-2.8 0L8.1 4.8l3.6 3.6c.9-.3 1.9 0 2.5.6.6.6.9 1.6.6 2.5l3.4 3.4c.9-.3 1.9 0 2.5.6.9.9.9 2.3 0 3.2-.9.9-2.3.9-3.2 0-.7-.7-.9-1.8-.5-2.7l-3.2-3.2v5.7c.3.2.5.5.6.8.5 1.1 0 2.4-1.1 2.9-1.1.5-2.4 0-2.9-1.1-.4-.9-.1-2 .7-2.6v-5.8c-.8-.6-1.1-1.7-.7-2.6.4-.9 1.4-1.4 2.4-1.2L8.9 3.4 2.4 9.9c-.8.8-.8 2.1 0 2.8l8.3 8.3c.8.8 2.1.8 2.8 0l8.1-8.1c.8-.8.8-2.1 0-2.2z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'Postman',
      icon: (
        <svg className="w-5 h-5 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
    {
      name: 'Swagger',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#85EA2D" />
          <circle cx="12" cy="12" r="6" fill="#173647" />
          <path d="M10 10.5C9.5 10.8 9 11.3 9 12C9 12.7 9.5 13.2 10 13.5" stroke="#85EA2D" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 10.5C14.5 10.8 15 11.3 15 12C15 12.7 14.5 13.2 14 13.5" stroke="#85EA2D" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'xaamp',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#FB7A24" />
          <path d="M7 7L17 17M17 7L7 17" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2.5" fill="white" />
        </svg>
      ),
    },
    {
      name: 'Sublime Text 3',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#333333" />
          <path d="M6 15.5L16 11.5L18 8.5L8 12.5L6 15.5Z" fill="#FF9800" />
          <path d="M8 8.5L18 4.5L16 1.5L6 5.5L8 8.5Z" fill="#FF9800" />
          <path d="M6 22.5L16 18.5L18 15.5L8 19.5L6 22.5Z" fill="#FF9800" />
        </svg>
      ),
    },
    {
      name: 'phpMyAdmin',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#242426" stroke="#444" strokeWidth="1" />
          <path d="M12 4L5 18H19L12 4Z" fill="#F3702A" />
          <path d="M12 7L16 16H8L12 7Z" fill="#1C3D62" />
        </svg>
      ),
    },
    {
      name: 'Astah Professional',
      icon: (
        <div className="w-5 h-5 rounded bg-gradient-to-br from-[#E65100] to-[#00838F] flex items-center justify-center text-white text-[9px] font-black shadow-xs">
          A*
        </div>
      ),
    },
    {
      name: 'LottieFiles',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#00DDB3" />
          <path d="M8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.5" fill="white" />
        </svg>
      ),
    },
    {
      name: 'Firebase',
      icon: (
        <svg className="w-5 h-5 text-[#FFCA28]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.89 15.67L6.82 2.37a.64.64 0 011.23-.11l2.48 8.87-6.64 4.54zm16.22 0l-2.02-12.35a.65.65 0 00-1.22-.16l-3.4 6.72 6.64 5.79zm-7.66 4.75a.98.98 0 01-1 0L2.1 13.91l6.65-4.55 3.7 11.06z" />
        </svg>
      ),
    },
    {
      name: 'Docker',
      icon: (
        <svg className="w-5 h-5 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.98 11.08h1.83V9.26h-1.83v1.82zm-2.43 0h1.83V9.26h-1.83v1.82zm-2.44 0h1.83V9.26H9.11v1.82zm-2.43 0h1.83V9.26H6.68v1.82zm7.3-2.43h1.83V6.82h-1.83v1.83zm-2.43 0h1.83V6.82h-1.83v1.83zm-2.44 0h1.83V6.82H9.11v1.83zm7.3 0h1.83V6.82h-1.83v1.83zm6.66 4.3c-.35-.25-1.13-.36-1.74-.27-.1-.95-.63-1.8-1.53-2.31l-.47-.26-.31.44c-.45.64-.6 1.4-.44 2.16-.62.33-1.42.4-2.12.21l-.3-.08-.13.29c-.43.99-1.28 1.68-2.33 1.89-2.02.4-11.75.3-12.78-7.39l-.04-.33-.33-.06C.7 9.4.15 8.95.03 8.35L0 8.2h.16c1.68 0 3.12.87 3.96 2.33 2.51-.06 10.63-.44 14.18 2.57 2.07-.15 4.1.84 5.22 2.59l.21.32-.23.15z" />
        </svg>
      ),
    },
    {
      name: 'Canva',
      icon: (
        <div className="w-5 h-5 rounded-full bg-[#00C4CC] flex items-center justify-center text-white text-[10px] font-black">
          C
        </div>
      ),
    },
    {
      name: 'RapidMiner',
      icon: (
        <div className="w-5 h-5 bg-[#F39C12] rounded-sm flex items-center justify-center text-white text-[10px] font-black">
          RM
        </div>
      ),
    },
  ];

  return (
    <div className="py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* 1. Header & Top Profile Card matching Screenshot 3 */}
      <div>
        {/* Title with horizontal line */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight whitespace-nowrap">
            About Me
          </h2>
          <div className="h-[1px] w-full bg-[#2e2e30]" />
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl bg-[#1e1e1f] border border-[#2b2b2c] p-6 sm:p-8 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm">
          {/* Circular Photo */}
          <div className="shrink-0">
            <img
              src={profileImg}
              alt={PERSONAL_INFO.name}
              className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover object-center border-4 border-[#333336] shadow-xl"
            />
          </div>

          {/* Bio text & Details */}
          <div className="space-y-4 text-center md:text-left">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
                <span>👋🏻</span> Hi there! I'm Nia Surniati.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5">
                I am an Information Systems graduate from Universitas Insan Pembangunan Indonesia (3.94 GPA), based in Tangerang. Equipped with an IT background and a certified understanding of business, I bring one major advantage to the table: I don't just know how to build programs; I understand how to make them genuinely profitable and helpful for the company's daily operations.
              </p>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-sm font-bold text-white flex items-center justify-center md:justify-start gap-2">
                <span>💻</span> What I Do:
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Simply put, I design and build applications that go beyond just "working" they are gorgeous, incredibly intuitive, and comfortable for absolutely anyone to use. From figuring out exactly what a business needs to ensuring the final system runs flawlessly without a single hitch, I handle the entire process with meticulous care to turn ambitious ideas into a digital reality that truly spoils the user and brings a massive impact to the company.
              </p>
            </div>

            {/* Action buttons matching Screenshot 3 */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={`https://wa.me/62${PERSONAL_INFO.phone.substring(1)}?text=Halo%20Nia%2C%20nice%20to%20meet%20you!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#242426] hover:bg-[#2e2e30] border border-[#3a3a3c] text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#242426] hover:bg-[#2e2e30] border border-[#3a3a3c] text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#2ec4b6]" />
                <span>Email</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Education & Experience Section matching Screenshot 2 & 3 */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight whitespace-nowrap">
            Education & Experience
          </h3>
          <div className="h-[1px] w-full bg-[#2e2e30]" />
        </div>

        <div className="space-y-6">
          {experienceItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row items-start gap-4 pb-6 ${
                idx !== experienceItems.length - 1 ? 'border-b border-[#2b2b2c]' : ''
              }`}
            >
              {/* Logo Box */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${item.iconBg}`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="space-y-1.5 flex-1 text-xs sm:text-sm">
                <h4 className="text-base font-bold text-white">
                  {item.title}
                </h4>

                <p className="text-slate-300 font-medium">
                  {item.organization}
                </p>

                <p className="text-slate-400">
                  {item.period} · <span className="text-yellow-400 font-semibold">{item.duration}</span>
                </p>

                <p className="text-slate-400">
                  {item.location}
                </p>

                {/* Bullets */}
                <ul className="pt-2 space-y-1.5 text-slate-300 text-xs sm:text-sm">
                  {item.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Educations Card matching Screenshot 1 */}
      <div>
        <div className="rounded-2xl bg-[#1e1e1f] border border-[#2b2b2c] p-6 sm:p-7 space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Educations
          </h3>

          <div className="space-y-6">
            {educationItems.map((edu, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 pb-4 ${
                  idx !== educationItems.length - 1 ? 'border-b border-[#2b2b2c]' : ''
                }`}
              >
                {/* School Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${edu.iconBg}`}
                >
                  <GraduationCap className="w-5 h-5" />
                </div>

                {/* Details */}
                <div className="space-y-1 text-xs sm:text-sm">
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {edu.institution}
                  </h4>
                  <p className="text-slate-300">{edu.degree}</p>
                  <p className="text-slate-400">{edu.period}</p>
                  <p className="text-[#2ec4b6] font-medium text-xs pt-0.5">{edu.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Skills Section matching Screenshot 1 */}
      <div>
        {/* Title with dash prefix matching screenshot: ── Skills */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-6 bg-[#2ec4b6]" />
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Skills
          </h3>
        </div>

        {/* Category Switcher Pills matching Screenshot 1 */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setActiveSkillCategory('tech')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeSkillCategory === 'tech'
                ? 'bg-[#2b2b2c] text-white border border-[#3f3f42] shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tech Stack
          </button>
          <button
            onClick={() => setActiveSkillCategory('tools')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeSkillCategory === 'tools'
                ? 'bg-[#2b2b2c] text-white border border-[#3f3f42] shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tools
          </button>
        </div>

        {/* Skills Cards Grid matching Screenshot 1 & 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {(activeSkillCategory === 'tech' ? techStack : toolItems).map((skill, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#1e1e1f] border border-[#2b2b2c] hover:border-slate-500/80 transition-all flex items-center gap-3 shadow-xs"
            >
              <div className="shrink-0 flex items-center justify-center">
                {skill.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white truncate">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
