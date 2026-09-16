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
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Kita gunakan kedua banner secara bersamaan untuk mengisi space
  const banner1 = '/newbanner1.png'
  const banner2 = '/newbanner2.png'

  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const handlePrint = () => {
    window.print()
  }

  // --- EFEK: HTML5 CANVAS INTERACTIVE (TETAP DIPERTAHANKAN 100%) ---
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
        ctx.fillStyle = 'rgba(16, 185, 129, 0.6)' 
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
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.2 * (1 - dist / 110)})`
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
          ctx.strokeStyle = `rgba(52, 211, 153, ${0.35 * (1 - mdist / 180)})`
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
        ctx.strokeStyle = `rgba(52, 211, 153, ${ripple.alpha})`
        ctx.lineWidth = 2
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius * 0.7, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(16, 185, 129, ${ripple.alpha * 0.5})`
        ctx.lineWidth = 1
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
    { Icon: ShieldCheck, color: "text-amber-500/20", size: 56, startX: "5%", startY: "15%", duration: 25 },
    { Icon: HardHat, color: "text-amber-500/20", size: 48, startX: "85%", startY: "80%", duration: 22 },
    { Icon: Leaf, color: "text-emerald-500/20", size: 72, startX: "88%", startY: "15%", duration: 30 },
    { Icon: Wind, color: "text-teal-400/20", size: 40, startX: "15%", startY: "45%", duration: 24 },
    { Icon: HeartPulse, color: "text-emerald-400/20", size: 48, startX: "80%", startY: "60%", duration: 22 },
    { Icon: Microscope, color: "text-emerald-300/20", size: 54, startX: "25%", startY: "85%", duration: 26 },
    { Icon: FlaskConical, color: "text-emerald-500/20", size: 42, startX: "65%", startY: "25%", duration: 19 },
    { Icon: MapPin, color: "text-emerald-600/20", size: 80, startX: "12%", startY: "75%", duration: 28 },
    { Icon: Globe2, color: "text-teal-500/20", size: 60, startX: "55%", startY: "70%", duration: 27 },
    { Icon: Satellite, color: "text-emerald-400/20", size: 50, startX: "40%", startY: "10%", duration: 21 },
  ]

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-slate-950">
      
      {/* 1. BACKGROUND FADE MOSAIC (Mengisi ruang kosong) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        
        {/* Mosaic Kiri Atas (Banner 1) */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], x: [0, 10, 0], y: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] sm:w-[50%] sm:h-[60%] opacity-25"
        >
          <Image
            src={banner1}
            alt="Decoration Left"
            fill
            className="object-contain sm:object-cover mix-blend-screen mask-image-radial select-none"
            style={{ maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)' }}
            priority
          />
        </motion.div>

        {/* Mosaic Kanan Bawah (Banner 2) */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], x: [0, -10, 0], y: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[60%] sm:w-[50%] sm:h-[60%] opacity-25"
        >
          <Image
            src={banner2}
            alt="Decoration Right"
            fill
            className="object-contain sm:object-cover mix-blend-screen mask-image-radial select-none"
            style={{ maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)' }}
          />
        </motion.div>

        {/* Mosaic Kiri Bawah (Banner 2) - untuk layar lebar */}
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] hidden sm:block"
        >
          <Image
            src={banner2}
            alt="Decoration Bottom Left"
            fill
            className="object-cover mix-blend-overlay mask-image-radial select-none grayscale"
            style={{ maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 60%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 60%)' }}
          />
        </motion.div>

        {/* Mosaic Kanan Atas (Banner 1) - untuk layar lebar */}
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -top-[5%] -right-[5%] w-[40%] h-[40%] hidden sm:block"
        >
          <Image
            src={banner1}
            alt="Decoration Top Right"
            fill
            className="object-cover mix-blend-overlay mask-image-radial select-none grayscale"
            style={{ maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 60%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 60%)' }}
          />
        </motion.div>

        {/* Gradient Utama (Agar Tengah Gelap & Teks Terbaca) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(2,6,23,0.9)_80%)] pointer-events-none"></div>
      </div>

      {/* 2. CANVAS INTERACTIVE & ICONS */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-70"></canvas>
      
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

      {/* 3. KONTEN UTAMA INFORMASI (100% Sesuai Asli) */}
      <div className="relative z-[10] w-full max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-12 flex flex-col items-center text-center">
        
        {/* Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-6"
        >
          <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest border border-emerald-500/30 rounded-full uppercase flex items-center gap-2 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> 
            Open to Opportunities
          </span>
          <span className="px-4 py-1.5 bg-slate-800/60 text-slate-300 text-xs font-bold tracking-widest border border-slate-700/60 rounded-full uppercase shadow-sm backdrop-blur-sm">
            GPA 3.71 (Cum Laude)
          </span>
        </motion.div>

        {/* Name & Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight drop-shadow-lg">
            JIBAKUDIN NUR
          </h1>
          <h2 className="text-xs sm:text-sm font-bold text-amber-400 flex items-center justify-center gap-2 uppercase tracking-widest drop-shadow-md">
            Environmental Health • HSE • One Health & Public Health Research
          </h2>
        </motion.div>

        {/* Paragraph (Original Content) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mb-8"
        >
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium drop-shadow-md">
            Bachelor Applied (D4) in Environmental Sanitation specialized in systematic field risk assessment, spatial epidemiological analysis, and industrial HSE systems—dedicated to executing high-impact workplace safety and public health initiatives.
          </p>
        </motion.div>

        {/* Tech Stack / Skills (Original Content) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-y-2 gap-x-5 text-[11px] sm:text-xs font-extrabold text-slate-200 uppercase mb-10"
        >
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> ArcGIS</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> SPSS</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> MS Office</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Figma</span>
        </motion.div>

        {/* Buttons (Fungsi Original: Modal & Scroll Anchor) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => setIsSummaryModalOpen(true)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
          >
            <Sparkles className="w-4 h-4" /> Generate Summary
          </button>

          {/* Anchor Asli Menuju Bagian Bawah Web */}
          <a
            href="#projects"
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm backdrop-blur-md cursor-pointer"
          >
            <Briefcase className="w-4 h-4" /> View Portfolio
          </a>
        </motion.div>

      </div>

      {/* Floating Scroll Down Arrow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 z-[10] flex flex-col items-center gap-1 text-slate-500 animate-bounce pointer-events-none"
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