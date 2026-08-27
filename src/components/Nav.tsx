/* =============================================================
   Nav.tsx — Fixed navigation bar
   - Transparent over hero, gains backdrop-blur after hero exit
   - Single backdrop-filter usage budget on the entire page
   ============================================================= */
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Nav.css'

const links = [
  { label: 'OmniGrowth', href: '#omnigrowth' },
  { label: 'Haiybellbottom', href: '#haiybellbottom' },
  { label: 'Team', href: '#team' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Track when the hero sentinel exits the viewport
    const sentinel = document.getElementById('hero-sentinel')
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className={`nav${scrolled ? ' nav--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav__inner">
        <a href="#" className="nav__wordmark" aria-label="Bigpany — back to top">
          Bigpany
        </a>
        <ul className="nav__links" role="list">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="nav__link"
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
