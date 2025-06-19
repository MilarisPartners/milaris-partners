import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://milaris.partners'
  const currentDate = new Date()
  
  // Pages principales avec leurs priorités et fréquences de mise à jour
  const pages = [
    {
      url: '',
      priority: 1.0,
      changeFrequency: 'weekly' as const,
    },
    {
      url: '/equipe',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/cession-entreprise',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      url: '/acquisition-entreprise',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      url: '/financement',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      url: '/levee-de-fonds',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: '/fusions-acquisitions',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: '/carrieres',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/mentions-legales',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
    {
      url: '/conditions-generales',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
  ]

  // Langues supportées
  const languages = ['fr', 'it', 'en']
  
  // Générer les URLs pour toutes les langues
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  pages.forEach(page => {
    languages.forEach(lang => {
      // URL principale pour chaque langue
      const url = lang === 'fr' 
        ? `${baseUrl}${page.url}` 
        : `${baseUrl}/${lang}${page.url}`
      
      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            'fr': `${baseUrl}${page.url}`,
            'it': `${baseUrl}/it${page.url}`,
            'en': `${baseUrl}/en${page.url}`,
          }
        }
      })
    })
  })

  return sitemapEntries
} 