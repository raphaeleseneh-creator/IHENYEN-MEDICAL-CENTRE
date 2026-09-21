import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, MessageSquare, ShieldCheck, AlertCircle } from 'lucide-react';
import { hospitalInfo } from '../../data/hospitalConfig';

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      id="final-cta-section"
      className="relative overflow-hidden bg-[#03152b] py-16 text-white md:py-24"
      aria-label="Ready to visit Ihenyen Medical Centre"
    >
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1800&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-22"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03152b] via-[#03152b]/92 to-[#083b78]/78" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-blue-100 backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Patient-Centred Medical Excellence in Benin City</span>
        </div>

        <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">
          Ready to experience dependable, compassionate medical care?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-100/90 sm:text-lg">
          Whether you need a routine health assessment, women’s health support, dental care, paediatric guidance, or urgent advice, our medical team is here to support you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
          <Link
            to="/appointments"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-extrabold text-[#083b78] shadow-lg transition-all duration-200 hover:bg-blue-50 hover:shadow-xl active:scale-[0.98] sm:w-auto"
            id="final-cta-book-appointment"
          >
            <Calendar className="w-5 h-5 text-[#0f6bd9]" />
            <span>Book an Appointment</span>
          </Link>

          <a
            href={`tel:${hospitalInfo.contact.mainPhone}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-300/36 bg-white/10 px-6 py-3.5 text-base font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/16 sm:w-auto"
          >
            <Phone className="w-5 h-5 text-blue-300" />
            <span>Call Reception ({hospitalInfo.contact.mainPhoneDisplay})</span>
          </a>

          <a
            href={hospitalInfo.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600/92 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-emerald-600 sm:w-auto"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Support</span>
          </a>
        </div>

        {/* Emergency Triage Helpline */}
        <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-2 border-t border-white/14 pt-7 text-xs text-red-100">
          <AlertCircle className="w-4 h-4 text-red-300 flex-shrink-0" />
          <span>
            For urgent clinical concerns: Call{' '}
            <a href={`tel:${hospitalInfo.contact.emergencyPhone}`} className="font-extrabold underline text-white">
              {hospitalInfo.contact.emergencyPhoneDisplay}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};
