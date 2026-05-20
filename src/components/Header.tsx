import { useState, useEffect } from 'react'
import logo from '../assets/images/JacksonYandellLogo.png'
import './Header.css'

const NAV_LINKS = [
  { label: 'Music', href: '#music' },
  { label: 'About', href: '#about' },
  { label: 'Photos', href: '#photos' },
  { label: 'Videos', href: '#videos' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`} role="banner">
      <div className="header-inner">
        <a href="#" className="header-brand" aria-label="Jackson Yandell — Home">
          <img
            src={logo}
            alt="Jackson Yandell"
            className="brand-logo"
            width={32}
            height={32}
          />
          <span className="brand-name">Jackson Yandell</span>
        </a>

        <button
          className={`nav-toggle${menuOpen ? ' nav-toggle--open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={(e) => handleNavClick(e, href)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
