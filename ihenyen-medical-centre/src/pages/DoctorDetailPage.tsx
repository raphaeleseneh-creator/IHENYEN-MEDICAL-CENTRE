import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Calendar, Globe2, ShieldCheck, Phone, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';
import { draftDoctors, draftServices, hospitalInfo } from '../data/hospitalConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { AppointmentForm } from '../components/appointments/AppointmentForm';

export const DoctorDetailPage: React.FC = () => {
  const { doctorSlug } = useParams<{ doctorSlug: string }>();

  const doctor = draftDoctors.find((d) => d.slug === doctorSlug);

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  // Find department service if linked
  const matchingService = draftServices.find((s) => s.title === doctor.department);

  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen pb-16">
      <SeoHead
        title={`${doctor.name} - ${doctor.specialty}`}
        description={`Profile, consultation hours, and appointment scheduling for ${doctor.name}, ${doctor.title} at Ihenyen Medical Centre in Benin City.`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Our Doctors', path: '/doctors' },
            { label: doctor.name },
          ]}
        />

        {/* Doctor Header Banner */}
        <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-10 shadow-sm mt-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="h-64 w-full bg-[#edf5fc] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-9 space-y-3">
              <span className="text-xs font-bold text-[#0f6bd9] bg-[#edf5fc] px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                {doctor.department}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083b78] font-heading leading-tight">
                {doctor.name}
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#0f6bd9]">{doctor.title}</p>
              <p className="text-xs sm:text-sm font-mono text-[#5f6f7f]">{doctor.qualifications}</p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#5f6f7f]">
                <span className="flex items-center gap-1.5 bg-[#fbf8f2] px-3 py-1.5 rounded-lg border border-[#d8e3ec]">
                  <Clock className="w-4 h-4 text-[#0f6bd9]" />
                  <span>{doctor.schedule}</span>
                </span>

                <span className="flex items-center gap-1.5 bg-[#fbf8f2] px-3 py-1.5 rounded-lg border border-[#d8e3ec]">
                  <Globe2 className="w-4 h-4 text-[#0b7a75]" />
                  <span>Languages: {doctor.languages.join(', ')}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Biography & Schedule Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Biography */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
              <h2 className="text-lg font-bold text-[#083b78] font-heading mb-3">
                Clinical Overview & Professional Background
              </h2>
              <p className="text-sm text-[#5f6f7f] leading-relaxed mb-4">
                {doctor.biography}
              </p>
              <p className="text-xs text-[#5f6f7f] leading-relaxed bg-[#edf5fc]/40 p-4 rounded-xl border border-[#d8e3ec]">
                Consultations emphasize preventative management, clear diagnostic communication, and patient-centred clinical decision making.
              </p>
            </div>

            {/* Consultation Days */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
              <h2 className="text-lg font-bold text-[#083b78] font-heading mb-4">
                Weekly Consultation Schedule
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => {
                  const isAvailable = doctor.availableDays.includes(day);
                  return (
                    <div
                      key={day}
                      className={`p-3 rounded-xl border text-center text-xs font-semibold ${
                        isAvailable
                          ? 'bg-[#edf5fc] border-[#0f6bd9] text-[#083b78]'
                          : 'bg-gray-50 border-gray-200 text-gray-400'
                      }`}
                    >
                      <p className="font-bold">{day}</p>
                      <p className="text-[10px] mt-0.5 font-normal">
                        {isAvailable ? 'Clinic Active' : 'Off-Schedule'}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Linked Service */}
            {matchingService && (
              <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-2xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#5f6f7f] uppercase tracking-wider">Primary Department</p>
                  <p className="text-base font-bold text-[#083b78]">{matchingService.title}</p>
                </div>
                <Link
                  to={`/services/${matchingService.slug}`}
                  className="text-xs font-bold text-[#0f6bd9] hover:underline flex items-center gap-1"
                >
                  <span>Explore Department</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-5 space-y-6">
            <AppointmentForm initialServiceId={matchingService?.id || ''} />
          </div>
        </div>
      </div>
    </div>
  );
};
