/* =============================================================
   OmniGrowthPanel.tsx — Stitch exact match
   Full-bleed, full-width, bg image of crops.
   Content bottom-left: badge, large headline, left-border body,
   outline moss CTA "LEARN MORE".
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

export default function OmniGrowthPanel() {
  const panelRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  /* Subtle parallax on the bg — optional, scroll-linked */
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={panelRef}
      id="omnigrowth"
      className="venture-panel venture-panel--omnigrowth"
      aria-label="OmniGrowth — agritech venture"
    >
      {/* Background image with subtle parallax */}
      <motion.div
        className="venture-panel__bg"
        style={prefersReduced ? undefined : { y: bgY }}
        aria-hidden="true"
      />

      {/* Gradient overlay — bottom to transparent */}
      <div className="venture-panel__gradient venture-panel__gradient--moss" aria-hidden="true" />

      {/* Content — bottom left */}
      <motion.div
        className="venture-panel__content"
        variants={prefersReduced ? REDUCED_VARIANTS : CONTENT_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
      >
        {/* Badge */}
        <span className="venture-panel__badge venture-panel__badge--moss">
          01 / AGRICULTURE
        </span>

        <h2 className="venture-panel__headline">OmniGrowth</h2>

        {/* Body with left border accent */}
        <p className="venture-panel__body venture-panel__body--moss-accent">
          Agricultural intelligence for the people who feed us. Real-time crop
          advisory and market pricing.
        </p>

        {/* Meta */}
        <div className="venture-panel__meta">
          <p className="venture-panel__meta-line">Platform — Mobile App</p>
          <p className="venture-panel__meta-line">
            Focus — Crop advisory · Market data · Weather intelligence
          </p>
        </div>

        {/* CTA — outline moss (Stitch: "LEARN MORE") */}
        <a
          href="https://omnigrowt.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="venture-panel__cta venture-panel__cta--moss"
          aria-label="Visit OmniGrowth live app (opens in new tab)"
        >
          <span>LEARN MORE</span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </a>
      </motion.div>
    </section>
  )
}
