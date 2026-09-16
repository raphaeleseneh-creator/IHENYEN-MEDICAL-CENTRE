import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, Filter, Search, UserCheck } from 'lucide-react';
import { draftDoctors } from '../data/hospitalConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { PremiumCard } from '../components/common/PremiumCard';

export const DoctorsPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', ...Array.from(new Set(draftDoctors.map((d) => d.department)))];

  const filteredDoctors =
    selectedDept === 'All'
      ? draftDoctors
      : draftDoctors.filter((d) => d.department === selectedDept);

  return (
    <div className="bg-[#fbf8f2]/40 min-h-screen pb-16">
      <SeoHead
        title="Our Doctors & Medical Specialists"
        description="Meet the consulting physicians, family practitioners, paediatrician and obstetrician at Ihenyen Medical Centre in Benin City, Edo State."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Our Doctors' }]} />

        {/* Page Header */}
        <div className="py-8 md:py-12 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block mb-2">
            Medical Faculty
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#083b78] font-heading leading-tight">
            Consulting Physicians & Specialists
          </h1>
          <p className="text-base sm:text-lg text-[#5f6f7f] mt-3 leading-relaxed">
            Our medical staff are dedicated to delivering attentive, unhurried, and evidence-based patient consultations for individuals and families in Benin City.
          </p>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#d8e3ec]">
          <span className="text-xs font-bold text-[#083b78] uppercase tracking-wider mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#0f6bd9]" />
            <span>Filter:</span>
          </span>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                selectedDept === dept
                  ? 'bg-[#083b78] text-white shadow-2xs'
                  : 'bg-white text-[#5f6f7f] border border-[#d8e3ec] hover:bg-[#edf5fc] hover:text-[#083b78]'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDoctors.map((doctor) => (
            <PremiumCard
              key={doctor.id}
              id={`doctor-card-${doctor.slug}`}
              className="flex flex-col justify-between h-full p-5 bg-white"
            >
              <div>
                <div className="image-zoom-container h-56 w-full bg-[#edf5fc] rounded-xl mb-4 relative">
                  <img
                    src={doctor.imageUrl}
                    alt={`${doctor.name} - ${doctor.title}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#083b78]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {doctor.department}
                  </div>
                </div>

                <h2 className="text-lg font-extrabold text-[#083b78] font-heading leading-snug">
                  {doctor.name}
                </h2>
                <p className="text-xs font-bold text-[#0f6bd9] mb-1">{doctor.specialty}</p>
                <p className="text-[11px] text-[#5f6f7f] font-mono mb-3">{doctor.qualifications}</p>

                <p className="text-xs text-[#5f6f7f] line-clamp-3 leading-relaxed mb-4">
                  {doctor.biography}
                </p>

                <div className="p-2.5 bg-[#edf5fc]/60 rounded-lg border border-[#d8e3ec]/80 flex items-start gap-2 text-xs text-[#083b78] mb-4">
                  <Clock className="w-3.5 h-3.5 text-[#0f6bd9] flex-shrink-0 mt-0.5" />
                  <span className="text-[11px] font-medium">{doctor.schedule}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#d8e3ec] flex items-center justify-between mt-auto">
                <Link
                  to={`/doctors/${doctor.slug}`}
                  className="text-xs font-bold text-[#083b78] hover:text-[#0f6bd9] transition-colors flex items-center gap-1"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to={`/appointments?doctor=${doctor.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0f6bd9] hover:bg-[#083b78] px-3.5 py-1.5 rounded-lg transition-colors shadow-2xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit</span>
                </Link>
              </div>
            </PremiumCard>
          ))}
        </div>

        {/* Verification notice */}
        <div className="p-4 bg-white border border-[#d8e3ec] rounded-xl text-xs text-[#5f6f7f] max-w-3xl">
          <span className="font-bold text-[#083b78]">Clinical Notice:</span> Doctor profiles shown are structured placeholders for the hospital launch. Clinical certifications and exact duty rosters will be verified with the Medical Advisory Committee.
        </div>
      </div>
    </div>
  );
};
