import { useRef } from 'react'
import { motion } from 'framer-motion'
import { INTERESTS } from '../data/constants.jsx'
import { fadeUp, staggerContainer } from '../data/animations.js'
import { useInView } from '../hooks/index.js'
import '../styles/Interests.css'

export default function Interests() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="interests" className="section" ref={ref}>
      <div className="bg-orb bg-orb-2" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-label">My Passions</span>
          <h2 className="section-title">What I'm <span className="gradient-text">Interested In</span></h2>
          <p className="section-subtitle">
            Areas that excite me and drive my continuous learning journey.
          </p>
        </motion.div>

        <motion.div
          className="interests-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {INTERESTS.map((item, i) => (
            <motion.div key={item.title} className="interest-card" variants={fadeUp} custom={i}>
              <div
                className="interest-icon-wrapper"
                style={{ background: item.bg }}
              >
                <span role="img" aria-label={item.title}>{item.icon}</span>
              </div>
              <h3 className="interest-title">{item.title}</h3>
              <p className="interest-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
