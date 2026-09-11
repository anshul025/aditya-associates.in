# PRD — Aditya Associate Website

## Original Problem Statement
Build an authentic, attractive bilingual (English/Hindi) business website for Aditya Associate (Bhopal, M.P.) so clients can see the work (real photos/videos), browse all services with a focus on Polyhouse, apply/register via a form, and find contact details. Backend to connect with Supabase ("aditya associate") so the owner can see client details and requested services. Include polyhouse education content: definition, main crops, polyhouse vs net house, benefits, MIDH/NHB govt subsidy (up to 50%), and the 30-second one-roof pitch.

## User Personas
- Indian farmers / agri-entrepreneurs (mostly mobile, Hindi-preferred) seeking polyhouse construction + subsidy
- Business owners needing MSME/GST/Udyam/Startup India documentation
- Owner (Aditya Associate) who views leads

## Architecture
- Frontend: React (CRA + craco), Tailwind, framer-motion, lenis smooth scroll, sonner toasts. Full i18n dictionary in `src/i18n.js` (EN/HI toggle, persisted per session state).
- Backend: FastAPI `/api/register` (POST lead), `/api/registrations` (GET lead list).
- Database: **Supabase PostgreSQL** (project zrphwkpwlxcirvhkadup, ap-south-1, Transaction Pooler) — table `aditya_associate_leads` (id, name, phone, service, district, message, language, created_at). SQLAlchemy async + Alembic migrations (`/app/backend/alembic`). DATABASE_URL in backend/.env.

## Core Requirements (static)
- Bilingual EN/HI full-site toggle
- 13 services listed, polyhouse featured
- Polyhouse deep-dive: what/crops/benefits/comparison/subsidy/pitch
- Real work gallery (videos + photos)
- Apply/Register form: name, phone, service, district, message
- Contact: 62663 53292, adityaassociates2025@gmail.com, MB7 Mezzanine Floor, Mansarovar Complex, Near BJP Office, Bhopal (M.P.)

## Implemented (2026-09-05)
- Full single-page site: kinetic masked-reveal hero with real polyhouse video bg + parallax, editorial marquee, numbered chapters (01–05), services grid, polyhouse deep-dive with comparison table and 30-sec pitch, work gallery with 3 real videos, register form with phone validation + toast, contact with real visiting card, footer
- EN/HI language toggle across entire site (Devanagari font pairing)
- Backend lead capture + listing endpoints (verified with curl)
- Navbar dark/light adaptive states fixed after verification
- **Supabase connected (2026-09-05):** leads now write to Supabase Postgres table `aditya_associate_leads`; Alembic migration applied; verified end-to-end via API curl and live website form submission
- **Google Map card (2026-09-05):** embedded map of Mansarovar Complex office in Contact section, bilingual captions, verified in EN + HI
- **Polyhouse content expansion (2026-09-05):** user-supplied detail — GI structure definition, 7 polyhouse benefits (40–80% production, 40–60% water saving, export quality etc.), 10 polyhouse crops, net house explainer + 6 benefits + 8 crops, 12 polyhouse + 8 net house components, 9 essential systems, investment cards (₹700–1,200/sqm net, ₹1,000–2,000+/sqm poly), best-for chips. All bilingual.
- **Subsidy figure change (2026-09-05):** all 50% claims changed to 35% per user instruction (hero, marquee, stats, services, benefits, comparison table, subsidy badge/note, form side graphic). NOTE: user's long text mentioned 40–70% subsidy range; explicit 35% instruction was followed — confirm with user if 40–70% should replace it.
- **Calculator removed (2026-09-11):** user removed the instant-estimate calculator; replaced with a simple bilingual note in the investment block — "we start polyhouse projects from 4,000 sq. meter (about 1 acre) onwards". Prefill listener in RegisterForm also removed.
- **Video trimming (2026-09-11):** 3 original videos AI-analyzed for highlights and trimmed with ffmpeg to short clips (7s net house interior, 12s rose polyhouse blooms, 11s polyhouse walkthrough), H.264/yuv420p/faststart, stored in /app/frontend/public/videos/. Titles updated to match real content. NOTE: playback unverifiable in headless test browser (no H.264 codec — original CDN videos fail there too); valid universal format, user should confirm on phone.
- **Service Details section (2026-09-11):** new animated alternating image+text rows under services grid — Easy Bank Loan & Subsidy, MSME & Udyam, Food Processing Unit, Cold Storage — bilingual descriptions, 3 bullet points each, numbered watermarks, slide-in framer-motion animations, Apply buttons.
- **Phone changed to 62663 53292 (2026-09-11):** hero, contact card, tel: links, form error messages, both languages. NOTE: visiting card IMAGE still shows old 74008 55738 — awaiting new card photo from user.
- **Deployment readiness (2026-09-11):** deployment_agent health check run 3x. Fixed: unbounded /api/registrations query (now .limit(500)), .gitignore no longer blocks .env (Emergent deploy pipeline requirement). Final status: WARN/deployable — no blockers. Remaining notes are intentionally NOT actioned: supervisor mongodb section and MONGO_URL/DB_NAME are platform-protected/managed; Supabase accepted as external managed DB.
- **Site title:** browser tab now "Aditya Associates".

## Backlog
- P0: (done) Supabase connection
- P1: WhatsApp click-to-chat button (wa.me/917400855738)
- P1: Admin leads page on the site (password-protected) so owner sees leads without Supabase dashboard
- P2: Google Maps embed of office; more project photos/videos as work grows; SEO meta/OG tags; delete the 2 test leads from Supabase
