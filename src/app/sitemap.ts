import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n/config'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://leadforge.ai'

const pages = ['', '/pricing', '/about', '/blog', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '/blog' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      })
    }
  }

  return entries
}
