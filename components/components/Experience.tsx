import { experienceData } from '../../data/experience'
import { Briefcase, MapPin } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-500">Career Path</span>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1 mb-10">Practical & Field Experience</h2>

        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 space-y-10">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-brand-600 border-4 border-white dark:border-slate-900" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-brand-600" /> {exp.role}
                </h3>
                <span className="text-xs font-medium text-slate-500">{exp.period}</span>
              </div>

              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                <span>{exp.organization}</span>
                <span>•</span>
                <span className="flex items-center gap-0.5 text-slate-500 font-normal"><MapPin className="w-3 h-3" /> {exp.location}</span>
              </div>

              <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}