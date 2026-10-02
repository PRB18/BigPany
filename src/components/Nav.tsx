/* =============================================================
   Nav.tsx — Kage-style navigation
   Frosted glass blur on scroll (stuck), hide on scroll down,
   show on scroll up. Bigpany wordmark + links + ENQUIRE CTA.
   ============================================================= */
import { useEffect, useRef, useState } from 'react'
import './Nav.css'

const links = [
  { label: 'Ventures',  alt: 'OUR WORK',  href: '#omnigrowth' },
  { label: 'Strategy',  alt: 'APPROACH',  href: '#ventures-intro' },
  { label: 'Team',      alt: 'PEOPLE',    href: '#team' },
  { label: 'Contact',   alt: 'REACH US',  href: '#team' },
]

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const [stuck, setStuck]     = useState(false)
  const [hidden, setHidden]   = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setStuck(y > 20)
      setHidden(y > lastY.current && y > 120)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      ref={navRef}
      className={`kage-nav${stuck ? ' stuck' : ''}${hidden ? ' hide' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Wordmark */}
      <a href="#" className="kage-brand" aria-label="Bigpany — back to top">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" fill="#05070a"/>
          <circle cx="16" cy="17" r="7" fill="#e0231c"/>
          <rect x="4" y="8" width="24" height="2.2" fill="#dfe7e0"/>
          <rect x="7" y="13" width="18" height="1.6" fill="#dfe7e0"/>
        </svg>
        <div className="kage-brand__tx">
          <b>BIGPANY</b>
          <i>Retail Private Limited</i>
        </div>
      </a>

      {/* Links — with hover flip animation */}
      <ul className="kage-nav__links" role="list">
        {links.map(({ label, alt, href }) => (
          <li key={label}>
            <a
              href={href}
              className="kage-nav__link"
              onClick={(e) => handleNavClick(e, href)}
            >
              <span>{label.toUpperCase()}</span>
              <span className="alt">{alt}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* ENQUIRE CTA — Kage pill style */}
      <a
        href="#team"
        className="kage-nav__cta"
        onClick={(e) => handleNavClick(e, '#team')}
        aria-label="Enquire — scroll to team"
      >
        <i aria-hidden="true" />
        <span>ENQUIRE</span>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
          <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </a>

      {/* Mobile burger */}
      <button className="kage-burger" aria-label="Toggle menu" aria-expanded="false">
        <i />
        <i />
      </button>
    </nav>
  )
}
