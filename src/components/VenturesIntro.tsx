/* =============================================================
   VenturesIntro.tsx
   Short transitional hinge section between hero and the split.
   "TWO VENTURES. ONE VISION."
   ============================================================= */
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './VenturesIntro.css'

export default function VenturesIntro() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="ventures-intro" aria-label="Ventures overview">
      <div className="section-container ventures-intro__inner">
        <motion.p
          className="ventures-intro__text label-mono"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Two ventures.&nbsp; One vision.
        </motion.p>

        <motion.div
          className="ventures-intro__divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
  )
}
