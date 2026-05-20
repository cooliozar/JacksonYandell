import SocialLinks from './SocialLinks'
import { SOCIAL_LINKS } from '../data/socialLinks'
import './ContactSection.css'

const CONTACT_EMAILS = [
  { label: 'Booking', email: 'booking@jacksonyandell.com' },
  { label: 'Media & Press', email: 'media@jacksonyandell.com' },
]

export default function ContactSection() {
  return (
    <section className="contact-section section" aria-label="Contact" id="contact">
      <div className="section-inner">
        <header className="section-header">
          <h2 className="section-title">Contact</h2>
          <div className="section-rule" aria-hidden="true" />
        </header>

        <div className="contact-grid">
          <div className="contact-emails">
            <h3 className="contact-subtitle">Get in Touch</h3>
            {CONTACT_EMAILS.map(({ label, email }) => (
              <div key={email} className="contact-email-row">
                <span className="contact-email-label">{label}</span>
                <a
                  href={`mailto:${email}`}
                  className="contact-email-link"
                  aria-label={email}
                >
                  {email}
                </a>
              </div>
            ))}
          </div>

          <div className="contact-social">
            <h3 className="contact-subtitle">Follow Along</h3>
            <SocialLinks links={SOCIAL_LINKS} className="contact-social-links" />
          </div>
        </div>
      </div>
    </section>
  )
}
