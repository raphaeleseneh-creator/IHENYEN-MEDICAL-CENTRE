import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { hospitalInfo } from '../data/hospitalConfig';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen pb-16">
      <SeoHead
        title="Terms of Service & Medical Disclaimer"
        description="Terms of service, website usage policies, and medical disclaimer for Ihenyen Medical Centre in Benin City, Nigeria."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

        <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-10 shadow-sm mt-6 space-y-6">
          <div className="border-b border-[#d8e3ec] pb-6">
            <span className="text-xs font-bold text-[#0f6bd9] uppercase tracking-wider block mb-2">
              Website & Clinical Terms
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#083b78] font-heading">
              Terms of Service & Medical Disclaimer
            </h1>
            <p className="text-xs text-[#5f6f7f] mt-1">
              Effective date: January 2025 • Ihenyen Medical Centre, Benin City
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-[#10243e] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#083b78] font-heading">
                1. Medical Disclaimer
              </h2>
              <p>
                The information provided on this website (including articles, service guides, and symptom overviews) is intended solely for educational purposes. It does not replace professional medical advice, clinical diagnosis, or formal physician consultations.
              </p>
              <p className="text-[#c83b3b] font-semibold">
                In acute or life-threatening medical emergencies, please do not use online forms. Call our 24/7 emergency line directly or visit the emergency unit immediately.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#083b78] font-heading">
                2. Appointment Scheduling & Confirmation
              </h2>
              <p>
                Submitting an appointment request online constitutes an inquiry for clinical scheduling. All appointments are subject to official verification by our patient relations team and physician roster availability.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#083b78] font-heading">
                3. Intellectual Property & Brand Assets
              </h2>
              <p>
                All trademarks, hospital logos, brand visual layouts, and editorial text published on this portal are the intellectual property of Ihenyen Medical Centre and may not be reproduced without written authorization.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
