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
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1476e8] rounded-xl transition-transform hover:scale-[1.02] ${
        isWhite ? 'bg-white shadow-sm' : ''
      } ${className}`}
      aria-label="Ihenyen Medical Centre - Return to Homepage"
      id="hospital-brand-logo"
    >
      <img
        src={`${import.meta.env.BASE_URL}images/ihenyen-medical-centre-logo.png`}
        alt="Ihenyen Medical Centre"
        width={1692}
        height={930}
        fetchPriority="high"
        className={`block object-cover object-center ${
          isCompact
            ? 'h-12 w-20 rounded-lg'
            : 'h-[58px] w-[190px] md:h-[66px] md:w-[220px] rounded-xl'
        }`}
      />
    </Link>
  );
};
