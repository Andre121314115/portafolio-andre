'use client'
import { useEffect, useRef } from 'react'

/**
 * Hook que aplica fade-up a los elementos hijos cuando entran en el viewport.
 * Uso: const ref = useScrollFade()  →  <div ref={ref}>...</div>
 */
export default function useScrollFade(threshold = 0.08) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll('[data-fade]')

    targets.forEach(el => {
      el.style.opacity   = '0'
      el.style.transform = 'translateY(18px)'
      el.style.transition = 'opacity 0.55s ease, transform 0.55s ease'
    })

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity   = '1'
          e.target.style.transform = 'translateY(0)'
          obs.unobserve(e.target)
        }
      })
    }, { threshold })

    targets.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [threshold])

  return ref
}
