This is suraj Gupta's website using next js

# Shubh Insurance and Financial Services — Website

LIC agent/advisor marketing website with plan browsing, testimonials, policy landing pages, and a WhatsApp-based enquiry flow.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- Recharts (SIP/retirement calculators)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Project structure

- `app/` — routes (App Router), including `app/api/*` for plans, policies, advisors, and testimonials
- `src/components/` — UI components, grouped by concern (`common/layout`, `common/card`, `common/plan`, `common/form`, `policy/`, `sections/`, `testimonials/`); most components co-locate their own `.css` file
- `src/lib/db/` — in-memory seeded data layer (plans, policies, advisors, testimonials) backing the API routes
- `src/config/siteConfig.js` — site content and copy
- `src/App.css` — shared/legacy styles not yet split into per-component files

## Notes

- This project was migrated from a Vite SPA to Next.js; see `AGENTS.md` for framework-specific conventions this codebase relies on.
