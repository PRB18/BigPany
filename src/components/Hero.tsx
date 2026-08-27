/* =============================================================
   Hero.tsx
   Full-viewport-height entrance section.
   Choreographed headline reveal on page load via Framer Motion.
   ============================================================= */
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Hero.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.3,
    },
  },
}

const lineVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

const reducedLineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
}

export default function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="hero noise-overlay" aria-label="Bigpany — hero">
      {/* Sentinel — used by Nav to detect hero exit */}
      <div id="hero-sentinel" className="hero__sentinel" aria-hidden="true" />

      <div className="hero__content">
        {/* Mono eyebrow — PLACEHOLDER: confirm founding year */}
        <motion.p
          className="hero__eyebrow label-mono"
          variants={prefersReduced ? reducedLineVariants : lineVariants}
          initial="hidden"
          animate="visible"
          transition={prefersReduced ? { duration: 0.4, delay: 0.1 } : { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* TODO: confirm est. year — currently 2025 */}
          Holding Company — Est. 2025
        </motion.p>

        {/* Main headline group */}
        <motion.div
          className="hero__headline-group"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="hero__headline-main"
            variants={prefersReduced ? reducedLineVariants : lineVariants}
          >
            Bigpany
          </motion.h1>
          <motion.p
            className="hero__headline-sub"
            variants={prefersReduced ? reducedLineVariants : lineVariants}
          >
            Retail Private Limited
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="hero__tagline"
          variants={prefersReduced ? reducedLineVariants : lineVariants}
          initial="hidden"
          animate="visible"
          transition={prefersReduced ? { duration: 0.4, delay: 0.5 } : { duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          Built on loyalty, driven by vision.
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="hero__scroll-cue"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <span className="hero__scroll-label label-mono">Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>

      {/* future: hero background video/photo once available — swap out noise-overlay + bg-base */}
    </section>
  )
}
