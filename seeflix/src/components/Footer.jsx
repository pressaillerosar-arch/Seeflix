import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">SEE<span>FLIX</span></div>
          <p className="footer-tagline">Your ultimate destination for films and series. Stream what matters.</p>
        </div>
        <nav className="footer-nav">
          <h5>Navigation</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2025 Seeflix. All rights reserved.</span>
        <span className="footer-badge">✦ StreamSpace</span>
      </div>
    </footer>
  )
}

export default Footer
