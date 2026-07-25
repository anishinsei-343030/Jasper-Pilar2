'use client'

export function FallingTulips({ count = 10 }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: count }, (_, i) => {
        const size = 20 + Math.random() * 16
        const duration = 8 + Math.random() * 8
        const delay = Math.random() * 12
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
              animation: `tulipFall ${duration}s ease-in-out ${delay}s infinite`,
            }}
          >
            <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
              <path d="M12 22 C6 22 3 14 6 8 C8 4 10 3 12 8 C14 3 16 4 18 8 C21 14 18 22 12 22Z" />
            </svg>
          </div>
        )
      })}
    </div>
  )
}
