# PRD — Khadijah Ahmed Azab Portfolio

## Original Problem Statement
Design and build a professional portfolio integrating the owner's CV with UI/UX and Business Intelligence projects. Each project in its own standalone section (Title, Objective, Tools & Technologies, Key Process Steps, Deliverables/Results). High-quality mockup presentation with consistent frames. CV sections: About/Professional Summary, Technical Skills, Soft Skills, Work Experience, Education, Activities/Events. Clean, modern, minimalist layout.

## User Choices (2026-09-07)
- Style: Neutral editorial — warm off-white (#F8F7F4), black type, Lora serif + Instrument Sans + JetBrains Mono
- Mockups: rebuilt as code-based phone/browser frames (no raw screenshots)
- Contact: links only (email, phone) with copy-to-clipboard — no form
- Content: CV used as-is; owner may request edits after review

## Architecture
- Frontend: Vite + React 19 + TS, Tailwind v4, motion (framer-motion) reveals, lenis smooth scroll, recharts for the interactive BI dashboard demo
- Content: single source in `frontend/src/data/portfolio.ts`
- Mockups: pure CSS/TSX in `frontend/src/components/mockups/` (PhoneFrame, BrowserFrame, app screens, BIDashboard)
- Backend: FastAPI template (status endpoints); portfolio is content-driven, no DB dependency. CV PDF served statically from `frontend/public/Khadijah_Azab_CV.pdf`

## Implemented (2026-09-07)
- Kinetic hero: masked line-by-line name reveal, parallax outlined "HCI", availability status, chapter index card, CTAs
- Editorial marquee ribbon
- About (01): professional summary + narrative, stats strip, arch-clipped Makkah image
- Skills (02): 3 technical skill group cards + soft skills strip (real CV skills)
- Experience (03): Makkah Health Cluster internship, UQU education card (dark, honours badge), 6 certifications, activities (Hajjathon, Designathon, Computing Club)
- Projects (04): six standalone chapters — Wasla (capstone, live link, bilingual browser mock), Bloom (3 phone mocks), EmpWell (2 dark phone mocks), Executive BI Suite (interactive recharts dashboard with branch + metric filters), 15 Interfaces challenge (mini gallery), TechFix (2 phone mocks) + coursework archive strip
- Contact (05): dark section, email/phone with copy buttons, location, CV download
- data-testid on all interactive elements; WCAG-conscious contrast

## Verified
- `yarn typecheck` clean; `/api/` + `/api/status` POST via public URL; CV PDF 200; screenshots: hero, about, projects, bloom, empwell, bi (filters clicked — values update), contact (copy fallback added after permission-denied in headless test)

## Updates (2026-09-07, round 2 — owner feedback, Arabic)
- Project visuals now use the owner's ORIGINAL images (no code-rebuilt mockups): Bloom & EmpWell uploaded collages, 15-interfaces boards + TechFix/IA/Design-Systems cropped from the uploaded PDFs at 3x render + sharpen, saved as high-quality WebP in `frontend/public/projects/`; Wasla shows a real screenshot of the live site
- Wasla tools: removed Flutter & Dart per owner request (now Figma, Firebase, WCAG 2.1 AA, Usability Testing)
- About: second (small) paragraph removed; only the CV professional summary remains
- Archive cards now show the IA and Design Systems project images

## Backlog
- P0: Add real LinkedIn URL (not present in CV) once owner provides it
- P1: Owner content edits after review (wording, metrics)
- P1: Replace illustrative Bloom/EmpWell screen content with exact screen copy if owner supplies Figma exports
- P2: Arabic (RTL) version toggle
- P2: Case-study detail pages per project

## Next Tasks
1. Collect LinkedIn URL + any copy edits from owner
2. Optional: real dashboard screenshots from owner's Power BI files
3. Optional: contact form with email delivery (Resend) if owner wants inbound messages
