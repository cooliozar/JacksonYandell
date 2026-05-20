import logo from '../assets/images/JacksonYandellLogo.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero" id="hero">
      {/* Atmospheric background layers */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-vignette" />
      </div>

      {/* Animated atmospheric immersion */}
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-fog-1" />
        <div className="hero-fog-2" />
        <div className="hero-light-bloom" />
      </div>

      <div className="hero-content">
        <div className="hero-logo-wrap">
          <div className="hero-logo-glow" aria-hidden="true" />
          <div className="hero-logo-glow hero-logo-glow--warm" aria-hidden="true" />
          <img
            src={logo}
            alt="Jackson Yandell Logo"
            className="hero-logo"
            width={640}
            height={640}
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
