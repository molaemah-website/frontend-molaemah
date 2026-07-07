import { cn } from '@/lib/utils'
import { BrandArc } from '@/components/brand-arc'

interface ServiceCardProps {
  title: string
  items: string[]
  featured?: boolean
  className?: string
}

export function ServiceCard({ title, items, featured = false, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-card p-6 lg:p-8 transition-all duration-300 hover:shadow-lg",
        featured 
          ? "border-accent bg-gradient-to-br from-card to-accent/5 ring-2 ring-accent/20" 
          : "border-border hover:border-primary/30",
        className
      )}
    >
      {featured && (
        <div className="absolute top-0 start-0 end-0 h-1 bg-accent rounded-t-2xl" />
      )}
      
      <h3 className={cn(
        "text-xl font-bold mb-4 leading-relaxed",
        featured ? "text-primary" : "text-foreground"
      )}>
        {title}
      </h3>
      
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-muted-foreground">
            <BrandArc variant="small" className="mt-1.5 shrink-0" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
