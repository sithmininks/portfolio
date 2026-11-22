import { useRef } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Briefcase, BookOpen, Zap } from 'lucide-react'
import { Github, Linkedin } from './icons.jsx'
import { fadeUp, fadeLeft, fadeRight } from '../data/animations.js'
import { useInView } from '../hooks/index.js'
import '../styles/About.css'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="about" className="section" ref={ref}>
      <div className="bg-orb bg-orb-1" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        </motion.div>

        <div className="about-inner">
          {/* Visual side */}
          <motion.div
            className="about-visual"
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
              <div className="profile-frame">
                <div className="profile-ring" aria-hidden="true" />
                <div className="profile-avatar">
                  <img
                    src="/images/sithmini-profile.jpg"
                    alt="Sithmini Sasanka"
                    className="profile-photo"
                  />
                </div>
              </div>

              <div className="profile-stats" style={{ width: '100%', maxWidth: '300px' }}>
                <motion.div className="stat-card" variants={fadeUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"}>
                  <div className="stat-icon stat-icon-purple"><GraduationCap size={20} /></div>
                  <div className="stat-info">
                    <h4>University</h4>
                    <p>University of Ruhuna</p>
                  </div>
                </motion.div>
                <motion.div className="stat-card" variants={fadeUp} custom={2} initial="hidden" animate={inView ? "visible" : "hidden"}>
                  <div className="stat-icon stat-icon-cyan"><MapPin size={20} /></div>
                  <div className="stat-info">
                    <h4>Location</h4>
                    <p>Sri Lanka</p>
                  </div>
                </motion.div>
                <motion.div className="stat-card" variants={fadeUp} custom={3} initial="hidden" animate={inView ? "visible" : "hidden"}>
                  <div className="stat-icon stat-icon-blue"><Briefcase size={20} /></div>
                  <div className="stat-info">
                    <h4>Goal</h4>
                    <p>IT Internship</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            className="about-content"
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="about-text">
              I'm <strong style={{ color: 'var(--text-primary)' }}>Sithmini Sasanka</strong>, an Information Technology undergraduate
              at the University of Ruhuna, Sri Lanka. I am passionate about software development,
              web technologies, database management, and creating user-friendly digital experiences.
            </p>
            <p className="about-text">
              Through academic coursework and practical projects, I have gained experience in
              programming, database development, application development, and UI design. I enjoy
              exploring new technologies, solving problems, and continuously improving my technical knowledge.
            </p>
            <p className="about-text">
              My current goal is to secure an IT internship where I can apply my knowledge,
              develop industry-level skills, and gain valuable professional experience.
            </p>

            <div className="about-details">
              {[
                { icon: <GraduationCap size={16} />, label: 'Degree', value: 'BA Honours in IT' },
                { icon: <BookOpen size={16} />, label: 'Status', value: 'Undergraduate' },
                { icon: <MapPin size={16} />, label: 'Location', value: 'Sri Lanka' },
                { icon: <Zap size={16} />, label: 'Interest', value: 'Software Development' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="detail-item"
                  variants={fadeUp}
                  custom={i * 0.5}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <div className="detail-icon">{item.icon}</div>
                  <div>
                    <span className="detail-label">{item.label}</span>
                    <span className="detail-value">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <a
                href="https://github.com/sithmininks"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github size={16} />
                View GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sithmini-sasanka-b5b860371"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
