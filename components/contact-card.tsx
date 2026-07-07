import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ContactCardProps {
  icon: LucideIcon
  label: string
  value: string
  href?: string
  className?: string
}

export function ContactCard({ icon: Icon, label, value, href, className }: ContactCardProps) {
  const content = (
    <>
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-semibold text-foreground mb-2">{label}</h3>
      <p className="text-muted-foreground" dir={label === 'الهاتف' || label === 'واتساب' ? 'ltr' : undefined}>
        {value}
      </p>
    </>
  )

  const cardClasses = cn(
    "flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30",
    href && "cursor-pointer",
    className
  )

  if (href) {
    return (
      <a href={href} className={cardClasses} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    )
  }

  return <div className={cardClasses}>{content}</div>
}
