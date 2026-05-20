import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import MusicSection from '../components/MusicSection'

describe('MusicSection', () => {
  it('renders the music section', () => {
    render(<MusicSection />)
    expect(screen.getByRole('region', { name: /music/i })).toBeInTheDocument()
  })

  it('renders Death Perception as released', () => {
    render(<MusicSection />)
    expect(screen.getByText(/death perception/i)).toBeInTheDocument()
    expect(screen.getByText(/released/i)).toBeInTheDocument()
  })

  it('renders King Nightmare as coming soon', () => {
    render(<MusicSection />)
    expect(screen.getByText(/king nightmare/i)).toBeInTheDocument()
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument()
  })

  it('renders Spotify link', () => {
    render(<MusicSection />)
    expect(screen.getByRole('link', { name: /spotify/i })).toBeInTheDocument()
  })

  it('Spotify link points to correct artist URL', () => {
    render(<MusicSection />)
    const link = screen.getByRole('link', { name: /spotify/i })
    expect(link).toHaveAttribute(
      'href',
      'https://open.spotify.com/artist/1mIPstqsyaiH144ohKX6Fp?si=I7ZFokOQRWSGJESkurxAsQ'
    )
  })

  it('renders Apple Music link', () => {
    render(<MusicSection />)
    expect(screen.getByRole('link', { name: /apple music/i })).toBeInTheDocument()
  })

  it('Apple Music link points to correct artist URL', () => {
    render(<MusicSection />)
    const link = screen.getByRole('link', { name: /apple music/i })
    expect(link).toHaveAttribute(
      'href',
      'https://music.apple.com/us/artist/jackson-yandell/1737699772'
    )
  })

  it('renders YouTube link', () => {
    render(<MusicSection />)
    expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument()
  })

  it('renders Instagram link', () => {
    render(<MusicSection />)
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })

  it('renders TikTok link', () => {
    render(<MusicSection />)
    expect(screen.getByRole('link', { name: /tiktok/i })).toBeInTheDocument()
  })

  it('TikTok link points to correct profile URL', () => {
    render(<MusicSection />)
    const link = screen.getByRole('link', { name: /tiktok/i })
    expect(link).toHaveAttribute('href', 'https://www.tiktok.com/@jackson.yandell')
  })

  it('renders Facebook link', () => {
    render(<MusicSection />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
  })

  it('renders Linktree link', () => {
    render(<MusicSection />)
    expect(screen.getByRole('link', { name: /linktree/i })).toBeInTheDocument()
  })

  it('King Nightmare card renders artwork image instead of placeholder', () => {
    const { container } = render(<MusicSection />)
    const knCard = container.querySelector('.album-card--coming-soon')
    expect(knCard?.querySelector('img')).toBeInTheDocument()
    expect(knCard?.querySelector('.album-artwork-placeholder')).not.toBeInTheDocument()
  })

  it('Death Perception card renders artwork image instead of placeholder', () => {
    const { container } = render(<MusicSection />)
    const dpCard = container.querySelector('.album-card--released')
    expect(dpCard?.querySelector('img')).toBeInTheDocument()
    expect(dpCard?.querySelector('.album-artwork-placeholder')).not.toBeInTheDocument()
  })
})
