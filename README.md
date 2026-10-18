# Timothy Maxon — personal website

Static-first Astro site for [timothymaxon.com](https://timothymaxon.com).

## Local development

```bash
npm install
npm run dev
npm run build
```

The production build is written to `dist/`. Use Node 22.12 or newer.

## Content and settings

- Site flags, navigation, domain, and analytics: `src/data/site.ts`
- Core biography and current focus: `src/data/profile.ts`
- CV, appointments, employment history, education, and service records: `src/data/cv.ts`
- Credentials and structured professional data: `src/data/credentials.ts`
- Public document links: `src/data/professionalDocuments.ts`
- Ventures: `src/data/ventures.ts`
- Work entries: `src/content/work/`
- Future notes: `src/content/notes/`
- Future photography: `src/content/photos/`
- Future professional updates: `src/content/updates/`

Work, Notes, Photos, and Updates schemas live in `src/content.config.ts`. Draft Work and Update entries are excluded from public pages. The Teaching Philosophy & Practice portfolio entry is published from the owner-provided statement; the doctoral research overview is published as ongoing and based on the October 2026 master CV. Updates remain unpublished unless `updatesEnabled` is true and at least three non-draft entries exist; homepage updates also require `recentUpdatesEnabled`. Notes remain unavailable while `notesEnabled` is false. Campaign components are isolated under `src/components/campaign/` and are not rendered while `campaignMode` is false.

## Contact form

The launch contact form uses a `mailto:` action to open the visitor’s default email app and address the message to the site's contact mailbox. It does not require server-side email secrets or a Cloudflare Pages Function.

## Launch assets still requiring owner input

1. The October 2026 CV serves as both the academic CV and professional résumé; it is available at `/cv/` and `/documents/academic-cv.pdf`. A separate teaching-statement PDF is optional, and its link remains hidden until a file is supplied.
2. Set the Cloudflare Web Analytics token in `src/data/site.ts`.
3. Connect the Cloudflare project to the production Git repository and attach the apex and `www` domains.
4. Add original photographs only; the current Photography page intentionally publishes no stock or placeholder images.

See `docs/professional-assets/README.md` for public document and image handling guidance.

## Cloudflare deployment

This repository builds to a static `dist/` folder.

If deploying as Cloudflare Pages:

- Build command: `pnpm run build`
- Output directory: `dist`
- Deploy command: leave blank

If deploying through Workers with `npx wrangler deploy`, `wrangler.toml` serves the generated `dist/` directory as static assets.

## Deployment checks

Run `npm run build`, preview `dist/`, test the mailto form behavior, check all external links, and run Lighthouse on the homepage plus one content page at desktop and mobile sizes.
