import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Jibakudin Nur | Environmental Health · Research · GIS',
  description: 'Personal portfolio of Jibakudin Nur, an Environmental Health practitioner specializing in spatial risk analysis, environmental sanitation, OHS/K3, and public health research.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-brand-500 selection:text-white">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}