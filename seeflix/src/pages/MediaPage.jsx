// src/pages/MediaPage.jsx

import { useState } from 'react';
import MediaCard from '../components/MediaCard';
import mediaData from '../data/mediaData';
import './MediaPage.css';

function MediaPage() {
  const [filter, setFilter] = useState('all');

  const filtered =
    filter === 'all' ? mediaData : mediaData.filter((m) => m.type === filter);

  return (
    <div className="page media-page">
      <div className="media-page-header">
        <div className="media-page-titles">
          <h1 className="media-page-title">Full Catalogue</h1>
          <span className="media-page-count">{filtered.length} titles</span>
        </div>

        {/* Filter buttons */}
        <div className="filter-bar">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'movie' ? 'active' : ''}`}
            onClick={() => setFilter('movie')}
          >
            Movies
          </button>
          <button
            className={`filter-btn ${filter === 'tvshow' ? 'active' : ''}`}
            onClick={() => setFilter('tvshow')}
          >
            TV Shows
          </button>
        </div>
      </div>

      {/* Unified grid — type field used for visual distinction inside MediaCard */}
      <div className="media-grid">
        {filtered.map((media) => (
          <MediaCard key={media.id} {...media} />
        ))}
      </div>
    </div>
  );
}

export default MediaPage;
