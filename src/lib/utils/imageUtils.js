/**
 * Get optimized image URL
 * @param {string} src - Image source
 * @param {Object} options - Image options
 * @returns {string} Optimized image URL
 */
export function getOptimizedImageUrl(src, options = {}) {
  const { width = 800, height, quality = 75 } = options;

  if (!src) return "/images/placeholder.jpg";

  // If it's an external URL, return as is
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  // For Next.js Image optimization, return the src
  // Next.js will handle optimization automatically
  return src;
}

/**
 * Get image placeholder
 * @returns {string} Placeholder image URL
 */
export function getImagePlaceholder() {
  return "/images/placeholder.jpg";
}



