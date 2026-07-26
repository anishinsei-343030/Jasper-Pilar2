'use client'

export function FloatingHearts({ count = 10 }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: count }, (_, i) => {
        const size = 16 + Math.random() * 14
        const duration = 7 + Math.random() * 7
        const delay = Math.random() * 10
        const left = Math.random() * 100
        const color = i % 3 === 0 ? '#1D4ED8' : i % 3 === 1 ? '#3B82F6' : '#93C5FD'
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `-40px`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: 0,
              animation: `heartFall ${duration}s ease-in-out ${delay}s infinite`,
            }}
          >
            <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        )
      })}
    </div>
  )
}
