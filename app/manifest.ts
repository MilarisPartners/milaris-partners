import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Milaris Partners - Cabinet M&A spécialisé TPE/PME',
    short_name: 'Milaris Partners',
    description: 'Cabinet de conseil en fusions-acquisitions et levée de fonds spécialisé dans l\'accompagnement des TPE/PME en France et Italie.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0001ff',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any'
      },
      {
        src: '/logo-dark.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    categories: ['business', 'finance', 'professional'],
    lang: 'fr',
    scope: '/'
  }
} 