import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactSection from '../components/ContactSection'

describe('ContactSection', () => {
  it('renders the contact section', () => {
    render(<ContactSection />)
    expect(screen.getByRole('region', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders booking email', () => {
    render(<ContactSection />)
    expect(
      screen.getByRole('link', { name: /booking@jacksonyandell\.com/i })
    ).toBeInTheDocument()
  })

  it('renders media email', () => {
    render(<ContactSection />)
    expect(
      screen.getByRole('link', { name: /media@jacksonyandell\.com/i })
    ).toBeInTheDocument()
  })

  it('renders Spotify social link', () => {
    render(<ContactSection />)
    expect(screen.getByRole('link', { name: /spotify/i })).toBeInTheDocument()
  })

  it('renders Instagram social link', () => {
    render(<ContactSection />)
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })

  it('renders TikTok social link', () => {
    render(<ContactSection />)
    expect(screen.getByRole('link', { name: /tiktok/i })).toBeInTheDocument()
  })

  it('renders YouTube social link', () => {
    render(<ContactSection />)
    expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument()
  })

  it('renders Facebook social link', () => {
    render(<ContactSection />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
  })
})
