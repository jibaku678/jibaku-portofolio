{/* Card Institusi Pendidikan dengan Logo Kampus & Mata Kuliah */}
              <div className="flex flex-col gap-4 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-1.5 shrink-0 border border-slate-200 dark:border-slate-700">
                    <img 
                      src="/logo.polkesyo.png" 
                      alt="Poltekkes Kemenkes Yogyakarta Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-bold">Education Background</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">2022 – 2026</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight mb-1">
                      Applied Bachelor (D4) in Environmental Sanitation
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                      Poltekkes Kemenkes Yogyakarta <span className="text-emerald-600 dark:text-emerald-400 font-bold mx-1">•</span> Cum Laude (GPA 3.71 / 4.00)
                    </p>
                  </div>
                </div>
                
                {/* Improvised Coursework Hook */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                    Core Competencies & Coursework
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "HSE, SMK3 & ISO 45001", 
                      "AMDAL / EIA", 
                      "GIS & Remote Sensing", 
                      "Environmental Epidemiology", 
                      "Industrial & Hospital Sanitation", 
                      "Waste & Water Treatment", 
                      "HACCP & Food Hygiene"
                    ].map((subject, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>