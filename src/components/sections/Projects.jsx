'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import Tag from '@/components/ui/Tag'
import ProjectModal from '@/components/ui/ProjectModal'
import { useLang } from '@/context/LangContext'
import { projects as allProjects } from '@/data/projects'

const INTERVAL   = 2000   // ms entre slides
const TRANSITION = 380    // ms de animación

export default function Projects() {
  const { lang }              = useLang()
  const [filter, setFilter]   = useState('all')
  const [modal,  setModal]    = useState(null)
  const [index,  setIndex]    = useState(0)
  const [sliding, setSliding] = useState(false)  // en plena animación?
  const [dir,     setDir]     = useState(1)       // 1 = izq→der  -1 = der→izq
  const [paused,  setPaused]  = useState(false)
  const timerRef              = useRef(null)

  const filters = [
    { key: 'all',    es: 'Todos',       en: 'All'         },
    { key: 'web',    es: 'Web',         en: 'Web'         },
    { key: 'python', es: 'Python / ML', en: 'Python / ML' },
    { key: 'mobile', es: 'Mobile',      en: 'Mobile'      },
  ]

  const visible = allProjects.filter(p => filter === 'all' || p.category === filter)

  // Cuando cambia el filtro, vuelve al índice 0
  useEffect(() => { setIndex(0) }, [filter])

  // Clamp index cuando cambia la lista
  const safeIndex = visible.length > 0 ? index % visible.length : 0

  // ── Función de avance ──────────────────────────
  const advance = useCallback((step = 1) => {
    if (sliding || visible.length <= 1) return
    setDir(step)
    setSliding(true)
    setTimeout(() => {
      setIndex(i => (i + step + visible.length) % visible.length)
      setSliding(false)
    }, TRANSITION)
  }, [sliding, visible.length])

  // ── Autoplay ───────────────────────────────────
  useEffect(() => {
    if (paused || visible.length <= 1) return
    timerRef.current = setInterval(() => advance(1), INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [paused, advance, visible.length])

  // ── Swipe táctil ──────────────────────────────
  const touchStartX = useRef(null)
  const onTouchStart = e => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = e => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) advance(dx < 0 ? 1 : -1)
    touchStartX.current = null
  }

  const project = visible[safeIndex]

  if (!project) return (
    <section id="projects" className="py-24 px-6 sm:px-16 bg-bg">
      <SectionHeader num="04" title={lang === 'es' ? 'Proyectos' : 'Projects'} />
      <p className="text-muted text-sm">
        {lang === 'es' ? 'Sin proyectos en esta categoría.' : 'No projects in this category.'}
      </p>
    </section>
  )

  return (
    <section id="projects" className="py-24 px-6 sm:px-16 bg-bg overflow-hidden">
      <SectionHeader num="04" title={lang === 'es' ? 'Proyectos' : 'Projects'} />

      <p className="font-mono text-xs text-muted mb-8">
        {lang === 'es'
          ? '// Todo el código está en GitHub — haz clic en el proyecto para ver el repo'
          : '// All code is on GitHub — click the project to see the repository'}
      </p>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map(f => (
          <button key={f.key} onClick={() => setFilter(f.key)}
                  className={`font-mono text-[0.68rem] px-4 py-2 border tracking-wide transition-all duration-200
                              [clip-path:polygon(0_0,calc(100%-7px)_0,100%_7px,100%_100%,0_100%)]
                              ${filter === f.key
                                ? 'border-accent text-accent bg-accent/10'
                                : 'border-border text-muted hover:border-accent hover:text-accent'}`}>
            {f[lang]}
          </button>
        ))}
      </div>

      {/* ── Slider ───────────────────────────────── */}
      <div
        className="relative select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Tarjeta con animación CSS */}
        <div
          key={`${filter}-${safeIndex}`}
          style={{
            animation: `slideIn${dir > 0 ? 'Right' : 'Left'} ${TRANSITION}ms ease-out both`,
          }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {/* Proyecto actual */}
          <div
            onClick={() => setModal(project)}
            className="group border border-border bg-surface overflow-hidden cursor-pointer
                       transition-all duration-300 hover:-translate-y-1 hover:border-accent/40
                       [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,18px_100%,0_calc(100%-18px))]"
          >
            <div className="overflow-hidden relative">
              <img
                src={project.image}
                onError={e => { e.target.src = project.fallback }}
                alt={project.title[lang]}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono text-xs px-3 py-1
                                 bg-gradient-to-r from-accent to-accent2 text-bg font-bold">
                  {lang === 'es' ? 'Ver detalles →' : 'View details →'}
                </span>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 bg-bg/80 backdrop-blur-sm
                              border border-border font-mono text-[0.58rem] text-muted">
                github
              </div>
              {/* Número del proyecto */}
              <div className="absolute top-3 left-3 font-mono text-[0.58rem] text-accent
                              bg-bg/80 backdrop-blur-sm px-2 py-1 border border-accent/20">
                {safeIndex + 1} / {visible.length}
              </div>
            </div>

            <div className="p-6">
              <p className="font-mono text-[0.62rem] tracking-widest mb-2 text-accent">
                {project.eyebrow[lang]}
              </p>
              <h3 className="font-bold text-xl mb-3">{project.title[lang]}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{project.desc[lang]}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map(t => <Tag key={t.label} label={t.label} color={t.color} />)}
              </div>
            </div>
          </div>

          {/* Panel lateral de features — visible en desktop */}
          <div className="hidden sm:flex flex-col justify-center border border-border bg-surface p-7
                          [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,18px_100%,0_calc(100%-18px))]">
            <p className="font-mono text-[0.6rem] text-accent tracking-[3px] uppercase mb-4">
              {lang === 'es' ? '// Características' : '// Features'}
            </p>
            <ul className="space-y-3 mb-8">
              {project.features[lang].map((f, i) => (
                <li key={i} className="text-sm text-muted pl-4 relative
                                       before:content-['▸'] before:absolute before:left-0 before:text-accent">
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="inline-flex items-center gap-2 font-mono text-xs px-5 py-2 self-start
                         bg-gradient-to-r from-accent to-accent2 text-bg font-bold
                         hover:opacity-90 transition-opacity
                         [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              {lang === 'es' ? 'Ver en GitHub' : 'View on GitHub'}
            </a>
          </div>
        </div>

        {/* Controles laterales */}
        {visible.length > 1 && (
          <>
            <button
              onClick={() => advance(-1)}
              aria-label="Anterior"
              className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2
                         w-10 h-10 border border-border text-muted
                         hover:border-accent hover:text-accent bg-bg
                         flex items-center justify-center text-lg
                         transition-all duration-200 z-10"
            >‹</button>
            <button
              onClick={() => advance(1)}
              aria-label="Siguiente"
              className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2
                         w-10 h-10 border border-border text-muted
                         hover:border-accent hover:text-accent bg-bg
                         flex items-center justify-center text-lg
                         transition-all duration-200 z-10"
            >›</button>
          </>
        )}
      </div>

      {/* Dots */}
      {visible.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {visible.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > safeIndex ? 1 : -1); setIndex(i) }}
              aria-label={`Proyecto ${i + 1}`}
              className="transition-all duration-300"
            >
              <div className={`rounded-full transition-all duration-300
                              ${i === safeIndex
                                ? 'w-6 h-2 bg-accent'
                                : 'w-2 h-2 bg-border hover:bg-muted'}`} />
            </button>
          ))}
        </div>
      )}

      {/* Barra de progreso autoplay */}
      {!paused && visible.length > 1 && (
        <div className="mt-3 mx-auto max-w-[120px] h-px bg-border overflow-hidden">
          <div
            key={`progress-${safeIndex}-${filter}`}
            className="h-full bg-accent origin-left"
            style={{ animation: `progressBar ${INTERVAL}ms linear forwards` }}
          />
        </div>
      )}

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}

      {/* Keyframes del slider inyectados inline */}
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes progressBar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  )
}
