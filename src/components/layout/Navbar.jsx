'use client'
import { useState, useEffect } from 'react'
import { useLang } from '@/context/LangContext'

const links = [
  { href: '#about',      es: 'Sobre mí',     en: 'About'      },
  { href: '#skills',     es: 'Habilidades',  en: 'Skills'     },
  { href: '#projects',   es: 'Proyectos',    en: 'Projects'   },
  { href: '#experience', es: 'Experiencia',  en: 'Experience' },
  { href: '#certs',      es: 'Certificados', en: 'Certs'      },
  { href: '#contact',    es: 'Contacto',     en: 'Contact'    },
]

export default function Navbar({ theme, toggleTheme }) {
  const { lang, toggle: toggleLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between
                       px-6 sm:px-16 py-4 transition-all duration-300
                       ${scrolled
                         ? 'bg-bg/90 backdrop-blur-xl border-b border-border'
                         : 'bg-transparent'}`}>

        {/* Logo */}
        <div className="font-mono text-sm tracking-[3px] uppercase">
          <span className="gradient-text font-bold">ADL</span>
          <span className="text-muted"> // dev</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}
                 className="font-mono text-[0.68rem] text-muted hover:text-accent
                            tracking-widest uppercase transition-colors relative group">
                {l[lang]}
                <span className="absolute -bottom-1 left-0 w-0 h-px
                                 bg-gradient-to-r from-accent to-accent2
                                 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Controles */}
        <div className="flex items-center gap-2">
          <button onClick={toggleLang}
                  className={`font-mono text-[0.68rem] w-9 h-9 border transition-all
                              ${lang === 'en'
                                ? 'border-accent text-accent bg-accent/10'
                                : 'border-border text-muted hover:border-accent hover:text-accent'}`}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <button onClick={toggleTheme}
                  className="w-9 h-9 border border-border text-muted
                             hover:border-accent2 hover:text-accent2 transition-all text-sm">
            {theme === 'dark' ? '○' : '●'}
          </button>

          <a href="/cv/CV_AndreDeLaTorre.pdf" download
             className="hidden sm:flex items-center font-mono text-[0.68rem] px-4 py-2
                        border border-accent/50 text-accent hover:bg-accent/10 transition-colors
                        [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
            {lang === 'es' ? '⬇ CV' : '⬇ Resume'}
          </a>

          {/* Hamburguesa */}
          <button className="md:hidden flex flex-col gap-[5px] p-1"
                  onClick={() => setMenuOpen(o => !o)}
                  aria-label="Menú">
            <span className={`block w-5 h-[2px] bg-accent transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-accent transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-accent transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Menú mobile */}
      {menuOpen && (
        <div className="fixed top-[60px] left-0 right-0 z-[99] bg-surface border-b border-border
                        flex flex-col p-6 gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href}
               onClick={() => setMenuOpen(false)}
               className="font-mono text-sm text-muted hover:text-accent tracking-widest uppercase transition-colors">
              {l[lang]}
            </a>
          ))}
          <div className="flex gap-3 pt-2 border-t border-border">
            <a href="https://github.com/Andre121314115" target="_blank" rel="noreferrer"
               className="font-mono text-xs text-muted hover:text-accent">GitHub</a>
            <a href="https://www.linkedin.com/in/andre-de-la-torre-segura20" target="_blank" rel="noreferrer"
               className="font-mono text-xs text-muted hover:text-accent">LinkedIn</a>
          </div>
        </div>
      )}
    </>
  )
}
