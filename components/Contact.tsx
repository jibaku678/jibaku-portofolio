import { Mail, Phone, Linkedin, FileText } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Have a project or opportunity? Let's connect.
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          I am actively seeking professional opportunities across HSE/K3, Environmental Management, GIS/Spatial Analysis, and Environmental Research.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="mailto:jibaku40@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-600 text-white text-xs font-semibold hover:bg-brand-700 transition-all"
          >
            <Mail className="w-4 h-4" /> Email Me
          </a>
          <a
            href="https://linkedin.com/in/jibakudin-nur"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold hover:border-brand-500 transition-all"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="/cv/Jibakudin_Nur_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold hover:border-brand-500 transition-all"
          >
            <FileText className="w-4 h-4" /> Download CV
          </a>
        </div>
      </div>
    </section>
  )
}