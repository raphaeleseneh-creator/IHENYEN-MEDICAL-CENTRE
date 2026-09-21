import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { HeroSection } from '../components/home/HeroSection';
import { QuickActionsSection } from '../components/home/QuickActionsSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { WhyChooseSection } from '../components/home/WhyChooseSection';
import { DoctorsSection } from '../components/home/DoctorsSection';
import { PatientStoriesSection } from '../components/home/PatientStoriesSection';
import { HmoSection } from '../components/home/HmoSection';
import { LocationHoursSection } from '../components/home/LocationHoursSection';
import { HealthResourcesSection } from '../components/home/HealthResourcesSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Dependable Medical Care in Benin City"
        description="Ihenyen Medical Centre offers general and specialist care, women’s health, dental care, diagnostics, and paediatric support in Benin City, Nigeria."
      />
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Quick Patient Actions */}
        <QuickActionsSection />

        {/* 3. Services Section */}
        <ServicesSection />

        {/* 4. Why Choose Ihenyen */}
        <WhyChooseSection />

        {/* 5. Doctors Section */}
        <DoctorsSection />

        {/* 6. Patient Stories */}
        <PatientStoriesSection />

        {/* 7. HMO & Payment Info */}
        <HmoSection />

        {/* 8. Location & Opening Hours */}
        <LocationHoursSection />

        {/* 9. Health Resources */}
        <HealthResourcesSection />

        {/* 10. Final Appointment Call-To-Action */}
        <FinalCtaSection />
      </main>
    </>
  );
};
