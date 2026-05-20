import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../components/Header'

describe('Header', () => {
  it('renders the header element', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders Jackson Yandell brand name', () => {
    render(<Header />)
    expect(screen.getByText(/jackson yandell/i)).toBeInTheDocument()
  })

  it('renders Music navigation link', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: /music/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#music')
  })

  it('renders About navigation link', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: /about/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#about')
  })

  it('renders Photos navigation link', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: /photos/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#photos')
  })

  it('renders Videos navigation link', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: /videos/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#videos')
  })

  it('renders Contact navigation link', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: /contact/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#contact')
  })

  it('renders a nav element with smooth-scroll anchor links', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })
})
