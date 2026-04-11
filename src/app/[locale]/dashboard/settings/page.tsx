import { useTranslations } from 'next-intl'

export default function SettingsPage() {
  const t = useTranslations()

  return (
    <div>
      <h2 className="text-2xl font-bold">{t('dashboard.nav.settings')}</h2>
      <p className="mt-2 text-muted-foreground">{t('common.comingSoon')}</p>
    </div>
  )
}
