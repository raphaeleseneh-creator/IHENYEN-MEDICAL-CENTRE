import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Search, Menu, X, Calendar, AlertCircle } from 'lucide-react';
import { HospitalLogo } from '../common/HospitalLogo';
import { SearchModal } from './SearchModal';
import { hospitalInfo } from '../../data/hospitalConfig';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const handleSearchClick = () => {
    if (onOpenSearch) {
      onOpenSearch();
    } else {
      setIsSearchOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Patient Info', path: '/patient-information' },
    { name: 'HMO & Payments', path: '/hmo-and-payments' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerBgClass = isScrolled || !isHomePage
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#d8e3ec] py-3'
    : 'bg-white/90 backdrop-blur-sm lg:bg-white/80 border-b border-[#d8e3ec]/80 py-3.5';

  return (
    <>
      {/* 1. Narrow Emergency Bar */}
      <div
        id="emergency-top-bar"
        className="emergency-bar flex items-center justify-center px-4 sm:px-6 relative z-40"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-center sm:justify-between gap-3 text-xs sm:text-[13px] font-semibold">
          <p className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
            <span>Need urgent medical assistance?</span>
            <span className="hidden md:inline">Call reception now:</span>
            <a
              href={`tel:${hospitalInfo.contact.emergencyPhone}`}
              className="underline hover:text-red-100 font-bold ml-1"
            >
              {hospitalInfo.contact.emergencyPhoneDisplay}
            </a>
          </p>

          <a
            href={`tel:${hospitalInfo.contact.emergencyPhone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#c83b3b] transition-colors text-xs font-bold whitespace-nowrap focus:outline-none"
            aria-label="Call Ihenyen Medical Centre"
          >
            <Phone className="w-3 h-3" />
            <span>Call Now</span>
          </a>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${headerBgClass}`}
        id="main-hospital-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <HospitalLogo />

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-1 xl:space-x-3 text-[15px] font-medium"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-xl font-semibold text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f6bd9] ${
                    isActive
                      ? 'text-[#1476e8] bg-[#edf5fc]'
                      : 'text-[#10243e] hover:text-[#1476e8] hover:bg-[#edf5fc]/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: Search & Primary Button */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Search Trigger Button */}
            <button
              onClick={handleSearchClick}
              className="p-2 text-[#083b78] hover:text-[#0f6bd9] hover:bg-[#edf5fc] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f6bd9]"
              aria-label="Open Search Dialog"
              title="Search services & doctors (Cmd+K)"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Book Appointment CTA Button */}
            <Link
              to="/appointments"
              className="btn-primary shadow-lg shadow-blue-200/50 py-2.5 px-5 text-sm font-semibold rounded-xl"
              id="header-book-appointment-button"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={handleSearchClick}
              className="p-2 text-[#083b78] hover:bg-[#edf5fc] rounded-lg focus:outline-none"
              aria-label="Open Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#083b78] hover:bg-[#edf5fc] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f6bd9]"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#d8e3ec] bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 text-base font-semibold rounded-xl transition-colors ${
                      isActive
                        ? 'text-[#1476e8] bg-[#edf5fc]'
                        : 'text-[#10243e] hover:bg-[#edf5fc]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                to="/emergency"
                className="px-4 py-3 text-base font-semibold rounded-xl text-[#c83b3b] hover:bg-red-50 flex items-center gap-2"
              >
                <AlertCircle className="w-5 h-5" />
                <span>Urgent Care Guidance</span>
              </Link>
            </nav>

            <div className="mt-4 pt-4 border-t border-[#d8e3ec] flex flex-col gap-2.5">
              <Link
                to="/appointments"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold bg-[#0f6bd9] hover:bg-[#083b78] shadow-sm transition-colors text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </Link>
              
              <a
                href={`tel:${hospitalInfo.contact.mainPhone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[#083b78] font-semibold bg-[#edf5fc] hover:bg-[#d8e3ec] transition-colors text-center text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Reception ({hospitalInfo.contact.mainPhoneDisplay})</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

