import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '../components/Hero'

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />)
    expect(screen.getByRole('region', { name: /hero/i })).toBeInTheDocument()
  })

  it('renders the primary logo', () => {
    render(<Hero />)
    const logo = screen.getByAltText(/jackson yandell logo/i)
    expect(logo).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(
      screen.getByText(/timeless songs\. real emotion\. human connection\./i)
    ).toBeInTheDocument()
  })

  it('renders a Listen Now CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /listen now/i })).toBeInTheDocument()
  })

  it('renders a Watch Video CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /watch video/i })).toBeInTheDocument()
  })
})
