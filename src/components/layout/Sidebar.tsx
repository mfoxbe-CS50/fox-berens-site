'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const t = useTranslations('dashboard.nav')
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'fr'
  const basePath = `/${locale}/dashboard`

  const navItems = [
    { href: basePath, label: t('home'), icon: 'home' },
    { href: `${basePath}/leads`, label: t('leads'), icon: 'users' },
    { href: `${basePath}/campaigns`, label: t('campaigns'), icon: 'send' },
    { href: `${basePath}/analytics`, label: t('analytics'), icon: 'chart' },
    { href: `${basePath}/settings`, label: t('settings'), icon: 'settings' },
  ]

  return (
    <aside className="hidden w-64 border-r border-border bg-sidebar-background md:block">
      <div className="flex h-16 items-center border-b border-border px-6">
        <a href={`/${locale}`} className="text-lg font-bold text-foreground">
          LeadForge<span className="text-primary">AI</span>
        </a>
      </div>
      <nav className="flex flex-col gap-1 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              )}
            >
              {item.label}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}
