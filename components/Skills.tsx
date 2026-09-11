'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, FileText, X, ExternalLink, CheckCircle2 } from 'lucide-react'

export default function Skills() {
  const [isCteflModalOpen, setIsCteflModalOpen] = useState(false)

  const technicalSkills = [
    { 
      category: "Environmental Health & OHS", 
      items: ["Environmental Sanitation", "HSE / K3 Fasyankes", "Wastewater Treatment (POPAL)", "Vector Control & Entomology", "UKL-UPL Document Drafting", "Public Health Research", "Environmental Laboratory"] 
    },
    { 
      category: "Data & Spatial Analysis", 
      items: ["SPSS (Statistical Analysis)", "ArcMap / GIS", "QGIS", "Google Earth", "Looker Studio (Dashboard)", "AutoCAD (Technical Drawing)", "Data Visualization"] 
    },
    { 
      category: "Technical & Productivity Tools", 
      items: ["Microsoft Office Suite", "Google Workspace", "Nitro PDF", "Google Forms & Barcode Systems"] 
    }
  ]

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60">
      <div className="flex flex-col items-start gap-2 mb-10">
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
          // Expertise & Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          Skills & Language Proficiency
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Technical Skills Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technicalSkills.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Language Proficiency & CTEFL Card Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 shadow-lg flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">Language Proficiency</span>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">English (Intermediate)</h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Equipped with formal certification validating working proficiency in English, suitable for professional documentation and cross-cultural technical communication.
            </p>

            <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">CTEFL Score</div>
                <div className="text-sm font-bold text-emerald-400">Score: 460 (Intermediate)</div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => setIsCteflModalOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              View CTEFL Certificate <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for CTEFL Certificate */}
      <AnimatePresence>
        {isCteflModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setIsCteflModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-3xl w-full p-6 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
                  CTEFL English Proficiency Certificate
                </h4>
                <button
                  onClick={() => setIsCteflModalOpen(false)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="my-6 flex justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-2 border border-slate-200 dark:border-slate-800">
                <img
                  src="/Sertifikat_CTEFL_1.png"
                  alt="CTEFL Certificate Preview"
                  className="max-h-[60vh] object-contain rounded-lg shadow-md"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <a
                  href="/Sertifikat_CTEFL.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  Open Full PDF <FileText className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}