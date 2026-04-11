'use client'

import { usePathname } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n/config'

export function LocaleSwitcher() {
  const pathname = usePathname()

  const currentLocale = pathname.split('/')[1] as Locale
  const restOfPath = pathname.split('/').slice(2).join('/')

  return (
    <div className="flex items-center gap-1 rounded-md border border-border p-1">
      {locales.map((locale) => (
        <a
          key={locale}
          href={`/${locale}/${restOfPath}`}
          className={`rounded px-2 py-1 text-xs font-medium uppercase transition-colors ${
            locale === currentLocale
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {locale}
        </a>
      ))}
    </div>
  )
}
