import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const ROOT = resolve(process.cwd())

describe('Favicon and Browser Branding', () => {
  it('index.html title is Jackson Yandell', () => {
    const html = readFileSync(resolve(ROOT, 'index.html'), 'utf-8')
    expect(html).toMatch(/Jackson Yandell/i)
  })

  it('index.html has a favicon link element', () => {
    const html = readFileSync(resolve(ROOT, 'index.html'), 'utf-8')
    expect(html).toMatch(/<link[^>]+rel="icon"/)
  })

  it('favicon.svg does not use Vite default purple color', () => {
    const svg = readFileSync(resolve(ROOT, 'public/favicon.svg'), 'utf-8')
    expect(svg).not.toContain('#863bff')
  })

  it('favicon.svg uses JY brand dark background', () => {
    const svg = readFileSync(resolve(ROOT, 'public/favicon.svg'), 'utf-8')
    expect(svg).toContain('#080808')
  })

  it('favicon.svg uses JY brand gold color', () => {
    const svg = readFileSync(resolve(ROOT, 'public/favicon.svg'), 'utf-8')
    expect(svg).toContain('#b4964a')
  })

  it('apple-touch-icon.png exists in public directory', () => {
    expect(existsSync(resolve(ROOT, 'public/apple-touch-icon.png'))).toBe(true)
  })

  it('favicon-32x32.png exists in public directory', () => {
    expect(existsSync(resolve(ROOT, 'public/favicon-32x32.png'))).toBe(true)
  })

  it('site.webmanifest exists in public directory', () => {
    expect(existsSync(resolve(ROOT, 'public/site.webmanifest'))).toBe(true)
  })

  it('site.webmanifest references Jackson Yandell as name', () => {
    const manifest = readFileSync(resolve(ROOT, 'public/site.webmanifest'), 'utf-8')
    const data = JSON.parse(manifest)
    expect(data.name).toMatch(/jackson yandell/i)
  })

  it('site.webmanifest has dark theme color matching brand', () => {
    const manifest = readFileSync(resolve(ROOT, 'public/site.webmanifest'), 'utf-8')
    const data = JSON.parse(manifest)
    expect(data.theme_color).toBe('#080808')
  })

  it('index.html has apple-touch-icon link', () => {
    const html = readFileSync(resolve(ROOT, 'index.html'), 'utf-8')
    expect(html).toMatch(/apple-touch-icon/)
  })

  it('index.html has manifest link', () => {
    const html = readFileSync(resolve(ROOT, 'index.html'), 'utf-8')
    expect(html).toMatch(/site\.webmanifest/)
  })
})
