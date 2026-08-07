'use client'

import { useState } from 'react'

interface Tulip {
  id: number
  size: number
  duration: number
  delay: number
  left: number
  color: string
}

function makeTulips(count: number): Tulip[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 20 + Math.random() * 16,
    duration: 8 + Math.random() * 8,
    delay: Math.random() * 12,
    left: Math.random() * 100,
    color: i % 3 === 0 ? '#1D4ED8' : i % 3 === 1 ? '#3B82F6' : '#93C5FD',
  }))
}

export function FallingTulips({ count = 10 }) {
  const [tulips] = useState<Tulip[]>(() => makeTulips(count))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {tulips.map((t) => (
        <div
          key={t.id}
          className="absolute"
          style={{
            left: `${t.left}%`,
            top: `-40px`,
            width: `${t.size}px`,
            height: `${t.size}px`,
            opacity: 0,
            animation: `tulipFall ${t.duration}s ease-in-out ${t.delay}s infinite`,
          }}
        >
          <svg viewBox="0 0 24 24" fill={t.color} className="w-full h-full">
            <path d="M12 22 C6 22 3 14 6 8 C8 4 10 3 12 8 C14 3 16 4 18 8 C21 14 18 22 12 22Z" />
          </svg>
        </div>
      ))}
    </div>
  )
}