'use client'
import { useEffect, useRef } from 'react'

/**
 * Aplica fade-up suave a todos los elementos [data-fade] dentro del contenedor.
 * Uso: const ref = useScrollFade()  →  <section ref={ref}>
 *        Elemento hijo:              <div data-fade data-delay="100">...</div>
 * 
 * data-delay: retraso en ms (opcional, para escalonar animaciones)
 */
export default function useScrollFade(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll('[data-fade]')

    targets.forEach(el => {
      el.style.opacity    = '0'
      el.style.transform  = 'translateY(22px)'
      el.style.transition = `opacity 0.6s ease, transform 0.6s ease`
      el.style.willChange = 'opacity, transform'
    })

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const delay = e.target.dataset.delay || 0
        setTimeout(() => {
          e.target.style.opacity   = '1'
          e.target.style.transform = 'translateY(0)'
        }, Number(delay))
        obs.unobserve(e.target)
      })
    }, { threshold })

    targets.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [threshold])

  return ref
}
