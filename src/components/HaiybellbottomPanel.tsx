/* =============================================================
   HaiybellbottomPanel.tsx — Opulent Editorial Split & Parallax
   ============================================================= */
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import {
  HB_IMAGES,
  HB_INTERVAL_MS,
  HB_TAGLINE,
  HB_TARGET_URL,
  getNextSlideIndex,
  formatSlideFraction,
} from '../utils/haiybellbottom'
import './HaiybellbottomPanel.css'

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const ITEM = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
}

const REDUCED = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export default function HaiybellbottomPanel() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  // Subtle GPU-composited parallax (transform-only, zero layout shift)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgParallaxY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const galleryParallaxY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])
  const innerImageParallaxY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  // Preload all 3 heritage saree images once on mount to avoid decode stutter
  useEffect(() => {
    HB_IMAGES.forEach((slide) => {
      const img = new Image()
      img.decoding = 'async'
      img.src = slide.src
    })
  }, [])

  // Autoplay through images at exact 5000ms progression speed
  useEffect(() => {
    if (prefersReduced) return
    const id = window.setInterval(() => {
      setActiveIndex((i) => getNextSlideIndex(i, HB_IMAGES.length))
    }, HB_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [prefersReduced, activeIndex])

  const activeSlide = HB_IMAGES[activeIndex] ?? HB_IMAGES[0]

  return (
    <section
      ref={sectionRef}
      id="haiybellbottom"
      className="hb-editorial-sec"
      aria-label="Haiybellbottom — heritage luxury textile venture"
    >
      {/* ── Full-Section Clickable Overlay Link (Opens https://hairybellbottom.vercel.app/ in new tab) ── */}
      <a
        href={HB_TARGET_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hb-section-link-overlay"
        aria-label="Open Haiybellbottom website (opens in new tab)"
      />

      {/* ── Subtle Parallax Ambient Backdrop ── */}
      <motion.div
        className="hb-parallax-bg"
        style={prefersReduced ? undefined : { y: bgParallaxY }}
        aria-hidden="true"
      />
      <div className="hb-ambient-vignette" aria-hidden="true" />

      <div className="hb-editorial-grid">
        {/* ── Left Column: Typography & Editorial Narrative ── */}
        <motion.div
          className="hb-editorial-content"
          variants={prefersReduced ? REDUCED : STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-12%' }}
        >
          <motion.div className="eyebrow hb-kicker" variants={prefersReduced ? REDUCED : ITEM}>
            <span>02 / APPAREL · HERITAGE ATELIER</span>
          </motion.div>

          <motion.h2 className="display h-sec hb-massive" variants={prefersReduced ? REDUCED : ITEM}>
            <a
              href={HB_TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hb-title-link"
              aria-label="Visit Haiybellbottom on Vercel (opens in new tab)"
            >
              HB
            </a>
          </motion.h2>

          <motion.p className="display hb-tag" variants={prefersReduced ? REDUCED : ITEM}>
            {HB_TAGLINE}
          </motion.p>

          <motion.div className="hb-rule" variants={prefersReduced ? REDUCED : ITEM} />

          <motion.p className="eyebrow hb-sub" variants={prefersReduced ? REDUCED : ITEM}>
            Haiybellbottom
          </motion.p>

          <motion.p className="body-sm hb-desc" variants={prefersReduced ? REDUCED : ITEM}>
            A study in heritage handloom, pure gold zari, and considered timeless drapery. Crafted in limited archival editions.
          </motion.p>

          {/* ── Active Slide Curated Caption ── */}
          <motion.div className="hb-slide-meta" variants={prefersReduced ? REDUCED : ITEM}>
            <div className="hb-slide-meta__header">
              <span className="hb-slide-meta__fraction">
                {formatSlideFraction(activeIndex, HB_IMAGES.length)}
              </span>
              <span className="hb-slide-meta__sep" aria-hidden="true">·</span>
              <span className="hb-slide-meta__title">{activeSlide.title}</span>
            </div>
            <p className="hb-slide-meta__detail">{activeSlide.detail}</p>
          </motion.div>

          {/* ── Slideshow Navigation Controls ── */}
          <motion.div className="hb-nav-row" variants={prefersReduced ? REDUCED : ITEM}>
            <div className="hb-dots" role="tablist" aria-label="Gallery slide navigation">
              {HB_IMAGES.map((slide, i) => {
                const isSelected = i === activeIndex
                return (
                  <button
                    key={slide.code}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`hb-dot${isSelected ? ' on' : ''}`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Show slide ${i + 1}: ${slide.title}`}
                  >
                    <span className="hb-dot__track">
                      <span className="hb-dot__fill" />
                    </span>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* ── External CTA Row (Opens https://vercel.app in new tab) ── */}
          <motion.div className="hb-cta-row" variants={prefersReduced ? REDUCED : ITEM}>
            <a
              href={HB_TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="arrowlink hb-cta-link"
              aria-label="Explore Haiybellbottom collection (opens in new tab)"
            >
              <div className="ar" aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path
                    d="M1 10L10 1M10 1H3M10 1V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span>VIEW COLLECTION</span>
            </a>
            <span className="eyebrow hb-soon">Archival Showcase · Live</span>
          </motion.div>
        </motion.div>

        {/* ── Right Column: Opulent Framed Parallax Gallery ── */}
        <motion.div
          className="hb-editorial-gallery"
          style={prefersReduced ? undefined : { y: galleryParallaxY }}
        >
          <a
            href={HB_TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hb-gallery-pedestal"
            aria-label={`View ${activeSlide.title} from Haiybellbottom collection (opens in new tab)`}
          >
            <div className="hb-gallery-frame">
              <motion.div
                className="hb-gallery-parallax-inner"
                style={prefersReduced ? undefined : { y: innerImageParallaxY }}
              >
                <AnimatePresence initial={false}>
                  <motion.img
                    key={activeIndex}
                    src={activeSlide.src}
                    alt={activeSlide.alt}
                    className="hb-gallery-img"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: prefersReduced ? 0.1 : 1.4,
                      ease: [0.22, 0.61, 0.36, 1],
                    }}
                    decoding="async"
                    draggable={false}
                  />
                </AnimatePresence>
              </motion.div>

              {/* Subtle inner gilt border + bottom caption overlay */}
              <div className="hb-gallery-inner-border" aria-hidden="true" />
              <div className="hb-gallery-overlay" aria-hidden="true">
                <span className="hb-gallery-overlay__code">
                  ARCHIVE {activeSlide.code}
                </span>
                <span className="hb-gallery-overlay__action">
                  EXPLORE ATELIER ↗
                </span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
