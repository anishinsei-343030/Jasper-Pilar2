'use client'

import { useState } from 'react'

interface Heart {
  id: number
  size: number
  duration: number
  delay: number
  left: number
  color: string
}

function makeHearts(count: number): Heart[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 16 + Math.random() * 14,
    duration: 7 + Math.random() * 7,
    delay: Math.random() * 10,
    left: Math.random() * 100,
    color: i % 3 === 0 ? '#1D4ED8' : i % 3 === 1 ? '#3B82F6' : '#93C5FD',
  }))
}

export function FloatingHearts({ count = 10 }) {
  const [hearts] = useState<Heart[]>(() => makeHearts(count))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute"
          style={{
            left: `${h.left}%`,
            top: `-40px`,
            width: `${h.size}px`,
            height: `${h.size}px`,
            opacity: 0,
            animation: `heartFall ${h.duration}s ease-in-out ${h.delay}s infinite`,
          }}
        >
          <svg viewBox="0 0 24 24" fill={h.color} className="w-full h-full">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  )
}