'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, X, CheckCircle2, Maximize2, Minimize2, ChevronLeft, ChevronRight, Camera, FileText } from 'lucide-react'

export default function Certifications() {
  // State untuk Modal Fire Safety
  const [isFireModalOpen, setIsFireModalOpen] = useState(false)
  const [isFireFullScreen, setIsFireFullScreen] = useState(false)
  const [fireDocIdx, setFireDocIdx] = useState(0)

  // State untuk Modal Water & Sanitation Simulation (WAS)
  const [isWasModalOpen, setIsWasModalOpen] = useState(false)
  const [isWasFullScreen, setIsWasFullScreen] = useState(false)
  const [wasTab, setWasTab] = useState<'certs' | 'photos'>('certs')
  const [wasCertIdx, setWasCertIdx] = useState(0)
  const [wasPhotoIdx, setWasPhotoIdx] = useState(0)

  const fireImages = [
    "/SERTIF_DOC/kebakaran1.jpg",
    "/SERTIF_DOC/kebakaran2.jpg"
  ]

  const wasCerts = [
    "/SERTIF_DOC/WAS1.jpeg",
    "/SERTIF_DOC/WAS2.jpeg"
  ]

  const wasPhotos = [
    "/SERTIF_DOC/WASPOTO1.jpeg",
    "/SERTIF_DOC/WASPOTO2.jpeg",
    "/SERTIF_DOC/WASPOTO3.jpeg"
  ]

  const nextFireSlide = () => setFireDocIdx((prev) => (prev === fireImages.length - 1 ? 0 : prev + 1))
  const prevFireSlide = () => setFireDocIdx((prev) => (prev === 0 ? fireImages.length - 1 : prev - 1))

  const nextWasCert = () => setWasCertIdx((prev) => (prev === wasCerts.length - 1 ? 0 : prev + 1))
  const prevWasCert = () => setWasCertIdx((prev) => (prev === 0 ? wasCerts.length - 1 : prev - 1))

  const nextWasPhoto = () => setWasPhotoIdx((prev) => (prev === wasPhotos.length - 1 ? 0 : prev + 1))
  const prevWasPhoto = () => setWasPhotoIdx((prev) => (prev === 0 ? wasPhotos.length - 1 : prev - 1))

  const trainingList = [
    {
      title: "Health Crisis Management Simulation in Disaster Situations via Interprofessional Education (IPE)",
      issuer: "Poltekkes Kemenkes Yogyakarta (2024)",
      description: "Simulation training on health crisis management and interprofessional coordination during disaster scenarios.",
      isInteractive: false
    },
    {
      title: "Guest Lectures International Conference: Industrial Sanitation",
      issuer: "Poltekkes Kemenkes Yogyakarta & HAKLI (2023)",
      description: "International conference focusing on optimizing human resources and improving industrial sanitation quality.",
      isInteractive: false
    },
    {
      title: "Health Bakti Camp IX (Kemah Bakti Kesehatan)",
      issuer: "Poltekkes Kemenkes Yogyakarta Scout Movement (2023)",
      description: "Community health devotion camp with the theme 'Pramuka Berbudaya, Berbakti Untuk Negeri' in Prambanan.",
      isInteractive: false
    },
    {
      title: "Leadership Basic Training (Latihan Dasar Kepemimpinan)",
      issuer: "Poltekkes Kemenkes Yogyakarta (2022)",
      description: "Soft skills enhancement program focused on patriotic values and national dedication.",
      isInteractive: false
    },
    {
      title: "POPAL Competency-Based Training (Wastewater Treatment)",
      issuer: "LPK Damai Semesta Jiwa & Poltekkes Kemenkes Yogyakarta (2024)",
      description: "Certified operational management for industrial and facility wastewater treatment plants.",
      isInteractive: false
    },
    {
      title: "Healthcare Facility OHS / K3 Fasyankes",
      issuer: "PT. Nata Supervisi (PT. NEVIS) (2025)",
      description: "Specialized training on health and safety implementation in hospital environments.",
      isInteractive: false
    },
    {
      title: "UKL-UPL Document Preparation Training",
      issuer: "LPP Wana Wiyata Yogyakarta (2024)",
      description: "Technical guidance on environmental management and monitoring document drafting.",
      isInteractive: false
    },
    {
      title: "Health Entomology & Vector Control Training",
      issuer: "PT. NEVIS & Poltekkes Kemenkes Yogyakarta (2024)",
      description: "Vector surveillance and pest control management strategies.",
      isInteractive: false
    },
    {
      title: "Early Fire Prevention Training",
      issuer: "Dinas Pemadam Kebakaran dan Penyelamatan Kota Yogyakarta (2023)",
      description: "Basic fire safety, prevention, and response protocols.",
      isInteractive: true,
      type: "fire",
      actionText: "View Credential & Field Documentation"
    },
    {
      title: "Emergency Water & Sanitation Simulation",
      issuer: "BPBD Kabupaten Sleman (2024)",
      description: "Emergency response and sanitation setup during disaster situations.",
      isInteractive: true,
      type: "was",
      actionText: "View Simulation & Certificate Gallery"
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
              if (item.isInteractive && item.type === 'fire') setIsFireModalOpen(true);
              if (item.isInteractive && item.type === 'was') setIsWasModalOpen(true);
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

      {/* Lightbox Modal: Fire Safety Certificate & Field Documentation */}
      <AnimatePresence>
        {isFireModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setIsFireModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${
                isFireFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-4xl w-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">
                    Early Fire Prevention Training Credential & Field Practice
                  </h4>
                </div>
                
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsFireFullScreen(!isFireFullScreen)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold">
                    {isFireFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isFireFullScreen ? "Normal" : "Fullscreen"}</span>
                  </button>
                  <button onClick={() => { setIsFireModalOpen(false); setIsFireFullScreen(false); }} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 flex-1 overflow-y-auto">
                <div className="relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono font-bold text-amber-500 uppercase mb-2">Official Certificate</span>
                  <div className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden rounded-lg bg-slate-900/40">
                    <img
                      src="/SERTIF_DOC/sertif_kebakaran.jpeg" 
                      alt="Fire Safety Certificate"
                      className="max-h-full max-w-full object-contain rounded-md shadow-md select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none select-none opacity-20">
                      <div className="flex justify-between w-full text-[9px] font-mono uppercase text-slate-900 dark:text-white font-bold">
                        <span>JIBAKUDIN NUR</span>
                        <span>RECRUITMENT ONLY</span>
                      </div>
                      <div className="text-center transform -rotate-6">
                        <span className="text-xs sm:text-sm font-black tracking-widest text-slate-900 dark:text-white uppercase">
                          VERIFIED • JIBAKUDIN NUR
                        </span>
                      </div>
                      <div className="flex justify-between w-full text-[9px] font-mono uppercase text-slate-900 dark:text-white font-bold">
                        <span>FIRE SAFETY</span>
                        <span>SECURE VIEW</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono font-bold text-amber-500 uppercase mb-2">Field Practice Documentation ({fireDocIdx + 1}/{fireImages.length})</span>
                  
                  <div className="relative w-full h-[40vh] rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center shadow-md group">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={fireDocIdx}
                        src={fireImages[fireDocIdx]}
                        alt={`Fire Safety Practice ${fireDocIdx + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="max-h-full max-w-full object-contain"
                      />
                    </AnimatePresence>

                    <button onClick={(e) => { e.stopPropagation(); prevFireSlide(); }} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); nextFireSlide(); }} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 mt-3">
                    {fireImages.map((_, dIdx) => (
                      <button key={dIdx} onClick={(e) => { e.stopPropagation(); setFireDocIdx(dIdx); }} className={`h-1.5 rounded-full transition-all cursor-pointer ${fireDocIdx === dIdx ? 'w-5 bg-amber-500' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono shrink-0">
                <span>Issuer: Dinas Pemadam Kebakaran dan Penyelamatan Kota Yogyakarta (2023)</span>
                <span>Secure Document Viewer</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal: Emergency Water & Sanitation Simulation (WAS) */}
      <AnimatePresence>
        {isWasModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setIsWasModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${
                isWasFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-500" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">
                    Emergency Water & Sanitation Simulation ({wasTab === 'certs' ? `Certificates/Docs ${wasCertIdx + 1}/${wasCerts.length}` : `Field Photos ${wasPhotoIdx + 1}/${wasPhotos.length}`})
                  </h4>
                </div>
                
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsWasFullScreen(!isWasFullScreen)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold">
                    {isWasFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isWasFullScreen ? "Normal" : "Fullscreen"}</span>
                  </button>
                  <button onClick={() => { setIsWasModalOpen(false); setIsWasFullScreen(false); }} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Tab Selector: Certificates vs Field Photos */}
              <div className="flex items-center gap-2 mt-4 shrink-0">
                <button
                  onClick={() => setWasTab('certs')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    wasTab === 'certs' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <FileText className="w-4 h-4" /> Certificates / Materials ({wasCerts.length})
                </button>
                <button
                  onClick={() => setWasTab('photos')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    wasTab === 'photos' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <Camera className="w-4 h-4" /> Field Photos ({wasPhotos.length})
                </button>
              </div>

              {/* Slider Area with object-contain */}
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className="relative w-full h-[50vh] flex items-center justify-center bg-slate-950/40 rounded-lg overflow-hidden shadow-md group">
                  <AnimatePresence mode="wait">
                    {wasTab === 'certs' ? (
                      <motion.img
                        key={`was-cert-${wasCertIdx}`}
                        src={wasCerts[wasCertIdx]}
                        alt={`Certificate ${wasCertIdx + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="max-h-full max-w-full object-contain select-none"
                      />
                    ) : (
                      <motion.img
                        key={`was-photo-${wasPhotoIdx}`}
                        src={wasPhotos[wasPhotoIdx]}
                        alt={`Field Photo ${wasPhotoIdx + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="max-h-full max-w-full object-contain select-none"
                      />
                    )}
                  </AnimatePresence>

                  <button onClick={() => { if (wasTab === 'certs') prevWasCert(); else prevWasPhoto(); }} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={() => { if (wasTab === 'certs') nextWasCert(); else nextWasPhoto(); }} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5 mt-3">
                  {wasTab === 'certs' ? (
                    wasCerts.map((_, dIdx) => (
                      <button key={dIdx} onClick={() => setWasCertIdx(dIdx)} className={`h-1.5 rounded-full transition-all cursor-pointer ${wasCertIdx === dIdx ? 'w-6 bg-amber-500' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`} />
                    ))
                  ) : (
                    wasPhotos.map((_, dIdx) => (
                      <button key={dIdx} onClick={() => setWasPhotoIdx(dIdx)} className={`h-1.5 rounded-full transition-all cursor-pointer ${wasPhotoIdx === dIdx ? 'w-6 bg-amber-500' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`} />
                    ))
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono shrink-0">
                <span>Issuer: BPBD Kabupaten Sleman (2024)</span>
                <span>Secure Document Viewer</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}