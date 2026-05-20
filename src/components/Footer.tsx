import logo from '../assets/images/JacksonYandellLogo.png'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      {/* Faint watermark logo */}
      <div className="footer-watermark" aria-hidden="true">
        <img src={logo} alt="" className="footer-watermark-logo" />
      </div>

      <div className="footer-inner">
        <div className="footer-rule" aria-hidden="true" />
        <div className="footer-content">
          <p className="footer-copy">
            &copy; {year} Jackson Yandell. All rights reserved.
          </p>
          <p className="footer-tagline">
            Timeless songs. Real emotion.
          </p>
          <p className="footer-road-line">
            Built for the long road.
          </p>
        </div>
      </div>
    </footer>
  )
}
