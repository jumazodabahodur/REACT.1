import { useMemo, useState } from 'react'
import JobCard from '../components/JobCard'
import SectionTitle from '../components/SectionTitle'
import { careerHero, jobs } from '../data/siteData'

const initialFilters = {
  department: 'All Departments',
  experience: 'All Experience',
  jobType: 'All Job Types',
  workplace: 'All Workplaces',
  search: '',
}

export default function Career() {
  const [filters, setFilters] = useState(initialFilters)

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const departmentOk = filters.department === 'All Departments' || job.department === filters.department
      const experienceOk = filters.experience === 'All Experience' || job.experience === filters.experience
      const jobTypeOk = filters.jobType === 'All Job Types' || job.jobType === filters.jobType
      const workplaceOk = filters.workplace === 'All Workplaces' || job.workplace === filters.workplace
      const searchOk = job.title.toLowerCase().includes(filters.search.toLowerCase())

      return departmentOk && experienceOk && jobTypeOk && workplaceOk && searchOk
    })
  }, [filters])

  return (
    <div className="page">
      <section className="inner-hero container career-hero">
        <div className="inner-hero-copy">
          <h1>Build the Future with Us</h1>
          <p>
            Shape the next generation of digital products, analytics systems, and AI solutions.
          </p>
          <button className="btn btn-primary" type="button">Explore Open Positions</button>
        </div>
        <img src={careerHero} alt="Career hero" className="inner-hero-image" />
      </section>

      <section className="container filters-bar">
        <select value={filters.department} onChange={(e) => setFilters({ ...filters, department: e.target.value })}>
          <option>All Departments</option>
          <option>Design</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Operations</option>
        </select>

        <select value={filters.experience} onChange={(e) => setFilters({ ...filters, experience: e.target.value })}>
          <option>All Experience</option>
          <option>1+ year</option>
          <option>2+ years</option>
          <option>3+ years</option>
          <option>5+ years</option>
        </select>

        <select value={filters.jobType} onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}>
          <option>All Job Types</option>
          <option>Full Time</option>
          <option>Contract</option>
        </select>

        <select value={filters.workplace} onChange={(e) => setFilters({ ...filters, workplace: e.target.value })}>
          <option>All Workplaces</option>
          <option>Remote</option>
          <option>Hybrid</option>
          <option>Onsite</option>
        </select>

        <input
          type="text"
          placeholder="Search by keywords..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
      </section>

      <section className="container section-space">
        <SectionTitle title="Open Positions" />
        <div className="cards-grid two-cols">
          {filteredJobs.length ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="empty-state">No vacancies match your filters.</p>
          )}
        </div>
      </section>

      <section className="container cta-banner">
        <h2>Ready to Discuss</h2>
        <p>Your Product Needs With Catalyst Analytics Experts?</p>
        <button className="btn btn-primary" type="button">Get In Touch</button>
      </section>
    </div>
  )
}
