import React from 'react';
import { ShieldCheck, HeartHandshake, UserCheck, Clock, CheckCircle } from 'lucide-react';
import { trustStats } from '../../data/hospitalConfig';

export const WhyChooseSection: React.FC = () => {
  // Strict requirement: Only display verified trust metrics. Never display zero or unverified counters.
  const verifiedStats = trustStats.filter((stat) => stat.isVerified);

  const carePillars = [
    {
      icon: HeartHandshake,
      title: 'Compassionate, Unhurried Consultations',
      description:
        'Our clinical staff take the time to listen to your health history and explain test results in clear, relatable language.',
    },
    {
      icon: Clock,
      title: '24/7 Rapid Emergency Readiness',
      description:
        'Trauma, acute medical and maternity emergencies are met with an immediate, coordinated medical response around the clock.',
    },
    {
      icon: UserCheck,
      title: 'Patient Dignity & Confidentiality',
      description:
        'Every patient is treated with respect and privacy in full alignment with the Nigeria Data Protection Act (NDPA).',
    },
    {
      icon: ShieldCheck,
      title: 'Integrated Diagnostic Support',
      description:
        'On-site laboratory and ultrasound capabilities ensure accurate, timely diagnostics without unnecessary patient delays.',
    },
  ];

  return (
    <section
      id="why-choose-section"
      className="py-16 md:py-20 bg-[#fbf8f2] border-b border-[#d8e3ec]"
      aria-label="Why Choose Ihenyen Medical Centre"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Care Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b7a75] block">
              Patient-Centred Ethos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083b78] font-heading leading-tight">
              A healthcare centre built on trust, clarity and genuine empathy.
            </h2>
            <p className="text-sm sm:text-base text-[#5f6f7f] leading-relaxed">
              At Ihenyen Medical Centre, we believe exceptional medicine begins with attentive listening. Located in Benin City, our facility is organized to provide dependable outpatient and emergency care with dignity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {carePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-[#d8e3ec] shadow-2xs space-y-2"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#edf5fc] text-[#083b78] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#083b78]">{pillar.title}</h3>
                    <p className="text-xs text-[#5f6f7f] leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Verified Metrics & Trust Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-[#d8e3ec] p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#edf5fc] rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-lg font-bold text-[#083b78] mb-4 font-heading flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#0b7a75]" />
                <span>Our Clinical Standards</span>
              </h3>

              <div className="space-y-4">
                {verifiedStats.map((stat) => (
                  <div
                    key={stat.id}
                    className="p-4 rounded-xl bg-[#edf5fc]/60 border border-[#d8e3ec]/70 flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-xs font-bold text-[#083b78] uppercase tracking-wider">
                        {stat.label}
                      </p>
                      <p className="text-xs text-[#5f6f7f]">{stat.description}</p>
                    </div>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#0f6bd9] font-heading whitespace-nowrap">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#d8e3ec] text-xs text-[#5f6f7f] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0b7a75] flex-shrink-0" />
                <span>Operating under standard Nigerian healthcare practice protocols.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
