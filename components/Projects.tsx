'use client'
import { motion } from 'framer-motion'
import { projectsData } from '@/data/projects'
import { ArrowRight, Layers } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-500">Evidence of Work</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">Selected Projects</h2>
          </div>
          <p className="text-xs text-slate-500 max-w-xs">
            Ground-level field studies, spatial analysis, and HSE evaluations with verified outputs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-brand-600 dark:text-brand-400 mb-3">
                  <span className="inline-flex items-center gap-1"><Layers className="w-3.5 h-3.5" /> {project.category}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Langsung paksa arahkan ke link eprints untuk kartu pertama, atau slug untuk lainnya */}
              <a
                href={idx === 0 ? "http://eprints.poltekkesjogja.ac.id/id/eprint/23531" : `/projects/${project.slug}`}
                target={idx === 0 ? "_blank" : "_self"}
                rel={idx === 0 ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors"
              >
                View Case Study <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}