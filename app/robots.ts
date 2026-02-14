// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://lesmoutonsmarseillais­.fr';
  
  // Block crawlers on staging/preview environments
  const isProduction = process.env.VERCEL_ENV === 'production';
  
  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }
  
  // Production: allow crawling, block private areas
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/'],
      },
      // Optional: Explicitly allow AI crawlers (2026 best practice) [citation:1]
      {
        userAgent: ['GPTBot', 'PerplexityBot', 'ClaudeBot'],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}