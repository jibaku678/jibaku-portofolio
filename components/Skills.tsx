import { skillsData } from '@/data/skills'
import { CheckCircle2 } from 'lucide-react'

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-500">Core Competencies</span>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1 mb-10">Domain Expertise</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((cat, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                {cat.category}
              </h3>
              <ul className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}