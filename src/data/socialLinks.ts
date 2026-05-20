export interface SocialLink {
  name: string
  url: string
  icon: string // SVG path or identifier
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/1mIPstqsyaiH144ohKX6Fp?si=I7ZFokOQRWSGJESkurxAsQ',
    icon: 'spotify',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/jackson-yandell/1737699772',
    icon: 'apple-music',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@jacksonyandell',
    icon: 'youtube',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/jacksonyandell',
    icon: 'instagram',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@jackson.yandell',
    icon: 'tiktok',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/jacksonyandell',
    icon: 'facebook',
  },
  {
    name: 'Linktree',
    url: 'https://linktr.ee/jacksonyandell',
    icon: 'linktree',
  },
]
