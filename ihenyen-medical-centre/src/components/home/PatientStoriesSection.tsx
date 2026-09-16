import React from 'react';
import { Quote, ShieldCheck, Heart } from 'lucide-react';
import { approvedTestimonials } from '../../data/hospitalConfig';
import { PremiumCard } from '../common/PremiumCard';

export const PatientStoriesSection: React.FC = () => {
  return (
    <section
      id="patient-stories-section"
      className="py-16 md:py-20 bg-[#edf5fc]/40 border-b border-[#d8e3ec]"
      aria-label="Patient Experiences"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b7a75] block mb-2">
            Patient Reflections
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083b78] font-heading">
            Caring for our Benin City community.
          </h2>
          <p className="text-sm sm:text-base text-[#5f6f7f] mt-2">
            Every patient story represents our shared commitment to clinical thoroughness, comfort, and recovery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {approvedTestimonials.map((item) => (
            <PremiumCard
              key={item.id}
              className="flex flex-col justify-between h-full p-6 bg-white"
            >
              <div>
                {/* Quote Icon & Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#edf5fc] text-[#0f6bd9] flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-[#0b7a75] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-wider">
                    {item.serviceCategory}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-xs sm:text-sm text-[#10243e] italic leading-relaxed mb-4">
                  “{item.quote}”
                </blockquote>
              </div>

              {/* Author & Verification Tag */}
              <div className="pt-4 border-t border-[#d8e3ec] flex items-center justify-between">
                <div>
                  <p className="text-xs font-extrabold text-[#083b78]">Patient {item.patientInitials}</p>
                  <p className="text-[11px] text-[#5f6f7f]">{item.date}</p>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-bold text-[#0b7a75] bg-[#edf5fc] px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{item.label}</span>
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>

        {/* Compliance Note */}
        <div className="p-3.5 bg-white border border-[#d8e3ec] rounded-xl text-center max-w-2xl mx-auto text-xs text-[#5f6f7f]">
          <span className="font-semibold text-[#083b78]">Editorial Privacy Notice:</span> Patient initials are used in accordance with health privacy regulations. Verifiable written patient consent is obtained prior to publication.
        </div>
      </div>
    </section>
  );
};
