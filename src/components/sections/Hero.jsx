'use client'
import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/context/LangContext'

const phrases = {
  es: [
    'Construyo backends con Java Spring y PHP',
    'Análisis de datos y ML con Python',
    'Apps móviles con Flutter y Dart',
    'Buscando donde aportar y seguir creciendo',
  ],
  en: [
    'Building backends with Java Spring and PHP',
    'Data analysis and ML with Python',
    'Mobile apps with Flutter and Dart',
    'Looking for a place to contribute and grow',
  ],
}

export default function Hero() {
  const { lang } = useLang()
  const [typed,    setTyped]    = useState('')
  const [deleting, setDeleting] = useState(false)
  const phaseRef = useRef(0)
  const charRef  = useRef(0)

  useEffect(() => {
    let timeout
    function tick() {
      const list = phrases[lang]
      const cur  = list[phaseRef.current % list.length]
      if (!deleting) {
        charRef.current++
        setTyped(cur.slice(0, charRef.current))
        if (charRef.current >= cur.length) {
          setDeleting(true)
          timeout = setTimeout(tick, 2000)
          return
        }
      } else {
        charRef.current--
        setTyped(cur.slice(0, charRef.current))
        if (charRef.current <= 0) {
          setDeleting(false)
          phaseRef.current++
          timeout = setTimeout(tick, 400)
          return
        }
      }
      timeout = setTimeout(tick, deleting ? 32 : 62)
    }
    timeout = setTimeout(tick, 600)
    return () => clearTimeout(timeout)
  }, [lang, deleting])

  return (
    <section id="home"
      className="hero-noise min-h-screen flex items-center pt-28 pb-16 px-6 sm:px-16 relative overflow-hidden">

      {/* Grid sutil */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:
          'linear-gradient(rgba(0,217,255,0.04) 1px,transparent 1px),' +
          'linear-gradient(90deg,rgba(0,217,255,0.04) 1px,transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Glow dual — cyan izquierda, purple derecha */}
      <div className="absolute top-1/2 left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2
                      bg-[radial-gradient(circle,rgba(0,217,255,0.07)_0%,transparent_65%)]
                      animate-[pulseGlow_5s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none -translate-y-1/2
                      bg-[radial-gradient(circle,rgba(168,85,247,0.06)_0%,transparent_65%)]" />

      {/* Línea decorativa lateral */}
      <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-accent opacity-40" />
        <a href="https://github.com/Andre121314115" target="_blank" rel="noreferrer"
           className="font-mono text-[0.55rem] text-muted tracking-[4px] uppercase
                      [writing-mode:vertical-rl] hover:text-accent transition-colors">
          github
        </a>
        <a href="https://www.linkedin.com/in/andre-de-la-torre-segura20" target="_blank" rel="noreferrer"
           className="font-mono text-[0.55rem] text-muted tracking-[4px] uppercase
                      [writing-mode:vertical-rl] hover:text-accent transition-colors">
          linkedin
        </a>
        <div className="w-px h-24 bg-gradient-to-b from-accent to-transparent opacity-40" />
      </div>

      <div className="relative z-10 max-w-3xl w-full sm:ml-16">

        {/* Disponible */}
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 border border-accent/20 bg-accent/5
                        opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
          <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[0.68rem] text-accent tracking-[2px] uppercase">
            {lang === 'es'
              ? 'Disponible · Practicante o Junior · Remoto / Híbrido'
              : 'Available · Intern or Junior · Remote / Hybrid'}
          </span>
        </div>

        {/* Nombre con gradiente */}
        <h1 className="text-5xl sm:text-[5.5rem] font-extrabold leading-[1.0] mb-4
                       opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
          <span className="gradient-text">Andre</span>
          <br />
          <span className="text-text">De La Torre</span>
        </h1>

        {/* Rol fijo */}
        <p className="font-mono text-sm text-muted tracking-widest uppercase mb-3
                      opacity-0 animate-[fadeUp_0.8s_ease_0.5s_forwards]">
          {lang === 'es' ? 'Ing. de Sistemas · Backend · ML · Mobile' : 'Systems Eng. · Backend · ML · Mobile'}
        </p>

        {/* Typing */}
        <p className="font-mono text-base sm:text-lg text-accent min-h-[1.6em] mb-8
                      opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
          &gt; {typed}
          <span className="inline-block w-[2px] h-[1em] bg-accent ml-[2px] align-middle
                           animate-[blink_0.7s_step-end_infinite]" />
        </p>

        {/* Descripción */}
        <p className="text-muted leading-[1.9] max-w-xl text-[0.95rem] mb-8
                      opacity-0 animate-[fadeUp_0.8s_ease_0.8s_forwards]">
          {lang === 'es'
            ? 'Estudiante de Ingeniería de Sistemas e Informática en la Universidad Continental, décimo ciclo. Experiencia en soporte de redes, desarrollo web y análisis de datos. Busco integrarme como practicante o junior en desarrollo o soporte TI.'
            : 'Systems Engineering student at Universidad Continental, 10th semester. Experience in network support, web development and data analysis. Looking to join as an intern or junior in development or IT support.'}
        </p>

        {/* Stats */}
        <div className="flex gap-8 mb-10 opacity-0 animate-[fadeUp_0.8s_ease_0.9s_forwards]">
          {[
            { val: '3', label: lang === 'es' ? 'proyectos' : 'projects'   },
            { val: '2', label: lang === 'es' ? 'empresas'  : 'companies'  },
            { val: '10', label: lang === 'es' ? 'ciclo'    : 'semester'   },
          ].map(s => (
            <div key={s.label}>
              <div className="font-mono text-2xl font-bold gradient-text">{s.val}</div>
              <div className="font-mono text-[0.6rem] text-muted tracking-[3px] uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap opacity-0 animate-[fadeUp_0.8s_ease_1s_forwards]">
          <a href="#projects"
             className="px-8 py-3 font-mono font-bold text-sm tracking-wide
                        bg-gradient-to-r from-accent to-accent2 text-bg
                        hover:opacity-90 transition-opacity
                        [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]">
            {lang === 'es' ? 'Ver proyectos' : 'View projects'}
          </a>
          <a href="#contact"
             className="px-8 py-3 border border-accent/50 text-accent font-mono text-sm tracking-wide
                        hover:bg-accent/10 hover:border-accent transition-all
                        [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]">
            {lang === 'es' ? 'Contactarme' : 'Contact me'}
          </a>
          <a href="/cv/CV_AndreDeLaTorre.pdf" download
             className="px-8 py-3 border border-border text-muted font-mono text-sm tracking-wide
                        hover:border-accent2/50 hover:text-accent2 transition-all
                        [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]">
            {lang === 'es' ? '⬇ CV' : '⬇ Resume'}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                      font-mono text-[0.55rem] text-muted tracking-[4px] uppercase
                      opacity-0 animate-[fadeUp_1s_ease_1.4s_forwards]">
        <span>scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent
                        animate-[scrollLine_2s_ease-in-out_infinite]" />
      </div>
    </section>
  )
}
