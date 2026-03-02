'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'
import { experience } from '@/data/experience'

export default function Experience() {
  const { lang } = useLang()
  return (
    <section id="experience" className="py-24 px-6 sm:px-16 bg-bg">
      <SectionHeader num="05" title={lang === 'es' ? 'Experiencia' : 'Experience'} />

      <div className="max-w-2xl pl-8 relative">
        {/* Línea vertical con gradiente */}
        <div className="absolute left-0 top-0 bottom-0 w-px
                        bg-gradient-to-b from-accent via-accent2 to-transparent opacity-60" />

        {experience.map((e, i) => (
          <div key={i}
               className="relative border border-border bg-surface p-7 mb-5 group
                          hover:border-accent/30 transition-colors duration-300
                          [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]">

            {/* Dot en la línea */}
            <div className="absolute -left-[2.52rem] top-8
                            w-[10px] h-[10px] rounded-full
                            bg-gradient-to-br from-accent to-accent2
                            shadow-[0_0_12px_rgba(0,217,255,0.6)]" />

            {/* Línea top animada */}
            <div className="absolute top-0 left-0 right-0 h-[2px]
                            bg-gradient-to-r from-accent to-accent2
                            scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

            <p className="font-mono text-[0.65rem] text-accent tracking-[2px] mb-1">{e.date[lang]}</p>
            <h3 className="text-lg font-bold mb-1">{e.role[lang]}</h3>
            <p className="text-muted text-sm mb-3">{e.company}</p>

            {/* Contexto adicional si existe */}
            {e.context && (
              <p className="font-mono text-[0.68rem] text-accent2 border-l-2 border-accent2/30
                            pl-3 mb-4 italic">
                {e.context[lang]}
              </p>
            )}

            <ul className="space-y-1">
              {e.items[lang].map((item, j) => (
                <li key={j}
                    className="text-sm text-muted pl-4 relative
                               before:content-['▸'] before:absolute before:left-0 before:text-accent">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
