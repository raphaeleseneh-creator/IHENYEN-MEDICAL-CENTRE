import React, { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ title, description }) => {
  useEffect(() => {
    const fullTitle = `${title} | Ihenyen Medical Centre, Benin City`;
    document.title = fullTitle;

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Scroll to top on route change smoothly
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [title, description]);

  return null;
};
