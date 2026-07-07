import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFab } from '@/components/whatsapp-fab'
import { HeroBackground } from '@/components/hero-background'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/service-card'
import { PartnerMarquee } from '@/components/partner-marquee'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/content/site'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <HeroBackground />
          
          <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
            <div className="max-w-3xl">
              {/* Strapline pill */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="px-4 py-2 rounded-full bg-[#F0A040] text-[#0E2E5C] font-semibold text-sm">
                  {siteContent.brand.heroStrapline1}
                </span>
              </div>
              
              {/* Main headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {siteContent.brand.heroStrapline2}
              </h1>
              
              {/* Body text */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                {siteContent.home.heroBody}
              </p>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-[#F0A040] hover:bg-[#F5B560] text-[#0E2E5C] font-semibold px-8"
                >
                  <Link href="/services">{siteContent.home.primaryCta}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="border border-white text-white hover:bg-white/10 hover:text-white dark:hover:bg-white/10 font-semibold px-8"
                >
                  <Link href="/contact">{siteContent.home.secondaryCta}</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom curve transition */}
          <div className="absolute bottom-0 start-0 end-0">
            <svg
              viewBox="0 0 1440 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto text-background"
              preserveAspectRatio="none"
            >
              <path
                d="M0 60V30C240 10 480 0 720 0C960 0 1200 10 1440 30V60H0Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading 
              title={siteContent.home.servicesTitle}
              subtitle={siteContent.home.servicesSubtitle}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
              {siteContent.services.cards.map((card, index) => (
                <ServiceCard
                  key={index}
                  title={card.title}
                  items={card.items}
                  featured={card.featured}
                  className={card.featured ? "md:col-span-2 lg:col-span-1" : ""}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/services">عرض جميع الخدمات</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionHeading 
              title={siteContent.home.partnersTitle}
            />
            
            <div className="mt-12">
              <PartnerMarquee />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
