'use client'
import { useEffect, useRef } from 'react'

export default function SectionHeader({ num, title }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current.style.opacity   = '0'
    ref.current.style.transform = 'translateY(16px)'
    ref.current.style.transition = 'opacity 0.6s ease, transform 0.6s ease'

    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      e.target.style.opacity   = '1'
      e.target.style.transform = 'translateY(0)'
      obs.disconnect()
    }, { threshold: 0.2 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex items-center gap-4 mb-12">
      <span className="font-mono text-[0.6rem] text-accent/60 tracking-[3px]">
        {num}
      </span>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-2" />
    </div>
  )
}
