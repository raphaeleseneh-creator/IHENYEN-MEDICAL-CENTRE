import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { SearchModal } from './components/layout/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { DoctorDetailPage } from './pages/DoctorDetailPage';
import { AppointmentsPage } from './pages/AppointmentsPage';
import { EmergencyPage } from './pages/EmergencyPage';
import { HmoPaymentsPage } from './pages/HmoPaymentsPage';
import { PatientInfoPage } from './pages/PatientInfoPage';
import { AboutPage } from './pages/AboutPage';
import { HealthResourcesPage } from './pages/HealthResourcesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-[#10243e] font-sans antialiased selection:bg-[#edf5fc] selection:text-[#083b78]">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-[#083b78] px-4 py-2 text-sm font-bold text-white shadow-lg transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>

        {import.meta.env.VITE_PREVIEW_SITE === 'true' && (
          <div className="bg-[#fff4d6] px-4 py-2 text-center text-sm font-semibold text-[#573d0b]">
            Website preview: hospital details are awaiting confirmation. Do not use this site for urgent care or submit patient information.
          </div>
        )}

        {/* Top Header with Emergency Bar & Navigation */}
        <Header onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Dynamic Route Pages */}
        <main id="main-content" tabIndex={-1} className="flex-1 scroll-mt-28 focus:outline-none">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctors/:doctorSlug" element={<DoctorDetailPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/hmo-and-payments" element={<HmoPaymentsPage />} />
            <Route path="/patient-information" element={<PatientInfoPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/health-resources" element={<HealthResourcesPage />} />
            <Route path="/health-resources/:articleSlug" element={<ArticleDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Sticky Mobile Action Bar */}
        <MobileActionBar />

        {/* Search Modal */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </div>
    </Router>
  );
}
