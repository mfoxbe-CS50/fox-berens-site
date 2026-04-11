import { useTranslations } from 'next-intl'

export default function LeadsPage() {
  const t = useTranslations()

  return (
    <div>
      <h2 className="text-2xl font-bold">{t('dashboard.nav.leads')}</h2>
      <p className="mt-2 text-muted-foreground">{t('common.comingSoon')}</p>
    </div>
  )
}
