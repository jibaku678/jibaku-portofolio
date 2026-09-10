'use client'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      period: "Jan 2026 - Feb 2026",
      role: "Community Field Practice | Community Empowerment",
      location: "Padukuhan Ngentak, Argorejo, Sedayu, Bantul",
      description: "Executed community-level environmental health interventions and local empowerment initiatives.",
      highlights: [
        "Identified environmental health issues with residents and designed community empowerment programs based on local needs.",
        "Conducted food hygiene and sanitation education for SME food handlers (TPP UMKM).",
        "Organized Junior Vector Controller (Jumantik Cilik) training and environmental education games for children.",
        "Supported simple water filtration solutions for hard water issues and promoted waste management via 5R principles."
      ]
    },
    {
      period: "Aug 2025 - Oct 2025",
      role: "Industrial Field Practice | Environmental Health & HSE",
      location: "PT Dua Kelinci, Pati",
      description: "Gained direct operational experience in industrial environmental management and OHS compliance protocols.",
      highlights: [
        "Supported HSE practices through hazard identification and risk assessment (HIRADC, JSA), work permits, safety patrols, and incident investigation.",
        "Studied fire preparedness, evacuation routes, fire extinguisher/hydrant placement, and management of B3, liquid, and gas waste as well as WWTP operations.",
        "Created an aerated grit chamber engineering design layout as part of wastewater treatment system studies."
      ]
    },
    {
      period: "Apr 2025 - May 2025",
      role: "Primary Healthcare Field Practice | Environmental Health",
      location: "Godean II Public Health Center, Sleman, Yogyakarta",
      description: "Executed field activities in primary healthcare settings in compliance with Ministry of Health regulations.",
      highlights: [
        "Conducted healthy housing inspections and epidemiological investigations of environment-based diseases.",
        "Participated in vector control (Jumantik) campaigns, health counseling, and junior vector controller training.",
        "Mapped community clean water sources and healthy house inspection results to identify environmental health issues."
      ]
    },
    {
      period: "Aug 2024 - Oct 2024",
      role: "Hospital Field Practice | Environmental Health Installation",
      location: "Bethesda Hospital, Yogyakarta",
      description: "Completed clinical rotations across hospital environmental management units.",
      highlights: [
        "Gained practical exposure in medical solid waste management (B3 and non-B3), sanitation, pest control, and water supply systems.",
        "Supported environmental laboratory operations and wastewater treatment plant (WWTP) monitoring."
      ]
    },
    {
      period: "Mar 2024 - Apr 2024",
      role: "Institutional Field Practice | Environmental Health",
      location: "Magelang District Health Office",
      description: "Applied environmental sanitation principles within a public health institutional setting.",
      highlights: [
        "Engaged in environmental health management, health risk assessment, coordination, and administrative program reporting."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60">
      <div className="flex flex-col items-start gap-2 mb-10">
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
          // Professional Journey
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          Practical & Field Experience
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  {exp.role}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                  {exp.location}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <Calendar className="w-4 h-4 text-emerald-500" /> {exp.period}
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              {exp.description}
            </p>

            <ul className="space-y-2">
              {exp.highlights.map((item, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}