'use client'
import useScrollFade from '@/hooks/useScrollFade'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'
import { skills, languages } from '@/data/skills'

// Paleta adaptativa — sin colores fijos, funciona en light y dark
const variantMap = {
  green: {
    border: 'hover:border-accent/30',
    line:   'from-accent/60 to-transparent',
    symbol: 'text-accent',          // accent es verde — suficiente contraste en ambos modos
    label:  'text-muted',           // usa var(--muted) — se adapta
    shadow: '0 12px 40px rgba(0,229,160,0.07)',
  },
  purple: {
    border: 'hover:border-accent2/30',
    line:   'from-accent2/60 to-transparent',
    symbol: 'text-accent2',
    label:  'text-muted',
    shadow: '0 12px 40px rgba(168,85,247,0.07)',
  },
  orange: {
    border: 'hover:border-muted/30',
    line:   'from-muted/40 to-transparent',
    symbol: 'text-muted',           // neutro — legible en ambos fondos
    label:  'text-muted',
    shadow: '0 10px 30px rgba(0,0,0,0.08)',
  },
}

export default function Skills() {
  const { lang } = useLang()
  const ref = useScrollFade()

  return (
    <section id="skills" ref={ref} className="py-24 px-6 sm:px-16 bg-surface">
      <SectionHeader num="02" title={lang === 'es' ? 'Habilidades' : 'Skills'} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {skills.map((s, idx) => {
          const v = variantMap[s.variant] || variantMap.green
          return (
            <div
              data-fade
              data-delay={idx * 70}
              key={s.name.es}
              className={`group border border-border bg-bg p-6 relative overflow-hidden
                          transition-all duration-300
                          hover:-translate-y-[4px] ${v.border}
                          [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]`}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = v.shadow }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Línea top en hover */}
              <div className={`absolute top-0 left-0 right-0 h-[2px]
                               bg-gradient-to-r ${v.line}
                               scale-x-0 group-hover:scale-x-100
                               origin-left transition-transform duration-400`} />

              {/* Símbolo */}
              <div className={`font-mono font-bold text-xl mb-4 tracking-widest ${v.symbol}`}>
                {s.symbol}
              </div>

              {/* Categoría — usa text-muted que se adapta solo */}
              <p className={`font-mono text-[0.58rem] tracking-[3px] uppercase mb-1 ${v.label}`}>
                {s.category[lang]}
              </p>

              {/* Nombre — text-text se adapta automáticamente */}
              <p className="font-bold text-[0.92rem] mb-1 text-text">
                {s.name[lang]}
              </p>

              {/* Descripción */}
              <p className="text-muted text-xs leading-relaxed mb-4">
                {s.desc[lang]}
              </p>

              {/* Tags — border-border y text-muted son adaptativos */}
              <div className="flex flex-wrap gap-1">
                {s.tags.map(t => (
                  <span
                    key={t}
                    className="font-mono text-[0.58rem] px-2 py-[3px]
                               border border-border text-muted
                               group-hover:border-muted/60 transition-colors duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Idiomas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        {languages.map((l, idx) => (
          <div
            key={l.code}
            data-fade
            data-delay={600 + idx * 80}
            className="border border-border bg-bg p-5 flex items-center gap-4
                       hover:border-accent/25 hover:-translate-y-[3px]
                       hover:shadow-[0_8px_30px_rgba(0,229,160,0.05)]
                       transition-all duration-300
                       [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]"
          >
            {/* Código idioma */}
            <div className="w-11 h-11 min-w-[44px] border border-border
                            flex items-center justify-center
                            font-mono text-xs font-bold text-accent bg-accent/5">
              {l.code}
            </div>

            <div>
              <p className="font-bold text-sm text-text">{l.name[lang]}</p>
              {/* text-accent tiene buen contraste en ambos modos (#00e5a0) */}
              <p className="font-mono text-[0.62rem] text-accent tracking-wide mb-2">
                {l.level[lang]}
              </p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-[6px] h-[6px] rounded-sm transition-colors
                      ${i < l.dots
                        ? 'bg-accent'
                        : l.half && i === l.dots
                          ? 'bg-gradient-to-r from-accent to-border'
                          : 'bg-border'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
