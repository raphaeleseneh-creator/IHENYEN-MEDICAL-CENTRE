import React from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Navigation, AlertCircle } from 'lucide-react';
import { hospitalInfo } from '../../data/hospitalConfig';

export const LocationHoursSection: React.FC = () => {
  return (
    <section
      id="location-hours-section"
      className="py-16 md:py-20 bg-[#edf5fc]/40 border-b border-[#d8e3ec]"
      aria-label="Hospital Location and Hours"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block mb-2">
            Location & Accessibility
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083b78] font-heading">
            Conveniently located in central Benin City.
          </h2>
          <p className="text-sm sm:text-base text-[#5f6f7f] mt-2">
            Our medical centre is easily accessible by private vehicle or public transport from major roads across Edo State.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address & Landmark Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#d8e3ec] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0f6bd9] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Physical Address</span>
              </div>
              <div>
                <p className="text-base font-extrabold text-[#083b78]">
                  {hospitalInfo.address.street}
                </p>
                <p className="text-sm text-[#5f6f7f]">
                  {hospitalInfo.address.area}, {hospitalInfo.address.city}, {hospitalInfo.address.state}, Nigeria.
                </p>
                <div className="mt-2.5 p-2.5 bg-[#fbf8f2] rounded-lg border border-[#d8e3ec] text-xs text-[#083b78] font-medium">
                  <strong>Landmark:</strong> {hospitalInfo.address.landmark}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={hospitalInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f6bd9] hover:bg-[#083b78] text-white text-xs font-bold transition-colors shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Direct Telephone & WhatsApp */}
            <div className="bg-white p-6 rounded-2xl border border-[#d8e3ec] shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-[#083b78] uppercase tracking-wider">
                Direct Contact Channels
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <a
                  href={`tel:${hospitalInfo.contact.emergencyPhone}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-red-50 text-red-900 border border-red-200 hover:bg-red-100 transition-colors font-bold"
                >
                  <span className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#c83b3b]" />
                    <span>24/7 Emergency Line:</span>
                  </span>
                  <span>{hospitalInfo.contact.emergencyPhoneDisplay}</span>
                </a>

                <a
                  href={`tel:${hospitalInfo.contact.mainPhone}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#edf5fc] text-[#083b78] border border-[#d8e3ec] hover:bg-[#d8e3ec]/60 transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <Phone className="w-4 h-4 text-[#0f6bd9]" />
                    <span>Main Reception:</span>
                  </span>
                  <span className="font-bold">{hospitalInfo.contact.mainPhoneDisplay}</span>
                </a>

                <a
                  href={hospitalInfo.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Support:</span>
                  </span>
                  <span className="font-bold">{hospitalInfo.contact.whatsappDisplay}</span>
                </a>

                <a
                  href={`mailto:${hospitalInfo.contact.email}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 text-[#10243e] border border-[#d8e3ec] hover:bg-gray-100 transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <Mail className="w-4 h-4 text-[#083b78]" />
                    <span>General Inquiries:</span>
                  </span>
                  <span className="font-bold">{hospitalInfo.contact.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Operating Hours & Interactive Map Preview */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {/* Hours Schedule */}
            <div className="bg-white p-6 rounded-2xl border border-[#d8e3ec] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0b7a75] uppercase tracking-wider mb-4">
                <Clock className="w-4 h-4" />
                <span>Operating & Clinic Hours</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#edf5fc]/70 rounded-xl border border-[#d8e3ec]">
                  <p className="font-bold text-[#083b78]">Emergency Department</p>
                  <p className="text-[#5f6f7f] mt-0.5">{hospitalInfo.hours.emergency}</p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#d8e3ec]">
                  <p className="font-bold text-[#083b78]">Outpatient Clinics</p>
                  <p className="text-[#5f6f7f] mt-0.5">{hospitalInfo.hours.outpatient}</p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#d8e3ec]">
                  <p className="font-bold text-[#083b78]">Hospital Pharmacy</p>
                  <p className="text-[#5f6f7f] mt-0.5">{hospitalInfo.hours.pharmacy}</p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#d8e3ec]">
                  <p className="font-bold text-[#083b78]">Diagnostic Laboratory</p>
                  <p className="text-[#5f6f7f] mt-0.5">{hospitalInfo.hours.laboratory}</p>
                </div>
              </div>

              <div className="mt-3 text-[11px] text-[#5f6f7f] pt-2 border-t border-[#d8e3ec]/70">
                <strong>Inpatient Visiting Hours:</strong> {hospitalInfo.hours.visitingHours}
              </div>
            </div>

            {/* Simulated Clean Map Box */}
            <div className="bg-white rounded-2xl border border-[#d8e3ec] overflow-hidden shadow-sm flex-1 min-h-[220px] relative flex flex-col justify-between p-6 bg-gradient-to-br from-[#edf5fc] to-[#fbf8f2]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#d8e3ec] text-xs font-bold text-[#083b78] shadow-2xs mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0f6bd9]" />
                  <span>Benin City Hospital Hub</span>
                </div>
                <h4 className="text-lg font-bold text-[#083b78] font-heading">
                  Quick Access from Sapele Road & Ring Road
                </h4>
                <p className="text-xs text-[#5f6f7f] mt-1 max-w-md">
                  Convenient parking on premises, wheelchair-accessible patient entry, and dedicated emergency ambulance bay.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={hospitalInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#083b78] hover:bg-[#0f6bd9] text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <span>Open Live Google Map</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
