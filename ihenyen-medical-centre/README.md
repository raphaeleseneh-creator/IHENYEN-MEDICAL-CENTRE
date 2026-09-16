# Ihenyen Medical Centre — Website Verification & Launch Checklist

This document provides a pre-launch verification checklist for hospital administrators, medical directors, and web editors at **Ihenyen Medical Centre**, Benin City, Edo State.

---

## 1. Logo & Brand Identity Verification
- [x] **Brand Name Spelling:** Strictly verified as British English spelling: "Ihenyen Medical Centre".
- [x] **Redesigned Hospital Logo:** Uses the official visual mark with the dual green and blue cross crest, dark navy lettering, and medical star. No distortion or arbitrary recoloring.
- [x] **Brand Color Tokens:**
  - Deep Trust Navy: `#083b78`
  - Medical Blue: `#1476e8`
  - Action / Focus Blue: `#0f6bd9`
  - Care Teal: `#0b7a75`
  - Emergency Red: `#c83b3b`
  - Warm Canvas: `#fbf8f2`

---

## 2. Contact Information & Emergency Readiness
- [ ] **Physical Address Confirmation:** Confirm exact street name, quarter, and nearby landmark in Benin City in `/src/data/hospitalConfig.ts`.
- [ ] **24/7 Emergency Line:** Verify that `0800 911 0000` routes directly to the on-duty emergency triage nurse / medical officer.
- [ ] **Main Reception Phone:** Verify `+234 (0) 52 250 000`.
- [ ] **WhatsApp Business Support:** Verify WhatsApp click-to-chat direct link.
- [ ] **Emergency Bay Access:** Confirm ambulance ingress route and emergency entrance signage.

---

## 3. Medical Services & Clinical Capabilities
- [ ] **6 Initial Service Categories:**
  1. General Medical Care (Family medicine, health assessments)
  2. Emergency Care (24/7 acute trauma and stabilization)
  3. Diagnostic Services (Laboratory & Ultrasound)
  4. Maternity & Women’s Health (Antenatal, delivery, postnatal)
  5. Paediatric Care (Child health, vaccinations)
  6. Surgical Services (Minor & elective procedures)
- [ ] **Test Menu & Pricing:** Ensure specific pathology tests (e.g., lipid profile, full blood count, electrolytes) and scan schedules match the on-site lab capability.

---

## 4. Clinical Staff & Doctor Profiles
- [ ] **MDCN Licensure Verification:** Ensure each consulting physician's credentials, qualifications, and Medical and Dental Council of Nigeria (MDCN) registration are confirmed before publishing.
- [ ] **Weekly Roster Accuracy:** Verify consulting days and outpatient clinic hours for all doctors.
- [ ] **High-Resolution Photography:** Replace placeholder portraits with verified hospital photography following brand lighting standards.

---

## 5. Patient Testimonial Consent
- [x] **Privacy Compliance:** Patient names are anonymized to initials in accordance with health privacy best practices.
- [ ] **Written Consent:** Confirm that signed physical or electronic consent forms are archived for all patient quotes displayed on the website.

---

## 6. Insurance & HMO Verification
- [ ] **Accepted HMO Scheme Roster:** Confirm all contracted HMOs (Hygeia, Reliance, AXA Mansard, Leadway Health, Edo State Health Insurance Scheme) are active.
- [ ] **NHIA Accreditation Status:** Confirm National Health Insurance Authority provider code and accreditation tier.
- [ ] **Pre-Authorization Hotline:** Ensure the desk phone for HMO authorization desk is tested.

---

## 7. Performance & Nigerian Mobile Network Optimization
- [x] **Tailwind CSS 4 & Minimal JavaScript:** Fast first contentful paint (FCP) over 3G/4G connections.
- [x] **Touch Targets:** All primary buttons and action bars maintain ≥44px touch targets.
- [x] **Sticky Mobile Action Bar:** Rapid 1-tap phone, WhatsApp, directions, and appointment scheduling.
- [x] **Reduced Motion Support:** All CSS tilt and motion animations automatically degrade gracefully on touch devices or if the user enabled `prefers-reduced-motion`.

---

## 8. Data Configuration Source
All hospital data is centralized in `/src/data/hospitalConfig.ts`. To update phone numbers, schedules, doctors, or services, edit this single file.
