export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Environmental Health & HSE',
    skills: [
      'Environmental Sanitation Assessment',
      'HIRADC & JSA Risk Management',
      'Vector & Rodent Control',
      'Hazardous & Medical Waste Management',
      'Industrial WWTP / IPAL Monitoring',
      'AMDAL / UKL-UPL Compliance',
      'Food Hygiene & HACCP Standards'
    ]
  },
  {
    category: 'GIS & Spatial Analysis',
    skills: [
      'ArcGIS Pro & Spatial Mapping',
      'Google Earth Spatial Analysis',
      'Disease & Environmental Risk Mapping',
      'Remote Sensing Basics'
    ]
  },
  {
    category: 'Research & Data Analysis',
    skills: [
      'Environmental Epidemiology',
      'Field Surveillance & Enumeration',
      'SPSS Statistical Analysis',
      'Epi Info Data Processing',
      'KAP (Knowledge, Attitude, Practice) Evaluation',
      'Scientific Reporting & Technical Writing'
    ]
  },
  {
    category: 'Technical Tools & Operations',
    skills: [
      'Microsoft Excel & Office Suite',
      'Basic AutoCAD Drafting',
      'Canva & Figma Design',
      'Event Technical & Live Streaming Setup'
    ]
  }
];