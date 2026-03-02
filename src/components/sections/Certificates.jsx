'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'
import { certificates } from '@/data/experience'

export default function Certificates() {
  const { lang } = useLang()
  return (
    <section id="certs" className="py-24 px-6 sm:px-16 bg-surface">
      <SectionHeader num="06" title={lang === 'es' ? 'Certificados' : 'Certifications'} />

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {certificates.map((c) => (
          <a key={c.num}
             href={c.file}
             target="_blank"
             rel="noreferrer"
             className="group flex gap-4 items-start border border-border bg-bg p-5
                        no-underline text-inherit
                        hover:border-accent/40 hover:-translate-y-1 transition-all duration-300
                        [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]">

            {/* Número en vez de emoji */}
            <div className="w-11 h-11 min-w-[44px] border border-accent/30 bg-accent/8
                            flex items-center justify-center font-mono text-sm font-bold text-accent
                            group-hover:bg-accent/15 transition-colors">
              {c.num}
            </div>

            <div>
              <p className="font-bold text-sm mb-1 leading-snug text-text">{c.name[lang]}</p>
              <p className="font-mono text-[0.62rem] text-accent mb-1">{c.issuer[lang]}</p>
              <p className="font-mono text-[0.6rem] text-muted">{c.date[lang]}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
