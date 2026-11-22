import { useRef } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { fadeUp } from '../data/animations.js'
import { useInView } from '../hooks/index.js'
import '../styles/Education.css'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="education" className="section" style={{ background: 'var(--bg-secondary)' }} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Education &amp; <span className="gradient-text">Background</span></h2>
        </motion.div>

        <motion.div
          className="education-timeline"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <div className="timeline-line" aria-hidden="true" />

          <div className="timeline-item">
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot">
                <GraduationCap size={22} />
              </div>
            </div>
            <div className="timeline-content">
              <div className="timeline-status">
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80' }} aria-hidden="true" />
                Currently Enrolled
              </div>
              <h3 className="timeline-institution">University of Ruhuna, Sri Lanka</h3>
              <p className="timeline-degree">BA Honours in Information Technology</p>
              <p className="timeline-description">
                Pursuing a comprehensive undergraduate degree in Information Technology, gaining
                knowledge in software development, database management, networking, web technologies,
                mobile application development, and system design.
              </p>
              <div className="timeline-tags">
                {['Software Development', 'Web Technologies', 'Database Systems', 'Mobile Apps', 'UI/UX Design'].map(tag => (
                  <span key={tag} className="timeline-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
