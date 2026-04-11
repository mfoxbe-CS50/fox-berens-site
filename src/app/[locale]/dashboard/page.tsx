import { useTranslations } from 'next-intl'

export default function DashboardPage() {
  const t = useTranslations('dashboard')

  return (
    <div>
      <h2 className="text-2xl font-bold">{t('welcome')}</h2>
      <p className="mt-2 text-muted-foreground">{t('title')}</p>
    </div>
  )
}
