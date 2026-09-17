'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { MessageSquare, ExternalLink, ChevronLeft, ChevronRight, X, Maximize2, Minimize2 } from 'lucide-react'

export default function FreelanceSection() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const backgroundBanner = '/newbanner1.png'

  // --- HTML5 CANVAS INTERACTIVE (Konsisten dengan section lainnya) ---
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    const particlesCount = 45
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = []

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5,
      })
    }

    let mouseX = -1000
    let mouseY = -1000

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    window.addEventListener('mousemove', handleMouseMove)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      const isDark = document.documentElement.classList.contains('dark')
      const baseAlpha = isDark ? 0.3 : 0.12 

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(2, 132, 199, ${baseAlpha})` 
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(22, 163, 74, ${0.15 * (1 - dist / 110) * (isDark ? 1 : 0.4)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        const mdx = p.x - mouseX
        const mdy = p.y - mouseY
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mdist < 160) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouseX, mouseY)
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * (1 - mdist / 160)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Urutan testimoni (FREE3 di awal sesuai permintaanmu)
  const testimonials: string[] = [
    "/FREELANCE/FREE3.jpeg",
    "/FREELANCE/FREE1.jpeg",
    "/FREELANCE/FREE2.jpeg"
  ]

  const nextSlide = (): void => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  const prevSlide = (): void => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

  return (
    <section id="freelance" className="relative py-20 sm:py-32 w-full bg-[#F8FAFC] dark:bg-[#0B1329] transition-colors duration-300 overflow-hidden border-t border-slate-200/80 dark:border-slate-800/60">
      
      {/* 1. BACKGROUND LAYERING */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 filter blur-2xl opacity-15 dark:opacity-25 scale-105 select-none">
          <Image src={backgroundBanner} alt="Freelance Ambient Fill" fill className="object-cover" />
        </div>

        <div className="absolute inset-0 w-full h-full flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]">
          <Image
            src={backgroundBanner}
            alt="Freelance Field Backdrop"
            fill
            className="object-cover opacity-25 dark:opacity-35 select-none"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/70 to-[#F8FAFC] dark:from-[#0B1329] dark:via-[#0B1329]/75 dark:to-[#0B1329] pointer-events-none"></div>
      </div>

      {/* 2. HTML5 CANVAS INTERACTIVE */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-60"></canvas>

      {/* 3. KONTEN UTAMA */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-start gap-2 mb-10 sm:mb-12">
          <span className="text-xs font-bold text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-widest font-mono">
            // Research & Data Support Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] dark:text-[#F8FAFC] uppercase tracking-tight">
            Freelance Data Analysis & Research Support <span className="text-[#0284C7] dark:text-[#38BDF8] font-normal text-xl sm:text-2xl block sm:inline">| 2025–Present</span>
          </h2>
        </div>

        <div className="bg-white/95 dark:bg-[#1C2541]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1 space-y-4">
            <div className="inline-block px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#16A34A] dark:text-[#4ADE80] text-xs font-bold uppercase tracking-wider font-mono">
              Independent Peer Tutor & Technical Consultant for Final-Year Students
            </div>
            
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] font-medium">
              <li className="flex items-start gap-2.5">
                <span className="text-[#16A34A] dark:text-[#4ADE80] font-bold mt-0.5">•</span>
                <span>Processed and cleaned raw research data into structured, analytical-ready datasets.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#16A34A] dark:text-[#4ADE80] font-bold mt-0.5">•</span>
                <span>Conducted quantitative statistical analysis using SPSS tailored to specific research objectives.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#16A34A] dark:text-[#4ADE80] font-bold mt-0.5">•</span>
                <span>Compiled tables, charts, and data visualizations alongside analytical interpretations within research contexts.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-[#F8FAFC] dark:bg-[#0B1329] text-[#334155] dark:text-[#E2E8F0] text-[11px] font-mono rounded-xl border border-slate-200 dark:border-slate-700/60">SPSS</span>
              <span className="px-3 py-1 bg-[#F8FAFC] dark:bg-[#0B1329] text-[#334155] dark:text-[#E2E8F0] text-[11px] font-mono rounded-xl border border-slate-200 dark:border-slate-700/60">ArcGIS</span>
              <span className="px-3 py-1 bg-[#F8FAFC] dark:bg-[#0B1329] text-[#334155] dark:text-[#E2E8F0] text-[11px] font-mono rounded-xl border border-slate-200 dark:border-slate-700/60">Peer Tutoring</span>
              <span className="px-3 py-1 bg-[#F8FAFC] dark:bg-[#0B1329] text-[#334155] dark:text-[#E2E8F0] text-[11px] font-mono rounded-xl border border-slate-200 dark:border-slate-700/60">Data Cleaning</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" /> View Testimonials (3 Photos)
            </button>
            
            <a
              href="https://script.google.com/macros/s/AKfycbwzwlJ8K4KqUVB2jpHDpZHz3gAM-WoVzNeN_C6JlxcYReXgyoes5CTtv4-DAw4TfRVq/exec"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[#1E293B] dark:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border border-slate-200 dark:border-slate-700/60"
            >
              Open Live Catalog <ExternalLink className="w-4 h-4" />
            </a>
          </div>
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
              className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${
                isFullscreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-4xl w-full'
              }`}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700 shrink-0">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#16A34A] dark:text-[#4ADE80]" />
                  <h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">
                    Client Testimonials ({currentIndex + 1} / {testimonials.length})
                  </h4>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                    title={isFullscreen ? "Exit Fullscreen" : "Full Screen"}
                  >
                    {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isFullscreen ? "Normal" : "Fullscreen"}</span>
                  </button>

                  <button
                    onClick={() => { setIsModalOpen(false); setIsFullscreen(false); }}
                    className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className={`my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1 ${isFullscreen ? 'h-full' : ''}`}>
                <div className={`relative w-full flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md ${isFullscreen ? 'h-[80vh]' : 'h-[60vh]'}`}>
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

                  <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5 mt-3">
                  {testimonials.map((_, dIdx: number) => (
                    <button key={dIdx} onClick={() => setCurrentIndex(dIdx)} className={`h-1.5 rounded-full transition-all cursor-pointer ${currentIndex === dIdx ? 'w-6 bg-[#0284C7]' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`} />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono shrink-0">
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