// src/pages/HomePage.jsx

import { Link } from 'react-router-dom';
import MediaList from '../components/MediaList';
import mediaData from '../data/mediaData';
import './HomePage.css';

function HomePage() {
  const movies = mediaData.filter((m) => m.type === 'movie').slice(0, 6);
  const tvShows = mediaData.filter((m) => m.type === 'tvshow').slice(0, 6);

  return (
    <div className="page">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">✦ Stream. Discover. Repeat.</p>
          <h1 className="hero-title">
            YOUR WORLD <em>OF</em> CINEMA
          </h1>
          <p className="hero-desc">
            Thousands of films and series at your fingertips. Curated collections,
            fresh releases, and timeless classics — all in one place.
          </p>
          <Link to="/media">
            <button className="hero-btn">Browse Catalogue →</button>
          </Link>
        </div>
      </section>

      {/* ── Lists ── */}
      <MediaList title="Popular Movies" items={movies} />
      <MediaList title="Trending Series" items={tvShows} />
    </div>
  );
}

export default HomePage;
