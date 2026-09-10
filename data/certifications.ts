'use client'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export default function Certifications() {
  const trainingList = [
    {
      title: "Health Crisis Management Simulation in Disaster Situations via Interprofessional Education (IPE)",
      issuer: "Poltekkes Kemenkes Yogyakarta (2024)",
      description: "Simulation training on health crisis management and interprofessional coordination during disaster scenarios."
    },
    {
      title: "Guest Lectures International Conference: Industrial Sanitation",
      issuer: "Poltekkes Kemenkes Yogyakarta & HAKLI (2023)",
      description: "International conference focusing on optimizing human resources and improving industrial sanitation quality[cite: 1]."
    },
    {
      title: "Health Bakti Camp IX (Kemah Bakti Kesehatan)",
      issuer: "Poltekkes Kemenkes Yogyakarta Scout Movement (2023)",
      description: "Community health devotion camp with the theme 'Pramuka Berbudaya, Berbakti Untuk Negeri' in Prambanan[cite: 3]."
    },
    {
      title: "Leadership Basic Training (Latihan Dasar Kepemimpinan)",
      issuer: "Poltekkes Kemenkes Yogyakarta (2022)",
      description: "Soft skills enhancement program focused on patriotic values and national dedication[cite: 2]."
    },
    {
      title: "POPAL Competency-Based Training (Wastewater Treatment)",
      issuer: "LPK Damai Semesta Jiwa & Poltekkes Kemenkes Yogyakarta (2024)",
      description: "Certified operational management for industrial and facility wastewater treatment plants."
    },
    {
      title: "Healthcare Facility OHS / K3 Fasyankes",
      issuer: "PT. Nata Supervisi (PT. NEVIS) (2025)",
      description: "Specialized training on health and safety implementation in hospital environments."
    },
    {
      title: "UKL-UPL Document Preparation Training",
      issuer: "LPP Wana Wiyata Yogyakarta (2024)",
      description: "Technical guidance on environmental management and monitoring document drafting."
    },
    {
      title: "Health Entomology & Vector Control Training",
      issuer: "PT. NEVIS & Poltekkes Kemenkes Yogyakarta (2024)",
      description: "Vector surveillance and pest control management strategies."
    },
    {
      title: "Early Fire Prevention Training",
      issuer: "Dinas Pemadam Kebakaran dan Penyelamatan Kota Yogyakarta (2023)",
      description: "Basic fire safety, prevention, and response protocols."
    },
    {
      title: "Emergency Water & Sanitation Simulation",
      issuer: "BPBD Kabupaten Sleman (2024)",
      description: "Emergency response and sanitation setup during disaster situations."
    }
  ]

  return (
    <section id="certifications" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60">
      <div className="flex flex-col items-start gap-2 mb-10">
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
          // Qualifications
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          Certifications & Training
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trainingList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm flex items-start gap-4 hover:border-emerald-500/40 transition-all"
          >
            <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-emerald-500 shrink-0 mt-1">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                {item.issuer}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 pt-1">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
