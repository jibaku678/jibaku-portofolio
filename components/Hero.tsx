'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download, Map, Activity, Crosshair } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 py-16 md:py-24 border-b border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      {/* Background Grid (Bisa Siang & Malam) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* KOLOM KIRI: Teks & Informasi */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6"
          >
            {/* Badges dengan warna menyesuaikan mode */}
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="px-2 py-1 bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] font-bold tracking-widest border border-amber-300 dark:border-amber-500/20 rounded uppercase">
                01 // Researcher Profile
              </span>
              <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold tracking-widest border border-emerald-300 dark:border-emerald-500/20 rounded uppercase flex items-center gap-1">
                <Activity className="w-3 h-3" /> Status: Active
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                JIBAKUDIN <span className="text-emerald-600 dark:text-emerald-500">NUR</span>
              </h1>
              <h2 className="text-lg sm:text-xl font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-2 uppercase tracking-wide">
                <Map className="w-5 h-5" /> Spatial Analysis & Environmental Health
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed border-l-2 border-slate-300 dark:border-slate-700 pl-4">
              Applied Environmental Sanitation graduate (GPA 3.71 / Cum Laude). Specializing in field risk assessments, epidemiological research methodologies, and spatial data mapping using GIS to deliver actionable community interventions.
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]"
              >
                <Crosshair className="w-4 h-4" /> View Field Reports
              </a>
              <a
                href="/CV_ATS_Master_Jibakudin_Nur_Indonesia.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-500 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
          </motion.div>

          {/* KOLOM KANAN: Ilustrasi */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 relative"
          >
            {/* Ornamen Sudut (Frame) */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-amber-500 dark:border-amber-400 z-10"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-amber-500 dark:border-amber-400 z-10"></div>
            
            {/* Box Gambar */}
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-[0_0_40px_-15px_rgba(16,185,129,0.3)] group">
              {/* Efek scanline */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05))] dark:bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1))] bg-[length:100%_4px] z-10 pointer-events-none opacity-50"></div>
              
              <Image
                src="/ilustrasi-lapangan.jpg" // Pastikan namanya file di dalam folder public
                alt="Jibakudin Nur Field Illustration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Label Kecil di bawah gambar */}
            <div className="absolute -bottom-6 right-0 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
              Fig 01. Field Surveillance & Mapping
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}