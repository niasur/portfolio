import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { PortfolioView } from './components/PortfolioView';
import { CertificateView } from './components/CertificateView';
import { Footer } from './components/Footer';
import { CvDownloadModal } from './components/CvDownloadModal';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { ProjectItem, CertificateItem, PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTab = (tab: NavTab) => {
    if (tab === 'certificate') {
      window.open(PERSONAL_INFO.certificateDriveUrl, '_blank');
      return;
    }
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-slate-100 font-sans selection:bg-[#2ec4b6]/30 selection:text-white flex flex-col justify-between">
      
      {/* Navigation Bar */}
      <div>
        <Navbar
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          isScrolled={isScrolled}
        />

          {/* Main Tab Views */}
          <main className="transition-all duration-300 pb-20">
            {activeTab === 'home' && <HomeView />}

            {activeTab === 'about' && <AboutView />}

          {activeTab === 'portfolio' && (
            <PortfolioView
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          )}

          {activeTab === 'certificate' && (
            <CertificateView
              onSelectCertificate={(cert) => setSelectedCertificate(cert)}
            />
          )}
        </main>
      </div>

      {/* Mobile Bottom Fixed Navigation Footer */}
      <Footer activeTab={activeTab} onSelectTab={handleSelectTab} isScrolled={isScrolled} />

      {/* Automatic CV Download & Print Modal */}
      <CvDownloadModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Certificate Detail Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

    </div>
  );
}
