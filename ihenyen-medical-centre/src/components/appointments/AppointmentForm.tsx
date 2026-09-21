import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, AlertTriangle, Clock, Phone, MessageSquare, Mail, Shield, User } from 'lucide-react';
import { draftServices, hospitalInfo } from '../../data/hospitalConfig';
import { AppointmentSubmission } from '../../types';
import { formEndpoints, submitJson } from '../../lib/submitForm';

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
  const formRef = useRef<HTMLFormElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  const updateField = <K extends keyof AppointmentSubmission>(
    field: K,
    value: AppointmentSubmission[K],
  ) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  useEffect(() => {
    if (isSuccess) successHeadingRef.current?.focus();
  }, [isSuccess]);

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
    } else if (!phoneRegex.test(cleanPhone)) {
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
    const isValid = Object.keys(newErrors).length === 0;

    if (!isValid) {
      window.requestAnimationFrame(() => {
        formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await submitJson(formEndpoints.appointment, {
        ...formData,
        submittedAt: new Date().toISOString(),
        source: 'website-appointment-form',
      });

      setIsSuccess(true);
    } catch (err) {
      setErrors({
        form:
          err instanceof Error
            ? err.message
            : 'We could not send your request. Please contact the hospital directly.',
      });
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

        <h3
          ref={successHeadingRef}
          tabIndex={-1}
          className="text-2xl font-bold text-[#083b78] mb-2 font-heading focus:outline-none"
        >
          Appointment Request Received
        </h3>

        <p className="text-sm text-[#5f6f7f] max-w-md mx-auto mb-6">
          Thank you, <strong className="text-[#10243e]">{formData.fullName}</strong>. Our patient coordination team will contact you via <strong>{formData.preferredContact}</strong> at <strong>{formData.phone}</strong> to confirm your clinical time slot.
        </p>

        <div className="bg-[#edf5fc] border border-[#d8e3ec] rounded-xl p-4 max-w-md mx-auto text-left space-y-2 mb-6">
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
            <strong>Need Immediate Care?</strong> If you are experiencing sudden severe symptoms, do not wait for appointment confirmation. Call immediately or proceed to the nearest emergency facility:{' '}
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
      ref={formRef}
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
          Once online booking is connected, use this form to request a consultation time. A request is not a confirmed appointment.
        </p>
      </div>

      {/* Emergency Notice Warning */}
      <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 flex items-start gap-2.5">
        <AlertTriangle className="w-4 h-4 text-[#c83b3b] flex-shrink-0 mt-0.5" />
        <span>
          <strong>Urgent Warning:</strong> Do not use this form for acute trauma, severe chest pain, or sudden breathing distress. Call{' '}
          <a href={`tel:${hospitalInfo.contact.emergencyPhone}`} className="font-bold underline text-[#c83b3b]">
            {hospitalInfo.contact.emergencyPhoneDisplay}
          </a>{' '}
          or go to the nearest emergency facility immediately.
        </span>
      </div>

      {!formEndpoints.appointment && (
        <div role="status" className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
          <strong>Online booking is not active yet.</strong> This form will be enabled after the hospital’s secure appointment service is connected. Do not enter patient information here yet.
        </div>
      )}

      <fieldset disabled={!formEndpoints.appointment} className="space-y-6 disabled:opacity-60">

      {errors.form && (
        <div role="alert" aria-live="assertive" className="p-3 bg-red-100 text-red-800 rounded-lg text-xs font-medium">
          {errors.form}
        </div>
      )}

      {Object.keys(errors).some((key) => key !== 'form') && (
        <div role="alert" aria-live="assertive" className="p-3 rounded-xl border border-red-200 bg-red-50 text-xs font-medium text-red-800">
          Please correct the highlighted fields before sending your appointment request.
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
            onClick={() => updateField('patientType', 'new')}
            aria-pressed={formData.patientType === 'new'}
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
            onClick={() => updateField('patientType', 'returning')}
            aria-pressed={formData.patientType === 'returning'}
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
            name="fullName"
            type="text"
            autoComplete="name"
            value={formData.fullName}
            onChange={(e) => updateField('fullName', e.currentTarget.value)}
            placeholder="e.g. Osasere Ihenyen"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#10243e] focus:outline-none focus:ring-2 focus:ring-[#0f6bd9] transition-colors ${
              errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-[#d8e3ec] bg-white'
            }`}
          />
          {errors.fullName && <p id="fullName-error" className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
        </div>

        {/* Telephone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-[#083b78] uppercase tracking-wider mb-1.5">
            Telephone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.currentTarget.value)}
            placeholder="e.g. 0803 123 4567"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#10243e] focus:outline-none focus:ring-2 focus:ring-[#0f6bd9] transition-colors ${
              errors.phone ? 'border-red-500 bg-red-50/30' : 'border-[#d8e3ec] bg-white'
            }`}
          />
          {errors.phone && <p id="phone-error" className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Optional Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-bold text-[#083b78] uppercase tracking-wider mb-1.5">
          Email Address <span className="text-[#5f6f7f] font-normal lowercase">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          spellCheck={false}
          value={formData.email}
          onChange={(e) => updateField('email', e.currentTarget.value)}
          placeholder="e.g. name@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#10243e] focus:outline-none focus:ring-2 focus:ring-[#0f6bd9] transition-colors ${
            errors.email ? 'border-red-500 bg-red-50/30' : 'border-[#d8e3ec] bg-white'
          }`}
        />
        {errors.email && <p id="email-error" className="text-xs text-red-600 mt-1">{errors.email}</p>}
      </div>

      {/* 3. Service Selection */}
      <div>
        <label htmlFor="serviceId" className="block text-xs font-bold text-[#083b78] uppercase tracking-wider mb-1.5">
          Preferred Medical Service <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceId"
          name="serviceId"
          value={formData.serviceId}
          onChange={(e) => updateField('serviceId', e.currentTarget.value)}
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
            name="preferredDate"
            type="date"
            min={minDateString}
            value={formData.preferredDate}
            aria-invalid={Boolean(errors.preferredDate)}
            aria-describedby={errors.preferredDate ? 'preferredDate-error' : undefined}
            onChange={(e) => updateField('preferredDate', e.currentTarget.value)}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#10243e] focus:outline-none focus:ring-2 focus:ring-[#0f6bd9] ${
              errors.preferredDate ? 'border-red-500 bg-red-50/30' : 'border-[#d8e3ec] bg-white'
            }`}
          />
          {errors.preferredDate && <p id="preferredDate-error" className="text-xs text-red-600 mt-1">{errors.preferredDate}</p>}
        </div>

        {/* Time Slot */}
        <div>
          <label htmlFor="preferredTimeSlot" className="block text-xs font-bold text-[#083b78] uppercase tracking-wider mb-1.5">
            Preferred Time of Day <span className="text-red-500">*</span>
          </label>
          <select
            id="preferredTimeSlot"
            name="preferredTimeSlot"
            value={formData.preferredTimeSlot}
            onChange={(e) => updateField('preferredTimeSlot', e.currentTarget.value as 'morning' | 'afternoon' | 'evening')}
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
                aria-pressed={isSelected}
                onClick={() => updateField('preferredContact', item.id as 'phone' | 'whatsapp' | 'email')}
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
            name="hasConsent"
            checked={formData.hasConsent}
            aria-invalid={Boolean(errors.hasConsent)}
            aria-describedby={errors.hasConsent ? 'consent-error' : undefined}
            onChange={(e) => updateField('hasConsent', e.currentTarget.checked)}
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
        {errors.hasConsent && <p id="consent-error" className="text-xs text-red-600 mt-1">{errors.hasConsent}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || !formEndpoints.appointment}
        className="w-full py-3.5 px-6 rounded-xl bg-[#0f6bd9] hover:bg-[#083b78] text-white text-base font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70"
        id="submit-appointment-button"
      >
        {isSubmitting ? (
          <>
            <Clock className="w-5 h-5 animate-spin" />
            <span>Sending Request…</span>
          </>
        ) : (
          <>
            <Calendar className="w-5 h-5" />
            <span>{formEndpoints.appointment ? 'Request Appointment' : 'Online Booking Coming Soon'}</span>
          </>
        )}
      </button>
      </fieldset>
    </form>
  );
};
