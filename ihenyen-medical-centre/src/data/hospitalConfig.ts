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
  tagline: 'Quality Healthcare You Can Trust',
  headline: 'Quality healthcare you can trust in Benin City.',
  description:
    'Access general and specialist care in a serene, patient-friendly environment at Ihenyen Medical Centre.',
  trustStatement: 'Caring for life with compassion, clarity, and continuous patient-centred care.',
  address: {
    street: '4 Jemide Drive',
    area: 'Off Goodwill Street',
    city: 'Benin City',
    state: 'Edo State',
    country: 'Nigeria',
    landmark: 'Off Goodwill Street',
    googleMapsUrl: 'https://maps.google.com/?q=4+Jemide+Drive+Off+Goodwill+Street+Benin+City+Edo+State',
    coordinates: {
      lat: 6.3350,
      lng: 5.6037,
    },
  },
  contact: {
    mainPhone: '+2348103280158',
    mainPhoneDisplay: '0810 328 0158',
    secondaryPhone: '+2348155098612',
    secondaryPhoneDisplay: '0815 509 8612',
    emergencyPhone: '+2348103280158',
    emergencyPhoneDisplay: '0810 328 0158',
    whatsappNumber: '2348103280158',
    whatsappDisplay: '+234 810 328 0158',
    whatsappLink: 'https://wa.me/2348103280158?text=Hello%20Ihenyen%20Medical%20Centre,%20I%20would%20like%20to%20enquire%20about%20a%20consultation',
    email: 'info@ihenyenmedicalcentre.com',
    billingEmail: 'info@ihenyenmedicalcentre.com',
  },
  hours: {
    emergency: 'Call ahead for urgent care guidance',
    outpatient: 'Please call reception to confirm today’s clinic hours',
    pharmacy: 'Please call reception to confirm availability',
    laboratory: 'Please call reception to confirm test availability',
    visitingHours: 'Please call reception before visiting an admitted patient',
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/ihenyenmedicalcentre',
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
    isVerified: true,
    featured: true,
  },
  {
    id: 'emergency-care',
    slug: 'emergency-care',
    title: 'Emergency Care',
    category: 'Critical Care',
    iconName: 'AlertCircle',
    shortDescription: 'Urgent clinical assessment and care coordination for sudden severe symptoms and injuries.',
    overview: 'The urgent care team at Ihenyen Medical Centre supports patients with acute medical concerns, sudden severe symptoms, injuries, and timely escalation when immediate specialist care is needed.',
    patientNeeds: [
      'Severe difficulty breathing or chest pain',
      'Sudden collapse, loss of consciousness or seizures',
      'Acute trauma, road traffic injuries or severe lacerations',
      'High febrile crises, acute abdominal pain or severe allergic reactions',
    ],
    whatToExpect: [
      'Immediate triage by trained emergency nursing and medical officers upon arrival',
      'Continuous vital monitoring and urgent intravenous resuscitation where required',
      'Timely diagnostic support when clinically indicated',
      'Clear next-step guidance from the clinical team',
    ],
    commonTreatments: [
      'Cardiopulmonary & Respiratory Resuscitation',
      'Trauma & Wound Debridement / Suturing',
      'Acute Febrile & Sepsis Protocol Management',
      'Emergency Paediatric & Maternal Triage',
    ],
    emergencyGuidance: 'If a patient is unconscious, experiencing acute chest pain, or having severe difficulty breathing, call reception immediately or go to the nearest emergency facility.',
    availableDoctorIds: ['doc-emergency-1'],
    isVerified: false, // TODO: VERIFY BEFORE LAUNCH - operating hours and emergency scope
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
    shortDescription: 'Women’s health support, preventive screening education, antenatal guidance, and gynaecological care.',
    overview: 'Our Women’s Health team supports patients with compassionate guidance around menstrual health, breast health, cervical cancer prevention, antenatal concerns, and confidential gynaecological care.',
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
    isVerified: true,
    featured: true,
  },
  {
    id: 'dental-care',
    slug: 'dental-care',
    title: 'Dental Care',
    category: 'Oral Health',
    iconName: 'Smile',
    shortDescription: 'Professional dental care for oral health checks, tooth concerns, and preventive hygiene guidance.',
    overview: 'Ihenyen Medical Centre promotes professional dental care as part of whole-person health, helping patients address oral discomfort, preventive hygiene, and timely dental review.',
    patientNeeds: [
      'Toothache, gum discomfort, or oral swelling',
      'Routine oral health checks and preventive guidance',
      'Dental hygiene advice for adults and families',
      'Referral guidance for complex dental procedures when needed',
    ],
    whatToExpect: [
      'A respectful oral health review with clear explanation',
      'Guidance on next steps and preventive hygiene',
      'Referral or follow-up advice when specialist dental care is required',
      'Patient-friendly support for nervous or first-time dental visitors',
    ],
    commonTreatments: [
      'Dental Consultation',
      'Oral Health Review',
      'Preventive Dental Hygiene Guidance',
      'Dental Referral Coordination',
    ],
    availableDoctorIds: [],
    isVerified: true,
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
    slug: 'when-to-take-headaches-seriously',
    title: 'When Should You Take a Headache Seriously?',
    summary: 'Most headaches are not dangerous, but sudden, severe, or repeated headaches deserve medical attention.',
    category: 'General Health',
    author: 'Ihenyen Medical Centre',
    authorQualifications: 'Patient Education',
    reviewDate: 'Instagram education series',
    readingTimeMinutes: 4,
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop',
    isVerified: true,
    contentMarkdown: `
### Headaches Need Context
A headache can come from stress, poor sleep, dehydration, eye strain, infection, high blood pressure, or other medical causes. The safest step is to pay attention to the pattern and severity.

### Warning Signs to Discuss With a Clinician
- A sudden, severe headache that feels unusual for you
- Headache with fever, neck stiffness, fainting, confusion, weakness, or vision changes
- Repeated headaches that interrupt work, school, sleep, or daily routine
- Headache after injury or with very high blood pressure readings

### What You Can Do
Drink water, rest in a quiet place, avoid self-medicating repeatedly, and speak with a healthcare professional if symptoms persist or feel severe.
    `,
  },
  {
    id: 'article-2',
    slug: 'hydration-and-urine-colour',
    title: 'Hydration Check: What Your Urine Colour May Be Telling You',
    summary: 'A simple daily hydration check can help you notice when your body may need more fluids or medical review.',
    category: 'Preventive Care',
    author: 'Ihenyen Medical Centre',
    authorQualifications: 'Patient Education',
    reviewDate: 'Instagram education series',
    readingTimeMinutes: 3,
    imageUrl: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=800&auto=format&fit=crop',
    isVerified: true,
    contentMarkdown: `
### Why Hydration Matters
Your body needs water to support circulation, digestion, temperature control, and kidney function. Dark urine can sometimes be a sign that you need more fluids.

### Simple Everyday Habits
- Drink water regularly through the day, especially in hot weather
- Increase fluid intake after sweating, fever, vomiting, or diarrhoea
- Pay attention to dizziness, weakness, dry mouth, or reduced urination
- Seek medical advice if dark urine persists or comes with pain, fever, or swelling

### Important Note
Urine colour is only one clue. Medicines, vitamins, foods, and illness can also affect colour, so persistent changes should be discussed with a clinician.
    `,
  },
  {
    id: 'article-3',
    slug: 'women-health-checks-to-prioritise',
    title: 'Women’s Health Checks Worth Prioritising',
    summary: 'Menstrual health, breast awareness, and cervical cancer prevention are important parts of routine women’s healthcare.',
    category: 'Women’s Health',
    author: 'Ihenyen Medical Centre',
    authorQualifications: 'Patient Education',
    reviewDate: 'Instagram education series',
    readingTimeMinutes: 4,
    imageUrl: 'https://images.unsplash.com/photo-1576765608622-067973a79f53?q=80&w=800&auto=format&fit=crop',
    isVerified: true,
    contentMarkdown: `
### Routine Care Matters
Women’s health is not only for pregnancy. Regular conversations with a clinician can help with menstrual changes, breast concerns, cervical cancer prevention, infections, and general wellbeing.

### Topics to Discuss
- Painful, heavy, irregular, or missed periods
- Breast lumps, discharge, skin changes, or persistent pain
- Cervical cancer prevention and screening options
- Pregnancy planning, contraception, infections, or pelvic pain

### When to Book a Review
Book a consultation when symptoms are new, recurring, worsening, or affecting daily life. Early review often makes treatment simpler and less stressful.
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
    id: 'stat-care-scope',
    label: 'Care Scope',
    value: 'General + Specialist',
    description: 'General and specialist care promoted by the hospital.',
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
