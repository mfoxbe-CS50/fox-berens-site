'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { MapPin, Clock, CalendarDays } from 'lucide-react'
import { toast } from 'sonner'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollReveal } from '@/components/landing/ScrollReveal'

export default function ContactPage() {
  const t = useTranslations('contact')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_CONTACT
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
      } else {
        // Fallback to internal API
        await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
      }
      toast.success(t('formSuccess'))
      form.reset()
    } catch {
      toast.error(t('formError'))
    } finally {
      setSubmitting(false)
    }
  }

  const serviceOptions = t.raw('formServiceOptions') as Record<string, string>

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t('pageTitle')}</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                {t('pageSubtitle')}
              </p>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-5">
              {/* Contact form */}
              <ScrollReveal className="lg:col-span-3">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 rounded-xl border border-border bg-card p-6 sm:p-8"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">{t('formName')}</Label>
                      <Input id="name" name="name" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="email">{t('formEmail')}</Label>
                      <Input id="email" name="email" type="email" required className="mt-2" />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="company">{t('formCompany')}</Label>
                      <Input id="company" name="company" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="service">{t('formService')}</Label>
                      <select
                        id="service"
                        name="service"
                        className="mt-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        {Object.entries(serviceOptions).map(([key, label]) => (
                          <option key={key} value={key} className="bg-card">
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">{t('formMessage')}</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-2 flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={submitting} className="w-full">
                    {submitting ? t('formSubmitting') : t('formSubmit')}
                  </Button>
                </form>
              </ScrollReveal>

              {/* Sidebar info */}
              <ScrollReveal delay={200} className="lg:col-span-2">
                <div className="space-y-8">
                  <div className="rounded-xl border border-border bg-card p-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-lf-electric" />
                      <h3 className="font-semibold">{t('locationTitle')}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{t('locationText')}</p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-lf-emerald" />
                      <h3 className="font-semibold">{t('responseTime')}</h3>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6">
                    <div className="flex items-center gap-3">
                      <CalendarDays className="h-5 w-5 text-lf-amber" />
                      <h3 className="font-semibold">{t('bookingTitle')}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{t('bookingDesc')}</p>
                    <Button variant="outline" size="sm" className="mt-4" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        {t('bookingTitle')}
                      </a>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
