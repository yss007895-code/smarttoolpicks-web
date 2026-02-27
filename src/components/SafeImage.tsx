'use client';
import { useState } from 'react';

const FALLBACK_IMAGE = '/images/guides/hero-tech-premium.webp';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  category?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  placeholder?: string;
  blurDataURL?: string;
}

export default function SafeImage({ 
  fallbackSrc, src, alt, category, fill, priority, sizes, placeholder, blurDataURL, ...props 
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK_IMAGE);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc || FALLBACK_IMAGE);
      setHasError(true);
    }
  };

  return (
    <img
      {...props}
      src={imgSrc as string}
      alt={alt || "Guide image"}
      onError={handleError}
    />
  );
}