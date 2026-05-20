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

  it('renders Apple Music link', () => {
    render(<MusicSection />)
    expect(screen.getByRole('link', { name: /apple music/i })).toBeInTheDocument()
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

  it('renders Facebook link', () => {
    render(<MusicSection />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
  })

  it('renders Linktree link', () => {
    render(<MusicSection />)
    expect(screen.getByRole('link', { name: /linktree/i })).toBeInTheDocument()
  })
})
