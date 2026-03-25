import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { allServices } from '../data/siteData'
import heroImage from '../assets/heroServices.png'

export default function Services() {
  return (
    <div className="page">
      <section className="inner-hero container">
        <div className="inner-hero-copy">
          <h1>Our Comprehensive <span>Digital Solutions</span></h1>
          <p>
            AI-driven and data-rich services designed to help your business operate with more
            precision, automation, and insight.
          </p>
        </div>
        <img src={heroImage} alt="Services hero" className="inner-hero-image" />
      </section>

      <section className="container section-space">
        <SectionTitle
          title="Our Services"
          subtitle="Choose from tailored AI, analytics, and engineering services built for ambitious teams."
        />
        <div className="cards-grid two-cols">
          {allServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  )
}
