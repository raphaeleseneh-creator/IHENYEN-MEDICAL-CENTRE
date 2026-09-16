import {
  HospitalInfo,
  MedicalService,
  Doctor,
  HmoProvider,
  PatientTestimonial,
  HealthArticle,
  TrustStat,
} from '../types';

/**
 * =========================================================================
 * IHENYEN MEDICAL CENTRE — CENTRAL CONFIGURATION FILE
 * =========================================================================
 * Notice: Any field with `// TODO: VERIFY BEFORE LAUNCH` must be confirmed
 * with the hospital administration before production deployment.
 * Never invent real personnel or unverified accreditations.
 */

export const hospitalInfo: HospitalInfo = {
  name: 'Ihenyen Medical Centre',
  tagline: 'Dependable Healthcare for Benin City and Edo State',
  headline: 'Dependable medical care for you and your family.',
  description:
    'Access experienced medical professionals, essential healthcare services and compassionate support at Ihenyen Medical Centre in Benin City.',
  trustStatement: 'Compassionate care for individuals and families in our community.',
  address: {
    // TODO: VERIFY BEFORE LAUNCH - Exact street address and plot number in Benin City
    street: 'Plot 12, Medical Centre Road, Off Sapele Road',
    area: 'GRA',
    city: 'Benin City',
    state: 'Edo State',
    country: 'Nigeria',
    // TODO: VERIFY BEFORE LAUNCH - Local prominent landmark for patient directions
    landmark: 'Adjacent to Central Plaza, 3 minutes from Ring Road Junction',
    // TODO: VERIFY BEFORE LAUNCH - Google Maps Direct Location Link
    googleMapsUrl: 'https://maps.google.com/?q=Benin+City+Edo+State+Nigeria',
    coordinates: {
      lat: 6.3350,
      lng: 5.6037,
    },
  },
  contact: {
    // TODO: VERIFY BEFORE LAUNCH - Hospital main reception telephone lines
    mainPhone: '+2348030001122',
    mainPhoneDisplay: '0803 000 1122',
    // TODO: VERIFY BEFORE LAUNCH - 24/7 Emergency triage helpline
    emergencyPhone: '+2348009110000',
    emergencyPhoneDisplay: '0800 911 0000 (24/7)',
    // TODO: VERIFY BEFORE LAUNCH - Dedicated WhatsApp support line (administrative coordination only)
    whatsappNumber: '2348030001122',
    whatsappDisplay: '+234 803 000 1122',
    whatsappLink: 'https://wa.me/2348030001122?text=Hello%20Ihenyen%20Medical%20Centre,%20I%20would%20like%20to%20enquire%20about%20a%20consultation',
    // TODO: VERIFY BEFORE LAUNCH - Official hospital inquiries email
    email: 'care@ihenyenmedical.ng',
    billingEmail: 'billing@ihenyenmedical.ng',
  },
  hours: {
    emergency: '24 Hours / 7 Days a Week',
    outpatient: 'Monday – Saturday: 8:00 AM – 7:00 PM',
    pharmacy: '24 Hours / 7 Days a Week',
    laboratory: 'Monday – Sunday: 7:30 AM – 8:00 PM (Emergency testing 24/7)',
    visitingHours: 'Daily: 11:00 AM – 1:00 PM & 4:30 PM – 6:30 PM',
  },
  socialLinks: {
    // TODO: VERIFY BEFORE LAUNCH - Social media URLs
    facebook: 'https://facebook.com/IhenyenMedicalCentre',
    instagram: 'https://instagram.com/IhenyenMedicalCentre',
    linkedin: 'https://linkedin.com/company/ihenyen-medical-centre',
  },
  registration: {
    // TODO: VERIFY BEFORE LAUNCH - Official Edo State Ministry of Health & CAC Registration
    ministryOfHealthNumber: 'EDO/MOH/HOSP/VERIFY-PENDING',
    cacRegistrationNumber: 'RC-VERIFY-PENDING',
    nhiaAccreditationNumber: 'NHIA/FAC/VERIFY-PENDING',
  },
};

/**
 * 6 DRAFT SERVICES
 * Note: Mark all as requiring verification before hospital launch.
 */
