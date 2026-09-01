/* =============================================================
   HaiybellbottomPanel.tsx — Premium jacket showcase
   Full-bleed dark panel. Jacket image floats right with
   parallax. Text content bottom-left, premium animations.
   ============================================================= */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
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

const JACKET_VARIANTS = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function HaiybellbottomPanel() {
  const panelRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'end start'],
  })

  /* Jacket drifts upward gently as user scrolls */
  const jacketY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])
  /* Subtle bg parallax */
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section
      ref={panelRef}
      id="haiybellbottom"
      className="venture-panel venture-panel--haiybellbottom"
      aria-label="Haiybellbottom — clothing venture"
    >
      {/* Dark textured background with subtle parallax */}
      <motion.div
        className="venture-panel__bg"
        style={prefersReduced ? undefined : { y: bgY }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="venture-panel__gradient venture-panel__gradient--vermillion" aria-hidden="true" />

      {/* Floating jacket image — parallax drift */}
      <motion.div
        className="venture-panel__jacket-wrap"
        variants={prefersReduced ? REDUCED_VARIANTS : JACKET_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-8%' }}
        aria-hidden="true"
      >
        <motion.img
          src="/lucid-jacket.jpg"
          alt=""
          className="venture-panel__jacket-img"
          style={prefersReduced ? undefined : { y: jacketY }}
          draggable={false}
        />
        {/* Glow beneath jacket */}
        <div className="venture-panel__jacket-glow" aria-hidden="true" />
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
        <span className="venture-panel__badge venture-panel__badge--vermillion">
          02 / APPAREL · OBJECTS
        </span>

        <h2 className="venture-panel__headline">
          HB
        </h2>
        <p className="venture-panel__subheading">Haiybellbottom</p>

        {/* Body */}
        <p className="venture-panel__body venture-panel__body--vermillion-accent">
          A study in warmth, utility, and considered everyday design.
          You can't buy it — yet.
        </p>

        {/* CTA */}
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
