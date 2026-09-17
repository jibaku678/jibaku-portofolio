'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FileText, ChevronLeft, ChevronRight, X, Maximize2, Minimize2, Map, Camera, ExternalLink } from 'lucide-react'

export default function Projects() {
  const [isRaModalOpen, setIsRaModalOpen] = useState(false)
  const [isRaFullScreen, setIsRaFullScreen] = useState(false)
  const [raDocIdx, setRaDocIdx] = useState(0)

  const [isEnumModalOpen, setIsEnumModalOpen] = useState(false)
  const [isEnumFullScreen, setIsEnumFullScreen] = useState(false)
  const [enumTab, setEnumTab] = useState<'photos' | 'maps'>('photos')
  const [enumPhotoIdx, setEnumPhotoIdx] = useState(0)
  const [enumMapIdx, setEnumMapIdx] = useState(0)

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

  const raImages = [
    "/PROJEK_DOC/RA1.jpeg",
    "/PROJEK_DOC/RA2.jpeg",
    "/PROJEK_DOC/RA3.jpeg",
    "/PROJEK_DOC/RA4.jpeg",
    "/PROJEK_DOC/RA5.jpeg"
  ]

  const enumPhotos = [
    "/PROJEK_DOC/foto1.jpeg",
    "/PROJEK_DOC/foto2.jpeg",
    "/PROJEK_DOC/foto3.jpeg",
    "/PROJEK_DOC/foto4.jpeg",
    "/PROJEK_DOC/foto5.jpeg",
    "/PROJEK_DOC/foto6.jpeg"
  ]

  const enumMaps = [
    "/PROJEK_DOC/peta1.jpeg",
    "/PROJEK_DOC/peta2.jpeg",
    "/PROJEK_DOC/peta3.jpeg",
    "/PROJEK_DOC/peta4.jpeg",
    "/PROJEK_DOC/peta5.jpeg",
    "/PROJEK_DOC/peta6.jpeg",
    "/PROJEK_DOC/peta7.jpeg"
  ]

  const nextRaSlide = () => setRaDocIdx((prev) => (prev === raImages.length - 1 ? 0 : prev + 1))
  const prevRaSlide = () => setRaDocIdx((prev) => (prev === 0 ? raImages.length - 1 : prev - 1))

  const nextEnumPhoto = () => setEnumPhotoIdx((prev) => (prev === enumPhotos.length - 1 ? 0 : prev + 1))
  const prevEnumPhoto = () => setEnumPhotoIdx((prev) => (prev === 0 ? enumPhotos.length - 1 : prev - 1))

  const nextEnumMap = () => setEnumMapIdx((prev) => (prev === enumMaps.length - 1 ? 0 : prev + 1))
  const prevEnumMap = () => setEnumMapIdx((prev) => (prev === 0 ? enumMaps.length - 1 : prev - 1))

  const projectsList = [
    {
      tag: "UNDERGRADUATE THESIS",
      title: "Spatial Risk Analysis of Leptospirosis Transmission",
      description: "Analyzed leptospirosis risk levels based on human cases, rodent population density, and spatial distribution mapping in Trirenggo and Bangunjiwo, Bantul.",
      tools: ["ArcGIS", "Spatial Mapping", "Epidemiology"],
      metric: "Grade: A (Cum Laude)",
      link: "http://eprints.poltekkesjogja.ac.id/id/eprint/23531",
      hasDocumentation: false,
      type: "thesis",
      actionLabel: "View Document",
      icon: ExternalLink
    },
    {
      tag: "RESEARCH ASSISTANT",
      title: "Personal Hygiene Education for Food Handlers",
      description: "Supported field data collection, participant coordination, and KAP evaluation for food hygiene education using video media in Prambanan.",
      tools: ["Field Observation", "KAP Assessment", "Coordination"],
      metric: "Completed 2026",
      link: "#",
      hasDocumentation: true,
      type: "ra",
      actionLabel: "View Documentation (5 Photos)",
      icon: Camera
    },
    {
      tag: "RESEARCH ENUMERATOR",
      title: "Leptospirosis Transmission Prediction Model",
      description: "Served as a research enumerator utilizing the Schnabel method for rodent population capture-recapture and systematic field documentation.",
      tools: ["Vector Surveillance", "Data Documentation"],
      metric: "Completed (2025–2026)",
      link: "#",
      hasDocumentation: true,
      type: "enumerator",
      actionLabel: "View Field & Map Docs",
      icon: Map
    }
  ]

  return (
    <section id="projects" className="relative py-20 sm:py-32 w-full bg-[#F8FAFC] dark:bg-[#0B1329] transition-colors duration-300 overflow-hidden border-t border-slate-200/80 dark:border-slate-800/60">
      
      {/* 1. BACKGROUND LAYERING */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 filter blur-2xl opacity-15 dark:opacity-25 scale-105 select-none">
          <Image src={backgroundBanner} alt="Projects Ambient Fill" fill className="object-cover" />
        </div>

        <div className="absolute inset-0 w-full h-full flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]">
          <Image
            src={backgroundBanner}
            alt="Projects Field Backdrop"
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
            // Research & Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] dark:text-[#F8FAFC] uppercase tracking-tight">
            Selected Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsList.map((project, idx) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => {
                  if (project.type === 'ra') setIsRaModalOpen(true);
                  if (project.type === 'enumerator') setIsEnumModalOpen(true);
                }}
                className={`bg-white/95 dark:bg-[#1C2541]/90 backdrop-blur-xl border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between transition-all ${
                  project.hasDocumentation 
                    ? 'border-slate-200/80 dark:border-slate-700/60 hover:border-[#16A34A] dark:hover:border-emerald-500 cursor-pointer group bg-gradient-to-b from-transparent to-emerald-500/[0.02]' 
                    : 'border-slate-200/80 dark:border-slate-700/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-[#16A34A] dark:text-[#4ADE80] uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-xl border border-emerald-500/20 font-mono">
                      {project.tag}
                    </span>
                    {project.hasDocumentation && (
                      <span className="text-[10px] font-mono font-bold text-[#16A34A] dark:text-[#4ADE80] opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to view gallery ➔
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#1E293B] dark:text-[#F8FAFC] uppercase tracking-tight my-2 group-hover:text-[#16A34A] dark:group-hover:text-[#4ADE80] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tools.map((tool, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 bg-[#F8FAFC] dark:bg-[#0B1329] text-[#334155] dark:text-[#E2E8F0] text-[10px] font-mono rounded-xl border border-slate-200 dark:border-slate-700/60">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-mono font-bold text-[#64748B] dark:text-[#94A3B8]">
                    <span>{project.metric}</span>
                    
                    {project.hasDocumentation ? (
                      <span className="flex items-center gap-1.5 text-[#16A34A] dark:text-[#4ADE80] group-hover:underline font-bold text-xs">
                        {project.actionLabel} <IconComponent className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <a 
                        href={project.link} 
                        onClick={(e) => e.stopPropagation()} 
                        className="flex items-center gap-1.5 text-[#0284C7] dark:text-[#38BDF8] hover:underline font-bold text-xs"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {project.actionLabel} <IconComponent className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Lightbox Modal: Research Assistant */}
      <AnimatePresence>
        {isRaModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setIsRaModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${
                isRaFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-4xl w-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700 shrink-0">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[#16A34A] dark:text-[#4ADE80]" />
                  <h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">
                    Research Assistant Field Documentation ({raDocIdx + 1} / {raImages.length})
                  </h4>
                </div>
                
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsRaFullScreen(!isRaFullScreen)} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold" title={isRaFullScreen ? "Exit Fullscreen" : "Full Screen"}>
                    {isRaFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isRaFullScreen ? "Normal" : "Fullscreen"}</span>
                  </button>
                  <button onClick={() => { setIsRaModalOpen(false); setIsRaFullScreen(false); }} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white transition-colors cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className={`my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1 ${isRaFullScreen ? 'h-full' : ''}`}>
                <div className={`relative w-full flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md group ${isRaFullScreen ? 'h-[80vh]' : 'h-[60vh]'}`}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={raDocIdx}
                      src={raImages[raDocIdx]}
                      alt={`Research Assistant Documentation ${raDocIdx + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="max-h-full max-w-full object-contain select-none"
                    />
                  </AnimatePresence>

                  <button onClick={prevRaSlide} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={nextRaSlide} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5 mt-3">
                  {raImages.map((_, dIdx) => (
                    <button key={dIdx} onClick={() => setRaDocIdx(dIdx)} className={`h-1.5 rounded-full transition-all cursor-pointer ${raDocIdx === dIdx ? 'w-6 bg-[#16A34A]' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`} />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono shrink-0">
                <span>Personal Hygiene Education for Food Handlers (Prambanan)</span>
                <span>Secure Document Viewer</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal: Research Enumerator */}
      <AnimatePresence>
        {isEnumModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setIsEnumModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${
                isEnumFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-4xl w-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700 shrink-0">
                <div className="flex items-center gap-2">
                  <Map className="w-4 h-4 text-[#16A34A] dark:text-[#4ADE80]" />
                  <h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">
                    Research Enumerator Documentation ({enumTab === 'photos' ? `Field Photos ${enumPhotoIdx + 1}/${enumPhotos.length}` : `Spatial Maps ${enumMapIdx + 1}/${enumMaps.length}`})
                  </h4>
                </div>
                
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsEnumFullScreen(!isEnumFullScreen)} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold" title={isEnumFullScreen ? "Exit Fullscreen" : "Full Screen"}>
                    {isEnumFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isEnumFullScreen ? "Normal" : "Fullscreen"}</span>
                  </button>
                  <button onClick={() => { setIsEnumModalOpen(false); setIsEnumFullScreen(false); }} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white transition-colors cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 shrink-0">
                <button
                  onClick={() => setEnumTab('photos')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    enumTab === 'photos' ? 'bg-[#16A34A] text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0]'
                  }`}
                >
                  <Camera className="w-4 h-4" /> Field Photos ({enumPhotos.length})
                </button>
                <button
                  onClick={() => setEnumTab('maps')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    enumTab === 'maps' ? 'bg-[#16A34A] text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0]'
                  }`}
                >
                  <Map className="w-4 h-4" /> Spatial Maps ({enumMaps.length})
                </button>
              </div>

              <div className={`my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1 ${isEnumFullScreen ? 'h-full' : ''}`}>
                <div className={`relative w-full flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md group ${isEnumFullScreen ? 'h-[80vh]' : 'h-[60vh]'}`}>
                  <AnimatePresence mode="wait">
                    {enumTab === 'photos' ? (
                      <motion.img
                        key={`photo-${enumPhotoIdx}`}
                        src={enumPhotos[enumPhotoIdx]}
                        alt={`Field Photo ${enumPhotoIdx + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="max-h-full max-w-full object-contain select-none"
                      />
                    ) : (
                      <motion.img
                        key={`map-${enumMapIdx}`}
                        src={enumMaps[enumMapIdx]}
                        alt={`Spatial Map ${enumMapIdx + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="max-h-full max-w-full object-contain select-none"
                      />
                    )}
                  </AnimatePresence>

                  <button onClick={() => { if (enumTab === 'photos') prevEnumPhoto(); else prevEnumMap(); }} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={() => { if (enumTab === 'photos') nextEnumPhoto(); else nextEnumMap(); }} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5 mt-3">
                  {enumTab === 'photos' ? (
                    enumPhotos.map((_, dIdx) => (
                      <button key={dIdx} onClick={() => setEnumPhotoIdx(dIdx)} className={`h-1.5 rounded-full transition-all cursor-pointer ${enumPhotoIdx === dIdx ? 'w-6 bg-[#16A34A]' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`} />
                    ))
                  ) : (
                    enumMaps.map((_, dIdx) => (
                      <button key={dIdx} onClick={() => setEnumMapIdx(dIdx)} className={`h-1.5 rounded-full transition-all cursor-pointer ${enumMapIdx === dIdx ? 'w-6 bg-[#16A34A]' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`} />
                    ))
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono shrink-0">
                <span>Leptospirosis Transmission Prediction Model & Surveillance</span>
                <span>Secure Document Viewer</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}