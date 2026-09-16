import React, { useRef, useState, useCallback, useEffect } from 'react';

interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
  borderReveal?: boolean;
  id?: string;
  onClick?: () => void;
  tabIndex?: number;
  role?: string;
  ariaLabel?: string;
}

export const PremiumCard: React.FC<PremiumCardProps> = ({
  children,
  className = '',
  enableTilt = false,
  borderReveal = false,
  id,
  onClick,
  tabIndex,
  role,
  ariaLabel,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    // Detect reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', motionListener);

    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    return () => {
      motionQuery.removeEventListener('change', motionListener);
    };
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!enableTilt || prefersReducedMotion || isTouchDevice || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Max 2.5 degrees tilt
      const rotateX = ((y - centerY) / centerY) * -2.2;
      const rotateY = ((x - centerX) / centerX) * 2.2;

      window.requestAnimationFrame(() => {
        setTransformStyle(
          `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`
        );
      });
    },
    [enableTilt, prefersReducedMotion, isTouchDevice]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (enableTilt && !prefersReducedMotion && !isTouchDevice) {
      window.requestAnimationFrame(() => {
        setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
      });
    }
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={tabIndex}
      role={role}
      aria-label={ariaLabel}
      style={{
        transform: enableTilt && isHovered && !prefersReducedMotion && !isTouchDevice ? transformStyle : undefined,
        transition: isHovered
          ? 'transform 200ms ease-out, box-shadow 400ms cubic-bezier(0.22, 1, 0.36, 1), border-color 400ms ease'
          : 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 450ms cubic-bezier(0.22, 1, 0.36, 1), border-color 450ms ease',
      }}
      className={`hospital-card bg-white border border-[#D8E3EC] rounded-[16px] p-6 text-[#10243e] relative ${
        borderReveal ? 'hospital-card-border-reveal' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
