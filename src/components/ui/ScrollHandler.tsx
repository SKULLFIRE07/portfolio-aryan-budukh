'use client'

import { useEffect } from 'react'

export function ScrollHandler() {

  useEffect(() => {
    // Prevent browser from restoring scroll position on reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    // Function to scroll to top on page load/reload
    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }

    // Handle page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', scrollToTop)
    } else {
      scrollToTop()
    }

    // Handle navigation and focus on sections
    const handlePopState = () => {
      // Small delay to allow page to render
      setTimeout(scrollToTop, 10)
    }

    const handleHashChange = () => {
      // If there's a hash, scroll to that section, otherwise go to top
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        scrollToTop()
      }
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('hashchange', handleHashChange)

    // Cleanup
    return () => {
      document.removeEventListener('DOMContentLoaded', scrollToTop)
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  // Handle hash navigation on mount
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return null
}
