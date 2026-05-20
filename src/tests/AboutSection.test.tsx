import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AboutSection from '../components/AboutSection'

describe('AboutSection', () => {
  it('renders the about section', () => {
    render(<AboutSection />)
    expect(screen.getByRole('region', { name: /about/i })).toBeInTheDocument()
  })

  it('renders the About heading', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
  })

  it('renders the artist lead text', () => {
    render(<AboutSection />)
    expect(screen.getByText(/writes songs that don't let go/i)).toBeInTheDocument()
  })

  it('renders the pull quote', () => {
    render(<AboutSection />)
    expect(screen.getByRole('blockquote')).toBeInTheDocument()
  })

  it('renders the closing emotional line', () => {
    render(<AboutSection />)
    expect(screen.getByText(/real emotion\. human connection\. no apologies\./i)).toBeInTheDocument()
  })
})
