'use client'

import { useTranslations } from 'next-intl'
import { TrendingDown, BarChart3, Users } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'
import { AnimatedCounter } from './AnimatedCounter'

export function ProblemSolution() {
  const t = useTranslations('problem')

  const pains = [
    { icon: TrendingDown, title: t('pain1Title'), desc: t('pain1Desc') },
    { icon: BarChart3, title: t('pain2Title'), desc: t('pain2Desc') },
    { icon: Users, title: t('pain3Title'), desc: t('pain3Desc') },
  ]

  const stats = [
    { value: Number(t('stat1Value')), suffix: t('stat1Suffix'), label: t('stat1Label') },
    { value: Number(t('stat2Value')), suffix: t('stat2Suffix'), label: t('stat2Label') },
    { value: Number(t('stat3Value')), suffix: t('stat3Suffix'), label: t('stat3Label') },
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

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pains.map((pain, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lf-coral/10">
                  <pain.icon className="h-5 w-5 text-lf-coral" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{pain.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pain.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">{t('solutionTitle')}</h3>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="rounded-xl border border-lf-electric/20 bg-lf-electric/5 p-8 text-center">
                <p className="text-5xl font-bold text-lf-electric">
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
