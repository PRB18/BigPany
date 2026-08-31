/* =============================================================
   HaiybellbottomPanel.tsx — Stitch exact match
   Full-bleed, full-width, bg image of red sculptural figure.
   Content bottom-RIGHT: badge, large headline, "You can't buy it",
   solid primary "VIEW COLLECTION" CTA.
   ============================================================= */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './VenturePanel.css'

const CONTENT_VARIANTS = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}
const REDUCED_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export default function HaiybellbottomPanel() {
  const panelRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={panelRef}
      id="haiybellbottom"
      className="venture-panel venture-panel--haiybellbottom"
      aria-label="Haiybellbottom — clothing venture"
    >
      {/* Background image with subtle parallax */}
      <motion.div
        className="venture-panel__bg"
        style={prefersReduced ? undefined : { y: bgY }}
        aria-hidden="true"
      />

      {/* Gradient overlay — bottom to transparent */}
      <div className="venture-panel__gradient venture-panel__gradient--vermillion" aria-hidden="true" />

      {/* Content — bottom RIGHT (Stitch) */}
      <motion.div
        className="venture-panel__content venture-panel__content--right"
        variants={prefersReduced ? REDUCED_VARIANTS : CONTENT_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
      >
        {/* Badge */}
        <span className="venture-panel__badge venture-panel__badge--vermillion">
          02 / FASHION
        </span>

        <h2 className="venture-panel__headline venture-panel__headline--vermillion">
          HB
        </h2>
        <p className="venture-panel__subheading">Haiybellbottom</p>

        {/* Body — Stitch exact copy, right border accent */}
        <p className="venture-panel__body venture-panel__body--vermillion-accent">
          You can't buy it
        </p>

        {/* CTA — solid primary fill (Stitch: "VIEW COLLECTION") */}
        <a
          href="#"
          className="venture-panel__cta venture-panel__cta--primary"
          aria-label="Explore Haiybellbottom collection — coming soon"
          onClick={(e) => e.preventDefault()}
        >
          <span>VIEW COLLECTION</span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </a>

        <p className="venture-panel__coming-soon">
          Collection launching soon
        </p>
      </motion.div>
    </section>
  )
}
