'use client'
import { Mail, Phone, MapPin, Linkedin, Download, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-12 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-4">
            <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold tracking-widest border border-emerald-500/20 rounded uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Let's Connect & Collaborate
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Open to professional opportunities in HSE/K3, Environmental Health, GIS Analysis, and Research. Based in Magelang & Yogyakarta, ready for placement anywhere.
            </p>

            <div className="space-y-3 pt-2">
              <a href="mailto:jibaku40@gmail.com" className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 hover:text-emerald-600">
                <Mail className="w-4 h-4 text-emerald-500" /> jibaku40@gmail.com
              </a>
              <a href="tel:085641756875" className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 hover:text-emerald-600">
                <Phone className="w-4 h-4 text-amber-500" /> 0856-4175-6875
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-blue-500" /> Magelang / Yogyakarta, Indonesia (Open to Relocation)
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-1">
              Recruiter Quick Actions
            </h3>

            <a
              href="/CV_ATS_Master_Jibakudin_Nur_Indonesia.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
             <a
  href="/CV_Jibakudin_Nur_Indonesia.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Download Official CV
</a>
              </span>
              <span>PDF</span>
            </a>

            <a
              href="https://linkedin.com/in/jibakudin-nur"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-blue-500" /> Connect on LinkedIn
              </span>
              <Send className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}