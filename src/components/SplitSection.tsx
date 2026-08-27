/* =============================================================
   SplitSection.tsx
   "The Split" — the signature element of the entire site.
   Two columns side-by-side on desktop, stacked on mobile.
   Each panel independently tracks its own scroll progress
   for the background color shift — no scroll hijacking.
   ============================================================= */
import OmniGrowthPanel from './OmniGrowthPanel'
import HaiybellbottomPanel from './HaiybellbottomPanel'
import './SplitSection.css'

export default function SplitSection() {
  return (
    <section className="split-section" aria-label="Our ventures">
      <div className="split-section__grid">
        <OmniGrowthPanel />
        <HaiybellbottomPanel />
      </div>
    </section>
  )
}
