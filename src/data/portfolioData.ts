// Portfolio data for Nia Surniati
// Extracted accurately from presentation slides and curriculum vitae documents

import imgWithLuv from '../assets/images/withluv_anabul.jpg';
import imgEvaluasiKrs from '../assets/images/evaluasi_krs_dashboard.jpg';
import imgEbookStore from '../assets/images/ebook_flutter_app.jpg';
import imgPortfolioFlutterApp from '../assets/images/portfolio_flutter_app.jpg';
import imgBookManagementSwagger from '../assets/images/task4_swagger.png';
import imgSistemPenilaian from '../assets/images/sistem_penilaian_unipi.jpg';
import imgMlPipeline from '../assets/images/ml_pipeline_eda_chart.jpg';
import imgHealthcare from '../assets/images/rapidminer_healthcare_model.jpg';
import imgSales from '../assets/images/rapidminer_sales_model.jpg';
import imgBegalGallonApp1791175505230 from '../assets/images/begal_gallon_app_1791175505230.jpg';
import imgAbsensiFaceApp1791175518149 from '../assets/images/absensi_face_app_1791175518149.jpg';
import imgEcommerceFlutter from '../assets/images/ecommerce_flutter.jpg';
import imgTask3EncryptionBanner from '../assets/images/task3_encryption_banner.png';
import imgTask3EncryptSuccess from '../assets/images/task3/encrypt_success.png';
import imgTask3DecryptWrongPass from '../assets/images/task3/decrypt_wrong_pass.png';
import imgTask3DecryptSuccess from '../assets/images/task3/decrypt_success.png';
import imgTask3ActivityLogs from '../assets/images/task3/activity_logs.png';
import imgDockerCicdPipeline from '../assets/images/docker_cicd_pipeline.png';
import imgReactTestingCoba7 from '../assets/images/react_testing_coba7.png';
import imgTask2Week3Banner from '../assets/images/task2_week3_banner.png';
import imgTask2Week3Tugas1Types from '../assets/images/task2_week3/tugas1_types.png';
import imgTask2Week3Tugas1Math from '../assets/images/task2_week3/tugas1_math.png';
import imgTask2Week3Tugas2Rpg from '../assets/images/task2_week3/tugas2_rpg.png';
import imgFigmaMobileUiDesign from '../assets/images/figma_mobile_ui_design.jpg';
import imgFigmaBegalUiDesign from '../assets/images/figma_begal_ui_design.jpg';
import imgMlPipelineEdaChart from '../assets/images/ml_pipeline_eda_chart.jpg';
import imgRapidminerHealthcareModel from '../assets/images/rapidminer_healthcare_model.jpg';
import imgRapidminerSalesModel from '../assets/images/rapidminer_sales_model.jpg';
import imgNovoClubProject from '../assets/images/novo_club_project.jpg';
import imgGameSederhana from '../assets/images/game_sederhana.jpg';

export interface ProjectScreenshot {
  title: string;
  image: string;
  caption?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Fullstack & Web' | 'Mobile App' | 'Game Development' | 'Backend & API' | 'UI/UX & Desain' | 'Data & Riset';
  summary: string;
  description: string;
  image?: string;
  screenshots?: ProjectScreenshot[];
  technologies: string[];
  features: string[];
  link?: string;
  github?: string;
  demoUrl?: string;
  videoDemoUrl?: string;
  highlight?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: 'Kompetensi & Profesi' | 'Bootcamp & Kepemimpinan' | 'Workshop & Teknis' | 'Kepanitiaan & Organisasi' | 'Webinar & Seminar';
  date: string;
  credential?: string;
  description: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  institution: string;
  location: string;
  period: string;
  type: 'Pendidikan' | 'Pekerjaan' | 'Organisasi' | 'Kepanitiaan';
  description: string[];
  badges?: string[];
}

