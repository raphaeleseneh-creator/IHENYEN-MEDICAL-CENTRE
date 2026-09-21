# Ihenyen Medical Centre Website Audit

Date: 16 September 2026

## Scope

Combined UX, visual, responsive, accessibility, and implementation review of the home page, services directory, doctors directory, appointment flow, contact form, search/navigation patterns, and mobile navigation.

## Overall assessment

The site already has a calm, credible visual system, clear emergency access, good service grouping, and strong responsive navigation. It is not ready for public launch yet because placeholder medical information and mock form submissions could mislead patients.

## Fix before launch

1. **Replace every placeholder and verify all hospital facts.** The public experience currently exposes placeholder doctors, credentials, schedules, HMO providers, phone numbers, address details, registration information, and map links. The hero also says “12 Airport Road” while the contact/footer address says “Plot 12, Medical Centre Road, Off Sapele Road.” Use one verified source of truth and hide any record that is not approved. Evidence: `src/data/hospitalConfig.ts:28`, `src/data/hospitalConfig.ts:44`, `src/data/hospitalConfig.ts:278`, `src/data/hospitalConfig.ts:367`, `src/data/hospitalConfig.ts:554`.

2. **Connect appointment and contact forms to a real workflow.** The appointment form waits 800 ms, stores the request only in the visitor’s browser, and presents a success state; the contact form immediately presents “Message Received” without sending anything. This can cause a patient to believe the hospital received a request when it did not. Evidence: `src/components/appointments/AppointmentForm.tsx:79`, `src/components/appointments/AppointmentForm.tsx:93`, `src/pages/ContactPage.tsx:16`.

3. **Repair and replace doctor photography.** One doctor image currently fails to load, all profiles use placeholder identities, and stock photos should not be presented as the hospital’s actual clinicians. Add verified staff portraits, a resilient fallback image, and an image error state. Evidence: `src/data/hospitalConfig.ts:293`.

4. **Correct form accessibility and validation.** Contact form labels are not programmatically connected to their fields. Appointment errors appear visually, but the first invalid field is not focused and errors are not announced with `aria-live`, `aria-invalid`, or `aria-describedby`. Add `name`, `autocomplete`, and suitable `inputmode` attributes. The Nigerian phone regular expression is declared but never used, so invalid 11-digit numbers can pass. Evidence: `src/pages/ContactPage.tsx:187`, `src/components/appointments/AppointmentForm.tsx:47`, `src/components/appointments/AppointmentForm.tsx:271`.

5. **Remove internal launch notes from public pages.** Phrases such as “Service Verification Status,” “structured placeholders,” and `[TODO: VERIFY BEFORE LAUNCH]` reduce trust. Hide incomplete sections or replace them with approved patient-facing copy.

## High-value improvements

6. **Shorten the mobile home page.** The captured mobile page is extremely long because it repeats detailed services, doctors, resources, location, HMO, testimonials, and calls to action. Keep the home page focused on emergency help, booking, core services, trust proof, and location; move depth to dedicated pages.

7. **Improve the appointment error journey.** Keep the useful inline errors, but focus the first invalid field, add an error summary at the top, and preserve a clear path back to each problem. Do not leave focus on the submit button at the bottom.

8. **Strengthen modal and mobile-menu behavior.** Trap focus inside the search dialog and mobile menu, return focus to the trigger on close, lock background scrolling, and make the page behind an open overlay inert. The search results should announce result-count changes.

9. **Add a skip link and clearer main landmark.** Provide “Skip to main content,” render route content inside an explicit `<main>`, and ensure sticky headers do not cover focused or anchored content. Evidence: `src/App.tsx:39`.

10. **Prevent layout shifts and reduce image risk.** Add explicit `width` and `height` to images, prioritize the above-the-fold hero/logo assets, lazy-load below-fold images, and preconnect to the image CDN. Evidence: `src/components/common/HospitalLogo.tsx:25`, `src/components/home/HeroSection.tsx:118`.

11. **Reduce animation complexity.** Replace remaining `transition: all` declarations with specific properties. The card tilt effect adds implementation weight without improving the hospital task flow and can be simplified. Evidence: `src/index.css:79`, `src/index.css:103`, `src/index.css:144`.

12. **Clarify conversion copy.** Replace vague labels such as “Start Your Care” and “Proceed” with task-specific labels such as “Book an Appointment,” “View Services,” and “Get Directions.”

13. **Improve credibility and local relevance.** Add verified facility photos, clinician portraits, registration/accreditation details, real patient guidance, parking/accessibility information, and an accurate embedded map. Replace the generic stock-heavy presentation where practical.

14. **Improve search and page performance.** Lazy-load route modules, optimize remote imagery, and consider removing unused runtime dependencies. The production JavaScript bundle is approximately 464 kB before compression (125 kB gzip), which is workable but can be reduced.

## Confirmed strengths

- Emergency contact is highly visible and repeated at useful decision points.
- The home hero has strong hierarchy and clear primary/secondary actions.
- Services are grouped in patient-friendly language.
- The desktop header and mobile action bar make important tasks easy to reach.
- Appointment fields have visible labels and helpful inline error text.
- Responsive navigation is visually clear and touch targets are generally generous.
- Reduced-motion styles are present.
- The production build and TypeScript checks complete successfully.

## Evidence limits

This review used current screenshots, DOM inspection, source review, a production build, and TypeScript checking. It does not establish full WCAG compliance and did not test screen-reader output across multiple assistive technologies, real form delivery, live hospital phone/map data, analytics, backend security, or production network performance.
