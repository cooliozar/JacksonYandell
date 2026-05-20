import './PhotosSection.css'

// Placeholder photos — replace with real artist photography
const PLACEHOLDER_PHOTOS = [
  { id: 1, alt: 'Jackson Yandell performing live', aspectRatio: 'landscape' },
  { id: 2, alt: 'Jackson Yandell guitar close-up', aspectRatio: 'portrait' },
  { id: 3, alt: 'Jackson Yandell backstage', aspectRatio: 'square' },
  { id: 4, alt: 'Jackson Yandell studio session', aspectRatio: 'landscape' },
  { id: 5, alt: 'Jackson Yandell concert crowd', aspectRatio: 'square' },
  { id: 6, alt: 'Jackson Yandell acoustic set', aspectRatio: 'portrait' },
]

export default function PhotosSection() {
  return (
    <section className="photos-section section" aria-label="Photos" id="photos">
      <div className="section-inner">
        <header className="section-header">
          <h2 className="section-title">Photos</h2>
          <div className="section-rule" aria-hidden="true" />
        </header>

        <div className="photos-grid">
          {PLACEHOLDER_PHOTOS.map((photo) => (
            <figure
              key={photo.id}
              className={`photo-card photo-card--${photo.aspectRatio}`}
              aria-label={photo.alt}
            >
              <div className="photo-placeholder" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <figcaption className="photo-caption">{photo.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
