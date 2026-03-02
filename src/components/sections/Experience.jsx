'use client'
import { useState } from 'react'
import useScrollFade from '@/hooks/useScrollFade'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'
import { experience } from '@/data/experience'

export default function Experience() {
  const { lang } = useLang()
  const ref = useScrollFade()
  const [expanded, setExpanded] = useState({})
  const toggle = i => setExpanded(p => ({ ...p, [i]: !p[i] }))

  return (
    <section id="experience" ref={ref} className="py-28 px-6 sm:px-20 bg-bg">
      <SectionHeader num="05" title={lang === 'es' ? 'Experiencia' : 'Experience'} />

      <div className="relative max-w-3xl">

        {/* Línea vertical central — solo desktop */}
        <div className="hidden sm:block absolute left-[180px] top-0 bottom-0 w-px
                        bg-gradient-to-b from-accent/60 via-accent2/40 to-transparent" />

        {experience.map((e, i) => (
          <div
            key={i}
            data-fade
            data-delay={i * 180}
            className="relative sm:grid sm:grid-cols-[180px_1fr] gap-0 mb-10 last:mb-0"
          >
            {/* ── Columna izquierda: fecha y empresa ── */}
            <div className="sm:pr-10 sm:text-right mb-3 sm:mb-0 sm:pt-[3px]">
              <p className="font-mono text-[0.62rem] text-accent tracking-[2px] leading-relaxed mb-1">
                {e.date[lang]}
              </p>
              <p className="font-mono text-[0.6rem] text-muted leading-snug">
                {e.company}
              </p>
            </div>

            {/* ── Dot en la línea — solo desktop ── */}
            <div className="hidden sm:block absolute left-[175px] top-[6px]
                            w-[11px] h-[11px] rounded-full
                            bg-gradient-to-br from-accent to-accent2/60
                            ring-4 ring-bg
                            shadow-[0_0_14px_rgba(0,229,160,0.5)]
                            z-10" />

            {/* ── Columna derecha: tarjeta ── */}
            <div className="sm:pl-10">
              <div className="group border border-border bg-surface
                              hover:border-accent/25 hover:-translate-y-[3px]
                              hover:shadow-[0_12px_40px_rgba(0,229,160,0.07)]
                              transition-all duration-300
                              [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]">

                {/* Barra top en hover */}
                <div className="h-[2px] bg-gradient-to-r from-accent to-accent2/60
                                scale-x-0 group-hover:scale-x-100
                                origin-left transition-transform duration-500" />

                <div className="p-6">
                  {/* Header de la tarjeta */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-base leading-snug">{e.role[lang]}</h3>
                      {/* Empresa visible en móvil (en desktop está a la izquierda) */}
                      <p className="sm:hidden font-mono text-[0.6rem] text-muted mt-1">{e.company}</p>
                    </div>
                    <span className="font-mono text-[0.58rem] px-2 py-1 shrink-0
                                     border border-accent/25 text-accent bg-accent/5
                                     whitespace-nowrap">
                      {lang === 'es' ? 'Laboral' : 'Work'}
                    </span>
                  </div>

                  {/* Contexto si existe */}
                  {e.context && (
                    <p className="font-mono text-[0.65rem] text-accent2
                                  border-l-2 border-accent2/30 pl-3 mb-4 italic leading-relaxed">
                      {e.context[lang]}
                    </p>
                  )}

                  {/* Items — colapsables en móvil */}
                  <ul className={`space-y-[6px] overflow-hidden transition-all duration-300
                                  ${expanded[i] || true ? 'max-h-[500px]' : 'max-h-[80px]'}`}>
                    {e.items[lang].map((item, j) => (
                      <li key={j}
                          className="text-[0.82rem] text-muted pl-4 relative leading-relaxed
                                     before:content-['▸'] before:absolute before:left-0
                                     before:text-accent before:text-xs">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
