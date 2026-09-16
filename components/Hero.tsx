'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  Briefcase, Sparkles, X, Printer, CheckCircle2, 
  ShieldCheck, Leaf, HeartPulse, MapPin, Droplets, Activity,
  Microscope, Satellite, HardHat, Bug, FlaskConical, Radar, Globe2, Wind,
  ChevronDown
} from 'lucide-react'

export default function Hero() {
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false)
  const [bgIndex, setBgIndex] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const backgrounds = ['/newbanner1.png', '/newbanner2.png']

  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const handlePrint = () => {
    window.print()
  }

  // --- AUTO SLIDESHOW BACKGROUND ---
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [backgrounds.length])

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

    const particlesCount = 50
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
        ctx.fillStyle = 'rgba(16, 185, 129, 0.4)' 
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
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.12 * (1 - dist / 110)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      for (let i = clickRipples.length - 1; i >= 0; i--) {
        const ripple = clickRipples[i]
        ripple.radius += 3 
        ripple.alpha -= 0.015 

        if (ripple.alpha <= 0) {
          clickRipples.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(52, 211, 153, ${ripple.alpha})`
        ctx.lineWidth = 1.5
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
    { Icon: ShieldCheck, color: "text-amber-500/15", size: 56, startX: "5%", startY: "15%", duration: 25 },
    { Icon: HardHat, color: "text-amber-500/15", size: 48, startX: "85%", startY: "80%", duration: 22 },
    { Icon: Leaf, color: "text-emerald-500/15", size: 72, startX: "88%", startY: "15%", duration: 30 },
    { Icon: Wind, color: "text-teal-400/15", size: 40, startX: "15%", startY: "45%", duration: 24 },
    { Icon: HeartPulse, color: "text-emerald-400/15", size: 48, startX: "80%", startY: "60%", duration: 22 },
    { Icon: Microscope, color: "text-emerald-300/15", size: 54, startX: "25%", startY: "85%", duration: 26 },
  ]

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-slate-900 dark:bg-slate-950 transition-colors duration-300 py-16">
      
      {/* 1. BACKGROUND FOTO UTUH MENYELURUH (Tanpa Terpotong & Merata) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Layer Blur Ambient untuk menutup semua sisi luar agar merata */}
            <div className="absolute inset-0 filter blur-3xl opacity-30 dark:opacity-20 scale-110">
              <Image
                src={backgrounds[bgIndex]}
                alt="Ambient Background Fill"
                fill
                className="object-cover"
              />
            </div>

            {/* Layer Utama: Foto tampil utuh 100% (object-contain) di tengah */}
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <div className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center">
                <Image
                  src={backgrounds[bgIndex]}
                  alt="Jibakudin Nur Field Canvas"
                  fill
                  className="object-contain opacity-35 dark:opacity-30 select-none"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Gradasi Lembut agar menyatu dengan tema web */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900 dark:from-slate-950/90 dark:via-slate-950/85 dark:to-slate-950"></div>
      </div>

      {/* 2. CANVAS & FLOATING ICONS */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-60"></canvas>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
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

      {/* 3. KARTU KONTEN UTAMA (Glassmorphism Card agar Teks Terbaca Super Jelas & Rapi) */}
      <div className="relative z-[10] w-full max-w-4xl mx-auto px-4 sm:px-6 z-10">
        <div className="bg-white/80 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col items-center text-center">
          
          {/* Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-3 mb-5"
          >
            <span className="px-3.5 py-1.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-widest border border-emerald-500/20 rounded-full uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> 
              Open to Opportunities
            </span>
            <span className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold tracking-widest border border-slate-200 dark:border-slate-700 rounded-full uppercase">
              GPA 3.71 (Cum Laude)
            </span>
          </motion.div>

          {/* Name & Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3 mb-5"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-tight">
              JIBAKUDIN NUR
            </h1>
            <h2 className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 flex items-center justify-center gap-2 uppercase tracking-wider">
              Environmental Health • HSE • One Health & Public Health Research
            </h2>
          </motion.div>

          {/* Paragraph (Original Content) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mb-6"
          >
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              Bachelor Applied (D4) in Environmental Sanitation specialized in systematic field risk assessment, spatial epidemiological analysis, and industrial HSE systems—dedicated to executing high-impact workplace safety and public health initiatives.
            </p>
          </motion.div>

          {/* Tech Stack / Skills (Original Content) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-y-2 gap-x-5 text-xs font-extrabold text-slate-700 dark:text-slate-300 uppercase mb-8"
          >
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-4 h-4" /> ArcGIS</span>
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-4 h-4" /> SPSS</span>
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-4 h-4" /> MS Office</span>
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-4 h-4" /> Figma</span>
          </motion.div>

          {/* Buttons (Fungsi Original: Modal & Scroll Anchor) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => setIsSummaryModalOpen(true)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" /> Generate Summary
            </button>

            {/* Anchor Asli Menuju Bagian Bawah Web */}
            <a
              href="#projects"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
            >
              <Briefcase className="w-4 h-4" /> View Portfolio
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 z-[10] flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 animate-bounce pointer-events-none"
      >
        <ChevronDown className="w-5 h-5 opacity-80" />
      </motion.div>

      {/* --- MODAL EXECUTIVE SUMMARY (Original 100%) --- */}
      <AnimatePresence>
        {isSummaryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md pointer-events-auto text-left"
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