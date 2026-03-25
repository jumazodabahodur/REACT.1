import { Link } from 'react-router-dom'

export default function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="job-badge">↗</div>
      <h3>{job.title}</h3>
      <div className="job-meta">
        <span>Salary: {job.salary}</span>
        <span>Experience: {job.experience}</span>
        <span>Deadline: {job.deadline}</span>
      </div>
      <div>
        <h4>Skills</h4>
        <p>{job.skills}</p>
      </div>
      <Link className="btn btn-primary full-btn" to={`/careers/${job.slug}`}>
        Apply Now
      </Link>
    </article>
  )
}
