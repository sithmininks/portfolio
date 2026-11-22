import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Github, Linkedin } from './icons.jsx'
import { fadeUp, fadeLeft, fadeRight } from '../data/animations.js'
import { useInView } from '../hooks/index.js'
import '../styles/Contact.css'

export default function Contact() {
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
