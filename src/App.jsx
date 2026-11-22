import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Interests from './components/Interests.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import './styles/global.css'

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
      <ScrollToTop />
    </>
  )
}
