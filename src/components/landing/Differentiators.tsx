'use client'

import { useTranslations } from 'next-intl'
import { Globe, Shield, Eye, Cpu } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

export function Differentiators() {
  const t = useTranslations('differentiators')

  const items = [
    { icon: Globe, title: t('diff1Title'), desc: t('diff1Desc') },
    { icon: Shield, title: t('diff2Title'), desc: t('diff2Desc') },
    { icon: Eye, title: t('diff3Title'), desc: t('diff3Desc') },
    { icon: Cpu, title: t('diff4Title'), desc: t('diff4Desc') },
  ]

  return (
    <section className="bg-lf-deep-navy px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('sectionTitle')}</h2>
            <p className="mt-3 text-lg text-muted-foreground">{t('sectionSubtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-lf-electric/10 to-lf-emerald/10">
                  <item.icon className="h-6 w-6 text-lf-electric" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
