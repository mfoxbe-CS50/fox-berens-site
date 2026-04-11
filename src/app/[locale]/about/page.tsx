import { useTranslations } from 'next-intl'
import { Cpu, Eye, Target } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/landing/ScrollReveal'

const stackTools = [
  { name: 'Apollo.io', role: 'Scraping' },
  { name: 'Instantly.ai', role: 'Outreach' },
  { name: 'Claude AI', role: 'IA' },
  { name: 'n8n', role: 'Orchestration' },
  { name: 'HubSpot', role: 'CRM' },
  { name: 'Supabase', role: 'Database' },
  { name: 'Next.js', role: 'Frontend' },
  { name: 'Vercel', role: 'Hosting' },
]

export default function AboutPage() {
  const t = useTranslations('about')

  const philosophies = [
    { icon: Cpu, title: t('philosophy1Title'), desc: t('philosophy1Desc') },
    { icon: Eye, title: t('philosophy2Title'), desc: t('philosophy2Desc') },
    { icon: Target, title: t('philosophy3Title'), desc: t('philosophy3Desc') },
  ]

  const timeline = t.raw('timeline') as { year: string; title: string; desc: string }[]

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

        {/* Founder story */}
        <section className="px-4 pb-24 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold sm:text-3xl">{t('storyTitle')}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">{t('storyP1')}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{t('storyP2')}</p>
              <div className="mt-8 rounded-xl border border-border bg-card p-6">
                <p className="text-lg font-semibold">{t('founderName')}</p>
                <p className="text-sm text-muted-foreground">{t('founderRole')}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-lf-deep-navy px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-bold sm:text-3xl">{t('missionTitle')}</h2>
              <p className="mt-6 text-3xl font-bold bg-gradient-to-r from-lf-electric to-lf-emerald bg-clip-text text-transparent sm:text-4xl">
                &ldquo;{t('missionText')}&rdquo;
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">{t('missionDesc')}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Philosophy */}
        <section className="px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <h2 className="text-center text-2xl font-bold sm:text-3xl">{t('philosophyTitle')}</h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {philosophies.map((item, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-lf-electric/10">
                      <item.icon className="h-6 w-6 text-lf-electric" />
                    </div>
                    <h3 className="mt-4 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="bg-lf-deep-navy px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-2xl font-bold sm:text-3xl">{t('stackTitle')}</h2>
                <p className="mt-3 text-muted-foreground">{t('stackSubtitle')}</p>
              </div>
            </ScrollReveal>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stackTools.map((tool, i) => (
                <ScrollReveal key={tool.name} delay={i * 50}>
                  <div className="rounded-xl border border-border bg-card p-4 text-center">
                    <p className="font-semibold">{tool.name}</p>
                    <p className="text-xs text-muted-foreground">{tool.role}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-center text-2xl font-bold sm:text-3xl">{t('timelineTitle')}</h2>
            </ScrollReveal>
            <div className="relative mt-12">
              <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" />
              {timeline.map((entry, i) => (
                <ScrollReveal key={entry.year} delay={i * 100}>
                  <div className="relative mb-8 flex items-start gap-6 pl-12 sm:pl-0">
                    <div className="hidden sm:block sm:w-1/2 sm:pr-8 sm:text-right">
                      {i % 2 === 0 && (
                        <>
                          <p className="font-semibold">{entry.title}</p>
                          <p className="text-sm text-muted-foreground">{entry.desc}</p>
                        </>
                      )}
                    </div>
                    <div className="absolute left-2 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-lf-electric bg-background sm:relative sm:left-auto sm:top-auto sm:shrink-0">
                      <div className="h-2 w-2 rounded-full bg-lf-electric" />
                    </div>
                    <div className="sm:w-1/2 sm:pl-8">
                      <p className="text-xs font-bold text-lf-electric">{entry.year}</p>
                      <div className="sm:hidden">
                        <p className="font-semibold">{entry.title}</p>
                        <p className="text-sm text-muted-foreground">{entry.desc}</p>
                      </div>
                      {i % 2 !== 0 && (
                        <div className="hidden sm:block">
                          <p className="font-semibold">{entry.title}</p>
                          <p className="text-sm text-muted-foreground">{entry.desc}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