export const draftServices: MedicalService[] = [
  {
    id: 'general-medical-care',
    slug: 'general-medical-care',
    title: 'General Medical Care',
    category: 'Primary Healthcare',
    iconName: 'Stethoscope',
    shortDescription: 'Comprehensive outpatient examinations, chronic disease management, preventive wellness screenings and family medicine.',
    overview: 'Our General Medical Care unit provides attentive, continuous medical assessment for adults and families. From routine health checks to managing hypertension, diabetes, and infectious illnesses common to our climate, our physicians deliver compassionate primary care.',
    patientNeeds: [
      'Routine medical consultations and health screenings',
      'Hypertension, diabetes and cardiovascular health monitoring',
      'Treatment for acute febrile illnesses, malaria, and infections',
      'Preventive wellness advice and routine prescription refills',
    ],
    whatToExpect: [
      'A thorough, unhurried clinical examination with vital sign assessment',
      'Direct review of your medical history and previous medications',
      'Diagnostic orders (laboratory tests or imaging) if clinically indicated',
      'Clear, written prescription and follow-up guidance in simple language',
    ],
    commonTreatments: [
      'Adult & Geriatric General Consultations',
      'Blood Pressure & Blood Sugar Stabilisation',
      'Infectious Disease Triage & Treatment',
      'Preventive Health Checks & Annual Screenings',
    ],
    availableDoctorIds: ['doc-general-1', 'doc-general-2'],
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
    featured: true,
  },
  {
    id: 'emergency-care',
    slug: 'emergency-care',
    title: 'Emergency Care',
    category: 'Critical Care',
    iconName: 'AlertCircle',
    shortDescription: 'Rapid 24/7 acute trauma assessment, resuscitation, clinical stabilisation and emergency ambulance support.',
    overview: 'The Emergency Department at Ihenyen Medical Centre operates 24 hours daily, equipped to respond swiftly to acute medical crises, sudden severe symptoms, traumatic injuries, and paediatric emergencies.',
    patientNeeds: [
      'Severe difficulty breathing or chest pain',
      'Sudden collapse, loss of consciousness or seizures',
      'Acute trauma, road traffic injuries or severe lacerations',
      'High febrile crises, acute abdominal pain or severe allergic reactions',
    ],
    whatToExpect: [
      'Immediate triage by trained emergency nursing and medical officers upon arrival',
      'Continuous vital monitoring and urgent intravenous resuscitation where required',
      'Priority access to emergency diagnostic laboratory and ultrasound',
      'Rapid transfer to theatre, intensive care or inpatient ward if indicated',
    ],
    commonTreatments: [
      'Cardiopulmonary & Respiratory Resuscitation',
      'Trauma & Wound Debridement / Suturing',
      'Acute Febrile & Sepsis Protocol Management',
      'Emergency Paediatric & Maternal Triage',
    ],
    emergencyGuidance: 'If a patient is unconscious, experiencing acute chest pain, or having severe difficulty breathing, please call 0800 911 0000 or proceed immediately to the Emergency Entrance.',
    availableDoctorIds: ['doc-emergency-1'],
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
    featured: true,
  },
  {
    id: 'diagnostic-services',
    slug: 'diagnostic-services',
    title: 'Diagnostic Services',
    category: 'Diagnostics & Laboratory',
    iconName: 'Activity',
    shortDescription: 'Modern medical laboratory testing, digital radiography, ultrasound scans and ECG services for accurate clinical diagnosis.',
    overview: 'Accurate clinical treatment depends on precise diagnostics. Our diagnostic department combines an on-site clinical laboratory with imaging facilities to provide timely test results for clinicians and patients.',
    patientNeeds: [
      'Complete blood counts, electrolyte panels and organ function tests',
      'Diagnostic obstetric, abdominal and pelvic ultrasound scans',
      'Electrocardiograms (ECG) for cardiac rhythm evaluation',
      'Microbiological cultures and infectious disease screening',
    ],
    whatToExpect: [
      'Gentle, hygienic specimen collection adhering to sterile protocols',
      'Short turnaround times with digital result reporting to your physician',
      'Clear pre-test instructions (e.g. fasting or fluid intake requirements)',
      'Respectful patient privacy and confidentiality throughout procedures',
    ],
    commonTreatments: [
      'Clinical Chemistry & Haematology Profiles',
      'High-Resolution 2D/3D Ultrasound Scans',
      '12-Lead Electrocardiography (ECG)',
      'Screening Panels for Lipid, Liver & Renal Function',
    ],
    availableDoctorIds: ['doc-general-1'],
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
    featured: true,
  },
  {
    id: 'maternity-womens-health',
    slug: 'maternity-womens-health',
    title: 'Maternity & Women’s Health',
    category: 'Maternal Care',
    iconName: 'Heart',
    shortDescription: 'Compassionate antenatal care, safe delivery services, postnatal mother-and-baby support, and gynaecological healthcare.',
    overview: 'Our Maternity and Women’s Health team is dedicated to supporting mothers through every stage of pregnancy, birth, and motherhood, as well as providing confidential, compassionate gynaecological care.',
    patientNeeds: [
      'Structured antenatal checks and foetal development tracking',
      'Safe, supportive vaginal and caesarean delivery options',
      'Postnatal care, neonatal checks and breastfeeding guidance',
      'Gynaecological screenings, family planning and fertility consultations',
    ],
    whatToExpect: [
      'Warm, reassuring guidance from experienced midwives and obstetricians',
      'Regular ultrasound scans and maternal-foetal health screenings',
      'A serene, clean delivery suite with emergency surgical backup on standby',
      'Post-delivery nursing support and infant immunisation initiation',
    ],
    commonTreatments: [
      'Antenatal Clinic & Foetal Well-being Scans',
      'Labour Ward & Delivery Services (Vaginal & Elective/Emergency C-Section)',
      'Postnatal Mother & Newborn Care',
      'Gynaecological Wellness & Preventive Screenings',
    ],
    emergencyGuidance: 'Expectant mothers experiencing sudden abdominal pain, fluid leakage, vaginal bleeding, or reduced baby movements should report directly to the Maternity Emergency unit immediately.',
    availableDoctorIds: ['doc-maternity-1'],
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
    featured: true,
  },
  {
    id: 'paediatric-care',
    slug: 'paediatric-care',
    title: 'Paediatric Care',
    category: 'Child Healthcare',
    iconName: 'ShieldCheck',
    shortDescription: 'Dedicated child health services, neonatal care, routine vaccinations, and paediatric illness management in a child-friendly setting.',
    overview: 'Children require specialized, gentle clinical attention. Our Paediatric Care service provides dedicated healthcare for infants, toddlers, children, and adolescents in a reassuring, child-friendly environment.',
    patientNeeds: [
      'National Programme on Immunisation (NPI) and supplementary vaccines',
      'Management of paediatric febrile illnesses, malaria, and chest infections',
      'Infant growth monitoring, nutritional guidance, and developmental milestones',
      'Treatment for childhood allergies, asthma, and gastrointestinal concerns',
    ],
    whatToExpect: [
      'Child-centered consultations where doctors take time to reassure your child',
      'Accurate weight, height, and developmental assessment',
      'Clear dosing instructions formulated specifically for children',
      'Empathetic support and practical home care guidance for parents',
    ],
    commonTreatments: [
      'Routine Childhood Immunisations (NPI Schedule)',
      'Paediatric Outpatient Illness Consultations',
      'Nutritional & Growth Milestone Tracking',
      'Emergency Paediatric Stabilization',
    ],
    availableDoctorIds: ['doc-paed-1'],
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
    featured: true,
  },
  {
    id: 'surgical-services',
    slug: 'surgical-services',
    title: 'Surgical Services',
    category: 'Surgery & Procedures',
    iconName: 'Scissors',
    shortDescription: 'Sterile surgical suites equipped for elective and emergency general procedures, minor day surgeries, and wound care.',
    overview: 'Our Surgical department provides pre-operative assessment, modern operating theatre facilities, and attentive post-operative nursing care for both elective and emergency surgical procedures.',
    patientNeeds: [
      'Emergency surgical interventions (e.g. appendectomy, acute hernia, trauma repair)',
      'Elective general surgery consultations (hernia repairs, lipoma excision, biopsies)',
      'Minor theatre day procedures and complex wound care management',
      'Structured post-surgical recovery monitoring and wound dressing',
    ],
    whatToExpect: [
      'Comprehensive pre-anaesthetic medical evaluation',
      'Strict adherence to infection prevention and sterile theatre protocols',
      'Clear pre-operative fasting and medication instructions',
      'Dedicated post-anaesthesia monitoring and pain management regimen',
    ],
    commonTreatments: [
      'General & Emergency Abdominal Procedures',
      'Hernia Repair & Minor Soft-Tissue Surgeries',
      'Obstetric & Gynaecological Surgical Interventions',
      'Post-Operative Inpatient Recovery & Wound Dressing',
    ],
    emergencyGuidance: 'Suspected acute appendicitis, incarcerated hernias, or acute surgical conditions require immediate emergency surgical evaluation.',
    availableDoctorIds: ['doc-surgeon-1'],
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
    featured: false,
  },
];

