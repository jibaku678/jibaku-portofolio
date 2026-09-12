'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  // Daftar foto untuk slider Research Assistant
  const raImages = [
    "/PROJEK_DOC/RA1.jpeg",
    "/PROJEK_DOC/RA2.jpeg",
    "/PROJEK_DOC/RA3.jpeg",
    "/PROJEK_DOC/RA4.jpeg",
    "/PROJEK_DOC/RA5.jpeg"
  ]

  const [currentIdx, setCurrentIdx] = useState(0)

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === raImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? raImages.length - 1 : prev - 1))
  }

  const experiences = [
    {
      role: "Research Assistant & Field Investigator",
      company: "Academic & Environmental Health Field Projects",
      period: "2024 – 2026",
      location: "Yogyakarta & Central Java",
      description: "Led and assisted rigorous field data collection, environmental sampling, and spatial risk assessments. Managed technical documentations, sanitation facility inspections, and data analytics to support evidence-based public health research.",
      highlights: [
        "Conducted comprehensive field inspections and environmental health sampling across industrial & public facilities.",
        "Utilized ArcGIS and statistical tools (SPSS) to analyze spatial distribution and environmental risk factors.",
        "Collaborated with cross-functional academic teams to formulate structured research reports and safety compliance logs."
      ],
      hasSlider: true // Menandakan pengalaman ini memiliki galeri slider foto
    },
    {
      role: "Community Health Intern (PKL Komunitas)",
      company: "Padukuhan Ngantak, Argorejo, Sedayu",
      period: "January – February 2026",
      location: "Bantul, Yogyakarta",
      description: "Spearheaded community empowerment programs, environmental health education, and appropriate technology implementation for rural sanitation improvement.",
      highlights: [
        "Identified community health problems alongside local residents to formulate targeted empowerment programs.",
        "Introduced simple water filtration systems and conducted CTPS (Handwashing) campaigns.",
        "Developed solid waste management initiatives (sedekah sampah) and promoted 5R principles."
      ],
      hasSlider: false
    }
  ]

  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60">
      <div className="flex flex-col items-start gap-2 mb-12">
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
          // Professional Journey
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          Experience & Fieldwork
        </h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm items-center"
          >
            {/* Kolom Keterangan / Teks Pengalaman */}
            <div className={`space-y-4 ${exp.hasSlider ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase border border-emerald-500/20 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" /> {exp.role}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" /> {exp.period}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {exp.company}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" /> {exp.location}
                </p>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Contributions:</p>
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Kolom Slider Foto (Hanya muncul jika hasSlider bernilai true) */}
            {exp.hasSlider && (
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-md group">
                  
                  {/* Animasi Transisi Slider Foto */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIdx}
                      src={raImages[currentIdx]}
                      alt={`Research Assistant Documentation ${currentIdx + 1}`}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Tombol Navigasi Kiri */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-sm opacity-80 hover:opacity-100 transition-all cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Tombol Navigasi Kanan */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-sm opacity-80 hover:opacity-100 transition-all cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Indikator Angka Slide di Pojok */}
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-md bg-slate-950/70 backdrop-blur-md text-[10px] font-mono text-white font-bold">
                    {currentIdx + 1} / {raImages.length}
                  </div>
                </div>

                {/* Titik Indikator (Dots) di Bawah Slider */}
                <div className="flex items-center gap-1.5 mt-3">
                  {raImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentIdx(dotIdx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        currentIdx === dotIdx ? 'w-6 bg-emerald-500' : 'w-1.5 bg-slate-300 dark:bg-slate-700'
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}