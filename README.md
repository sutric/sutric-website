# Sutric website (Astro)

One-page bilingual site (Arabic RTL default, English LTR) — v2 design.

## Run
```bash
npm install
npm run dev      # http://localhost:4321  (Arabic) · /en/ (English)
npm run build    # static output in dist/
npm run preview  # serve the built site
```

## Structure
- `src/i18n/content.ts` — all copy (ar + en), contact details, icons
- `src/components/Page.astro` — all sections (hero, about, services, capabilities, who we serve, how we work, why, contact)
- `src/components/Header.astro`, `Footer.astro`
- `src/styles/global.css` — palette + shared classes
- `public/sutric-energy-flow.js` — animated hero diagram (web component `<sutric-energy-flow lang="ar|en">`)
- `public/images/` — logos and imagery

## Deploy
Static output — Netlify, Vercel, Cloudflare Pages or any static host. Set the domain in `astro.config.mjs` (`site`).
