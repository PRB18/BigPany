/* =============================================================
   Hero.tsx — Stitch exact match
   Full-viewport hero with architectural bg image, centered
   Fraunces italic+bold headline, bottom-right scroll indicator.
   ============================================================= */
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Hero.css'

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}
const reducedLineVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export default function Hero() {
  const prefersReduced = useReducedMotion()
  const lv = prefersReduced ? reducedLineVariants : lineVariants

  return (
    <header className="hero" aria-label="Bigpany — hero">
      {/* Sentinel — used by Nav to detect hero exit */}
      <div id="hero-sentinel" className="hero__sentinel" aria-hidden="true" />

      {/* Darkening overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Centered headline */}
      <div className="hero__content">
        <motion.h1
          className="hero__headline"
          variants={lv}
          initial="hidden"
          animate="visible"
          transition={prefersReduced
            ? { duration: 0.4, delay: 0.2 }
            : { duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero__line-normal">Built on</span>
          <br />
          <span className="hero__line-italic">loyalty. Driven</span>
          <br />
          <span className="hero__line-italic">by vision</span>
        </motion.h1>
      </div>

      {/* Scroll cue — bottom right (Stitch position) */}
      <motion.div
        className="hero__scroll-cue"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <span className="hero__scroll-label">SCROLL</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </header>
  )
}
