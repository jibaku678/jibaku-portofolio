'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  X, Printer, ShieldCheck, Leaf, HeartPulse, MapPin, 
  Microscope, HardHat, Globe2, Wind, ChevronDown, ListOrdered
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

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(2, 132, 199, 0.5)' 
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
            ctx.strokeStyle = `rgba(22, 163, 74, ${0.2 * (1 - dist / 110)})`
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
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.35 * (1 - mdist / 180)})`
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
    { Icon: ShieldCheck, color: "text-sky-500/20", size: 56, startX: "5%", startY: "15%", duration: 25 },
    { Icon: HardHat, color: "text-emerald-500/20", size: 48, startX: "85%", startY: "80%", duration: 22 },
    { Icon: Leaf, color: "text-emerald-500/20", size: 72, startX: "88%", startY: "15%", duration: 30 },
    { Icon: Wind, color: "text-sky-400/20", size: 40, startX: "15%", startY: "45%", duration: 24 },
    { Icon: HeartPulse, color: "text-emerald-400/20", size: 48, startX: "80%", startY: "60%", duration: 22 },
    { Icon: Microscope, color: "text-sky-300/20", size: 54, startX: "25%", startY: "85%", duration: 26 },
    { Icon: MapPin, color: "text-emerald-600/20", size: 80, startX: "12%", startY: "75%", duration: 28 },
    { Icon: Globe2, color: "text-sky-500/20", size: 60, startX: "55%", startY: "70%", duration: 27 },
  ]

  const portfolioIndex = [
    { num: '01', title: 'Selected Work', href: '#projects' },
    { num: '02', title: 'About & Profile', href: '#about' },
    { num: '03', title: 'Experience', href: '#experience' },
    { num: '04', title: 'Skills', href: '#skills' },
    { num: '05', title: 'Contact', href: '#contact' },
  ]

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#FFFFFF] dark:bg-[#0B1329] transition-colors duration-300 pt-28 pb-16">
      
      {/* 1. BACKGROUND DENGAN LIGHT & DARK MODE PALETTE */}
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
            <div className="absolute inset-0 filter blur-sm opacity-10 dark:opacity-20 scale-105 select-none">
              <Image src={backgrounds[bgIndex]} alt="Ambient Fill" fill className="object-cover" />
            </div>

            <div className="absolute inset-0 w-full h-full flex items-center justify-center p-2 sm:p-6">
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
              >
                <Image
                  src={backgrounds[bgIndex]}
                  alt="Jibakudin Nur Field Canvas"
                  fill
                  className="object-contain opacity-25 dark:opacity-35 select-none"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF]/90 via-[#F8FAFC]/80 to-[#FFFFFF] dark:from-[#0B1329]/90 dark:via-[#1C2541]/80 dark:to-[#0B1329] pointer-events-none"></div>
      </div>

      {/* 2. CANVAS & FLOATING ICONS */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-40 dark:opacity-60"></canvas>
      
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
        
        {/* Open to Opportunities (Tanpa Padding Kotak Berlebihan) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#16A34A] dark:text-[#4ADE80] uppercase border-b-2 border-[#16A34A]/40 dark:border-[#4ADE80]/40 pb-1">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] dark:bg-[#4ADE80] animate-pulse"></span> 
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name & Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3 mb-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
            JIBAKUDIN NUR
          </h1>
          <h2 className="text-xs sm:text-sm font-bold text-[#0284C7] dark:text-[#38BDF8] flex items-center justify-center gap-2 uppercase tracking-widest">
            Environmental Health • HSE • Public Health Research
          </h2>
        </motion.div>

        {/* Paragraph */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mb-6"
        >
          <p className="text-sm sm:text-base text-[#475569] dark:text-[#94A3B8] leading-relaxed font-medium">
            Bachelor Applied (D4) in Environmental Sanitation specialized in systematic field risk assessment, spatial epidemiological analysis, and industrial HSE systems—dedicated to executing high-impact workplace safety and public health initiatives.
          </p>
        </motion.div>

        {/* Tech Stack / Skills (Menggunakan Logo Asli dari Folder Public: ArcGIS, SPSS, Office) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-y-2 gap-x-4 text-xs font-bold text-[#0F172A] dark:text-[#F8FAFC] uppercase mb-8"
        >
          <span className="flex items-center gap-2 bg-[#F8FAFC] dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg shadow-xs">
            <div className="relative w-4 h-4">
              <Image src="/arcgis_logo.png" alt="ArcGIS" fill className="object-contain" />
            </div>
            ArcGIS
          </span>

          <span className="flex items-center gap-2 bg-[#F8FAFC] dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg shadow-xs">
            <div className="relative w-4 h-4">
              <Image src="/spss_logo.png" alt="SPSS" fill className="object-contain" />
            </div>
            SPSS
          </span>

          <span className="flex items-center gap-2 bg-[#F8FAFC] dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg shadow-xs">
            <div className="relative w-4 h-4">
              <Image src="/office_logo.jpg" alt="MS Office" fill className="object-contain rounded-xs" />
            </div>
            MS Office
          </span>
        </motion.div>

        {/* Buttons (SUMMARY & PORTOFOLIO) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-sm mx-auto mb-8"
        >
          <button
            onClick={() => setIsSummaryModalOpen(true)}
            className="flex-1 flex items-center justify-center px-6 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369a1] text-[#FFFFFF] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            SUMMARY
          </button>

          <a
            href="#projects"
            className="flex-1 flex items-center justify-center px-6 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#1C2541] border border-slate-300 dark:border-slate-700 text-[#0F172A] dark:text-[#F8FAFC] hover:border-[#0284C7] font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
          >
            PORTOFOLIO
          </a>
        </motion.div>

        {/* DAFTAR ISI PORTFOLIO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-xl bg-[#F8FAFC] dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700/80 rounded-xl p-3.5 shadow-xs"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-700 text-[11px] font-bold text-[#0F172A] dark:text-[#F8FAFC] uppercase tracking-widest px-1">
            <span className="flex items-center gap-1.5">
              <ListOrdered className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" /> Daftar Isi
            </span>
            <span className="text-[9px] font-mono text-[#475569] dark:text-[#94A3B8]">HRD Guide</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
            {portfolioIndex.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex flex-col items-center sm:items-start p-1.5 rounded-lg bg-white dark:bg-[#0B1329] hover:bg-sky-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 transition-all group"
              >
                <span className="text-[9px] font-mono text-[#0284C7] dark:text-[#38BDF8] font-bold">{item.num}</span>
                <span className="text-[11px] font-bold text-[#0F172A] dark:text-[#F8FAFC] group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors text-center sm:text-left mt-0.5">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-3 z-[10] flex flex-col items-center gap-1 text-[#475569] dark:text-[#94A3B8] animate-bounce pointer-events-none"
      >
        <ChevronDown className="w-4 h-4 opacity-80" />
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
              className="relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 text-[#0F172A] dark:text-[#F8FAFC] z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700 sticky top-0 bg-white dark:bg-[#1C2541] z-10">
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] uppercase tracking-wider">
                  Executive Professional Summary
                </h3>
                <button
                  onClick={() => setIsSummaryModalOpen(false)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-3 rounded-lg bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs font-mono text-[#0284C7] dark:text-[#38BDF8] flex justify-between items-center">
                <span>Generated real-time on: <strong>{currentDate}</strong></span>
                <span className="bg-sky-100 dark:bg-sky-900 px-2 py-0.5 rounded text-[10px] font-bold">VERIFIED</span>
              </div>

              <div className="space-y-4 text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                <div className="bg-[#F8FAFC] dark:bg-[#0B1329] p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-widest">// Profile Overview</h4>
                  <p className="text-[#0F172A] dark:text-[#F8FAFC]">
                    Bachelor Applied (D4) in Environmental Sanitation berpredikat <strong className="text-[#0284C7] dark:text-[#38BDF8]">Cum Laude (GPA 3.71)</strong> dengan spesialisasi komprehensif pada bidang <strong className="text-[#0284C7] dark:text-[#38BDF8]">Environmental Health, Industrial HSE, GIS Spatial Risk Analysis, serta Public Health Research</strong>. Berpengalaman dalam merancang investigasi epidemiologi, surveilans vektor penyakit, serta analisis data kesehatan masyarakat berbasis bukti ilmiah untuk mendukung intervensi lintas sektor yang efektif.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] dark:bg-[#0B1329] p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-widest">// Core Technical Competencies & Tools</h4>
                  <p className="text-[#0F172A] dark:text-[#F8FAFC]">
                    Menguasai evaluasi higiene industri (pengukuran kebisingan, pencahayaan, ergonomi), manajemen limbah dan WWTP (POPAL), pemetaan spasial dan pemodelan risiko menggunakan <strong className="text-[#0284C7] dark:text-[#38BDF8]">ArcGIS</strong>, pengolahan data statistik dengan <strong className="text-[#0284C7] dark:text-[#38BDF8]">SPSS</strong>, serta investigasi epidemiologi lapangan lintas sektor.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] dark:bg-[#0B1329] p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-widest">// Key Professional Experience</h4>
                  <p className="text-[#0F172A] dark:text-[#F8FAFC]">
                    Memiliki pengalaman praktis melalui magang industri dan kesehatan di PT Dua Kelinci Pati (Industrial Hygiene & OHS) dan RS Bethesda Yogyakarta (Healthcare Facility OHS), serta riset mandiri analisis spasial leptospirosis di Bantul.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] dark:bg-[#0B1329] p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-widest">// Verified Certifications & Training</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#0F172A] dark:text-[#F8FAFC]">
                    <li>Sertifikasi Kompetensi Operator Instalasi Pengolahan Air Limbah (POPAL) — LPK Damai Semesta Jiwa</li>
                    <li>Pelatihan K3 Fasilitas Pelayanan Kesehatan (Fasyankes) — PT. NEVIS</li>
                    <li>Pelatihan Pencegahan Dini Kebakaran & Tanggap Darurat — Damkar Kota Yogyakarta</li>
                    <li>Simulasi Penanganan Air Darurat & Sanitasi Bencana — BPBD Sleman</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700 sticky bottom-0 bg-white dark:bg-[#1C2541] z-10">
                <span className="text-xs font-mono text-[#475569] dark:text-[#94A3B8]">Jibakudin Nur • Live Portfolio Summary</span>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[#0F172A] dark:text-[#F8FAFC] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
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