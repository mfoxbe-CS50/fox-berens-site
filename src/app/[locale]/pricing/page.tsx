'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Check } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollReveal } from '@/components/landing/ScrollReveal'

export default function PricingPage() {
  const t = useTranslations('pricing')
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'

  const tiers = ['tier1', 'tier2', 'tier3', 'tier4'] as const

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'] as const

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 py-24 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t('pageTitle')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('pageSubtitle')}
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="px-4 pb-24 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {tiers.map((tier, i) => {
                const isPopular = tier === 'tier2'
                return (
                  <ScrollReveal key={tier} delay={i * 100}>
                    <div
                      className={`relative flex h-full flex-col rounded-xl border p-6 ${
                        isPopular
                          ? 'border-lf-electric bg-lf-electric/5'
                          : 'border-border bg-card'
                      }`}
                    >
                      {isPopular && (
                        <Badge className="absolute -top-2.5 right-4">{t('popular')}</Badge>
                      )}
                      <h3 className="text-lg font-semibold">{t(`${tier}.name`)}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{t(`${tier}.desc`)}</p>
                      <div className="mt-4">
                        <span className="text-3xl font-bold">{t(`${tier}.price`)}</span>
                        {t(`${tier}.priceTo`) && (
                          <span className="text-lg text-muted-foreground">
                            {' '}- {t(`${tier}.priceTo`)}
                          </span>
                        )}
                        <span className="ml-1 text-sm text-muted-foreground">
                          {t(`${tier}.unit`)}
                        </span>
                      </div>

                      <ul className="mt-6 flex-1 space-y-3">
                        {(t.raw(`${tier}.features`) as string[]).map(
                          (feature: string, j: number) => (
                            <li key={j} className="flex items-start gap-2 text-sm">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-lf-emerald" />
                              <span>{feature}</span>
                            </li>
                          ),
                        )}
                      </ul>

                      <Button
                        variant={isPopular ? 'default' : 'outline'}
                        className="mt-6"
                        asChild
                      >
                        <a href={`/${locale}/contact`}>
                          {isPopular ? t('getStarted') : t('contactUs')}
                        </a>
                      </Button>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-lf-deep-navy px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                {t('faq.title')}
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <Accordion type="single" collapsible className="mt-12">
                {faqKeys.map((key) => (
                  <AccordionItem key={key} value={key}>
                    <AccordionTrigger className="text-left text-base">
                      {t(`faq.${key}`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {t(`faq.${key.replace('q', 'a')}`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative overflow-hidden px-4 py-24 sm:px-6">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-lf-electric/10 via-transparent to-lf-emerald/10" />
          <ScrollReveal>
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('ctaTitle')}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{t('ctaSubtitle')}</p>
              <Button size="lg" asChild className="mt-8 text-base">
                <a href={`/${locale}/contact`}>{t('ctaCta')}</a>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  )
}
