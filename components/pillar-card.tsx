import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PillarCardProps {
  icon: LucideIcon
  title: string
  body: string | string[]
  className?: string
}

export function PillarCard({ icon: Icon, title, body, className }: PillarCardProps) {
  const bodyContent = Array.isArray(body) ? body : [body]
  const isMultiLine = Array.isArray(body)

  return (
    <div className={cn(
      "relative rounded-2xl border border-border bg-card p-6 lg:p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/30",
      className
    )}>
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
        <Icon className="h-8 w-8" />
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-4">
        {title}
      </h3>
      
      {isMultiLine ? (
        <ul className="space-y-2 text-muted-foreground leading-relaxed">
          {bodyContent.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground leading-relaxed">
          {bodyContent[0]}
        </p>
      )}
    </div>
  )
}
