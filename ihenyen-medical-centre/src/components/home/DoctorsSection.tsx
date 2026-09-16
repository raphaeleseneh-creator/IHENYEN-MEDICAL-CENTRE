import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, UserCheck } from 'lucide-react';
import { draftDoctors } from '../../data/hospitalConfig';
import { PremiumCard } from '../common/PremiumCard';

export const DoctorsSection: React.FC = () => {
  return (
    <section
      id="doctors-section"
      className="py-16 md:py-20 bg-white border-b border-[#d8e3ec]"
      aria-label="Medical Staff and Doctors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block mb-2">
              Clinical Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083b78] font-heading">
              Experienced physicians dedicated to your wellness.
            </h2>
            <p className="text-sm sm:text-base text-[#5f6f7f] mt-2">
              Our multidisciplinary medical team provides structured consultations across family medicine, obstetrics, paediatrics, and emergency triage.
            </p>
          </div>

          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0f6bd9] hover:text-[#083b78] transition-colors self-start md:self-auto"
          >
            <span>View all medical profiles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {draftDoctors.slice(0, 3).map((doctor) => (
            <PremiumCard
              key={doctor.id}
              id={`doctor-card-${doctor.slug}`}
              className="flex flex-col justify-between h-full p-5"
            >
              <div>
                {/* Doctor Photo with Hover Zoom */}
                <div className="image-zoom-container h-52 w-full bg-[#edf5fc] rounded-xl mb-4 relative">
                  <img
                    src={doctor.imageUrl}
                    alt={`${doctor.name} - ${doctor.title}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#083b78]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {doctor.department}
                  </div>
                </div>

                {/* Doctor Name & Qualifications */}
                <h3 className="text-lg font-extrabold text-[#083b78] font-heading leading-snug">
                  {doctor.name}
                </h3>
                <p className="text-xs font-bold text-[#0f6bd9] mb-1">{doctor.specialty}</p>
                <p className="text-[11px] text-[#5f6f7f] font-mono mb-3">{doctor.qualifications}</p>

                {/* Short Biography */}
                <p className="text-xs text-[#5f6f7f] line-clamp-2 leading-relaxed mb-4">
                  {doctor.biography}
                </p>

                {/* Clinic Schedule */}
                <div className="p-2.5 bg-[#edf5fc]/60 rounded-lg border border-[#d8e3ec]/80 flex items-start gap-2 text-xs text-[#083b78] mb-4">
                  <Clock className="w-3.5 h-3.5 text-[#0f6bd9] flex-shrink-0 mt-0.5" />
                  <span className="text-[11px] font-medium">{doctor.schedule}</span>
                </div>
              </div>

              {/* Doctor Card Footer */}
              <div className="pt-3 border-t border-[#d8e3ec] flex items-center justify-between mt-auto">
                <Link
                  to={`/doctors/${doctor.slug}`}
                  className="text-xs font-bold text-[#083b78] hover:text-[#0f6bd9] transition-colors"
                >
                  View Profile
                </Link>

                <Link
                  to={`/appointments?doctor=${doctor.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0f6bd9] hover:bg-[#083b78] px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit</span>
                </Link>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
};
