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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Kolom Kiri: Foto & Teks Perkenalan Digabung dalam Satu Kotak Rapi */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center space-y-6"
          >
            <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-950 p-1.5 w-44 sm:w-48">
              <img
                src="/foto.profil.jpeg"
                alt="Jibakudin Nur"
                className="w-full rounded-lg block object-cover aspect-[4/5]"
              />
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed text-justify">
              I am an <strong className="text-slate-900 dark:text-white font-semibold">Applied Environmental Sanitation graduate</strong> from Poltekkes Kemenkes Yogyakarta, completing my study with a <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Cum Laude predicate (GPA 3.71)</strong>. Through practical field experiences across industrial facilities, hospitals, public health centers, and community programs, I have developed strong competencies in environmental health inspections, waste management systems, and safety compliance.
            </p>
          </motion.div>

          {/* Kolom Kanan: Kartu Pendidikan, Statistik, & Sertifikasi */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Card Pendidikan */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 overflow-hidden p-1 shadow-inner">
                  <img 
                    src="/logo.polkesyo.png" 
                    alt="Poltekkes Kemenkes Yogyakarta Logo" 
                    className="w-12 h-12 object-contain aspect-square"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-bold">Education Background</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">2022 – 2026</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight mb-1">
                    Applied Bachelor (D4) in Environmental Sanitation
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                    Poltekkes Kemenkes Yogyakarta <span className="text-emerald-600 dark:text-emerald-400 font-bold mx-1">•</span> Cum Laude (GPA 3.71 / 4.00)
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                  Core Coursework & Focus Areas
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Public Health",
                    "Community Service",
                    "Occupational Health & Safety (OHS)",
                    "Environmental Management",
                    "Water, Air & Soil Sanitation",
                    "Solid & Hazardous Waste Management",
                    "Vector & Pest Control",
                    "Industrial & Hospital Sanitation",
                    "Food Hygiene & Sanitation",
                    "HACCP",
                    "SMK3 & ISO 45001",
                    "AMDAL / EIA",
                    "Environmental Epidemiology",
                    "Data Analysis & Research Methodology",
                    "GIS & Remote Sensing"
                  ].map((subject, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid Informasi Akademik & Base */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-sm">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Academic Record</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">GPA 3.71 / Cum Laude</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-sm">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Base / Mobility</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Magelang & Yogyakarta (Relocation Ready)</div>
                </div>
              </div>
            </div>

            {/* Sertifikat Uji Kompetensi Nasional Level 6 */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-2xl bg-gradient-to-r from-emerald-600/15 via-emerald-500/10 to-slate-900/40 dark:from-emerald-500/20 dark:via-emerald-500/10 dark:to-slate-900 border-2 border-emerald-500/50 p-6 shadow-xl overflow-hidden group"
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