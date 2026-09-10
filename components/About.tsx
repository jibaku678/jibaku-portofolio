'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, MapPin, ShieldCheck, ExternalLink, X, FileText } from 'lucide-react'

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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

            {/* Hook / Point of Interest: Sertifikat Uji Kompetensi Nasional Level 6 dengan Lightbox Trigger */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-2xl bg-gradient-to-r from-emerald-600/15 via-emerald-500/10 to-slate-900/40 dark:from-emerald-500/20 dark:via-emerald-500/10 dark:to-slate-900 border-2 border-emerald-500/50 p-6 shadow-xl mt-4 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-600 text-white shrink-0 shadow-md group-hover:rotate-6 transition-transform">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold tracking-widest uppercase border border-emerald-500/30">
                      Verified National Credential
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight leading-snug">
                      Level 6 Environmental Health Practitioner Certification
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Officially certified through national competency examination as a mandatory graduation requirement, authorizing professional practice.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-emerald-500/30 w-full sm:w-auto cursor-pointer"
                  >
                    Preview Certificate <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
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
                  Level 6 Environmental Health Practitioner Certificate
                </h4>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tampilan preview gambar sertifikat */}
              <div className="my-6 flex justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-2 border border-slate-200 dark:border-slate-800">
                <img
                  src="/preview_serkom.png" 
                  alt="Serkom Jibaku Preview"
                  className="max-h-[60vh] object-contain rounded-lg shadow-md"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <a
                  href="/Serkom_jibaku.pdf"
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