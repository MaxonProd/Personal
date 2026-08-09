# Timothy Maxon — personal website

Static-first Astro site for [timothymaxon.com](https://timothymaxon.com).

## Local development

```bash
npm install
npm run dev
npm run build
```

The production build is written to `dist/`. Cloudflare Pages should use `npm run build` and `dist`, with Node 22 or newer.

## Content and settings

- Site flags, navigation, domain, analytics, and résumé path: `src/data/site.ts`
- Credentials and current focus: `src/data/profile.ts`
- Ventures: `src/data/ventures.ts`
- Work entries: `src/content/work/`
- Future notes: `src/content/notes/`
- Future photography: `src/content/photos/`

Work, Notes, and Photos schemas live in `src/content.config.ts`. Draft entries are excluded from public work pages. Notes remain unavailable while `notesEnabled` is false. Campaign components are isolated under `src/components/campaign/` and are not rendered while `campaignMode` is false.

## Contact form

The Cloudflare Pages Function at `functions/api/contact.ts` sends mail through Resend. Add these encrypted environment variables in Cloudflare Pages:

- `CONTACT_EMAIL`
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `TURNSTILE_SECRET_KEY` (optional)

The recipient address is never included in public source.

## Launch assets still requiring owner input

1. Add the approved PDF résumé under `public/resume/`, then set `resumePath` in `src/data/site.ts`.
2. Set the Cloudflare Web Analytics token in `src/data/site.ts`.
3. Add a verified email provider/domain and the contact secrets above.
4. Connect the Cloudflare Pages project to the production Git repository and attach the apex and `www` domains.
5. Add original photographs only; the current Photography page intentionally publishes no stock or placeholder images.

## Deployment checks

Run `npm run build`, preview `dist/`, test the form against the deployed Pages Function, check all external links, and run Lighthouse on the homepage plus one content page at desktop and mobile sizes.
