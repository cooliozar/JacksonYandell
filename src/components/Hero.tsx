import logo from '../assets/images/JacksonYandellLogo.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero" id="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-particles" />
      </div>

      <div className="hero-content">
        <div className="hero-logo-wrap">
          <div className="hero-logo-glow" aria-hidden="true" />
          <img
            src={logo}
            alt="Jackson Yandell Logo"
            className="hero-logo"
            width={480}
            height={480}
          />
        </div>

        <p className="hero-tagline">
          Timeless songs. Real emotion. Human connection.
        </p>

        <div className="hero-cta">
          <a href="#music" className="btn btn--primary" aria-label="Listen Now">
            Listen Now
          </a>
          <a href="#videos" className="btn btn--secondary" aria-label="Watch Video">
            Watch Video
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
