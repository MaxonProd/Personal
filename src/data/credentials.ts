import {
  academicCredentials,
  currentAppointments,
  professionalCertifications
} from './cv';

export { academicInstitution } from './cv';

export const academicAppointments = currentAppointments
  .filter((appointment) => appointment.group === 'Academic')
  .map((appointment) => ({
    title: appointment.title,
    descriptor: appointment.descriptor,
    institution: appointment.organization
  }));

const otherProfessionalRoles = [
  { descriptor: 'Commercial Lead', schemaTitle: 'Commercial Lead' },
  { descriptor: 'HR Professional', schemaTitle: 'Human Resources Professional' },
  { descriptor: 'Founder', schemaTitle: 'Founder' }
] as const;

export const credentialGroups = [
  {
    title: 'Academic credentials',
    entries: academicCredentials.map((credential) => ({
      title: credential.title,
      detail: credential.status === 'Candidate'
        ? `${credential.status} · ${credential.detail} · ${credential.date}`
        : `${credential.detail} · ${credential.date}`,
      abbreviation: 'abbreviation' in credential ? credential.abbreviation : undefined
    }))
  },
  {
    title: 'Professional certifications',
    entries: professionalCertifications.map(({ title, abbreviation }) => ({ title, abbreviation }))
  },
  {
    title: 'Academic appointments',
    entries: academicAppointments.map((appointment) => ({
      title: appointment.title,
      detail: appointment.institution
    }))
  },
  { title: 'Professional memberships', entries: [] },
  {
    title: 'Service recognition',
    entries: [
      { title: 'Promotion recognition during Air Force service', href: '/public-service/' }
    ]
  }
] as const;

export const heroCredentials = [
  academicCredentials[0],
  ...professionalCertifications
] as const;

export const professionalDescriptor = 'Commercial Lead | Business Professor | DBA Candidate | Founder';

export const professionalSchemaJobTitles = [
  ...otherProfessionalRoles.map((role) => role.schemaTitle),
  ...academicAppointments.map((appointment) => appointment.title)
];
