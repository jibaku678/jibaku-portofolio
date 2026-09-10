'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Download, MapPin, Mail, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center md:items-start text-center md:text-left gap-6"
      >
        {/* Foto Profil dengan Border Elegan */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500/80 dark:border-blue-400/80 ring-4 ring-slate-900/10 mx-auto md:mx-0">
          <Image
            src="/foto.profil.jpeg"
            alt="Jibakudin Nur"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Open to Opportunities
        </div>

        <div className="space-y-3 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            JIBAKUDIN NUR
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-brand-600 dark:text-brand-500">
            Environmental Health · Research · GIS & Spatial Analysis
          </p>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed pt-2">
            Applied Environmental Sanitation graduate (GPA 3.71 / Cum Laude) bridging field risk assessment, spatial intelligence, and environmental health data to deliver actionable, evidence-based solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 pt-1">
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Magelang / Yogyakarta, Indonesia</span>
          <a href="mailto:jibaku40@gmail.com" className="flex items-center gap-1 hover:text-brand-600"><Mail className="w-3.5 h-3.5" /> jibaku40@gmail.com</a>
          <a href="https://linkedin.com/in/jibakudin-nur" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-brand-600"><Linkedin className="w-3.5 h-3.5" /> LinkedIn</a>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm transition-all shadow-sm"
          >
            View Case Studies <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="/CV_ATS_Master_Jibakudin_Nur_Indonesia.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 font-medium text-sm transition-all"
          >
            Download CV <Download className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}