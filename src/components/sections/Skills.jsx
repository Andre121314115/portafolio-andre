'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import Tag from '@/components/ui/Tag'
import { useLang } from '@/context/LangContext'
import { skills, languages } from '@/data/skills'

export default function Skills() {
  const { lang } = useLang()
  return (
    <section id="skills" className="py-24 px-6 sm:px-16 bg-surface">
      <SectionHeader num="02" title={lang === 'es' ? 'Habilidades' : 'Skills'} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {skills.map(s => (
          <div key={s.name.es}
               className={`group border border-border bg-bg p-6 relative overflow-hidden
                           transition-transform duration-300 hover:-translate-y-1
                           [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]
                           ${s.variant === 'green'  ? 'hover:border-accent/40'  : ''}
                           ${s.variant === 'purple' ? 'hover:border-accent2/40' : ''}
                           ${s.variant === 'orange' ? 'hover:border-red-500/40' : ''}`}>

            {/* Línea top animada */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100
                             origin-left transition-transform duration-500 bg-gradient-to-r
                             ${s.variant === 'green'  ? 'from-accent to-[#00c9ff]'   : ''}
                             ${s.variant === 'purple' ? 'from-accent2 to-purple-300' : ''}
                             ${s.variant === 'orange' ? 'from-red-400 to-orange-300' : ''}`} />

            {/* Símbolo de código */}
            <div className={`font-mono font-bold text-xl mb-4 tracking-widest
                             ${s.variant === 'green'  ? 'text-accent'     : ''}
                             ${s.variant === 'purple' ? 'text-accent2'    : ''}
                             ${s.variant === 'orange' ? 'text-red-400'    : ''}`}>
              {s.symbol}
            </div>

            <p className={`font-mono text-[0.58rem] tracking-[3px] uppercase mb-1
                           ${s.variant === 'green'  ? 'text-accent'    : ''}
                           ${s.variant === 'purple' ? 'text-purple-300': ''}
                           ${s.variant === 'orange' ? 'text-red-300'   : ''}`}>
              {s.category[lang]}
            </p>
            <p className="font-bold text-base mb-1">{s.name[lang]}</p>
            <p className="text-muted text-xs leading-relaxed mb-4">{s.desc[lang]}</p>
            <div className="flex flex-wrap gap-1">
              {s.tags.map(t => <Tag key={t} label={t} color={s.tagColor} />)}
            </div>
          </div>
        ))}
      </div>

      {/* Idiomas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {languages.map(l => (
          <div key={l.code}
               className="border border-border bg-bg p-5 flex items-center gap-5
                          hover:border-accent/30 transition-colors
                          [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]">
            {/* Código de idioma en vez de bandera emoji */}
            <div className="w-12 h-12 min-w-[48px] border border-border flex items-center justify-center
                            font-mono text-sm font-bold text-accent bg-accent/5">
              {l.code}
            </div>
            <div>
              <p className="font-bold">{l.name[lang]}</p>
              <p className="font-mono text-[0.65rem] text-accent tracking-wide">{l.level[lang]}</p>
              <div className="flex gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i}
                       className={`w-[7px] h-[7px] rounded-sm
                         ${i < l.dots
                           ? 'bg-accent'
                           : l.half && i === l.dots
                             ? 'bg-gradient-to-r from-accent to-border'
                             : 'bg-border'}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
