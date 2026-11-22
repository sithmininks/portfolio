import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Github } from './icons.jsx'
import { PROJECTS } from '../data/constants.jsx'
import { fadeUp, staggerContainer } from '../data/animations.js'
import { useInView } from '../hooks/index.js'
import '../styles/Projects.css'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="bg-orb bg-orb-1" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            A selection of academic and personal projects that showcase my technical skills and problem-solving ability.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {PROJECTS.map((project, i) => (
            <motion.div key={project.title} className="project-card" variants={fadeUp} custom={i}>
              {/* Visual area */}
              <div className="project-visual" style={{ background: project.gradient }}>
                <div className="project-visual-gradient" aria-hidden="true" />
                <div className="project-icon-bg" style={{ background: project.iconBg }}>
                  {project.icon}
                </div>
              </div>

              {/* Body */}
              <div className="project-body">
                <div className="project-meta">
                  <span className={`project-type-badge ${project.typeBadge}`}>
                    {project.type}
                  </span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {project.contribution && (
                  <p style={{ fontSize: '0.78rem', color: 'var(--cyan)', fontStyle: 'italic' }}>
                    💡 {project.contribution}
                  </p>
                )}

                <div className="project-tech-stack">
                  {project.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    className="btn-project btn-project-primary"
                    onClick={() => alert(`"${project.title}" – This project was developed as part of academic coursework. Source code available on request.`)}
                    aria-label={`View details for ${project.title}`}
                  >
                    <ExternalLink size={13} />
                    View Details
                  </button>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project btn-project-secondary"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                  ) : (
                    <button
                      className="btn-project btn-project-secondary"
                      style={{ opacity: 0.5, cursor: 'not-allowed' }}
                      disabled
                      title="Repository not available"
                      aria-label="Repository not publicly available"
                    >
                      <Github size={13} />
                      Private
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
