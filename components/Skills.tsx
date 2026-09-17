'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Globe, FileText, X, ExternalLink, CheckCircle2, Maximize2, Minimize2 } from 'lucide-react'

export default function Skills() {
  const [isCteflModalOpen, setIsCteflModalOpen] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const backgroundBanner = '/newbanner1.png'

  // --- HTML5 CANVAS INTERACTIVE (Konsisten dengan Hero & About) ---
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

  // Data skills yang sudah diperbarui sesuai permintaan
  const technicalSkills = [
    { 
      category: "Occupational Health & Safety (HSE)", 
      items: [
        "HSE Management (HIRADC, JSA, Work Permits)", 
        "Safety Audits & Incident Investigation",
        "Fire Preparedness & Emergency Response",
        "Safety Signs & Safe Work Practices",
        "SMK3 & ISO 45001 Compliance"
      ] 
    },
    { 
      category: "Environmental Health & Sanitation", 
      items: [
        "Environmental Compliance (AMDAL, PROPER)",
        "Waste Management (B3 & Non-B3) / POPAL",
        "Water & Food Hygiene Sanitation",
        "Vector & Rodent Control",
        "Hospital & Industrial Sanitation",
        "Sanitarian Kit",
        "Pengambilan Sampel Uji Lingkungan"
      ] 
    },
    { 
      category: "Spatial Mapping & Data Analytics", 
      items: [
        "ArcGIS, QGIS & Google Earth", 
        "SPSS & Epi Info (Statistical Analysis)", 
        "Epidemiology & Public Health Research", 
        "Field Survey & Data Collection",
        "Research Methodology & Reporting"
      ] 
    },
    { 
      category: "Engineering, Design & Productivity", 
      items: [
        "AutoCAD (Basic - Sanitation & Facility Drafting)", 
        "Microsoft Office & Google Workspace", 
        "Creative Design (Canva, Figma, CorelDRAW, Adobe Express)",
        "OBS Studio (Media & Broadcasting)",
        "Event Coordination & Tech Operations",
        "Nitro PDF & Barcode Systems"
      ] 
    },
    { 
      category: "Vibe Coding & Web Deployment", 
      items: [
        "Google Apps Script (GAS)", 
        "VS Code (Environment)", 
        "GitHub (Version Control)", 
        "Vercel (Intermediate Deployment)"
      ] 
    }
  ]

  return (
    <section id="skills" className="relative py-20 sm:py-32 w-full bg-[#F8FAFC] dark:bg-[#0B1329] transition-colors duration-300 overflow-hidden border-t border-slate-200/80 dark:border-slate-800/60">
      
      {/* 1. BACKGROUND LAYERING (Konsisten dengan Hero & About) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 filter blur-2xl opacity-15 dark:opacity-25 scale-105 select-none">
          <Image src={backgroundBanner} alt="Skills Ambient Fill" fill className="object-cover" />
        </div>

        <div className="absolute inset-0 w-full h-full flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]">
          <Image
            src={backgroundBanner}
            alt="Skills Field Backdrop"
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
            // Expertise & Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] dark:text-[#F8FAFC] uppercase tracking-tight">
            Skills & Language Proficiency
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Technical Skills Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {technicalSkills.map((group, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`bg-white/95 dark:bg-[#1C2541]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/60 rounded-2xl sm:rounded-3xl p-6 shadow-sm flex flex-col ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <h3 className="text-sm font-bold text-[#1E293B] dark:text-[#F8FAFC] uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 dark:border-slate-700/60">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {group.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] dark:bg-[#0B1329] text-[#334155] dark:text-[#E2E8F0] font-medium text-xs border border-slate-200 dark:border-slate-700/60 shadow-2xs hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Language Proficiency & CTEFL Card Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white/95 dark:bg-[#1C2541]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/60 rounded-2xl sm:rounded-3xl p-6 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-500/10 text-[#0284C7] dark:text-[#38BDF8]">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-widest font-bold">Language Proficiency</span>
                  <h3 className="text-base font-bold text-[#1E293B] dark:text-[#F8FAFC] uppercase tracking-tight">English (Intermediate)</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed font-medium">
                Equipped with formal certification validating working proficiency in English, suitable for professional documentation and cross-cultural technical communication.
              </p>

              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B1329] border border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#64748B] dark:text-[#94A3B8] uppercase">CTEFL Score</div>
                  <div className="text-sm font-bold text-[#16A34A] dark:text-[#4ADE80]">Score: 460 (Intermediate)</div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[#16A34A] dark:text-[#4ADE80]" />
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setIsCteflModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                View CTEFL Certificate <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal for CTEFL Certificate */}
      <AnimatePresence>
        {isCteflModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setIsCteflModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${
                isFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-4xl w-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700 shrink-0">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] dark:text-[#4ADE80]" />
                  <h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-[11px] sm:text-sm uppercase tracking-wider">
                    CTEFL English Proficiency Certificate
                  </h4>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsFullScreen(!isFullScreen)}
                    className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                    title={isFullScreen ? "Exit Fullscreen" : "Full Screen"}
                  >
                    {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isFullScreen ? "Normal" : "Fullscreen"}</span>
                  </button>

                  <button
                    onClick={() => { setIsCteflModalOpen(false); setIsFullScreen(false); }}
                    className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className={`my-4 relative flex items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-2 border border-slate-200 dark:border-slate-800 overflow-hidden flex-1 ${isFullScreen ? 'h-full' : ''}`}>
                <img
                  src="/Sertifikat_CTEFL_1.png"
                  alt="CTEFL Certificate Preview"
                  className={`object-contain rounded-lg shadow-md select-none pointer-events-none transition-all ${
                    isFullScreen ? 'max-h-[85vh] w-auto' : 'max-h-[65vh]'
                  }`}
                />
              </div>

              <div className="flex items-center justify-between pt-2 shrink-0">
                <span className="text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono">
                  Status: Official Credential Preview
                </span>
                <a
                  href="/Sertifikat_CTEFL.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  Open Full PDF <FileText className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}