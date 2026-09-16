import React from 'react';
import { Briefcase, HeartHandshake, ShieldCheck, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';

export const CareersPage: React.FC = () => {
  const currentOpenings = [
    {
      title: 'Medical Officer (Full-Time)',
      department: 'Clinical Services / Emergency',
      type: 'Full-Time',
      location: 'Benin City, Edo State',
      requirements: 'MBBS/MBChB, Full MDCN registration, minimum 2 years post-NYSC clinical experience.',
    },
    {
      title: 'Registered Nursing Officer (RN/RM)',
      department: 'Maternity & Inpatient Care',
      type: 'Shift Rotation',
      location: 'Benin City, Edo State',
      requirements: 'Valid NMCN license, dual nursing and midwifery certification preferred.',
    },
    {
      title: 'Medical Laboratory Scientist (MLS)',
      department: 'Diagnostic Laboratory',
      type: 'Full-Time',
      location: 'Benin City, Edo State',
      requirements: 'BMLS, AMLSCN registration, experience with automated haematology and chemistry analyzers.',
    },
  ];

  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen pb-16">
      <SeoHead
        title="Careers & Medical Opportunities - Benin City"
        description="Explore clinical and administrative career opportunities at Ihenyen Medical Centre in Benin City, Edo State."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Careers' }]} />

        {/* Page Header */}
        <div className="py-8 md:py-12 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block mb-2">
            Join Our Team
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#083b78] font-heading leading-tight">
            Careers at Ihenyen Medical Centre
          </h1>
          <p className="text-base sm:text-lg text-[#5f6f7f] mt-3 leading-relaxed">
            We are dedicated to building a compassionate, patient-first clinical environment. Join our multidisciplinary team in delivering quality healthcare in Benin City.
          </p>
        </div>

        {/* Culture & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#edf5fc] text-[#083b78] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-[#0f6bd9]" />
            </div>
            <h3 className="text-sm font-bold text-[#083b78]">Patient-Centred Culture</h3>
            <p className="text-xs text-[#5f6f7f] leading-relaxed">
              We empower our staff with adequate time and diagnostic support to provide thorough care for every patient.
            </p>
          </div>

          <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#edf5fc] text-[#083b78] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#0b7a75]" />
            </div>
            <h3 className="text-sm font-bold text-[#083b78]">Professional Growth</h3>
            <p className="text-xs text-[#5f6f7f] leading-relaxed">
              Continuous medical education (CME), case reviews, and supportive senior clinical mentorship.
            </p>
          </div>

          <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#edf5fc] text-[#083b78] flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[#083b78]" />
            </div>
            <h3 className="text-sm font-bold text-[#083b78]">Competitive Compensation</h3>
            <p className="text-xs text-[#5f6f7f] leading-relaxed">
              Timely remuneration, performance rewards, and supportive clinical shift arrangements.
            </p>
          </div>
        </div>

        {/* Current Openings */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-[#083b78] font-heading">
            Current Clinical & Administrative Vacancies
          </h2>

          <div className="space-y-4">
            {currentOpenings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-[#083b78]">{job.title}</h3>
                    <span className="text-[10px] font-bold text-[#0f6bd9] bg-[#edf5fc] px-2 py-0.5 rounded uppercase">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-xs text-[#5f6f7f]">
                    {job.department} • {job.location}
                  </p>
                  <p className="text-xs text-[#10243e] pt-1">
                    <strong className="text-[#083b78]">Requirements:</strong> {job.requirements}
                  </p>
                </div>

                <a
                  href={`mailto:${hospitalInfo.contact.email}?subject=Application: ${encodeURIComponent(job.title)}`}
                  className="px-5 py-2.5 rounded-xl bg-[#0f6bd9] hover:bg-[#083b78] text-white text-xs font-bold transition-colors shadow-2xs whitespace-nowrap self-start md:self-auto"
                >
                  Apply via Email
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* General Application Notice */}
        <div className="bg-[#edf5fc] border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 text-xs text-[#5f6f7f] space-y-2">
          <h3 className="text-sm font-bold text-[#083b78]">General Clinical Applications</h3>
          <p>
            Do not see your specialty listed? Qualified physicians, nurses, and laboratory scientists are welcome to submit unsolicited CVs with verified credentials to <a href={`mailto:${hospitalInfo.contact.email}`} className="font-bold text-[#0f6bd9] underline">{hospitalInfo.contact.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
