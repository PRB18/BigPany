/* =============================================================
   TeamSection.tsx — Stitch exact match
   "THE ARCHITECTS" headline (Syne), 3-col grid,
   uppercase Fraunces names with index labels.
   ============================================================= */
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './TeamSection.css'

const team = [
  {
    index: '01',
    role: 'FOUNDER',
    name: 'Krisha',
    description:
      'Vision and strategic direction. Bridging the gap between raw data intelligence and market execution across both ventures.',
  },
  {
    index: '02',
    role: 'IT HEAD',
    name: 'Rishi',
    description:
      'Systems architecture and engineering. Building the intelligence engines behind OmniGrowth and the digital infrastructure for the group.',
  },
  {
    index: '03',
    role: 'MKTG & COMMS HEAD',
    name: 'Bhushan',
    description:
      'Brand narrative and market positioning. Translating complex value into compelling stories across both agritech and fashion.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}
const reducedCardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
}

export default function TeamSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="team-section" id="team" aria-labelledby="team-heading">
      <div className="section-container team-section__inner">

        {/* Header */}
        <div className="team-section__header">
          <motion.h2
            id="team-heading"
            className="team-section__headline"
            initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            The Architects.
          </motion.h2>

          <motion.div
            className="team-section__rule"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />
        </div>

        {/* 3-column grid */}
        <motion.ul
          className="team-section__grid"
          role="list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
        >
          {team.map(({ index, role, name, description }) => (
            <motion.li
              key={index}
              className="team-section__card"
              variants={prefersReduced ? reducedCardVariants : cardVariants}
            >
              {/* Index // Role */}
              <span className="team-section__card-index">
                {index} // {role}
              </span>

              {/* Name — large Fraunces uppercase */}
              <h3 className="team-section__card-name">{name.toUpperCase()}</h3>

              {/* Description */}
              <p className="team-section__card-desc">{description}</p>
            </motion.li>
          ))}
        </motion.ul>

      </div>
    </section>
  )
}
