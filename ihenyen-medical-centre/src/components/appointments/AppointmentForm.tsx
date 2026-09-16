import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, AlertTriangle, Clock, Phone, MessageSquare, Mail, Shield, User } from 'lucide-react';
import { draftServices, hospitalInfo } from '../../data/hospitalConfig';
import { AppointmentSubmission } from '../../types';

interface AppointmentFormProps {
  initialServiceId?: string;
  className?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialServiceId = '',
  className = '',
}) => {
  const [formData, setFormData] = useState<AppointmentSubmission>({
    fullName: '',
    phone: '',
    email: '',
    patientType: 'new',
    serviceId: initialServiceId || (draftServices[0]?.id ?? 'general-medical-care'),
    preferredDate: '',
    preferredTimeSlot: 'morning',
    preferredContact: 'phone',
    additionalNote: '',
    hasConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  // Min date is tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please provide your full legal name.';
    }

    // Nigerian phone validation (e.g. 080..., 070..., 090..., +234...)
    const phoneRegex = /^(\+234|0)[789][01]\d{8}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Telephone number is required.';
    } else if (cleanPhone.length < 11) {
      newErrors.phone = 'Please enter a valid telephone number (e.g., 0803 000 0000).';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please choose your preferred appointment date.';
    }

    if (!formData.hasConsent) {
      newErrors.hasConsent = 'You must acknowledge the privacy consent to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API processing delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const generatedRef = `IMC-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(generatedRef);

      const submissionRecord = {
        ...formData,
        id: generatedRef,
        createdAt: new Date().toISOString(),
        status: 'pending',
      };

      // Store in client-side persistence for immediate user reference
      try {
        const existing = JSON.parse(localStorage.getItem('imc_appointments') || '[]');
        localStorage.setItem('imc_appointments', JSON.stringify([submissionRecord, ...existing]));
      } catch (err) {
        console.warn('LocalStorage not available in this context:', err);
      }

      setIsSuccess(true);
    } catch (err) {
      setErrors({ form: 'An unexpected error occurred. Please call the reception desk.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    const selectedService = draftServices.find((s) => s.id === formData.serviceId);

    return (
      <div
        className={`bg-white border-2 border-emerald-200 rounded-2xl p-6 sm:p-8 text-center shadow-lg animate-in fade-in zoom-in-95 duration-300 ${className}`}
        id="appointment-confirmation-view"
      >
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10" />
        </div>

        <h3 className="text-2xl font-bold text-[#083b78] mb-2 font-heading">
          Appointment Request Received
        </h3>

        <p className="text-sm text-[#5f6f7f] max-w-md mx-auto mb-6">
          Thank you, <strong className="text-[#10243e]">{formData.fullName}</strong>. Our patient coordination team will contact you via <strong>{formData.preferredContact}</strong> at <strong>{formData.phone}</strong> to confirm your clinical time slot.
        </p>

        <div className="bg-[#edf5fc] border border-[#d8e3ec] rounded-xl p-4 max-w-md mx-auto text-left space-y-2 mb-6">
          <div className="flex justify-between text-xs text-[#5f6f7f]">
            <span>Reference Code:</span>
            <span className="font-mono font-bold text-[#083b78] text-sm">{bookingRef}</span>
          </div>
          <div className="flex justify-between text-xs text-[#5f6f7f]">
            <span>Service:</span>
            <span className="font-semibold text-[#10243e]">{selectedService?.title || 'General Consultation'}</span>
          </div>
          <div className="flex justify-between text-xs text-[#5f6f7f]">
            <span>Preferred Date:</span>
            <span className="font-semibold text-[#10243e]">{formData.preferredDate} ({formData.preferredTimeSlot})</span>
          </div>
          <div className="flex justify-between text-xs text-[#5f6f7f]">
            <span>Patient Type:</span>
            <span className="capitalize font-semibold text-[#10243e]">{formData.patientType} Patient</span>
          </div>
        </div>

        <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 text-left max-w-md mx-auto mb-6 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Need Immediate Care?</strong> If you are experiencing sudden severe symptoms, do not wait for appointment confirmation. Proceed directly to our 24/7 Emergency unit or call{' '}
            <a href={`tel:${hospitalInfo.contact.emergencyPhone}`} className="font-bold underline">
              {hospitalInfo.contact.emergencyPhoneDisplay}
            </a>.
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                patientType: 'new',
                serviceId: draftServices[0]?.id ?? 'general-medical-care',
                preferredDate: '',
                preferredTimeSlot: 'morning',
                preferredContact: 'phone',
                additionalNote: '',
                hasConsent: false,
              });
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#d8e3ec] text-sm font-semibold text-[#083b78] hover:bg-gray-50 transition-colors"
          >
            Submit Another Request
          </button>

          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0f6bd9] hover:bg-[#083b78] text-white text-sm font-bold shadow-sm transition-colors text-center"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 ${className}`}
      id="hospital-appointment-form"
    >
      {/* Form Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-[#0f6bd9] uppercase tracking-wider mb-1">
          <Calendar className="w-4 h-4" />
          <span>Patient Appointment Desk</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#083b78] font-heading">
          Schedule a Hospital Visit
        </h3>
        <p className="text-xs sm:text-sm text-[#5f6f7f] mt-1">
          Complete this straightforward form. Our desk will contact you to confirm the exact consultation schedule.
        </p>
      </div>

      {/* Emergency Notice Warning */}
      <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 flex items-start gap-2.5">
        <AlertTriangle className="w-4 h-4 text-[#c83b3b] flex-shrink-0 mt-0.5" />
        <span>
          <strong>Emergency Warning:</strong> Do not use this form for acute trauma, severe chest pain, or sudden breathing distress. Call{' '}
          <a href={`tel:${hospitalInfo.contact.emergencyPhone}`} className="font-bold underline text-[#c83b3b]">
            {hospitalInfo.contact.emergencyPhoneDisplay}
          </a>{' '}
          or visit our emergency room immediately.
        </span>
      </div>

      {errors.form && (
        <div className="p-3 bg-red-100 text-red-800 rounded-lg text-xs font-medium">
          {errors.form}
        </div>
      )}

      {/* 1. Patient Status */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#083b78] mb-2">
          Patient Status <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, patientType: 'new' })}
            className={`py-2.5 px-4 rounded-xl text-sm font-semibold border flex items-center justify-center gap-2 transition-all ${
              formData.patientType === 'new'
                ? 'bg-[#edf5fc] border-[#0f6bd9] text-[#083b78] shadow-xs'
                : 'bg-white border-[#d8e3ec] text-[#5f6f7f] hover:bg-gray-50'
            }`}
          >
            <User className="w-4 h-4" />
            <span>New Patient</span>
          </button>

          <button
            type="button"
            onClick={() => setFormData({ ...formData, patientType: 'returning' })}
            className={`py-2.5 px-4 rounded-xl text-sm font-semibold border flex items-center justify-center gap-2 transition-all ${
              formData.patientType === 'returning'
                ? 'bg-[#edf5fc] border-[#0f6bd9] text-[#083b78] shadow-xs'
                : 'bg-white border-[#d8e3ec] text-[#5f6f7f] hover:bg-gray-50'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>Returning Patient</span>
          </button>
        </div>
      </div>

      {/* 2. Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-[#083b78] uppercase tracking-wider mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Osasere Ihenyen"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#10243e] focus:outline-none focus:ring-2 focus:ring-[#0f6bd9] transition-colors ${
              errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-[#d8e3ec] bg-white'
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
        </div>

        {/* Telephone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-[#083b78] uppercase tracking-wider mb-1.5">
            Telephone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 0803 123 4567"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#10243e] focus:outline-none focus:ring-2 focus:ring-[#0f6bd9] transition-colors ${
              errors.phone ? 'border-red-500 bg-red-50/30' : 'border-[#d8e3ec] bg-white'
            }`}
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Optional Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-bold text-[#083b78] uppercase tracking-wider mb-1.5">
          Email Address <span className="text-[#5f6f7f] font-normal lowercase">(optional)</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="e.g. name@example.com"
          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#10243e] focus:outline-none focus:ring-2 focus:ring-[#0f6bd9] transition-colors ${
            errors.email ? 'border-red-500 bg-red-50/30' : 'border-[#d8e3ec] bg-white'
          }`}
        />
        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
      </div>

      {/* 3. Service Selection */}
      <div>
        <label htmlFor="serviceId" className="block text-xs font-bold text-[#083b78] uppercase tracking-wider mb-1.5">
          Preferred Medical Service <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceId"
          value={formData.serviceId}
          onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-[#d8e3ec] bg-white text-sm text-[#10243e] focus:outline-none focus:ring-2 focus:ring-[#0f6bd9]"
        >
          {draftServices.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title} ({service.category})
            </option>
          ))}
        </select>
      </div>

      {/* 4. Date and Time Slot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Date */}
        <div>
          <label htmlFor="preferredDate" className="block text-xs font-bold text-[#083b78] uppercase tracking-wider mb-1.5">
            Preferred Date <span className="text-red-500">*</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            min={minDateString}
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#10243e] focus:outline-none focus:ring-2 focus:ring-[#0f6bd9] ${
              errors.preferredDate ? 'border-red-500 bg-red-50/30' : 'border-[#d8e3ec] bg-white'
            }`}
          />
          {errors.preferredDate && <p className="text-xs text-red-600 mt-1">{errors.preferredDate}</p>}
        </div>

        {/* Time Slot */}
        <div>
          <label htmlFor="preferredTimeSlot" className="block text-xs font-bold text-[#083b78] uppercase tracking-wider mb-1.5">
            Preferred Time of Day <span className="text-red-500">*</span>
          </label>
          <select
            id="preferredTimeSlot"
            value={formData.preferredTimeSlot}
            onChange={(e) =>
              setFormData({
                ...formData,
                preferredTimeSlot: e.target.value as 'morning' | 'afternoon' | 'evening',
              })
            }
            className="w-full px-4 py-2.5 rounded-xl border border-[#d8e3ec] bg-white text-sm text-[#10243e] focus:outline-none focus:ring-2 focus:ring-[#0f6bd9]"
          >
            <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
            <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
            <option value="evening">Evening (4:00 PM – 7:00 PM)</option>
          </select>
        </div>
      </div>

      {/* 5. Preferred Contact Method */}
      <div>
        <label className="block text-xs font-bold text-[#083b78] uppercase tracking-wider mb-2">
          How Should We Confirm With You? <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { id: 'phone', label: 'Phone Call', icon: Phone },
            { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
            { id: 'email', label: 'Email', icon: Mail },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = formData.preferredContact === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    preferredContact: item.id as 'phone' | 'whatsapp' | 'email',
                  })
                }
                className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold border flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-all ${
                  isSelected
                    ? 'bg-[#edf5fc] border-[#0f6bd9] text-[#083b78]'
                    : 'bg-white border-[#d8e3ec] text-[#5f6f7f] hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4 text-[#0f6bd9]" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 6. Privacy & Consent Notice */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={formData.hasConsent}
            onChange={(e) => setFormData({ ...formData, hasConsent: e.target.checked })}
            className="mt-1 w-4 h-4 rounded text-[#0f6bd9] focus:ring-[#0f6bd9] border-[#d8e3ec]"
          />
          <span className="text-xs text-[#5f6f7f] leading-relaxed">
            I consent to Ihenyen Medical Centre processing my contact details to coordinate this appointment request in accordance with the{' '}
            <Link to="/privacy" className="text-[#0f6bd9] underline">
              Nigeria Data Protection Act (NDPA) Policy
            </Link>
            . I understand this form is for appointment scheduling and does not submit medical records or replace clinical evaluation.
          </span>
        </label>
        {errors.hasConsent && <p className="text-xs text-red-600 mt-1">{errors.hasConsent}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-xl bg-[#0f6bd9] hover:bg-[#083b78] text-white text-base font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70"
        id="submit-appointment-button"
      >
        {isSubmitting ? (
          <>
            <Clock className="w-5 h-5 animate-spin" />
            <span>Processing Request...</span>
          </>
        ) : (
          <>
            <Calendar className="w-5 h-5" />
            <span>Request Appointment</span>
          </>
        )}
      </button>
    </form>
  );
};
