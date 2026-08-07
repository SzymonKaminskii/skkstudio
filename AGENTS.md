# AGENTS.md

This document orients AI agents and developers working on the SKK Studio marketing site.

## Project Overview

A single-page marketing site for SKK Studio, an agency that helps small businesses (shops, restaurants, salons, contractors) build a website and online presence. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (file-based routing, SSR) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (custom theme tokens in `src/styles.css`) |
| Icons | lucide-react |
| Fonts | Fraunces (display) + Manrope (body), loaded via Google Fonts in `__root.tsx` |
| Forms | Netlify Forms (AJAX submission, static skeleton for build-time detection) |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   └── contact-form.html   # Static skeleton so Netlify's build-time form scanner registers the "contact" form
├── src/
│   ├── components/
│   │   └── ContactForm.tsx # AJAX contact form, posts to /contact-form.html
│   ├── data/
│   │   └── content.ts      # All editable site copy: services, process steps, portfolio, testimonials, pricing, FAQ
│   ├── routes/
│   │   ├── __root.tsx      # HTML shell, meta tags, fonts
│   │   └── index.tsx       # The entire one-page site (Nav, Hero, Services, Process, Portfolio, About, Testimonials, Pricing, FAQ, Contact, Footer)
│   └── styles.css          # Tailwind import + theme tokens (colors, fonts) + a few custom animations
├── netlify.toml
└── vite.config.ts
```

## Conventions

- All page sections live as components inside `src/routes/index.tsx`. Keep it one file unless it grows unwieldy — the site is intentionally a single scrollable page with anchor-link navigation.
- Editable content (copy, pricing, FAQ, testimonial text) is centralized in `src/data/content.ts` rather than hardcoded in JSX, so non-developers can update it without touching layout code.
- Colors and fonts are defined once as Tailwind v4 `@theme` tokens in `src/styles.css` (`--color-clay`, `--color-ink`, `--color-cream`, `--color-moss`, `--color-gold`, `--font-display`, `--font-sans`). Use these tokens (`bg-clay`, `text-ink-soft`, `font-display`, etc.) rather than introducing new raw hex values.
- Because Tailwind scans source files for literal class name strings, any class built dynamically (e.g. per-item accent colors in the portfolio grid) is expressed as full literal strings in a lookup map — never assembled by string concatenation of partial class names at runtime.

## Netlify Forms — non-obvious setup

TanStack Start renders forms client-side, so Netlify's build-time HTML scanner never sees the real React form. `public/contact-form.html` is a hidden, unstyled duplicate of the contact form's fields that exists purely so Netlify registers the `contact` form name at build time. The real form in `ContactForm.tsx` submits via `fetch('/contact-form.html', ...)` (not `/`, which would be intercepted by the SSR function). Netlify Forms was enabled for this site via the platform's forms activation step — form submissions appear in the Netlify UI once deployed (forms do not work in local `vite dev`).

## What's still a placeholder

- Portfolio items, testimonials, phone number, and email in `src/data/content.ts` / `index.tsx` are invented and need to be replaced with real client information before launch.
- Portfolio "images" are currently colored monogram tiles, not real photos.
