import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Navigation, AlertCircle } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen pb-16">
      <SeoHead
        title="Contact Us & Directions - Benin City"
        description="Get in touch with Ihenyen Medical Centre: Address in Benin City, phone lines, WhatsApp direct chat, opening hours, and location directions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Page Header */}
        <div className="py-8 md:py-12 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block mb-2">
            Hospital Contact Desk
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#083b78] font-heading leading-tight">
            Get in Touch with Us
          </h1>
          <p className="text-base sm:text-lg text-[#5f6f7f] mt-3 leading-relaxed">
            We are here to answer your questions regarding medical consultations, HMO coverage, laboratory results, or emergency assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Map */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Card */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0f6bd9] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Physical Hospital Address</span>
              </div>
              <div>
                <p className="text-base font-extrabold text-[#083b78]">
                  {hospitalInfo.address.street}
                </p>
                <p className="text-sm text-[#5f6f7f]">
                  {hospitalInfo.address.area}, {hospitalInfo.address.city}, {hospitalInfo.address.state}, Nigeria.
                </p>
                <div className="mt-2 p-2.5 bg-[#fbf8f2] rounded-lg border border-[#d8e3ec] text-xs text-[#083b78]">
                  <strong>Landmark:</strong> {hospitalInfo.address.landmark}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={hospitalInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f6bd9] hover:bg-[#083b78] text-white text-xs font-bold transition-colors shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-sm space-y-3">
              <h2 className="text-xs font-bold text-[#083b78] uppercase tracking-wider">
                Telephone & Direct Communication
              </h2>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <a
                  href={`tel:${hospitalInfo.contact.emergencyPhone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-red-50 text-red-900 border border-red-200 hover:bg-red-100 transition-colors font-bold"
                >
                  <span className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#c83b3b]" />
                    <span>24/7 Emergency Line:</span>
                  </span>
                  <span>{hospitalInfo.contact.emergencyPhoneDisplay}</span>
                </a>

                <a
                  href={`tel:${hospitalInfo.contact.mainPhone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#edf5fc] text-[#083b78] border border-[#d8e3ec] hover:bg-[#d8e3ec]/60 transition-colors font-medium"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#0f6bd9]" />
                    <span>General Reception:</span>
                  </span>
                  <span className="font-bold">{hospitalInfo.contact.mainPhoneDisplay}</span>
                </a>

                <a
                  href={hospitalInfo.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100 transition-colors font-medium"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Service:</span>
                  </span>
                  <span className="font-bold">{hospitalInfo.contact.whatsappDisplay}</span>
                </a>

                <a
                  href={`mailto:${hospitalInfo.contact.email}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 text-[#10243e] border border-[#d8e3ec] hover:bg-gray-100 transition-colors font-medium"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#083b78]" />
                    <span>General Email:</span>
                  </span>
                  <span>{hospitalInfo.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0b7a75] uppercase tracking-wider mb-3">
                <Clock className="w-4 h-4" />
                <span>Operating Timetable</span>
              </div>
              <div className="space-y-2 text-xs text-[#5f6f7f]">
                <p className="flex justify-between border-b border-[#d8e3ec]/60 pb-1.5">
                  <span className="font-bold text-[#083b78]">Emergency Care:</span>
                  <span>{hospitalInfo.hours.emergency}</span>
                </p>
                <p className="flex justify-between border-b border-[#d8e3ec]/60 pb-1.5">
                  <span className="font-bold text-[#083b78]">Outpatient Consultations:</span>
                  <span>{hospitalInfo.hours.outpatient}</span>
                </p>
                <p className="flex justify-between border-b border-[#d8e3ec]/60 pb-1.5">
                  <span className="font-bold text-[#083b78]">Laboratory & Ultrasound:</span>
                  <span>{hospitalInfo.hours.laboratory}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-bold text-[#083b78]">Hospital Pharmacy:</span>
                  <span>{hospitalInfo.hours.pharmacy}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#083b78] font-heading mb-2">
                Send an Online Message
              </h2>
              <p className="text-xs text-[#5f6f7f] mb-6">
                Our patient coordination desk typically responds within 2 business hours during outpatient times.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#0b7a75] mx-auto" />
                  <h3 className="text-base font-bold text-emerald-900">Message Received</h3>
                  <p className="text-xs text-emerald-800">
                    Thank you for reaching out to Ihenyen Medical Centre. A member of our patient services team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#083b78] underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#083b78] mb-1">
                      Full Name <span className="text-[#c83b3b]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Osas Osagie"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#d8e3ec] rounded-xl focus:outline-hidden focus:border-[#0f6bd9] focus:ring-1 focus:ring-[#0f6bd9]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#083b78] mb-1">
                        Phone Number <span className="text-[#c83b3b]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0803 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#d8e3ec] rounded-xl focus:outline-hidden focus:border-[#0f6bd9] focus:ring-1 focus:ring-[#0f6bd9]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#083b78] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#d8e3ec] rounded-xl focus:outline-hidden focus:border-[#0f6bd9] focus:ring-1 focus:ring-[#0f6bd9]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#083b78] mb-1">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#d8e3ec] rounded-xl focus:outline-hidden focus:border-[#0f6bd9]"
                    >
                      <option>General Inquiry</option>
                      <option>HMO / Insurance Verification</option>
                      <option>Diagnostic & Lab Results</option>
                      <option>Maternity & Antenatal Registration</option>
                      <option>Billing & Receipts</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#083b78] mb-1">
                      Message <span className="text-[#c83b3b]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please write your question or inquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#d8e3ec] rounded-xl focus:outline-hidden focus:border-[#0f6bd9] focus:ring-1 focus:ring-[#0f6bd9]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0f6bd9] hover:bg-[#083b78] text-white text-xs font-bold transition-colors shadow-2xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
