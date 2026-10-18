import { profile } from './profile';

// Source structure for a future media kit; no standalone public Media page is enabled.
export const mediaKit = {
  shortBiography: profile.introduction,
  longBiography: null as string | null,
  headshot: '/images/profile/timothy-maxon-headshot.png',
  speakingTopics: [] as string[],
  publicationsSource: 'work' as const,
  contactPath: '/contact/'
} as const;
