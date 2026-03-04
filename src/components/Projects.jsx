const projects = [
  {
    icon: 'fas fa-qrcode',
    title: 'Student Attendance Monitoring System',
    description:
      'QR Code based attendance system with comprehensive Admin and Faculty dashboards. Built with OOP PHP for efficient student tracking and reporting.',
    tags: ['PHP OOP', 'QR Code', 'MySQL', 'Bootstrap'],
  },
  {
    icon: 'fas fa-book',
    title: 'Library Inventory System',
    description:
      'Complete book and student management platform with borrowing, tracking, and return features. Includes advanced search and reporting capabilities.',
    tags: ['Laravel', 'CRUD', 'JavaScript', 'API'],
  },
  {
    icon: 'fas fa-shopping-cart',
    title: 'E-Commerce Platform',
    description:
      'Full-featured online shopping system with payment integration, inventory management, and order tracking functionality.',
    tags: ['Laravel', 'Stripe', 'Vue.js', 'Redis'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map(({ icon, title, description, tags }) => (
            <div className="project-card" key={title}>
              <div className="project-header">
                <div className="project-icon">
                  <i className={icon}></i>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project-tags">
                {tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
