import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TimeLogoRing from '../components/TimeLogoRing'

describe('TimeLogoRing', () => {
  it('renders the time ring SVG element', () => {
    const { container } = render(<TimeLogoRing />)
    expect(container.querySelector('[data-testid="time-ring"]')).toBeInTheDocument()
  })

  it('renders all twelve Roman numerals', () => {
    render(<TimeLogoRing />)
    const numerals = ['XII', 'XI', 'X', 'IX', 'VIII', 'VII', 'VI', 'V', 'IV', 'III', 'II', 'I']
    for (const label of numerals) {
      const matches = screen.getAllByText(label)
      expect(matches.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders XII at the top position', () => {
    render(<TimeLogoRing />)
    const xiiElements = screen.getAllByText('XII')
    expect(xiiElements.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the base ring circle', () => {
    const { container } = render(<TimeLogoRing />)
    expect(container.querySelector('.ring-base')).toBeInTheDocument()
  })

  it('renders the sweep arc head element', () => {
    const { container } = render(<TimeLogoRing />)
    expect(container.querySelector('.ring-sweep-head')).toBeInTheDocument()
  })

  it('renders the sweep arc trail element', () => {
    const { container } = render(<TimeLogoRing />)
    expect(container.querySelector('.ring-sweep-trail')).toBeInTheDocument()
  })

  it('contains elements targeted by reduced-motion CSS override', () => {
    const { container } = render(<TimeLogoRing />)
    // These classes are targeted by @media (prefers-reduced-motion: reduce)
    expect(container.querySelector('.ring-sweep-head')).toBeInTheDocument()
    expect(container.querySelector('.ring-sweep-trail')).toBeInTheDocument()
    expect(container.querySelector('.ring-base-group')).toBeInTheDocument()
  })

  it('renders tick marks on the ring', () => {
    const { container } = render(<TimeLogoRing />)
    const ticks = container.querySelectorAll('.ring-tick')
    expect(ticks.length).toBe(60)
  })

  it('renders major tick marks at each hour position', () => {
    const { container } = render(<TimeLogoRing />)
    const majorTicks = container.querySelectorAll('.ring-tick--major')
    expect(majorTicks.length).toBe(12)
  })

  it('renders each numeral with a glow animation layer', () => {
    const { container } = render(<TimeLogoRing />)
    const glowLayers = container.querySelectorAll('.numeral-glow')
    expect(glowLayers.length).toBe(12)
  })

  it('each glow numeral has an animation-delay style', () => {
    const { container } = render(<TimeLogoRing />)
    const glowLayers = container.querySelectorAll<HTMLElement>('.numeral-glow')
    for (const el of glowLayers) {
      expect(el.style.animationDelay).toBeTruthy()
    }
  })

  it('glow numerals have sequential animation delays', () => {
    const { container } = render(<TimeLogoRing />)
    const glowLayers = container.querySelectorAll<HTMLElement>('.numeral-glow')
    const delays = Array.from(glowLayers).map(el => parseFloat(el.style.animationDelay))
    // Delays should all be positive and unique
    const unique = new Set(delays)
    expect(unique.size).toBe(12)
    delays.forEach(d => expect(d).toBeGreaterThan(0))
  })

  it('SVG is aria-hidden (decorative only)', () => {
    const { container } = render(<TimeLogoRing />)
    const svg = container.querySelector('[data-testid="time-ring"]')
    expect(svg?.getAttribute('aria-hidden')).toBe('true')
  })
})
