'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  Briefcase, Sparkles, X, Printer, CheckCircle2, 
  Satellite, Microscope, HardHat, Bug, FlaskConical, Radar 
} from 'lucide-react'

export default function Hero() {
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Tanggal Real-time
  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const handlePrint = () => {
    window.print()
  }

  // --- EFEK 1: HTML5 CANVAS INTERACTIVE SPATIAL NETWORK (GIS NODES) ---
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    const particlesCount = 50 // Jumlah node jaringan
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = []

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6, // Gerakan pelan futuristik
        vy: (Math.random() - 0.5) * 0.6,
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

        // Garis koneksi antar node (Mirip rute spasial GIS)
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

        // Garis koneksi interaktif ke arah kursor mouse (Analitik Mode)
        const mdx = p.x - mouseX
        const mdy = p.y - mouseY
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mdist < 180) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouseX, mouseY)
          ctx.strokeStyle = `rgba(52, 211, 153, ${0.3 * (1 - mdist / 180)})`
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

  // --- EFEK 2: FLOATING MODERN BACKGROUND ICONS ---
  const floatingIcons = [
    { Icon: HardHat, color: "text-amber-500/10 dark:text-amber-500/20", size: 56, startX: "8%", startY: "25%", duration: 25 },
    { Icon: FlaskConical, color: "text-emerald-500/10 dark:text-emerald-500/20", size: 72, startX: "88%", startY: "15%", duration: 30 },
    { Icon: Microscope, color: "text-emerald-400/10 dark:text-emerald-400/20", size: 48, startX: "80%", startY: "75%", duration: 22 },
    { Icon: Satellite, color: "text-emerald-600/10 dark:text-emerald-600/20", size: 80, startX: "12%", startY: "75%", duration: 28 },
    { Icon: Bug, color: "text-amber-400/10 dark:text-amber-400/20", size: 40, startX: "45%", startY: "8%", duration: 18 },
    { Icon: Radar, color: "text-emerald-300/10 dark:text-emerald-300/20", size: 64, startX: "50%", startY: "85%", duration: 26 },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 py-16 md:py-24 border-b border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      
      {/* Layer Latar Belakang Terbawah: Jaringan Interaktif Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60 dark:opacity-80"
      ></canvas>

      {/* Layer Kedua: Ikon Melayang Spesifik Bidang */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color}`}
            style={{ left: item.startX, top: item.startY }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <item.Icon size={item.size} strokeWidth={1} />
          </motion.div>
        ))}

        {/* Cinematic Ambient Glow (Pendaran Sudut) */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- EFEK 3: STAGGERED TEXT REVEAL UI --- */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="flex flex-col items-start gap-6"
          >
            {/* Pulsing Badges */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap items-center gap-3 mb-2">
              <motion.span 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-widest border border-emerald-300 dark:border-emerald-500/30 rounded-full uppercase flex items-center gap-2 shadow-sm backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> 
                Open to Opportunities
              </motion.span>
              <span className="px-3 py-1.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold tracking-widest border border-slate-300 dark:border-slate-700 rounded-full uppercase backdrop-blur-sm">
                GPA 3.71 (Cum Laude)
              </span>
            </motion.div>

            {/* Glowing Hero Title */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-4">
              <motion.h1 
                animate={{ textShadow: ["0px 0px 0px rgba(16,185,129,0)", "0px 0px 25px rgba(16,185,129,0.4)", "0px 0px 0px rgba(16,185,129,0)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-tight"
              >
                JIBAKUDIN NUR
              </motion.h1>
              
              <h2 className="text-sm sm:text-base font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-2 uppercase tracking-wide">
                Environmental Health • HSE • One Health & Public Health Research
              </h2>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed border-l-2 border-emerald-500 dark:border-emerald-500 pl-4 mt-2 font-medium">
                Bachelor Applied (D4) in Environmental Sanitation specialized in systematic field risk assessment, spatial epidemiological analysis, and industrial HSE systems—dedicated to executing high-impact workplace safety and public health initiatives.
              </p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-y-2 gap-x-4 text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> ArcGIS</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> SPSS</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> MS Office</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Figma</span>
            </motion.div>

            {/* Action Buttons dengan Holographic Hover Glow */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto relative z-20">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(16, 185, 129, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSummaryModalOpen(true)}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" /> Generate Summary
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-2 border-slate-300 dark:border-slate-700 hover:border-amber-500 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Briefcase className="w-4 h-4" /> View Portfolio
              </motion.a>
            </motion.div>
          </motion.div>

          {/* --- EFEK 4: INTERACTIVE BANNER TILT & BREATHING GLOW --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -12, 0] }}
            transition={{ opacity: { duration: 0.8 }, scale: { duration: 0.8 }, y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" } }}
            whileHover={{ scale: 1.03, rotate: 0 }}
            className="w-full relative group cursor-pointer z-10"
          >
            {/* Ambient Breathing Shadow */}
            <motion.div 
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.98, 1.05, 0.98] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -inset-3 bg-gradient-to-r from-emerald-500/50 via-teal-500/30 to-amber-500/40 rounded-2xl blur-2xl"
            ></motion.div>

            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-emerald-500/50 dark:border-slate-700 bg-slate-900 shadow-[0_0_40px_rgba(16,185,129,0.2)] flex items-center justify-center group-hover:border-emerald-400 transition-colors duration-500">
              <Image
                src="/BANNER.jpg" 
                alt="Jibakudin Nur Field Practice"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* --- MODAL SUMMARY (REAL-TIME ATS DATA) --- */}
      <AnimatePresence>
        {isSummaryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
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