"use client";

import { useEffect } from "react";

export default function PageSEO({
  title,
  description,
  url,
  keywords = [],
  image,
  type = "website",
}) {
  const fullTitle = title
    ? `${title} | Magic Show`
    : "Magic Show - Jewelry E-commerce";
  const fullUrl = url ? `https://magicshow.com${url}` : "https://magicshow.com";

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Update meta tags
    updateMetaTag("description", description);
    if (keywords.length > 0) {
      updateMetaTag("keywords", keywords.join(", "));
    }

    // Open Graph
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:type", type, true);
    if (image) {
      updateMetaTag("og:image", image, true);
    }

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    if (image) {
      updateMetaTag("twitter:image", image);
    }

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);
  }, [fullTitle, description, fullUrl, keywords, image, type]);

  return null;
}

