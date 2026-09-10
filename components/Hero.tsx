'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download, Briefcase, CheckCircle2 } from 'lucide-react'

export default function Hero() {
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
                Open to Work / Available
              </span>
              <span className="px-3 py-1.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold tracking-widest border border-slate-300 dark:border-slate-700 rounded-full uppercase">
                Cum Laude (GPA 3.71)
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                JIBAKUDIN <span className="text-emerald-600 dark:text-emerald-500">NUR</span>
              </h1>
              
              <h2 className="text-lg sm:text-xl font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-2 uppercase tracking-wide">
                Environmental Health • GIS • HSE Compliance
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed border-l-2 border-emerald-500 dark:border-emerald-500 pl-4 mt-2">
              Transforming complex field data into actionable safety and environmental solutions. I specialize in spatial intelligence, occupational health and safety (HSE), and epidemiological research to ensure industrial compliance and community well-being.
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-4 text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> ArcGIS</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> SPSS</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> MS Office</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Figma</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
              <a
                href="/CV_ATS_Master_Jibakudin_Nur_Indonesia.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]"
              >
                <Download className="w-4 h-4" /> Download ATS Resume
              </a>
              <a
                href="#projects"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-500 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 font-bold text-sm uppercase tracking-wider transition-all"
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
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border-2 border-slate-300 dark:border-slate-700 bg-slate-200 dark:bg-slate-900 shadow-2xl group flex items-center justify-center">
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 pointer-events-none"></div>
              
              <Image
                src="/BANNER.jpg" 
                alt="Jibakudin Nur Professional Field Surveillance"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              
              <div className="absolute bottom-3 right-3 z-20 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-[10px] text-slate-300 font-mono tracking-widest uppercase border border-slate-600/50">
                Data-Driven Field Analytics
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}