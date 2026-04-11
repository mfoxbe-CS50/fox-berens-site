'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

export function Footer() {
  const t = useTranslations('footer')
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    try {
      const webhookBase = process.env.NEXT_PUBLIC_N8N_WEBHOOK_BASE_URL
      if (webhookBase) {
        await fetch(`${webhookBase}/newsletter`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })
      }
      setSubscribed(true)
      setEmail('')
    } catch {
      setSubscribed(true)
    }
  }

  return (
    <footer className="border-t border-border bg-lf-deep-navy">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + newsletter */}
          <div className="lg:col-span-2">
            <p className="text-xl font-bold text-foreground">
              LeadForge<span className="bg-gradient-to-r from-lf-electric to-lf-emerald bg-clip-text text-transparent">AI</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{t('description')}</p>

            <div className="mt-6">
              <p className="text-sm font-medium text-foreground">{t('newsletter')}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t('newsletterDesc')}</p>
              {subscribed ? (
                <p className="mt-3 text-sm text-lf-emerald">{t('newsletterSuccess')}</p>
              ) : (
                <form onSubmit={handleNewsletter} className="mt-3 flex gap-2">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('newsletterPlaceholder')}
                    className="h-9 max-w-[240px]"
                    required
                  />
                  <Button type="submit" size="sm">
                    {t('newsletterCta')}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t('company')}</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href={`/${locale}/about`} className="hover:text-foreground">{t('companyLinks.about')}</a></li>
              <li><a href={`/${locale}/blog`} className="hover:text-foreground">{t('companyLinks.blog')}</a></li>
              <li><a href={`/${locale}/contact`} className="hover:text-foreground">{t('companyLinks.contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t('servicesTitle')}</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href={`/${locale}/pricing`} className="hover:text-foreground">{t('servicesLinks.audit')}</a></li>
              <li><a href={`/${locale}/pricing`} className="hover:text-foreground">{t('servicesLinks.leads')}</a></li>
              <li><a href={`/${locale}/pricing`} className="hover:text-foreground">{t('servicesLinks.chatbot')}</a></li>
              <li><a href={`/${locale}/pricing`} className="hover:text-foreground">{t('servicesLinks.performance')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t('legal')}</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">{t('legalLinks.privacy')}</a></li>
              <li><a href="#" className="hover:text-foreground">{t('legalLinks.terms')}</a></li>
              <li><a href="#" className="hover:text-foreground">{t('legalLinks.mentions')}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LeadForge AI. {t('copyright')}
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3" />
            {t('madeWith')}
          </div>
        </div>
      </div>
    </footer>
  )
}
