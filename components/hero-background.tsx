export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Navy background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#0E2E5C] via-[#103D77] to-[#0E2E5C]" />
      
      {/* Orange arc sweep on the right side */}
      <svg
        className="absolute -start-1/4 top-0 h-full w-3/4 opacity-20"
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 600 Q 200 300, -100 0"
          stroke="#F0A040"
          strokeWidth="120"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      
      {/* Large decorative arc */}
      <svg
        className="absolute -end-20 -top-20 w-96 h-96 text-[#F0A040] opacity-30"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 180 Q 100 20, 180 180"
          stroke="currentColor"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      
      {/* Small decorative dots/stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Bottom orange gradient overlay */}
      <div className="absolute bottom-0 start-0 end-0 h-32 bg-gradient-to-t from-[#F0A040]/10 to-transparent" />
    </div>
  )
}
