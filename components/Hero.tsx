'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Download, Briefcase, CheckCircle2, Sparkles, X, Calendar, Printer, Award, FileText } from 'lucide-react'

export default function Hero() {
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false)

  // Tanggal real-time otomatis berdasarkan sistem browser
  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const handlePrint = () => {
    window.print()
  }

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 py-16 md:py-24 border-b border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-widest border border-emerald-300 dark:border-emerald-500/30 rounded-full uppercase flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> 
                Open to Opportunities
              </span>
              <span className="px-3 py-1.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold tracking-widest border border-slate-300 dark:border-slate-700 rounded-full uppercase">
                GPA 3.71 (Cum Laude)
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                JIBAKUDIN NUR
              </h1>
              
              <h2 className="text-lg sm:text-xl font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-2 uppercase tracking-wide">
                Environmental Health • GIS • HSE Compliance
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed border-l-2 border-emerald-500 dark:border-emerald-500 pl-4 mt-2">
              Applied Environmental Sanitation graduate focused on field risk assessment, spatial data analysis, and environmental health compliance to support industrial safety and public health initiatives.
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-4 text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> ArcGIS</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> SPSS</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> MS Office</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Figma</span>
            </div>

            {/* Tombol Aksi Lengkap: Download ATS & Generate Summary */}
            <div className="flex flex-wrap gap-4 pt-4 w-full">
              <a
                href="/CV_JIBAKUDIN_NUR_fix_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-600/20 cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download ATS Resume
              </a>

              <button
                onClick={() => setIsSummaryModalOpen(true)}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" /> Generate Summary
              </button>

              <a
                href="#projects"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 hover:border-amber-500 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Briefcase className="w-4 h-4" /> View Portfolio
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative"
          >
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-200 dark:bg-slate-900 shadow-xl group flex items-center justify-center">
              <Image
                src="/BANNER.jpg" 
                alt="Jibakudin Nur Field Practice"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Modal Comprehensive Real-Time Summary (Merangkum Seluruh Info Web) */}
      <AnimatePresence>
        {isSummaryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setIsSummaryModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 text-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 sticky top-0 bg-slate-900 z-10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                    Comprehensive Professional Portfolio Summary
                  </h3>
                </div>
                <button
                  onClick={() => setIsSummaryModalOpen(false)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Real-time Date Badge */}
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Generated real-time on: <strong>{currentDate}</strong></span>
              </div>

              {/* Bagian 1: Identitas & Ringkasan Utama */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">// 1. Profile Overview</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white">Jibakudin Nur</strong> merupakan lulusan Sarjana Terapan Sanitasi Lingkungan dengan predikat <span className="text-emerald-400 font-bold">Cum Laude (GPA 3.71)</span>. Memiliki keahlian mendalam di bidang <strong className="text-white">Environmental Health, Industrial HSE Compliance, GIS Spatial Analysis, dan Public Health Research</strong>.
                </p>
              </div>

              {/* Bagian 2: Kompetensi Teknis */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">// 2. Core Technical Competencies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Industrial HSE & Waste Management (WWTP, POPAL)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Spatial Mapping & Risk Analysis (ArcGIS, QGIS)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Vector Surveillance & Epidemiology Research</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Statistical Analysis & Documentation (SPSS, MS Office)</div>
                </div>
              </div>

              {/* Bagian 3: Pengalaman Profesional & Magang */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">// 3. Professional Experience Highlights</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <strong className="text-white block mb-0.5">Industrial Hygiene & OHS Internship — PT Dua Kelinci Pati (2025)</strong>
                    <span>Conducted noise mapping, lighting assessment, ergonomic checks, and evaluated wastewater treatment plant compliance.</span>
                  </li>
                  <li className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <strong className="text-white block mb-0.5">Healthcare Facility OHS Internship — RS Bethesda Yogyakarta (2025)</strong>
                    <span>Managed hospital medical waste sorting, infection control, and indoor air quality monitoring.</span>
                  </li>
                  <li className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <strong className="text-white block mb-0.5">Community Health & Sanitation — Puskesmas Godean II & Prambanan (2024–2026)</strong>
                    <span>Executed community health empowerment, food handler hygiene education, and environmental sanitation inspections.</span>
                  </li>
                </ul>
              </div>

              {/* Bagian 4: Sertifikasi & Pelatihan Terverifikasi */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">// 4. Certified Training & Credentials</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex items-start gap-2">
                    <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>POPAL Competency Training (Wastewater Treatment) — LPK Damai Semesta Jiwa</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex items-start gap-2">
                    <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Healthcare Facility OHS / K3 Fasyankes — PT. NEVIS</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex items-start gap-2">
                    <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Early Fire Prevention Training — Damkar Kota Yogyakarta</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex items-start gap-2">
                    <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Emergency Water & Sanitation Simulation — BPBD Sleman</span>
                  </div>
                </div>
              </div>

              {/* Footer Aksi Modal */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 sticky bottom-0 bg-slate-900 z-10">
                <span className="text-xs font-mono text-slate-500">All data synchronized from live portfolio</span>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" /> Print / Save PDF
                  </button>
                  <a
                    href="/CV_JIBAKUDIN_NUR_fix_1.pdf"
                    download="CV_JIBAKUDIN_NUR.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" /> Download ATS CV
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}