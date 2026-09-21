import React from 'react';
import { ShieldCheck, Heart, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen pb-16">
      <SeoHead
        title="About Ihenyen Medical Centre - Benin City, Nigeria"
        description="Learn about the founding mission, clinical standards, and compassionate patient care ethos at Ihenyen Medical Centre in Benin City, Edo State."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Hero Section */}
        <div className="py-8 md:py-12 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block mb-2">
            Our Healthcare Heritage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#083b78] font-heading leading-tight">
            About Ihenyen Medical Centre
          </h1>
          <p className="text-base sm:text-lg text-[#5f6f7f] mt-3 leading-relaxed">
            Built around quality healthcare you can trust, Ihenyen Medical Centre provides compassionate general and specialist care in a serene, patient-friendly environment in Benin City.
          </p>
        </div>

        {/* Mission, Vision & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#edf5fc] text-[#083b78] flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#0f6bd9]" />
            </div>
            <h2 className="text-xl font-bold text-[#083b78] font-heading">Our Mission</h2>
            <p className="text-xs sm:text-sm text-[#5f6f7f] leading-relaxed">
              To provide dependable, clinically sound, and empathetic healthcare services to individuals and families across Edo State, ensuring every patient is heard, respected, and treated with medical dignity.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#0b7a75]" />
            </div>
            <h2 className="text-xl font-bold text-[#083b78] font-heading">Our Vision</h2>
            <p className="text-xs sm:text-sm text-[#5f6f7f] leading-relaxed">
              To be recognized as Benin City's most dependable community healthcare institution, where clinical excellence and genuine human compassion unite seamlessly.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-10 shadow-sm mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-[#083b78] font-heading">
            Our Fundamental Care Principles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#083b78] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0b7a75]" />
                <span>Clinical Precision</span>
              </h3>
              <p className="text-xs text-[#5f6f7f] leading-relaxed">
                Evidence-based protocols supported by on-site clinical laboratory testing and ultrasound imaging.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#083b78] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0b7a75]" />
                <span>Active Listening</span>
              </h3>
              <p className="text-xs text-[#5f6f7f] leading-relaxed">
                Unhurried consultations where physicians explain diagnoses clearly in English, Edo, or Nigerian Pidgin.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#083b78] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0b7a75]" />
                <span>Reliable Access</span>
              </h3>
              <p className="text-xs text-[#5f6f7f] leading-relaxed">
                Fast communication channels and clear guidance for appointments, visits, and urgent concerns.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#083b78] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0b7a75]" />
                <span>Ethical Integrity</span>
              </h3>
              <p className="text-xs text-[#5f6f7f] leading-relaxed">
                Transparent billing, honest clinical recommendations, and patient record confidentiality.
              </p>
            </div>
          </div>
        </div>

        {/* Location CTA */}
        <div className="bg-[#edf5fc] border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-[#083b78] font-heading">
              Visit Us in Benin City
            </h3>
            <p className="text-xs text-[#5f6f7f] mt-1">
              {hospitalInfo.address.street}, {hospitalInfo.address.area}, {hospitalInfo.address.city}, Edo State.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#0f6bd9] hover:bg-[#083b78] text-white text-xs font-bold transition-colors shadow-2xs"
            >
              Get Directions & Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
