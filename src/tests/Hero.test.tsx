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

  it('renders atmospheric background container', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('.hero-atmosphere')).toBeInTheDocument()
  })

  it('renders fog layers inside atmosphere', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('.hero-fog-1')).toBeInTheDocument()
    expect(container.querySelector('.hero-fog-2')).toBeInTheDocument()
  })

  it('renders the animated time logo ring', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('[data-testid="time-ring"]')).toBeInTheDocument()
  })

  it('renders Roman numeral XII in the hero', () => {
    render(<Hero />)
    const xiiElements = screen.getAllByText('XII')
    expect(xiiElements.length).toBeGreaterThanOrEqual(1)
  })

  it('hero main logo is still rendered with the ring present', () => {
    render(<Hero />)
    const logo = screen.getByAltText(/jackson yandell logo/i)
    expect(logo).toBeInTheDocument()
  })

  it('CTA buttons still render alongside the time ring', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /listen now/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /watch video/i })).toBeInTheDocument()
  })
})
