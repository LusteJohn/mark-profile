const socialLinks = [
  { icon: 'fab fa-github', href: '#' },
  { icon: 'fab fa-linkedin', href: '#' },
  { icon: 'fab fa-twitter', href: '#' },
  { icon: 'fab fa-instagram', href: '#' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              <span className="logo-bracket">&lt;</span>DUMMY
              <span className="logo-bracket">/&gt;</span>
            </h2>
            <p>Building the future, one line of code at a time.</p>
          </div>
          <div className="footer-social">
            {socialLinks.map(({ icon, href }) => (
              <a href={href} className="social-link" key={icon}>
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Dummy Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
