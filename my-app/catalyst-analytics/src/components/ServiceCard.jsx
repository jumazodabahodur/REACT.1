export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <img src={service.image} alt={service.title} className="service-image" />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {service.points && (
        <ul>
          {service.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      <button className="btn btn-outline" type="button">Book a Call</button>
    </article>
  )
}
