import React from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { hospitalInfo } from '../data/hospitalConfig';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen pb-16">
      <SeoHead
        title="Privacy Policy & Medical Data Protection"
        description="Patient privacy standards and data protection policy at Ihenyen Medical Centre compliant with the Nigeria Data Protection Act (NDPA)."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-10 shadow-sm mt-6 space-y-6">
          <div className="border-b border-[#d8e3ec] pb-6">
            <span className="text-xs font-bold text-[#0f6bd9] uppercase tracking-wider block mb-2">
              Legal & Medical Confidentiality
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#083b78] font-heading">
              Privacy Policy & Patient Data Governance
            </h1>
            <p className="text-xs text-[#5f6f7f] mt-1">
              Last updated: January 2025 • Compliant with Nigeria Data Protection Act (NDPA 2023)
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-[#10243e] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#083b78] font-heading">
                1. Commitment to Patient Confidentiality
              </h2>
              <p>
                At Ihenyen Medical Centre ("the Hospital", "we", "our"), protecting patient privacy and medical records is an inviolable duty. This Privacy Policy details how we collect, safeguard, and responsibly process personal and clinical health information collected via our website, appointment forms, and on-premises hospital records.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#083b78] font-heading">
                2. Information We Collect
              </h2>
              <p>
                When you interact with our website or consultation desk, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[#5f6f7f]">
                <li><strong>Identity Information:</strong> Full name, date of birth, gender, and contact details (phone, email).</li>
                <li><strong>Clinical Pre-Consultation Details:</strong> Reason for appointment request, preferred doctor or department, and past hospital card number if returning.</li>
                <li><strong>HMO & Insurance Data:</strong> Policy number, enrollee tier, and sponsoring corporate organization.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#083b78] font-heading">
                3. Purpose of Processing
              </h2>
              <p>
                Your data is processed strictly for clinical triage, scheduling doctor appointments, HMO authorization verification, delivering diagnostic reports, and fulfilling regulatory healthcare standards under Nigerian law.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#083b78] font-heading">
                4. Disclosure & Confidentiality
              </h2>
              <p>
                We do not sell, rent, or commercialize patient data under any circumstance. Information is only disclosed to authorized clinical caregivers, diagnostic laboratories directly involved in your care, or your enrolled HMO scheme upon pre-authorization request.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#083b78] font-heading">
                5. Contacting the Data Protection Officer
              </h2>
              <p>
                For questions regarding your medical data rights or to request updates to your records, please contact our administrative desk at <a href={`mailto:${hospitalInfo.contact.email}`} className="text-[#0f6bd9] underline font-semibold">{hospitalInfo.contact.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
