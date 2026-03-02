'use client'
import { useEffect, useRef, useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'

const stats = [
  { target: 10, es: 'ciclo',     en: 'semester'  },
  { target: 4,  es: 'proyectos', en: 'projects'  },
  { target: 2,  es: 'idiomas',   en: 'languages' },
  { target: 22, es: 'años',      en: 'years old' },
]

const softSkills = [
  { es: 'Resolución de problemas', en: 'Problem solving'         },
  { es: 'Aprendizaje autónomo',    en: 'Self-learning'           },
  { es: 'Trabajo en equipo',       en: 'Teamwork'                },
  { es: 'Adaptabilidad',           en: 'Adaptability'            },
  { es: 'Comunicación efectiva',   en: 'Effective communication' },
  { es: 'Compromiso',              en: 'Commitment'              },
]

function Counter({ target }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      const dur = 1400, start = performance.now()
      const tick = now => {
        const p = Math.min((now - start) / dur, 1)
        setVal(Math.floor(p * target))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref} className="text-2xl font-extrabold gradient-text">{val}</span>
}

export default function About() {
  const { lang } = useLang()
  return (
    <section id="about" className="py-24 px-6 sm:px-16 bg-surface">
      <SectionHeader num="01" title={lang === 'es' ? 'Sobre mí' : 'About me'} />

      <div className="grid md:grid-cols-[280px_1fr] gap-14 items-start">

        {/* Tarjeta */}
        <div className="border-animated p-8 text-center relative overflow-hidden rounded-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,217,255,0.06),transparent_60%)] pointer-events-none" />

          <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center
                          text-bg text-3xl font-extrabold font-mono
                          bg-gradient-to-br from-accent to-accent2">
            AD
          </div>

          <p className="font-bold text-lg mb-1">Jhonny Andre De La Torre</p>
          <p className="font-mono text-[0.65rem] text-accent mb-1 tracking-widest">
            // sistemas_engineering_student
          </p>
          <p className="font-mono text-[0.6rem] text-muted mb-6">
            Universidad Continental · 10mo ciclo
          </p>

          <div className="grid grid-cols-2 gap-4 border-t border-border pt-5">
            {stats.map(s => (
              <div key={s.es}>
                <Counter target={s.target} />
                <p className="font-mono text-[0.58rem] text-muted mt-1">{s[lang]}</p>
              </div>
            ))}
          </div>

          {/* GitHub link */}
          <a href="https://github.com/Andre121314115" target="_blank" rel="noreferrer"
             className="mt-5 flex items-center justify-center gap-2 font-mono text-xs text-muted
                        hover:text-accent transition-colors border-t border-border pt-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            @Andre121314115
          </a>
        </div>

        {/* Texto */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            {lang === 'es' ? 'Perfil' : 'Profile'}
          </h3>
          <p className="text-muted leading-loose mb-4 text-[0.95rem]">
            {lang === 'es'
              ? 'Tengo 22 años y soy estudiante de Ingeniería de Sistemas e Informática en la Universidad Continental, actualmente en el décimo ciclo, con experiencia práctica en soporte de redes, desarrollo web y análisis de datos.'
              : "I'm 22 years old, studying Systems Engineering at Universidad Continental, currently in my 10th semester, with hands-on experience in network support, web development and data analysis."}
          </p>
          <p className="text-muted leading-loose mb-6 text-[0.95rem]">
            {lang === 'es'
              ? 'He trabajado en configuración de equipos, monitoreo de redes y gestión de contenido IPTV en entorno empresarial. Desarrollo soluciones web con Java Spring y PHP, y aplico Python para análisis y Machine Learning. Busco integrarme como practicante o junior en el área de desarrollo o soporte TI para aportar soluciones eficientes y escalables.'
              : 'I have worked on equipment configuration, network monitoring and IPTV content management in a business environment. I build web solutions with Java Spring and PHP, and apply Python for analysis and Machine Learning. Looking to join as an intern or junior in development or IT support to deliver efficient and scalable solutions.'}
          </p>

          {/* Terminal */}
          <div className="border border-border bg-bg p-5 mb-6 font-mono
                          [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-accent/80" />
              <span className="text-muted text-[0.6rem] ml-2">andre@portfolio:~</span>
            </div>
            <p className="text-muted text-xs mb-2">
              <span className="text-accent">❯</span> cat perfil.json
            </p>
            <div className="text-xs space-y-[3px] pl-2">
              <p><span className="text-accent2">"ubicacion"</span><span className="text-border">:</span> <span className="text-accent">"Concepción, Junín, Perú"</span><span className="text-border">,</span></p>
              <p><span className="text-accent2">"carrera"</span><span className="text-border">:</span>   <span className="text-accent">"Ing. Sistemas e Informática"</span><span className="text-border">,</span></p>
              <p><span className="text-accent2">"objetivo"</span><span className="text-border">:</span>  <span className="text-accent">"Junior dev / Practicante TI"</span><span className="text-border">,</span></p>
              <p><span className="text-accent2">"disponible"</span><span className="text-border">:</span> <span className="text-accent">true</span><span className="text-border">,</span></p>
              <p><span className="text-accent2">"linkedin"</span><span className="text-border">:</span>  <span className="text-accent">"linkedin.com/in/andre-de-la-torre-segura20"</span></p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {softSkills.map(s => (
              <span key={s.es}
                    className="px-3 py-1 border border-border text-muted text-sm
                               hover:border-accent/50 hover:text-accent transition-all">
                {s[lang]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
