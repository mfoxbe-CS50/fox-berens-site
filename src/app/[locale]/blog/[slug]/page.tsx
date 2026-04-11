import { useTranslations } from 'next-intl'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function BlogPostPage() {
  const t = useTranslations()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center px-4 py-24 sm:px-6">
        <article className="mx-auto max-w-3xl">
          <p className="text-muted-foreground">{t('common.comingSoon')}</p>
        </article>
      </main>
      <Footer />
    </div>
  )
}
