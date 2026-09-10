'use client'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      period: "Jan 2026 - Feb 2026",
      role: "Community Field Practice",
      location: "Padukuhan Ngentak, Bantul[cite: 1, 2]",
      description: "Executed community-level environmental health interventions and education.",
      highlights: [
        "Conducted community health needs assessments and awareness programs[cite: 1, 2].",
        "Assisted in clean water filtration initiatives and waste management campaigns[cite: 1, 2]."
      ]
    },
    {
      period: "Aug 2025 - Oct 2025",
      role: "Industrial Field Practice (HSE & Sanitation)",
      location: "PT Dua Kelinci, Pati[cite: 1, 2]",
      description: "Gained direct operational experience in industrial environmental management and OHS protocols.",
      highlights: [
        "Participated in hazard identification and risk assessment (HIRADC/JSA)[cite: 1, 2].",
        "Observed wastewater treatment plant (WWTP) operations and industrial waste management[cite: 1, 2]."
      ]
    },
    {
      period: "Aug 2024 - Oct 2024",
      role: "Hospital Field Practice",
      location: "Bethesda Hospital, Yogyakarta[cite: 1, 2]",
      description: "Rotated through healthcare sanitation units focusing on clinical waste management.",
      highlights: [
        "Monitored medical waste handling, vector control, and clean water standards[cite: 1, 2]."
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
                <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight">
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