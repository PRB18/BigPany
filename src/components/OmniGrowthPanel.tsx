/* =============================================================
   OmniGrowthPanel.tsx
   Left panel of The Split — OmniGrowth "About" section.
   Scroll-linked background shift: --bg-base → --moss-dark
   Content: About OmniGrowth with live link.
   ============================================================= */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import OmniGrowthMotif from '../assets/OmniGrowthMotif'
import './VenturePanel.css'

const CONTENT_VARIANTS = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
}
const REDUCED_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export default function OmniGrowthPanel() {
  const panelRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  /* Scroll-linked color shift */
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'center center'],
  })

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#0E0E0D', '#111A10']
  )

  return (
    <motion.div
      ref={panelRef}
      id="omnigrowth"
      className="venture-panel venture-panel--moss"
      style={prefersReduced ? { backgroundColor: '#111A10' } : { backgroundColor }}
      aria-label="OmniGrowth — agritech venture"
    >
      {/* Background SVG motif */}
      <div className="venture-panel__motif" aria-hidden="true">
        <OmniGrowthMotif />
      </div>

      {/* Content */}
      <motion.div
        className="venture-panel__content"
        variants={prefersReduced ? REDUCED_VARIANTS : CONTENT_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-12%' }}
      >
        <p className="venture-panel__eyebrow label-mono">01 — Agritech</p>

        <h2 className="venture-panel__headline">OmniGrowth</h2>

        {/* PLACEHOLDER copy — refine with real brand voice later */}
        <p className="venture-panel__body">
          Agricultural intelligence for the people who feed us. OmniGrowth puts
          real-time crop, weather, and market information directly in farmers'
          hands — built in the field, for the field.
        </p>

        <div className="venture-panel__meta">
          <p className="venture-panel__meta-line label-mono">
            Platform — Mobile App
          </p>
          <p className="venture-panel__meta-line label-mono">
            Focus — Crop advisory · Market data · Weather intelligence
          </p>
        </div>

        {/* CTA — links to live app */}
        <a
          href="https://omnigrowt.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="venture-panel__cta venture-panel__cta--moss"
          aria-label="Visit OmniGrowth live app (opens in new tab)"
        >
          <span>Visit OmniGrowth</span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </a>

        {/* Secondary link to GitHub */}
        <a
          href="https://github.com/PRB18/omnigrowth"
          target="_blank"
          rel="noopener noreferrer"
          className="venture-panel__link-secondary"
          aria-label="OmniGrowth GitHub repository (opens in new tab)"
        >
          <span className="label-mono">View on GitHub ↗</span>
        </a>
      </motion.div>
    </motion.div>
  )
}
