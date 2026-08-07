# SKK Studio

Marketing website for SKK Studio, an agency that helps small businesses (shops, restaurants, salons, contractors, freelancers) get visible online — building websites, setting up Google Business Profiles, and making their business easy to find and trust.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router, SSR)
- Vite 7
- Tailwind CSS 4
- lucide-react icons
- Netlify Forms for the contact form

## Project structure

- `src/routes/index.tsx` — the full one-page site (hero, services, process, portfolio, about, testimonials, pricing, FAQ, contact)
- `src/data/content.ts` — all editable copy (services, process steps, portfolio items, testimonials, pricing tiers, FAQ)
- `src/components/ContactForm.tsx` — the contact form
- `public/contact-form.html` — hidden static form Netlify needs to register the contact form at build time (see AGENTS.md)

## Running locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`. Netlify Forms submissions only work on a deployed site, not in local dev.

## Building

```bash
npm run build
```

## Before publishing

Replace the placeholder content in `src/data/content.ts` and in the Contact/Footer sections of `src/routes/index.tsx`:

- Real portfolio projects and photos (currently invented example businesses)
- Real client testimonials
- Real phone number and email address
- Real social media links
