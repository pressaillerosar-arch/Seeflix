import './MediaCard.css'

function MediaCard({ title, cover, rating, type }) {
  const fallback = `https://placehold.co/300x450/1a1a28/e8e8f0?text=${encodeURIComponent(title)}`

  return (
    <div className="media-card">
      <img
        className="media-card-img"
        src={cover}
        alt={title}
        loading="lazy"
        onError={(e) => { e.target.onerror = null; e.target.src = fallback }}
      />
      <div className="media-card-body">
        <span className={`media-card-type type-${type}`}>
          {type === 'movie' ? 'Movie' : 'TV Show'}
        </span>
        <h3 className="media-card-title">{title}</h3>
        <div className="media-card-rating">{rating}</div>
      </div>
    </div>
  )
}

export default MediaCard
