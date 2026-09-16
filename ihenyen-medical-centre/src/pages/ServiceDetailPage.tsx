import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Stethoscope, AlertCircle, Activity, Heart, ShieldCheck, Scissors, CheckCircle2, Calendar, Phone, ArrowRight, UserCheck } from 'lucide-react';
import { draftServices, draftDoctors, hospitalInfo } from '../data/hospitalConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { AppointmentForm } from '../components/appointments/AppointmentForm';

export const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  const service = draftServices.find((s) => s.slug === serviceSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const assignedDoctors = draftDoctors.filter((doc) =>
    service.availableDoctorIds.includes(doc.id)
  );

  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen pb-16">
      <SeoHead
        title={`${service.title} - Medical Services`}
        description={`${service.shortDescription} Available at Ihenyen Medical Centre in Benin City, Edo State.`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Medical Services', path: '/services' },
            { label: service.title },
          ]}
        />

        {/* Hero Banner for Service */}
        <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-10 shadow-sm mt-4 mb-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#0f6bd9] bg-[#edf5fc] px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              {service.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083b78] font-heading leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-[#5f6f7f] mt-3 leading-relaxed">
              {service.overview}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-6">
              <a
                href="#schedule-visit-section"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0f6bd9] hover:bg-[#083b78] text-white text-sm font-bold transition-colors shadow-2xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Service</span>
              </a>

              <a
                href={`tel:${hospitalInfo.contact.mainPhone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#d8e3ec] hover:bg-[#edf5fc] text-[#083b78] text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0f6bd9]" />
                <span>Call Help Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Guidance (if applicable) */}
        {service.emergencyGuidance && (
          <div className="p-5 bg-red-50 border-2 border-red-200 rounded-2xl mb-10 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-[#c83b3b] flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-bold text-[#c83b3b] uppercase tracking-wider mb-1">
                Emergency & Urgent Clinical Guidance
              </h2>
              <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
                {service.emergencyGuidance}
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${hospitalInfo.contact.emergencyPhone}`}
                  className="text-xs font-bold text-white bg-[#c83b3b] hover:bg-red-800 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Emergency: {hospitalInfo.contact.emergencyPhoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Left Content: Clinical Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Patient Needs Addressed */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
              <h2 className="text-lg font-bold text-[#083b78] font-heading mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0b7a75]" />
                <span>Patient Needs & Symptoms Addressed</span>
              </h2>
              <ul className="space-y-3">
                {service.patientNeeds.map((need, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#10243e]">
                    <span className="w-2 h-2 rounded-full bg-[#0f6bd9] mt-2 flex-shrink-0" />
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. What To Expect During Your Visit */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
              <h2 className="text-lg font-bold text-[#083b78] font-heading mb-4">
                What to Expect During Your Consultation
              </h2>
              <div className="space-y-3">
                {service.whatToExpect.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-[#edf5fc]/40 rounded-xl border border-[#d8e3ec]/60">
                    <span className="w-6 h-6 rounded-full bg-[#083b78] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#5f6f7f] leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Common Treatments & Diagnostic Procedures */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
              <h2 className="text-lg font-bold text-[#083b78] font-heading mb-4">
                Clinical Procedures & Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.commonTreatments.map((treatment, idx) => (
                  <div key={idx} className="p-3 bg-[#fbf8f2] rounded-xl border border-[#d8e3ec] text-xs text-[#083b78] font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0b7a75]" />
                    <span>{treatment}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Doctors Associated With This Service */}
            {assignedDoctors.length > 0 && (
              <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
                <h2 className="text-lg font-bold text-[#083b78] font-heading mb-4">
                  Consulting Physicians & Specialists
                </h2>
                <div className="space-y-4">
                  {assignedDoctors.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-4 rounded-xl bg-[#edf5fc]/50 border border-[#d8e3ec] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={doc.imageUrl}
                          alt={doc.name}
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        <div>
                          <p className="text-sm font-bold text-[#083b78]">{doc.name}</p>
                          <p className="text-xs text-[#0f6bd9]">{doc.specialty}</p>
                          <p className="text-[11px] text-[#5f6f7f]">{doc.schedule}</p>
                        </div>
                      </div>

                      <Link
                        to={`/doctors/${doc.slug}`}
                        className="text-xs font-bold text-[#083b78] hover:text-[#0f6bd9] flex items-center gap-1 self-end sm:self-auto"
                      >
                        <span>View Profile</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Appointment Booking Form */}
          <div className="lg:col-span-5 space-y-6" id="schedule-visit-section">
            <AppointmentForm initialServiceId={service.id} />
          </div>
        </div>
      </div>
    </div>
  );
};
