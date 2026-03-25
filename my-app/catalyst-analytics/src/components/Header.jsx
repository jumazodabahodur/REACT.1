import { NavLink, useLocation } from 'react-router-dom'
import logoses from '../assets/Logo (30).png'

const getCareerLink = (pathname) => (pathname.startsWith('/careers/') ? '/careers' : '/careers')

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
           <img src={logoses} alt="" style={{width:"150px",height:"60px"}}/>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to={getCareerLink(pathname)}>Careers</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <NavLink to="/contact" className="btn btn-primary small-btn">Contact Us</NavLink>
      </div>
    </header>
  )
}
