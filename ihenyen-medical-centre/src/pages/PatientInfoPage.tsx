import React from 'react';
import { Clock, ShieldCheck, Heart, User, FileText, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { Link } from 'react-router-dom';

export const PatientInfoPage: React.FC = () => {
  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen pb-16">
      <SeoHead
        title="Patient Information - Visiting Hours & Hospital Guidelines"
        description="Visiting hours, inpatient admission guidance, patient rights, and clinical guidelines at Ihenyen Medical Centre in Benin City, Nigeria."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Patient Information' }]} />

        {/* Page Header */}
        <div className="py-8 md:py-12 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block mb-2">
            Hospital Guide
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#083b78] font-heading leading-tight">
            Patient & Visitor Information
          </h1>
          <p className="text-base sm:text-lg text-[#5f6f7f] mt-3 leading-relaxed">
            Essential guidelines to prepare for your outpatient consultation, diagnostic tests, or inpatient admission at Ihenyen Medical Centre in Benin City.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Guidelines, Visiting Hours & Admission */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Visiting Hours & Inpatient Care */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#083b78] font-heading mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#0f6bd9]" />
                <span>Inpatient Visiting Hours</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5f6f7f] mb-4">
                To support patient rest and clinical infection prevention, visiting hours are strictly scheduled:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#edf5fc] rounded-xl border border-[#d8e3ec]">
                  <p className="text-xs font-bold text-[#083b78] uppercase">Morning Visiting Slot</p>
                  <p className="text-lg font-bold text-[#083b78] mt-1">11:00 AM – 1:00 PM</p>
                  <p className="text-xs text-[#5f6f7f] mt-1">Daily across all general and private wards</p>
                </div>

                <div className="p-4 bg-[#edf5fc] rounded-xl border border-[#d8e3ec]">
                  <p className="text-xs font-bold text-[#083b78] uppercase">Evening Visiting Slot</p>
                  <p className="text-lg font-bold text-[#083b78] mt-1">4:30 PM – 6:30 PM</p>
                  <p className="text-xs text-[#5f6f7f] mt-1">Daily across all general and private wards</p>
                </div>
              </div>

              <div className="mt-4 p-3.5 bg-[#fbf8f2] rounded-xl border border-[#d8e3ec] text-xs text-[#5f6f7f] space-y-1">
                <p>
                  <strong className="text-[#083b78]">Visitor Guidelines:</strong> Maximum of two visitors per bedside at a time. Children under 12 may visit only with special nursing supervisor approval.
                </p>
              </div>
            </div>

            {/* 2. Preparing for Admission & What to Bring */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#083b78] font-heading flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0b7a75]" />
                <span>Preparing for Outpatient or Inpatient Visit</span>
              </h2>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#edf5fc]/40 border border-[#d8e3ec] space-y-1">
                  <h3 className="text-sm font-bold text-[#083b78]">1. Documentation & Registration</h3>
                  <p className="text-xs text-[#5f6f7f]">
                    Bring a valid government-issued ID (or voter's card/driver's license) along with your hospital card. If you are insured, bring your physical HMO card and enrollee number.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#edf5fc]/40 border border-[#d8e3ec] space-y-1">
                  <h3 className="text-sm font-bold text-[#083b78]">2. Current Medications & Health Records</h3>
                  <p className="text-xs text-[#5f6f7f]">
                    Bring all active prescription containers, over-the-counter supplements, and recent test results from external laboratories to assist our physicians with accurate medical reconciliation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#edf5fc]/40 border border-[#d8e3ec] space-y-1">
                  <h3 className="text-sm font-bold text-[#083b78]">3. Personal Comfort Items (For Inpatients)</h3>
                  <p className="text-xs text-[#5f6f7f]">
                    Clean comfortable nightwear, non-slip slippers, and personal toiletries. We provide sterile hospital gowns, freshly laundered linens, and nutritional meal services.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Patient Rights & Dignity Charter */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-[#083b78] font-heading flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0f6bd9]" />
                <span>Patient Rights & Responsibilities</span>
              </h2>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#5f6f7f]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0b7a75] flex-shrink-0 mt-0.5" />
                  <span>Right to respectful, non-discriminatory care regardless of gender, faith, or background.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0b7a75] flex-shrink-0 mt-0.5" />
                  <span>Right to clear explanation of diagnoses, recommended procedures, and alternative treatments.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0b7a75] flex-shrink-0 mt-0.5" />
                  <span>Right to absolute confidentiality of medical records under the Nigeria Data Protection Act (NDPA).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0b7a75] flex-shrink-0 mt-0.5" />
                  <span>Right to give or decline informed consent for non-emergency clinical procedures.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Quick Contact & Scheduling */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-[#083b78] uppercase tracking-wider">
                Need Patient Help?
              </h3>
              <p className="text-xs text-[#5f6f7f]">
                Our patient relations desk is available to assist you with registration inquiries or ward locations.
              </p>

              <div className="space-y-2.5 pt-2">
                <Link
                  to="/appointments"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0f6bd9] hover:bg-[#083b78] text-white text-xs font-bold transition-colors shadow-2xs text-center"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </Link>

                <a
                  href={`tel:${hospitalInfo.contact.mainPhone}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#edf5fc] hover:bg-[#d8e3ec] text-[#083b78] text-xs font-bold transition-colors text-center"
                >
                  <Phone className="w-4 h-4 text-[#0f6bd9]" />
                  <span>Call Hospital Reception</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
