import './AboutSection.css'

export default function AboutSection() {
  return (
    <section className="about-section section" aria-label="About" id="about">
      <div className="section-inner about-section-inner">
        <header className="section-header">
          <h2 className="section-title">About</h2>
          <div className="section-rule" aria-hidden="true" />
        </header>

        <div className="about-content">
          <div className="about-text">
            <p className="about-lead">
              Jackson Yandell writes songs that don't let go.
            </p>
            <p>
              Rooted in powerful guitar and stripped-down honesty, his music finds the moments
              most artists avoid — the raw edges of grief, hope, and what it means to still feel
              something in a world that moves too fast. There are no shortcuts here. Just songs
              built to last.
            </p>

            <blockquote className="about-pullquote">
              "Every lyric is earned. Every note serves the truth of the song."
            </blockquote>

            <p>
              His sound carries the weight of late-night confessions and open highways, shaped
              by a belief that music, at its best, is a mirror. Every lyric is earned. Every
              note serves the truth of the song.
            </p>
            <p>
              Cinematic in texture, timeless in spirit — Jackson Yandell makes music for people
              who still believe in the power of a single song to change an entire night.
            </p>
            <p className="about-footer-line">
              Real emotion. Human connection. No apologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
