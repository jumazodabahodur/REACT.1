import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import JobCard from '../components/JobCard'
import { jobs } from '../data/siteData'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  linkedIn: '',
  portfolio: '',
  coverLetter: '',
  agree: false,
}

export default function CareerDetails() {
  const { slug } = useParams()
  const currentJob = useMemo(() => jobs.find((job) => job.slug === slug) || jobs[0], [slug])
  const similarJobs = jobs.filter((job) => job.slug !== currentJob.slug).slice(0, 4)
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page">
      <section className="career-detail-hero" style={{ backgroundImage: `url(${currentJob.image})` }}>
        <div className="overlay">
          <div className="container career-detail-headings">
            <h1>{currentJob.title}</h1>
            <button className="btn btn-primary" type="button">Apply Now</button>
          </div>
        </div>
      </section>

      <section className="container detail-grid section-space">
        <div className="detail-main">
          <article className="panel">
            <h3>About This Position</h3>
            <p>{currentJob.about}</p>
            <h3>Responsibilities</h3>
            <ul>
              <li>Create and improve digital products aligned with business goals.</li>
              <li>Collaborate with design, engineering, and stakeholders.</li>
              <li>Document solutions and communicate progress clearly.</li>
            </ul>
            <h3>Requirements</h3>
            <ul>
              <li>{currentJob.skills}</li>
              <li>Strong communication and ownership mindset.</li>
              <li>Ability to work in modern product teams.</li>
            </ul>
            <h3>Benefits</h3>
            <p>Competitive salary, flexible schedule, growth support, and a collaborative culture.</p>
          </article>

          <form className="panel apply-form" onSubmit={handleSubmit}>
            <h3>Apply Now</h3>
            <div className="form-grid two">
              <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" />
              <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" />
            </div>
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" />
            <input name="linkedIn" value={form.linkedIn} onChange={handleChange} placeholder="LinkedIn Profile" />
            <input name="portfolio" value={form.portfolio} onChange={handleChange} placeholder="Portfolio / Resume Link" />
            <textarea name="coverLetter" value={form.coverLetter} onChange={handleChange} placeholder="Cover Letter" rows="6" />
            <label className="checkbox-row">
              <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
              <span>I certify that the information provided is accurate.</span>
            </label>
            <button className="btn btn-primary full-btn" type="submit">Submit Application</button>
            {submitted && <p className="success-text">Application submitted successfully.</p>}
          </form>
        </div>

        <aside className="detail-sidebar">
          <div className="panel sticky-card">
            <h3>{currentJob.title}</h3>
            <div className="job-meta sidebar-meta">
              <span>Salary: {currentJob.salary}</span>
              <span>Experience: {currentJob.experience}</span>
              <span>Deadline: {currentJob.deadline}</span>
            </div>
            <button className="btn btn-primary full-btn" type="button">Apply Now</button>
          </div>
        </aside>
      </section>

      <section className="container section-space">
        <h2 className="similar-title">Similar Positions</h2>
        <div className="cards-grid two-cols">
          {similarJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </div>
  )
}
