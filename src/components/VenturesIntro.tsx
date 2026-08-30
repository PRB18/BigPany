/* =============================================================
   VenturesIntro.tsx — Stitch exact match
   "[ OUR FOCUS ]" eyebrow in primary, Syne headline,
   animated line with centered dot divider.
   ============================================================= */
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './VenturesIntro.css'

export default function VenturesIntro() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="ventures-intro" id="ventures-intro" aria-label="Ventures overview">
      <div className="section-container ventures-intro__inner">
        {/* Eyebrow — primary peach */}
        <motion.p
          className="ventures-intro__eyebrow"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          [ OUR FOCUS ]
        </motion.p>

        {/* Headline — Syne, uppercase */}
        <motion.h2
          className="ventures-intro__headline"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Two ventures. One vision.
        </motion.h2>

        {/* Animated divider with centered dot */}
        <div className="ventures-intro__divider-wrap" aria-hidden="true">
          <motion.div
            className="ventures-intro__divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="ventures-intro__dot" />
        </div>
      </div>
    </section>
  )
}
