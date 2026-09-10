'use client'
import { motion } from 'framer-motion'
import { Award, MapPin, CheckCircle2, ExternalLink } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            // Profile Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            About Me
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
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 p-2">
              <img
                src="/foto.profil.jpeg"
                alt="Jibakudin Nur"
                className="w-56 sm:w-64 rounded-lg block object-cover"
              />
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
                I am an <strong className="text-slate-900 dark:text-white font-semibold">Applied Environmental Sanitation graduate</strong> from Poltekkes Kemenkes Yogyakarta, completing my study with a <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Cum Laude predicate (GPA 3.71)</strong>. My background encompasses public health, environmental monitoring, occupational safety (HSE), and spatial data management.
              </p>
              <p>
                Through practical field experiences across industrial facilities, hospitals, public health centers, and community programs, I have developed practical competencies in environmental health inspections, waste management systems, and safety compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-sm">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Academic Record</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">GPA 3.71 / Cum Laude</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-sm">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Base / Mobility</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Magelang & Yogyakarta (Open to Relocation)</div>
                </div>
              </div>
            </div>

            {/* Highlight Sertifikat Uji Kompetensi Nasional Level 6 */}
            <div className="p-4 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500 text-slate-950 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                    Level 6 Environmental Health Practitioner Certification
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Officially certified through national competency examination as a mandatory graduation requirement.
                  </p>
                </div>
              </div>
              <a
                href="/Serkom_jibaku.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm whitespace-nowrap"
              >
                View Certificate <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}