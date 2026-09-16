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
      setScrolled(window.scrollY > 20)
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
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 py-4 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] py-3' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo / Nama */}
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-xs sm:text-sm font-black text-slate-900 dark:text-white tracking-wider uppercase flex items-center gap-2.5 bg-white/70 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 px-4 py-2 rounded-xl backdrop-blur-md group shadow-sm"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></span>
          <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Jibakudin Nur</span>
        </motion.a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/90 px-3.5 py-1.5 rounded-full shadow-sm backdrop-blur-xl">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              whileHover={{ scale: 1.05, color: '#059669' }}
              whileTap={{ scale: 0.95 }}
              className="px-3.5 py-1 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest transition-colors rounded-full hover:bg-emerald-500/10 dark:hover:text-emerald-400"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Tombol Kanan (CV & Theme Toggle Terintegrasi Rapi) */}
        <div className="hidden md:flex items-center gap-2.5">
          <motion.a
            href="/CV_JIBAKUDIN_NUR_fix_1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer border border-emerald-500/30"
          >
            <FileText className="w-3.5 h-3.5" /> CV
          </motion.a>

          {/* Tombol Theme Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.05, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-white transition-all cursor-pointer shadow-sm text-xs font-bold uppercase tracking-wider"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
            <span className="text-[10px] font-mono">{isDarkMode ? 'Dark' : 'Light'}</span>
          </motion.button>
        </div>

        {/* Tombol Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-mono uppercase font-bold shadow-sm"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
            <span>{isDarkMode ? 'Dark' : 'Light'}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors shadow-sm"
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
            className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-2xl mt-3 p-6 space-y-4 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 uppercase tracking-wider py-1.5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <a
                href="/CV_JIBAKUDIN_NUR_fix_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm"
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