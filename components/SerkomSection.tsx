'use client'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

export default function SerkomSection() {
  const certifications = [
    {
      title: "Sertifikat Kompetensi Tenaga Sanitasi Lingkungan Level 6",
      issuer: "Kolegium Kesehatan Lingkungan & Poltekkes Kemenkes Yogyakarta",
      number: "Nomor: 002396/K065/B05/07/09/2026",
      date: "September 07, 2026",
      description: "Official competency certificate declaring qualification and authorization as a Level 6 Environmental Health Practitioner.",
      link: "/Serkom_jibaku.pdf"
    }
  ]

  return (
    <section id="certifications" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60">
      <div className="flex flex-col items-start gap-2 mb-10">
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
          // Credentials & Licenses
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          Professional Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-emerald-500/40 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Verified Competency
                  </span>
                  <span className="text-xs font-mono text-slate-400">{cert.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400">
                  {cert.issuer}
                </p>
                <p className="text-xs font-mono text-slate-500 pt-1">
                  {cert.number}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-2">
                  {cert.description}
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm w-full md:w-auto"
              >
                View Certificate <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}