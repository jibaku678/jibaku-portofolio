export default function About() {
  return (
    <section id="about" className="py-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-500">Background</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">About Me</h2>
          </div>
          <div className="md:col-span-2 text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              I am an Applied Bachelor (D4) graduate in Environmental Sanitation from Poltekkes Kemenkes Yogyakarta (GPA 3.71/4.00, Cum Laude). My expertise centers on environmental health risk assessment, vector surveillance, spatial mapping (GIS), and HSE implementation.
            </p>
            <p>
              Having completed rigorous practical placements in hospitals, industrial sites (PT Dua Kelinci), public health centers, and community programs, I specialize in combining rigorous field observations with statistical and spatial analytical tools like ArcGIS and SPSS to generate clear public health insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}