import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, AlertCircle, Activity, Heart, ShieldCheck, Scissors, ArrowRight, CheckCircle2 } from 'lucide-react';
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
      default:
        return Stethoscope;
    }
  };

  return (
    <section
      id="services-section"
      className="py-16 md:py-20 bg-[#edf5fc]/50 border-b border-[#d8e3ec]"
      aria-label="Medical Services at Ihenyen Medical Centre"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block mb-2">
              Clinical Specialisations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083b78] font-heading">
              Essential healthcare services designed around you.
            </h2>
            <p className="text-sm sm:text-base text-[#5f6f7f] mt-2">
              From routine family medicine to 24/7 acute emergency response and maternity care, our clinical teams prioritize patient comfort and precision.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0f6bd9] hover:text-[#083b78] transition-colors self-start md:self-auto"
          >
            <span>Explore all 6 service departments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isEmergency
                          ? 'bg-[#c83b3b] text-white shadow-xs'
                          : 'bg-[#edf5fc] text-[#083b78]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold text-[#5f6f7f] bg-gray-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-[#083b78] mb-2 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#5f6f7f] leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6 border-t border-[#d8e3ec]/60 pt-3">
                    <p className="text-[11px] font-bold text-[#083b78] uppercase tracking-wider">
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
                <div className="pt-4 border-t border-[#d8e3ec] flex items-center justify-between mt-auto">
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
