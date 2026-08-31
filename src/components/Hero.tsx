/* =============================================================
   Hero.tsx — Stitch exact match
   Full-viewport hero with architectural bg image, centered
   Fraunces italic+bold headline, bottom-right scroll indicator.
   ============================================================= */
import { motion } from 'framer-motion'
import AnimatedContent from './AnimatedContent'
import './Hero.css'

export default function Hero() {
  return (
    <header className="hero" aria-label="Bigpany — hero">
      {/* Sentinel — used by Nav to detect hero exit */}
      <div id="hero-sentinel" className="hero__sentinel" aria-hidden="true" />

      {/* Darkening overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Centered headline */}
      <div className="hero__content">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="backOut"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <h1 className="hero__headline">
            <span className="hero__line-normal">Built on</span>
            <br />
            <span className="hero__line-accent">loyalty. Driven</span>
            <br />
            <span className="hero__line-accent">by vision</span>
          </h1>
        </AnimatedContent>
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
