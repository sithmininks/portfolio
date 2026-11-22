import { Mail } from 'lucide-react'
import { Github, Linkedin } from './icons.jsx'
import { NAV_LINKS } from '../data/constants.jsx'
import '../styles/Footer.css'

export default function Footer() {
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
