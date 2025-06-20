// Utilitaire pour gérer les chemins d'assets
export function getAssetPath(path: string): string {
  // Si le chemin est externe ou data URL, ne pas le modifier
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }

  // Domaine personnalisé - pas de basePath nécessaire
  // S'assurer que le chemin commence par /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return normalizedPath;
}

// Hook pour utiliser dans les composants React
export function useAssetPath(path: string): string {
  return getAssetPath(path);
} 