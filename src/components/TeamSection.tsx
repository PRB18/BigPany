/* =============================================================
   TeamSection.tsx
   Masthead/credits-style layout — NOT a card grid.
   Editorial colophon presentation of the founding team.
   ============================================================= */
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './TeamSection.css'

const team = [
  { index: '01', name: 'Krisha', role: 'Founder' },
  { index: '02', name: 'Rishi',  role: 'IT Head' },
  { index: '03', name: 'Bhushan', role: 'Marketing & Comms Head' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}
const rowVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}
const reducedRowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
}

export default function TeamSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="team-section" id="team" aria-labelledby="team-heading">
      <div className="section-container team-section__inner">
        {/* Eyebrow */}
        <motion.p
          className="team-section__eyebrow label-mono"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          The Team
        </motion.p>

        {/* Section headline */}
        <motion.h2
          id="team-heading"
          className="team-section__headline"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          Who's behind it.
        </motion.h2>

        {/* Masthead list */}
        <motion.ul
          className="team-section__list"
          role="list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
        >
          {team.map(({ index, name, role }) => (
            <motion.li
              key={index}
              className="team-section__row"
              variants={prefersReduced ? reducedRowVariants : rowVariants}
            >
              <span className="team-section__index label-mono">{index}</span>
              <span className="team-section__name">{name}</span>
              <span className="team-section__role label-mono">{role}</span>
              {/* photo slot - optional, square crop, grayscale duotone matching accent color if added later */}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
