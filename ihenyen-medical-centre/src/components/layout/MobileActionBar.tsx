import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Calendar, Navigation } from 'lucide-react';
import { hospitalInfo } from '../../data/hospitalConfig';

export const MobileActionBar: React.FC = () => {
  return (
    <div
      id="mobile-sticky-action-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#d8e3ec] shadow-2xl py-2 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Quick mobile actions"
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* 1. Call Hospital */}
        <a
          href={`tel:${hospitalInfo.contact.mainPhone}`}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl hover:bg-[#edf5fc] text-[#083b78] active:bg-[#d8e3ec] transition-colors"
          aria-label="Call Ihenyen Medical Centre reception"
        >
          <div className="w-8 h-8 rounded-full bg-[#edf5fc] flex items-center justify-center text-[#0f6bd9] mb-1">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight">Call</span>
        </a>

        {/* 2. WhatsApp Support */}
        <a
          href={hospitalInfo.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl hover:bg-emerald-50 text-emerald-800 active:bg-emerald-100 transition-colors"
          aria-label="Chat with patient support on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-1">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* 3. Book Appointment */}
        <Link
          to="/appointments"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-[#0f6bd9] text-white shadow-sm active:bg-[#083b78] transition-colors"
          aria-label="Book an Appointment"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white mb-1">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight">Book</span>
        </Link>

        {/* 4. Directions */}
        <a
          href={hospitalInfo.address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl hover:bg-[#edf5fc] text-[#083b78] active:bg-[#d8e3ec] transition-colors"
          aria-label="Get Directions to Hospital in Benin City"
        >
          <div className="w-8 h-8 rounded-full bg-[#edf5fc] flex items-center justify-center text-[#0b7a75] mb-1">
            <Navigation className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight">Directions</span>
        </a>
      </div>
    </div>
  );
};
