import { useTranslations } from 'next-intl'
import { Sidebar } from '@/components/layout/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations('dashboard')

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        <h1 className="sr-only">{t('title')}</h1>
        {children}
      </main>
    </div>
  )
}
