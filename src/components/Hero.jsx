import { motion } from 'framer-motion'
import { Mail, Terminal } from 'lucide-react'
import { Github, Linkedin } from './icons.jsx'
import { TYPING_TEXTS } from '../data/constants.jsx'
import { useTypingAnimation } from '../hooks/index.js'
import '../styles/Hero.css'

// =========================================
// PARTICLES sub-component
// =========================================
function Particles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 20,
    color: i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#06b6d4' : '#3b82f6',
  }))

  return (
    <div className="particles" aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  )
}

// =========================================
// CODE DISPLAY sub-component
// =========================================
function CodeDisplay() {
  const lines = [
    { num: 1, content: <><span className="code-purple">const</span> <span className="code-blue">developer</span> <span className="code-white">= {'{'}</span></> },
    { num: 2, content: <><span className="code-white">&nbsp;&nbsp;name:</span> <span className="code-green">"Sithmini Sasanka"</span><span className="code-white">,</span></> },
    { num: 3, content: <><span className="code-white">&nbsp;&nbsp;role:</span> <span className="code-green">"IT Undergraduate"</span><span className="code-white">,</span></> },
    { num: 4, content: <><span className="code-white">&nbsp;&nbsp;university:</span> <span className="code-green">"Uni of Ruhuna"</span><span className="code-white">,</span></> },
    { num: 5, content: <><span className="code-white">&nbsp;&nbsp;skills:</span> <span className="code-white">[</span></> },
    { num: 6, content: <><span className="code-green">&nbsp;&nbsp;&nbsp;&nbsp;"Java"</span><span className="code-white">,</span> <span className="code-green">"C#"</span><span className="code-white">,</span> <span className="code-green">"JS"</span><span className="code-white">,</span></> },
    { num: 7, content: <><span className="code-green">&nbsp;&nbsp;&nbsp;&nbsp;"MySQL"</span><span className="code-white">,</span> <span className="code-green">"Android"</span></> },
    { num: 8, content: <><span className="code-white">&nbsp;&nbsp;],</span></> },
    { num: 9, content: <><span className="code-white">&nbsp;&nbsp;goal:</span> <span className="code-green">"IT Internship"</span><span className="code-white">,</span></> },
    { num: 10, content: <><span className="code-white">&nbsp;&nbsp;passion:</span> <span className="code-green">"Building things"</span></> },
    { num: 11, content: <><span className="code-white">{'}'}</span></> },
    { num: 12, content: <></> },
    { num: 13, content: <><span className="code-cyan">console</span><span className="code-white">.</span><span className="code-blue">log</span><span className="code-white">(</span><span className="code-green">"Let's connect! 🚀"</span><span className="code-white">)</span></> },
  ]

  return (
    <div aria-label="Code snippet showing developer profile">
      {lines.map((line, i) => (
        <motion.div
          key={line.num}
          className="code-line"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 + i * 0.06, duration: 0.3 }}
        >
          <span className="line-num code-gray">{line.num}</span>
          <span>{line.content}</span>
        </motion.div>
      ))}
    </div>
  )
}

// =========================================
// HERO SECTION
// =========================================
export default function Hero() {
  const typedText = useTypingAnimation(TYPING_TEXTS)

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
        <div className="hero-grid" />
      </div>
      <Particles />

      <div className="container">
        <div className="hero-inner">
          {/* Left: Content */}
          <div className="hero-content">
            <motion.div
              className="hero-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="hero-greeting-dot" aria-hidden="true" />
              Available for Internships
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Sithmini Sasanka</span>
            </motion.h1>

            <motion.div
              className="hero-typing-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              aria-live="polite"
            >
              <span className="typing-text">{typedText}</span>
              <span className="typing-cursor" aria-hidden="true" />
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              I'm an Information Technology undergraduate at the University of Ruhuna,
              passionate about technology, software development, and building meaningful
              digital solutions. I enjoy learning new technologies, exploring creative
              ideas, and turning concepts into practical applications.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }}>
                <Terminal size={16} />
                Explore My Projects
              </a>
              <a href="#contact" className="btn-secondary" onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>
                <Mail size={16} />
                Contact Me
              </a>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <span className="hero-socials-label">Find me on</span>
              <a
                href="https://github.com/sithmininks"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sithmini-sasanka-b5b860371"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:sithmininks@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="dev-workspace">
              {/* Floating badges */}
              <div className="float-badge float-badge-1" aria-hidden="true">
                <div className="badge-icon" style={{ background: 'rgba(139,92,246,0.2)', color: '#a78bfa' }}>⚡</div>
                <span>Always Learning</span>
              </div>
              <div className="float-badge float-badge-2" aria-hidden="true">
                <div className="badge-icon" style={{ background: 'rgba(6,182,212,0.2)', color: '#22d3ee' }}>🎓</div>
                <span>IT Undergraduate</span>
              </div>
              <div className="float-badge float-badge-3" aria-hidden="true">
                <div className="badge-icon" style={{ background: 'rgba(34,197,94,0.2)', color: '#4ade80' }}>✓</div>
                <span>Open to Work</span>
              </div>

              {/* Laptop frame with code */}
              <div className="laptop-frame">
                <div className="laptop-screen">
                  <div className="code-window">
                    <div className="code-header" aria-hidden="true">
                      <div className="dot dot-red" />
                      <div className="dot dot-yellow" />
                      <div className="dot dot-green" />
                    </div>
                    <CodeDisplay />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-hidden="true"
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}
