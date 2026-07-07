import { BrandArc } from '@/components/brand-arc'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
        {title}
      </h2>
      <BrandArc variant="medium" className={cn("mt-3 mb-4", centered && "mx-auto")} />
      {subtitle && (
        <p className="text-muted-foreground text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
