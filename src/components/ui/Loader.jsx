'use client'
import { useEffect, useState } from 'react'

const LABEL = 'PORTAFOLIO ANDRE'

export default function Loader({ onDone }) {
  const [litCount, setLitCount] = useState(0)
  const [pct,      setPct]      = useState(0)
  const [status,   setStatus]   = useState('iniciando...')
  const [hidden,   setHidden]   = useState(false)

  const statuses = ['cargando recursos...', 'iniciando módulos...', 'preparando portafolio...', '¡listo!']

  useEffect(() => {
    const letterTimers = LABEL.split('').map((_, i) =>
      setTimeout(() => setLitCount(i + 1), i * 80)
    )
    let p = 0
    const pctTimer = setInterval(() => {
      p = Math.min(p + Math.random() * 18 + 4, 100)
      setPct(Math.floor(p))
      if (p >= 100) clearInterval(pctTimer)
    }, 180)
    const statusTimers = statuses.map((s, i) =>
      setTimeout(() => setStatus(s), i * 550)
    )
    const hideTimer = setTimeout(() => {
      setHidden(true)
      onDone?.()
    }, 2600)
    return () => {
      letterTimers.forEach(clearTimeout)
      clearInterval(pctTimer)
      statusTimers.forEach(clearTimeout)
      clearTimeout(hideTimer)
    }
  }, [])

  if (hidden) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center gap-2 px-4">
      <p className="font-mono text-[0.6rem] text-muted tracking-[4px] uppercase mb-3">
        cargando
      </p>

      {/* 
        Texto que NUNCA rompe línea:
        - whitespace-nowrap evita el salto
        - font-size usa clamp() para escalar con el viewport
        - min 1rem, preferido 4.5vw, máx 3rem
        - letter-spacing reducido proporcionalmente
      */}
      <div
        className="font-mono font-bold uppercase whitespace-nowrap"
        style={{
          fontSize:      'clamp(1rem, 4.2vw, 3rem)',
          letterSpacing: 'clamp(0.15rem, 1.2vw, 0.6rem)',
        }}
      >
        {LABEL.split('').map((ch, i) => (
          <span
            key={i}
            style={{
              display:    'inline-block',
              transition: 'color 0.3s, text-shadow 0.3s',
              color:      i < litCount ? '#00e5a0'     : 'transparent',
              WebkitTextStroke: i < litCount ? '0'     : '1px #00e5a0',
              textShadow: i < litCount ? '0 0 20px #00e5a0' : 'none',
            }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </div>

      {/* Barra de progreso */}
      <div className="mt-5 w-48 h-[2px] bg-border overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent2 transition-all duration-200"
          style={{ width: pct + '%' }}
        />
      </div>

      <p className="font-mono text-xs text-accent mt-2">{pct}%</p>
      <p className="font-mono text-[0.6rem] text-muted tracking-[3px]">{status}</p>
    </div>
  )
}