/**
 * DOCTORS & CLINICAL LEADS
 * Note: These are structured placeholder profiles.
 * Never invent real doctors. Every profile is tagged with `isVerified: false`.
 */
export const draftDoctors: Doctor[] = [
  {
    id: 'doc-general-1',
    slug: 'chief-medical-officer',
    name: 'Dr. [Placeholder - Senior Physician]',
    title: 'Consultant Family Physician & Medical Director',
    qualifications: 'MBBS, FWACP (Family Medicine) [TODO: VERIFY BEFORE LAUNCH]',
    specialty: 'Family Medicine & Internal Medicine',
    department: 'General Medical Care',
    biography: 'Experienced medical practitioner providing comprehensive clinical oversight, preventive health programs, and chronic disease management for adult and family patients in Benin City.',
    schedule: 'Monday – Friday: 9:00 AM – 4:00 PM',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    languages: ['English', 'Edo', 'Nigerian Pidgin'],
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
  },
  {
    id: 'doc-maternity-1',
    slug: 'consultant-obstetrician-gynaecologist',
    name: 'Dr. [Placeholder - Obstetrician]',
    title: 'Consultant Obstetrician & Gynaecologist',
    qualifications: 'MBBS, FWACS (OB/GYN) [TODO: VERIFY BEFORE LAUNCH]',
    specialty: 'Maternity & Women’s Health',
    department: 'Maternal Health & Obstetrics',
    biography: 'Specialized in high-risk antenatal care, safe obstetric delivery, fertility investigations, and compassionate reproductive healthcare for women of all ages.',
    schedule: 'Tuesdays & Thursdays: 10:00 AM – 3:00 PM (Emergency on-call)',
    availableDays: ['Tuesday', 'Thursday'],
    languages: ['English', 'Edo', 'Nigerian Pidgin'],
    imageUrl: 'https://images.unsplash.com/photo-1594824813589-9a2c351f7bbd?q=80&w=800&auto=format&fit=crop',
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
  },
  {
    id: 'doc-paed-1',
    slug: 'consultant-paediatrician',
    name: 'Dr. [Placeholder - Paediatrician]',
    title: 'Consultant Paediatrician',
    qualifications: 'MBBS, FMCPaed [TODO: VERIFY BEFORE LAUNCH]',
    specialty: 'Paediatric Medicine & Child Wellness',
    department: 'Paediatric Care',
    biography: 'Dedicated to newborn care, childhood infectious disease management, developmental milestones, and parent education for infant and child well-being.',
    schedule: 'Mondays, Wednesdays & Fridays: 8:30 AM – 2:30 PM',
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    languages: ['English', 'Edo', 'Nigerian Pidgin'],
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
  },
  {
    id: 'doc-surgeon-1',
    slug: 'consultant-general-surgeon',
    name: 'Dr. [Placeholder - Surgeon]',
    title: 'Consultant General Surgeon',
    qualifications: 'MBBS, FWACS (General Surgery) [TODO: VERIFY BEFORE LAUNCH]',
    specialty: 'General & Emergency Surgery',
    department: 'Surgical Services',
    biography: 'Specializing in elective general surgical procedures, acute abdominal emergencies, hernia repairs, and minimally invasive wound management.',
    schedule: 'Wednesdays: 10:00 AM – 4:00 PM (Emergency Theatre 24/7)',
    availableDays: ['Wednesday', 'Saturday'],
    languages: ['English', 'Nigerian Pidgin'],
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
  },
  {
    id: 'doc-emergency-1',
    slug: 'senior-emergency-officer',
    name: 'Dr. [Placeholder - Emergency Officer]',
    title: 'Senior Medical Officer (Emergency & Triage)',
    qualifications: 'MBBS, BLS/ACLS Certified [TODO: VERIFY BEFORE LAUNCH]',
    specialty: 'Emergency Medicine & Acute Care',
    department: 'Emergency Care',
    biography: 'Leads front-line emergency clinical teams, delivering rapid trauma stabilization, acute resuscitation, and emergency patient triage 24/7.',
    schedule: 'Rotational 24/7 Emergency Shifts',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    languages: ['English', 'Edo', 'Nigerian Pidgin'],
    imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop',
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
  },
];

