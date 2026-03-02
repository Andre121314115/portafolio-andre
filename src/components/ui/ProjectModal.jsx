'use client'
import { useEffect, useState, useCallback } from 'react'
import Tag from './Tag'
import { useLang } from '@/context/LangContext'

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

// ─── Lightbox fullscreen ───────────────────────
function Lightbox({ imgs, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)
  const [animDir, setAnimDir] = useState(null) // 'left' | 'right' | null

  const go = useCallback((dir) => {
    setAnimDir(dir)
    setTimeout(() => {
      setCurrent(c => (c + dir + imgs.length) % imgs.length)
      setAnimDir(null)
    }, 150)
  }, [imgs.length])

  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape')      onClose()
      if (e.key === 'ArrowRight')  go(1)
      if (e.key === 'ArrowLeft')   go(-1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, go])

  const img = imgs[current]

  return (
    <div
      className="fixed inset-0 z-[600] bg-black/97 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Contador */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2
                      font-mono text-xs text-white/50 tracking-widest">
        {current + 1} / {imgs.length}
      </div>

      {/* Cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-white/50 hover:text-white
                   text-2xl transition-colors z-10"
      >✕</button>

      {/* Flecha izquierda */}
      {imgs.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); go(-1) }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2
                     w-11 h-11 border border-white/20 text-white/60
                     hover:border-accent hover:text-accent
                     flex items-center justify-center text-lg transition-all z-10"
        >‹</button>
      )}

      {/* Imagen principal */}
      <img
        src={img.src}
        onError={e => { e.target.src = img.fb }}
        alt=""
        onClick={e => e.stopPropagation()}
        style={{
          opacity:   animDir ? 0 : 1,
          transform: animDir === 1 ? 'translateX(-30px)' : animDir === -1 ? 'translateX(30px)' : 'translateX(0)',
          transition: 'opacity 0.15s ease, transform 0.15s ease',
          maxHeight: '85vh',
          maxWidth:  '90vw',
          objectFit: 'contain',
        }}
      />

      {/* Flecha derecha */}
      {imgs.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); go(1) }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2
                     w-11 h-11 border border-white/20 text-white/60
                     hover:border-accent hover:text-accent
                     flex items-center justify-center text-lg transition-all z-10"
        >›</button>
      )}

      {/* Miniaturas abajo */}
      {imgs.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2
                        flex gap-2" onClick={e => e.stopPropagation()}>
          {imgs.map((im, i) => (
            <button
              key={i}
              onClick={() => { setAnimDir(i > current ? 1 : -1); setTimeout(() => { setCurrent(i); setAnimDir(null) }, 150) }}
              className={`w-12 h-8 overflow-hidden border-2 transition-all
                          ${i === current ? 'border-accent opacity-100' : 'border-white/20 opacity-40 hover:opacity-70'}`}
            >
              <img src={im.src} onError={e => { e.target.src = im.fb }} alt=""
                   className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Modal principal ───────────────────────────
export default function ProjectModal({ project, onClose }) {
  const { lang } = useLang()
  const [lightbox, setLightbox] = useState(null) // índice de imagen abierta

  useEffect(() => {
    const handler = e => { if (e.key === 'Escape' && lightbox === null) onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, lightbox])

  if (!project) return null

  const imgs = [{ src: project.image, fb: project.fallback }, ...project.gallery]

  return (
    <>
      <div
        className="fixed inset-0 z-[500] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        onClick={e => e.target === e.currentTarget && onClose()}
      >
        <div className="bg-surface border border-border w-full max-w-2xl max-h-[90vh] overflow-y-auto relative
                        [clip-path:polygon(0_0,calc(100%-22px)_0,100%_22px,100%_100%,22px_100%,0_calc(100%-22px))]">

          {/* Línea top gradiente */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2" />

          {/* Cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-muted hover:text-accent text-xl transition-colors"
          >✕</button>

          {/* ── Galería clicable ── */}
          <div className="grid grid-cols-3 gap-[2px]">
            {imgs.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group cursor-zoom-in
                            ${i === 0 ? 'col-span-3' : ''}`}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  onError={e => { e.target.src = img.fb }}
                  alt=""
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-105
                              ${i === 0 ? 'h-[200px]' : 'h-[110px]'}`}
                />
                {/* Overlay con lupa al hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
                                transition-opacity flex items-center justify-center">
                  <span className="text-white text-2xl">⊕</span>
                </div>
              </div>
            ))}
          </div>

          {/* Hint click */}
          <p className="font-mono text-[0.58rem] text-muted text-right px-5 pt-2">
            {lang === 'es' ? '↑ clic en imagen para ampliar' : '↑ click image to enlarge'}
          </p>

          {/* Contenido */}
          <div className="p-7 pt-4">
            <p className="font-mono text-[0.62rem] text-accent tracking-widest mb-1">
              {project.eyebrow[lang]}
            </p>
            <h2 className="text-2xl font-extrabold mb-3">{project.title[lang]}</h2>
            <p className="text-muted text-sm leading-relaxed mb-5">{project.desc[lang]}</p>

            <ul className="mb-5 space-y-2">
              {project.features[lang].map((f, i) => (
                <li key={i} className="text-sm text-muted pl-4 relative
                                       before:content-['▸'] before:absolute before:left-0 before:text-accent">
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map(t => <Tag key={t.label} label={t.label} color={t.color} />)}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a href={project.github} target="_blank" rel="noreferrer"
                 className="flex items-center gap-2 font-mono text-xs px-5 py-2
                            bg-gradient-to-r from-accent to-accent2 text-bg font-bold
                            hover:opacity-90 transition-opacity
                            [clip-path:polygon(0_0,calc(100%-7px)_0,100%_7px,100%_100%,0_100%)]">
                <GithubIcon />
                {lang === 'es' ? 'Ver código en GitHub' : 'View code on GitHub'}
              </a>
              {project.demo && (
                <a href={project.demo}
                   className="font-mono text-xs px-5 py-2 border border-accent text-accent
                              hover:bg-accent/10 transition-colors
                              [clip-path:polygon(0_0,calc(100%-7px)_0,100%_7px,100%_100%,0_100%)]">
                  {lang === 'es' ? 'Demo en vivo' : 'Live demo'}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox — se monta encima de todo */}
      {lightbox !== null && (
        <Lightbox
          imgs={imgs}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}
