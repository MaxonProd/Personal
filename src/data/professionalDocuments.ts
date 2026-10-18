import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const publicDirectory = resolve(process.cwd(), 'public');

function documentEntry(id: string, label: string, href: string) {
  const filePath = resolve(publicDirectory, href.replace(/^\//, ''));
  return { id, label, href, available: existsSync(filePath) };
}

const professionalCvDocument = documentEntry('cv-resume', 'Download CV / Résumé (PDF)', '/documents/academic-cv.pdf');

export const professionalDocuments = [
  professionalCvDocument,
  documentEntry('teaching-statement', 'Download Teaching Statement (PDF)', '/documents/teaching-statement.pdf')
] as const;

export const availableProfessionalDocuments = professionalDocuments.filter((document) => document.available);
export const resumeDocument = professionalCvDocument;
export const academicCvDocument = professionalCvDocument;
