/* =============================================================
   Hero.tsx — Full-viewport video background hero
   Looping video bg, staggered Fraunces headline, premium
   floating ambient orbs, animated tagline, scroll indicator.
   ============================================================= */
import { motion } from 'framer-motion'
import './Hero.css'

const LINE_VARIANTS = {
  hidden: { opacity: 0, y: 40, skewY: 3 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.9,
      delay: 0.4 + i * 0.18,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const TAG_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <header className="hero" aria-label="Bigpany — hero">
      {/* Sentinel — used by Nav to detect hero exit */}
      <div id="hero-sentinel" className="hero__sentinel" aria-hidden="true" />

      {/* Looping video background */}
      <video
        className="hero__video"
        src="/hero-loop.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Dark cinematic overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Ambient floating orbs */}
      <div className="hero__orbs" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      {/* Eyebrow label */}
      <motion.p
        className="hero__eyebrow"
        variants={TAG_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        EST. 2021 &nbsp;/&nbsp; INDIA
      </motion.p>

      {/* Centered headline — staggered per line */}
      <div className="hero__content">
        <h1 className="hero__headline">
          {['Built on', 'loyalty. Driven', 'by vision'].map((line, i) => (
            <span key={line} className="hero__line-wrap">
              <motion.span
                className={i === 0 ? 'hero__line-normal' : 'hero__line-accent'}
                custom={i}
                variants={LINE_VARIANTS}
                initial="hidden"
                animate="visible"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>

      {/* Scroll cue — bottom right */}
      <motion.div
        className="hero__scroll-cue"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <span className="hero__scroll-label">SCROLL</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </header>
  )
}