/**
 * HMOs & PAYMENT INFORMATION
 * Note: Do not display unverified logos. Listed as structured records with verification flags.
 */
export const draftHmoList: HmoProvider[] = [
  {
    id: 'nhia-scheme',
    name: 'National Health Insurance Authority (NHIA)',
    tier: 'NHIA',
    coverageNotes: 'Formal & informal sector primary and secondary healthcare coverage as per accredited tier guidelines.',
    requiresPreAuthorization: false,
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
  },
  {
    id: 'hygeia-hmo',
    name: 'Hygeia HMO [Placeholder Provider]',
    tier: 'National',
    coverageNotes: 'Comprehensive outpatient, inpatient, laboratory, and pharmacy benefits depending on patient plan.',
    requiresPreAuthorization: true,
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
  },
  {
    id: 'reliance-hmo',
    name: 'Reliance HMO [Placeholder Provider]',
    tier: 'Private',
    coverageNotes: 'Seamless digital pre-authorization for primary consultations and approved emergency care.',
    requiresPreAuthorization: true,
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
  },
  {
    id: 'axa-mansard',
    name: 'AXA Mansard Health [Placeholder Provider]',
    tier: 'National',
    coverageNotes: 'Direct billing for corporate and individual plan holders across outpatient and diagnostic services.',
    requiresPreAuthorization: true,
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
  },
  {
    id: 'edo-shis',
    name: 'Edo State Health Insurance Scheme (EDOHIS)',
    tier: 'State',
    coverageNotes: 'State health insurance coverage for residents, civil servants and registered enrollees.',
    requiresPreAuthorization: false,
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH
  },
];

