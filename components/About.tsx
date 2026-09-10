import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">About Me</h2>
      
     <div className="flex justify-center md:justify-start">
  <div className="inline-block rounded-xl overflow-hidden shadow-lg border-2 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
    <img
      src="/foto.profil.jpeg"
      alt="Jibakudin Nur"
      className="w-56 h-auto block object-cover"
    />
  </div>
</div>

        {/* Deskripsi */}
        <div className="md:col-span-2 space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            I am an Applied Environmental Sanitation graduate from Poltekkes Kemenkes Yogyakarta with a Cum Laude predicate (GPA 3.71). My core expertise revolves around environmental health risk assessments, public health research methodologies, and spatial data mapping using GIS.
          </p>
          <p>
            With hands-on field experience ranging from leptospirosis spatial modeling to industrial OHS and sanitation audits at major manufacturing sites, I am driven by a commitment to translate complex field data into practical, protective community interventions.
          </p>
        </div>
      </div>
    </section>
  )
}