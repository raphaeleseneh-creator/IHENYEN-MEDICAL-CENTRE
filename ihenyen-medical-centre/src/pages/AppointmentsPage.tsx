import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Phone, MessageSquare, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { AppointmentForm } from '../components/appointments/AppointmentForm';

export const AppointmentsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen pb-16">
      <SeoHead
        title="Book an Appointment - Hospital Consultation Desk"
        description="Schedule a consultation with our experienced physicians and specialists at Ihenyen Medical Centre in Benin City, Nigeria."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Book Appointment' }]} />

        {/* Page Header */}
        <div className="py-8 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block mb-2">
            Patient Scheduling Desk
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#083b78] font-heading leading-tight">
            Book an Appointment
          </h1>
          <p className="text-base sm:text-lg text-[#5f6f7f] mt-3 leading-relaxed">
            Request an outpatient consultation with our medical practitioners. Our patient coordination team will reach out to confirm your scheduled time slot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: The Appointment Form */}
          <div className="lg:col-span-7">
            <AppointmentForm initialServiceId={preselectedService} />
          </div>

          {/* Right Column: Support Channels & Emergency Notice */}
          <div className="lg:col-span-5 space-y-6">
            {/* Urgent Support Box */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#c83b3b] uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>Immediate Medical Emergency?</span>
              </div>
              <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
                If the patient is unconscious, experiencing acute trauma, severe bleeding, or chest pressure, please do not use the scheduling form. Call our emergency triage line immediately:
              </p>
              <div className="pt-1">
                <a
                  href={`tel:${hospitalInfo.contact.emergencyPhone}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#c83b3b] hover:bg-red-800 text-white font-bold text-sm transition-colors shadow-2xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {hospitalInfo.contact.emergencyPhoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Direct Telephone & WhatsApp */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-[#083b78] font-heading">
                Prefer Booking by Phone or WhatsApp?
              </h2>
              <p className="text-xs text-[#5f6f7f] leading-relaxed">
                You can also schedule directly through our reception officers during outpatient hours.
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <a
                  href={`tel:${hospitalInfo.contact.mainPhone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#edf5fc] text-[#083b78] border border-[#d8e3ec] hover:bg-[#d8e3ec]/60 transition-colors font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#0f6bd9]" />
                    <span>Reception Line:</span>
                  </span>
                  <span>{hospitalInfo.contact.mainPhoneDisplay}</span>
                </a>

                <a
                  href={hospitalInfo.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100 transition-colors font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Coordination:</span>
                  </span>
                  <span>{hospitalInfo.contact.whatsappDisplay}</span>
                </a>
              </div>
            </div>

            {/* What to Bring on Appointment Day */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-sm space-y-3">
              <h2 className="text-sm font-bold text-[#083b78] uppercase tracking-wider">
                Checklist for Your Consultation Visit
              </h2>
              <ul className="space-y-2 text-xs text-[#5f6f7f]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b7a75] mt-1.5 flex-shrink-0" />
                  <span>Valid ID card or hospital registration card (for returning patients).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b7a75] mt-1.5 flex-shrink-0" />
                  <span>HMO policy card or authorization letter (if covered by insurance).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b7a75] mt-1.5 flex-shrink-0" />
                  <span>Current medication bottles or recent lab reports from previous doctors.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
