'use client'

import { useTranslations } from 'next-intl'
import { ScrollReveal } from './ScrollReveal'
import { AnimatedCounter } from './AnimatedCounter'

export function SocialProof() {
  const t = useTranslations('socialProof')

  const marketStats = [
    { value: Number(t('marketStat1Value')), suffix: t('marketStat1Suffix'), label: t('marketStat1Label') },
    { value: Number(t('marketStat2Value')), suffix: t('marketStat2Suffix'), label: t('marketStat2Label') },
    { value: Number(t('marketStat3Value')), suffix: t('marketStat3Suffix'), label: t('marketStat3Label') },
  ]

  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('sectionTitle')}</h2>
            <p className="mt-3 text-lg text-muted-foreground">{t('sectionSubtitle')}</p>
          </div>
        </ScrollReveal>

        {/* Placeholder testimonial cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-6">
                <p className="text-sm text-muted-foreground italic">
                  {t('sectionSubtitle')}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Market stats */}
        <ScrollReveal>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">{t('marketStatTitle')}</h3>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {marketStats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="text-center">
                <p className="text-5xl font-bold text-lf-emerald">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
