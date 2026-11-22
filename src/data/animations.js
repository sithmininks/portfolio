// =========================================
// ANIMATION VARIANTS
// =========================================
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}
