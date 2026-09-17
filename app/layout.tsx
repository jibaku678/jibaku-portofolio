import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Jibakudin Nur | Environmental Health · Research · GIS',
  description: 'Personal portfolio of Jibakudin Nur, an Environmental Health practitioner specializing in spatial risk analysis, environmental sanitation, OHS/K3, and public health research.',
  openGraph: {
    title: 'Jibakudin Nur | Environmental Health · Research · GIS',
    description: 'Personal portfolio of Jibakudin Nur, an Environmental Health practitioner specializing in spatial risk analysis, environmental sanitation, OHS/K3, and public health research.',
    url: 'https://jibaku-portofolio-pearl.vercel.app',
    siteName: 'Jibakudin Nur Portfolio',
    images: [
      {
        url: '/preview.png', // Mengambil file preview.png langsung dari folder public
        width: 1200,
        height: 630,
        alt: 'Jibakudin Nur Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jibakudin Nur | Environmental Health · Research · GIS',
    description: 'Personal portfolio of Jibakudin Nur, an Environmental Health practitioner specializing in spatial risk analysis, environmental sanitation, OHS/K3, and public health research.',
    images: ['/preview.png'],
  },
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