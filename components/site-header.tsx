"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { siteContent } from '@/content/site'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const navItems = [
  { label: siteContent.nav.home, href: '/' },
  { label: siteContent.nav.about, href: '/about' },
  { label: siteContent.nav.services, href: '/services' },
  { label: siteContent.nav.contact, href: '/contact' },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main navigation */}
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo — separate light/dark variants because the bilingual lockup has
                navy text that disappears against the dark header background */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/logo.png"
                alt="ملائمة لخدمات الأعمال"
                width={200}
                height={159}
                className="h-14 lg:h-16 w-auto block dark:hidden"
                priority
              />
              <Image
                src="/logo-dark.png"
                alt=""
                aria-hidden
                width={200}
                height={159}
                className="h-14 lg:h-16 w-auto hidden dark:block"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="التنقل الرئيسي">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-2",
                    pathname === item.href
                      ? "text-primary after:absolute after:bottom-0 after:start-0 after:end-0 after:h-0.5 after:bg-accent"
                      : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button asChild className="hidden sm:inline-flex">
                <Link href="/contact">{siteContent.nav.cta}</Link>
              </Button>
              
              {/* Mobile menu button */}
              <button
                type="button"
                className="lg:hidden p-2 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2" aria-label="التنقل للجوال">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2 sm:hidden">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  {siteContent.nav.cta}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
