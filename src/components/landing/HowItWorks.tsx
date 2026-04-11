'use client'

import { useTranslations } from 'next-intl'
import { Search, Database, Pen, Send, CheckCircle, BarChart3 } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

export function HowItWorks() {
  const t = useTranslations('howItWorks')

  const steps = [
    { icon: Search, title: t('step1Title'), desc: t('step1Desc') },
    { icon: Database, title: t('step2Title'), desc: t('step2Desc') },
    { icon: Pen, title: t('step3Title'), desc: t('step3Desc') },
    { icon: Send, title: t('step4Title'), desc: t('step4Desc') },
    { icon: CheckCircle, title: t('step5Title'), desc: t('step5Desc') },
    { icon: BarChart3, title: t('step6Title'), desc: t('step6Desc') },
  ]

  return (
    <section className="bg-lf-deep-navy px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('sectionTitle')}</h2>
            <p className="mt-3 text-lg text-muted-foreground">{t('sectionSubtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="relative rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lf-electric to-lf-emerald text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <step.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
