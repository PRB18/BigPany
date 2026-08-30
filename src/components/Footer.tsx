/* =============================================================
   Footer.tsx — Stitch exact match
   3-col: "BIGPANY RETAIL PRIVATE LIMITED" (Syne) left,
   links center, copyright right.
   ============================================================= */
import './Footer.css'

export default function Footer() {
  const year = 2026

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="section-container footer__inner">

        {/* Brand — left */}
        <div className="footer__brand">
          <a href="#" className="footer__wordmark" aria-label="Bigpany — back to top">
            BIGPANY RETAIL<br />PRIVATE LIMITED
          </a>
        </div>

        {/* Links — center */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <ul role="list" className="footer__nav-list">
            <li>
              <a href="#omnigrowth" className="footer__nav-link"
                onClick={(e) => handleAnchorClick(e, '#omnigrowth')}>
                OmniGrowth
              </a>
            </li>
            <li>
              <a href="#haiybellbottom" className="footer__nav-link"
                onClick={(e) => handleAnchorClick(e, '#haiybellbottom')}>
                Haiybellbottom
              </a>
            </li>
            <li>
              <a href="#team" className="footer__nav-link"
                onClick={(e) => handleAnchorClick(e, '#team')}>
                Team
              </a>
            </li>
            <li>
              <a href="#" className="footer__nav-link" onClick={(e) => e.preventDefault()}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer__nav-link" onClick={(e) => e.preventDefault()}>
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="footer__nav-link" onClick={(e) => e.preventDefault()}>
                Institutional
              </a>
            </li>
            <li>
              <a href="#" className="footer__nav-link" onClick={(e) => e.preventDefault()}>
                Press
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright — right */}
        <div className="footer__right">
          <p className="footer__copyright">
            © {year} BIGPANY RETAIL PRIVATE LIMITED. ALL RIGHTS RESERVED.
          </p>
          {/* TODO: add CIN / registration info: CIN: U52100XX2025PTC000000 */}
        </div>

      </div>
    </footer>
  )
}
