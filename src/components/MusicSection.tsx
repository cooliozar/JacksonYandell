import SocialLinks from './SocialLinks'
import { SOCIAL_LINKS } from '../data/socialLinks'
import knArtwork from '../assets/images/KN.png'
import './MusicSection.css'

interface Album {
  title: string
  status: 'released' | 'coming-soon'
  year?: string
  description: string
  artworkSrc?: string
}

const ALBUMS: Album[] = [
  {
    title: 'Death Perception',
    status: 'released',
    year: '2024',
    description:
      'A cinematic journey through grief, resilience, and the space between darkness and light.',
  },
  {
    title: 'King Nightmare',
    status: 'coming-soon',
    description: 'The next chapter. A new era is on the horizon.',
    artworkSrc: knArtwork,
  },
]

export default function MusicSection() {
  return (
    <section className="music-section section" aria-label="Music" id="music">
      <div className="section-inner">
        <header className="section-header">
          <h2 className="section-title">Music</h2>
          <div className="section-rule" aria-hidden="true" />
        </header>

        <div className="album-grid">
          {ALBUMS.map((album) => (
            <article key={album.title} className={`album-card album-card--${album.status}`}>
              <div className="album-artwork" aria-hidden="true">
                {album.artworkSrc ? (
                  <img src={album.artworkSrc} alt="" className="album-artwork-img" />
                ) : (
                  <div className="album-artwork-placeholder">
                    <span>{album.title.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="album-info">
                <h3 className="album-title">{album.title}</h3>
                {album.year && (
                  <span className="album-year">{album.year}</span>
                )}
                <span className={`album-status album-status--${album.status}`}>
                  {album.status === 'released' ? 'Released' : 'Coming Soon'}
                </span>
                <p className="album-description">{album.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="music-platforms">
          <h3 className="platforms-title">Stream & Follow</h3>
          <SocialLinks links={SOCIAL_LINKS} className="music-social-links" />
        </div>
      </div>
    </section>
  )
}
