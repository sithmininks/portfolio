import { useRef } from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '../data/constants.jsx'
import { fadeUp, staggerContainer } from '../data/animations.js'
import { useInView } from '../hooks/index.js'
import '../styles/Skills.css'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }} ref={ref}>
      <div className="bg-orb bg-orb-2" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-label">What I Know</span>
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">
            Technologies and tools I've worked with through academic projects and personal learning.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {SKILLS.map((cat, i) => (
            <motion.div key={cat.category} className="skill-category" variants={fadeUp} custom={i}>
              <div className="category-header">
                <div className={`category-icon ${cat.colorClass}`}>{cat.icon}</div>
                <h3 className="category-title">{cat.category}</h3>
              </div>
              <div className="skill-tags">
                {cat.tags.map(tag => (
                  <div key={tag.name} className="skill-tag">
                    <span className="skill-tag-icon" aria-hidden="true">{tag.icon}</span>
                    {tag.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
