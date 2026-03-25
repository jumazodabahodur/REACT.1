import { useState } from 'react'
import { contactHero } from '../data/siteData'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  phone: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialState)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm(initialState)
  }

  return (
    <div className="page">
      <section className="inner-hero container contact-hero">
        <div className="inner-hero-copy">
          <h1>Contact Us</h1>
          <p>Get in touch with our team to discuss how we can help transform your business.</p>
          <button className="btn btn-primary" type="button">Get In Touch Now</button>
        </div>
        <img src={contactHero} alt="Contact hero" className="inner-hero-image" />
      </section>

      <section className="container section-space contact-grid">
        <form className="panel contact-form" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>
          <div className="form-grid two">
            <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" />
            <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" />
          </div>
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" />
          <input name="company" value={form.company} onChange={handleChange} placeholder="Company" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows="6" />
          <button className="btn btn-primary full-btn" type="submit">Send</button>
          {sent && <p className="success-text">Message sent successfully.</p>}
        </form>

        <div className="contact-side">
          <div className="panel">
            <h3>Contact Information</h3>
            <ul className="contact-list">
              <li><strong>Email</strong><span>contact@catalystanalytics.io</span></li>
              <li><strong>Phone</strong><span>(469) 712-4672</span></li>
              <li><strong>Office</strong><span>5511 Parkcrest Dr, Suite 103 Austin, TX 78731</span></li>
            </ul>
          </div>
          <div className="panel">
            <h3>Book a Meeting</h3>
            <p>
              Want to discuss your project in detail? Schedule a free 30-minute consultation.
            </p>
            <button className="btn btn-primary full-btn" type="button">Book a Meeting</button>
          </div>
        </div>
      </section>
    </div>
  )
}
