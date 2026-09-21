import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, AlertCircle, Activity, Heart, ShieldCheck, Scissors, Smile, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import { draftServices } from '../data/hospitalConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { PremiumCard } from '../components/common/PremiumCard';

export const ServicesPage: React.FC = () => {
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
    <div className="bg-[#fbf8f2]/40 min-h-screen pb-16">
      <SeoHead
        title="Medical Services & Clinical Departments"
        description="Explore medical services at Ihenyen Medical Centre: general medicine, specialist care, women’s health, dental care, diagnostics, paediatric health, and urgent support in Benin City."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Medical Services' }]} />

        {/* Page Header */}
        <div className="py-8 md:py-12 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block mb-2">
            Clinical Care Units
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#083b78] font-heading leading-tight">
            Medical Services & Specialisations
          </h1>
          <p className="text-base sm:text-lg text-[#5f6f7f] mt-3 leading-relaxed">
            Ihenyen Medical Centre offers dedicated clinical services organized around attentive consultations, timely diagnostics, women’s health, dental care, paediatric support, and urgent clinical guidance in Benin City.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {draftServices.map((service) => {
            const Icon = getIcon(service.iconName);
            const isEmergency = service.id === 'emergency-care';

            return (
              <PremiumCard
                key={service.id}
                id={`service-grid-card-${service.slug}`}
                enableTilt={!isEmergency}
                borderReveal={true}
                className="flex flex-col justify-between h-full p-6 bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isEmergency ? 'bg-[#c83b3b] text-white' : 'bg-[#edf5fc] text-[#083b78]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#5f6f7f] bg-gray-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#083b78] mb-2 font-heading">
                    {service.title}
                  </h2>
                  <p className="text-xs text-[#5f6f7f] leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-[#d8e3ec]/60 pt-3">
                    <p className="text-[11px] font-bold text-[#083b78] uppercase tracking-wider">
                      Key Capabilities:
                    </p>
                    <ul className="space-y-1.5">
                      {service.patientNeeds.slice(0, 3).map((need, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#5f6f7f]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0b7a75] flex-shrink-0 mt-0.5" />
                          <span>{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#d8e3ec] flex items-center justify-between mt-auto">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold text-[#083b78] hover:text-[#0f6bd9] flex items-center gap-1 transition-colors"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/appointments?service=${service.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#0f6bd9] hover:bg-[#083b78] px-3.5 py-1.5 rounded-lg transition-colors shadow-2xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </Link>
                </div>
              </PremiumCard>
            );
          })}
        </div>

      </div>
    </div>
  );
};
