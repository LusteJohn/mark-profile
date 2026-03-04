import { useState } from 'react'

const contactInfo = [
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    content: <a href="mailto:example@example.com">example@example.com</a>,
  },
  {
    icon: 'fas fa-phone',
    title: 'Phone',
    content: <a href="tel:+1234567890">+1 (234) 567-890</a>,
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Location',
    content: <p>Your City, Country</p>,
  },
]

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map(({ icon, title, content }) => (
              <div className="contact-item" key={title}>
                <div className="contact-icon">
                  <i className={icon}></i>
                </div>
                <div className="contact-details">
                  <h4>{title}</h4>
                  {content}
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
