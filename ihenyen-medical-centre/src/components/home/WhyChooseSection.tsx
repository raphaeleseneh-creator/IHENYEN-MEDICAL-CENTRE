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
      title: 'Fast & Reliable Service',
      description:
        'Patients can call ahead for quick guidance, appointment direction, and urgent care coordination.',
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
      className="overflow-hidden border-b border-[#d8e3ec] bg-[#f7faf8] py-16 md:py-24"
      aria-label="Why Choose Ihenyen Medical Centre"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Care Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <span className="section-kicker block text-[#0b7a75]">Patient-Centred Ethos</span>
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-[#083b78] sm:text-4xl md:text-5xl">
              A healthcare centre built on trust, clarity and genuine empathy.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[#5f6f7f] sm:text-base">
              At Ihenyen Medical Centre, we believe exceptional medicine begins with attentive listening. Located in Benin City, our facility is organized to provide dependable general and specialist care with dignity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {carePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="group space-y-3 rounded-2xl border border-[#d8e3ec] bg-white p-5 shadow-[0_18px_44px_-34px_rgba(8,59,120,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bcd3e8]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef7fb] text-[#083b78] transition-colors group-hover:bg-[#083b78] group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#083b78]">{pillar.title}</h3>
                    <p className="text-sm leading-6 text-[#5f6f7f]">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Verified Metrics & Trust Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-[#d8e3ec] bg-white p-6 shadow-[0_30px_70px_-45px_rgba(8,59,120,0.65)] sm:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#eef7fb] blur-2xl pointer-events-none" />

              <h3 className="font-heading mb-5 flex items-center gap-2 text-lg font-bold text-[#083b78]">
                <CheckCircle className="w-5 h-5 text-[#0b7a75]" />
                <span>Our Clinical Standards</span>
              </h3>

              <div className="space-y-4">
                {verifiedStats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex items-center justify-between gap-4 rounded-xl border border-[#d8e3ec]/70 bg-[#eef7fb]/70 p-4"
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