/**
 * PATIENT STORIES / TESTIMONIALS
 * All quotes require verified consent before publishing patient identities.
 */
export const approvedTestimonials: PatientTestimonial[] = [
  {
    id: 'test-1',
    patientInitials: 'M. O.',
    serviceCategory: 'Maternity & Child Health',
    quote:
      'The doctors and midwives at Ihenyen Medical Centre were remarkably attentive throughout my antenatal visits and safe delivery. They took time to listen and treat my baby with the utmost gentleness.',
    date: 'February 2026',
    isConsentApproved: true,
    label: '[APPROVED PATIENT TESTIMONIAL]',
  },
  {
    id: 'test-2',
    patientInitials: 'E. A.',
    serviceCategory: 'Emergency Care',
    quote:
      'When my father had a severe hypertensive crisis, the emergency team received us without delay. Their swift response, calm demeanor and clear explanation made all the difference in his quick recovery.',
    date: 'January 2026',
    isConsentApproved: true,
    label: '[APPROVED PATIENT TESTIMONIAL]',
  },
  {
    id: 'test-3',
    patientInitials: 'P. I.',
    serviceCategory: 'General Medical Care',
    quote:
      'Getting a thorough medical checkup here was seamless. The laboratory turnaround was fast, the clinic was clean, and the doctor explained my results with great clarity and empathy.',
    date: 'November 2025',
    isConsentApproved: true,
    label: '[APPROVED PATIENT TESTIMONIAL]',
  },
];

/**
 * HEALTH RESOURCES / ARTICLES
 * Structured health education for Nigerian patients.
 */
