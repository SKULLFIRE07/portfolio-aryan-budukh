'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { currentSection, setCurrentSection } = useAppStore()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-2xl mx-auto max-w-7xl">
              <div className="flex items-center justify-between h-16 px-6">
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-xl font-bold text-gradient"
                >
                  ARYAN
                </motion.div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        handleNavClick(item.href)
                        setCurrentSection(item.name.toLowerCase())
                      }}
                      className={cn(
                        "text-sm font-medium transition-colors duration-200 hover:text-blue-400",
                        currentSection === item.name.toLowerCase() 
                          ? "text-blue-400" 
                          : "text-gray-300"
                      )}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  
                  {/* Resume Download Button */}
                  <motion.a
                    href="/resume.pdf"
                    download="Aryan_Budukh_Resume.pdf"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                  >
                    Resume
                  </motion.a>
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
