import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic, Tajawal } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import './globals.css'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
})

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ملائمة لخدمات الأعمال',
    template: '%s | ملائمة',
  },
  description: 'نهتم بإدارة وتشغيل الموارد البشرية للمنشآت الصغيرة والمتوسطة والعمل على المنصات الحكومية وتأسيس الأعمال لرواد الأعمال وتقديم الاستشارات الإدارية',
  keywords: ['ملائمة', 'خدمات الأعمال', 'الموارد البشرية', 'المنصات الحكومية', 'مدد', 'قوى', 'هدف', 'القصيم', 'بريدة'],
  authors: [{ name: 'ملائمة لخدمات الأعمال' }],
  creator: 'ملائمة',
  openGraph: {
    title: 'ملائمة لخدمات الأعمال',
    description: 'ضمان امتثال منشأتك - نهتم بإدارة وتشغيل الموارد البشرية للمنشآت الصغيرة والمتوسطة',
    locale: 'ar_SA',
    type: 'website',
    siteName: 'ملائمة',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ملائمة لخدمات الأعمال',
    description: 'ضمان امتثال منشأتك',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background" suppressHydrationWarning>
      <body className={`${ibmPlexArabic.variable} ${tajawal.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground"
          >
            تخطي إلى المحتوى
          </a>
          {children}
          <Toaster 
            position="top-center" 
            dir="rtl" 
            richColors 
            closeButton
          />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
