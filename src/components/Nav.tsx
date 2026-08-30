/* =============================================================
   Nav.tsx — Fixed navigation bar
   Stitch exact match: BIGPANY wordmark (Syne, uppercase),
   VENTURES / STRATEGY / TEAM / CONTACT links,
   solid primary ENQUIRE button.
   ============================================================= */
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Nav.css'

const links = [
  { label: 'Ventures', href: '#omnigrowth' },
  { label: 'Strategy', href: '#ventures-intro' },
  { label: 'Team',     href: '#team' },
  { label: 'Contact',  href: '#team' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
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
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`nav${scrolled ? ' nav--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav__inner">
        {/* Wordmark — Syne, uppercase, matching Stitch */}
        <a href="#" className="nav__wordmark" aria-label="Bigpany — back to top">
          BIGPANY
        </a>

        <ul className="nav__links" role="list">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="nav__link"
                onClick={(e) => handleNavClick(e, href)}
              >
                {label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* ENQUIRE — solid primary fill (Stitch style) */}
        <a
          href="#team"
          className="nav__cta"
          onClick={(e) => handleNavClick(e, '#team')}
          aria-label="Get in touch — scroll to team"
        >
          ENQUIRE
        </a>
      </div>
    </motion.nav>
  )
}
