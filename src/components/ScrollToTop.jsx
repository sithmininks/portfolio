import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import '../styles/ScrollToTop.css'

export default function ScrollToTop() {
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
