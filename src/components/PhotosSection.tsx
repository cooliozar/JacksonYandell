import './PhotosSection.css'

// Cinematic placeholder gradient palettes — replace src with real artist photography
const PLACEHOLDER_PHOTOS = [
  { id: 1, alt: 'Jackson Yandell performing live', aspectRatio: 'landscape', gradient: 'from-amber' },
  { id: 2, alt: 'Jackson Yandell guitar close-up', aspectRatio: 'portrait', gradient: 'from-smoke' },
  { id: 3, alt: 'Jackson Yandell backstage', aspectRatio: 'square', gradient: 'from-slate' },
  { id: 4, alt: 'Jackson Yandell studio session', aspectRatio: 'landscape', gradient: 'from-ember' },
  { id: 5, alt: 'Jackson Yandell concert crowd', aspectRatio: 'square', gradient: 'from-dusk' },
  { id: 6, alt: 'Jackson Yandell acoustic set', aspectRatio: 'portrait', gradient: 'from-midnight' },
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
              <div
                className={`photo-cinematic photo-cinematic--${photo.gradient}`}
                aria-hidden="true"
              >
                <div className="photo-grain" />
                <div className="photo-vignette" />
              </div>
              <figcaption className="photo-caption">{photo.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

