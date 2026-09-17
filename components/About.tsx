'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { MapPin, ShieldCheck, ExternalLink, X, CheckCircle2, Maximize2, Minimize2 } from 'lucide-react'

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const backgroundBanner = '/newbanner1.png'

  // --- HTML5 CANVAS INTERACTIVE ---
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

  return (
    <section id="about" className="relative py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800/60 overflow-hidden bg-[#F8FAFC] dark:bg-[#0B1329] transition-colors duration-300">
      
      {/* 1. BACKGROUND LAYERING DENGAN BLUR & FADE EFFECT */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Layer Ambient Blur Lembut */}
        <div className="absolute inset-0 filter blur-2xl opacity-15 dark:opacity-25 scale-105 select-none">
          <Image src={backgroundBanner} alt="About Ambient Fill" fill className="object-cover" />
        </div>

        {/* Layer Foto dengan Smooth Fade (Radial Gradient Mask) */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]">
          <Image
            src={backgroundBanner}
            alt="About Field Backdrop"
            fill
            className="object-cover opacity-25 dark:opacity-35 select-none"
          />
        </div>

        {/* Gradient Overlay Transisi Mulus */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/60 to-[#F8FAFC]/90 dark:from-[#0B1329]/95 dark:via-[#0B1329]/70 dark:to-[#0B1329]/95 pointer-events-none"></div>
      </div>

      {/* 2. HTML5 CANVAS INTERACTIVE */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-60"></canvas>

      <div className="relative z-10">
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs font-bold text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-widest font-mono">
            // Profile Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] dark:text-[#F8FAFC] uppercase tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Kolom Kiri: Foto & Deskripsi Singkat */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white/95 dark:bg-[#1C2541]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col items-center text-center justify-between space-y-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 p-2 w-48 sm:w-56 shrink-0">
              <img
                src="/foto.profil.jpeg"
                alt="Jibakudin Nur"
                className="w-full rounded-xl block object-cover aspect-[4/5]"
              />
            </div>

            <p className="text-[#334155] dark:text-[#94A3B8] text-sm sm:text-base leading-relaxed text-justify font-medium">
              I am an <strong className="text-[#1E293B] dark:text-[#F8FAFC] font-semibold">Applied Environmental Sanitation graduate</strong> from Poltekkes Kemenkes Yogyakarta, completing my study with a <strong className="text-[#16A34A] dark:text-[#4ADE80] font-semibold">Cum Laude predicate (GPA 3.71)</strong>. Through practical field experiences across industrial facilities, hospitals, public health centers, and community programs, I have developed strong competencies in environmental health inspections, waste management systems, and safety compliance.
            </p>
          </motion.div>

          {/* Kolom Kanan: Pendidikan, Coursework, Base, & Sertifikasi */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            
            {/* Pendidikan & Coursework Card */}
            <div className="flex flex-col gap-6 p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-[#1C2541]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex-1">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 overflow-hidden p-2 shadow-inner">
                  <img 
                    src="/logo.polkesyo.png" 
                    alt="Poltekkes Kemenkes Yogyakarta Logo" 
                    className="w-12 h-12 object-contain aspect-square"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-widest font-bold">Education Background</span>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0]">2022 – 2026</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#1E293B] dark:text-[#F8FAFC] leading-tight mb-1">
                    Applied Bachelor (D4) in Environmental Sanitation
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] font-medium">
                    Poltekkes Kemenkes Yogyakarta <span className="text-[#16A34A] dark:text-[#4ADE80] font-bold mx-1">•</span> Cum Laude (GPA 3.71 / 4.00)
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
                <p className="text-[11px] font-bold text-[#64748B] dark:text-[#94A3B8] uppercase tracking-wider mb-3">
                  Core Coursework & Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Public Health", "Community Service", "Occupational Health & Safety (OHS)",
                    "Environmental Management", "Water, Air & Soil Sanitation", "Solid & Hazardous Waste Management",
                    "Vector & Pest Control", "Industrial & Hospital Sanitation", "Food Hygiene & Sanitation",
                    "HACCP", "SMK3 & ISO 45001", "AMDAL / EIA", "Environmental Epidemiology",
                    "Data Analysis & Research Methodology", "GIS & Remote Sensing"
                  ].map((subject, i) => (
                    <span key={i} className="text-[11px] font-semibold px-3 py-1.5 rounded-xl bg-[#F8FAFC] dark:bg-[#0B1329] text-[#334155] dark:text-[#E2E8F0] border border-slate-200 dark:border-slate-700/60 shadow-2xs">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Base / Mobility Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/95 dark:bg-[#1C2541]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-4 shadow-sm">
              <div className="p-3.5 rounded-2xl bg-sky-500/10 text-[#0284C7] dark:text-[#38BDF8] shrink-0"><MapPin className="w-6 h-6" /></div>
              <div>
                <div className="text-[10px] font-mono text-[#64748B] dark:text-[#94A3B8] uppercase tracking-wider font-semibold">Base / Mobility Location</div>
                <div className="text-sm sm:text-base font-bold text-[#1E293B] dark:text-[#F8FAFC]">Magelang & Yogyakarta (Ready To Relocation)</div>
              </div>
            </div>

            {/* Sertifikasi Card */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-3xl bg-gradient-to-r from-emerald-500/10 via-sky-500/5 to-white dark:from-emerald-500/15 dark:via-slate-900 dark:to-[#1C2541] border-2 border-emerald-500/40 dark:border-emerald-500/40 p-6 sm:p-7 shadow-lg overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#16A34A] text-white shrink-0 shadow-md group-hover:rotate-6 transition-transform">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-[#16A34A] dark:text-[#4ADE80] font-mono text-[10px] font-bold tracking-widest uppercase border border-emerald-500/30">
                      Verified National Credential
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-[#1E293B] dark:text-[#F8FAFC] uppercase tracking-tight leading-snug">
                      Level 6 Environmental Health Practitioner Certification
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed font-medium">
                      Officially certified through national competency examination as a mandatory graduation requirement, authorizing professional practice.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer w-full sm:w-auto"
                  >
                    Preview Certificate <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal Popup */}
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
              className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${
                isFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-4xl w-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700 shrink-0">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] dark:text-[#4ADE80]" />
                  <h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">
                    Level 6 Environmental Health Practitioner Certificate (Verified)
                  </h4>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsFullScreen(!isFullScreen)}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                    title={isFullScreen ? "Exit Fullscreen" : "Full Screen"}
                  >
                    {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isFullScreen ? "Normal" : "Fullscreen"}</span>
                  </button>

                  <button
                    onClick={() => { setIsModalOpen(false); setIsFullScreen(false); }}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className={`my-4 relative flex items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-2 border border-slate-200 dark:border-slate-800 overflow-hidden flex-1 ${isFullScreen ? 'h-full' : ''}`}>
                <img
                  src="/preview_serkom.png" 
                  alt="Serkom Jibaku Preview"
                  className={`object-contain rounded-lg shadow-md select-none pointer-events-none transition-all ${
                    isFullScreen ? 'max-h-[85vh] w-auto' : 'max-h-[65vh]'
                  }`}
                />
                
                <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none select-none opacity-25">
                  <div className="flex justify-between w-full text-[10px] font-mono tracking-widest uppercase text-slate-900 dark:text-white font-bold">
                    <span>JIBAKUDIN NUR</span>
                    <span>FOR RECRUITMENT ONLY</span>
                  </div>
                  <div className="text-center transform -rotate-6">
                    <span className="text-sm sm:text-lg font-black tracking-widest text-slate-900 dark:text-white uppercase">
                      VERIFIED CREDENTIAL • JIBAKUDIN NUR
                    </span>
                  </div>
                  <div className="flex justify-between w-full text-[10px] font-mono tracking-widest uppercase text-slate-900 dark:text-white font-bold">
                    <span>FOR RECRUITMENT ONLY</span>
                    <span>POLTEKKES YOGYAKARTA</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono shrink-0">
                <span>Status: Official Credential Preview</span>
                <span>Secure Document Viewer</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}