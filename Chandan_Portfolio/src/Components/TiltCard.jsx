import { useRef } from "react"

const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`
    card.style.transition = 'transform 0.1s ease'
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,229,255,0.08), rgba(0,0,0,0.45))`
    card.style.borderColor = '#00f7ff'
    card.style.boxShadow = '0 0 30px rgba(0,229,255,0.15)'
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    card.style.transition = 'transform 500ms ease, background 500ms ease, box-shadow 500ms ease'
    card.style.background = 'rgba(0,0,0,0.45)'
    card.style.borderColor = 'rgba(255,255,255,0.3)'
    card.style.boxShadow = 'none'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </div>
  )
}

export default TiltCard