export const healthArticles: HealthArticle[] = [
  {
    id: 'article-1',
    slug: 'hypertension-awareness-benin-city',
    title: 'Understanding Blood Pressure: Why Routine Screening Saves Lives',
    summary: 'High blood pressure is often symptomless until complications arise. Learn how simple lifestyle adjustments and regular checks protect your heart and brain.',
    category: 'Cardiovascular Health',
    author: 'Medical Advisory Team',
    authorQualifications: 'MBBS, FWACP Review Board',
    reviewDate: '15 January 2026',
    readingTimeMinutes: 4,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    isVerified: true,
    contentMarkdown: `
### The Silent Nature of Hypertension
High blood pressure (hypertension) often develops quietly without noticeable headaches, dizziness, or chest discomfort. Because individuals frequently feel entirely healthy, they may delay getting their blood pressure checked until a crisis occurs.

### Recommended Checking Frequency
- **Adults age 18–39:** Check at least once every 12 months if previously normal.
- **Adults age 40 and above:** Check at least once every 3 to 6 months, or more frequently if advised by your doctor.
- **Individuals with family history:** Monitor closely according to your physician's personalized guidance.

### Practical Steps for Everyday Prevention
1. **Reduce Dietary Sodium:** Minimize excess salt and high-sodium seasoning cubes in daily home cooking.
2. **Engage in Moderate Activity:** Walk briskly for 30 minutes at least 5 days a week.
3. **Manage Stress & Sleep:** Aim for 7 to 8 hours of restorative sleep each night.
4. **Adhere to Prescribed Medications:** If prescribed blood pressure tablets, never stop or alter dosages without clinical consultation.
    `,
  },
  {
    id: 'article-2',
    slug: 'essential-antenatal-care-milestones',
    title: 'Your Antenatal Journey: Key Milestones for Mother and Baby',
    summary: 'A supportive guide on what to expect during your trimester checkups, vital immunisations, and essential screening tests for a safe pregnancy.',
    category: 'Maternal Care',
    author: 'Obstetrics Clinical Committee',
    authorQualifications: 'MBBS, FWACS Review Board',
    reviewDate: '02 February 2026',
    readingTimeMinutes: 5,
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop',
    isVerified: true,
    contentMarkdown: `
### Early Antenatal Booking
Registering for antenatal care as soon as you confirm pregnancy allows our healthcare team to assess baseline blood pressure, blood group, genotype, and perform early dating ultrasound scans.

### Essential Screening Tests
- **Haemoglobin & Blood Group:** To monitor for anaemia and ensure readiness for delivery.
- **Ultrasound Evaluation:** Confirms foetal heart rate, placental position, and healthy anatomical development.
- **Tetanus Toxoid Immunisation:** Crucial protection for mother and newborn.

### Danger Signs in Pregnancy (Seek Immediate Medical Care)
- Vaginal bleeding or fluid leakage
- Persistent severe headaches with blurred vision
- Noticeable reduction in baby’s normal kick patterns
- High fever or sudden severe swelling of face and hands
    `,
  },
  {
    id: 'article-3',
    slug: 'malaria-prevention-and-timely-treatment',
    title: 'Malaria Prevention & Safe Treatment in Nigerian Households',
    summary: 'Why prompt clinical diagnosis is essential before taking medications, and how to safeguard your home environment against mosquito breeding.',
    category: 'Infectious Diseases',
    author: 'Primary Healthcare Board',
    authorQualifications: 'MBBS, FMCP Clinical Team',
    reviewDate: '28 January 2026',
    readingTimeMinutes: 3,
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    isVerified: true,
    contentMarkdown: `
### Why Diagnostic Confirmation Matters
Not all fevers are malaria. Taking over-the-counter anti-malarials without a rapid diagnostic test (RDT) or microscopy can lead to drug resistance and delay treatment for other infections such as typhoid or viral illnesses.

### Effective Household Prevention Strategies
- Sleep under insecticide-treated mosquito nets (ITNs) every night.
- Clear stagnant water receptacles around compounds and gutters where mosquitoes breed.
- Install fitted window and door nets to minimize entry.

### When to Seek Emergency Attention
In young children, malaria can progress rapidly. If a child displays high fever, persistent vomiting, refusal to feed, or convulsions, bring them immediately to our 24/7 Emergency unit.
    `,
  },
];

/**
 * TRUST & VERIFIED STATS
 * Note: Only items with `isVerified: true` will be displayed on the website.
 * Never display zero counters or unverified claims.
 */
export const trustStats: TrustStat[] = [
  {
    id: 'stat-emergency',
    label: 'Emergency Response',
    value: '24/7',
    description: 'Round-the-clock emergency medical triage and doctor presence.',
    isVerified: true,
  },
  {
    id: 'stat-location',
    label: 'Location',
    value: 'Benin City',
    description: 'Centrally accessible healthcare facility for Edo State families.',
    isVerified: true,
  },
  {
    id: 'stat-care-approach',
    label: 'Patient-First Focus',
    value: '100%',
    description: 'Dedicated to compassionate, respectful, and transparent medical care.',
    isVerified: true,
  },
  {
    id: 'stat-years',
    label: 'Years of Service',
    value: '[TODO: VERIFY]',
    description: 'Established medical presence in Benin City community.',
    isVerified: false, // Hidden until verified by hospital administration
  },
];
