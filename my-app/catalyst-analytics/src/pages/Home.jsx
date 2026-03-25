import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import SectionTitle from '../components/SectionTitle'
import { faqItems, homeServices, logos } from '../data/siteData'
import heroImage from '../assets/heroHome.png'

export default function Home() {
  return (
    <div className="page page-home">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Catalyst Analytics</span>
            <h1>
              Transforming Data<br />
              into <span>Decisions</span>
            </h1>
            <p>
              Leverage the power of machine learning and AI to unlock insights and drive
              business growth.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/services">Book a Free Call</Link>
              <Link className="btn btn-outline" to="/contact">Get Started</Link>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroImage} alt="Analytics hero" />
          </div>
        </div>
      </section>

      <section className="logo-strip container">
        {logos.map((logo) => (
          <img key={logo} src={logo}/>
        ))}
      </section>

      <section className="container section-space">
        <SectionTitle
          title="Our Ultimate Set of Services for Your Ideas Implementation"
          subtitle="Services designed to help your team deliver faster with modern AI and data systems."
        />
        <div className="cards-grid three-cols">
          {homeServices.map((service) => (
            <article className="mini-service-card" key={service.id}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-space faq-section">
        <SectionTitle title="Frequently Asked Questions" />
        <Accordion items={faqItems} />
      </section>
    </div>
  )
}
