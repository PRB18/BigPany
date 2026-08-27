/* =============================================================
   HaiybellbottomPanel.tsx
   Right panel of The Split — Haiybellbottom fashion venture.
   Scroll-linked background shift: --bg-base → --vermillion-dark
   ============================================================= */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import HaiybellbottomMotif from '../assets/HaiybellbottomMotif'
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

export default function HaiybellbottomPanel() {
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
    ['#0E0E0D', '#1E0B08']
  )

  return (
    <motion.div
      ref={panelRef}
      id="haiybellbottom"
      className="venture-panel venture-panel--vermillion"
      style={prefersReduced ? { backgroundColor: '#1E0B08' } : { backgroundColor }}
      aria-label="Haiybellbottom — clothing venture"
    >
      {/* Background SVG motif */}
      <div className="venture-panel__motif" aria-hidden="true">
        <HaiybellbottomMotif />
      </div>

      {/* Content */}
      <motion.div
        className="venture-panel__content"
        variants={prefersReduced ? REDUCED_VARIANTS : CONTENT_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-12%' }}
      >
        <p className="venture-panel__eyebrow label-mono">02 — Clothing</p>

        <h2 className="venture-panel__headline venture-panel__headline--vermillion">
          Haiybellbottom
        </h2>

        {/* PLACEHOLDER copy — refine with real brand voice once assets available */}
        <p className="venture-panel__body">
          Fashion with attitude. Haiybellbottom is built for people who dress on
          their own terms — bold silhouettes, uncompromising details, made to be
          noticed.
        </p>

        <div className="venture-panel__meta">
          <p className="venture-panel__meta-line label-mono">
            Category — Ready-to-wear
          </p>
          <p className="venture-panel__meta-line label-mono">
            Ethos — Bold · Uncompromising · Distinct
          </p>
        </div>

        {/* CTA — TODO: replace href with live store/collection URL once available */}
        <a
          href="#"
          className="venture-panel__cta venture-panel__cta--vermillion"
          aria-label="Explore Haiybellbottom collection — coming soon"
          onClick={(e) => e.preventDefault()}
        >
          <span>Explore the Collection</span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </a>
        {/* TODO: uncomment and update href when live store is ready */}
        {/* <a href="https://haiybellbottom.com" ...> */}

        <p className="venture-panel__coming-soon label-mono">
          Collection launching soon
        </p>
      </motion.div>
    </motion.div>
  )
}
