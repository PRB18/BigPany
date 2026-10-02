/* =============================================================
   HaiybellbottomPanel.tsx — Premium Editorial Split
   ============================================================= */
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './HaiybellbottomPanel.css'

const HB_IMAGES = [
  { src: '/hb-1.jpg', alt: 'Haiybellbottom — collection one' },
  { src: '/hb-2.jpg', alt: 'Haiybellbottom — collection two' },
  { src: '/hb-3.jpg', alt: 'Haiybellbottom — collection three' },
]

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}
const ITEM = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}
const REDUCED = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

const INTERVAL_MS = 5000

export default function HaiybellbottomPanel() {
  const prefersReduced = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  // Autoplay through images
  useEffect(() => {
    if (prefersReduced) return
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % HB_IMAGES.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [prefersReduced])

  return (
    <section
      id="haiybellbottom"
      className="hb-editorial-sec"
      aria-label="Haiybellbottom — clothing venture"
    >
      <div className="hb-editorial-grid">
        
        {/* ── Left Column: Typography & Content ── */}
        <motion.div
          className="hb-editorial-content"
          variants={prefersReduced ? REDUCED : STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-12%' }}
        >
          <motion.div className="eyebrow" variants={prefersReduced ? REDUCED : ITEM}>
            <span className="dot" aria-hidden="true"></span>
            02 / APPAREL · OBJECTS
          </motion.div>

          <motion.h2 className="display h-sec hb-massive" variants={prefersReduced ? REDUCED : ITEM}>
            HB
          </motion.h2>

          <motion.p className="display hb-tag" variants={prefersReduced ? REDUCED : ITEM}>
            You can't buy it.
          </motion.p>

          <motion.div className="hb-rule" variants={prefersReduced ? REDUCED : ITEM} />

          <motion.p className="eyebrow hb-sub" variants={prefersReduced ? REDUCED : ITEM}>
            Haiybellbottom
          </motion.p>

          <motion.p className="body-sm hb-desc" variants={prefersReduced ? REDUCED : ITEM}>
            A study in warmth, utility, and considered everyday design.
          </motion.p>

          <motion.div className="hb-nav-row" variants={prefersReduced ? REDUCED : ITEM}>
            <div className="hb-dots" aria-label="Gallery navigation">
              {HB_IMAGES.map((_, i) => (
                <button
                  key={i}
                  className={`hb-dot${i === activeIndex ? ' on' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div className="hb-cta-row" variants={prefersReduced ? REDUCED : ITEM}>
            <a
              href="#"
              className="arrowlink"
              aria-label="Explore Haiybellbottom collection — coming soon"
              onClick={(e) => e.preventDefault()}
            >
              <div className="ar">
                <svg viewBox="0 0 11 11" fill="none">
                  <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <span>VIEW COLLECTION</span>
            </a>
            <span className="eyebrow hb-soon">Collection launching soon</span>
          </motion.div>
        </motion.div>

        {/* ── Right Column: The Framed Gallery ── */}
        <div className="hb-editorial-gallery">
          <div className="hb-gallery-frame">
            <AnimatePresence initial={false}>
              <motion.img
                key={activeIndex}
                src={HB_IMAGES[activeIndex].src}
                alt=""
                className="hb-gallery-img"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReduced ? 0.1 : 1.4, ease: [0.22, 0.61, 0.36, 1] }}
                draggable={false}
              />
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}