export const PERSONAL_INFO = {
  name: 'Nia Surniati',
  preferredName: 'Nia',
  title: 'Fullstack Developer Enthusiast & Information Systems Graduate',
  age: 22,
  gpa: '3.94',
  degree: 'S1 Sistem Informasi',
  faculty: 'Fakultas Ilmu Komputer',
  university: 'Universitas Insan Pembangunan Indonesia (UNIPI)',
  highSchool: 'SMKN 4 Kab. Tangerang (Akuntansi & Keuangan Lembaga)',
  location: 'Bitung, Tangerang, Banten, Indonesia',
  email: 'niasurniati999@gmail.com',
  phone: '08989878274',
  phoneFormatted: '+62 898-9878-274',
  instagram: '@snsr_28',
  instagramUrl: 'https://instagram.com/snsr_28',
  linkedin: 'nia-surniati-967259213',
  linkedinUrl: 'https://www.linkedin.com/in/nia-surniati',
  github: 'niasurniati',
  githubUrl: 'https://github.com/niasur',
  certificateDriveUrl: 'https://drive.google.com/drive/folders/17ebIanDJHa8uoVPbRPIesrpbR4AiiVw1?usp=drive_link',
  canvaCvUrl: 'https://canva.link/2vurgfddganidh9',
  portfolioUrl: 'https://portofol.io/nia-surniati-99',
  aboutBio: `I am an Information Systems graduate from Universitas Insan Pembangunan Indonesia (3.94 GPA), based in Tangerang. Equipped with an IT background and a certified understanding of business, I bring one major advantage to the table: I don't just know how to build programs; I understand how to make them genuinely profitable and helpful for the company's daily operations.`,
  msibHighlight: `Lulusan program intensif MSIB (Magang & Studi Independen Bersertifikat) Kampus Merdeka Batch 7 Fullstack Software Development di PT. Produk Zilla Akademi Indonesia dengan predikat "Luar Biasa" serta tingkat kehadiran dan keaktifan 98%.`,
  availability: 'Terbuka untuk posisi Full-time / Kontrak / Remote (Junior Fullstack Developer, Frontend/Backend Engineer, Mobile Developer, IT Analyst, System Analyst)',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'begal-gallon',
    title: 'BEGAL (Beli Galon)',
    subtitle: 'Platform Pemesanan & Pengiriman Air Galon Online',
    category: 'Fullstack & Web',
    summary: 'Platform pemesanan air galon secara online berbasis web yang memudahkan pelanggan memesan kebutuhan air minum harian ke depot terdekat dengan pelacakan status pesanan.',
    description: 'Proyek capstone tim MSIB Fullstack Web Development berupa platform end-to-end pemesanan galon air. Mengimplementasikan autentikasi pengguna, manajemen keranjang, katalog depot galon, formulir alamat pengantaran, kalkulasi ongkos kirim, dan dashboard admin untuk pemrosesan order secara realtime.',
    image: imgBegalGallonApp1791175505230,
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST API'],
    features: [
      'Katalog produk berbagai merk galon air minum',
      'Pemesanan instan dengan input alamat pengantaran',
      'Keranjang belanja dan kalkulasi total pembayaran',
      'Dashboard admin pemantauan status pengiriman',
      'Desain antarmuka responsif ramah smartphone'
    ],
    demoUrl: 'https://gallon-app.vercel.app/',
    link: 'https://gallon-app.vercel.app/',
    highlight: true,
  },
  {
    id: 'anabul-withluv',
    title: 'withluv.anabul - Cat Grooming Service',
    subtitle: 'Aplikasi Web Booking Grooming Kucing dengan Next.js 15 & Prisma',
    category: 'Fullstack & Web',
    summary: 'Aplikasi web layanan grooming kucing lengkap dengan pemesanan online, integrasi WhatsApp, dashboard admin, pelacakan order, dan sistem rating pelanggan.',
    description: 'Membangun platform layanan perawatan kucing online berbasis Next.js 15 dan Prisma ORM dengan SQLite. Menyediakan katalog paket grooming, pemesanan online terintegrasi WhatsApp, pelacakan status pesanan, sistem rating ulasan, serta dashboard admin untuk pengelolaan booking.',
    image: imgWithLuv,
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Prisma ORM', 'SQLite', 'Zustand', 'TanStack Query'],
    features: [
      'Katalog paket layanan grooming kucing terperinci beserta informasi diskon',
      'Formulir booking reservasi online dengan validasi data pelanggan dan jadwal',
      'Integrasi direct chat konfirmasi pesanan otomatis via WhatsApp',
      'Pelacakan status pesanan (Order Tracking) secara real-time',
      'Sistem testimoni dan pemberian rating kepuasan pelanggan',
      'Dashboard admin terproteksi untuk manajemen reservasi, ulasan, dan analitik',
      'Desain antarmuka modern dan responsif berbasis shadcn/ui & Tailwind CSS'
    ],
    demoUrl: 'https://github.com/niasur/anabul.withluv',
    link: 'https://github.com/niasur/anabul.withluv',
    github: 'https://github.com/niasur/anabul.withluv',
    videoDemoUrl: 'https://youtu.be/0DLY1A6NfxI?si=fdU9Y_U6WN_q8YM2',
    highlight: true,
  },
  {
    id: 'evaluasi-usability-krs',
    title: 'Sistem Evaluasi Usability Sistem KRS Online',
    subtitle: 'Evaluasi Pengalaman Pengguna Fitur KRS SIAKAD UNIPEM (USE Questionnaire)',
    category: 'Fullstack & Web',
    summary: 'Sistem evaluasi usability berbasis USE Questionnaire dengan Skala Likert 1–5 untuk mengukur pengalaman pengguna fitur KRS SIAKAD UNIPEM.',
    description: 'Membangun aplikasi web evaluasi pengalaman pengguna (usability testing) terhadap fitur Kartu Rencana Studi (KRS) pada SIAKAD UNIPEM berbasis metode USE Questionnaire. Menyediakan instrumen kuesioner terstandarisasi mencakup 4 dimensi evaluasi (Usefulness, Ease of Use, Ease of Learning, dan Satisfaction) dengan skala Likert 1–5, formulir identitas mahasiswa terverifikasi, serta dashboard admin untuk agregasi dan visualisasi skor usability secara real-time.',
    image: imgEvaluasiKrs,
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'USE Questionnaire', 'Skala Likert', 'Data Aggregation'],
    features: [
      'Instrumen evaluasi terstandarisasi 4 dimensi: Usefulness, Ease of Use, Ease of Learning, dan Satisfaction',
      'Pengukuran kuantitatif berbasis Skala Likert 1–5 dengan validasi input responsif',
      'Dual role access: Portal Mahasiswa (input kuesioner berbasis Nama & NPM) dan Portal Admin',
      'Agregasi data hasil penilaian usability secara otomatis dan terstruktur per responden',
      'Penerapan langsung untuk penelitian skripsi pada fitur KRS SIAKAD Universitas Insan Pembangunan Indonesia (UNIPEM)',
      'Deployment produksi modern berbasis cloud pada platform Vercel'
    ],
    demoUrl: 'https://sistemevaluasiusability-sable.vercel.app/',
    link: 'https://sistemevaluasiusability-sable.vercel.app/',
    github: 'https://github.com/niasur/use',
    highlight: true,
  },
  {
    id: 'absensi-mobile-face',
    title: 'Absensi Mobile App Face Detection',
    subtitle: 'Aplikasi Presensi Digital berbasis Google ML Kit & Firebase',
    category: 'Mobile App',
    summary: 'Aplikasi presensi digital cerdas yang memanfaatkan deteksi wajah otomatis (Face Detection) menggunakan Google ML Kit dan deteksi lokasi otomatis via GPS.',
    description: 'Aplikasi mobile lengkap yang dibangun dengan Flutter untuk mempermudah presensi kehadiran karyawan atau mahasiswa. Dilengkapi fitur deteksi wajah langsung via kamera selfie, validasi radius koordinat GPS, perizinan cuti/sakit dengan rentang tanggal kalender, rekap riwayat absensi, serta dukungan Dark Mode.',
    image: imgAbsensiFaceApp1791175518149,
    technologies: ['Flutter', 'Dart', 'Google ML Kit', 'Firebase Firestore', 'Firebase Auth', 'Android Studio'],
    features: [
      'Absensi foto selfie dengan deteksi kontur wajah otomatis (Google ML Kit)',
      'Deteksi otomatis lokasi alamat GPS saat pengguna melakukan check-in/out',
      'Menu pengajuan Cuti, Izin, dan Sakit dengan pemilihan rentang kalender',
      'Riwayat absensi komprehensif dengan filter tanggal, abjad, dan status kehadiran',
      'Fitur Mode Gelap (Dark Mode) untuk kenyamanan pengguna',
      'Penyimpanan database realtime cloud Firebase'
    ],
    demoUrl: 'https://github.com/niasur/absensi_uts',
    link: 'https://github.com/niasur/absensi_uts',
    github: 'https://github.com/niasur/absensi_uts',
    highlight: true,
  },
  {
    id: 'ecommerce-flutter',
    title: 'Mobile App E-Commerce Flutter',
    subtitle: 'Aplikasi Belanja Online Modern Terintegrasi',
    category: 'Mobile App',
    summary: 'Aplikasi e-commerce sederhana dan modern yang dibuat menggunakan Flutter dengan Firebase Authentication dan JSON Server untuk pengelolaan data belanja.',
    description: 'Membangun aplikasi toko online dengan navigasi modern, filter kategori produk dinamis, sistem pencarian kata kunci, fitur simpan barang favorit (wishlist), keranjang belanja, proses checkout, serta riwayat pembelian.',
    image: imgEcommerceFlutter,
    technologies: ['Flutter', 'Dart', 'Firebase Auth', 'JSON Server', 'REST API', 'Provider State Management'],
    features: [
      'Autentikasi akun pengguna aman melalui Firebase Auth',
      'Pencarian dan penyaringan produk berdasarkan kategori',
      'Manajemen Wishlist / Favorit barang belanjaan',
      'Keranjang belanja dinamis dan perhitungan subtotal',
      'Riwayat transaksi pesanan belanja'
    ],
    demoUrl: 'https://github.com/niasur/e-commerce',
    link: 'https://github.com/niasur/e-commerce',
    github: 'https://github.com/niasur/e-commerce',
    videoDemoUrl: 'https://youtu.be/r_dx7NzrRW0?si=hCaG3O1IO2yL186K',
    highlight: true,
  },
  {
    id: 'ebook-store-flutter',
    title: 'eBookStore - Digital Bookstore Application',
    subtitle: 'Aplikasi Toko Buku Digital Berbasis Flutter, Firebase & JSON Server',
    category: 'Mobile App',
    summary: 'Aplikasi toko buku digital berbasis Flutter untuk menjelajahi, memilih, dan membeli buku online dengan Firebase, JSON Server, dan animasi interaktif.',
    description: 'Membangun aplikasi toko buku online berbasis Flutter dengan navigasi modern, autentikasi pengguna via Firebase, sinkronisasi katalog buku di Firestore, integrasi data author via JSON Server, cache lokal SharedPreferences, serta animasi Lottie dan transisi Hero.',
    image: imgEbookStore,
    technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'JSON Server', 'HTTP Package', 'SharedPreferences', 'Lottie Animation', 'Material Design'],
    features: [
      'Autentikasi akun pengguna aman (Login & Register) dengan Firebase Authentication',
      'Penyimpanan database realtime Cloud Firestore untuk data users, products, dan orders',
      'Integrasi data author dinamis dari JSON Server via HTTP package (http://localhost:3000/authors)',
      'Penyimpanan cache lokal SharedPreferences (tema, status login, favorit, cart, order/pending, profil)',
      'Animasi visual interaktif Lottie Animation pada splash, login, home, kategori, detail, dan keranjang',
      'Transisi dinamis FadeIn, AnimatedContainer, dan Hero Animation',
      'Desain antarmuka UI Material Design dengan dukungan Light & Dark Mode'
    ],
    demoUrl: 'https://github.com/niasur/e_book',
    link: 'https://github.com/niasur/e_book',
    github: 'https://github.com/niasur/e_book',
    videoDemoUrl: 'https://youtu.be/optiyU0MsDs?si=eSY0_9R5__Kxh0xv',
    highlight: true,
  },
  {
    id: 'portfolio-mobile-flutter',
    title: 'Portofolio Mobile Apps',
    subtitle: 'Aplikasi Portofolio Pribadi Mobile berbasis Flutter & Dart',
    category: 'Mobile App',
    summary: 'Aplikasi mobile portofolio interaktif yang dibangun menggunakan Flutter dan Dart, menampilkan profil developer, navigasi kategori (Tools, Works, Experiences, Education), serta tautan media sosial.',
    description: 'Pengembangan aplikasi mobile portofolio personal yang bersih dan responsif menggunakan framework Flutter. Memuat halaman About Me, profil biodata pengembang, navigasi section karya & pengalaman, serta integrasi tombol tautan eksternal ke GitHub, LinkedIn, dan Instagram.',
    image: imgPortfolioFlutterApp,
    technologies: ['Flutter', 'Dart', 'Android', 'Mobile App', 'UI/UX Mobile', 'Git'],
    features: [
      'Halaman About Me interaktif dengan informasi profil developer Nia Sur',
      'Navigasi kategori terstruktur: Tools, Works, Experiences, dan Education',
      'Tautan sosial media terintegrasi (GitHub, LinkedIn, Instagram)',
      'Desain antarmuka bersih, responsif, dan ramah smartphone',
      'Source code terbuka di repositori GitHub'
    ],
    demoUrl: 'https://github.com/niasur/tgs_portfolio_app_flutter',
    link: 'https://github.com/niasur/tgs_portfolio_app_flutter',
    github: 'https://github.com/niasur/tgs_portfolio_app_flutter',
    videoDemoUrl: 'https://youtu.be/f4RA94TYBFs?si=ixNJ2-tRX73kCoQg',
    highlight: true,
  },
  {
    id: 'sistem-penilaian-unipi',
    title: 'Sistem Informasi Penilaian Akademik',
    subtitle: 'Sistem Pengelolaan Nilai & KHS Mahasiswa Terintegrasi',
    category: 'Fullstack & Web',
    summary: 'Aplikasi web sistem informasi untuk pengelolaan dan kalkulasi nilai akademik mahasiswa, perancangan basis data terstruktur dengan relasi UML dan ERD.',
    description: 'Dibangun untuk memfasilitasi dosen dan staf program studi dalam menginput bobot penilaian tugas, UTS, UAS, serta menghasilkan kalkulasi IP/IPK otomatis dan cetak Kartu Hasil Studi (KHS). Dirancang menggunakan diagram UML, DFD, dan ERD untuk standardisasi software engineering.',
    image: imgEvaluasiKrs,
    technologies: ['PHP', 'MySQL', 'phpMyAdmin (XAMPP)', 'HTML5/CSS3', 'Bootstrap', 'ERD / UML'],
    features: [
      'Manajemen data mahasiswa, mata kuliah, dan dosen pengampu',
      'Formulir input nilai dengan validasi persentase bobot otomatis',
      'Kalkulasi nilai mutu huruf (A, B, C, D, E) dan IP/IPK realtime',
      'Ekspor dan pencetakan lembar KHS akademik'
    ],
    demoUrl: 'https://github.com/niasur/nilai',
    link: 'https://github.com/niasur/nilai',
    github: 'https://github.com/niasur/nilai.git',
    videoDemoUrl: 'https://youtu.be/E8C1w2erO90?si=i1F56a33NaQ9vhV6',
    highlight: false,
  },
  {
    id: 'express-mongo-swagger',
    title: 'Book Management API & Swagger Documentation',
    subtitle: 'RESTful Backend API dengan MongoDB & Dokumentasi Interaktif',
    category: 'Backend & API',
    summary: 'Backend REST API untuk manajemen data buku dengan arsitektur MVC, autentikasi JWT, koneksi MongoDB, dan dokumentasi interaktif Swagger UI.',
    description: 'Menyediakan endpoint CRUD komprehensif (Create, Read, Update, Delete) untuk katalog perpustakaan buku. Dilengkapi sistem autentikasi & otorisasi JWT (JSON Web Token), hashing password Bcrypt, penanganan error handling terpusat, koneksi Mongoose ODM, dan integrasi Swagger UI documentation yang dapat langsung diuji secara interaktif via browser.',
    image: imgBookManagementSwagger,
    screenshots: [
      {
        title: 'Tampilan Dokumentasi Interaktif Swagger UI (OAS 3.0)',
        image: imgBookManagementSwagger,
        caption: 'Dokumentasi antarmuka OpenAPI interaktif dengan endpoints POST /login, POST /books, GET /books, PUT /books/{id}, DELETE /books/{id}.'
      },
      {
        title: 'Verifikasi Koleksi Data Buku di MongoDB Database',
        image: '', // TODO: isi dengan import gambar MongoDB yang benar
        caption: 'Koneksi database MongoDB Atlas menampilkan dokumen buku real (Laskar Pelangi, Garis Batas, Pulang) tersimpan rapi.'
      }
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Swagger UI', 'JWT', 'Bcrypt', 'Postman'],
    features: [
      'Dokumentasi API interaktif menggunakan OpenAPI 3.0 & Swagger UI',
      'Autentikasi & Otorisasi pengguna berbasis JWT (JSON Web Token) dan Bcrypt',
      'Operasi CRUD lengkap untuk manajemen data dan katalog buku',
      'Proteksi endpoint (Protected Routes) untuk Create, Update, dan Delete',
      'Integrasi database MongoDB Atlas dengan skema Mongoose ODM terstruktur'
    ],
    demoUrl: 'https://github.com/niasur/Task4',
    link: 'https://github.com/niasur/Task4',
    github: 'https://github.com/niasur/Task4',
    highlight: true,
  },
  {
    id: 'aes-file-encryption-decryption',
    title: 'File Encryption & Decryption System (AES-256)',
    subtitle: 'Kriptografi Simetris AES-256-CBC, Scrypt KDF & Audit Logging',
    category: 'Backend & API',
    summary: 'Aplikasi enkripsi dan dekripsi file berbasis algoritma AES-256-CBC, pengamanan sandi dengan Scrypt KDF, inisialisasi IV dinamis, dan sistem audit logging otomatis di TypeScript / Node.js.',
    description: 'Mengembangkan sistem keamanan data dan kriptografi file menggunakan algoritma AES-256-CBC (Cipher Block Chaining) pada runtime Node.js & TypeScript. Dilengkapi derivasi kunci berbasis password pengguna menggunakan crypto.scryptSync dengan salt, pembangkitan vektor inisialisasi acak (randomBytes 16-byte) yang disematkan ke header ciphertext, verifikasi integritas dekripsi, penanganan error password salah (bad decrypt error handling), serta modul audit logger otomatis yang mencatat histori aktivitas setiap operasi enkripsi dan dekripsi dengan timestamp ISO terstruktur ke dalam direktori logs.',
    image: imgTask3EncryptionBanner,
    screenshots: [
      {
        title: '1. Pengujian Enkripsi Berhasil & Verifikasi Terminal',
        image: imgTask3EncryptSuccess,
        caption: 'Eksekusi CLI ts-node untuk mengenkripsi file teks (file.txt) dengan password menjadi file_encrypted.txt.'
      },
      {
        title: '2. Hasil File Terenkripsi (Ciphertext) & Validasi Password Salah',
        image: imgTask3DecryptWrongPass,
        caption: 'Tampilan ciphertext acak berproteksi tinggi serta penanganan error "bad decrypt" ketika password salah dimasukkan.'
      },
      {
        title: '3. Verifikasi Dekripsi Berhasil & Pemulihan Teks Asli',
        image: imgTask3DecryptSuccess,
        caption: 'Pemulihan data plaintext 100% sempurna ke file_decrypted.txt menggunakan password otentik yang benar.'
      },
      {
        title: '4. Pencatatan Audit Log Otomatis dengan Timestamp ISO',
        image: imgTask3ActivityLogs,
        caption: 'Catatan rekaman log aktivitas (audit trail) otomatis di folder /logs dengan penanda waktu ISO untuk keamanan & transparansi.'
      }
    ],
    technologies: ['TypeScript', 'Node.js', 'Crypto (AES-256-CBC)', 'Scrypt KDF', 'FS Promises', 'CLI / ts-node', 'Cybersecurity & Encryption'],
    features: [
      'Enkripsi simetris AES-256-CBC berkekuatan tinggi untuk proteksi kerahasiaan file',
      'Derivasi kunci kriptografi berbasis password pengguna dengan crypto.scryptSync dan salt',
      'Pembangkitan Initialization Vector (IV) acak 16-byte untuk setiap siklus enkripsi unik',
      'Penanganan error dan validasi integritas saat password tidak cocok (bad decrypt)',
      'Sistem audit logging otomatis dengan stempel waktu ISO presisi tinggi ke folder logs',
      'Antarmuka Command Line Interface (CLI) interaktif berbasis argument parser di index.ts'
    ],
    demoUrl: 'https://github.com/niasur/task3',
    link: 'https://github.com/niasur/task3',
    github: 'https://github.com/niasur/task3',
    highlight: true,
  },
  {
    id: 'ci-cd-docker-testing',
    title: 'Automated CI/CD Pipeline & Docker Containerization',
    subtitle: 'Pipeline Deployment Otomatis GitHub Actions & Docker',
    category: 'Backend & API',
    summary: 'Implementasi pipeline Continuous Integration & Continuous Deployment (CI/CD) menggunakan GitHub Actions dan containerization Docker pada microservice API.',
    description: 'Mengonfigurasi workflow otomatis pada repository GitHub untuk mengeksekusi suite unit test pada setiap commit/pull request, membangun image Docker yang terisolasi, dan memverifikasi integritas build sebelum rilis.',
    image: imgDockerCicdPipeline,
    technologies: ['Docker', 'GitHub Actions', 'Jest', 'Supertest', 'TypeScript', 'Node.js', 'CI/CD'],
    features: [
      'Automated pipeline yang memicu pengujian unit pada push/PR',
      'Dockerization aplikasi Node.js dengan multi-stage build efisien',
      'Pengujian integrasi endpoint dan coverage report pengujian'
    ],
    demoUrl: 'https://github.com/niasur/Task-5',
    link: 'https://github.com/niasur/Task-5',
    github: 'https://github.com/niasur/Task-5',
    highlight: false,
  },
  {
    id: 'react-component-testing',
    title: 'ReactJS Component Testing & CI/CD',
    subtitle: 'Pengujian Komponen Frontend & Pipeline Otomasi',
    category: 'Fullstack & Web',
    summary: 'Penerapan metodologi pengujian komponen UI frontend (Unit & Integration Testing) serta integrasi CI/CD otomatis pada aplikasi web berbasis React.',
    description: 'Menulis test suite menggunakan React Testing Library dan Vitest/Jest untuk memverifikasi perilaku render, interaksi klik tombol pengguna, state updates, dan responsivitas antarmuka tanpa celah bug regresi.',
    image: imgReactTestingCoba7,
    technologies: ['React.js', 'React Testing Library', 'Jest', 'GitHub Actions', 'JavaScript'],
    features: [
      'Pengujian fungsionalitas tombol, formulir, dan state interaktif',
      'Snapshot testing untuk kestabilan layout antarmuka',
      'Workflow verifikasi commit melalui continuous integration'
    ],
    demoUrl: 'https://github.com/niasur/coba7',
    link: 'https://github.com/niasur/coba7',
    github: 'https://github.com/niasur/coba7',
    highlight: false,
  },
  {
    id: 'typescript-fundamental-case',
    title: 'TypeScript Type System & RPG Adventure Simulation Logic',
    subtitle: 'Eksplorasi Sistem Tipe Statis, Kompilasi tsc & Logika Misi Kerajaan',
    category: 'Backend & API',
    summary: 'Implementasi 25+ fitur type system TypeScript komprehensif, validasi static typing, kalkulator matematika fungsional, dan simulasi logika petualangan kerajaan berbasis state logic.',
    description: 'Proyek ini mempraktikkan fondasi pemrograman TypeScript secara mendalam dalam dua modul tugas utama: (1) Eksplorasi 25+ fitur type system TypeScript mulai dari static typing (primitif, union types, type alias, ANSI color enums, custom interface Person, function type, void, never error handling, hingga type assertion .length) serta kalkulator operasi matematika fungsional (penjumlahan, perkalian, pengurangan, pembagian); (2) Pengembangan simulasi petualangan pahlawan RPG (Arion) dengan pengelolaan kas emas kerajaan, kalkulasi pertempuran dan pengurangan poin kesehatan prajurit secara kondisional, serta rekapitulasi ringkasan misi Arion.',
    image: imgTask2Week3Banner,
    screenshots: [
      {
        title: '1. Modul 1: TypeScript Type System, Interfaces & Error Handling',
        image: imgTask2Week3Tugas1Types,
        caption: 'Kompilasi tsc dan eksekusi ts-node untuk verifikasi tipe data primitif, union, enums ANSI warna, fungsi void, serta penanganan try-catch error message.'
      },
      {
        title: '2. Modul 1: Tuple, Type Assertion & Functional Math Operations',
        image: imgTask2Week3Tugas1Math,
        caption: 'Pengujian tipe data array, tuple koordinat, unknown, type assertion string length, dan fungsi matematika murni (penjumlahan, perkalian, pengurangan, pembagian).'
      },
      {
        title: '3. Modul 2: RPG Game Simulation & Kingdom Mission Summary',
        image: imgTask2Week3Tugas2Rpg,
        caption: 'Simulasi petualangan Pahlawan Arion: pengelolaan kas emas kerajaan (5000 -> 6500), kalkulasi sisa kesehatan prajurit (95 HP), serta perolehan 75 XP.'
      }
    ],
    technologies: ['TypeScript', 'Node.js', 'ts-node', 'Nodemon', 'Type System', 'OOP', 'Functional Programming'],
    features: [
      'Eksplorasi mendalam sistem tipe data TypeScript (Primitif, Union, Intersection, Literal Types, Tuple, dan Unknown)',
      'Validasi interface objek kustom (Person) & dynamic type assertion (.length)',
      'Penggunaan ANSI color Enums untuk visual formatting terminal output',
      'Koleksi fungsi operasi matematika fungsional (penjumlahan, perkalian, pengurangan, pembagian)',
      'Simulasi logika petualangan RPG: pengelolaan kas emas kerajaan, kondisi pertempuran, dan status kesehatan prajurit',
      'Otomatisasi runtime development menggunakan nodemon dan ts-node untuk live-reloading'
    ],
    demoUrl: 'https://github.com/niasur/Tugas2-week3',
    link: 'https://github.com/niasur/Tugas2-week3',
    github: 'https://github.com/niasur/Tugas2-week3',
    highlight: false,
  },
  {
    id: 'figma-mobile-ui-design',
    title: 'Mobile App UI/UX Design & Prototype',
    subtitle: 'Perancangan Wireframe & High-Fidelity Prototype di Figma',
    category: 'UI/UX & Desain',
    summary: 'Perancangan antarmuka pengguna (UI/UX) aplikasi mobile berbasis user-centered design, pembuatan komponen modular, dan prototype interaktif di Figma.',
    description: 'Merancang alur pengguna (user flow), wireframing low-fidelity hingga prototipe high-fidelity yang siap diimplementasikan oleh tim developer, lengkap dengan color palette dan hierarki tipografi.',
    image: imgFigmaMobileUiDesign,
    technologies: ['Figma', 'Canva', 'Design Systems', 'Prototyping', 'Wireframing'],
    features: [
      'Komponen design system yang konsisten dan reusable',
      'Prototipe interaktif dengan animasi transisi layar',
      'Riset UX dan user personas untuk kemudahan akses'
    ],
    demoUrl: 'https://www.figma.com/design/qjzWeMGPuWoSwOtlfVQXRA/Workshop--HMSI?node-id=0-1&p=f',
    link: 'https://www.figma.com/design/qjzWeMGPuWoSwOtlfVQXRA/Workshop--HMSI?node-id=0-1&p=f',
    highlight: false,
  },
  {
    id: 'figma-begal-web-design',
    title: 'Web App UI/UX Design - BEGAL (Beli Galon)',
    subtitle: 'Desain Antarmuka Web, Design System & Wireframe di Figma',
    category: 'UI/UX & Desain',
    summary: 'Perancangan antarmuka pengguna (UI/UX) dan wireframe sistem web BEGAL (Beli Galon) menggunakan Figma dan Canva dengan pendekatan user-centered design.',
    description: 'Merancang antarmuka web responsif sistem pemesanan galon online BEGAL end-to-end. Meliputi perancangan komponen design system (typography, color palette, buttons, forms), wireframe alur pemesanan (browse to purchase), serta mockup desktop high-fidelity dari halaman beranda hingga proses checkout pesanan.',
    image: imgFigmaBegalUiDesign,
    technologies: ['Figma', 'Canva', 'UI/UX Design', 'Design System', 'Wireframing', 'Prototyping'],
    features: [
      'Komponen design system lengkap (palet warna, tipografi, button states, form input)',
      'User flow diagram dan wireframe alur pemesanan produk galon air',
      'High-fidelity desktop screens (halaman utama, katalog depot, formulir checkout, riwayat order)',
      'Riset antarmuka yang intuitif dan ramah pengguna'
    ],
    demoUrl: 'https://www.figma.com/design/ednppyhFlyzGjc6h9KWjzK/begal?node-id=0-1&p=f',
    link: 'https://www.figma.com/design/ednppyhFlyzGjc6h9KWjzK/begal?node-id=0-1&p=f',
    highlight: true,
  },
  {
    id: 'ml-clustering-classification',
    title: 'End-to-End Machine Learning Pipeline',
    subtitle: 'EDA, K-Means Clustering, & Decision Tree Classification',
    category: 'Data & Riset',
    summary: 'Membangun alur Machine Learning komprehensif mulai dari pembersihan data, segmentasi pola dengan K-Means (Elbow Method), hingga klasifikasi Decision Tree.',
    description: 'Membangun alur Machine Learning komprehensif mulai dari pembersihan data, segmentasi pola menggunakan algoritma K-Means (Elbow Method), hingga pembuatan model prediksi klasifikasi otomatis.',
    image: imgMlPipelineEdaChart,
    technologies: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Scikit-Learn', 'K-Means Clustering', 'Decision Tree', 'PCA', 'Pandas'],
    features: [
      'Pembersihan data dan analisis eksploratif komprehensif (EDA & Preprocessing)',
      'Segmentasi pola data dengan algoritma K-Means Clustering dan validasi Elbow Method',
      'Reduksi dimensi fitur data menggunakan Principal Component Analysis (PCA)',
      'Pemodelan prediksi klasifikasi otomatis dengan algoritma Decision Tree Classifier',
      'Penyimpanan model teroptimasi dan ekspor pipeline machine learning'
    ],
    demoUrl: 'https://github.com/niasur/ml-clustering-classification',
    link: 'https://github.com/niasur/ml-clustering-classification',
    github: 'https://github.com/niasur/ml-clustering-classification',
    highlight: true,
  },
  {
    id: 'healthcare-linear-regression-model',
    title: 'Healthcare Visit Estimation Model',
    subtitle: 'Pendekatan Matematis Algoritma Regresi Linear',
    category: 'Data & Riset',
    summary: 'Estimasi matematis data historis rekam medis menggunakan algoritma Regresi Linear (X, Y, konstanta, dan koefisien) untuk memprediksi lonjakan kunjungan pasien puskesmas.',
    description: 'Melakukan perhitungan estimasi data historis rekam medis menggunakan perumusan matematis algoritma Regresi Linear (pencarian nilai X, Y, Konstanta, dan Koefisien) untuk memprediksi lonjakan kunjungan pasien puskesmas di masa depan.',
    image: imgRapidminerHealthcareModel,
    technologies: ['Linear Regression', 'RapidMiner', 'Microsoft Excel', 'Statistical Modeling', 'Predictive Analytics', 'Healthcare Data'],
    features: [
      'Perumusan matematis algoritma Regresi Linear: kalkulasi variabel X, Y, nilai konstanta, dan koefisien regresi',
      'Analisis estimasi tren berbasis data historis rekam medis kunjungan pasien puskesmas',
      'Implementasi pemodelan prediktif analitik menggunakan perangkat lunak RapidMiner (.rmp)',
      'Peramalan (forecasting) potensi lonjakan kunjungan pasien untuk optimalisasi alokasi faskes',
      'Pengolahan dan transformasi dataset kuantitatif terstruktur pada spreadsheet Excel'
    ],
    demoUrl: 'https://github.com/niasur/linear-regression-math-model',
    link: 'https://github.com/niasur/linear-regression-math-model',
    github: 'https://github.com/niasur/linear-regression-math-model',
    highlight: true,
  },
  {
    id: 'sales-advertising-predictive-analytics',
    title: 'Sales & Advertising Predictive Analytics',
    subtitle: 'Analisis Regresi Linear dengan RapidMiner',
    category: 'Data & Riset',
    summary: 'Model estimasi Regresi Linear untuk mengevaluasi efektivitas alokasi anggaran iklan terhadap tingkat penjualan produk secara objektif.',
    description: 'Membangun model estimasi Regresi Linear untuk mengevaluasi efektivitas alokasi anggaran iklan (TV, Radio, Koran) terhadap tingkat penjualan produk secara objektif untuk mendukung keputusan bisnis.',
    image: imgRapidminerSalesModel,
    technologies: ['RapidMiner', 'Linear Regression', 'Data Mining', 'Predictive Analytics', 'Marketing Mix Modeling', 'Business Intelligence'],
    features: [
      'Pemodelan Multiple Linear Regression untuk mengevaluasi dampak pengeluaran iklan terhadap penjualan',
      'Analisis kontribusi spesifik masing-masing channel promosi (TV, Radio, Koran) terhadap revenue',
      'Desain proses workflow data mining terstandarisasi berbasis file konfigurasi .rmp di RapidMiner',
      'Kalkulasi koefisien korelasi dan signifikansi statistik variabel periklanan',
      'Penyusunan rekomendasi alokasi anggaran pemasaran berbasis data empiris'
    ],
    demoUrl: 'https://github.com/niasur/sales-prediction-rapidminer',
    link: 'https://github.com/niasur/sales-prediction-rapidminer',
    github: 'https://github.com/niasur/sales-prediction-rapidminer',
    highlight: true,
  },
  {
    id: 'novo-club-project',
    title: 'Novo Club Health Campaign Project',
    subtitle: 'Pola Hidup Bersih Sehat - Paranovo ParagonCorp',
    category: 'UI/UX & Desain',
    summary: 'Inisiatif proyek sosial kolaboratif kepemimpinan Novo Club dari ParagonCorp, berperan sebagai Humas, desainer konten, dan dokumentasi kampanye.',
    description: 'Mengembangkan materi publikasi kampanye gaya hidup sehat bagi generasi muda, mengoordinir penyuluhan interaktif, serta menyusun materi presentasi dan media komunikasi visual.',
    image: imgNovoClubProject,
    technologies: ['Public Relations', 'Canva', 'Content Strategy', 'Project Management'],
    features: [
      'Perancangan materi edukasi visual dan presentasi publik',
      'Koordinasi komunikasi antartim dan stakeholder',
      'Dokumentasi dan evaluasi dampak kegiatan kampanye'
    ],
    demoUrl: 'https://www.instagram.com/reels/CvreWHypDTF/',
    link: 'https://www.instagram.com/reels/CvreWHypDTF/',
    videoDemoUrl: 'https://youtu.be/v8oHZ367Feo?si=EzYmcxwFHZ0lSgSW',
    highlight: false,
  },
  {
    id: 'game-sederhana-2d',
    title: 'Game Sederhana 2D',
    subtitle: 'Pengembangan Game 2D Interaktif dengan GameMaker & Construct 2',
    category: 'Game Development',
    summary: 'Pengembangan game 2D interaktif sederhana menggunakan GameMaker 8.1 dan Construct 2, mencakup logika mekanik rintangan, pergerakan karakter, deteksi tabrakan (collision), dan sistem skor.',
    description: 'Proyek pengembangan game 2D edukatif dan hiburan sederhana menggunakan engine GameMaker 8.1 dan Construct 2. Mengimplementasikan logika pemrograman game berbasis event & visual scripting, penanganan physics, pengaturan collision objek rintangan, pergerakan karakter, sound effect, serta pengelolaan level game.',
    image: imgGameSederhana,
    technologies: ['GameMaker 8.1', 'Construct 2', 'Game Development', '2D Physics', 'Game Design', 'Logic Scripting'],
    features: [
      'Mekanik pergerakan karakter 2D yang responsif',
      'Rintangan dinamis (obstacle) dengan deteksi tabrakan (collision detection)',
      'Logika alur permainan berbasis event dan visual scripting Construct 2 & GameMaker 8.1',
      'Manajemen level, batas layar (boundary), dan kalkulasi skor permainan',
      'File proyek dan source code lengkap tersimpan di Google Drive'
    ],
    demoUrl: 'https://drive.google.com/drive/folders/1Smh-jiBMz3FMi_qXhGPEdSmcwdQH2RtB',
    link: 'https://drive.google.com/drive/folders/1Smh-jiBMz3FMi_qXhGPEdSmcwdQH2RtB',
    videoDemoUrl: 'https://youtu.be/Fus_JwD4MxU?si=kpkFRESC9Lxu6nXq',
    highlight: true,
  },
];

