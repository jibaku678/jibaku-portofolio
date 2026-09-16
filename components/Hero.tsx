'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  Briefcase, Sparkles, X, Printer, MapPin, Mail, ChevronDown 
} from 'lucide-react'

export default function Hero() {
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false)
  const [bgIndex, setBgIndex] = useState(0)

  // Dua foto lapangan murni sebagai kanvas latar belakang (pemanis)
  const backgrounds = ['/newbanner1.png', '/newbanner2.png']

  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const handlePrint = () => {
    window.print()
  }

  // Efek Auto-Slide Background yang sangat halus setiap 6 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [backgrounds.length])

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-slate-950">
      
      {/* 1. BACKGROUND IMAGE CROSSFADE */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={backgrounds[bgIndex]}
            alt="Environmental Health Background"
            fill
            className="object-cover object-center select-none"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. OVERLAY GRADIENT (Agar teks putih terbaca sempurna ala web profesional) */}
      <div className="absolute inset-0 z-0 bg-slate-900/75 dark:bg-slate-950/80 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-50 dark:to-slate-950"></div>

      {/* 3. CENTERED CONTENT (Manusiawi, Bersih, & Elegan) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center mt-10">
        
        {/* Status / Label Tipis */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-6"
        >
          <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 text-[10px] sm:text-xs font-bold tracking-widest border border-emerald-500/30 rounded-full uppercase flex items-center gap-2 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> 
            Open to Opportunities
          </span>
          <span className="px-4 py-1.5 bg-white/10 text-slate-200 text-[10px] sm:text-xs font-bold tracking-widest border border-white/20 rounded-full uppercase backdrop-blur-md">
            GPA 3.71 (Cum Laude)
          </span>
        </motion.div>

        {/* Nama Utama */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white uppercase leading-tight drop-shadow-lg"
        >
          Jibakudin Nur
        </motion.h1>

        {/* Divider Elegan */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-24 h-1 bg-emerald-500 rounded-full my-6 opacity-80"
        ></motion.div>

        {/* Spesialisasi */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg font-semibold text-slate-300 uppercase tracking-widest mb-6 max-w-2xl"
        >
          Environmental Health • Industrial HSE • Public Health Research
        </motion.h2>

        {/* Deskripsi (Singkat & Terpusat) */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-light mb-10"
        >
          Bachelor Applied (D4) in Environmental Sanitation. Specializing in systematic field risk assessment, spatial epidemiological analysis (ArcGIS), and executing high-impact workplace safety initiatives.
        </motion.p>

        {/* Lokasi & Kontak Cepat */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400 mb-10"
        >
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" /> Yogyakarta, Indonesia</span>
          <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-emerald-400" /> jibakudin.nur@example.com</span>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => setIsSummaryModalOpen(true)}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-emerald-500/25"
          >
            <Sparkles className="w-4 h-4" /> Generate Summary
          </button>

          <a
            href="#projects"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Briefcase className="w-4 h-4" /> View Portfolio
          </a>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-slate-400 animate-bounce"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll Down</span>
        <ChevronDown className="w-5 h-5 opacity-70" />
      </motion.div>


      {/* --- MODAL EXECUTIVE SUMMARY --- */}
      <AnimatePresence>
        {isSummaryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md pointer-events-auto text-left"
            onClick={() => setIsSummaryModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 text-slate-200 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 sticky top-0 bg-slate-900 z-10">
                <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                  Executive Professional Summary
                </h3>
                <button
                  onClick={() => setIsSummaryModalOpen(false)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 flex justify-between items-center">
                <span>Generated real-time on: <strong>{currentDate}</strong></span>
                <span className="bg-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-bold">VERIFIED</span>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">// Profile Overview</h4>
                  <p>
                    Bachelor Applied (D4) in Environmental Sanitation berpredikat <strong className="text-white">Cum Laude (GPA 3.71)</strong> dengan spesialisasi komprehensif pada bidang <strong className="text-white">Environmental Health, Industrial HSE, GIS Spatial Risk Analysis, serta Public Health Research & One Health</strong>. Berpengalaman dalam merancang investigasi epidemiologi, surveilans vektor penyakit, serta analisis data kesehatan masyarakat berbasis bukti ilmiah untuk mendukung intervensi lintas sektor yang efektif.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">// Core Technical Competencies & Tools</h4>
                  <p>
                    Menguasai evaluasi higiene industri (pengukuran kebisingan, pencahayaan, ergonomi), manajemen limbah dan WWTP (POPAL), pemetaan spasial dan pemodelan risiko menggunakan <strong className="text-white">ArcGIS</strong>, pengolahan data statistik dengan <strong className="text-white">SPSS</strong>, serta investigasi epidemiologi lapangan lintas sektor.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">// Key Professional Experience</h4>
                  <p>
                    Memiliki pengalaman praktis melalui magang industri dan kesehatan di PT Dua Kelinci Pati (Industrial Hygiene & OHS) dan RS Bethesda Yogyakarta (Healthcare Facility OHS), serta riset mandiri analisis spasial leptospirosis di Bantul.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">// Verified Certifications & Training</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    <li>Sertifikasi Kompetensi Operator Instalasi Pengolahan Air Limbah (POPAL) — LPK Damai Semesta Jiwa</li>
                    <li>Pelatihan K3 Fasilitas Pelayanan Kesehatan (Fasyankes) — PT. NEVIS</li>
                    <li>Pelatihan Pencegahan Dini Kebakaran & Tanggap Darurat — Damkar Kota Yogyakarta</li>
                    <li>Simulasi Penanganan Air Darurat & Sanitasi Bencana — BPBD Sleman</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800 sticky bottom-0 bg-slate-900 z-10">
                <span className="text-xs font-mono text-slate-500">Jibakudin Nur • Live Portfolio Summary</span>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" /> Print / Save PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}