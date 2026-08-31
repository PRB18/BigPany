/* =============================================================
   HaiybellbottomPanel.tsx
   Split layout: Content on the left, floating masked image on the right.
   solid primary "VIEW COLLECTION" CTA.
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

export default function HaiybellbottomPanel() {
  const panelRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={panelRef}
      id="haiybellbottom"
      className="venture-panel venture-panel--haiybellbottom split-layout"
      aria-label="Haiybellbottom — fashion venture"
    >
      {/* Background solid color instead of full cover image */}
      <div className="venture-panel__solid-bg" aria-hidden="true" />

      {/* Content — Left side */}
      <motion.div
        className="venture-panel__content venture-panel__content--left"
        variants={prefersReduced ? REDUCED_VARIANTS : CONTENT_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
      >
        {/* Badge */}
        <span className="venture-panel__badge venture-panel__badge--vermillion">
          02 // FASHION
        </span>

        <h2 className="venture-panel__headline venture-panel__headline--vermillion" style={{ whiteSpace: 'normal', fontSize: 'clamp(2.5rem, 5vw, 5.5rem)', lineHeight: '1.1' }}>
          THE NEW<br />
          STANDARD.
        </h2>

        {/* Body — Updated copy from mockup */}
        <p className="venture-panel__body venture-panel__body--fashion" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 'var(--space-6)', maxWidth: '400px' }}>
          HAIYBELLBOTTOM IS A MANIFESTO OF<br />
          TECHNICAL PRECISION AND AVANT-GARDE<br />
          SILHOUETTES. CRAFTED FOR THE<br />
          VISIONARY, DEFINED BY THE VOID.
        </p>

        {/* CTA */}
        <a
          href="#"
          className="venture-panel__cta venture-panel__cta--outline"
          aria-label="Explore Haiybellbottom collection"
          onClick={(e) => e.preventDefault()}
        >
          <span>VIEW COLLECTION</span>
        </a>
      </motion.div>

      {/* Image — Right side with radial mask for perfect blending */}
      <motion.div 
        className="venture-panel__image-wrapper"
        style={prefersReduced ? undefined : { y: bgY }}
      >
        <img src="/haiybellbottom-bg.jpg" alt="Floating black puffer jacket" className="venture-panel__masked-image" />
      </motion.div>
    </section>
  )
}
