'use client'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      period: "Jan 2026 - Feb 2026",
      role: "Community Field Practice",
      location: "Padukuhan Ngentak, Bantul[cite: 1, 2]",
      description: "Implemented community-based health approaches, food hygiene education for TPP UMKM, and environmental empowerment[cite: 1, 2].",
      highlights: [
        "Conducted community health problem identification and local empowerment initiatives[cite: 1, 2].",
        "Developed simple water filters and promoted waste management with 5R principles[cite: 1, 2]."
      ],
      status: "COMPLETED"
    },
    {
      period: "Aug 2025 - Oct 2025",
      role: "Industrial Field Practice (HSE & Sanitation)",
      location: "PT Dua Kelinci, Pati[cite: 1, 2]",
      description: "Applied OHS/HSE principles, industrial waste management, and environmental management compliance[cite: 1, 2].",
      highlights: [
        "Conducted hazard identification and risk assessment using HIRADC & JSA[cite: 1, 2].",
        "Inspected WWTP units, hazardous waste storage, and drafted aerated grit chamber blueprints[cite: 1, 2]."
      ],
      status: "VERIFIED"
    },
    {
      period: "Aug 2024 - Oct 2024",
      role: "Hospital Field Practice",
      location: "Bethesda Hospital, Yogyakarta[cite: 1, 2]",
      description: "Executed sanitation practices in healthcare facilities focusing on medical waste management and pest control[cite: 1, 2].",
      highlights: [
        "Rotated across environmental units managing B3/non-B3 solid waste and clean water testing[cite: 1, 2]."
      ],
      status: "AUDITED"
    }
  ]

  return (
    <section id="experience" className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col items-start gap-3 mb-16">
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-mono font-bold tracking-widest border border-amber-500/20 rounded uppercase">
            SYSTEM MODULES // 04
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Practical & <span className="text-amber-500">Field Experience</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Real-world track record in industrial HSE compliance, healthcare sanitation, and community environmental fieldwork.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-amber-500/50 transition-all shadow-sm"
            >
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-300 dark:border-slate-700 rounded-tr-xl group-hover:border-amber-400 transition-colors"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                    <Briefcase className="w-3.5 h-3.5" /> {exp.role}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    {exp.location}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" /> {exp.period}
                  </span>
                  <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-md font-bold text-[10px] uppercase border border-emerald-500/20">
                    {exp.status}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 font-medium">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}