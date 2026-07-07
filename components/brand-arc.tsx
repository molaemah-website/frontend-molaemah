interface BrandArcProps {
  className?: string
  variant?: 'small' | 'medium' | 'large' | 'hero'
}

export function BrandArc({ className = '', variant = 'medium' }: BrandArcProps) {
  const sizes = {
    small: { width: 24, height: 12 },
    medium: { width: 48, height: 24 },
    large: { width: 80, height: 40 },
    hero: { width: 200, height: 100 },
  }

  const { width, height } = sizes[variant]

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 45 Q 50 -10, 95 45"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        className="text-accent"
      />
    </svg>
  )
}
