export const cvLastUpdated = 'October 2026';

export const academicInstitution = 'Edgewood University';

export const academicCredentials = [
  {
    title: 'Master of Business Administration',
    abbreviation: 'MBA',
    detail: `Applied Business Research · ${academicInstitution}`,
    date: '2025',
    status: 'Earned'
  },
  {
    title: 'Doctor of Business Administration',
    shortTitle: 'DBA',
    detail: academicInstitution,
    date: 'Expected May 2027',
    status: 'Candidate',
    researchArea: 'Organizational effectiveness, flexible work, and multigenerational teams'
  }
] as const;

export const professionalCertifications = [
  { title: 'Professional in Human Resources', abbreviation: 'PHR', issuer: 'HR Certification Institute', date: '2025' },
  { title: 'Six Sigma Green Belt', abbreviation: 'SSGB', issuer: 'Council for Six Sigma Certification', date: '2025' }
] as const;

export const currentAppointments = [
  {
    group: 'Professional',
    title: 'Commercial Lead',
    organization: 'Impact Team K (IFMC)',
    date: 'May 2026–Present',
    employmentType: 'Full-time',
    aboutDetail: 'Full-time · Since May 2026',
    responsibilities: [
      'Contribute to commercial development, commercialization initiatives, customer research, and operational improvement across functional teams.',
      'Developed a QR-enabled documentation and reorder-system proposal addressing product identification, ordering information, and shipping challenges.',
      'Prepared concise problem–solution–expected-result materials for sales, engineering, operations, and logistics stakeholders.',
      'Support customer discovery and industrial-product commercialization initiatives.'
    ]
  },
  {
    group: 'Academic',
    title: 'Professor of Business',
    descriptor: 'Business Professor',
    organization: 'Newlane University',
    date: 'January 2025–Present',
    responsibilities: [
      'Teach and assess undergraduate business, finance, accounting, and management coursework with an emphasis on practical applications.',
      'Participate in degree hearings and evaluate student competency, including business and finance capstone work.',
      'Contribute to transcript evaluation, transfer-credit review, academic degree-completion processes, and instructional improvements.',
      'Deliver live instruction, student guidance, and individualized feedback.'
    ]
  },
  {
    group: 'Academic',
    title: 'Adjunct Faculty',
    descriptor: 'Adjunct Faculty',
    organization: 'Sonoran Desert Institute',
    date: 'January 2025–Present',
    responsibilities: [
      'Teach and assess applied technical coursework, including firearms technology and machining-related subjects.',
      'Support students through evaluation, feedback, and practical online instruction.'
    ]
  },
  {
    group: 'Entrepreneurship',
    title: 'Founder & Principal',
    organization: 'Maxon Products LLC',
    date: 'May 2019–Present',
    aboutDetail: 'Founded May 2019',
    responsibilities: [
      'Lead business development, supplier coordination, product and service planning, pricing, marketing, digital operations, and customer-experience design across the company’s ventures.'
    ]
  }
] as const;

export const priorExperience = [
  {
    title: 'Human Resources Specialist, GS-0201-11',
    organization: 'Army Civilian Human Resources Agency',
    setting: 'Supporting Defense Health Agency facilities',
    date: 'September 2024–September 2025',
    responsibilities: [
      'Served as an Army Civilian Human Resources Agency employee providing HR services for Defense Health Agency healthcare operations.',
      'Supported recruitment, placement, hiring actions, and workforce administration for approximately 600 employees across two hospital facilities.',
      'Advised hiring officials on staffing requirements, job analysis, classification, candidate assessment, and federal hiring procedures.',
      'Coordinated personnel documentation, onboarding-related processes, and compliance requirements.'
    ]
  },
  {
    title: 'Human Resources Specialist, GS-0201-09',
    organization: 'Michigan Air National Guard — Alpena Combat Readiness Training Center',
    date: 'December 2020–September 2024',
    responsibilities: [
      'Administered civilian personnel programs involving staffing, classification, workforce planning, employee relations, records, and policy compliance.',
      'Rebuilt the installation’s performance-management process, resolving a five-year compliance failure and restoring appraisal readiness.',
      'Advised leadership on personnel policy, collective-bargaining considerations, employee issues, and administrative procedures.',
      'Developed local processes and documentation to strengthen audit readiness and operational consistency.'
    ]
  },
  {
    title: 'Executive Administrator / Commander’s Support Staff',
    organization: 'United States Air Force — Scott Air Force Base, Illinois',
    date: 'October 2018–June 2020',
    responsibilities: [
      'Supported command and staff leadership through personnel administration, executive coordination, records management, and compliance duties.',
      'Managed workflow, executive scheduling, personnel actions, travel coordination, and communications across supported organizations.',
      'Contributed to records digitization and SharePoint modernization, including large-scale archival of organizational documentation.'
    ]
  }
] as const;

export const doctoralResearch = {
  title: 'Flexible Work and Multigenerational Teams',
  overview: 'A qualitative multiple-case study of remote, hybrid, and compressed four-day work arrangements in multigenerational teams.',
  areas: [
    'Team productivity',
    'Workplace relationships',
    'Professional development and mentoring',
    'Employee well-being',
    'Organizational knowledge transfer'
  ],
  methods: 'The design includes interviews, within-case analysis, and cross-case thematic analysis.',
  status: 'Ongoing. Passed the preliminary dissertation defense in May 2026; the dissertation remains in progress.'
} as const;

export const foreignQualifications = [
  'Master of Business Administration',
  'Master in Business and Corporate Communication'
] as const;

export const foreignQualificationsNote = 'Awarded in 2024 through ENEB / Universidad Isabel I, Spain. Educational Credential Evaluators (ECE) evaluated both foreign qualifications as comparable to U.S. bachelor’s degrees. These are the original foreign award titles, not U.S. master’s-degree awards.';

export const additionalEducation = [
  { title: 'Associate of Science, Firearms Technology', institution: 'Sonoran Desert Institute', date: '2024' },
  { title: 'Associate of Applied Science, Board of Governors / Criminal Justice', institution: 'Pierpont Community & Technical College', date: '2024' },
  { title: 'Associate of Applied Science, Information Management', institution: 'Community College of the Air Force', date: '2024' },
  { title: 'Associate of Individualized Study', institution: 'Eastern Gateway Community College', date: '2024 · cum laude' }
] as const;

export const militaryService = {
  summary: 'United States Air Force active duty (2018–2020) and Michigan Air National Guard service (2020–2025). Final rank: Staff Sergeant (E-5).',
  recognition: [
    'Air Force Achievement Medal (later titled Air and Space Achievement Medal), with two oak leaf clusters (three awards total)',
    'Two Diamond Sharp Awards',
    'Airman of the Quarter (2019)',
    'Distinguished Graduate, Air Force administrative training (2018)'
  ]
} as const;
