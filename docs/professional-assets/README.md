# Professional documents and media assets

Only put materials approved for public distribution in `public/`. Files in that directory are copied into the production site and can be accessed directly by URL. Keep private transcripts, interview records, student work, restricted research materials, and internal institutional documents outside it.

## Documents

The October 2026 CV serves as both the academic curriculum vitae and professional résumé. It is stored at `public/documents/academic-cv.pdf` and linked from the homepage, About page, and `/cv/` page. Replace that file with the approved current version when it changes, keeping the filename so configured links continue to work.

Place other approved PDFs in `public/documents/`:

- `teaching-statement.pdf` for an approved teaching statement

Document links are configured in `src/data/professionalDocuments.ts`. Optional links stay hidden until the configured file exists. If a filename changes, update the matching path there. PDF links open in a new browser tab.

## Images

- `public/images/profile/` — professional headshots and approved biography portraits
- `public/images/publications/` — book covers, publication artwork, and research-presentation images
- `public/images/affiliations/` — institutional or credential imagery only when its use is approved

Update the related content entry or data field when adding an image. Do not add logos or institutional marks without permission.

## Media kit preparation

`src/data/mediaKit.ts` is the initial structured source for a future media kit. It has no public route. Add an approved long biography or speaking topics only after those details are provided; publications can be drawn from the Work collection.
