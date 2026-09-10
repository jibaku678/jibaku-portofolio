import { certificationsData } from '@/data/certifications'
import { Award } from 'lucide-react'

export default function Certifications() {
  return (
    <section className="py-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-500">Qualifications</span>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1 mb-8">Certifications & Training</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificationsData.map((cert, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 flex items-start gap-3">
              <Award className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{cert.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{cert.issuer} ({cert.year})</p>
                {cert.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{cert.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}