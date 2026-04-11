export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  cover_image?: string
  author: string
  published_at: string
  tags: string[]
  locale: 'fr' | 'en'
}

export interface BlogPostContent extends BlogPost {
  content: string
}
