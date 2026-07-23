'use client'

export function FloatingEmbers({ count = 20 }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: count }, (_, i) => {
        const size = 3 + Math.random() * 6
        const duration = 6 + Math.random() * 10
        const delay = Math.random() * 8
        const left = Math.random() * 100
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: `${Math.random() * 30}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: i % 3 === 0 ? '#ff6b35' : i % 3 === 1 ? '#ff8fa3' : '#ffd700',
              opacity: 0,
              animation: `emberFloat ${duration}s ease-in-out ${delay}s infinite`,
            }}
          />
        )
      })}
    </div>
  )
}
