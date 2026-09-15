'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, ExternalLink, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react'

export default function FreelanceSection() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  // Urutan testimoni (FREE3 di awal sesuai permintaanmu)
  const testimonials: string[] = [
    "/FREELANCE/FREE3.jpeg",
    "/FREELANCE/FREE1.jpeg",
    "/FREELANCE/FREE2.jpeg"
  ]

  const nextSlide = (): void => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  const prevSlide = (): void => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60">
      <div className="flex flex-col items-start gap-2 mb-8">
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
          // Research & Data Support Services
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          Freelance Data Analysis & Research Support | 2025–Present
        </h2>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1 space-y-4">
          <div className="inline-block px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Independent Peer Tutor & Technical Consultant for Final-Year Students
          </div>
          
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              Processed and cleaned raw research data into structured, analytical-ready datasets.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              Conducted quantitative statistical analysis using SPSS tailored to specific research objectives.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              Compiled tables, charts, and data visualizations alongside analytical interpretations within research contexts.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-mono rounded">SPSS</span>
            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-mono rounded">ArcGIS</span>
            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-mono rounded">Peer Tutoring</span>
            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-mono rounded">Data Cleaning</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" /> View Testimonials (3 Photos)
          </button>
          
          <a
            href="https://script.google.com/macros/s/AKfycbwzwlJ8K4KqUVB2jpHDpZHz3gAM-WoVzNeN_C6JlxcYReXgyoes5CTtv4-DAw4TfRVq/exec"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            Open Live Catalog <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Modal / Lightbox Foto Testimoni */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${
                isFullscreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-4xl w-full'
              }`}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">
                    Client Testimonials ({currentIndex + 1} / {testimonials.length})
                  </h4>
                </div>
                
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsFullscreen(!isFullscreen)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors cursor-pointer">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => { setIsModalOpen(false); setIsFullscreen(false); }} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className="relative w-full h-[60vh] flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={testimonials[currentIndex]}
                      alt={`Testimonial ${currentIndex + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="max-h-full max-w-full object-contain select-none"
                    />
                  </AnimatePresence>

                  <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5 mt-3">
                  {testimonials.map((_, dIdx: number) => (
                    <button key={dIdx} onClick={() => setCurrentIndex(dIdx)} className={`h-1.5 rounded-full transition-all cursor-pointer ${currentIndex === dIdx ? 'w-6 bg-emerald-500' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`} />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono shrink-0">
                <span>Kutensei Store Feedback</span>
                <span>Secure Gallery Viewer</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}