/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // Pas de basePath car domaine personnalisé
  assetPrefix: '', // Pas d'assetPrefix car domaine personnalisé
  images: {
    unoptimized: true, // Requis pour l'export statique
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  trailingSlash: true, // Recommandé pour GitHub Pages
}

module.exports = nextConfig 