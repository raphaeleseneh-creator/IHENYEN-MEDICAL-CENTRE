import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Stethoscope, Users, Phone, Search, AlertCircle } from 'lucide-react';
import { SeoHead } from '../components/common/SeoHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <SeoHead
        title="Page Not Found - Ihenyen Medical Centre"
        description="The medical page you requested could not be found. Return to our homepage or explore our hospital services."
      />

      <div className="max-w-md w-full bg-white border border-[#d8e3ec] rounded-2xl p-8 shadow-sm text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#edf5fc] text-[#083b78] flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8 text-[#0f6bd9]" />
        </div>

        <div>
          <span className="text-xs font-bold text-[#0f6bd9] uppercase tracking-wider">Error 404</span>
          <h1 className="text-2xl font-extrabold text-[#083b78] font-heading mt-1">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#5f6f7f] mt-2">
            The page or clinical resource you were looking for might have been moved or is currently unavailable.
          </p>
        </div>

        <div className="pt-2 space-y-2 text-xs font-bold">
          <Link
            to="/"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#083b78] hover:bg-[#0f6bd9] text-white transition-colors shadow-2xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#edf5fc] hover:bg-[#d8e3ec] text-[#083b78] transition-colors"
          >
            <Stethoscope className="w-4 h-4 text-[#0f6bd9]" />
            <span>View Medical Services</span>
          </Link>

          <Link
            to="/emergency"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-[#c83b3b] border border-red-200 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Urgent Care Guidance</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
