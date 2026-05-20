import deathPerceptionThumb from '../assets/images/Death_Perception.png'
import './VideosSection.css'

const DEATH_PERCEPTION_URL = 'https://youtu.be/JHPovC2WNhU?si=ldB8VW6AeMNlFao7'

interface Video {
  id: number
  title: string
  type: string
  url?: string
  thumbnail?: string
}

const PLACEHOLDER_VIDEOS: Video[] = [
  {
    id: 1,
    title: 'Death Perception — Official Music Video',
    type: 'Music Video',
    url: DEATH_PERCEPTION_URL,
    thumbnail: deathPerceptionThumb,
  },
  {
    id: 2,
    title: 'Live at [Venue] — Full Performance',
    type: 'Live Performance',
  },
  {
    id: 3,
    title: 'Acoustic Sessions — Vol. 1',
    type: 'Acoustic',
  },
]

export default function VideosSection() {
  return (
    <section className="videos-section section" aria-label="Videos" id="videos">
      <div className="section-inner">
        <header className="section-header">
          <h2 className="section-title">Videos</h2>
          <div className="section-rule" aria-hidden="true" />
        </header>

        <div className="videos-grid">
          {PLACEHOLDER_VIDEOS.map((video) => (
            <article key={video.id} className="video-card">
              {video.url ? (
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={video.title}
                  className="video-card-link"
                >
                  <div className="video-thumbnail">
                    {video.thumbnail && (
                      <img src={video.thumbnail} alt="" className="video-thumbnail-img" />
                    )}
                    <div className="video-play-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                  <div className="video-info">
                    <span className="video-type">{video.type}</span>
                    <h3 className="video-title">{video.title}</h3>
                  </div>
                </a>
              ) : (
                <>
                  <div className="video-thumbnail" aria-hidden="true">
                    <div className="video-play-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                  <div className="video-info">
                    <span className="video-type">{video.type}</span>
                    <h3 className="video-title">{video.title}</h3>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
