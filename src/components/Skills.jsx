const skills = [
  {
    icon: 'fab fa-laravel',
    title: 'Laravel Development',
    description:
      'Expert in building robust web applications with Laravel framework, MVC architecture, and RESTful APIs.',
    tags: ['Laravel', 'MVC', 'REST API'],
  },
  {
    icon: 'fab fa-php',
    title: 'PHP & OOP',
    description:
      'Proficient in object-oriented programming, design patterns, and building scalable PHP applications.',
    tags: ['PHP', 'OOP', 'Design Patterns'],
  },
  {
    icon: 'fab fa-js',
    title: 'JavaScript & Frontend',
    description:
      'Creating dynamic and responsive interfaces using modern JavaScript, CSS3, and frontend frameworks.',
    tags: ['JavaScript', 'CSS3', 'Responsive'],
  },
  {
    icon: 'fas fa-database',
    title: 'Database Design',
    description:
      'Experienced in MySQL database design, optimization, and implementing efficient data structures.',
    tags: ['MySQL', 'SQL', 'Optimization'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I Do</span>
          <h2 className="section-title">Skills &amp; Expertise</h2>
        </div>
        <div className="skills-grid">
          {skills.map(({ icon, title, description, tags }) => (
            <div className="skill-card" key={title}>
              <div className="skill-icon">
                <i className={icon}></i>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="skill-tags">
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

export default Skills
