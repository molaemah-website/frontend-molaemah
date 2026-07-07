import type { Metadata } from 'next'
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  ShieldCheck,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFab } from '@/components/whatsapp-fab'
import { SectionHeading } from '@/components/section-heading'
import { ContactForm } from '@/components/contact-form'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { siteContent } from '@/content/site'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'اتصل بنا',
  description: 'تواصل مع فريق ملائمة لخدمات الأعمال - القصيم، بريدة، حي الريان',
}

// Channel buttons in the hero — each is a primary route into a conversation,
// styled in its own brand-recognized color so users pick instantly.
const channels = [
  {
    href: `tel:${siteContent.contact.phoneClean}`,
    label: siteContent.contactPage.channels.call,
    sub: siteContent.contact.phone,
    icon: Phone,
    className:
      'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/50',
  },
  {
    href: `https://wa.me/${siteContent.contact.phoneClean}?text=${encodeURIComponent(
      siteContent.contact.whatsappGreeting,
    )}`,
    label: siteContent.contactPage.channels.whatsapp,
    sub: siteContent.contact.phone,
    icon: MessageCircle,
    external: true,
    className:
      'bg-[#25D366] text-white hover:bg-[#20BA5C] focus-visible:ring-[#25D366]/50',
  },
  {
    href: `mailto:${siteContent.contact.email}`,
    label: siteContent.contactPage.channels.email,
    sub: siteContent.contact.email,
    icon: Mail,
    className:
      'bg-accent text-accent-foreground hover:bg-[#F5B560] focus-visible:ring-accent/50',
  },
]

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'لينكدإن' },
  { icon: Twitter, href: '#', label: 'تويتر' },
  { icon: Facebook, href: '#', label: 'فيسبوك' },
]

// Google Maps embed — no API key needed for the basic embed URL.
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  siteContent.contact.addressFull,
)}&hl=ar&z=15&output=embed`

export default function ContactPage() {
  const { contactPage, contact } = siteContent

  return (
    <>
      <SiteHeader />

      <main id="main-content">
        {/* Hero — intent + three primary channels */}
        <section className="bg-gradient-to-b from-muted/40 to-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <SectionHeading title={contactPage.intent} subtitle={contactPage.intentBody} />

            <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {channels.map((c) => {
                const Icon = c.icon
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className={cn(
                      'group flex flex-col items-center justify-center gap-2 rounded-2xl px-6 py-5 font-semibold shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4',
                      c.className,
                    )}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    <span className="text-base">{c.label}</span>
                    <span
                      className="text-xs opacity-80 font-normal"
                      dir={c.sub.startsWith('+') ? 'ltr' : undefined}
                    >
                      {c.sub}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Main: form (start) + sidebar (end) */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Form panel — spans 3/5 on desktop so it's clearly the page's anchor */}
              <div className="lg:col-span-3">
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-10 shadow-lg">
                  <div className="mb-8">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                      {contactPage.formHeading}
                    </h2>
                    <p className="text-primary-foreground/80 text-sm lg:text-base">
                      {contactPage.formIntro}
                    </p>
                  </div>

                  <ContactForm />

                  <p className="mt-6 flex items-center gap-2 text-xs text-primary-foreground/70">
                    <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{contactPage.privacyNote}</span>
                  </p>
                </div>
              </div>

              {/* Sidebar — hours, location + map, social. Spans 2/5 on desktop. */}
              <aside className="lg:col-span-2 space-y-6">
                {/* Hours */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold text-foreground">
                      {contactPage.sidebar.hoursTitle}
                    </h3>
                  </div>
                  <p className="text-foreground font-medium">
                    {contactPage.sidebar.hoursDays}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {contactPage.sidebar.hoursTime}{' '}
                    <span className="opacity-70">
                      {contactPage.sidebar.hoursTimezone}
                    </span>
                  </p>
                </div>

                {/* Address + map */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold text-foreground">
                      {contactPage.sidebar.addressTitle}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {contact.addressFull}
                  </p>
                  <div className="overflow-hidden rounded-xl border border-border aspect-[4/3] bg-muted">
                    <iframe
                      src={mapEmbedUrl}
                      title="موقع ملائمة على الخريطة"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full border-0"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Social */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    {contactPage.sidebar.socialTitle}
                  </h3>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                          aria-label={social.label}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionHeading
              title={contactPage.faq.title}
              subtitle={contactPage.faq.subtitle}
            />

            <div className="max-w-3xl mx-auto mt-10">
              <Accordion type="single" collapsible className="w-full">
                {contactPage.faq.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="rounded-xl border border-border bg-card mb-3 px-5 last:mb-0"
                  >
                    <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
