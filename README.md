# Vikram Sarabhai English Medium School Website

Static Next.js (App Router) + Tailwind CSS website for:
- Vikram Sarabhai English Medium School
- Sayan, Surat, Gujarat, India

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Fully static export (`output: "export"`)

## Run Locally
```bash
npm install
npm run dev
```

## Production Build (Static)
```bash
npm run build
```

With `output: "export"` enabled in `next.config.ts`, build output is generated as static files in `out/`.

## Project Structure
- `app/` route pages and global layout
- `components/` reusable UI system
- `data/` all editable page copy and content models
- `lib/` metadata helper and shared types
- `public/images/` local placeholder visual assets

## Content Editing Guide
All text and structured content is centralized in:
- `data/site.ts` global brand, contact, nav, footer links
- `data/home.ts`
- `data/about.ts`
- `data/academics.ts`
- `data/activities.ts`
- `data/ai-learning.ts`
- `data/admissions.ts`
- `data/contact.ts`

Update these files to edit headlines, section descriptions, cards, stats, process steps, and FAQs without touching page layout code.

## Notes
- No CMS, no database, no backend, no API routes.
- Contact form UI is static and intentionally does not submit.
- The site uses a default light theme.
