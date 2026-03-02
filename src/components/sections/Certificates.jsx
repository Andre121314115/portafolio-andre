'use client'
import useScrollFade from '@/hooks/useScrollFade'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'
import { certificates } from '@/data/experience'

export default function Certificates() {
  const { lang } = useLang()
  const ref = useScrollFade()

  return (
    <section id="certs" ref={ref} className="py-24 px-6 sm:px-16 bg-surface">
      <SectionHeader num="06" title={lang === 'es' ? 'Certificados' : 'Certifications'} />

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {certificates.map((c, idx) => (
          <a
            key={c.num}
            data-fade
            data-delay={idx * 80}
            href={c.file}
            target="_blank"
            rel="noreferrer"
            className="group relative flex gap-4 items-start
                       border border-border bg-bg p-5
                       no-underline
                       hover:border-accent/25 hover:-translate-y-[4px]
                       transition-all duration-300
                       [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]"
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,229,160,0.06)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
          >
            {/* Barra top */}
            <div className="absolute top-0 left-0 right-0 h-[1px]
                            bg-gradient-to-r from-accent/50 to-transparent
                            scale-x-0 group-hover:scale-x-100
                            origin-left transition-transform duration-500" />

            {/* Número — usa text-accent adaptativo */}
            <div className="w-10 h-10 min-w-[40px]
                            border border-accent/25 bg-accent/5
                            flex items-center justify-center
                            font-mono text-xs font-bold text-accent
                            group-hover:bg-accent/10 transition-colors shrink-0">
              {c.num}
            </div>

            <div>
              {/* Nombre — text-text se adapta a ambos modos */}
              <p className="font-bold text-[0.82rem] mb-1 leading-snug text-text">
                {c.name[lang]}
              </p>
              {/* Issuer — text-accent con buen contraste */}
              <p className="font-mono text-[0.6rem] text-accent mb-1">
                {c.issuer[lang]}
              </p>
              {/* Fecha — text-muted se adapta */}
              <p className="font-mono text-[0.58rem] text-muted">
                {c.date[lang]}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
