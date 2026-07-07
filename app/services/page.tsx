import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFab } from '@/components/whatsapp-fab'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/service-card'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/content/site'

export const metadata: Metadata = {
  title: 'خدماتنا',
  description: 'نقدم خدمات تأسيس الأعمال وإدارة الموارد البشرية والمنصات الحكومية والاستشارات الإدارية',
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      
      <main id="main-content">
        {/* Page Header */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground">
              {siteContent.services.pageTitle}
            </h1>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading 
              title={siteContent.services.pageTitle}
              subtitle={siteContent.services.subtitle}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
              {siteContent.services.cards.map((card, index) => (
                <ServiceCard
                  key={index}
                  title={card.title}
                  items={card.items}
                  featured={card.featured}
                  className={card.featured ? "lg:row-span-2" : ""}
                />
              ))}
            </div>
            
            {/* CTA */}
            <div className="text-center mt-16 p-8 lg:p-12 rounded-2xl bg-muted/50 border border-border">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                هل تحتاج إلى استشارة؟
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                تواصل معنا اليوم للحصول على استشارة مجانية حول كيفية مساعدتك في إدارة منشأتك
              </p>
              <Button asChild size="lg">
                <Link href="/contact">{siteContent.nav.cta}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
