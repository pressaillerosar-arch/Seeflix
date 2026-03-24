import MediaCard from './MediaCard.jsx'
import './MediaList.css'

function MediaList({ title, items }) {
  return (
    <section className="media-list">
      <div className="media-list-header">
        <h2 className="media-list-title">{title}</h2>
        <span className="media-list-count">{items.length} titles</span>
      </div>
      <div className="media-grid">
        {items.map((m) => <MediaCard key={m.id} {...m} />)}
      </div>
    </section>
  )
}

export default MediaList
