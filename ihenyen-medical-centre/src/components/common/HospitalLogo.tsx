import React from 'react';
import { Link } from 'react-router-dom';

interface HospitalLogoProps {
  variant?: 'default' | 'white' | 'compact';
  className?: string;
}

export const HospitalLogo: React.FC<HospitalLogoProps> = ({
  variant = 'default',
  className = '',
}) => {
  const isWhite = variant === 'white';
  const isCompact = variant === 'compact';

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1476e8] rounded-lg p-1 transition-transform ${className}`}
      aria-label="Ihenyen Medical Centre - Return to Homepage"
      id="hospital-brand-logo"
    >
      {/* Brand Icon: Shield/Cross with Heart and Stethoscope Line */}
      <div className="relative flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#083b78] to-[#0f6bd9] p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <div className="w-full h-full bg-[#083b78] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0b7a75]/30 to-transparent pointer-events-none" />
          
          <svg
            className="w-7 h-7 text-white"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Medical Cross */}
            <path
              d="M18 6V30M6 18H30"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner Caring Heart Motif */}
            <path
              d="M18 13.5C16.8 11.5 13.5 11.5 12 13.5C10.5 15.5 11.5 18.5 18 23.5C24.5 18.5 25.5 15.5 24 13.5C22.5 11.5 19.2 11.5 18 13.5Z"
              fill="#1476E8"
              fillOpacity="0.9"
            />
            {/* Central Care Dot */}
            <circle cx="18" cy="17" r="2.2" fill="#0B7A75" />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark */}
      {!isCompact && (
        <div className="flex flex-col text-left">
          <span
            className={`font-heading font-extrabold tracking-tight leading-tight text-base md:text-lg transition-colors ${
              isWhite ? 'text-white' : 'text-[#083b78] group-hover:text-[#0f6bd9]'
            }`}
          >
            Ihenyen Medical Centre
          </span>
          <span
            className={`text-xs font-medium tracking-wide uppercase ${
              isWhite ? 'text-blue-200/80' : 'text-[#5f6f7f]'
            }`}
          >
            Benin City • Edo State
          </span>
        </div>
      )}
    </Link>
  );
};
