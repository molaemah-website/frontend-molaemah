import type { Metadata } from 'next'
import { Eye, Bookmark, Handshake, CheckCircle2 } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFab } from '@/components/whatsapp-fab'
import { SectionHeading } from '@/components/section-heading'
import { PillarCard } from '@/components/pillar-card'
import { siteContent } from '@/content/site'

export const metadata: Metadata = {
  title: 'من نحن',
  description: 'تتخصص ملائمة في العمل مع جهات القطاع الخاص في مجال خدمات الدعم والمساندة المرتبطة بأعمال المنصات والنظم الحكومية',
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      
      <main id="main-content">
        {/* Page Header */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground">
              {siteContent.about.pageTitle}
            </h1>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading 
              title={siteContent.about.sectionTitle}
            />
            
            <div className="max-w-4xl mx-auto mt-12">
              <ul className="space-y-6">
                {siteContent.about.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <PillarCard
                icon={Eye}
                title={siteContent.about.pillars.vision.title}
                body={siteContent.about.pillars.vision.body}
              />
              <PillarCard
                icon={Bookmark}
                title={siteContent.about.pillars.mission.title}
                body={siteContent.about.pillars.mission.body}
              />
              <PillarCard
                icon={Handshake}
                title={siteContent.about.pillars.values.title}
                body={siteContent.about.pillars.values.items}
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
