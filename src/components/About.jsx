const stats = [
  { number: '10+', label: 'Projects' },
  { number: '3+', label: 'Years Exp' },
  { number: '15+', label: 'Happy Clients' },
]

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get To Know</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="highlight-text">
              I'm a passionate Full Stack Developer with expertise in building
              secure, scalable, and user-friendly web applications.
            </p>
            <p>
              With a strong foundation in Laravel, PHP OOP, and modern JavaScript frameworks,
              I specialize in creating comprehensive system solutions including QR-based
              attendance monitoring, CRUD applications, and management platforms.
            </p>
            <p>
              My approach combines clean code practices with innovative problem-solving
              to deliver exceptional digital experiences that meet real-world needs.
            </p>
            <div className="about-stats">
              {stats.map(({ number, label }) => (
                <div className="stat-item" key={label}>
                  <div className="stat-number">{number}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
