'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  X, Printer, ShieldCheck, Leaf, HeartPulse, MapPin, 
  Microscope, HardHat, Globe2, Wind, ChevronDown
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

    const particlesCount = 70
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = []

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
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

      // Deteksi light/dark mode untuk opasitas canvas
      const isDark = document.documentElement.classList.contains('dark')
      const baseAlpha = isDark ? 0.4 : 0.15 

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
            ctx.strokeStyle = `rgba(22, 163, 74, ${0.15 * (1 - dist / 110) * (isDark ? 1 : 0.5)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        const mdx = p.x - mouseX
        const mdy = p.y - mouseY
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mdist < 180) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouseX, mouseY)
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.3 * (1 - mdist / 180) * (isDark ? 1 : 0.6)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      for (let i = clickRipples.length - 1; i >= 0; i--) {
        const ripple = clickRipples[i]
        ripple.radius += 3 
        ripple.alpha -= 0.012 

        if (ripple.alpha <= 0) {
          clickRipples.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(74, 222, 128, ${ripple.alpha})`
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
    { Icon: ShieldCheck, color: "text-sky-500/15", size: 56, startX: "5%", startY: "15%", duration: 25 },
    { Icon: HardHat, color: "text-emerald-500/15", size: 48, startX: "85%", startY: "80%", duration: 22 },
    { Icon: Leaf, color: "text-emerald-500/15", size: 72, startX: "88%", startY: "15%", duration: 30 },
    { Icon: Wind, color: "text-sky-400/15", size: 40, startX: "15%", startY: "45%", duration: 24 },
    { Icon: HeartPulse, color: "text-emerald-400/15", size: 48, startX: "80%", startY: "60%", duration: 22 },
    { Icon: Microscope, color: "text-sky-300/15", size: 54, startX: "25%", startY: "85%", duration: 26 },
    { Icon: MapPin, color: "text-emerald-600/15", size: 80, startX: "12%", startY: "75%", duration: 28 },
    { Icon: Globe2, color: "text-sky-500/15", size: 60, startX: "55%", startY: "70%", duration: 27 },
  ]

  const toolStack = [
    { name: 'ArcGIS', img: '/arcgis_logo.png' },
    { name: 'SPSS', img: '/spss_logo.png' },
    { name: 'MS Office', img: '/office_logo.jpg' },
  ]

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#F8FAFC] dark:bg-[#0B1329] transition-colors duration-300 pt-28 pb-16">
      
      {/* 1. BACKGROUND LAYERING */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* LAYER 1: Background Blur (Ambient glow 50%) */}
            <div className="absolute inset-0">
              <Image 
                src={backgrounds[bgIndex]} 
                alt="Background Ambient" 
                fill 
                className="object-cover filter blur-3xl opacity-30 dark:opacity-40 scale-110 select-none" 
              />
            </div>

            {/* LAYER 2: Foto Asli (Tajam) */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center p-4">
              <motion.div
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full max-w-6xl"
              >
                <Image
                  src={backgrounds[bgIndex]}
                  alt="Jibakudin Nur Field Work"
                  fill
                  className="object-contain opacity-50 dark:opacity-60 select-none"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* LAYER 3: Gradient Mask (Mulus agar foto jelas tapi teks 100% terbaca) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/95 via-[#F8FAFC]/60 to-[#F8FAFC]/95 dark:from-[#0B1329]/95 dark:via-[#0B1329]/70 dark:to-[#0B1329]/95 pointer-events-none"></div>
      </div>

      {/* 2. CANVAS INTERACTIVE */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1]"></canvas>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color}`}
            style={{ left: item.startX, top: item.startY }}
            animate={{ y: [0, -40, 0], x: [0, 30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: item.duration, repeat: Infinity, ease: "linear" }}
          >
            <item.Icon size={item.size} strokeWidth={1.3} />
          </motion.div>
        ))}
      </div>

      {/* 3. KONTEN UTAMA */}
      <div className="relative z-[10] w-full max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        {/* Open to Opportunities */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#16A34A] dark:text-[#4ADE80] uppercase pb-1.5 border-b-[1.5px] border-[#16A34A]/30 dark:border-[#4ADE80]/30 drop-shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] dark:bg-[#4ADE80] animate-pulse"></span> 
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name & Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1E293B] dark:text-[#F8FAFC] leading-tight drop-shadow-sm">
            JIBAKUDIN NUR
          </h1>
          <h2 className="text-[11px] sm:text-sm font-bold text-[#0284C7] dark:text-[#38BDF8] flex items-center justify-center gap-2 uppercase tracking-widest drop-shadow-sm">
            Environmental Health • HSE • Public Health Research
          </h2>
        </motion.div>

        {/* Paragraph */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-sm sm:text-base text-[#334155] dark:text-[#94A3B8] leading-relaxed font-medium drop-shadow-sm">
            Bachelor Applied (D4) in Environmental Sanitation specialized in systematic field risk assessment, spatial epidemiological analysis, and industrial HSE systems—dedicated to executing high-impact workplace safety and public health initiatives.
          </p>
        </motion.div>

        {/* Tech Stack / Skills (Simple Rounded Clean Logo) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-14"
        >
          {toolStack.map((tool, idx) => (
            <div key={idx} className="flex items-center gap-2.5 group">
              {/* Lingkaran Logo Bulat Minimalis */}
              <div className="relative w-8 h-8 bg-white rounded-full shadow-sm border border-slate-200 dark:border-slate-700/60 p-1 flex items-center justify-center transition-transform group-hover:scale-105">
                <Image src={tool.img} alt={tool.name} fill className="object-contain p-1.5" />
              </div>
              <span className="text-[11px] font-bold text-[#334155] dark:text-[#E2E8F0] uppercase tracking-wide">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto"
        >
          <button
            onClick={() => setIsSummaryModalOpen(true)}
            className="flex-1 flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-[#FFFFFF] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_4px_14px_rgba(2,132,199,0.3)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.4)]"
          >
            SUMMARY
          </button>

          <a
            href="#projects"
            className="flex-1 flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent border-[1.5px] border-[#94A3B8] dark:border-slate-600 text-[#1E293B] dark:text-[#F8FAFC] hover:border-[#0284C7] dark:hover:border-[#38BDF8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer bg-white/10 dark:bg-[#1C2541]/10 backdrop-blur-sm"
          >
            VIEW PORTOFOLIO
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 z-[10] flex flex-col items-center gap-1 text-[#64748B] dark:text-[#94A3B8] animate-bounce pointer-events-none"
      >
        <ChevronDown className="w-5 h-5 opacity-80" />
      </motion.div>

      {/* --- MODAL EXECUTIVE SUMMARY --- */}
      <AnimatePresence>
        {isSummaryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md pointer-events-auto text-left"
            onClick={() => setIsSummaryModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#FFFFFF] dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 text-[#1E293B] dark:text-[#F8FAFC] z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700 sticky top-0 bg-[#FFFFFF] dark:bg-[#1C2541] z-10">
                <h3 className="text-base sm:text-lg font-bold text-[#1E293B] dark:text-[#F8FAFC] uppercase tracking-wider">
                  Executive Professional Summary
                </h3>
                <button
                  onClick={() => setIsSummaryModalOpen(false)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-3 rounded-lg bg-sky-50/80 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-800/50 text-xs font-mono text-[#0284C7] dark:text-[#38BDF8] flex justify-between items-center">
                <span>Generated real-time on: <strong>{currentDate}</strong></span>
                <span className="bg-sky-100 dark:bg-sky-900 px-2 py-0.5 rounded text-[10px] font-bold">VERIFIED</span>
              </div>

              <div className="space-y-4 text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                <div className="bg-[#F8FAFC] dark:bg-[#0B1329]/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-widest">// Profile Overview</h4>
                  <p className="text-[#1E293B] dark:text-[#E2E8F0]">
                    Bachelor Applied (D4) in Environmental Sanitation berpredikat <strong className="text-[#0284C7] dark:text-[#38BDF8]">Cum Laude (GPA 3.71)</strong> dengan spesialisasi komprehensif pada bidang <strong className="text-[#0284C7] dark:text-[#38BDF8]">Environmental Health, Industrial HSE, GIS Spatial Risk Analysis, serta Public Health Research</strong>. Berpengalaman dalam merancang investigasi epidemiologi, surveilans vektor penyakit, serta analisis data kesehatan masyarakat berbasis bukti ilmiah untuk mendukung intervensi lintas sektor yang efektif.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] dark:bg-[#0B1329]/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-widest">// Core Technical Competencies & Tools</h4>
                  <p className="text-[#1E293B] dark:text-[#E2E8F0]">
                    Menguasai evaluasi higiene industri (pengukuran kebisingan, pencahayaan, ergonomi), manajemen limbah dan WWTP (POPAL), pemetaan spasial dan pemodelan risiko menggunakan <strong className="text-[#0284C7] dark:text-[#38BDF8]">ArcGIS</strong>, pengolahan data statistik dengan <strong className="text-[#0284C7] dark:text-[#38BDF8]">SPSS</strong>, serta investigasi epidemiologi lapangan lintas sektor.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] dark:bg-[#0B1329]/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-widest">// Key Professional Experience</h4>
                  <p className="text-[#1E293B] dark:text-[#E2E8F0]">
                    Memiliki pengalaman praktis melalui magang industri dan kesehatan di PT Dua Kelinci Pati (Industrial Hygiene & OHS) dan RS Bethesda Yogyakarta (Healthcare Facility OHS), serta riset mandiri analisis spasial leptospirosis di Bantul.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] dark:bg-[#0B1329]/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-widest">// Verified Certifications & Training</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#1E293B] dark:text-[#E2E8F0]">
                    <li>Sertifikasi Kompetensi Operator Instalasi Pengolahan Air Limbah (POPAL) — LPK Damai Semesta Jiwa</li>
                    <li>Pelatihan K3 Fasilitas Pelayanan Kesehatan (Fasyankes) — PT. NEVIS</li>
                    <li>Pelatihan Pencegahan Dini Kebakaran & Tanggap Darurat — Damkar Kota Yogyakarta</li>
                    <li>Simulasi Penanganan Air Darurat & Sanitasi Bencana — BPBD Sleman</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700 sticky bottom-0 bg-[#FFFFFF] dark:bg-[#1C2541] z-10">
                <span className="text-xs font-mono text-[#64748B] dark:text-[#94A3B8]">Jibakudin Nur • Live Portfolio Summary</span>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F1F5F9] dark:bg-slate-800 hover:bg-[#E2E8F0] dark:hover:bg-slate-700 text-[#0F172A] dark:text-[#F8FAFC] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
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