'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from './ScrollReveal'

export function CtaFinal() {
  const t = useTranslations('ctaFinal')
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-lf-electric/10 via-transparent to-lf-emerald/10" />

      <ScrollReveal>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t('subtitle')}</p>
          <Button size="lg" asChild className="mt-8 text-base">
            <a href={`/${locale}/contact`}>{t('cta')}</a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">{t('note')}</p>
        </div>
      </ScrollReveal>
    </section>
  )
}
