/* =============================================================
   HaiybellbottomPanel.tsx — Premium editorial fashion layout
   Full-viewport. Jacket image DOMINATES the entire panel as
   a centrepiece. Text anchored bottom-left over a gradient
   scrim. Cinematic parallax, staggered text reveal.
   ============================================================= */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './VenturePanel.css'
import './HaiybellbottomPanel.css'

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const ITEM = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}
const REDUCED = {
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

  /* Jacket slowly drifts upward — cinematic parallax */
  const jacketY    = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])
  const jacketScale = useTransform(scrollYProgress, [0, 0.5], [1.04, 1])

  return (
    <section
      ref={panelRef}
      id="haiybellbottom"
      className="venture-panel venture-panel--haiybellbottom hb-panel"
      aria-label="Haiybellbottom — clothing venture"
    >
      {/* ── Full-panel jacket image ── */}
      <motion.div
        className="hb-jacket-stage"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <motion.img
          src="/lucid-jacket.jpg"
          alt=""
          className="hb-jacket-img"
          style={prefersReduced ? undefined : { y: jacketY, scale: jacketScale }}
          draggable={false}
        />
        {/* Warm gold glow on jacket */}
        <div className="hb-jacket-glow" aria-hidden="true" />
      </motion.div>

      {/* ── Bottom gradient scrim so text is legible ── */}
      <div className="hb-scrim" aria-hidden="true" />

      {/* ── Content overlay — bottom left ── */}
      <motion.div
        className="hb-content"
        variants={prefersReduced ? REDUCED : STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-12%' }}
      >
        <motion.span className="venture-panel__badge venture-panel__badge--vermillion" variants={prefersReduced ? REDUCED : ITEM}>
          02 / APPAREL · OBJECTS
        </motion.span>

        <motion.h2 className="hb-headline" variants={prefersReduced ? REDUCED : ITEM}>
          HB
        </motion.h2>

        <motion.p className="hb-tagline" variants={prefersReduced ? REDUCED : ITEM}>
          You can't buy it.
        </motion.p>

        <motion.p className="hb-subheading" variants={prefersReduced ? REDUCED : ITEM}>
          Haiybellbottom
        </motion.p>

        <motion.p className="venture-panel__body hb-body" variants={prefersReduced ? REDUCED : ITEM}>
          A study in warmth, utility, and considered everyday design.
        </motion.p>

        <motion.div className="hb-footer-row" variants={prefersReduced ? REDUCED : ITEM}>
          <a
            href="#"
            className="venture-panel__cta venture-panel__cta--primary"
            aria-label="Explore Haiybellbottom collection — coming soon"
            onClick={(e) => e.preventDefault()}
          >
            <span>VIEW COLLECTION</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </a>
          <p className="venture-panel__coming-soon">Collection launching soon</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
