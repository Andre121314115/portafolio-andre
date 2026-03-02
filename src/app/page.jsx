'use client'
import { useState, useEffect } from 'react'

// Layout
import Navbar   from '@/components/layout/Navbar'
import Footer   from '@/components/layout/Footer'

// UI
import Loader        from '@/components/ui/Loader'
import CustomCursor  from '@/components/ui/CustomCursor'

// Sections
import Hero         from '@/components/sections/Hero'
import About        from '@/components/sections/About'
import Skills       from '@/components/sections/Skills'
import Learning     from '@/components/sections/Learning'
import Projects     from '@/components/sections/Projects'
import Experience   from '@/components/sections/Experience'
import Certificates from '@/components/sections/Certificates'
import Contact      from '@/components/sections/Contact'

export default function Page() {
  const [theme,      setTheme]      = useState('dark')
  const [loaderDone, setLoaderDone] = useState(false)

  // Aplicar dark por defecto al montar
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const toggleTheme = () => {
    setTheme(t => {
      const next = t === 'dark' ? 'light' : 'dark'
      // Añade o quita la clase 'dark' en <html>
      // Tailwind + las variables CSS hacen el resto automáticamente
      document.documentElement.classList.toggle('dark', next === 'dark')
      return next
    })
  }

  return (
    <>
      {/* Cursor personalizado (solo desktop) */}
      <CustomCursor />

      {/* Loader */}
      {!loaderDone && <Loader onDone={() => setLoaderDone(true)} />}

      {/* Navegación */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Contenido */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Learning />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      <Footer />

      {/* Botón volver arriba */}
      <BackTop />
    </>
  )
}

function BackTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-accent text-bg
                 flex items-center justify-center text-lg font-bold
                 hover:opacity-90 hover:-translate-y-1 transition-all
                 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]"
    >
      ↑
    </button>
  )
}
