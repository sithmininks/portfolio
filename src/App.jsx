import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail, Moon, Sun,
  ArrowUpRight, ExternalLink, Code2, Database, Wrench, Layers,
  GraduationCap, MapPin, Briefcase, Terminal,
  Globe, BookOpen, Zap, ArrowUp,
  Send, CheckCircle, AlertCircle
} from 'lucide-react'

// Custom SVG icon components (lucide-react v1 has no brand icons)
const Github = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const Linkedin = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

// =========================================
// DATA
// =========================================
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Interests', href: '#interests' },
  { label: 'Contact', href: '#contact' },
]

const TYPING_TEXTS = [
  'Information Technology Undergraduate',
  'Aspiring Software Developer',
  'Web Development Enthusiast',
  'Creative Problem Solver',
]

const SKILLS = [
  {
    category: 'Programming Languages',
    icon: <Code2 size={20} />,
    colorClass: 'icon-purple',
    tags: [
      { name: 'Java', icon: '☕' },
      { name: 'C#', icon: '#️⃣' },
    ]
  },
  {
    category: 'Web Technologies',
    icon: <Globe size={20} />,
    colorClass: 'icon-blue',
    tags: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
    ]
  },
  {
    category: 'Database',
    icon: <Database size={20} />,
    colorClass: 'icon-cyan',
    tags: [
      { name: 'MySQL', icon: '🗄️' },
      { name: 'SQL', icon: '📋' },
    ]
  },
  {
    category: 'Development Tools',
    icon: <Wrench size={20} />,
    colorClass: 'icon-orange',
    tags: [
      { name: 'Visual Studio', icon: '🔵' },
      { name: 'VS Code', icon: '💻' },
      { name: 'IntelliJ IDEA', icon: '🧠' },
      { name: 'Android Studio', icon: '🤖' },
    ]
  },
  {
    category: 'Concepts & Areas',
    icon: <Layers size={20} />,
    colorClass: 'icon-green',
    tags: [
      { name: 'OOP', icon: '🔷' },
      { name: 'Data Structures', icon: '📊' },
      { name: 'UI/UX Design', icon: '🎭' },
      { name: 'Database Management', icon: '🗃️' },
      { name: 'Android Development', icon: '📱' },
    ]
  },
]

const PROJECTS = [
  {
    title: 'Hospital OPD Queue Management System',
    description: 'A hospital outpatient department queue management system designed to manage patient registration, token generation, and queue information. The system provides a user-friendly interface to improve patient queue management.',
    tech: ['C#', 'Windows Forms', 'MySQL', 'Visual Studio'],
    type: 'Group Project',
    typeBadge: 'badge-group',
    icon: '🏥',
    contribution: 'UI Design and backend development involvement.',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.1))',
    iconBg: 'rgba(139,92,246,0.15)',
    githubUrl: null,
  },
  {
    title: 'IntelliFlow AI – Adaptive Traffic Control System',
    description: 'An intelligent traffic control system that uses computer vision to detect vehicles and dynamically manage traffic signals. It also supports emergency vehicle prioritization to improve traffic flow.',
    tech: ['Python', 'YOLOv8', 'Flask', 'ESP32-CAM', 'Arduino'],
    type: 'AI & IoT',
    typeBadge: 'badge-personal',
    icon: '🚦',
    contribution: null,
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.1))',
    iconBg: 'rgba(6,182,212,0.15)',
    githubUrl: null,
  },
  {
    title: 'QR Code Attendance Management System',
    description: 'An Android application designed to simplify attendance management using QR code scanning technology. Provides an efficient and paperless approach to tracking student or employee attendance.',
    tech: ['Java', 'Android Studio', 'QR Code Scanner'],
    type: 'Android App',
    typeBadge: 'badge-android',
    icon: '📱',
    contribution: null,
    gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(6,182,212,0.1))',
    iconBg: 'rgba(34,197,94,0.15)',
    githubUrl: null,
  },
  {
    title: 'QuizUp – Android Quiz Application',
    description: 'An interactive Android quiz application designed to provide users with a simple and engaging quiz experience. Features multiple question categories and a clean, intuitive interface.',
    tech: ['Java', 'Android Studio'],
    type: 'Android App',
    typeBadge: 'badge-android',
    icon: '🧩',
    contribution: null,
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(139,92,246,0.1))',
    iconBg: 'rgba(249,115,22,0.15)',
    githubUrl: null,
  },
]

const INTERESTS = [
  { title: 'Web Development', desc: 'Building responsive, modern web experiences', icon: '🌐', bg: 'rgba(59,130,246,0.1)', color: '#60a5fa' },
  { title: 'Software Engineering', desc: 'Designing clean, scalable software solutions', icon: '⚙️', bg: 'rgba(139,92,246,0.1)', color: '#a78bfa' },
  { title: 'Database Management', desc: 'Structuring and optimizing data systems', icon: '🗄️', bg: 'rgba(6,182,212,0.1)', color: '#22d3ee' },
  { title: 'Mobile Development', desc: 'Creating Android apps with Java', icon: '📱', bg: 'rgba(34,197,94,0.1)', color: '#4ade80' },
  { title: 'UI/UX Design', desc: 'Crafting intuitive user interfaces', icon: '🎨', bg: 'rgba(236,72,153,0.1)', color: '#f472b6' },
  { title: 'Emerging Tech', desc: 'Exploring AI, IoT, and new technologies', icon: '🚀', bg: 'rgba(249,115,22,0.1)', color: '#fb923c' },
]

