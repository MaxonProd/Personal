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

- Site flags, navigation, domain, analytics, and résumé path: `src/data/site.ts`
- Credentials and current focus: `src/data/profile.ts`
- Ventures: `src/data/ventures.ts`
- Work entries: `src/content/work/`
- Future notes: `src/content/notes/`
- Future photography: `src/content/photos/`

Work, Notes, and Photos schemas live in `src/content.config.ts`. Draft entries are excluded from public work pages. Notes remain unavailable while `notesEnabled` is false. Campaign components are isolated under `src/components/campaign/` and are not rendered while `campaignMode` is false.

## Contact form

The launch contact form uses a `mailto:` action to open the visitor’s default email app and address the message to the Office Hours mailbox. It does not require server-side email secrets or a Cloudflare Pages Function.

## Launch assets still requiring owner input

1. Add the approved PDF résumé under `public/resume/`, then set `resumePath` in `src/data/site.ts`.
2. Set the Cloudflare Web Analytics token in `src/data/site.ts`.
3. Connect the Cloudflare project to the production Git repository and attach the apex and `www` domains.
4. Add original photographs only; the current Photography page intentionally publishes no stock or placeholder images.

## Cloudflare deployment

This repository builds to a static `dist/` folder.

If deploying as Cloudflare Pages:

- Build command: `pnpm run build`
- Output directory: `dist`
- Deploy command: leave blank

If deploying through Workers with `npx wrangler deploy`, `wrangler.toml` serves the generated `dist/` directory as static assets.

## Deployment checks

Run `npm run build`, preview `dist/`, test the mailto form behavior, check all external links, and run Lighthouse on the homepage plus one content page at desktop and mobile sizes.
