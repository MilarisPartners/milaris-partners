// Audit SEO automatisé pour vérifier l'optimisation du site

export interface SEOAuditResult {
  score: number;
  issues: SEOIssue[];
  recommendations: string[];
  summary: {
    critical: number;
    warning: number;
    info: number;
  };
}

export interface SEOIssue {
  type: 'critical' | 'warning' | 'info';
  category: 'meta' | 'content' | 'technical' | 'performance' | 'accessibility';
  title: string;
  description: string;
  element?: string;
  recommendation: string;
}

export class SEOAuditor {
  private issues: SEOIssue[] = [];

  async auditPage(url?: string): Promise<SEOAuditResult> {
    this.issues = [];
    
    if (typeof window === 'undefined') {
      throw new Error('SEO audit must be run in browser environment');
    }

    // Audit des métadonnées
    this.auditMetadata();
    
    // Audit du contenu
    this.auditContent();
    
    // Audit technique
    this.auditTechnical();
    
    // Audit de performance
    await this.auditPerformance();
    
    // Audit d'accessibilité
    this.auditAccessibility();

    const summary = this.calculateSummary();
    const score = this.calculateScore();

    return {
      score,
      issues: this.issues,
      recommendations: this.generateRecommendations(),
      summary
    };
  }

  private auditMetadata() {
    // Title tag
    const title = document.querySelector('title');
    if (!title || !title.textContent) {
      this.addIssue('critical', 'meta', 'Titre manquant', 'La page n\'a pas de balise title', '<title>', 'Ajoutez une balise title descriptive');
    } else if (title.textContent.length < 30) {
      this.addIssue('warning', 'meta', 'Titre trop court', 'Le titre fait moins de 30 caractères', '<title>', 'Utilisez 50-60 caractères pour le titre');
    } else if (title.textContent.length > 60) {
      this.addIssue('warning', 'meta', 'Titre trop long', 'Le titre fait plus de 60 caractères', '<title>', 'Raccourcissez le titre à 50-60 caractères');
    }

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription || !metaDescription.getAttribute('content')) {
      this.addIssue('critical', 'meta', 'Meta description manquante', 'La page n\'a pas de meta description', 'meta[name="description"]', 'Ajoutez une meta description de 150-160 caractères');
    } else {
      const description = metaDescription.getAttribute('content') || '';
      if (description.length < 120) {
        this.addIssue('warning', 'meta', 'Meta description trop courte', 'La meta description fait moins de 120 caractères', 'meta[name="description"]', 'Utilisez 150-160 caractères');
      } else if (description.length > 160) {
        this.addIssue('warning', 'meta', 'Meta description trop longue', 'La meta description fait plus de 160 caractères', 'meta[name="description"]', 'Raccourcissez à 150-160 caractères');
      }
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      this.addIssue('warning', 'meta', 'URL canonique manquante', 'La page n\'a pas d\'URL canonique', 'link[rel="canonical"]', 'Ajoutez une URL canonique');
    }

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    
    if (!ogTitle) {
      this.addIssue('warning', 'meta', 'Open Graph titre manquant', 'Pas de og:title', 'meta[property="og:title"]', 'Ajoutez og:title pour les réseaux sociaux');
    }
    if (!ogDescription) {
      this.addIssue('warning', 'meta', 'Open Graph description manquante', 'Pas de og:description', 'meta[property="og:description"]', 'Ajoutez og:description');
    }
    if (!ogImage) {
      this.addIssue('warning', 'meta', 'Open Graph image manquante', 'Pas de og:image', 'meta[property="og:image"]', 'Ajoutez og:image (1200x630px)');
    }
  }

  private auditContent() {
    // Structure des titres (H1, H2, etc.)
    const h1Elements = document.querySelectorAll('h1');
    if (h1Elements.length === 0) {
      this.addIssue('critical', 'content', 'H1 manquant', 'La page n\'a pas de balise H1', 'h1', 'Ajoutez un titre H1 principal');
    } else if (h1Elements.length > 1) {
      this.addIssue('warning', 'content', 'Plusieurs H1', 'La page a plusieurs balises H1', 'h1', 'Utilisez un seul H1 par page');
    }

    // Images sans alt text
    const images = document.querySelectorAll('img');
    let imagesWithoutAlt = 0;
    images.forEach(img => {
      if (!img.getAttribute('alt')) {
        imagesWithoutAlt++;
      }
    });
    
    if (imagesWithoutAlt > 0) {
      this.addIssue('warning', 'accessibility', 'Images sans alt text', `${imagesWithoutAlt} images n'ont pas d'attribut alt`, 'img', 'Ajoutez des attributs alt descriptifs');
    }

    // Liens sans texte
    const links = document.querySelectorAll('a');
    let linksWithoutText = 0;
    links.forEach(link => {
      const text = link.textContent?.trim();
      if (!text || text.length < 2) {
        linksWithoutText++;
      }
    });

    if (linksWithoutText > 0) {
      this.addIssue('warning', 'accessibility', 'Liens sans texte', `${linksWithoutText} liens n'ont pas de texte descriptif`, 'a', 'Ajoutez du texte descriptif aux liens');
    }
  }

  private auditTechnical() {
    // HTTPS
    if (window.location.protocol !== 'https:') {
      this.addIssue('critical', 'technical', 'HTTPS non utilisé', 'Le site n\'utilise pas HTTPS', '', 'Activez HTTPS pour la sécurité et le SEO');
    }

    // Viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      this.addIssue('critical', 'technical', 'Viewport manquant', 'Pas de meta viewport', 'meta[name="viewport"]', 'Ajoutez meta viewport pour le responsive');
    }

    // Lang attribute
    const htmlLang = document.documentElement.getAttribute('lang');
    if (!htmlLang) {
      this.addIssue('warning', 'technical', 'Langue non déclarée', 'Pas d\'attribut lang sur html', 'html[lang]', 'Ajoutez lang="fr" à la balise html');
    }

    // Données structurées
    const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
    if (structuredData.length === 0) {
      this.addIssue('warning', 'technical', 'Données structurées manquantes', 'Pas de JSON-LD', 'script[type="application/ld+json"]', 'Ajoutez des données structurées Schema.org');
    }
  }

  private async auditPerformance() {
    if ('performance' in window) {
      // Core Web Vitals estimation
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        if (loadTime > 3000) {
          this.addIssue('warning', 'performance', 'Temps de chargement élevé', `Chargement en ${Math.round(loadTime)}ms`, '', 'Optimisez les images et le code');
        }

        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        if (domContentLoaded > 1500) {
          this.addIssue('info', 'performance', 'DOM lent à charger', `DOM en ${Math.round(domContentLoaded)}ms`, '', 'Réduisez le JavaScript bloquant');
        }
      }

      // Taille des ressources
      const resources = performance.getEntriesByType('resource');
      let totalSize = 0;
      let largeImages = 0;

      resources.forEach(resource => {
        const size = (resource as any).transferSize || 0;
        totalSize += size;
        
        if (resource.name.match(/\.(jpg|jpeg|png|gif|webp)$/i) && size > 500000) {
          largeImages++;
        }
      });

      if (largeImages > 0) {
        this.addIssue('warning', 'performance', 'Images trop lourdes', `${largeImages} images > 500KB`, 'img', 'Compressez et optimisez les images');
      }
    }
  }

  private auditAccessibility() {
    // Contraste des couleurs (basique)
    const elements = document.querySelectorAll('*');
    let lowContrastElements = 0;

    // Vérification basique du focus
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    let elementsWithoutFocus = 0;

    focusableElements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      if (computedStyle.outline === 'none' && computedStyle.boxShadow === 'none') {
        elementsWithoutFocus++;
      }
    });

    if (elementsWithoutFocus > 0) {
      this.addIssue('warning', 'accessibility', 'Focus non visible', `${elementsWithoutFocus} éléments sans indicateur de focus`, '', 'Ajoutez des styles de focus visibles');
    }
  }

  private addIssue(type: 'critical' | 'warning' | 'info', category: 'meta' | 'content' | 'technical' | 'performance' | 'accessibility', title: string, description: string, element: string, recommendation: string) {
    this.issues.push({
      type,
      category,
      title,
      description,
      element,
      recommendation
    });
  }

  private calculateSummary() {
    return {
      critical: this.issues.filter(issue => issue.type === 'critical').length,
      warning: this.issues.filter(issue => issue.type === 'warning').length,
      info: this.issues.filter(issue => issue.type === 'info').length
    };
  }

  private calculateScore(): number {
    const weights = { critical: -10, warning: -3, info: -1 };
    const penalty = this.issues.reduce((total, issue) => total + weights[issue.type], 0);
    return Math.max(0, Math.min(100, 100 + penalty));
  }

  private generateRecommendations(): string[] {
    const recommendations = [
      'Optimisez les métadonnées pour chaque page',
      'Ajoutez des données structurées Schema.org',
      'Optimisez les images (format WebP, compression)',
      'Améliorez la vitesse de chargement',
      'Vérifiez l\'accessibilité des éléments interactifs',
      'Implémentez un sitemap XML à jour',
      'Configurez les redirections 301 pour les anciennes URLs'
    ];

    return recommendations;
  }
}

// Export de la fonction principale
export const auditSEO = async (): Promise<SEOAuditResult> => {
  const auditor = new SEOAuditor();
  return await auditor.auditPage();
}; 