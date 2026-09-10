'use client'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      period: "August – October 2025",
      role: "Industrial Field Practice | Environmental Health & K3",
      location: "PT Dua Kelinci, Pati",
      description: "Supported industrial environmental health and OHS operational activities.",
      highlights: [
        "Supported K3/HSE activities through hazard identification and risk assessment using HIRADC and JSA, work permits, safety patrols, and safe work practices.",
        "Studied fire emergency preparedness through evacuation route planning and placement of fire alarms, hydrants, and fire extinguishers, including hands-on APAR and hydrant practice.",
        "Studied workplace accident investigation and incident report preparation, as well as safety signs, SOPs, MSDS, and risk management.",
        "Gained exposure to B3 waste, wastewater, air emissions, WWTP, and clean and drinking water management.",
        "Studied RKL-RPL/AMDAL and PROPER and their application in industrial environmental management.",
        "Supported food hygiene and sanitation aspects within the industrial setting.",
        "Prepared an aerated grit chamber drawing as part of wastewater treatment system practice."
      ]
    },
    {
      period: "April – May 2025",
      role: "Community Health Center Field Practice | Environmental Health",
      location: "Godean II Community Health Center, Sleman, Yogyakarta",
      description: "Conducted field activities in a primary healthcare setting focusing on sanitation and disease epidemiology.",
      highlights: [
        "Conducted healthy-house inspections and assessed environmental sanitation conditions in the community.",
        "Participated in epidemiological investigations of environmentally based diseases and field data collection.",
        "Participated in Jumantik activities, health education, and Jumantik Cilik training.",
        "Conducted larval surveys, including Anopheles larval surveys as required by field activities.",
        "Mapped community clean-water sources and healthy-house inspection results to support environmental health problem identification.",
        "Supported community-based environmental health activities within the scope of environmental health services."
      ]
    },
    {
      period: "August – October 2024",
      role: "Hospital Field Practice | Environmental Health Installation",
      location: "Bethesda Hospital, Yogyakarta",
      description: "Completed clinical rotations across hospital environmental management units.",
      highlights: [
        "Participated in the Environmental Health Installation through rotation across several hospital environmental management units.",
        "Gained exposure to medical B3 and non-B3 solid waste management, sanitation and pest control, and clean and drinking water management.",
        "Participated in environmental laboratory and wastewater treatment plant activities.",
        "Studied hospital environmental health management through operational activities, monitoring, and environmental factor control."
      ]
    },
    {
      period: "March – April 2024",
      role: "Institutional Field Practice | Environmental Health",
      location: "Magelang District Health Office, Magelang",
      description: "Applied environmental sanitation principles within a government institutional setting.",
      highlights: [
        "Gained exposure to environmental health management within a government institution supporting community health.",
        "Participated in activities related to environmental health management, health risk management, coordination, administration, and activity reporting.",
        "Studied workflow and coordination of environmental health programs within a government institution."
      ]
    },
    {
      period: "January – February 2026",
      role: "Community Field Practice | Community Empowerment",
      location: "Ngentak Hamlet, Argorejo, Sedayu, Bantul, Yogyakarta",
      description: "Executed community-level environmental health interventions and local empowerment initiatives.",
      highlights: [
        "Identified environmental health problems with community members and developed empowerment activities based on local needs.",
        "Delivered food hygiene and sanitation education for food handlers/UMKM and environmental health education activities.",
        "Conducted Jumantik Cilik training and environmental behavior education for children through tutoring, sanitation snakes-and-ladders games, and educational film screenings.",
        "Supported provision of simple water filters to address household hard-water issues.",
        "Supported waste donation activities and youth involvement in waste management based on the 5R principles.",
        "Coordinated with community members in planning and implementing environmental empowerment activities."
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