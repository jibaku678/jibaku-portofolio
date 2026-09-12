'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ExternalLink, X, CheckCircle2, Calendar, Printer } from 'lucide-react'

export default function Hero() {
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false)

  // Tanggal real-time otomatis berdasarkan waktu akses browser/sistem
  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const handlePrint = () => {
    window.print()
  }

  return (
    <section className="relative pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Kolom Kiri: Teks & Tombol Aksi */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to Opportunities
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-bold border border-slate-700">
              GPA 3.71 (Cum Laude)
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
              Jibakudin Nur
            </h1>
            <p className="text-base sm:text-lg font-mono font-bold text-emerald-400 uppercase tracking-wider">
              Environmental Health • GIS • HSE Compliance
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Applied Environmental Sanitation graduate focused on field risk assessment, spatial data analysis, and environmental health compliance to support industrial safety and public health initiatives.
          </p>

          <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
            <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800">ARCGIS</span>
            <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800">SPSS</span>
            <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800">MS OFFICE</span>
            <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800">FIGMA</span>
          </div>

          {/* Tombol Aksi Utama */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => setIsSummaryModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" /> Generate Summary
            </button>

            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider transition-all"
            >
              View Portfolio <ExternalLink className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Ilustrasi Banner */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
            <img 
              src="/ilustrasi_jibaku.png" 
              alt="Jibakudin Nur Illustration" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>

      {/* Modal Interactive Real-Time Summary */}
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
              className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                    Real-Time Portfolio Summary
                  </h3>
                </div>
                <button
                  onClick={() => setIsSummaryModalOpen(false)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Konten Ringkasan Dinamis */}
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Dibuat otomatis secara real-time pada: <strong>{currentDate}</strong></span>
                </div>

                <p>
                  Saya <strong className="text-white">Jibakudin Nur</strong>, lulusan Sarjana Terapan Sanitasi Lingkungan dengan predikat <span className="text-emerald-400 font-bold">Cum Laude (GPA 3.71)</span> yang aktif mencari peluang kerja di bidang <strong className="text-white">Environmental Health, HSE Compliance, dan GIS/Research</strong>.
                </p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 uppercase font-bold">// Core Competencies</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Industrial HSE Management (HIRADC, JSA, Waste & WWTP Compliance)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Spatial Data Analysis & Mapping using ArcGIS</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Public Health Surveillance, Field Enumeration & Zoonotic Research</li>
                  </ul>
                </div>

                <p className="text-xs text-slate-400">
                  Seluruh dokumen verifikasi, sertifikat resmi ber-watermark, dan riwayat investigasi lapangan tersinkronisasi langsung secara transparan melalui portofolio ini.
                </p>
              </div>

              {/* Footer Aksi */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-500">System Status: Live & Up to Date</span>
                
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
                    Download ATS CV
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