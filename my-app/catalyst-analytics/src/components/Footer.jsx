import { Link, NavLink } from 'react-router-dom'
import logoses from '../assets/Logo (30).png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="brand footer-brand">
          <img src={logoses} alt="" style={{width:"150px",height:"60px"}}/>
        </div>

        <nav className="footer-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="socials">
          <a href="#" aria-label="facebook">f</a>
          <a href="#" aria-label="twitter">t</a>
          <a href="#" aria-label="linkedin">in</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>✉️ contact@catalystanalytics.io</p>
        <p>📞 +1 (469) 712-4672</p>
        <p>📍 5511 Parkcrest Dr, Suite 103, Austin, TX 78731</p>
      </div>

      <div className="container copyright-row">
        <p>© 2025 Catalyst Analytics. All rights reserved.</p>
        <div>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
