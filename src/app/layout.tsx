import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { FloatingElements } from '@/components/ui/FloatingElements'
import { ScrollHandler } from '@/components/ui/ScrollHandler'
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Aryan Budukh - Creative Developer & ML Engineer',
  description: 'Computer Science student specializing in Machine Learning, Deep Learning, and Computer Vision. Building innovative solutions for real-world problems.',
  keywords: ['Portfolio', 'Machine Learning', 'Computer Vision', 'Web Development', 'Aryan Budukh'],
  authors: [{ name: 'Aryan Budukh' }],
  openGraph: {
    title: 'Aryan Budukh - Creative Developer & ML Engineer',
    description: 'Computer Science student specializing in Machine Learning, Deep Learning, and Computer Vision.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Providers>
          <ScrollHandler />
          <FloatingElements />
          <CustomCursor />
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
