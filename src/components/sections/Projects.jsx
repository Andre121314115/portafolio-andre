'use client'
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import Tag from '@/components/ui/Tag'
import ProjectModal from '@/components/ui/ProjectModal'
import { useLang } from '@/context/LangContext'
import { projects } from '@/data/projects'

const filters = [
  { key: 'all',    es: 'Todos',       en: 'All'         },
  { key: 'web',    es: 'Web',         en: 'Web'         },
  { key: 'python', es: 'Python / ML', en: 'Python / ML' },
  { key: 'mobile', es: 'Mobile',      en: 'Mobile'      },
]

export default function Projects() {
  const { lang } = useLang()
  const [active, setActive] = useState('all')
  const [modal,  setModal]  = useState(null)

  const visible = projects.filter(p => active === 'all' || p.category === active)

  return (
    <section id="projects" className="py-24 px-6 sm:px-16 bg-bg">
      <SectionHeader num="04" title={lang === 'es' ? 'Proyectos' : 'Projects'} />

      {/* Nota sobre repos */}
      <p className="font-mono text-xs text-muted mb-8">
        {lang === 'es'
          ? '// Todo el código está en GitHub — haz clic en cualquier proyecto para ver el repo'
          : '// All code is on GitHub — click any project to see the repository'}
      </p>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map(f => (
          <button key={f.key} onClick={() => setActive(f.key)}
                  className={`font-mono text-[0.68rem] px-4 py-2 border tracking-wide transition-all
                              [clip-path:polygon(0_0,calc(100%-7px)_0,100%_7px,100%_100%,0_100%)]
                              ${active === f.key
                                ? 'border-accent text-accent bg-accent/10'
                                : 'border-border text-muted hover:border-accent hover:text-accent'}`}>
            {f[lang]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-5">
        {visible.map(p => (
          <div key={p.id} onClick={() => setModal(p)}
               className="group border border-border bg-surface overflow-hidden cursor-pointer
                          transition-all duration-300 hover:-translate-y-1 hover:border-accent/40
                          [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,18px_100%,0_calc(100%-18px))]">

            {/* Imagen */}
            <div className="overflow-hidden relative">
              <img src={p.image} onError={e => { e.target.src = p.fallback }}
                   alt={p.title[lang]}
                   className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono text-xs px-3 py-1
                                 bg-gradient-to-r from-accent to-accent2 text-bg font-bold">
                  {lang === 'es' ? 'Ver detalles →' : 'View details →'}
                </span>
              </div>
              {/* Badge GitHub visible siempre */}
              <div className="absolute top-3 right-3 px-2 py-1 bg-bg/80 backdrop-blur-sm
                              border border-border font-mono text-[0.58rem] text-muted">
                github
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <p className="font-mono text-[0.62rem] tracking-widest mb-2 text-accent">
                {p.eyebrow[lang]}
              </p>
              <h3 className="font-bold text-lg mb-2">{p.title[lang]}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{p.desc[lang]}</p>
              <div className="flex flex-wrap gap-1">
                {p.tags.map(t => <Tag key={t.label} label={t.label} color={t.color} />)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  )
}
