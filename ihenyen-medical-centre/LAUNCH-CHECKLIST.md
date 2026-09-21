# Launch checklist — hospital approval required

The website is a working preview, not a live patient-service channel. Do not publish it until the hospital administration confirms the information below and the form endpoints have been tested end to end.

## Information the hospital must provide

- Official reception, emergency, and WhatsApp numbers, plus the hours each line is monitored.
- Exact street address, landmark, map pin, and any parking or accessibility directions.
- Official contact and billing email addresses.
- Approved list of clinical departments, services, hours, and emergency capabilities.
- Clinician names, credentials, schedules, approved portraits, and written permission to publish them.
- Accepted HMO providers, relevant plans, authorization steps, and supported payment methods.
- Approved registration/accreditation details and any patient testimonials with documented consent.

The current values in `src/data/hospitalConfig.ts` are draft data. Entries marked `isVerified: false` must remain hidden or be replaced with approved values before launch. After verification, update the site-wide text and remove any remaining preview notices.

## Form delivery

Both forms are disabled until a hospital-approved secure endpoint is configured in `.env` using the keys shown in `.env.example`. Each endpoint must accept a JSON POST and return a non-error HTTP response only after it has stored or delivered the request. Do not use an unapproved third-party form service for patient information. Test success, failure, duplicate requests, notifications to staff, spam protection, and data retention before enabling either form.

## Final checks

- Test every phone, WhatsApp, email, map, booking, and emergency link on a real mobile device.
- Test the forms with non-sensitive sample data and confirm receipt with staff.
- Review medical copy and legal/privacy statements with hospital administration.
- Run `npm run lint` and `npm run build` and review the desktop/mobile pages.
- Add verified Hospital structured data only after the above details are confirmed.
