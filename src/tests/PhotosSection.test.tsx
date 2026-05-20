import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PhotosSection from '../components/PhotosSection'

describe('PhotosSection', () => {
  it('renders the photos section', () => {
    render(<PhotosSection />)
    expect(screen.getByRole('region', { name: /photos/i })).toBeInTheDocument()
  })

  it('renders the Photos heading', () => {
    render(<PhotosSection />)
    expect(screen.getByRole('heading', { name: /photos/i })).toBeInTheDocument()
  })

  it('renders photo cards', () => {
    const { container } = render(<PhotosSection />)
    const cards = container.querySelectorAll('.photo-card')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('renders cinematic photo placeholder cards', () => {
    const { container } = render(<PhotosSection />)
    const placeholders = container.querySelectorAll('.photo-cinematic')
    expect(placeholders.length).toBeGreaterThan(0)
  })

  it('renders photo caption text', () => {
    render(<PhotosSection />)
    expect(screen.getByText(/jackson yandell performing live/i)).toBeInTheDocument()
  })
})
