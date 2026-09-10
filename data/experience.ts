export interface Experience {
  role: string;
  organization: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experienceData: Experience[] = [
  {
    role: 'Research Assistant',
    organization: 'SPPG Prambanan Area Research Study',
    period: 'Feb 2026 – Mar 2026',
    location: 'Prambanan, Yogyakarta',
    highlights: [
      'Supported research preparation, site permissions, and stakeholder coordination.',
      'Coordinated field observation and participant engagement for educational video production on food hygiene.',
      'Evaluated Knowledge, Attitude, and Practice (KAP) shifts among food handlers.'
    ]
  },
  {
    role: 'Research Enumerator',
    organization: 'Poltekkes Kemenkes Yogyakarta (Schnabel Method Study)',
    period: 'Mar 2025 – Dec 2025',
    location: 'Yogyakarta',
    highlights: [
      'Executed field data collection and rodent capture-recapture enumeration under institutional appointment.',
      'Maintained precise field data logging for leptospirosis transmission prediction modeling.'
    ]
  },
  {
    role: 'Industrial Field Practice (HSE & Sanitation)',
    organization: 'PT Dua Kelinci',
    period: 'Aug 2025 – Oct 2025',
    location: 'Pati, Central Java',
    highlights: [
      'Applied HIRADC, JSA, safety patrols, and permit-to-work protocols in food industry operations.',
      'Inspected hazardous waste storage, WWTP units, and drafted an aerated grit chamber blueprint using AutoCAD.',
      'Reviewed corporate environmental management compliance (AMDAL/RKL-RPL and PROPER).'
    ]
  },
  {
    role: 'Primary Healthcare Field Practice',
    organization: 'Puskesmas Godean II',
    period: 'Apr 2025 – May 2025',
    location: 'Sleman, Yogyakarta',
    highlights: [
      'Conducted healthy home inspections, environmental disease epidemiological surveillance, and larvicide surveys.',
      'Mapped clean water sources and sanitation inspection findings for localized risk assessment.'
    ]
  },
  {
    role: 'Hospital Sanitation Field Practice',
    organization: 'RS Bethesda Yogyakarta',
    period: 'Aug 2024 – Oct 2024',
    location: 'Yogyakarta',
    highlights: [
      'Rotated across environmental health units: medical hazardous waste, IPAL, vector control, and indoor air/water testing.',
      'Ensured health facility sanitation aligned with Kepmenkes RI standards.'
    ]
  }
];