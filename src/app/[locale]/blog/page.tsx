import { useTranslations } from 'next-intl'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/landing/ScrollReveal'

export default function BlogPage() {
  const t = useTranslations()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t('nav.blog')}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{t('common.comingSoon')}</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-6">
                <div className="h-4 w-3/4 rounded bg-muted/30" />
                <div className="mt-3 h-3 w-1/2 rounded bg-muted/20" />
                <div className="mt-6 h-3 w-full rounded bg-muted/10" />
                <div className="mt-2 h-3 w-full rounded bg-muted/10" />
                <div className="mt-2 h-3 w-2/3 rounded bg-muted/10" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
