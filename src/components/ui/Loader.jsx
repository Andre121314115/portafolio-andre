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
    // Letra por letra
    const letterTimers = LABEL.split('').map((_, i) =>
      setTimeout(() => setLitCount(i + 1), i * 80)
    )

    // Barra de progreso
    let p = 0
    const pctTimer = setInterval(() => {
      p = Math.min(p + Math.random() * 18 + 4, 100)
      setPct(Math.floor(p))
      if (p >= 100) clearInterval(pctTimer)
    }, 180)

    // Status messages
    const statusTimers = statuses.map((s, i) =>
      setTimeout(() => setStatus(s), i * 550)
    )

    // Ocultar loader — sin bloquear el tab
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
    <div className="fixed inset-0 z-[9999] bg-dark flex flex-col items-center justify-center gap-2">
      <p className="font-mono text-[0.6rem] text-muted tracking-[4px] uppercase mb-2">
        cargando
      </p>

      {/* Nombre letra por letra */}
      <div className="font-mono font-bold tracking-[8px] uppercase text-3xl sm:text-5xl">
        {LABEL.split('').map((ch, i) => (
          <span
            key={i}
            className={`inline-block transition-all duration-300 ${
              i < litCount
                ? 'text-accent [text-shadow:0_0_20px_#00e5a0]'
                : 'text-transparent [-webkit-text-stroke:1px_#00e5a0]'
            }`}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </div>

      {/* Barra */}
      <div className="mt-5 w-56 h-[2px] bg-border overflow-hidden">
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
