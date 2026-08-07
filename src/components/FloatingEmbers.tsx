'use client'

import { useState } from 'react'

interface Ember {
  id: number
  size: number
  duration: number
  delay: number
  left: number
  bottom: number
}

function makeEmbers(count: number): Ember[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 3 + Math.random() * 6,
    duration: 6 + Math.random() * 10,
    delay: Math.random() * 8,
    left: Math.random() * 100,
    bottom: Math.random() * 30,
  }))
}

export function FloatingEmbers({ count = 20 }) {
  const [embers] = useState<Ember[]>(() => makeEmbers(count))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {embers.map((e) => (
        <div
          key={e.id}
          className="absolute rounded-full"
          style={{
            left: `${e.left}%`,
            bottom: `${e.bottom}%`,
            width: `${e.size}px`,
            height: `${e.size}px`,
            background: e.id % 3 === 0 ? '#1D4ED8' : e.id % 3 === 1 ? '#3B82F6' : '#93C5FD',
            opacity: 0,
            animation: `sparkleFloat ${e.duration}s ease-in-out ${e.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}