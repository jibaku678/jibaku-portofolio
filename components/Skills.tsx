'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Terminal, CheckCircle2 } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Environmental Health & HSE",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      skills: [
        "Water, air, and soil sanitation[cite: 1, 2]",
        "Wastewater and solid waste management[cite: 1, 2]",
        "Industrial and healthcare sanitation[cite: 1, 2]",
        "Food hygiene, sanitation, and HACCP[cite: 1, 2]",
        "Vector and rodent control[cite: 1, 2]",
        "UKL-UPL / AMDAL documentation[cite: 1, 2]",
        "OHS compliance and SMK3[cite: 1, 2]"
      ]
    },
    {
      title: "Analysis & Research",
      icon: <Cpu className="w-5 h-5 text-amber-500" />,
      skills: [
        "Environmental health epidemiology[cite: 1, 2]",
        "Environmental laboratory sampling[cite: 1, 2]",
        "Spatial analysis & risk mapping[cite: 1, 2]",
        "Remote sensing applications[cite: 1, 2]",
        "Statistical processing (SPSS & Epi Info)[cite: 1, 2]",
        "Scientific report writing[cite: 1, 2]"
      ]
    },
    {
      title: "Technical Tools & Software",
      icon: <Terminal className="w-5 h-5 text-blue-500" />,
      skills: [
        "ArcGIS & Google Earth[cite: 1, 2]",
        "SPSS & Epi Info[cite: 1, 2]",
        "AutoCAD (basic facility design)[cite: 1, 2]",
        "Microsoft Office & Google Workspace[cite: 1, 2]",
        "Canva & Figma[cite: 1, 2]",
        "Basic technical coordination"
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60">
      <div className="flex flex-col items-start gap-2 mb-10">
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
          // Technical Competencies
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          Core Skills & Tools
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}