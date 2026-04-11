import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <html className="dark">
      <body className="flex min-h-screen items-center justify-center bg-background font-sans text-foreground">
        <div className="text-center px-4">
          <p className="text-8xl font-bold bg-gradient-to-r from-lf-electric to-lf-emerald bg-clip-text text-transparent">
            {t('title')}
          </p>
          <h1 className="mt-4 text-2xl font-bold">{t('heading')}</h1>
          <p className="mt-2 text-muted-foreground">{t('description')}</p>
          <Button asChild className="mt-8">
            <Link href="/">{t('cta')}</Link>
          </Button>
        </div>
      </body>
    </html>
  )
}
