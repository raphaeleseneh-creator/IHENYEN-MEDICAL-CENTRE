import React from 'react';
import { Phone, AlertCircle, MapPin, Navigation, Clock, ShieldAlert, Heart, Activity } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';

export const EmergencyPage: React.FC = () => {
  const emergencySymptoms = [
    'Acute chest pain, tightness or radiating pain to jaw/arm',
    'Severe breathing difficulty, wheezing, or respiratory failure',
    'Sudden weakness, numbness of face/limbs, or slurred speech (Suspected Stroke)',
    'Loss of consciousness, fainting, seizures or unresponsiveness',
    'Severe road traffic injuries, major fractures or uncontrolled bleeding',
    'Paediatric convulsions, high febrile crisis, or lethargy in infants',
    'Obstetric emergencies: Sudden abdominal pain, fluid rupture, or haemorrhage',
    'Suspected poisoning, acute chemical ingestion, or severe allergic anaphylaxis',
  ];

  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen pb-16">
      <SeoHead
        title="24/7 Emergency Care & Acute Trauma Response"
        description="Round-the-clock emergency medical response and acute trauma triage at Ihenyen Medical Centre in Benin City, Edo State."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: '24/7 Emergency Care' }]} />

        {/* Top Emergency Action Banner - High contrast & immediate */}
        <div className="bg-[#c83b3b] text-white rounded-2xl p-6 sm:p-10 shadow-xl my-6 border-4 border-red-700">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
              <span>Emergency Department • Open 24/7 Everyday</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              Urgent Medical & Trauma Care
            </h1>

            <p className="text-base sm:text-lg text-red-100 leading-relaxed">
              If someone is experiencing a life-threatening medical event, call our 24-hour emergency triage line or proceed directly to our emergency entrance in Benin City.
            </p>

            {/* Direct Tappable Emergency Call Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${hospitalInfo.contact.emergencyPhone}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-[#c83b3b] hover:bg-red-50 text-lg font-extrabold shadow-lg transition-all active:scale-[0.98]"
                id="emergency-call-cta"
              >
                <Phone className="w-6 h-6 text-[#c83b3b]" />
                <span>Call Emergency: {hospitalInfo.contact.emergencyPhoneDisplay}</span>
              </a>

              <a
                href={hospitalInfo.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-red-900/80 hover:bg-red-900 text-white text-sm font-bold border border-red-400/40 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Immediate GPS Directions</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Symptoms & Triage */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Critical Symptoms Checklist */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#083b78] font-heading mb-3 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#c83b3b]" />
                <span>Recognizing a Medical Emergency</span>
              </h2>
              <p className="text-xs text-[#5f6f7f] mb-6">
                Do not delay. If you observe any of the following symptoms, seek immediate emergency medical evaluation:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {emergencySymptoms.map((symptom, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-red-50/50 border border-red-200/80 rounded-xl text-xs text-red-950 font-medium flex items-start gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 text-[#c83b3b] flex-shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. What Happens Upon Arrival (Emergency Triage Protocol) */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#083b78] font-heading">
                Emergency Triage: What to Expect Upon Arrival
              </h2>
              <p className="text-xs text-[#5f6f7f]">
                Our emergency unit uses a clinical acuity triage system to ensure critical patients receive immediate life-saving care without administrative delays:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-[#edf5fc]/60 rounded-xl border border-[#d8e3ec] flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#083b78] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-[#083b78] uppercase">Immediate Clinical Triage</h3>
                    <p className="text-xs text-[#5f6f7f] mt-0.5">
                      Emergency nursing officers check vital signs (Oxygen, BP, pulse, temperature) within seconds of arrival.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#edf5fc]/60 rounded-xl border border-[#d8e3ec] flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#083b78] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-[#083b78] uppercase">Doctor Examination & Resuscitation</h3>
                    <p className="text-xs text-[#5f6f7f] mt-0.5">
                      Emergency medical officer initiates urgent stabilization, IV access, oxygen therapy, or trauma care.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#edf5fc]/60 rounded-xl border border-[#d8e3ec] flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#083b78] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-[#083b78] uppercase">Priority Diagnostics & Theatre Ready</h3>
                    <p className="text-xs text-[#5f6f7f] mt-0.5">
                      Direct access to 24/7 on-site emergency lab, ultrasound, and surgical theatre if acute surgery is required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Address & Hospital Access Guide */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0f6bd9] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Emergency Entrance Location</span>
              </div>

              <div>
                <p className="text-lg font-extrabold text-[#083b78]">
                  {hospitalInfo.address.street}
                </p>
                <p className="text-xs sm:text-sm text-[#5f6f7f]">
                  {hospitalInfo.address.area}, {hospitalInfo.address.city}, {hospitalInfo.address.state}.
                </p>
                <div className="mt-2 p-2.5 bg-[#fbf8f2] rounded-lg border border-[#d8e3ec] text-xs text-[#083b78] font-medium">
                  <strong>Landmark:</strong> {hospitalInfo.address.landmark}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={hospitalInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0f6bd9] hover:bg-[#083b78] text-white text-sm font-bold transition-colors shadow-2xs text-center"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Navigate to Hospital</span>
                </a>
              </div>
            </div>

            {/* Inpatient Admission Info */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-[#083b78] uppercase tracking-wider">
                Emergency Inquiries & Ambulatory Desk
              </h3>
              <p className="text-xs text-[#5f6f7f]">
                Our triage officers are in continuous communication with ambulance drivers and incoming patient families.
              </p>
              <div className="p-3 bg-[#edf5fc] rounded-xl text-xs text-[#083b78] font-mono">
                Reception Desk: {hospitalInfo.contact.mainPhoneDisplay}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
