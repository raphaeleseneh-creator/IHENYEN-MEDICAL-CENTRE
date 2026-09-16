export interface HospitalInfo {
  name: string;
  tagline: string;
  headline: string;
  description: string;
  trustStatement: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    country: string;
    landmark: string;
    googleMapsUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    mainPhone: string;
    mainPhoneDisplay: string;
    emergencyPhone: string;
    emergencyPhoneDisplay: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    whatsappLink: string;
    email: string;
    billingEmail: string;
  };
  hours: {
    emergency: string;
    outpatient: string;
    pharmacy: string;
    laboratory: string;
    visitingHours: string;
  };
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  registration: {
    ministryOfHealthNumber?: string;
    cacRegistrationNumber?: string;
    nhiaAccreditationNumber?: string;
  };
}

export interface MedicalService {
  id: string;
  slug: string;
  title: string;
  category: string;
  iconName: string;
  shortDescription: string;
  overview: string;
  patientNeeds: string[];
  whatToExpect: string[];
  commonTreatments: string[];
  emergencyGuidance?: string;
  availableDoctorIds: string[];
  isVerified: boolean;
  featured?: boolean;
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  specialty: string;
  department: string;
  biography: string;
  schedule: string;
  availableDays: string[];
  languages: string[];
  imageUrl: string;
  isVerified: boolean;
}

export interface HmoProvider {
  id: string;
  name: string;
  tier: 'National' | 'State' | 'Private' | 'NHIA';
  coverageNotes: string;
  requiresPreAuthorization: boolean;
  isVerified: boolean;
}

export interface PatientTestimonial {
  id: string;
  patientInitials: string;
  serviceCategory: string;
  quote: string;
  date: string;
  isConsentApproved: boolean;
  label: string; // e.g. "[APPROVED PATIENT TESTIMONIAL]"
}

export interface HealthArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  contentMarkdown: string;
  category: string;
  author: string;
  authorQualifications: string;
  reviewDate: string;
  readingTimeMinutes: number;
  imageUrl: string;
  isVerified: boolean;
}

export interface TrustStat {
  id: string;
  label: string;
  value: string;
  description: string;
  isVerified: boolean; // Only verified stats will be rendered on the website
}

export interface AppointmentSubmission {
  id?: string;
  fullName: string;
  phone: string;
  email?: string;
  patientType: 'new' | 'returning';
  serviceId: string;
  preferredDate: string;
  preferredTimeSlot: 'morning' | 'afternoon' | 'evening';
  preferredContact: 'phone' | 'whatsapp' | 'email';
  additionalNote?: string;
  hasConsent: boolean;
  createdAt?: string;
  status?: 'pending' | 'confirmed';
}
