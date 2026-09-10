import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import SerkomSection from '@/components/SerkomSection' // Import dengan nama baru
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <SerkomSection /> {/* Panggil komponennya di sini */}
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}