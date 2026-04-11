import { useTranslations } from 'next-intl'

export default function AnalyticsPage() {
  const t = useTranslations()

  return (
    <div>
      <h2 className="text-2xl font-bold">{t('dashboard.nav.analytics')}</h2>
      <p className="mt-2 text-muted-foreground">{t('common.comingSoon')}</p>
    </div>
  )
}
