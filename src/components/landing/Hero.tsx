'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function Hero() {
  const t = useTranslations('hero')
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-24 text-center sm:px-6 md:py-36">
      {/* Animated gradient orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-br from-lf-electric/20 to-lf-emerald/20 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute right-1/4 top-1/4">
        <div className="h-[300px] w-[300px] animate-pulse rounded-full bg-lf-electric/10 blur-[100px]" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      </div>

      <div className="relative z-10">
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {t('title')}
          <br />
          <span className="bg-gradient-to-r from-lf-electric to-lf-emerald bg-clip-text text-transparent">
            {t('titleHighlight')}
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {t('subtitle')}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" asChild className="text-base">
            <a href={`/${locale}/contact`}>{t('cta')}</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base">
            <a href={`/${locale}/pricing`}>{t('ctaSecondary')}</a>
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          {t('socialProof', { count: 50 })}
        </p>
      </div>
    </section>
  )
}
