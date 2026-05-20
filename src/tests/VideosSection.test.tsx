import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import VideosSection from '../components/VideosSection'

const DEATH_PERCEPTION_URL = 'https://youtu.be/JHPovC2WNhU?si=ldB8VW6AeMNlFao7'

describe('VideosSection', () => {
  it('renders the videos section', () => {
    render(<VideosSection />)
    expect(screen.getByRole('region', { name: /videos/i })).toBeInTheDocument()
  })

  it('renders the Videos heading', () => {
    render(<VideosSection />)
    expect(screen.getByRole('heading', { name: /videos/i })).toBeInTheDocument()
  })

  it('renders Death Perception video card', () => {
    render(<VideosSection />)
    expect(screen.getByText(/death perception/i)).toBeInTheDocument()
  })

  it('Death Perception video card links to the official YouTube URL', () => {
    render(<VideosSection />)
    const link = screen.getByRole('link', { name: /death perception/i })
    expect(link).toHaveAttribute('href', DEATH_PERCEPTION_URL)
  })

  it('Death Perception video link opens in a new tab', () => {
    render(<VideosSection />)
    const link = screen.getByRole('link', { name: /death perception/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
