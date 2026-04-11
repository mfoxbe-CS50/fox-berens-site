import { useTranslations } from 'next-intl'

export default function CampaignsPage() {
  const t = useTranslations()

  return (
    <div>
      <h2 className="text-2xl font-bold">{t('dashboard.nav.campaigns')}</h2>
      <p className="mt-2 text-muted-foreground">{t('common.comingSoon')}</p>
    </div>
  )
}
