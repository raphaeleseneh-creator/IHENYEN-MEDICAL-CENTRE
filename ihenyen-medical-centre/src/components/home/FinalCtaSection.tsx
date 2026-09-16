import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, MessageSquare, ShieldCheck, AlertCircle } from 'lucide-react';
import { hospitalInfo } from '../../data/hospitalConfig';

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      id="final-cta-section"
      className="py-16 md:py-24 bg-gradient-to-br from-[#083b78] via-[#083b78] to-[#0b7a75] text-white relative overflow-hidden"
      aria-label="Ready to visit Ihenyen Medical Centre"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-12 -right-12 w-96 h-96 bg-[#1476e8] rounded-full blur-3xl" />
        <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-[#0b7a75] rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold tracking-wide">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Patient-Centred Medical Excellence in Benin City</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
          Ready to experience dependable, compassionate medical care?
        </h2>

        <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
          Whether you need a routine health assessment, maternal care, paediatric checkup, or emergency assistance, our medical team is here to support you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/appointments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#083b78] hover:bg-blue-50 text-base font-extrabold shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
            id="final-cta-book-appointment"
          >
            <Calendar className="w-5 h-5 text-[#0f6bd9]" />
            <span>Book an Appointment</span>
          </Link>

          <a
            href={`tel:${hospitalInfo.contact.mainPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-900/60 border border-blue-400/40 hover:bg-blue-900 text-white text-base font-bold transition-all duration-200"
          >
            <Phone className="w-5 h-5 text-blue-300" />
            <span>Call Reception ({hospitalInfo.contact.mainPhoneDisplay})</span>
          </a>

          <a
            href={hospitalInfo.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white text-sm font-bold transition-all duration-200 shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Support</span>
          </a>
        </div>

        {/* Emergency Triage Helpline */}
        <div className="pt-8 border-t border-blue-700/60 max-w-md mx-auto flex items-center justify-center gap-2 text-xs text-red-200">
          <AlertCircle className="w-4 h-4 text-red-300 flex-shrink-0" />
          <span>
            For urgent acute emergencies: Dial{' '}
            <a href={`tel:${hospitalInfo.contact.emergencyPhone}`} className="font-extrabold underline text-white">
              {hospitalInfo.contact.emergencyPhoneDisplay}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};
