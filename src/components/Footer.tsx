/* =============================================================
   Footer.tsx
   Reconverges to --bg-base. Minimal, typographic.
   ============================================================= */
import './Footer.css'

export default function Footer() {
  const year = 2026 // PLACEHOLDER: confirm copyright year

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="section-container footer__inner">

        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__wordmark" aria-label="Bigpany — back to top">
              Bigpany
            </a>
            <p className="footer__tagline">Built on loyalty, driven by vision.</p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <ul role="list" className="footer__nav-list">
              <li>
                <a
                  href="#omnigrowth"
                  className="footer__nav-link label-mono"
                  onClick={(e) => handleAnchorClick(e, '#omnigrowth')}
                >
                  OmniGrowth
                </a>
              </li>
              <li>
                <a
                  href="#haiybellbottom"
                  className="footer__nav-link label-mono"
                  onClick={(e) => handleAnchorClick(e, '#haiybellbottom')}
                >
                  Haiybellbottom
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="footer__nav-link label-mono"
                  onClick={(e) => handleAnchorClick(e, '#team')}
                >
                  Team
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__divider" role="separator" aria-hidden="true" />

        <div className="footer__bottom">
          {/* PLACEHOLDER year — confirm if needed */}
          <p className="footer__copyright label-mono">
            © {year} Bigpany Retail Private Limited
          </p>
          {/* TODO: add CIN / registration info here once confirmed:
              e.g. CIN: U52100XX2025PTC000000 */}
        </div>

        {/* TODO: add social links once real accounts are available:
            <a href="https://instagram.com/bigpany" ...>Instagram</a>
            <a href="https://linkedin.com/company/bigpany" ...>LinkedIn</a>
        */}
      </div>
    </footer>
  )
}
