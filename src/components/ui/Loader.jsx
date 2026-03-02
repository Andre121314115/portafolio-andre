'use client'
import { useEffect, useState } from 'react'

const LABEL = 'ADL.DEV'

export default function Loader({ onDone }) {
  const [litCount, setLitCount] = useState(0)
  const [pct,      setPct]      = useState(0)
  const [hidden,   setHidden]   = useState(false)

  useEffect(() => {
    const letterTimers = LABEL.split('').map((_, i) =>
      setTimeout(() => setLitCount(i + 1), i * 60)
    )
    let p = 0
    const pctTimer = setInterval(() => {
      p = Math.min(p + Math.random() * 30 + 10, 100)
      setPct(Math.floor(p))
      if (p >= 100) clearInterval(pctTimer)
    }, 80)
    const hideTimer = setTimeout(() => {
      setHidden(true)
      onDone?.()
    }, 1100)
    return () => {
      letterTimers.forEach(clearTimeout)
      clearInterval(pctTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (hidden) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-[#080810] flex flex-col items-center justify-center gap-3 px-4">
      <div
        className="font-mono font-bold uppercase whitespace-nowrap"
        style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', letterSpacing: 'clamp(0.3rem, 2vw, 1rem)' }}
      >
        {LABEL.split('').map((ch, i) => (
          <span key={i} style={{
            display:    'inline-block',
            transition: 'color 0.2s, text-shadow 0.2s',
            color:      i < litCount ? '#00e5a0'  : 'transparent',
            WebkitTextStroke: i < litCount ? '0' : '1px rgba(0,229,160,0.3)',
            textShadow: i < litCount ? '0 0 30px rgba(0,229,160,0.6)' : 'none',
          }}>
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </div>

      <div className="w-32 h-px bg-[#1a1a38] overflow-hidden mt-2">
        <div
          className="h-full bg-[#00e5a0] transition-all duration-100"
          style={{ width: pct + '%' }}
        />
      </div>
    </div>
  )
}
