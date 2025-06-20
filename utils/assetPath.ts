// Utilitaire pour gérer les chemins d'assets avec le basePath
export function getAssetPath(path: string): string {
  // Si le chemin est externe ou data URL, ne pas le modifier
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }

  // Détecter si nous sommes sur GitHub Pages en vérifiant l'URL
  let basePath = '';
  if (typeof window !== 'undefined') {
    // Si l'URL contient /miralis-partners/, nous sommes en production
    const pathname = window.location.pathname;
    if (pathname.startsWith('/miralis-partners/') || pathname === '/miralis-partners') {
      basePath = '/miralis-partners';
    }
  }
  
  // S'assurer que le chemin commence par /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}

// Hook pour utiliser dans les composants React
export function useAssetPath(path: string): string {
  return getAssetPath(path);
} 