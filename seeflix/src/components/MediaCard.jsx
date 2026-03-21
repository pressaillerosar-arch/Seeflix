import './MediaCard.css';

function MediaCard({ title, cover, rating, type }) {
  const typeClass = type === 'movie' ? 'type-movie' : 'type-tvshow';
  const typeLabel = type === 'movie' ? 'Movie' : 'TV Show';

  return (
    <div className="media-card">
      <img
        className="media-card-img"
        src={cover}
        alt={title}
        loading="lazy"
      />
      <div className="media-card-body">
        <span className={`media-card-type ${typeClass}`}>{typeLabel}</span>
        <h3 className="media-card-title">{title}</h3>
        <div className="media-card-rating">{rating}</div>
      </div>
    </div>
  );
}

export default MediaCard;
