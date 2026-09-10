export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  tools: string[];
  role: string;
  period: string;
  link?: string;
  context: string;
  approach: string[];
  result: string[];
  lessons: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    slug: 'leptospirosis-spatial-risk-analysis',
    title: 'Spatial Risk Analysis of Leptospirosis Transmission',
    category: 'GIS & Epidemiological Research',
    shortDescription: 'Undergraduate Thesis: Spatial risk mapping in Trirenggo & Bangunjiwo based on human cases, rodent density, and environmental factors.',
    tools: ['ArcGIS', 'Google Earth', 'SPSS', 'Epi Info'],
    role: 'Principal Researcher (Skripsi / Final Project)',
    period: '2025 – 2026',
    link; '[http://eprints.poltekkesjogja.ac.id/id/eprint/23531](http://eprints.poltekkesjogja.ac.id/id/eprint/23531)',
    context: 'Leptospirosis remains a significant zoonotic threat in Bantul Regency. This research evaluated transmission risk by integrating epidemiological human case data with field rodent surveillance.',
    approach: [
      'Conducted rodent trapping and surveillance to evaluate Trap Success rates and species distribution.',
      'Collected spatial coordinates of confirmed human cases and rodent presence indicators.',
      'Performed spatial overlay and buffer analysis using ArcGIS to build comprehensive risk zonation maps.',
      'Analyzed environmental health correlates using SPSS and Epi Info.'
    ],
    result: [
      'Successfully mapped high, medium, and low leptospirosis risk zones across Trirenggo and Bangunjiwo.',
      'Graduated with Grade A for the Undergraduate Thesis defense.'
    ],
    lessons: 'Demonstrated the power of GIS in transforming raw field surveillance into actionable public health spatial intelligence.',
    featured: true,
  },
  {
    slug: 'industrial-health-safety-dua-kelinci',
    title: 'Industrial Environmental Health & OHS Implementation',
    category: 'HSE / Industrial Sanitation',
    shortDescription: 'Field practice evaluating HIRADC, JSA, WWTP operations, and environmental compliance in a major food manufacturing industry.',
    tools: ['HIRADC', 'JSA', 'AutoCAD', 'MS Excel'],
    role: 'Industrial HSE & Sanitation Intern',
    period: 'August – October 2025',
    context: 'Conducted field evaluation at PT Dua Kelinci (Pati) focusing on Occupational Health & Safety (OHS/K3), hazardous waste management, and industrial wastewater treatment.',
    approach: [
      'Participated in hazard identification and risk assessment using HIRADC and Job Safety Analysis (JSA).',
      'Assisted in fire safety inspections (APAR, hydrants, evacuation routes) and safety patrols.',
      'Reviewed industrial wastewater treatment plant (WWTP) operations and designed an aerated grit chamber concept using AutoCAD.',
      'Evaluated compliance with RKL-RPL/AMDAL and PROPER environmental standards.'
    ],
    result: [
      'Delivered a comprehensive industrial environmental health & safety report.',
      'Proposed design enhancements for wastewater pre-treatment units.'
    ],
    lessons: 'Gained hands-on practical understanding of industrial safety management systems (SMK3) and environmental compliance.',
    featured: true,
  },
  {
    slug: 'food-handler-hygiene-education-sppg',
    title: 'Food Handler Hygiene Intervention using Video Media',
    category: 'Public Health & Research',
    shortDescription: 'Field research assessing Knowledge, Attitudes, and Practices (KAP) among food handlers in the SPPG Prambanan area.',
    tools: ['SPSS', 'KAP Questionnaire', 'Video Production Tools'],
    role: 'Research Assistant',
    period: 'February – March 2026',
    context: 'Assessed food hygiene and sanitation standards among food service handlers in Prambanan through structured educational video intervention.',
    approach: [
      'Coordinated field administrative permits and stakeholder engagement with SPPG management.',
      'Assisted in brainstorming and scripting educational video content grounded in food sanitation principles.',
      'Executed pre- and post-intervention Knowledge, Attitude, and Practice (KAP) surveys.'
    ],
    result: [
      'Evaluated measurable improvements in food handler sanitation awareness.',
      'Successfully produced targeted visual education media for community food handlers.'
    ],
    lessons: 'Effective health communication requires combining rigorous research metrics with engaging media formats.',
    featured: true,
  }
];