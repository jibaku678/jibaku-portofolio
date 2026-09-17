'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const backgroundBanner = '/newbanner1.png'

  // --- HTML5 CANVAS INTERACTIVE (Konsisten dengan section lainnya) ---
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    const particlesCount = 45
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = []

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5,
      })
    }

    let mouseX = -1000
    let mouseY = -1000

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    window.addEventListener('mousemove', handleMouseMove)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      const isDark = document.documentElement.classList.contains('dark')
      const baseAlpha = isDark ? 0.3 : 0.12 

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(2, 132, 199, ${baseAlpha})` 
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(22, 163, 74, ${0.15 * (1 - dist / 110) * (isDark ? 1 : 0.4)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        const mdx = p.x - mouseX
        const mdy = p.y - mouseY
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mdist < 160) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouseX, mouseY)
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * (1 - mdist / 160)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const experiences = [
    {
      period: "August – October 2025",
      role: "Industrial Field Practice | Environmental Health & K3",
      location: "PT Dua Kelinci, Pati",
      description: "Supported industrial environmental health and OHS operational activities.",
      highlights: [
        "Supported K3/HSE activities through hazard identification and risk assessment using HIRADC and JSA, work permits, safety patrols, and safe work practices.",
        "Studied fire emergency preparedness through evacuation route planning and placement of fire alarms, hydrants, and fire extinguishers, including hands-on APAR and hydrant practice.",
        "Studied workplace accident investigation and incident report preparation, as well as safety signs, SOPs, MSDS, and risk management.",
        "Gained exposure to B3 waste, wastewater, air emissions, WWTP, and clean and drinking water management.",
        "Studied RKL-RPL/AMDAL and PROPER and their application in industrial environmental management.",
        "Supported food hygiene and sanitation aspects within the industrial setting.",
        "Prepared an aerated grit chamber drawing as part of wastewater treatment system practice."
      ]
    },
    {
      period: "April – May 2025",
      role: "Community Health Center Field Practice | Environmental Health",
      location: "Godean II Community Health Center, Sleman, Yogyakarta",
      description: "Conducted field activities in a primary healthcare setting focusing on sanitation and disease epidemiology.",
      highlights: [
        "Conducted healthy-house inspections and assessed environmental sanitation conditions in the community.",
        "Participated in epidemiological investigations of environmentally based diseases and field data collection.",
        "Participated in Jumantik activities, health education, and Jumantik Cilik training.",
        "Conducted larval surveys, including Anopheles larval surveys as required by field activities.",
        "Mapped community clean-water sources and healthy-house inspection results to support environmental health problem identification.",
        "Supported community-based environmental health activities within the scope of environmental health services."
      ]
    },
    {
      period: "August – October 2024",
      role: "Hospital Field Practice | Environmental Health Installation",
      location: "Bethesda Hospital, Yogyakarta",
      description: "Completed clinical rotations across hospital environmental management units.",
      highlights: [
        "Participated in the Environmental Health Installation through rotation across several hospital environmental management units.",
        "Gained exposure to medical B3 and non-B3 solid waste management, sanitation and pest control, and clean and drinking water management.",
        "Participated in environmental laboratory and wastewater treatment plant activities.",
        "Studied hospital environmental health management through operational activities, monitoring, and environmental factor control."
      ]
    },
    {
      period: "March – April 2024",
      role: "Institutional Field Practice | Environmental Health",
      location: "Magelang District Health Office, Magelang",
      description: "Applied environmental sanitation principles within a government institutional setting.",
      highlights: [
        "Gained exposure to environmental health management within a government institution supporting community health.",
        "Participated in activities related to environmental health management, health risk management, coordination, administration, and activity reporting.",
        "Studied workflow and coordination of environmental health programs within a government institution."
      ]
    },
    {
      period: "January – February 2026",
      role: "Community Field Practice | Community Empowerment",
      location: "Ngentak Hamlet, Argorejo, Sedayu, Bantul, Yogyakarta",
      description: "Executed community-level environmental health interventions and local empowerment initiatives.",
      highlights: [
        "Identified environmental health problems with community members and developed empowerment activities based on local needs.",
        "Delivered food hygiene and sanitation education for food handlers/UMKM and environmental health education activities.",
        "Conducted Jumantik Cilik training and environmental behavior education for children through tutoring, sanitation snakes-and-ladders games, and educational film screenings.",
        "Supported provision of simple water filters to address household hard-water issues.",
        "Supported waste donation activities and youth involvement in waste management based on the 5R principles.",
        "Coordinated with community members in planning and implementing environmental empowerment activities."
      ]
    }
  ]

  return (
    <section id="experience" className="relative py-20 sm:py-32 w-full bg-[#F8FAFC] dark:bg-[#0B1329] transition-colors duration-300 overflow-hidden border-t border-slate-200/80 dark:border-slate-800/60">
      
      {/* 1. BACKGROUND LAYERING (Konsisten dengan Hero, About, & Skills) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 filter blur-2xl opacity-15 dark:opacity-25 scale-105 select-none">
          <Image src={backgroundBanner} alt="Experience Ambient Fill" fill className="object-cover" />
        </div>

        <div className="absolute inset-0 w-full h-full flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]">
          <Image
            src={backgroundBanner}
            alt="Experience Field Backdrop"
            fill
            className="object-cover opacity-25 dark:opacity-35 select-none"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/70 to-[#F8FAFC] dark:from-[#0B1329] dark:via-[#0B1329]/75 dark:to-[#0B1329] pointer-events-none"></div>
      </div>

      {/* 2. HTML5 CANVAS INTERACTIVE */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-60"></canvas>

      {/* 3. KONTEN UTAMA */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-start gap-2 mb-10 sm:mb-12">
          <span className="text-xs font-bold text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-widest font-mono">
            // Professional Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] dark:text-[#F8FAFC] uppercase tracking-tight">
            Practical & Field Experience
          </h2>
        </div>

        {/* List Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white/95 dark:bg-[#1C2541]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-slate-700/60">
                <div>
                  <span className="text-xs font-bold text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-wider font-mono">
                    {exp.role}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#1E293B] dark:text-[#F8FAFC] uppercase tracking-tight mt-1">
                    {exp.location}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-[#475569] dark:text-[#94A3B8] bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl w-fit">
                  <Calendar className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" /> {exp.period}
                </div>
              </div>

              <p className="text-sm text-[#334155] dark:text-[#94A3B8] mb-4 font-medium">
                {exp.description}
              </p>

              <ul className="space-y-2.5">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] dark:text-[#4ADE80] shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}