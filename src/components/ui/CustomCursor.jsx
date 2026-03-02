'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0   // posición real del mouse
    let rx = 0, ry = 0   // posición suavizada del anillo

    // Mueve el punto instantáneo
    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx - 6 + 'px'
      dot.style.top  = my - 6 + 'px'
    }
    window.addEventListener('mousemove', onMove)

    // Anillo con suavizado (lerp)
    let raf
    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx - 18 + 'px'
      ring.style.top  = ry - 18 + 'px'
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    // Agrandar en elementos interactivos
    const grow = () => {
      dot.style.transform  = 'scale(2)'
      ring.style.transform = 'scale(1.5)'
    }
    const shrink = () => {
      dot.style.transform  = 'scale(1)'
      ring.style.transform = 'scale(1)'
    }

    const targets = document.querySelectorAll('a, button, [data-cursor]')
    targets.forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    // Ocultar en móvil (sin mouse real)
    const isMobile = window.matchMedia('(pointer: coarse)').matches
    if (isMobile) { dot.style.display = 'none'; ring.style.display = 'none' }

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      {/* Punto central */}
      <div
        ref={dotRef}
        style={{
          position:       'fixed',
          width:          '12px',
          height:         '12px',
          background:     '#00e5a0',
          borderRadius:   '50%',
          pointerEvents:  'none',
          zIndex:         9999,
          top:            0,
          left:           0,
          mixBlendMode:   'difference',
          transition:     'transform 0.1s',
        }}
      />
      {/* Anillo que sigue */}
      <div
        ref={ringRef}
        style={{
          position:       'fixed',
          width:          '36px',
          height:         '36px',
          border:         '1px solid #00e5a0',
          borderRadius:   '50%',
          pointerEvents:  'none',
          zIndex:         9998,
          top:            0,
          left:           0,
          opacity:        0.5,
          transition:     'transform 0.15s',
        }}
      />
    </>
  )
}
