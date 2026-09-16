import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Stethoscope, User, BookOpen, AlertCircle, ArrowRight } from 'lucide-react';
import { draftServices, draftDoctors, healthArticles } from '../../data/hospitalConfig';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      // Ctrl+K or Cmd+K shortcut
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open triggered from parent or global
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmedQuery = query.toLowerCase().trim();

  // Search Results
  const matchingServices = trimmedQuery
    ? draftServices.filter(
        (s) =>
          s.title.toLowerCase().includes(trimmedQuery) ||
          s.shortDescription.toLowerCase().includes(trimmedQuery) ||
          s.patientNeeds.some((n) => n.toLowerCase().includes(trimmedQuery)) ||
          s.commonTreatments.some((t) => t.toLowerCase().includes(trimmedQuery))
      )
    : [];

  const matchingDoctors = trimmedQuery
    ? draftDoctors.filter(
        (d) =>
          d.name.toLowerCase().includes(trimmedQuery) ||
          d.specialty.toLowerCase().includes(trimmedQuery) ||
          d.department.toLowerCase().includes(trimmedQuery) ||
          d.biography.toLowerCase().includes(trimmedQuery)
      )
    : [];

  const matchingArticles = trimmedQuery
    ? healthArticles.filter(
        (a) =>
          a.title.toLowerCase().includes(trimmedQuery) ||
          a.summary.toLowerCase().includes(trimmedQuery) ||
          a.category.toLowerCase().includes(trimmedQuery)
      )
    : [];

  const hasResults =
    matchingServices.length > 0 || matchingDoctors.length > 0 || matchingArticles.length > 0;

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-[#083b78]/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Search Ihenyen Medical Centre services, doctors and articles"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#d8e3ec] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        id="hospital-search-dialog"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#d8e3ec] bg-[#edf5fc]/50">
          <Search className="w-5 h-5 text-[#0f6bd9] mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medical services, doctors, symptoms, articles..."
            className="w-full bg-transparent text-[#10243e] text-base placeholder-[#5f6f7f] focus:outline-none"
            aria-label="Search input"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-[#5f6f7f] hover:text-[#10243e] mr-2"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#5f6f7f] bg-white border border-[#d8e3ec] rounded-lg hover:bg-gray-50 focus:outline-none"
            aria-label="Close search"
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!trimmedQuery && (
            <div className="py-8 text-center text-[#5f6f7f]">
              <p className="text-sm font-medium mb-3">Quick Search Suggestions:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Emergency Care', 'Maternity', 'Hypertension', 'Paediatrics', 'Ultrasound', 'Appointments'].map(
                  (suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setQuery(suggestion)}
                      className="px-3 py-1.5 text-xs font-medium bg-[#edf5fc] text-[#083b78] rounded-full hover:bg-[#1476e8] hover:text-white transition-colors"
                    >
                      {suggestion}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {trimmedQuery && !hasResults && (
            <div className="py-12 text-center text-[#5f6f7f]">
              <AlertCircle className="w-8 h-8 text-[#5f6f7f] mx-auto mb-2 opacity-50" />
              <p className="text-base font-semibold text-[#10243e]">No direct matches found</p>
              <p className="text-xs text-[#5f6f7f] mt-1 max-w-sm mx-auto">
                Try searching with alternative medical terms or contact our patient support desk directly.
              </p>
              <button
                onClick={() => handleSelect('/contact')}
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0f6bd9] hover:underline"
              >
                Contact hospital reception <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Medical Services Matches */}
          {matchingServices.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5f6f7f] mb-2 px-2 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-[#0f6bd9]" /> Medical Services ({matchingServices.length})
              </h3>
              <div className="space-y-1">
                {matchingServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleSelect(`/services/${service.slug}`)}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#edf5fc] transition-colors flex items-center justify-between group focus:outline-none focus:bg-[#edf5fc]"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#083b78] group-hover:text-[#0f6bd9]">
                        {service.title}
                      </p>
                      <p className="text-xs text-[#5f6f7f] line-clamp-1">{service.shortDescription}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#d8e3ec] group-hover:text-[#0f6bd9] transition-transform group-hover:translate-x-1 flex-shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Doctors Matches */}
          {matchingDoctors.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5f6f7f] mb-2 px-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#0b7a75]" /> Doctors & Specialists ({matchingDoctors.length})
              </h3>
              <div className="space-y-1">
                {matchingDoctors.map((doctor) => (
                  <button
                    key={doctor.id}
                    onClick={() => handleSelect(`/doctors/${doctor.slug}`)}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#edf5fc] transition-colors flex items-center justify-between group focus:outline-none focus:bg-[#edf5fc]"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#083b78] group-hover:text-[#0f6bd9]">
                        {doctor.name}
                      </p>
                      <p className="text-xs text-[#5f6f7f]">{doctor.specialty} • {doctor.department}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#d8e3ec] group-hover:text-[#0f6bd9] transition-transform group-hover:translate-x-1 flex-shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Health Articles Matches */}
          {matchingArticles.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5f6f7f] mb-2 px-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#1476e8]" /> Health Resources ({matchingArticles.length})
              </h3>
              <div className="space-y-1">
                {matchingArticles.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => handleSelect(`/health-resources/${article.slug}`)}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#edf5fc] transition-colors flex items-center justify-between group focus:outline-none focus:bg-[#edf5fc]"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#083b78] group-hover:text-[#0f6bd9]">
                        {article.title}
                      </p>
                      <p className="text-xs text-[#5f6f7f] line-clamp-1">{article.summary}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#d8e3ec] group-hover:text-[#0f6bd9] transition-transform group-hover:translate-x-1 flex-shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Emergency Footnote in Search */}
        <div className="px-4 py-2.5 bg-[#edf5fc] border-t border-[#d8e3ec] flex items-center justify-between text-xs text-[#5f6f7f]">
          <span>For acute medical emergencies, dial:</span>
          <a
            href="tel:+2348009110000"
            className="font-bold text-[#c83b3b] hover:underline"
          >
            0800 911 0000 (24/7)
          </a>
        </div>
      </div>
    </div>
  );
};
