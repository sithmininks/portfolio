import { useState, useEffect } from 'react'

export default function CursorGlow() {
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
