'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, X, CheckCircle2, Maximize2, Minimize2, ChevronLeft, ChevronRight, FileText } from 'lucide-react'

export default function Certifications() {
  const [isFireModalOpen, setIsFireModalOpen] = useState(false)
  const [isFireFullScreen, setIsFireFullScreen] = useState(false)
  const [fireDocIdx, setFireDocIdx] = useState(0)

  const [isWasModalOpen, setIsWasModalOpen] = useState(false)
  const [isWasFullScreen, setIsWasFullScreen] = useState(false)
  const [wasTab, setWasTab] = useState<'certs' | 'photos'>('certs')
  const [wasCertIdx, setWasCertIdx] = useState(0)
  const [wasPhotoIdx, setWasPhotoIdx] = useState(0)

  const [isHealthCrisisModalOpen, setIsHealthCrisisModalOpen] = useState(false)
  const [isHealthCrisisFullScreen, setIsHealthCrisisFullScreen] = useState(false)
  const [healthCrisisTab, setHealthCrisisTab] = useState<'certs' | 'photos'>('certs')
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

  const fireImages = ["/SERTIF_DOC/kebakaran1.jpg", "/SERTIF_DOC/kebakaran2.jpg"]
  const wasCerts = ["/SERTIF_DOC/WAS1.jpeg", "/SERTIF_DOC/WAS2.jpeg"]
  const wasPhotos = ["/SERTIF_DOC/WASPOTO1.jpeg", "/SERTIF_DOC/WASPOTO2.jpeg", "/SERTIF_DOC/WASPOTO3.jpeg"]
  
  const healthCrisisCerts = ["/SERTIF_DOC/PKKB_SERTIF.png"]
  const healthCrisisPhotos = [
    "/SERTIF_DOC/PKKB1.jpg", 
    "/SERTIF_DOC/PKKB2.jpg", 
    "/SERTIF_DOC/PKKB3.jpg", 
    "/SERTIF_DOC/PKKB4.jpg", 
    "/SERTIF_DOC/PKKB5.jpg"
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
      actionText: "View Certificate & Documentation"
    },
    {
      title: "POPAL Competency-Based Training (Wastewater Treatment)",
      issuer: "LPK Damai Semesta Jiwa & Poltekkes Kemenkes Yogyakarta (2024)",
      description: "Certified operational management for industrial and facility wastewater treatment plants.",
      isInteractive: true,
      type: "popal",
      actionText: "View Certificate & Documentation"
    },
    {
      title: "UKL-UPL Document Preparation Training",
      issuer: "LPP Wana Wiyata Yogyakarta (2024)",
      description: "Technical guidance on environmental management and monitoring document drafting.",
      isInteractive: true,
      type: "uklupl",
      actionText: "View Certificate & Documentation"
    },
    {
      title: "Health Entomology & Vector Control Training",
      issuer: "PT. NEVIS & Poltekkes Kemenkes Yogyakarta (2024)",
      description: "Vector surveillance and pest control management strategies.",
      isInteractive: true,
      type: "ento",
      actionText: "View Certificate & Documentation"
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
      actionText: "View Certificate & Documentation"
    },
    {
      title: "Health Bakti Camp IX (Kemah Bakti Kesehatan)",
      issuer: "Poltekkes Kemenkes Yogyakarta Scout Movement (2023)",
      description: "Community health devotion camp with the theme 'Pramuka Berbudaya, Berbakti Untuk Negeri' in Prambanan.",
      isInteractive: true,
      type: "sbh",
      actionText: "View Certificate & Documentation"
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
    <section id="certifications" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60">
      <div className="flex flex-col items-start gap-2 mb-10">
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
          // Qualifications
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
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
            className={`bg-white dark:bg-slate-900 border rounded-xl p-6 shadow-sm flex items-start gap-4 transition-all ${
              item.isInteractive 
                ? 'border-amber-500/50 dark:border-amber-500/40 hover:border-amber-500 hover:shadow-md cursor-pointer group bg-gradient-to-r from-amber-500/5 to-transparent' 
                : 'border-slate-200 dark:border-slate-800 hover:border-emerald-500/40'
            }`}
          >
            <div className={`p-2.5 rounded-lg shrink-0 mt-1 ${item.isInteractive ? 'bg-amber-500/10 text-amber-500' : 'bg-slate-100 dark:bg-slate-800 text-emerald-500'}`}>
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 flex-1">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide flex items-center justify-between">
                <span>{item.title}</span>
                {item.isInteractive && (
                  <ExternalLink className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                )}
              </h3>
              <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                {item.issuer}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 pt-1">
                {item.description}
              </p>
              
              {item.isInteractive && item.actionText && (
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                    {item.actionText}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- MODAL: HEALTH CRISIS SIMULATION --- */}
      <AnimatePresence>
        {isHealthCrisisModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsHealthCrisisModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${isHealthCrisisFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-amber-500" /><h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">Health Crisis Management Simulation</h4></div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsHealthCrisisFullScreen(!isHealthCrisisFullScreen)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold">{isHealthCrisisFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}<span>{isHealthCrisisFullScreen ? "Normal" : "Fullscreen"}</span></button>
                  <button onClick={() => { setIsHealthCrisisModalOpen(false); setIsHealthCrisisFullScreen(false); }} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 shrink-0">
                <button onClick={() => setHealthCrisisTab('certs')} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${healthCrisisTab === 'certs' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>Certificate ({healthCrisisCerts.length})</button>
                <button onClick={() => setHealthCrisisTab('photos')} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${healthCrisisTab === 'photos' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>Field Photos ({healthCrisisPhotos.length})</button>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className="relative w-full h-[50vh] flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md group">
                  <AnimatePresence mode="wait">
                    {healthCrisisTab === 'certs' ? (
                      <motion.img key="hc-c" src={healthCrisisCerts[0]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none" />
                    ) : (
                      <motion.img key={`hc-p-${healthCrisisPhotoIdx}`} src={healthCrisisPhotos[healthCrisisPhotoIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none" />
                    )}
                  </AnimatePresence>
                  {healthCrisisTab === 'photos' && (
                    <>
                      <button onClick={() => setHealthCrisisPhotoIdx(prev => prev === 0 ? healthCrisisPhotos.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                      <button onClick={() => setHealthCrisisPhotoIdx(prev => prev === healthCrisisPhotos.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono shrink-0"><span>Issuer: Poltekkes Kemenkes Yogyakarta (2024)</span><span>Secure Document Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MODAL LAINNYA --- */}
      {/* Fire Safety Modal */}
      <AnimatePresence>
        {isFireModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsFireModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${isFireFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-4xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /><h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">Early Fire Prevention Training Credential & Field Practice</h4></div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsFireFullScreen(!isFireFullScreen)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold">{isFireFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}<span>{isFireFullScreen ? "Normal" : "Fullscreen"}</span></button>
                  <button onClick={() => { setIsFireModalOpen(false); setIsFireFullScreen(false); }} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 flex-1 overflow-y-auto">
                <div className="relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono font-bold text-amber-500 uppercase mb-2">Official Certificate</span>
                  <div className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden rounded-lg bg-slate-900/40">
                    <img src="/SERTIF_DOC/sertif_kebakaran.jpeg" alt="Fire Safety Certificate" className="max-h-full max-w-full object-contain rounded-md shadow-md select-none pointer-events-none" />
                  </div>
                </div>
                <div className="relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono font-bold text-amber-500 uppercase mb-2">Field Practice Documentation ({fireDocIdx + 1}/{fireImages.length})</span>
                  <div className="relative w-full h-[40vh] rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center shadow-md group">
                    <AnimatePresence mode="wait"><motion.img key={fireDocIdx} src={fireImages[fireDocIdx]} alt="Fire Practice" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain" /></AnimatePresence>
                    <button onClick={(e) => { e.stopPropagation(); setFireDocIdx(prev => prev === 0 ? fireImages.length - 1 : prev - 1); }} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                    <button onClick={(e) => { e.stopPropagation(); setFireDocIdx(prev => prev === fireImages.length - 1 ? 0 : prev + 1); }} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono shrink-0"><span>Issuer: Dinas Pemadam Kebakaran Kota Yogyakarta (2023)</span><span>Secure Document Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Water & Sanitation Simulation Modal */}
      <AnimatePresence>
        {isWasModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsWasModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${isWasFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-amber-500" /><h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">Emergency Water & Sanitation Simulation</h4></div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsWasFullScreen(!isWasFullScreen)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold">{isWasFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}<span>{isWasFullScreen ? "Normal" : "Fullscreen"}</span></button>
                  <button onClick={() => { setIsWasModalOpen(false); setIsWasFullScreen(false); }} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 shrink-0">
                <button onClick={() => setWasTab('certs')} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${wasTab === 'certs' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>Certificates ({wasCerts.length})</button>
                <button onClick={() => setWasTab('photos')} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${wasTab === 'photos' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>Field Photos ({wasPhotos.length})</button>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className="relative w-full h-[50vh] flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md group">
                  <AnimatePresence mode="wait">
                    {wasTab === 'certs' ? (
                      <motion.img key={`was-c-${wasCertIdx}`} src={wasCerts[wasCertIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none" />
                    ) : (
                      <motion.img key={`was-p-${wasPhotoIdx}`} src={wasPhotos[wasPhotoIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none" />
                    )}
                  </AnimatePresence>
                  <button onClick={() => { if (wasTab === 'certs') setWasCertIdx(prev => prev === 0 ? wasCerts.length - 1 : prev - 1); else setWasPhotoIdx(prev => prev === 0 ? wasPhotos.length - 1 : prev - 1); }} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => { if (wasTab === 'certs') setWasCertIdx(prev => prev === wasCerts.length - 1 ? 0 : prev + 1); else setWasPhotoIdx(prev => prev === wasPhotos.length - 1 ? 0 : prev + 1); }} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono shrink-0"><span>Issuer: BPBD Kabupaten Sleman (2024)</span><span>Secure Document Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* K3 Fasyankes Modal */}
      <AnimatePresence>
        {isK3ModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsK3ModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-slate-900 border rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${isK3FullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">Healthcare Facility OHS / K3 Fasyankes ({k3Idx + 1}/{k3Images.length})</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsK3FullScreen(!isK3FullScreen)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500">{isK3FullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsK3ModalOpen(false); setIsK3FullScreen(false); }} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border flex-1">
                <div className="relative w-full h-[55vh] flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md">
                  <AnimatePresence mode="wait"><motion.img key={k3Idx} src={k3Images[k3Idx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none" /></AnimatePresence>
                  <button onClick={() => setK3Idx(prev => prev === 0 ? k3Images.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => setK3Idx(prev => prev === k3Images.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono"><span>Issuer: PT. Nata Supervisi (PT. NEVIS) (2025)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* UKL-UPL Modal */}
      <AnimatePresence>
        {isUklModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsUklModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-slate-900 border rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${isUklFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">UKL-UPL Document Preparation Training ({uklIdx + 1}/{uklImages.length})</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsUklFullScreen(!isUklFullScreen)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500">{isUklFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsUklModalOpen(false); setIsUklFullScreen(false); }} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border flex-1">
                <div className="relative w-full h-[55vh] flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md">
                  <AnimatePresence mode="wait"><motion.img key={uklIdx} src={uklImages[uklIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none" /></AnimatePresence>
                  <button onClick={() => setUklIdx(prev => prev === 0 ? uklImages.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => setUklIdx(prev => prev === uklImages.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono"><span>Issuer: LPP Wana Wiyata Yogyakarta (2024)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* POPAL Modal */}
      <AnimatePresence>
        {isPopalModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsPopalModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-slate-900 border rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${isPopalFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">POPAL Competency-Based Training ({popalIdx + 1}/{popalImages.length})</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsPopalFullScreen(!isPopalFullScreen)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500">{isPopalFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsPopalModalOpen(false); setIsPopalFullScreen(false); }} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border flex-1">
                <div className="relative w-full h-[55vh] flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md">
                  <AnimatePresence mode="wait"><motion.img key={popalIdx} src={popalImages[popalIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none" /></AnimatePresence>
                  <button onClick={() => setPopalIdx(prev => prev === 0 ? popalImages.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => setPopalIdx(prev => prev === popalImages.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono"><span>Issuer: LPK Damai Semesta Jiwa & Poltekkes (2024)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Entomology Modal */}
      <AnimatePresence>
        {isEntoModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsEntoModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-slate-900 border rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${isEntoFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">Health Entomology & Vector Control ({entoIdx + 1}/{entoImages.length})</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsEntoFullScreen(!isEntoFullScreen)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500">{isEntoFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsEntoModalOpen(false); setIsEntoFullScreen(false); }} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border flex-1">
                <div className="relative w-full h-[55vh] flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md">
                  <AnimatePresence mode="wait"><motion.img key={entoIdx} src={entoImages[entoIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none" /></AnimatePresence>
                  <button onClick={() => setEntoIdx(prev => prev === 0 ? entoImages.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => setEntoIdx(prev => prev === entoImages.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono"><span>Issuer: PT. NEVIS & Poltekkes Kemenkes Yogyakarta (2024)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HAKLI Modal */}
      <AnimatePresence>
        {isHakliModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsHakliModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-slate-900 border rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${isHakliFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">Guest Lectures International Conference ({hakliIdx + 1}/{hakliImages.length})</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsHakliFullScreen(!isHakliFullScreen)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500">{isHakliFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsHakliModalOpen(false); setIsHakliFullScreen(false); }} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border flex-1">
                <div className="relative w-full h-[55vh] flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md">
                  <AnimatePresence mode="wait"><motion.img key={hakliIdx} src={hakliImages[hakliIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none" /></AnimatePresence>
                  <button onClick={() => setHakliIdx(prev => prev === 0 ? hakliImages.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => setHakliIdx(prev => prev === hakliImages.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono"><span>Issuer: Poltekkes Kemenkes Yogyakarta & HAKLI (2023)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SBH Modal */}
      <AnimatePresence>
        {isSbhModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsSbhModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-slate-900 border rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${isSbhFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">Health Bakti Camp IX ({sbhIdx + 1}/{sbhImages.length})</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsSbhFullScreen(!isSbhFullScreen)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500">{isSbhFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsSbhModalOpen(false); setIsSbhFullScreen(false); }} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border flex-1">
                <div className="relative w-full h-[55vh] flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md">
                  <AnimatePresence mode="wait"><motion.img key={sbhIdx} src={sbhImages[sbhIdx]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-h-full max-w-full object-contain select-none" /></AnimatePresence>
                  <button onClick={() => setSbhIdx(prev => prev === 0 ? sbhImages.length - 1 : prev - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => setSbhIdx(prev => prev === sbhImages.length - 1 ? 0 : prev + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono"><span>Issuer: Poltekkes Kemenkes Yogyakarta Scout Movement (2023)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LDK Modal */}
      <AnimatePresence>
        {isLdkModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setIsLdkModalOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className={`relative bg-white dark:bg-slate-900 border rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${isLdkFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">Leadership Basic Training (LDK)</h4>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsLdkFullScreen(!isLdkFullScreen)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500">{isLdkFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                  <button onClick={() => { setIsLdkModalOpen(false); setIsLdkFullScreen(false); }} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border flex-1">
                <div className="relative w-full h-[55vh] flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md">
                  <img src="/SERTIF_DOC/LDK.png" alt="LDK Certificate" className="max-h-full max-w-full object-contain select-none" />
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono"><span>Issuer: Poltekkes Kemenkes Yogyakarta (2022)</span><span>Secure Viewer</span></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}