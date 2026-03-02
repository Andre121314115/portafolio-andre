'use client'
import { useLang } from '@/context/LangContext'

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="border-t border-border px-6 sm:px-16 py-8">
      <div className="flex flex-wrap justify-between items-center gap-4
                      font-mono text-[0.68rem] text-muted">

        <div>
          <p>© 2026 <span className="text-accent">Jhonny Andre De La Torre Segura</span></p>
          <p className="mt-1 text-[0.6rem]">
            {lang === 'es'
              ? 'Construido con Next.js 14 + Tailwind CSS · Arquitectura MVC'
              : 'Built with Next.js 14 + Tailwind CSS · MVC Architecture'}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/Andre121314115" target="_blank" rel="noreferrer"
             className="flex items-center gap-2 hover:text-accent transition-colors">
            <GithubIcon /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/andre-de-la-torre-segura20" target="_blank" rel="noreferrer"
             className="flex items-center gap-2 hover:text-accent transition-colors">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="mailto:delatorreandre03@gmail.com"
             className="hover:text-accent transition-colors">
            Email
          </a>
          <a href="/cv/CV_AndreDeLaTorre.pdf" download
             className="hover:text-accent transition-colors">
            {lang === 'es' ? 'CV' : 'Resume'}
          </a>
        </div>

        <p className="text-[0.6rem]">
          {lang === 'es' ? 'Hecho en Perú' : 'Made in Peru'}
        </p>
      </div>
    </footer>
  )
}
