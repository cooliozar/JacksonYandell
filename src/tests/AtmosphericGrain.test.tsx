import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AtmosphericGrain from '../components/AtmosphericGrain'

describe('AtmosphericGrain', () => {
  it('renders the grain overlay', () => {
    render(<AtmosphericGrain />)
    expect(screen.getByTestId('atmospheric-grain')).toBeInTheDocument()
  })

  it('is aria-hidden from assistive technology', () => {
    render(<AtmosphericGrain />)
    expect(screen.getByTestId('atmospheric-grain')).toHaveAttribute('aria-hidden', 'true')
  })
})
