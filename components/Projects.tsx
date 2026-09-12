'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, ChevronLeft, ChevronRight, X, Maximize2, Minimize2, Map, Camera } from 'lucide-react'

export default function Projects() {
  // State untuk modal slider foto dokumentasi Research Assistant (RA1 - RA5)
  const [isRaModalOpen, setIsRaModalOpen] = useState(false)
  const [isRaFullScreen, setIsRaFullScreen] = useState(false)
  const [raDocIdx, setRaDocIdx] = useState(0)

  // State untuk modal slider dokumentasi Research Enumerator (Foto Lapangan & Peta)
  const [isEnumModalOpen, setIsEnumModalOpen] = useState(false)
  const [isEnumFullScreen, setIsEnumFullScreen] = useState(false)
  const [enumTab, setEnumTab] = useState<'photos' | 'maps'>('photos')
  const [enumPhotoIdx, setEnumPhotoIdx] = useState(0)
  const [enumMapIdx, setEnumMapIdx] = useState(0)

  const raImages = [
    "/PROJEK_DOC/RA1.jpeg",
    "/PROJEK_DOC/RA2.jpeg",
    "/PROJEK_DOC/RA3.jpeg",
    "/PROJEK_DOC/RA4.jpeg",
    "/PROJEK_DOC/RA5.jpeg"
  ]

  const enumPhotos = [
    "/PROJEK_DOC/foto1.jpg",
    "/PROJEK_DOC/foto2.jpg",
    "/PROJEK_DOC/foto3.jpg",
    "/PROJEK_DOC/foto4.jpg",
    "/PROJEK_DOC/foto5.jpg",
    "/PROJEK_DOC/foto6.jpg"
  ]

  const enumMaps = [
    "/PROJEK_DOC/peta1.jpg",
    "/PROJEK_DOC/peta2.jpg",
    "/PROJEK_DOC/peta3.jpg",
    "/PROJEK_DOC/peta4.jpg",
    "/PROJEK_DOC/peta5.jpg",
    "/PROJEK_DOC/peta6.jpg",
    "/PROJEK_DOC/peta7.jpg"
  ]

  // Handler navigasi Research Assistant
  const nextRaSlide = () => setRaDocIdx((prev) => (prev === raImages.length - 1 ? 0 : prev + 1))
  const prevRaSlide = () => setRaDocIdx((prev) => (prev === 0 ? raImages.length - 1 : prev - 1))

  // Handler navigasi Research Enumerator (Photos)
  const nextEnumPhoto = () => setEnumPhotoIdx((prev) => (prev === enumPhotos.length - 1 ? 0 : prev + 1))
  const prevEnumPhoto = () => setEnumPhotoIdx((prev) => (prev === 0 ? enumPhotos.length - 1 : prev - 1))

  // Handler navigasi Research Enumerator (Maps)
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
      type: "thesis"
    },
    {
      tag: "RESEARCH ASSISTANT",
      title: "Personal Hygiene Education for Food Handlers",
      description: "Supported field data collection, participant coordination, and KAP evaluation for food hygiene education using video media in Prambanan.",
      tools: ["Field Observation", "KAP Assessment", "Coordination"],
      metric: "Completed 2026",
      link: "#",
      hasDocumentation: true,
      type: "ra"
    },
    {
      tag: "RESEARCH ENUMERATOR",
      title: "Leptospirosis Transmission Prediction Model",
      description: "Served as a research enumerator utilizing the Schnabel method for rodent population capture-recapture and systematic field documentation.",
      tools: ["Vector Surveillance", "Data Documentation"],
      metric: "Completed (2025–2026)",
      link: "#",
      hasDocumentation: true,
      type: "enumerator"
    }
  ]

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/60">
      <div className="flex flex-col items-start gap-2 mb-10">
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
          // Research & Case Studies
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          Selected Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsList.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-emerald-500/40 transition-all"
          >
            <div>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {project.tag}
              </span>

              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight my-3">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tools.map((tool, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-mono rounded">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-slate-500">
                <span>{project.metric}</span>
                
                {project.hasDocumentation ? (
                  <button
                    onClick={() => {
                      if (project.type === 'ra') setIsRaModalOpen(true);
                      if (project.type === 'enumerator') setIsEnumModalOpen(true);
                    }}
                    className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer font-bold"
                  >
                    View Documentation <FileText className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <a 
                    href={project.link} 
                    className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Document <FileText className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal: Research Assistant (RA1 - RA5) */}
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
              className={`relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${
                isRaFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">
                    Research Assistant Field Documentation ({raDocIdx + 1} / {raImages.length})
                  </h4>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsRaFullScreen(!isRaFullScreen)}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                  >
                    {isRaFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isRaFullScreen ? "Normal" : "Fullscreen"}</span>
                  </button>

                  <button
                    onClick={() => { setIsRaModalOpen(false); setIsRaFullScreen(false); }}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center shadow-md group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={raDocIdx}
                      src={raImages[raDocIdx]}
                      alt={`Research Assistant Documentation ${raDocIdx + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  <button onClick={prevRaSlide} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={nextRaSlide} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5 mt-3">
                  {raImages.map((_, dIdx) => (
                    <button key={dIdx} onClick={() => setRaDocIdx(dIdx)} className={`h-1.5 rounded-full transition-all cursor-pointer ${raDocIdx === dIdx ? 'w-6 bg-emerald-500' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`} />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono shrink-0">
                <span>Personal Hygiene Education for Food Handlers (Prambanan)</span>
                <span>Secure Document Viewer</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal: Research Enumerator (Foto Lapangan & Peta Spasial) */}
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
              className={`relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col ${
                isEnumFullScreen ? 'w-screen h-screen max-w-none max-h-none rounded-none p-4' : 'max-w-3xl w-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">
                    Research Enumerator Documentation ({enumTab === 'photos' ? `Field Photos ${enumPhotoIdx + 1}/${enumPhotos.length}` : `Spatial Maps ${enumMapIdx + 1}/${enumMaps.length}`})
                  </h4>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsEnumFullScreen(!isEnumFullScreen)}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                  >
                    {isEnumFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isEnumFullScreen ? "Normal" : "Fullscreen"}</span>
                  </button>

                  <button
                    onClick={() => { setIsEnumModalOpen(false); setIsEnumFullScreen(false); }}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Tab Selector: Field Photos vs Spatial Maps */}
              <div className="flex items-center gap-2 mt-4 shrink-0">
                <button
                  onClick={() => setEnumTab('photos')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    enumTab === 'photos' 
                      ? 'bg-emerald-600 text-white shadow-md' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Camera className="w-4 h-4" /> Field Photos ({enumPhotos.length})
                </button>
                <button
                  onClick={() => setEnumTab('maps')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    enumTab === 'maps' 
                      ? 'bg-emerald-600 text-white shadow-md' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Map className="w-4 h-4" /> Spatial Maps ({enumMaps.length})
                </button>
              </div>

              {/* Area Slider */}
              <div className="my-4 relative flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex-1">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center shadow-md group">
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
                        className="w-full h-full object-cover"
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
                        className="w-full h-full object-cover"
                      />
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => {
                      if (enumTab === 'photos') prevEnumPhoto();
                      else prevEnumMap();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      if (enumTab === 'photos') nextEnumPhoto();
                      else nextEnumMap();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex items-center gap-1.5 mt-3">
                  {enumTab === 'photos' ? (
                    enumPhotos.map((_, dIdx) => (
                      <button key={dIdx} onClick={() => setEnumPhotoIdx(dIdx)} className={`h-1.5 rounded-full transition-all cursor-pointer ${enumPhotoIdx === dIdx ? 'w-6 bg-emerald-500' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`} />
                    ))
                  ) : (
                    enumMaps.map((_, dIdx) => (
                      <button key={dIdx} onClick={() => setEnumMapIdx(dIdx)} className={`h-1.5 rounded-full transition-all cursor-pointer ${enumMapIdx === dIdx ? 'w-6 bg-emerald-500' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`} />
                    ))
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono shrink-0">
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