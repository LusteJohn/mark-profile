import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100)

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((section) => {
        if (window.pageYOffset >= section.offsetTop - 200) {
          current = section.getAttribute('id')
        }
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileOpen(false)
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <nav className="container nav">
        <h1 className="logo">
          <span className="logo-bracket">&lt;</span>
          DUMMY
          <span className="logo-bracket">/&gt;</span>
        </h1>

        <ul className={`nav-links${mobileOpen ? ' active' : ''}`}>
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          <button
            className="mobile-menu-btn"
            id="mobileMenuBtn"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
