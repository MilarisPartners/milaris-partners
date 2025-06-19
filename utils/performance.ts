// Utilitaires pour optimiser les performances et le SEO

// Préchargement des ressources critiques
export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    // Précharger les polices critiques
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.as = 'font';
    fontPreload.href = '/fonts/work-sans-400.woff2';
    fontPreload.type = 'font/woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);

    // Précharger les images critiques (above the fold)
    const heroImagePreload = document.createElement('link');
    heroImagePreload.rel = 'preload';
    heroImagePreload.as = 'image';
    heroImagePreload.href = '/images/hero-background.webp';
    document.head.appendChild(heroImagePreload);
  }
};

// Chargement différé des ressources non critiques
export const lazyLoadNonCritical = () => {
  if (typeof window !== 'undefined') {
    // Charger Google Analytics après interaction utilisateur
    const loadAnalytics = () => {
      if (!document.querySelector('[data-analytics-loaded]')) {
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
        script.setAttribute('data-analytics-loaded', 'true');
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      }
    };

    // Charger après première interaction
    ['mousedown', 'touchstart', 'keydown', 'scroll'].forEach(event => {
      document.addEventListener(event, loadAnalytics, { once: true, passive: true });
    });

    // Fallback après 5 secondes
    setTimeout(loadAnalytics, 5000);
  }
};

// Optimisation des images avec intersection observer
export const setupImageLazyLoading = () => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy-load');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Observer toutes les images avec data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Optimisation du Core Web Vitals
export const optimizeCoreWebVitals = () => {
  if (typeof window !== 'undefined') {
    // Réduire le Cumulative Layout Shift (CLS)
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        // Détecter les changements de layout non intentionnels
        if (entry.target.getAttribute('data-layout-stable') !== 'true') {
          console.warn('Potential CLS detected:', entry.target);
        }
      }
    });

    // Observer les éléments critiques
    document.querySelectorAll('img, iframe, video').forEach(el => {
      observer.observe(el);
    });

    // Optimiser First Input Delay (FID)
    if ('requestIdleCallback' in window) {
      const runWhenIdle = (callback: () => void) => {
        requestIdleCallback(callback, { timeout: 2000 });
      };

      // Exécuter les tâches non critiques pendant les périodes d'inactivité
      runWhenIdle(() => {
        // Précharger les routes critiques
        import('../components/Navbar');
        import('../components/Footer');
      });
    }
  }
};

// Service Worker pour le cache et les performances
export const registerServiceWorker = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Métriques de performance pour le monitoring
export const trackWebVitals = (metric: any) => {
  // Envoyer les métriques à votre service d'analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

// Configuration des headers de sécurité pour le SEO
export const securityHeaders = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
}; 