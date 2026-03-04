import { useEffect, useRef } from 'react'

function Hero() {
  const typingRef = useRef(null)

  useEffect(() => {
    const el = typingRef.current
    if (!el) return
    const fullText = 'Full Stack Developer'
    el.textContent = ''
    let i = 0

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < fullText.length) {
          el.textContent += fullText.charAt(i)
          i++
        } else {
          clearInterval(interval)
        }
      }, 100)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-particles"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Dummy Portfolio</h1>
          <h2 className="hero-title">
            <span className="typing-text" ref={typingRef}></span>
          </h2>
          <p className="hero-description">
            Crafting elegant solutions with Laravel, PHP OOP, and JavaScript.
            Specializing in scalable web applications and system development.
          </p>
          <div className="hero-buttons">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <i className="fas fa-envelope"></i> Get In Touch
            </a>
            <a
              href="#projects"
              className="btn btn-secondary"
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              <i className="fas fa-briefcase"></i> View Work
            </a>
          </div>
          <div className="hero-social">
            <a href="#" className="social-link"><i className="fab fa-github"></i></a>
            <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-container">
            <div className="avatar-circle"></div>
            <div className="avatar-icon">
              <i className="fas fa-code"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  )
}

export default Hero
