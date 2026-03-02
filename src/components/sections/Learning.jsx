'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'
import { learning } from '@/data/experience'

export default function Learning() {
  const { lang } = useLang()
  return (
    <section id="learning" className="py-24 px-6 sm:px-16 bg-bg">
      <SectionHeader num="03" title={lang === 'es' ? 'Aprendiendo ahora' : 'Currently learning'} />

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
        {learning.map(l => (
          <div key={l.name}
               className="group border border-border bg-surface p-7 relative overflow-hidden
                          transition-all duration-300 hover:-translate-y-1
                          hover:border-accent2/40
                          [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)]">

            {/* Línea top con gradiente al hacer hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px]
                            bg-gradient-to-r from-accent to-accent2
                            scale-x-0 group-hover:scale-x-100
                            origin-left transition-transform duration-500" />

            {/* Cabecera */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="font-mono text-xs font-bold px-2 py-[2px] mb-2 inline-block
                                border border-accent2/30 bg-accent2/8 text-accent2 tracking-widest">
                  {l.abbr}
                </div>
                <h3 className="font-bold text-xl">{l.name}</h3>
              </div>
              <span className="font-mono text-[0.58rem] px-2 py-1 mt-1
                               bg-accent/8 text-accent border border-accent/20">
                {l.badge[lang]}
              </span>
            </div>

            {/* Descripción */}
            <p className="text-muted text-sm leading-[1.8] mb-5">
              {l.desc[lang]}
            </p>

            {/* Evidencia con link — la parte clave */}
            <a href={l.link} target="_blank" rel="noreferrer"
               className="flex items-center gap-2 font-mono text-[0.65rem] text-accent2
                          hover:text-accent transition-colors group/link">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              <span className="group-hover/link:underline underline-offset-2">
                {l.proof[lang]}
              </span>
              <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-accent">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
