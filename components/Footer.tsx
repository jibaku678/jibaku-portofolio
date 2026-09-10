export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-4">
        © {new Date().getFullYear()} Jibakudin Nur. Built with Next.js, Tailwind CSS, & Framer Motion.
      </div>
    </footer>
  )
}