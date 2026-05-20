import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-rule" aria-hidden="true" />
        <div className="footer-content">
          <p className="footer-copy">
            &copy; {year} Jackson Yandell. All rights reserved.
          </p>
          <p className="footer-tagline">
            Timeless songs. Real emotion.
          </p>
        </div>
      </div>
    </footer>
  )
}
