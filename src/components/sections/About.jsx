'use client'
import { useEffect, useRef, useState } from 'react'
import useScrollFade from '@/hooks/useScrollFade'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'

const softSkills = [
  { es: 'Resolución de problemas', en: 'Problem solving'         },
  { es: 'Aprendizaje autónomo',    en: 'Self-learning'           },
  { es: 'Trabajo en equipo',       en: 'Teamwork'                },
  { es: 'Adaptabilidad',           en: 'Adaptability'            },
  { es: 'Comunicación efectiva',   en: 'Effective communication' },
  { es: 'Compromiso',              en: 'Commitment'              },
]

export default function About() {
  const { lang } = useLang()
  const ref = useScrollFade()
  return (
    <section id="about" ref={ref} className="py-28 px-6 sm:px-20 bg-surface">
      <SectionHeader num="01" title={lang === 'es' ? 'Sobre mí' : 'About me'} />

      <div className="grid md:grid-cols-[260px_1fr] gap-16 items-start">

        {/* Tarjeta lateral */}
        <div className="border-animated p-7 text-center relative overflow-hidden rounded-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,160,0.05),transparent_60%)] pointer-events-none" />

          <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center
                          text-bg text-2xl font-extrabold font-mono
                          bg-gradient-to-br from-accent to-accent2">
            AD
          </div>

          <p className="font-bold text-base mb-1">Jhonny Andre De La Torre</p>
          <p className="font-mono text-[0.6rem] text-accent mb-1 tracking-widest">
            // sistemas_engineering_student
          </p>
          <p className="font-mono text-[0.58rem] text-muted mb-5">
            Universidad Continental · 10mo ciclo
          </p>

          <div className="grid grid-cols-2 gap-4 border-t border-border pt-5">
            {[
              { val: '10', es: 'ciclo',     en: 'semester'  },
              { val: '4',  es: 'proyectos', en: 'projects'  },
              { val: '2',  es: 'idiomas',   en: 'languages' },
              { val: '22', es: 'años',      en: 'years old' },
            ].map(s => (
              <div key={s.es}>
                <div className="font-mono text-2xl font-bold gradient-text">{s.val}</div>
                <p className="font-mono text-[0.55rem] text-muted mt-1">{s[lang]}</p>
              </div>
            ))}
          </div>

          <a href="https://github.com/Andre121314115" target="_blank" rel="noreferrer"
             className="mt-5 flex items-center justify-center gap-2 font-mono text-xs text-muted
                        hover:text-accent transition-colors border-t border-border pt-4">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            @Andre121314115
          </a>
        </div>

        {/* Texto */}
        <div>
          <h3 data-fade data-delay="0" className="text-2xl font-bold mb-5">
            {lang === 'es' ? 'Perfil' : 'Profile'}
          </h3>
          <p data-fade data-delay="100" className="text-muted leading-[1.9] mb-4 text-[0.93rem]">
            {lang === 'es'
              ? 'Tengo 22 años y estudio Ingeniería de Sistemas e Informática en la Universidad Continental (10mo ciclo). Cuento con experiencia práctica en soporte de redes, desarrollo web con Java Spring y PHP, y análisis de datos con Python y Machine Learning.'
              : "I'm 22 years old, studying Systems Engineering at Universidad Continental (10th semester). I have hands-on experience in network support, web development with Java Spring and PHP, and data analysis with Python and Machine Learning."}
          </p>
          <p className="text-muted leading-[1.9] mb-8 text-[0.93rem]">
            {lang === 'es'
              ? 'He trabajado configurando redes y gestionando contenido IPTV en entorno empresarial, y actualmente aplico Python para automatizar tareas en mi rol administrativo. Busco integrarme como practicante o junior para aportar soluciones eficientes y seguir creciendo.'
              : 'I have configured networks and managed IPTV content in a business environment, and I currently apply Python to automate tasks in my administrative role. Looking to join as an intern or junior to deliver efficient solutions and keep growing.'}
          </p>

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
