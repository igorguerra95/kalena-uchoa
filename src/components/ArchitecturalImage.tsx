import React, { useState } from 'react';
import { Compass } from 'lucide-react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbackTitle?: string;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  fallbackTitle,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-surface text-muted-foreground p-6 text-center border border-border ${className}`}
      >
        <Compass className="w-7 h-7 stroke-[1.25] mb-3 opacity-60" aria-hidden="true" />
        <span className="font-display text-lg text-foreground tracking-tight">
          {fallbackTitle || 'Kalena Uchôa - Arquitetura'}
        </span>
        <span className="text-xs text-muted-foreground mt-1">
          Registro fotográfico arquitetônico
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-surface animate-pulse"
        />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
