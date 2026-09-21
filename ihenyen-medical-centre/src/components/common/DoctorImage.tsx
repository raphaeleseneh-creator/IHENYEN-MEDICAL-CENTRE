import React, { useState } from 'react';
import { UserRound } from 'lucide-react';

interface DoctorImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export const DoctorImage: React.FC<DoctorImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={`${alt} — photograph unavailable`}
        className={`flex items-center justify-center bg-[#edf5fc] text-[#5f6f7f] ${className}`}
      >
        <UserRound className="h-1/3 w-1/3" aria-hidden="true" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={800}
      height={1000}
      loading={loading}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