export const CERTIFICATIONS: CertificateItem[] = [
  {
    id: 'cert-bnsp-akuntansi',
    title: 'Sertifikat Kompetensi Akuntansi dan Keuangan Lembaga',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) & SMKN 4 Kab. Tangerang',
    category: 'Kompetensi & Profesi',
    date: '2021',
    credential: 'No. BNSP / SMKN 4 Kab. Tangerang',
    description: 'Sertifikasi kompetensi resmi tingkat nasional yang menguji kecakapan profesional dalam pembukuan, jurnal akuntansi, pengelolaan kas, dan pelaporan keuangan terstandarisasi.',
    highlight: true,
  },
  {
    id: 'cert-msib-fullstack',
    title: 'Kompetensi Studi Independen Fullstack Software Development',
    issuer: 'PT. Produk Zilla Akademi Indonesia & Kampus Merdeka',
    category: 'Kompetensi & Profesi',
    date: '2024',
    credential: 'Predikat: Luar Biasa (Outstanding)',
    description: 'Sertifikat kelulusan program intensif MSIB Fullstack Software Development Kampus Merdeka Batch 7 dengan predikat tertinggi "Luar Biasa", menguasai stack modern (React, Node, Express, MongoDB, Flutter, CI/CD).',
    highlight: true,
  },
  {
    id: 'cert-msib-keaktifan',
    title: 'Certificate of Appreciation - 98% Attendance & Active Participation',
    issuer: 'PT Produk Zilla Akademi Indonesia (MSIB Batch 7)',
    category: 'Kompetensi & Profesi',
    date: '2024',
    credential: '98% Attendance and Active Participation',
    description: 'Penghargaan atas komitmen tinggi, kedisiplinan luar biasa, dan keaktifan penuh dalam seluruh sesi pelatihan teknis, mentoring industri, serta pengerjaan tugas proyek.',
    highlight: true,
  },
  {
    id: 'cert-novo-bootcamp',
    title: 'Novo Club Leadership Bootcamp & Group Project',
    issuer: 'ParagonCorp (PT Paragon Technology and Innovation)',
    category: 'Bootcamp & Kepemimpinan',
    date: '2023',
    credential: 'Novo Club Batch 2',
    description: 'Pelatihan kepemimpinan komprehensif mencakup 7 Habits of Highly Effective People, Critical Thinking, Complex Problem Solving, Design Thinking, dan eksekusi Social Project.',
    highlight: true,
  },
  {
    id: 'cert-prakerin-mega-property',
    title: 'Sertifikat Prakerin - Administrasi Pemasaran',
    issuer: 'PT. Mega Property Group (Realestate & Property)',
    category: 'Kompetensi & Profesi',
    date: '2021',
    credential: 'Nilai: Amat Baik',
    description: 'Sertifikat kelulusan praktik kerja lapangan pada divisi Administrasi Pemasaran di perusahaan pengembang real estate terkemuka.',
    highlight: false,
  },
  {
    id: 'cert-hmsi-sekretaris',
    title: 'Certificate of Achievement – Sekretaris II HMSI UNIPI',
    issuer: 'Himpunan Mahasiswa Sistem Informasi UNIPI',
    category: 'Kepanitiaan & Organisasi',
    date: '2023 – 2024',
    credential: 'SK Kepengurusan Periode 2023-2024',
    description: 'Penghargaan atas dedikasi dan kontribusi sebagai Sekretaris II dalam mengelola administrasi, surat-menyurat, arsip AD/ART, proposal, dan koordinasi internal himpunan.',
    highlight: true,
  },
  {
    id: 'cert-workshop-figma',
    title: 'Sertifikat Workshop Figma: Membangun Desain Prototype Mobile Apps',
    issuer: 'Fakultas Ilmu Komputer UNIPI',
    category: 'Workshop & Teknis',
    date: '2025',
    credential: 'Peserta Workshop Desain UI/UX',
    description: 'Workshop intensif perancangan wireframe, interactive mobile prototyping, atomic design, dan pembuatan mockup sistematis di Figma.',
    highlight: true,
  },
  {
    id: 'cert-data-analyst',
    title: 'Workshop Data Analyst & Live Coding',
    issuer: 'Glints Academy / Kampus Merdeka Partner',
    category: 'Workshop & Teknis',
    date: '2023',
    credential: 'Bagaimana Menjadi Data Analyst: Peluang Karir Gen Z',
    description: 'Pelatihan pemrosesan data, live coding querying, visualisasi tren bisnis, serta eksplorasi karir data analysis di industri teknologi modern.',
    highlight: false,
  },
  {
    id: 'cert-data-warehouse',
    title: 'Workshop Data Warehouse Management',
    issuer: 'Himpunan Mahasiswa Software Engineering UNIPI',
    category: 'Workshop & Teknis',
    date: '2024',
    credential: 'Peserta Workshop DWH',
    description: 'Pembelajaran arsitektur data warehouse, teknik ETL (Extract-Transform-Load), skema star/snowflake, dan optimasi query database analitik.',
    highlight: false,
  },
  {
    id: 'cert-ldko-hmsi',
    title: 'Latihan Dasar Kepemimpinan Organisasi (LDKO) HMSI',
    issuer: 'HMSI Universitas Insan Pembangunan Indonesia',
    category: 'Bootcamp & Kepemimpinan',
    date: '2023',
    credential: 'Tema: Generasi Berjiwa Pemimpin & Berkomitmen Tinggi',
    description: 'Pelatihan dasar manajerial organisasi, kepemimpinan tim, manajemen konflik, dan pembentukan integritas kerja di Bumi Perkemahan Kitri Bakti.',
    highlight: false,
  },
  {
    id: 'cert-ldko-english-club',
    title: 'Certificate of Appreciation LDKO English Club',
    issuer: 'Departemen English Club UNIPI',
    category: 'Bootcamp & Kepemimpinan',
    date: '2023',
    credential: 'Building a Leadership with Character in the Millennial Generation',
    description: 'Pelatihan kepemimpinan dan komunikasi bahasa Inggris interaktif untuk membangun karakter berani dan berpikiran global.',
    highlight: false,
  },
  {
    id: 'cert-pdd-seminar-dies-natalis',
    title: 'Sertifikat Panitia Sie PDD Seminar Nasional & Dies Natalis HMSI',
    issuer: 'Universitas Insan Pembangunan Indonesia',
    category: 'Kepanitiaan & Organisasi',
    date: '2023',
    credential: 'Sie Publikasi, Desain & Dokumentasi (PDD)',
    description: 'Bertanggung jawab atas seluruh desain visual banner, ID card, sertifikat peserta, draft MC, serta rekaman dokumentasi acara berskala nasional.',
    highlight: false,
  },
  {
    id: 'cert-panitia-wisuda',
    title: 'Sertifikat Panitia Wisuda UNIPI 2024 as Pengarah Tamu',
    issuer: 'Universitas Insan Pembangunan Indonesia',
    category: 'Kepanitiaan & Organisasi',
    date: '2024',
    credential: 'Pengarah Tamu & VIP Guest Liaison',
    description: 'Bertugas memberikan arahan, informasi, pendampingan tamu kehormatan, serta menjaga ketertiban kelancaran upacara wisuda sarjana.',
    highlight: false,
  },
  {
    id: 'cert-webinar-transformasi-digital',
    title: 'Webinar Nasional Transformasi Digital Bagi UMKM',
    issuer: 'Indonesia Webinar Nasional Festival',
    category: 'Webinar & Seminar',
    date: '2023',
    credential: 'Peserta Webinar Nasional',
    description: 'Memahami adopsi digital payment, otomasi pencatatan bisnis, dan penguatan pondasi e-commerce bagi pertumbuhan ekonomi masyarakat.',
    highlight: false,
  },
  {
    id: 'cert-webinar-genz-data',
    title: 'Webinar Analyzing Gen Z Happiness: Insight from Data',
    issuer: 'OSAA Webinar Data Series',
    category: 'Webinar & Seminar',
    date: '2023',
    credential: 'Era Modern dan Dampak Besar Data di Dalamnya',
    description: 'Menganalisis pola data perilaku generasi Z melalui pendekatan survei kuantitatif dan analisis statistik modern.',
    highlight: false,
  },
  {
    id: 'cert-english-adventure',
    title: 'Certificate of Participation English Adventure to Art & History Exploration',
    issuer: 'English Club UNIPI',
    category: 'Webinar & Seminar',
    date: '2023',
    credential: 'Indonesian National Museum Jakarta',
    description: 'Kegiatan ekskursi edukatif berbahasa Inggris mendalami warisan sejarah dan seni budaya di Museum Nasional Indonesia.',
    highlight: false,
  },
  {
    id: 'cert-seminar-public-speaking',
    title: 'Peserta Seminar Public Speaking & Personal Branding',
    issuer: 'UNIPI Career Development',
    category: 'Webinar & Seminar',
    date: '2024',
    credential: 'Peserta Seminar',
    description: 'Pengembangan kemampuan komunikasi verbal, teknik presentasi persuasif di depan audiens, serta pembentukan personal branding profesional.',
    highlight: false,
  },
  {
    id: 'cert-seminar-bem-2025',
    title: 'Seminar Nasional BEM 2025',
    issuer: 'Badan Eksekutif Mahasiswa UNIPI',
    category: 'Webinar & Seminar',
    date: '2025',
    credential: 'Peserta Seminar',
    description: 'Partisipasi dalam seminar kepemudaan dan literasi digital pencegahan kejahatan finansial digital.',
    highlight: false,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-edu-unipi',
    role: 'S1 Sistem Informasi (Mahasiswi Tingkat Akhir / Fresh Graduate)',
    institution: 'Universitas Insan Pembangunan Indonesia (UNIPI)',
    location: 'Bitung, Tangerang, Banten',
    period: '2022 - Sekarang',
    type: 'Pendidikan',
    badges: ['IPK : 3.94 / 4.00', 'Fakultas Ilmu Komputer', 'Lulusan Unggulan'],
    description: [
      'Meraih Indeks Prestasi Kumulatif (IPK) 3.94 pada program studi Sistem Informasi.',
      'Mendalami rekayasa perangkat lunak web dan mobile: Flutter (Android/Web), React.js, Express.js, Node.js, PHP, C++, Swift, Dart, dan TypeScript.',
      'Melaksanakan perancangan sistem terstruktur menggunakan diagram UML, DFD, dan ERD (PowerDesigner, Draw.io, Astah).',
      'Mempelajari integrasi basis data SQL (MySQL, PostgreSQL) dan NoSQL (MongoDB, Firebase Firestore).',
      'Menguasai metodologi pengujian perangkat lunak: Unit Testing (TDD), White-box & Black-box testing.',
      'Analisis Big Data dan Data Mining menggunakan RapidMiner untuk pemodelan prediktif bisnis.',
      'Memahami dasar keamanan komputer, enkripsi data, serta hukum cyber dan etika profesi IT.'
    ]
  },
  {
    id: 'exp-msib-produkzilla',
    role: 'Fullstack Software Development (Studi Independen Bersertifikat)',
    institution: 'PT. Produk Zilla Akademi Indonesia x Kampus Merdeka Batch 7',
    location: 'Jakarta / Remote',
    period: 'Agustus 2024 - Desember 2024',
    type: 'Pendidikan',
    badges: ['Predikat: Luar Biasa', 'Tingkat Kehadiran 98%', 'Capstone Begal App'],
    description: [
      'Menuntaskan kurikulum intensif Fullstack Software Development dengan predikat tertinggi "Luar Biasa" dan absensi 98%.',
      'Mengembangkan arsitektur backend REST API dengan Express.js, MongoDB, JWT authentication, dan dokumentasi Swagger UI.',
      'Membangun aplikasi frontend modern berbasis React.js dan Tailwind CSS dengan pengujian komponen otomatis via React Testing Library.',
      'Mengimplementasikan pipeline CI/CD menggunakan GitHub Actions dan containerization aplikasi dengan Docker.',
      'Berkolaborasi dalam tim mengembangkan Capstone Project "BEGAL (Beli Galon)" dari tahap perancangan wireframe hingga deployment.'
    ]
  },
  {
    id: 'exp-work-mega-property',
    role: 'Administrasi Pemasaran (Praktik Kerja Industri / PKL)',
    institution: 'PT. Mega Property Group (Realestate & Property)',
    location: 'Jl. Ariya Wasangkara, Tangerang',
    period: 'Maret 2021 - April 2021',
    type: 'Pekerjaan',
    badges: ['Nilai: Amat Baik', 'Pengalaman Lapangan', 'Finance & Admin'],
    description: [
      'Melayani konsumen properti dengan ramah, mendengarkan kebutuhan spesifik calon pembeli, serta memberikan rekomendasi unit yang tepat.',
      'Mencatat dan memperbarui basis data calon konsumen harian ke sistem digital.',
      'Menerbitkan dan memvalidasi kuitansi bukti pembayaran transaksi uang muka dan cicilan konsumen.',
      'Menangani transaksi penerimaan dan pengeluaran kas operasional serta menyusun buku kas harian secara presisi.',
      'Melakukan rekapitulasi data pembukuan ke Microsoft Excel dan mengarsipkan berkas legalitas properti secara sistematis.'
    ]
  },
  {
    id: 'exp-org-sekretaris-hmsi',
    role: 'Sekretaris II Kepengurusan',
    institution: 'Himpunan Mahasiswa Sistem Informasi (HMSI) UNIPI',
    location: 'Tangerang',
    period: 'Periode 2023 - 2024',
    type: 'Organisasi',
    badges: ['Kepengurusan Himpunan', 'Administrasi & Arsip', 'Leadership'],
    description: [
      'Mengelola tata kelola administrasi resmi dan sistem persuratan internal maupun eksternal himpunan.',
      'Menyusun proposal kegiatan, anggaran biaya, lembar notulen rapat pleno, serta laporan pertanggungjawaban (LPJ).',
      'Memelihara arsip dokumen konstitusi AD/ART dan legalitas organisasi himpunan mahasiswa.',
      'Menjembatani koordinasi operasional antar divisi kerja dan pimpinan program studi.'
    ]
  },
  {
    id: 'exp-org-novo-club',
    role: 'Volunteer, Bootcamp & Humas Group Project',
    institution: 'Novo Club by ParagonCorp (PT Paragon Technology and Innovation)',
    location: 'Tangerang / Hybrid',
    period: 'Februari - Agustus 2023',
    type: 'Organisasi',
    badges: ['ParagonCorp', 'Public Relations', 'Social Project'],
    description: [
      'Terpilih mengikuti program pengembangan kepemimpinan Novo Club dari ParagonCorp.',
      'Mengembangkan solusi sosial pada Group Project bertema "Pola Hidup Bersih Sehat".',
      'Bertindak sebagai Humas (Hubungan Masyarakat) untuk menjalin kemitraan, publikasi informasi, dan dokumentasi kegiatan.'
    ]
  },
  {
    id: 'exp-kep-panitia-unipi',
    role: 'Pengalaman Kepanitiaan Kampus & Acara Nasional',
    institution: 'Universitas Insan Pembangunan Indonesia',
    location: 'Tangerang',
    period: '2023 - 2024',
    type: 'Kepanitiaan',
    badges: ['Sie PDD', 'Wisuda 2024', 'MUBES HMSI'],
    description: [
      'Sie PDD Seminar Nasional & Dies Natalis HMSI (17 September 2023): Desain banner, ID card, sertifikat, backdrop, dan dokumentasi video.',
      'Sie Kesekretariatan MUBES HMSI (17 Oktober 2023): Pengelolaan berkas persidangan AD/ART, presensi, dan arsip ketetapan.',
      'Panitia Wisuda Sarjana UNIPI (25 Oktober 2024): Pengarah tamu kehormatan dan koordinasi ketertiban ruang wisuda.',
      'Sie PDD Seminar & LDKO English Club: Publikasi visual, poster informasi, dan materi presentasi digital.'
    ]
  },
  {
    id: 'exp-edu-smkn4',
    role: 'Kompetensi Akuntansi dan Keuangan Lembaga',
    institution: 'SMKN 4 Kabupaten Tangerang',
    location: 'Tangerang, Banten',
    period: 'Lulus 2021',
    type: 'Pendidikan',
    badges: ['Sertifikasi BNSP', 'Juara Prakerin', 'Dasar Keuangan Kuat'],
    description: [
      'Mempelajari dasar akuntansi keuangan, jurnal umum, buku besar, neraca lajur, dan perpajakan dasar.',
      'Meraih Sertifikat Kompetensi Profesi terlisensi Badan Nasional Sertifikasi Profesi (BNSP).'
    ]
  }
];

