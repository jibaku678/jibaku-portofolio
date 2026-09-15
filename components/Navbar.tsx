'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 py-4 ${
        scrolled 
          ? 'bg-slate-950/85 backdrop-blur-2xl border-b border-emerald-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo / Nama */}
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="text-xs sm:text-sm font-black text-white tracking-wider uppercase flex items-center gap-2.5 bg-slate-900/80 border border-slate-800/80 px-4 py-2 rounded-xl backdrop-blur-md shadow-inner group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse"></span>
          <span className="group-hover:text-emerald-400 transition-colors">Jibakudin Nur</span>
        </motion.a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/90 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-xl">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              whileHover={{ scale: 1.05, color: '#34d399' }}
              whileTap={{ scale: 0.95 }}
              className="relative px-3.5 py-1 text-xs font-bold text-slate-300 uppercase tracking-widest transition-colors rounded-full hover:bg-emerald-500/10"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Tombol Kanan (CV & Theme Toggle) */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="/CV_JIBAKUDIN_NUR_fix_1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/30 cursor-pointer border border-emerald-500/40"
          >
            <FileText className="w-3.5 h-3.5" /> CV
          </motion.a>

          {/* Tombol Theme dengan Keterangan Kecil */}
          <div className="flex flex-col items-center">
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-all cursor-pointer shadow-md"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-200" />}
            </motion.button>
            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-tighter mt-0.5 select-none">
              {isDarkMode ? 'Dark' : 'Light'}
            </span>
          </div>
        </div>

        {/* Tombol Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="flex flex-col items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-200" />}
            </button>
            <span className="text-[8px] font-mono text-slate-400 uppercase">{isDarkMode ? 'Dark' : 'Light'}</span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-2xl border border-slate-800 rounded-2xl mt-3 p-6 space-y-4 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-slate-300 hover:text-emerald-400 uppercase tracking-wider py-1.5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800">
              <a
                href="/CV_JIBAKUDIN_NUR_fix_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-md"
              >
                <FileText className="w-4 h-4" /> Open Full CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}