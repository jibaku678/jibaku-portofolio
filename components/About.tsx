'use client'
import { motion } from 'framer-motion'
import { Award, MapPin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col items-start gap-3 mb-12">
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold tracking-widest border border-emerald-500/20 rounded uppercase">
            SYSTEM MODULES // 03
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            About <span className="text-emerald-500">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-emerald-500 z-10"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-emerald-500 z-10"></div>
              
              <div className="rounded-xl overflow-hidden shadow-xl border-2 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 p-2">
                <img
                  src="/foto.profil.jpeg"
                  alt="Jibakudin Nur"
                  className="w-56 sm:w-64 rounded-lg block object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            <div className="space-y-4">
              <p>
                I am an <strong className="text-slate-900 dark:text-white font-semibold">Applied Environmental Sanitation graduate</strong> from Poltekkes Kemenkes Yogyakarta, graduating with a <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Cum Laude predicate (GPA 3.71)</strong>[cite: 1, 2]. My professional focus centers on bridging field surveillance, laboratory analytics, and spatial data intelligence.
              </p>
              <p>
                Backed by hands-on fieldwork—ranging from leptospirosis epidemiological modeling to industrial OHS and hospital sanitation audits[cite: 1, 2]—I am driven by a commitment to translate complex field data into proactive, evidence-based safety interventions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Academic Standing</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">GPA 3.71 / Cum Laude[cite: 1, 2]</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Base Location</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Magelang, Central Java[cite: 1, 3]</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}