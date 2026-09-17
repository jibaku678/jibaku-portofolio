'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Award, ExternalLink, X, Maximize2, Minimize2, ChevronLeft, ChevronRight, FileText } from 'lucide-react'

export default function Certifications() {
  const [isFireModalOpen, setIsFireModalOpen] = useState(false)
  const [isFireFullScreen, setIsFireFullScreen] = useState(false)
  const [fireTab, setFireTab] = useState<'certs' | 'photos'>('certs')
  const [fireCertIdx, setFireCertIdx] = useState(0)
  const [firePhotoIdx, setFirePhotoIdx] = useState(0)

  const [isWasModalOpen, setIsWasModalOpen] = useState(false)
  const [isWasFullScreen, setIsWasFullScreen] = useState(false)
  const [wasTab, setWasTab] = useState<'certs' | 'photos'>('certs')
  const [wasCertIdx, setWasCertIdx] = useState(0)
  const [wasPhotoIdx, setWasPhotoIdx] = useState(0)

  const [isHealthCrisisModalOpen, setIsHealthCrisisModalOpen] = useState(false)
  const [isHealthCrisisFullScreen, setIsHealthCrisisFullScreen] = useState(false)
  const [healthCrisisTab, setHealthCrisisTab] = useState<'certs' | 'photos'>('certs')
  const [healthCrisisCertIdx, setHealthCrisisCertIdx] = useState(0)
  const [healthCrisisPhotoIdx, setHealthCrisisPhotoIdx] = useState(0)

  const [isK3ModalOpen, setIsK3ModalOpen] = useState(false)
  const [isK3FullScreen, setIsK3FullScreen] = useState(false)
  const [k3Idx, setK3Idx] = useState(0)

  const [isUklModalOpen, setIsUklModalOpen] = useState(false)
  const [isUklFullScreen, setIsUklFullScreen] = useState(false)
  const [uklIdx, setUklIdx] = useState(0)

  const [isPopalModalOpen, setIsPopalModalOpen] = useState(false)
  const [isPopalFullScreen, setIsPopalFullScreen] = useState(false)
  const [popalIdx, setPopalIdx] = useState(0)

  const [isEntoModalOpen, setIsEntoModalOpen] = useState(false)
  const [isEntoFullScreen, setIsEntoFullScreen] = useState(false)
  const [entoIdx, setEntoIdx] = useState(0)

  const [isHakliModalOpen, setIsHakliModalOpen] = useState(false)
  const [isHakliFullScreen, setIsHakliFullScreen] = useState(false)
  const [hakliIdx, setHakliIdx] = useState(0)

  const [isSbhModalOpen, setIsSbhModalOpen] = useState(false)
  const [isSbhFullScreen, setIsSbhFullScreen] = useState(false)
  const [sbhIdx, setSbhIdx] = useState(0)

  const [isLdkModalOpen, setIsLdkModalOpen] = useState(false)
  const [isLdkFullScreen, setIsLdkFullScreen] = useState(false)

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

  const fireCerts = ["/SERTIF_DOC/sertif_kebakaran.jpeg"]
  const firePhotos = ["/SERTIF_DOC/kebakaran1.jpg", "/SERTIF_DOC/kebakaran2.jpg"]

  const wasCerts = ["/SERTIF_DOC/WAS1.jpeg", "/SERTIF_DOC/WAS2.jpeg"]
  const wasPhotos = ["/SERTIF_DOC/WASPOTO1.jpeg", "/SERTIF_DOC/WASPOTO2.jpeg", "/SERTIF_DOC/WASPOTO3.jpeg"]
  
  const healthCrisisCerts = ["/SERTIF_DOC/PKKB_SERTIF.png"]
  const healthCrisisPhotos = [
    "/SERTIF_DOC/PKKB1.JPG", 
    "/SERTIF_DOC/PKKB2.JPG", 
    "/SERTIF_DOC/PKKB3.JPG", 
    "/SERTIF_DOC/PKKB4.jpeg", 
    "/SERTIF_DOC/PKKB5.jpeg"
  ]

  const k3Images = ["/SERTIF_DOC/k3faskes1.png", "/SERTIF_DOC/k3faskes2.png"]
  const uklImages = ["/SERTIF_DOC/UKL1.jpeg", "/SERTIF_DOC/UKL2.jpeg"]
  const popalImages = ["/SERTIF_DOC/POPAL1.jpeg", "/SERTIF_DOC/POPAL2.jpeg"]
  const entoImages = ["/SERTIF_DOC/ENTOMOLOGI1.jpeg", "/SERTIF_DOC/ENTOMOLOGI2.jpeg"]
  const hakliImages = ["/SERTIF_DOC/HAKLI1.png", "/SERTIF_DOC/HAKLI2.png"]
  const sbhImages = ["/SERTIF_DOC/SBH1.png", "/SERTIF_DOC/SBH2.png"]

  const trainingList = [
    {
      title: "Healthcare Facility OHS / K3 Fasyankes",
      issuer: "PT. Nata Supervisi (PT. NEVIS) (2025)",
      description: "Specialized training on health and safety implementation in hospital environments.",
      isInteractive: true,
      type: "k3faskes",
      actionText: "View Certificate"
    },
    {
      title: "POPAL Competency-Based Training (Wastewater Treatment)",
      issuer: "LPK Damai Semesta Jiwa & Poltekkes Kemenkes Yogyakarta (2024)",
      description: "Certified operational management for industrial and facility wastewater treatment plants.",
      isInteractive: true,
      type: "popal",
      actionText: "View Certificate"
    },
    {
      title: "UKL-UPL Document Preparation Training",
      issuer: "LPP Wana Wiyata Yogyakarta (2024)",
      description: "Technical guidance on environmental management and monitoring document drafting.",
      isInteractive: true,
      type: "uklupl",
      actionText: "View Certificate"
    },
    {
      title: "Health Entomology & Vector Control Training",
      issuer: "PT. NEVIS & Poltekkes Kemenkes Yogyakarta (2024)",
      description: "Vector surveillance and pest control management strategies.",
      isInteractive: true,
      type: "ento",
      actionText: "View Certificate"
    },
    {
      title: "Early Fire Prevention Training",
      issuer: "Dinas Pemadam Kebakaran dan Penyelamatan Kota Yogyakarta (2023)",
      description: "Basic fire safety, prevention, and response protocols.",
      isInteractive: true,
      type: "fire",
      actionText: "View Certificate & Documentation"
    },
    {
      title: "Emergency Water & Sanitation Simulation",
      issuer: "BPBD Kabupaten Sleman (2024)",
      description: "Emergency response and sanitation setup during disaster situations.",
      isInteractive: true,
      type: "was",
      actionText: "View Certificate & Documentation"
    },
    {
      title: "Health Crisis Management Simulation in Disaster Situations via Interprofessional Education (IPE)",
      issuer: "Poltekkes Kemenkes Yogyakarta (2024)",
      description: "Simulation training on health crisis management and interprofessional coordination during disaster scenarios.",
      isInteractive: true,
      type: "healthcrisis",
      actionText: "View Certificate & Documentation"
    },
    {
      title: "Guest Lectures International Conference: Industrial Sanitation",
      issuer: "Poltekkes Kemenkes Yogyakarta & HAKLI (2023)",
      description: "International conference focusing on optimizing human resources and improving industrial sanitation quality.",
      isInteractive: true,
      type: "hakli",
      actionText: "View Certificate"
    },
    {
      title: "Health Bakti Camp IX (Kemah Bakti Kesehatan)",
      issuer: "Poltekkes Kemenkes Yogyakarta Scout Movement (2023)",
      description: "Community health devotion camp with the theme 'Pramuka Berbudaya, Berbakti Untuk Negeri' in Prambanan.",
      isInteractive: true,
      type: "sbh",
      actionText: "View Certificate"
    },
    {
      title: "Leadership Basic Training (Latihan Dasar Kepemimpinan)",
      issuer: "Poltekkes Kemenkes Yogyakarta (2022)",
      description: "Soft skills enhancement program focused on patriotic values and national dedication.",
      isInteractive: true,
      type: "ldk",
      actionText: "View Certificate"
    }
  ]

  return (
    <section id="certifications" className="relative py-20 sm:py-32 w-full bg-[#F8FAFC] dark:bg-[#0B1329] transition-colors duration-300 overflow-hidden border-t border-slate-200/80 dark:border-slate-800/60">
      
      {/* 1. BACKGROUND LAYERING */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 filter blur-2xl opacity-15 dark:opacity-25 scale-105 select-none">
          <Image src={backgroundBanner} alt="Certifications Ambient Fill" fill className="object-cover" />
        </div>

        <div className="absolute inset-0 w-full h-full flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]">
          <Image
            src={backgroundBanner}
            alt="Certifications Field Backdrop"
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
            // Qualifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] dark:text-[#F8FAFC] uppercase tracking-tight">
            Certifications & Training
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainingList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => {
                if (item.isInteractive) {
                  if (item.type === 'fire') setIsFireModalOpen(true);
                  if (item.type === 'was') setIsWasModalOpen(true);
                  if (item.type === 'healthcrisis') setIsHealthCrisisModalOpen(true);
                  if (item.type === 'k3faskes') setIsK3ModalOpen(true);
                  if (item.type === 'uklupl') setIsUklModalOpen(true);
                  if (item.type === 'popal') setIsPopalModalOpen(true);
                  if (item.type === 'ento') setIsEntoModalOpen(true);
                  if (item.type === 'hakli') setIsHakliModalOpen(true);
                  if (item.type === 'sbh') setIsSbhModalOpen(true);
                  if (item.type === 'ldk') setIsLdkModalOpen(true);
                }
              }}
              className={`bg-white/95 dark:bg-[#1C2541]/90 backdrop-blur-xl border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm flex items-start gap-4 transition-all ${
                item.isInteractive 
                  ? 'border-amber-500/50 dark:border-amber-500/40 hover:border-amber-500 hover:shadow-md cursor-pointer group bg-gradient-to-r from-amber-500/5 to-transparent' 
                  : 'border-slate-200/80 dark:border-slate-700/60 hover:border-[#0284C7]/40'
              }`}
            >
              <div className={`p-3 rounded-2xl shrink-0 mt-1 ${item.isInteractive ? 'bg-amber-500/10 text-amber-500' : 'bg-sky-500/10 text-[#0284C7] dark:text-[#38BDF8]'}`}>
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="text-sm font-bold text-[#1E293B] dark:text-[#F8FAFC] uppercase tracking-wide flex items-center justify-between">
                  <span>{item.title}</span>
                  {item.isInteractive && (
                    <ExternalLink className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform shrink-0 ml-2" />
                  )}
                </h3>
                <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 font-mono">
                  {item.issuer}
                </p>
                <p className="text-xs text-[#334155] dark:text-[#94A3B8] pt-1 leading-relaxed font-medium">
                  {item.description}
                </p>
                
                {item.isInteractive && item.actionText && (
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded-xl border border-amber-500/20 font-mono">
                      {item.actionText}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL: EARLY FIRE PREVENTION --- */}
      <AnimatePresence>
        {isFireModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsFireModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${isFireFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700 shrink-0">
                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-amber-500" /><h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">Early Fire Prevention Training</h4></div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsFireFullScreen(!isFireFullScreen)} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold">{isFireFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}<span className="hidden sm:inline">{isFireFullScreen ? "Normal" : "Fullscreen"}</span></button>
                  <button onClick={() => { setIsFireModalOpen(false); setIsFireFullScreen(false); }} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white transition-colors cursor-pointer"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 shrink-0">
                <button onClick={() => setFireTab('certs')} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${fireTab === 'certs' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0]'}`}>Certificate ({fireCerts.length})</button>
                <button onClick={() => setFireTab('photos')} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${fireTab === 'photos' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0]'}`}>Field Photos ({firePhotos.length})</button>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className={`relative w-full flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md group ${isFireFullScreen ? 'h-[80vh]' : 'h-[50vh]'}`}>
                  <AnimatePresence mode="wait">
                    {fireTab === 'certs' ? (
                      <div key="fire-c" className="relative w-full h-full flex items-center justify-center">
                        <motion.img src={fireCerts[0]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                          <span className="text-white/15 dark:text-white/10 text-xl sm:text-2xl font-black uppercase tracking-widest -rotate-12">
                            FOR RECRUITMENT ONLY
                          </span>
                        </div>
                      </div>
                    ) : (
                      <motion.img key={`fire-p-${firePhotoIdx}`} src={firePhotos[firePhotoIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none" />
                    )}
                  </AnimatePresence>
                  {fireTab === 'photos' && (
                    <>
                      <button onClick={() => setFirePhotoIdx(prev => prev === 0 ? firePhotos.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                      <button onClick={() => setFirePhotoIdx(prev => prev === firePhotos.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono shrink-0"><span>Issuer: Dinas Pemadam Kebakaran Kota Yogyakarta (2023)</span><span>Secure Document Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MODAL: HEALTH CRISIS SIMULATION --- */}
      <AnimatePresence>
        {isHealthCrisisModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsHealthCrisisModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${isHealthCrisisFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700 shrink-0">
                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-amber-500" /><h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">Health Crisis Management Simulation</h4></div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsHealthCrisisFullScreen(!isHealthCrisisFullScreen)} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold">{isHealthCrisisFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}<span className="hidden sm:inline">{isHealthCrisisFullScreen ? "Normal" : "Fullscreen"}</span></button>
                  <button onClick={() => { setIsHealthCrisisModalOpen(false); setIsHealthCrisisFullScreen(false); }} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white transition-colors cursor-pointer"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 shrink-0">
                <button onClick={() => setHealthCrisisTab('certs')} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${healthCrisisTab === 'certs' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0]'}`}>Certificate ({healthCrisisCerts.length})</button>
                <button onClick={() => setHealthCrisisTab('photos')} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${healthCrisisTab === 'photos' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0]'}`}>Field Photos ({healthCrisisPhotos.length})</button>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className={`relative w-full flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md group ${isHealthCrisisFullScreen ? 'h-[80vh]' : 'h-[50vh]'}`}>
                  <AnimatePresence mode="wait">
                    {healthCrisisTab === 'certs' ? (
                      <div key="hc-c" className="relative w-full h-full flex items-center justify-center">
                        <motion.img src={healthCrisisCerts[0]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                          <span className="text-white/15 dark:text-white/10 text-xl sm:text-2xl font-black uppercase tracking-widest -rotate-12">
                            FOR RECRUITMENT ONLY
                          </span>
                        </div>
                      </div>
                    ) : (
                      <motion.img key={`hc-p-${healthCrisisPhotoIdx}`} src={healthCrisisPhotos[healthCrisisPhotoIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none" />
                    )}
                  </AnimatePresence>
                  {healthCrisisTab === 'photos' && (
                    <>
                      <button onClick={() => setHealthCrisisPhotoIdx(prev => prev === 0 ? healthCrisisPhotos.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                      <button onClick={() => setHealthCrisisPhotoIdx(prev => prev === healthCrisisPhotos.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono shrink-0"><span>Issuer: Poltekkes Kemenkes Yogyakarta (2024)</span><span>Secure Document Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MODAL LAINNYA --- */}
      {/* Water & Sanitation Simulation Modal */}
      <AnimatePresence>
        {isWasModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsWasModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${isWasFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700 shrink-0">
                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-amber-500" /><h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">Emergency Water & Sanitation Simulation</h4></div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsWasFullScreen(!isWasFullScreen)} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold">{isWasFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}<span className="hidden sm:inline">{isWasFullScreen ? "Normal" : "Fullscreen"}</span></button>
                  <button onClick={() => { setIsWasModalOpen(false); setIsWasFullScreen(false); }} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white transition-colors cursor-pointer"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 shrink-0">
                <button onClick={() => setWasTab('certs')} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${wasTab === 'certs' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0]'}`}>Certificates ({wasCerts.length})</button>
                <button onClick={() => setWasTab('photos')} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${wasTab === 'photos' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0]'}`}>Field Photos ({wasPhotos.length})</button>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className={`relative w-full flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md group ${isWasFullScreen ? 'h-[80vh]' : 'h-[50vh]'}`}>
                  <AnimatePresence mode="wait">
                    {wasTab === 'certs' ? (
                      <div key={`was-c-${wasCertIdx}`} className="relative w-full h-full flex items-center justify-center">
                        <motion.img src={wasCerts[wasCertIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                          <span className="text-white/15 dark:text-white/10 text-xl sm:text-2xl font-black uppercase tracking-widest -rotate-12">
                            FOR RECRUITMENT ONLY
                          </span>
                        </div>
                      </div>
                    ) : (
                      <motion.img key={`was-p-${wasPhotoIdx}`} src={wasPhotos[wasPhotoIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none" />
                    )}
                  </AnimatePresence>
                  <button onClick={() => { if (wasTab === 'certs') setWasCertIdx(prev => prev === 0 ? wasCerts.length - 1 : prev - 1); else setWasPhotoIdx(prev => prev === 0 ? wasPhotos.length - 1 : prev - 1); }} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => { if (wasTab === 'certs') setWasCertIdx(prev => prev === wasCerts.length - 1 ? 0 : prev + 1); else setWasPhotoIdx(prev => prev === wasPhotos.length - 1 ? 0 : prev + 1); }} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono shrink-0"><span>Issuer: BPBD Kabupaten Sleman (2024)</span><span>Secure Document Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* K3 Fasyankes Modal */}
      <AnimatePresence>
        {isK3ModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsK3ModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${isK3FullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">Healthcare Facility OHS / K3 Fasyankes ({k3Idx + 1}/{k3Images.length})</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsK3FullScreen(!isK3FullScreen)} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7]">{isK3FullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsK3ModalOpen(false); setIsK3FullScreen(false); }} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className={`relative w-full flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md ${isK3FullScreen ? 'h-[80vh]' : 'h-[55vh]'}`}>
                  <AnimatePresence mode="wait">
                    <div key={k3Idx} className="relative w-full h-full flex items-center justify-center">
                      <motion.img src={k3Images[k3Idx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                        <span className="text-white/15 dark:text-white/10 text-xl sm:text-2xl font-black uppercase tracking-widest -rotate-12">
                          FOR RECRUITMENT ONLY
                        </span>
                      </div>
                    </div>
                  </AnimatePresence>
                  <button onClick={() => setK3Idx(prev => prev === 0 ? k3Images.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => setK3Idx(prev => prev === k3Images.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono"><span>Issuer: PT. Nata Supervisi (PT. NEVIS) (2025)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* UKL-UPL Modal */}
      <AnimatePresence>
        {isUklModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsUklModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${isUklFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">UKL-UPL Document Preparation Training ({uklIdx + 1}/{uklImages.length})</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsUklFullScreen(!isUklFullScreen)} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7]">{isUklFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsUklModalOpen(false); setIsUklFullScreen(false); }} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className={`relative w-full flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md ${isUklFullScreen ? 'h-[80vh]' : 'h-[55vh]'}`}>
                  <AnimatePresence mode="wait">
                    <div key={uklIdx} className="relative w-full h-full flex items-center justify-center">
                      <motion.img src={uklImages[uklIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                        <span className="text-white/15 dark:text-white/10 text-xl sm:text-2xl font-black uppercase tracking-widest -rotate-12">
                          FOR RECRUITMENT ONLY
                        </span>
                      </div>
                    </div>
                  </AnimatePresence>
                  <button onClick={() => setUklIdx(prev => prev === 0 ? uklImages.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => setUklIdx(prev => prev === uklImages.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono"><span>Issuer: LPP Wana Wiyata Yogyakarta (2024)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* POPAL Modal */}
      <AnimatePresence>
        {isPopalModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsPopalModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${isPopalFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">POPAL Competency-Based Training ({popalIdx + 1}/{popalImages.length})</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsPopalFullScreen(!isPopalFullScreen)} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7]">{isPopalFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsPopalModalOpen(false); setIsPopalFullScreen(false); }} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className={`relative w-full flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md ${isPopalFullScreen ? 'h-[80vh]' : 'h-[55vh]'}`}>
                  <AnimatePresence mode="wait">
                    <div key={popalIdx} className="relative w-full h-full flex items-center justify-center">
                      <motion.img src={popalImages[popalIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                        <span className="text-white/15 dark:text-white/10 text-xl sm:text-2xl font-black uppercase tracking-widest -rotate-12">
                          FOR RECRUITMENT ONLY
                        </span>
                      </div>
                    </div>
                  </AnimatePresence>
                  <button onClick={() => setPopalIdx(prev => prev === 0 ? popalImages.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => setPopalIdx(prev => prev === popalImages.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono"><span>Issuer: LPK Damai Semesta Jiwa & Poltekkes (2024)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Entomology Modal */}
      <AnimatePresence>
        {isEntoModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsEntoModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${isEntoFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">Health Entomology & Vector Control ({entoIdx + 1}/{entoImages.length})</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsEntoFullScreen(!isEntoFullScreen)} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7]">{isEntoFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsEntoModalOpen(false); setIsEntoFullScreen(false); }} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className={`relative w-full flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md ${isEntoFullScreen ? 'h-[80vh]' : 'h-[55vh]'}`}>
                  <AnimatePresence mode="wait">
                    <div key={entoIdx} className="relative w-full h-full flex items-center justify-center">
                      <motion.img src={entoImages[entoIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                        <span className="text-white/15 dark:text-white/10 text-xl sm:text-2xl font-black uppercase tracking-widest -rotate-12">
                          FOR RECRUITMENT ONLY
                        </span>
                      </div>
                    </div>
                  </AnimatePresence>
                  <button onClick={() => setEntoIdx(prev => prev === 0 ? entoImages.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => setEntoIdx(prev => prev === entoImages.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono"><span>Issuer: PT. NEVIS & Poltekkes Kemenkes Yogyakarta (2024)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HAKLI Modal */}
      <AnimatePresence>
        {isHakliModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsHakliModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${isHakliFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">Guest Lectures International Conference ({hakliIdx + 1}/{hakliImages.length})</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsHakliFullScreen(!isHakliFullScreen)} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7]">{isHakliFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsHakliModalOpen(false); setIsHakliFullScreen(false); }} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className={`relative w-full flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md ${isHakliFullScreen ? 'h-[80vh]' : 'h-[55vh]'}`}>
                  <AnimatePresence mode="wait">
                    <div key={hakliIdx} className="relative w-full h-full flex items-center justify-center">
                      <motion.img src={hakliImages[hakliIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                        <span className="text-white/15 dark:text-white/10 text-xl sm:text-2xl font-black uppercase tracking-widest -rotate-12">
                          FOR RECRUITMENT ONLY
                        </span>
                      </div>
                    </div>
                  </AnimatePresence>
                  <button onClick={() => setHakliIdx(prev => prev === 0 ? hakliImages.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => setHakliIdx(prev => prev === hakliImages.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono"><span>Issuer: Poltekkes Kemenkes Yogyakarta & HAKLI (2023)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SBH Modal */}
      <AnimatePresence>
        {isSbhModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsSbhModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${isSbhFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">Health Bakti Camp IX ({sbhIdx + 1}/{sbhImages.length})</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsSbhFullScreen(!isSbhFullScreen)} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7]">{isSbhFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsSbhModalOpen(false); setIsSbhFullScreen(false); }} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className={`relative w-full flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md ${isSbhFullScreen ? 'h-[80vh]' : 'h-[55vh]'}`}>
                  <AnimatePresence mode="wait">
                    <div key={sbhIdx} className="relative w-full h-full flex items-center justify-center">
                      <motion.img src={sbhImages[sbhIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                        <span className="text-white/15 dark:text-white/10 text-xl sm:text-2xl font-black uppercase tracking-widest -rotate-12">
                          FOR RECRUITMENT ONLY
                        </span>
                      </div>
                    </div>
                  </AnimatePresence>
                  <button onClick={() => setSbhIdx(prev => prev === 0 ? sbhImages.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => setSbhIdx(prev => prev === sbhImages.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono"><span>Issuer: Poltekkes Kemenkes Yogyakarta Scout Movement (2023)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LDK Modal */}
      <AnimatePresence>
        {isLdkModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsLdkModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-[#1C2541] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col ${isLdkFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1E293B] dark:text-[#F8FAFC] text-xs sm:text-sm uppercase tracking-wider">Leadership Basic Training (LDK)</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsLdkFullScreen(!isLdkFullScreen)} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#334155] dark:text-[#E2E8F0] hover:text-[#0284C7]">{isLdkFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsLdkModalOpen(false); setIsLdkFullScreen(false); }} className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#1E293B] dark:hover:text-white"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className={`relative w-full flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md ${isLdkFullScreen ? 'h-[80vh]' : 'h-[55vh]'}`}>
                  <img src="/SERTIF_DOC/LDK.png" alt="LDK Certificate" className="max-h-full max-w-full object-contain select-none pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="text-white/15 dark:text-white/10 text-xl sm:text-2xl font-black uppercase tracking-widest -rotate-12">
                      FOR RECRUITMENT ONLY
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono"><span>Issuer: Poltekkes Kemenkes Yogyakarta (2022)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}