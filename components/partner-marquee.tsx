"use client"

import { useEffect, useState } from 'react'

interface Partner {
  name: string
  logo: string
}

// Real partners pulled from the live molaemah.com WordPress site.
// Each /partners/partner-N.webp has been normalized to 400×400 (white-padded
// for the originally non-square logos) so they all render at a single, uniform
// visual size in the marquee.
const partners: Partner[] = [
  { name: 'شركة خلده للتجارة والمقاولات', logo: '/partners/partner-1.webp' },
  { name: 'باش', logo: '/partners/partner-2.webp' },
  { name: 'جذب', logo: '/partners/partner-3.webp' },
  { name: 'اتحاد الحرفيون الخليجي للصناعات المعدنية', logo: '/partners/partner-4.webp' },
  { name: 'Jomo Café', logo: '/partners/partner-5.webp' },
  { name: 'CRVED Cafe', logo: '/partners/partner-6.webp' },
  { name: 'ارفع', logo: '/partners/partner-7.webp' },
]

export function PartnerMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsPaused(true)
    }
  }, [])

  return (
    // Force LTR layout inside the marquee. The host site is RTL, but in an
    // RTL flex+block context the `w-max` track's right edge aligns to the
    // parent's right edge — translateX(-50%) then drags both groups off-screen
    // left instead of swapping them in place. Logos are images (no inherent
    // direction) so this island doesn't visually conflict with the RTL page.
    <div
      dir="ltr"
      className="relative overflow-hidden py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Track = two identical groups side by side. Each group carries its own
          internal gap (gap-8) plus a trailing pe-8 so the cadence continues
          across the boundary. Parent width is exactly 2 × group width, so
          translateX(-50%) lands group 2's first tile precisely where group 1's
          first tile was at frame 0 — provably seamless loop, no calc/var math. */}
      <div
        className="flex w-max animate-marquee"
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {[0, 1].map((groupIdx) => (
          <ul
            key={groupIdx}
            className="flex shrink-0 list-none p-0 m-0 gap-8 pe-8"
            aria-hidden={groupIdx === 1 || undefined}
          >
            {partners.map((partner, i) => (
              <li
                key={i}
                className="group flex shrink-0 items-center justify-center w-44 h-44 sm:w-56 sm:h-56 rounded-2xl bg-white border border-border shadow-sm transition-shadow duration-300 hover:shadow-md"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={groupIdx === 0 ? partner.name : ''}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain p-3 sm:p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Edge fade — logos appear/disappear softly instead of clipping */}
      <div className="pointer-events-none absolute inset-y-0 start-0 w-20 bg-gradient-to-l from-transparent to-background" />
      <div className="pointer-events-none absolute inset-y-0 end-0 w-20 bg-gradient-to-r from-transparent to-background" />

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}