// =========================================
// ANIMATION VARIANTS
// =========================================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

// =========================================
// CUSTOM HOOKS
// =========================================
function useTypingAnimation(texts, speed = 70, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), speed)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), speed / 2)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setTextIndex(i => (i + 1) % texts.length)
    }

    setDisplayed(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, textIndex, texts, speed, pause])

  return displayed
}

function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])
  return scrolled
}

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref, threshold])
  return inView
}

// =========================================
// PARTICLES COMPONENT
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
// NAVBAR
// =========================================
function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const scrolled = useScrolled()

  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.slice(1))
    const handler = () => {
      const scrollY = window.scrollY + 100
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="navbar-inner">
            <motion.a
              href="#home"
              className="logo"
              onClick={e => { e.preventDefault(); handleNavClick('#home') }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sithmini.
            </motion.a>

            <motion.div
              className="nav-links"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>

            <motion.div
              className="nav-actions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span /><span /><span />
              </button>
            </motion.div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// =========================================
// HERO SECTION
// =========================================
function Hero() {
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
// ABOUT SECTION
// =========================================
function About() {
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
                  <span className="avatar-initials">SS</span>
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

// =========================================
// SKILLS SECTION
// =========================================
function Skills() {
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

// =========================================
// PROJECTS SECTION
// =========================================
function Projects() {
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

// =========================================
// EDUCATION SECTION
// =========================================
function Education() {
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
          <h2 className="section-title">Education & <span className="gradient-text">Background</span></h2>
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

// =========================================
// INTERESTS SECTION
// =========================================
function Interests() {
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

// =========================================
// CONTACT SECTION
// =========================================
function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setSubmitting(true)
    // Demo: simulate submission delay
    await new Promise(r => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }} ref={ref}>
      <div className="bg-orb bg-orb-1" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
        </motion.div>

        <div className="contact-inner">
          {/* Info */}
          <motion.div
            className="contact-info"
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="contact-title">
              Let's Build Something <span className="gradient-text">Together</span>
            </h3>
            <p className="contact-desc">
              I'm always interested in learning, collaborating, and exploring new opportunities.
              Feel free to contact me for internship opportunities, projects, or professional discussions.
            </p>

            <div className="contact-links">
              <a
                href="mailto:sithmininks@gmail.com"
                className="contact-link-item"
                aria-label="Send email to Sithmini"
              >
                <div className="contact-link-icon" style={{ background: 'rgba(249,115,22,0.1)', color: '#fb923c' }}>
                  <Mail size={18} />
                </div>
                <div className="contact-link-text">
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">sithmininks@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sithmini-sasanka-b5b860371"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
                aria-label="Sithmini's LinkedIn profile"
              >
                <div className="contact-link-icon" style={{ background: 'rgba(10,102,194,0.1)', color: '#60a5fa' }}>
                  <Linkedin size={18} />
                </div>
                <div className="contact-link-text">
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">sithmini-sasanka</span>
                </div>
              </a>

              <a
                href="https://github.com/sithmininks"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
                aria-label="Sithmini's GitHub profile"
              >
                <div className="contact-link-icon" style={{ background: 'rgba(139,92,246,0.1)', color: '#a78bfa' }}>
                  <Github size={18} />
                </div>
                <div className="contact-link-text">
                  <span className="contact-link-label">GitHub</span>
                  <span className="contact-link-value">sithmininks</span>
                </div>
              </a>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="mailto:sithmininks@gmail.com"
                className="btn-primary"
                style={{ fontSize: '0.875rem' }}
              >
                <Mail size={15} />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/sithmini-sasanka-b5b860371"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.875rem' }}
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {!submitted ? (
                <>
                  <div className="demo-notice" role="note">
                    <AlertCircle size={14} />
                    Demo mode — form submissions are not sent to a real server.
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="form-input"
                      placeholder="Internship opportunity / Project collaboration..."
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Tell me about the opportunity..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {error && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', fontSize: '0.82rem' }}>
                      <AlertCircle size={14} />
                      {error}
                    </div>
                  )}

                  <button type="submit" className="form-submit" disabled={submitting}>
                    {submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </>
              ) : (
                <div className="form-success">
                  <motion.div
                    className="success-icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle size={28} />
                  </motion.div>
                  <h4 className="success-title">Message received! 🎉</h4>
                  <p className="success-desc">
                    <strong>Demo mode:</strong> This is a frontend-only portfolio. To actually reach me,
                    please email <a href="mailto:sithmininks@gmail.com" style={{ color: 'var(--cyan)' }}>sithmininks@gmail.com</a> directly
                    or connect via LinkedIn.
                  </p>
                  <button
                    className="btn-secondary"
                    style={{ fontSize: '0.875rem' }}
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  >
                    Send Another
                  </button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// =========================================
// FOOTER
// =========================================
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">Sithmini.</div>
            <p className="footer-tagline">Designed &amp; Developed with passion.</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="footer-nav-link"
                onClick={e => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            <a href="https://github.com/sithmininks" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/sithmini-sasanka-b5b860371" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="mailto:sithmininks@gmail.com" className="footer-social" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>

          <p className="footer-copyright">
            © 2026 Sithmini Sasanka. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// =========================================
// BACK TO TOP
// =========================================
function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// =========================================
// CURSOR GLOW
// =========================================
function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const move = e => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const leave = () => setVisible(false)
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <div
      className="cursor-glow"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}

// =========================================
// APP ROOT
// =========================================
export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      <CursorGlow />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
