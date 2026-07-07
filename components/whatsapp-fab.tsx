"use client"

import { MessageCircle } from 'lucide-react'
import { siteContent } from '@/content/site'

export function WhatsAppFab() {
  const whatsappUrl = `https://wa.me/${siteContent.contact.phoneClean}?text=${encodeURIComponent(siteContent.contact.whatsappGreeting)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 start-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BA5C] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
