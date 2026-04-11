'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Search, Zap, MessageSquare, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollReveal } from './ScrollReveal'

export function ServicesOverview() {
  const t = useTranslations('services')
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'

  const tiers = [
    {
      icon: Search,
      title: t('tier1Title'),
      desc: t('tier1Desc'),
      price: t('tier1Price'),
      cta: t('tier1Cta'),
      badge: null,
    },
    {
      icon: Zap,
      title: t('tier2Title'),
      desc: t('tier2Desc'),
      price: t('tier2Price'),
      cta: t('tier2Cta'),
      badge: t('tier2Badge'),
    },
    {
      icon: MessageSquare,
      title: t('tier3Title'),
      desc: t('tier3Desc'),
      price: t('tier3Price'),
      cta: t('tier3Cta'),
      badge: null,
    },
    {
      icon: Target,
      title: t('tier4Title'),
      desc: t('tier4Desc'),
      price: t('tier4Price'),
      cta: t('tier4Cta'),
      badge: null,
    },
  ]

  return (
    <section id="services" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('sectionTitle')}</h2>
            <p className="mt-3 text-lg text-muted-foreground">{t('sectionSubtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-lf-electric/50">
                {tier.badge && (
                  <Badge className="absolute -top-2.5 right-4">{tier.badge}</Badge>
                )}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lf-electric/10">
                  <tier.icon className="h-5 w-5 text-lf-electric" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{tier.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{tier.desc}</p>
                <p className="mt-4 text-sm font-semibold text-lf-electric">{tier.price}</p>
                <Button variant="outline" size="sm" asChild className="mt-4">
                  <a href={`/${locale}/pricing`}>{tier.cta}</a>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
