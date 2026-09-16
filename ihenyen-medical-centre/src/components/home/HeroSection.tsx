import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Calendar, ChevronDown, Heart, ShieldCheck, MapPin } from 'lucide-react';
import { hospitalInfo } from '../../data/hospitalConfig';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hospital-hero-section"
      className="relative min-h-[86vh] lg:min-h-[90vh] flex items-center bg-gradient-to-br from-[#ffffff] via-[#edf5fc]/60 to-[#fbf8f2] overflow-hidden pt-4 pb-12 lg:py-0 border-b border-[#d8e3ec]"
      aria-label="Welcome to Ihenyen Medical Centre"
    >
      {/* Background Decorative Motifs: Subtle Grid & Gradient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle dot pattern in top left */}
        <div
          className="absolute top-6 left-6 w-48 h-48 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#083b78 1.5px, transparent 1.5px)',
            backgroundSize: '16px 16px',
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1476e8]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#0b7a75]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0f6bd9]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* =========================================================================
              LEFT COLUMN: ~45% Content, Copy, Actions & Trust Statement
              ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 text-left">
            {/* Excellence in Healthcare Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#edf5fc] rounded-full text-[#0f6bd9] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0f6bd9]" />
              <span>Excellence in Healthcare</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.12] font-extrabold text-[#083b78] tracking-tight font-heading">
              Dependable medical care <br />
              <span className="text-[#1476e8]">for you and your family.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#5f6f7f] leading-relaxed max-w-md">
              Access experienced medical professionals, essential healthcare services and compassionate support at Ihenyen Medical Centre in Benin City.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                to="/appointments"
                className="btn-primary px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-200/50"
                id="hero-book-appointment-cta"
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span>Start Your Care</span>
              </Link>

              <a
                href={`tel:${hospitalInfo.contact.mainPhone}`}
                className="btn-secondary px-7 py-3.5 text-base font-bold bg-white"
              >
                <Phone className="w-4 h-4 mr-2 text-[#0f6bd9]" />
                <span>Call the Hospital</span>
              </a>
            </div>

            {/* WhatsApp Patient Support Link */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={hospitalInfo.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 px-3.5 py-1.5 rounded-lg transition-colors border border-emerald-100"
                aria-label="Chat with patient support team on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chat with our patient support team on WhatsApp</span>
              </a>
            </div>

            {/* Trust Statement with Overlapping Avatar Circles */}
            <div className="pt-4 border-t border-[#d8e3ec] flex items-center gap-3">
              <div className="flex -space-x-2 shrink-0">
                <div className="w-8 h-8 rounded-full bg-[#0b7a75] border-2 border-white shadow-xs flex items-center justify-center text-white text-[10px] font-bold">
                  IMC
                </div>
                <div className="w-8 h-8 rounded-full bg-[#1476e8] border-2 border-white shadow-xs flex items-center justify-center text-white text-[10px] font-bold">
                  24/7
                </div>
                <div className="w-8 h-8 rounded-full bg-[#083b78] border-2 border-white shadow-xs flex items-center justify-center text-white text-[10px] font-bold">
                  MD
                </div>
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#10243e]/80">
                Compassionate care for individuals and families in our community.
              </span>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: ~55% Diagonal Rounded Image Bands (Matching Professional Polish)
              ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
            {/* Background Compositional Backing Pill */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#083b78]/5 via-[#0b7a75]/5 to-transparent rounded-[32px] transform -rotate-3 scale-95 pointer-events-none" />

            {/* The Diagonal, Rounded Image Bands Grid */}
            <div className="relative w-full h-full flex items-center justify-center gap-3 sm:gap-4 md:gap-5 py-4 transform lg:-rotate-6">
              
              {/* Band 1: Primary Doctor with Patient */}
              <div className="w-1/3 h-[320px] sm:h-[400px] lg:h-[480px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl border-2 border-white relative group transform -translate-y-4">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
                  alt="Senior doctor in consultation at Ihenyen Medical Centre"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#083b78]/80 via-transparent to-transparent flex flex-col justify-end p-3 sm:p-4 text-white">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-200">
                    Clinical Care
                  </span>
                  <span className="text-xs sm:text-sm font-bold leading-tight">
                    Attentive Consultations
                  </span>
                </div>
              </div>

              {/* Band 2: Maternal / Paediatric Care Interaction (Taller Centerpiece) */}
              <div className="w-1/3 h-[360px] sm:h-[440px] lg:h-[530px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white relative group transform translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
                  alt="Doctor checking infant with caring mother"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#083b78]/85 via-transparent to-transparent flex flex-col justify-end p-3 sm:p-4 text-white">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-teal-300">
                    Maternal & Child
                  </span>
                  <span className="text-xs sm:text-sm font-bold leading-tight">
                    Gentle Family Support
                  </span>
                </div>
              </div>

              {/* Band 3: Diagnostic Laboratory / Medical Precision */}
              <div className="w-1/3 h-[300px] sm:h-[380px] lg:h-[460px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-lg border-2 border-white relative group transform -translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop"
                  alt="Medical professional at diagnostic laboratory"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#083b78]/80 via-transparent to-transparent flex flex-col justify-end p-3 sm:p-4 text-white">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-200">
                    Diagnostics
                  </span>
                  <span className="text-xs sm:text-sm font-bold leading-tight">
                    Accurate Testing
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Location / Emergency Detail Badge */}
            <div className="absolute -bottom-2 sm:bottom-4 right-4 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#d8e3ec] flex items-center gap-3 z-20">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1476e8] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#1476e8]" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#083b78] opacity-60 leading-tight">Our Location</p>
                <p className="text-xs font-bold text-[#10243e]">12 Airport Road, Benin City</p>
              </div>
            </div>

            {/* Floating 24/7 Emergency Pill */}
            <div className="absolute -top-2 sm:top-4 left-4 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md border border-[#d8e3ec] flex items-center gap-2.5 z-20">
              <div className="w-7 h-7 rounded-lg bg-red-50 text-[#c83b3b] flex items-center justify-center flex-shrink-0">
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-[#083b78] leading-tight">24/7 Emergency Care</p>
                <p className="text-[10px] text-[#5f6f7f]">Doctors on duty everyday</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="hidden lg:flex flex-col items-center justify-center pt-8 text-[#5f6f7f] hover:text-[#083b78] transition-colors">
          <a
            href="#quick-actions-section"
            className="flex flex-col items-center gap-1 text-xs font-bold tracking-wider uppercase focus:outline-none"
            aria-label="Scroll down to explore healthcare services"
          >
            <span>Explore our care</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#0f6bd9]" />
          </a>
        </div>
      </div>
    </section>
  );
};

