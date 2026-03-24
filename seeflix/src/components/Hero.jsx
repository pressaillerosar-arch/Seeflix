import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">✦ Stream. Discover. Repeat.</p>
        <h1 className="hero-title">YOUR WORLD <em>OF</em> CINEMA</h1>
        <p className="hero-desc">
          Thousands of films and series at your fingertips. Curated collections,
          fresh releases, and timeless classics — all in one place.
        </p>
        <Link to="/media"><button className="hero-btn">Browse Catalogue →</button></Link>
      </div>
    </section>
  )
}

export default Hero
