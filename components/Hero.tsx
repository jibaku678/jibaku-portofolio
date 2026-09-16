'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  Briefcase, Sparkles, X, Printer, CheckCircle2, 
  ShieldCheck, Leaf, HeartPulse, MapPin, Droplets, Activity,
  Microscope, Satellite, HardHat, Bug, FlaskConical, Radar, Globe2, Wind,
  Layers
} from 'lucide-react'

export default function Hero() {
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false)
  const [activeCanvas, setActiveCanvas] = useState<1 | 2>(1)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const handlePrint = () => {
    window.print()
  }

  // --- EFEK CANVAS INTERAKTIF (PARTIKEL GIS) ---
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

    const particlesCount = 50
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = []

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.5 + 0.5,
      })
    }

    const clickRipples: { x: number; y: number; radius: number; alpha: number }[] = []

    let mouseX = -1000
    let mouseY = -1000

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const handleMouseClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top
      clickRipples.push({ x: cx, y: cy, radius: 0, alpha: 1 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleMouseClick)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(16, 185, 129, 0.5)' 
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - dist / 100)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        const mdx = p.x - mouseX
        const mdy = p.y - mouseY
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mdist < 150) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouseX, mouseY)
          ctx.strokeStyle = `rgba(52, 211, 153, ${0.3 * (1 - mdist / 150)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      for (let i = clickRipples.length - 1; i >= 0; i--) {
        const ripple = clickRipples[i]
        ripple.radius += 2.5 
        ripple.alpha -= 0.015 

        if (ripple.alpha <= 0) {
          clickRipples.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(52, 211, 153, ${ripple.alpha})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleMouseClick)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const floatingIcons = [
    { Icon: ShieldCheck, color: "text-amber-600/15 dark:text-amber-500/15", size: 56, startX: "5%", startY: "15%", duration: 25 },
    { Icon: HardHat, color: "text-amber-700/15 dark:text-amber-500/15", size: 48, startX: "85%", startY: "80%", duration: 22 },
    { Icon: Leaf, color: "text-emerald-600/15 dark:text-emerald-500/15", size: 72, startX: "88%", startY: "15%", duration: 30 },
    { Icon: Wind, color: "text-teal-600/15 dark:text-teal-400/15", size: 40, startX: "15%", startY: "45%", duration: 24 },
    { Icon: HeartPulse, color: "text-emerald-500/15 dark:text-emerald-400/15", size: 48, startX: "80%", startY: "60%", duration: 22 },
    { Icon: Microscope, color: "text-emerald-600/15 dark:text-emerald-300/15", size: 54, startX: "25%", startY: "85%", duration: 26 },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 py-12 md:py-20 border-b border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 dark:opacity-70"
      ></canvas>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color}`}
            style={{ left: item.startX, top: item.startY }}
            animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: item.duration, repeat: Infinity, ease: "linear" }}
          >
            <item.Icon size={item.size} strokeWidth={1.2} />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* HERO CONTAINER UTAMA */}
        <div className="flex flex-col gap-10">
          
          {/* TOP SECTION: Header Info */}
          <div className="flex flex-col items-start gap-4">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold tracking-widest border border-emerald-500/30 rounded-full uppercase flex items-center gap-2 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> 
                Open to Opportunities
              </span>
              <span className="px-3.5 py-1.5 bg-slate-200/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 text-xs font-extrabold tracking-widest border border-slate-300 dark:border-slate-700 rounded-full uppercase backdrop-blur-md">
                GPA 3.71 (Cum Laude)
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2 max-w-4xl">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
                JIBAKUDIN NUR
              </h1>
              <p className="text-xs sm:text-sm md:text-base font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                Environmental Health • HSE • One Health & Public Health Research
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed border-l-4 border-emerald-500 pl-4 py-1.5 bg-white/70 dark:bg-slate-900/50 backdrop-blur-md rounded-r-xl border-y border-r border-slate-200/60 dark:border-slate-800/60 font-medium">
              Bachelor Applied (D4) in Environmental Sanitation specialized in systematic field risk assessment, spatial epidemiological analysis, and industrial HSE systems—dedicated to executing high-impact workplace safety and public health initiatives.
            </p>

            {/* Core Tech Stack */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase pt-1">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-4 h-4" /> ArcGIS</span>
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-4 h-4" /> SPSS</span>
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-4 h-4" /> MS Office</span>
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-4 h-4" /> Figma</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsSummaryModalOpen(true)}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" /> Generate Summary
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-amber-500 text-slate-900 dark:text-slate-100 font-bold text-xs uppercase tracking-wider shadow-sm transition-colors"
              >
                <Briefcase className="w-4 h-4" /> View Portfolio
              </motion.a>
            </div>

          </div>

          {/* BOTTOM SECTION: Hero Canvas Showcase (Figma Style) */}
          <div className="relative w-full rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-800 bg-slate-900 shadow-2xl group">
            
            {/* Top Bar Floating Control Bar */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800 shadow-lg">
              <span className="text-[10px] font-mono text-slate-400 px-2 uppercase tracking-wider flex items-center gap-1.5 hidden sm:flex">
                <Layers className="w-3.5 h-3.5 text-emerald-400" /> Canvas Stage
              </span>
              <button
                onClick={() => setActiveCanvas(1)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCanvas === 1 
                    ? 'bg-emerald-600 text-white shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                View A
              </button>
              <button
                onClick={() => setActiveCanvas(2)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCanvas === 2 
                    ? 'bg-emerald-600 text-white shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                View B
              </button>
            </div>

            {/* Canvas Main Image Area */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCanvas}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeCanvas === 1 ? "/newbanner1.png" : "/newbanner2.png"}
                    alt="Jibakudin Nur Environmental Health Field Documentation Canvas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300 pointer-events-none">
                <span className="bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800/80 text-[11px]">
                  // REAL FIELD OPERATIONS & RESEARCH
                </span>
                <span className="text-emerald-400 font-bold hidden sm:inline-block">
                  Yogyakarta & Central Java Facilities
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Modal Executive Summary */}
      <AnimatePresence>
        {isSummaryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md pointer-events-auto"
            onClick={() => setIsSummaryModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 text-slate-200 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 sticky top-0 bg-slate-900 z-10">
                <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                  Executive Professional Summary
                </h3>
                <button
                  onClick={() => setIsSummaryModalOpen(false)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 flex justify-between items-center">
                <span>Generated real-time on: <strong>{currentDate}</strong></span>
                <span className="bg-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-bold">VERIFIED</span>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">// Profile Overview</h4>
                  <p>
                    Bachelor Applied (D4) in Environmental Sanitation berpredikat <strong className="text-white">Cum Laude (GPA 3.71)</strong> dengan spesialisasi komprehensif pada bidang <strong className="text-white">Environmental Health, Industrial HSE, GIS Spatial Risk Analysis, serta Public Health Research & One Health</strong>. Berpengalaman dalam merancang investigasi epidemiologi, surveilans vektor penyakit, serta analisis data kesehatan masyarakat berbasis bukti ilmiah untuk mendukung intervensi lintas sektor yang efektif.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">// Core Technical Competencies & Tools</h4>
                  <p>
                    Menguasai evaluasi higiene industri (pengukuran kebisingan, pencahayaan, ergonomi), manajemen limbah dan WWTP (POPAL), pemetaan spasial dan pemodelan risiko menggunakan <strong className="text-white">ArcGIS</strong>, pengolahan data statistik dengan <strong className="text-white">SPSS</strong>, serta investigasi epidemiologi lapangan lintas sektor.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">// Key Professional Experience</h4>
                  <p>
                    Memiliki pengalaman praktis melalui magang industri dan kesehatan di PT Dua Kelinci Pati (Industrial Hygiene & OHS) dan RS Bethesda Yogyakarta (Healthcare Facility OHS), serta riset mandiri analisis spasial leptospirosis di Bantul.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">// Verified Certifications & Training</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    <li>Sertifikasi Kompetensi Operator Instalasi Pengolahan Air Limbah (POPAL) — LPK Damai Semesta Jiwa</li>
                    <li>Pelatihan K3 Fasilitas Pelayanan Kesehatan (Fasyankes) — PT. NEVIS</li>
                    <li>Pelatihan Pencegahan Dini Kebakaran & Tanggap Darurat — Damkar Kota Yogyakarta</li>
                    <li>Simulasi Penanganan Air Darurat & Sanitasi Bencana — BPBD Sleman</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800 sticky bottom-0 bg-slate-900 z-10">
                <span className="text-xs font-mono text-slate-500">Jibakudin Nur • Live Portfolio Summary</span>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" /> Print / Save PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}