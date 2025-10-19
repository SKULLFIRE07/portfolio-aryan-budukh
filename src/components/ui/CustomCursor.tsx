'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore } from '@/lib/store'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { cursor, setCursor } = useAppStore()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target && typeof target.matches === 'function' && target.matches('a, button, [data-cursor="project"], [data-cursor="link"]')) {
        setCursor({ isHovering: true, variant: 'project', text: target.dataset.cursorText || 'View' })
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target && typeof target.matches === 'function' && target.matches('a, button, [data-cursor="project"], [data-cursor="link"]')) {
        setCursor({ isHovering: false, variant: 'default', text: '' })
      }
    }

    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [setCursor])

  const cursorVariants = {
    default: {
      width: 8,
      height: 8,
      backgroundColor: 'rgba(59, 130, 246, 1)',
    },
    project: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(59, 130, 246, 0)',
      border: '2px solid rgba(59, 130, 246, 1)',
    },
    link: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      opacity: 0.8,
    },
  }

  return (
    <>
      {/* Cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        variants={cursorVariants}
        animate={cursor.variant}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Cursor text */}
      <AnimatePresence>
        {cursor.isHovering && cursor.text && (
          <motion.div
            className="fixed pointer-events-none z-[9999] text-white text-sm font-medium"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 20,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {cursor.text}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
