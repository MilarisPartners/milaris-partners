import { MetadataRoute } from 'next'

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
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable any'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable any'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    categories: ['business', 'finance', 'professional'],
    lang: 'fr',
    scope: '/'
  }
} 