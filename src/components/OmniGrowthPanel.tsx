/* =============================================================
   OmniGrowthPanel.tsx — Full-bleed agritech panel
   Premium content-reveal animations, OmniGrowthMotif SVG
   as watermark overlay. Content bottom-left.
   ============================================================= */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import OmniGrowthMotif from '../assets/OmniGrowthMotif'
import './VenturePanel.css'

const CONTENT_VARIANTS = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}
const REDUCED_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

const MOTIF_VARIANTS = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function OmniGrowthPanel() {
  const panelRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const motifY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

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

      {/* Gradient overlay */}
      <div className="venture-panel__gradient venture-panel__gradient--moss" aria-hidden="true" />

      {/* OmniGrowth SVG motif — large watermark, parallax drift */}
      <motion.div
        className="venture-panel__motif-wrap"
        variants={prefersReduced ? REDUCED_VARIANTS : MOTIF_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-8%' }}
        style={prefersReduced ? undefined : { y: motifY }}
        aria-hidden="true"
      >
        <OmniGrowthMotif />
      </motion.div>

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
          01 / GROWTH · COMMERCE
        </span>

        <h2 className="venture-panel__headline">OmniGrowth</h2>

        {/* Body with left border accent */}
        <p className="venture-panel__body venture-panel__body--moss-accent">
          Agricultural intelligence for the people who feed us. Real-time crop
          advisory and market pricing — built for Bharat.
        </p>

        {/* Meta */}
        <div className="venture-panel__meta">
          <p className="venture-panel__meta-line">Platform — Mobile App</p>
          <p className="venture-panel__meta-line">
            Focus — Crop advisory · Market data · Weather intelligence
          </p>
        </div>

        {/* CTA — outline moss */}
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
