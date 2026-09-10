export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export const certificationsData: Certification[] = [
  {
    title: 'POPAL Competency-Based Training (Wastewater Treatment)',
    issuer: 'LPK Damai Semesta Jiwa & Poltekkes Kemenkes Yogyakarta',
    year: '2024',
    description: 'Certified operational management for industrial and facility wastewater treatment plants.'
  },
  {
    title: 'Healthcare Facility OHS / K3 Fasyankes',
    issuer: 'PT. Nata Supervisi (PT. NEVIS)',
    year: '2025',
    description: 'Specialized training on health and safety implementation in hospital environments.'
  },
  {
    title: 'UKL-UPL Document Preparation Training',
    issuer: 'LPP Wana Wiyata Yogyakarta',
    year: '2024',
    description: 'Technical guidance on environmental management and monitoring document drafting.'
  },
  {
    title: 'Health Entomology & Vector Control Training',
    issuer: 'PT. NEVIS & Poltekkes Kemenkes Yogyakarta',
    year: '2024'
  },
  {
    title: 'Early Fire Prevention Training',
    issuer: 'Dinas Pemadam Kebakaran dan Penyelamatan Kota Yogyakarta',
    year: '2023'
  },
  {
    title: 'Emergency Water & Sanitation Simulation',
    issuer: 'BPBD Kabupaten Sleman',
    year: '2024'
  }
];