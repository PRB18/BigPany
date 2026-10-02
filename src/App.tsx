/* =============================================================
   App.tsx — Bigpany x Kage
   Kage overlays: grain, vignette, custom cursor, scroll rail.
   Section order: Nav → Hero → VenturesIntro → SplitSection → TeamSection → Footer
   ============================================================= */
import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import VenturesIntro from './components/VenturesIntro'
import SplitSection from './components/SplitSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null)

  // Kage custom cursor
  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const move = (e: PointerEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`
      cursor.style.marginLeft = '0'
      cursor.style.marginTop = '0'
    }
    const expand = () => cursor.classList.add('act')
    const shrink = () => cursor.classList.remove('act')

    window.addEventListener('pointermove', move, { passive: true })
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('pointerenter', expand)
      el.addEventListener('pointerleave', shrink)
    })

    return () => {
      window.removeEventListener('pointermove', move)
    }
  }, [])

  // Kage data-rv scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('[data-rv]')
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('rv-in')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '-10% 0px', threshold: 0 }
    )

    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      {/* Kage grain overlay */}
      <div id="kage-grain" aria-hidden="true" />

      {/* Kage cinematic vignette */}
      <div id="kage-vignette" aria-hidden="true" />

      {/* Kage custom cursor */}
      <div ref={cursorRef} className="kage-cursor" aria-hidden="true" />

      {/* Skip link — accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Nav />

      <main id="main-content">
        <Hero />
        <VenturesIntro />
        <SplitSection />
        <TeamSection />
      </main>

      <Footer />
    </>
  )
}
