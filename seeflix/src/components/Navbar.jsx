import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const { pathname } = useLocation()
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">SEE<span>FLIX</span></Link>
      <ul className="navbar-links">
        <li><Link to="/"        className={pathname === '/'        ? 'active' : ''}>Home</Link></li>
        <li><Link to="/media"   className={pathname === '/media'   ? 'active' : ''}>Media</Link></li>
        <li><Link to="/about"   className={pathname === '/about'   ? 'active' : ''}>About</Link></li>
        <li><Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
