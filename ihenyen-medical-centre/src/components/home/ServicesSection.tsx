import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, AlertCircle, Activity, Heart, ShieldCheck, Scissors, Smile, ArrowRight, CheckCircle2 } from 'lucide-react';
import { draftServices } from '../../data/hospitalConfig';
import { PremiumCard } from '../common/PremiumCard';

export const ServicesSection: React.FC = () => {
  // Map icon names to Lucide components safely
  const getIcon = (name: string) => {
    switch (name) {
      case 'AlertCircle':
        return AlertCircle;
      case 'Activity':
        return Activity;
      case 'Heart':
        return Heart;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Scissors':
        return Scissors;
      case 'Smile':
        return Smile;
      default:
        return Stethoscope;
    }
  };

  return (
    <section
      id="services-section"
      className="border-b border-[#d8e3ec] bg-[#eef7fb] py-16 md:py-24"
      aria-label="Medical Services at Ihenyen Medical Centre"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-kicker mb-3 block">Clinical Specialisations</span>
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-[#083b78] sm:text-4xl md:text-5xl">
              Essential healthcare services designed around you.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#5f6f7f] sm:text-base">
              From general consultations to women’s health, dental care, diagnostics, and urgent clinical support, our team prioritizes patient comfort and clarity.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0f6bd9] hover:text-[#083b78] transition-colors self-start md:self-auto"
          >
            <span>Explore all {draftServices.length} service departments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {draftServices.map((service) => {
            const Icon = getIcon(service.iconName);
            const isEmergency = service.id === 'emergency-care';

            return (
              <PremiumCard
                key={service.id}
                id={`service-card-${service.slug}`}
                enableTilt={!isEmergency}
                borderReveal={true}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        isEmergency
                          ? 'bg-[#c83b3b] text-white shadow-xs'
                          : 'bg-[#eef7fb] text-[#083b78]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="rounded-full bg-[#f7faf8] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#5f6f7f]">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-heading mb-2 text-xl font-bold text-[#083b78]">
                    {service.title}
                  </h3>
                  <p className="mb-5 text-sm leading-6 text-[#5f6f7f]">
                    {service.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6 space-y-2 border-t border-[#d8e3ec]/60 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#083b78]">
                      What we address:
                    </p>
                    <ul className="space-y-1.5">
                      {service.patientNeeds.slice(0, 2).map((need, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#5f6f7f]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0b7a75] flex-shrink-0 mt-0.5" />
                          <span>{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-auto flex items-center justify-between border-t border-[#d8e3ec] pt-4">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold text-[#083b78] hover:text-[#0f6bd9] flex items-center gap-1 transition-colors"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/appointments?service=${service.id}`}
                    className="text-xs font-bold text-white bg-[#0f6bd9] hover:bg-[#083b78] px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
                  >
                    Book
                  </Link>
                </div>
              </PremiumCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
