"use client";

import Image from 'next/image';
import { useState, useMemo } from 'react';
import { getAssetPath } from '@/utils/assetPath';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  fallbackSrc?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  priority = false,
  fallbackSrc = '/team/default-avatar.jpg'
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Utiliser l'utilitaire pour gérer les chemins
  const imageSrc = useMemo(() => {
    if (hasError) {
      return getAssetPath(fallbackSrc);
    }
    return getAssetPath(src);
  }, [src, fallbackSrc, hasError]);

  const handleError = () => {
    console.warn(`Failed to load image: ${src}`);
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className || ''}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full" />
      )}
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={`object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
        unoptimized={hasError} // Use unoptimized fallback if there's an error
      />
    </div>
  );
} 