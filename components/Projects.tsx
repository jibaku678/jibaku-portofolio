'use client'
import { motion } from 'framer-motion'
import { ExternalLink, FileText } from 'lucide-react'

export default function Projects() {
  const projectsList = [
    {
      tag: "UNDERGRADUATE THESIS",
      title: "Spatial Risk Analysis of Leptospirosis Transmission",
      description: "Analyzed leptospirosis risk levels based on human cases, rodent population density, and spatial distribution mapping in Trirenggo and Bangunjiwo, Bantul.",
      tools: ["ArcGIS", "Spatial Mapping", "Epidemiology"],
      metric: "Grade: A (Cum Laude)",
      link: "#" // Ubah '#' dengan link file PDF skripsi atau repositori jika ada
    },
    {
      tag: "RESEARCH ASSISTANT",
      title: "Personal Hygiene Education for Food Handlers",
      description: "Supported field data collection, participant coordination, and KAP evaluation for food hygiene education using video media in Prambanan.",
      tools: ["Field Observation", "KAP Assessment", "Coordination"],
      metric: "Completed 2026",
      link: "#"
    },
    {
      tag: "RESEARCH ENUMERATOR",
      title: "Leptospirosis Transmission Prediction Model",
      description: "Served as a research enumerator utilizing the Schnabel method for rodent population capture-recapture and systematic field documentation.",
      tools: ["Vector Surveillance", "Data Documentation"],
      metric: "Completed (2025–2026)",
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60">
      <div className="flex flex-col items-start gap-2 mb-10">
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
          // Research & Case Studies
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          Selected Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsList.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-emerald-500/40 transition-all"
          >
            <div>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {project.tag}
              </span>

              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight my-3">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tools.map((tool, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-mono rounded">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-slate-500">
                <span>{project.metric}</span>
                <a 
                  href={project.link} 
                  className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Document <FileText className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}