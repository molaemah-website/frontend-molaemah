import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Linkedin, Twitter, Facebook } from 'lucide-react'
import { siteContent } from '@/content/site'

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'لينكدإن' },
  { icon: Twitter, href: '#', label: 'تويتر' },
  { icon: Facebook, href: '#', label: 'فيسبوك' },
]

// Current year in Arabic-Indic digits (٠-٩) to match the site's numerals.
const currentYear = String(new Date().getFullYear()).replace(
  /\d/g,
  (d) => '٠١٢٣٤٥٦٧٨٩'[Number(d)]
)

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="ملائمة لخدمات الأعمال"
                width={200}
                height={159}
                className="h-16 w-auto bg-white rounded-lg p-2"
              />
            </Link>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              {siteContent.brand.footerTagline}
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
              {siteContent.footer.addressHeading}
            </h3>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              {siteContent.contact.addressFull}
            </p>
          </div>

          {/* Phone */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
              {siteContent.footer.phoneHeading}
            </h3>
            <a 
              href={`tel:${siteContent.contact.phoneClean}`}
              className="text-primary-foreground/90 text-sm hover:text-accent transition-colors"
              dir="ltr"
            >
              {siteContent.contact.phone}
            </a>
          </div>

          {/* Working hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
              {siteContent.footer.hoursHeading}
            </h3>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              {siteContent.contact.workingHours}
            </p>
          </div>
        </div>

        {/* Social links and copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-primary-foreground/80 text-sm">
              {siteContent.brand.copyright} {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