export const SKILLS_DATA = {
  hardSkills: [
    { name: 'React.js & Vite', level: 'Mahir', category: 'Frontend' },
    { name: 'Next.js 15 & Prisma ORM', level: 'Menengah', category: 'Frontend' },
    { name: 'TypeScript & JavaScript', level: 'Mahir', category: 'Frontend' },
    { name: 'HTML5, CSS3, DOM & Tailwind CSS', level: 'Mahir', category: 'Frontend' },
    { name: 'Flutter & Dart', level: 'Menengah', category: 'Mobile App' },
    { name: 'Android Studio (Java & Kotlin)', level: 'Menengah', category: 'Mobile App' },
    { name: 'Node.js & Express.js', level: 'Mahir', category: 'Backend' },
    { name: 'RESTful API & Swagger UI', level: 'Mahir', category: 'Backend' },
    { name: 'MongoDB & Mongoose', level: 'Menengah', category: 'Database' },
    { name: 'SQL (PostgreSQL, MySQL / phpMyAdmin)', level: 'Mahir', category: 'Database' },
    { name: 'Firebase (Auth, Firestore, Realtime DB)', level: 'Mahir', category: 'Cloud & Database' },
    { name: 'Git & GitHub Collaboration', level: 'Mahir', category: 'DevOps & Tools' },
    { name: 'CI/CD Pipeline (GitHub Actions)', level: 'Menengah', category: 'DevOps & Tools' },
    { name: 'Docker Containerization', level: 'Menengah', category: 'DevOps & Tools' },
    { name: 'Unit Testing & TDD (Jest, RTL)', level: 'Menengah', category: 'Testing' },
    { name: 'White-box & Black-box Testing', level: 'Mahir', category: 'Testing' },
    { name: 'System Analysis (UML, DFD, ERD)', level: 'Mahir', category: 'Sistem Analisis' },
    { name: 'Figma (UI/UX) & Canva', level: 'Mahir', category: 'Desain' },
    { name: 'Big Data & Data Mining (RapidMiner)', level: 'Menengah', category: 'Data Science' },
    { name: 'Python & Machine Learning (Scikit-Learn)', level: 'Menengah', category: 'Data Science' },
    { name: 'Postman, MockAPI & JSON Server', level: 'Mahir', category: 'Tools' },
    { name: 'PHP, ASP.NET & VB.NET', level: 'Menengah', category: 'Backend' },
    { name: 'C++ & Swift Fundamentals', level: 'Dasar', category: 'Pemrograman' },
    { name: 'Microsoft Office', level: 'Ahli', category: 'Administrasi' },
    { name: 'Microsoft Visual Studio & VS Code', level: 'Mahir', category: 'DevOps & Tools' },
    { name: 'Cyberlaw, Enkripsi & IT Ethics', level: 'Menengah', category: 'Keamanan' },
  ],
  softSkills: [
    { title: 'Manajemen Waktu yang Efektif', desc: 'Mampu menyusun prioritas tugas akademik, organisasi, dan proyek tepat waktu dengan presisi tinggi.' },
    { title: 'Kemampuan Berorganisasi & Kolaborasi', desc: 'Pengalaman nyata sebagai Sekretaris Himpunan dan panitia berbagai event skala universitas dan nasional.' },
    { title: 'Pemecahan Masalah & Berpikir Logis', desc: 'Kemampuan menganalisis akar permasalahan sistem, merancang arsitektur data, dan menulis kode bersih.' },
    { title: 'Cepat Beradaptasi & Eksplorasi Tinggi', desc: 'Cepat mengadopsi teknologi baru seperti framework modern, metodologi DevOps, dan AI tooling.' },
    { title: 'Komunikasi Lisan & Tertulis', desc: 'Bahasa Indonesia aktif, Bahasa Inggris pasif, terbiasa menyusun dokumen formal dan presentasi publik.' },
    { title: 'Kreativitas & Desain Inovatif', desc: 'Memadukan logika software engineering dengan kepekaan estetika antarmuka UI/UX yang ramah pengguna.' },
    { title: 'Terbuka Terhadap Kritik & Saran', desc: 'Menghargai feedback konstruktif dari tim atau mentor untuk evaluasi berkelanjutan.' }
  ],
  softwareTools: [
    { name: 'React', category: 'Framework' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Tailwind CSS', category: 'CSS' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Prisma', category: 'ORM' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Firebase', category: 'Cloud' },
    { name: 'Git & GitHub', category: 'VCS' },
    { name: 'Docker', category: 'Container' },
    { name: 'Postman', category: 'API Client' },
    { name: 'Swagger', category: 'Docs' },
    { name: 'Figma', category: 'UI/UX' },
    { name: 'Canva', category: 'Graphics' },
    { name: 'Android Studio', category: 'IDE' },
    { name: 'VS Code', category: 'IDE' },
    { name: 'Microsoft Visual Studio', category: 'IDE' },
    { name: 'RapidMiner', category: 'Data Mining' },
    { name: 'Draw.io / Astah', category: 'Diagram' },
    { name: 'Microsoft Office', category: 'Office' }
  ]
};
