'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Terminal, CheckCircle2, Zap } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      id: "01",
      title: "Kesehatan Lingkungan & K3",
      tag: "ENVIRONMENTAL SAFETY & HSE",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      borderColor: "group-hover:border-emerald-500/50",
      glowColor: "group-hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]",
      skills: [
        "Penyehatan air, udara, dan tanah[cite: 1, 2]",
        "Pengelolaan limbah B3/non-B3, sampah & IPAL[cite: 1, 2]",
        "Sanitasi industri dan rumah sakit[cite: 1, 2]",
        "Higiene sanitasi pangan & HACCP[cite: 1, 2]",
        "Pengendalian vektor & rodent[cite: 1, 2]",
        "UKL-UPL / AMDAL & PROPER[cite: 1, 2]",
        "K3, SMK3, dan ISO 45000[cite: 1, 2]"
      ]
    },
    {
      id: "02",
      title: "Analisis & Riset Spasial",
      tag: "SPATIAL INTELLIGENCE & RESEARCH",
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      borderColor: "group-hover:border-amber-500/50",
      glowColor: "group-hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.2)]",
      skills: [
        "Epidemiologi kesehatan lingkungan[cite: 1, 2]",
        "Laboratorium lingkungan[cite: 1, 2]",
        "Analisis spasial & pemetaan risiko[cite: 1, 2]",
        "Penginderaan jauh (Remote Sensing)[cite: 1, 2]",
        "Analisis statistik & Epi Info[cite: 1, 2]",
        "Penyusunan laporan ilmiah[cite: 1, 2]"
      ]
    },
    {
      id: "03",
      title: "Teknis, Operasional & Tools",
      tag: "SOFTWARE & COMMAND STACK",
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      borderColor: "group-hover:border-cyan-500/50",
      glowColor: "group-hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.2)]",
      skills: [
        "ArcGIS / Google Earth[cite: 1, 2]",
        "SPSS & Epi Info[cite: 1, 2]",
        "AutoCAD dasar (rancangan sanitasi)[cite: 1, 2]",
        "Microsoft Office & Google Workspace[cite: 1, 2]",
        "Canva, Figma, CorelDRAW[cite: 1, 2]",
        "GitHub & Vibe Coding Basic"
      ]
    }
  ]

  return (
    <section id="skills" className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col items-start gap-3 mb-16">
          <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 text-[10px] font-mono font-bold tracking-widest border border-cyan-500/20 rounded uppercase flex items-center gap-1">
            <Zap className="w-3 h-3 animate-pulse" /> SYSTEM MODULES // 02
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Core Competencies & <span className="text-emerald-500">Tech Stack</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Integrated technical skillsets bridging field environmental safety, advanced spatial data analysis, and professional software operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`group relative bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 transition-all duration-300 ${category.borderColor} ${category.glowColor} flex flex-col justify-between`}
            >
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-400 dark:border-slate-700 rounded-tr-xl group-hover:border-emerald-400 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-slate-400 dark:border-slate-700 rounded-bl-xl group-hover:border-emerald-400 transition-colors"></div>

              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 tracking-wider">
                        MODULE {category.id}
                      </span>
                      <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="mb-4 text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">
                  // {category.tag}
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                <span>STATUS: VERIFIED</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:animate-ping"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}