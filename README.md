# Privacy Shrub Service

A single-page informational website for a proposed residential privacy-screening consultation service serving Potomac, Travilah, North Potomac, and nearby Montgomery County, Maryland communities.

**Website:** https://privacyshrubservice.com  
**Current website copy:** v1.5 (October 27, 2026)

## Phase 1 — consultation and planning

The website describes an advisory offering:

- Property privacy-screening consultations and sightline assessments.
- Plant selection and nursery guidance.
- Installation planning guidance and information about engaging independent installers directly.
- General plant-care recommendations.

Privacy Shrub Service does **not** currently advertise direct plant sales, installation contracting, irrigation installation, recurring maintenance, or plant-health monitoring. Homeowners arrange plant purchases and any professional installation directly with third parties.

**Launch/compliance status:** Maryland MHIC and Department of Agriculture licensing applicability, Montgomery County home-occupation/zoning rules, registration, tax obligations, and insurance have not yet been conclusively verified. The website's presence does not establish that paid consultations are authorized; verify requirements before accepting paid work.

## Site structure

- `index.html` — page content, navigation, service descriptions, consultation form.
- `styles.css` — layout, typography, responsive design, and visual assets/backgrounds.
- `script.js` — navigation, form handling, and other interactive behavior.

The site is static and is published using GitHub Pages with a custom domain managed through Cloudflare DNS.

## Consultation form

The form in `index.html` submits through Formspree. It collects contact details, property area, approximate project size, and privacy goals. The existing form action, honeypot, consent checkbox, and JavaScript hooks were preserved in v1.5.

- Do not publish private Formspree account credentials.
- Confirm Formspree's allowed domains include the live custom domain.
- Confirm a submission works after deployment, without unnecessarily using free-tier submissions.

## Deploying v1.5

1. Replace the repository's root `index.html` with the supplied v1.5 HTML (keep the filename `index.html`).
2. Replace the repository's root `README.md` with this file.
3. Commit both changes to the branch used by GitHub Pages.
4. In GitHub, open **Settings → Pages** or the repository's **Actions** tab to confirm deployment completed.
5. Open https://privacyshrubservice.com and hard-refresh (`Ctrl+Shift+R`) if needed.
6. Under **Services**, verify the headings **Plant Selection & Nursery Guidance**, **Installation Guidance**, and **Plant Care Recommendations**.
7. Check the **Our Process** section and footer for the consultation-focused descriptions. Check navigation and form layout on desktop and mobile.

**HTTPS:** Certificate issuance and the **Enforce HTTPS** setting were still pending as of October 27, 2026. Recheck on October 28; avoid making unnecessary DNS changes while provisioning is pending.

## Images and claims

- The hero image is identified as a **conceptual landscape visualization**, not a completed customer project.
- Do not replace existing photos with nursery or contractor images until explicit written reuse permission is received, or use properly licensed alternatives.
- Do not claim licenses, certifications, insured status, completed customer installations, or service capabilities that have not been verified.

## Version history

| Version | Date | Summary |
| --- | --- | --- |
| 1.4 | October 2026 | Initial published website with custom-domain setup and consultation form. |
| 1.5 | October 27, 2026 | Repositioned public copy for Phase 1 consultations; removed claims of direct installation coordination, irrigation, ongoing maintenance, and monitoring. Preserved site structure and Formspree integration. |

## Planned next steps

- Obtain agency confirmation of Phase 1 licensing and local zoning requirements.
- Confirm registration, tax, and insurance needs before paid operations.
- Confirm GitHub Pages HTTPS and Formspree domain restrictions.
- Update photos only after licensing/permission checks.
- Validate customer demand and consultation pricing before expanding to installation services.
