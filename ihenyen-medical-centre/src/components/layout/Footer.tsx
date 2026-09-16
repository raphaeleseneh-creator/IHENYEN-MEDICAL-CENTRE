import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, Shield, AlertCircle } from 'lucide-react';
import { HospitalLogo } from '../common/HospitalLogo';
import { hospitalInfo, draftServices } from '../../data/hospitalConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#083b78] text-white pt-16 pb-24 lg:pb-16 border-t-4 border-[#1476e8]" id="hospital-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-800/60">
          {/* Column 1: Hospital Brand & Mission */}
          <div className="space-y-4">
            <HospitalLogo variant="white" />
            <p className="text-sm text-blue-100/80 leading-relaxed">
              Providing dependable, patient-focused healthcare in Benin City, Edo State. Our dedicated team is committed to compassionate clinical excellence for you and your family.
            </p>

            <div className="p-3.5 bg-blue-900/60 rounded-xl border border-blue-700/50 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-300 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-red-200 uppercase tracking-wider">24/7 Emergency Line</p>
                <a
                  href={`tel:${hospitalInfo.contact.emergencyPhone}`}
                  className="text-base font-extrabold text-white hover:text-blue-200 transition-colors"
                >
                  {hospitalInfo.contact.emergencyPhoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Clinical Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-4">
              Medical Services
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-100/90">
              {draftServices.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-xs font-bold text-blue-300 hover:text-white flex items-center gap-1 underline"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Patient & Hospital Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-4">
              Patient Information
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-100/90">
              <li>
                <Link to="/appointments" className="hover:text-white hover:underline transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-white hover:underline transition-colors">
                  Our Doctors & Specialists
                </Link>
              </li>
              <li>
                <Link to="/hmo-and-payments" className="hover:text-white hover:underline transition-colors">
                  HMO & Health Insurance
                </Link>
              </li>
              <li>
                <Link to="/patient-information" className="hover:text-white hover:underline transition-colors">
                  Visiting Hours & Admission
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="hover:text-white hover:underline transition-colors text-red-200 font-semibold">
                  Emergency Department (24/7)
                </Link>
              </li>
              <li>
                <Link to="/health-resources" className="hover:text-white hover:underline transition-colors">
                  Health Resources & Guides
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-colors">
                  About the Centre
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-300">
              Hospital Location
            </h3>
            <div className="space-y-3 text-sm text-blue-100/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-300 flex-shrink-0 mt-1" />
                <span>
                  {hospitalInfo.address.street}, {hospitalInfo.address.area}, {hospitalInfo.address.city}, {hospitalInfo.address.state}, Nigeria.
                  <span className="block text-xs text-blue-300/80 mt-0.5 font-medium">
                    ({hospitalInfo.address.landmark})
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <a href={`tel:${hospitalInfo.contact.mainPhone}`} className="hover:underline">
                  {hospitalInfo.contact.mainPhoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                <a
                  href={hospitalInfo.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-emerald-200"
                >
                  WhatsApp: {hospitalInfo.contact.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <a href={`mailto:${hospitalInfo.contact.email}`} className="hover:underline">
                  {hospitalInfo.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-white">Emergency: 24/7 Everyday</p>
                  <p className="text-blue-200/80">Outpatient: Mon – Sat (8am – 7pm)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medical & Privacy Disclaimers */}
        <div className="py-6 border-b border-blue-800/60 text-xs text-blue-200/80 space-y-2">
          <p>
            <strong className="text-white">Medical Notice:</strong> Information on this website is for general educational and healthcare navigation purposes only and does not replace individualized clinical diagnosis or medical treatment from a registered physician.
          </p>
          <p>
            <strong className="text-white">Privacy & NDPA:</strong> We adhere to the Nigeria Data Protection Act (NDPA). Patient communications submitted through our inquiry forms are handled securely and in strict professional confidence.
          </p>
        </div>

        {/* Bottom Bar with Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-200/70 gap-4">
          <p>© {new Date().getFullYear()} Ihenyen Medical Centre. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Hospital Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
