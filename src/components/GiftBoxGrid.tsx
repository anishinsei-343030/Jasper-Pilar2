'use client'

import { GiftBox } from './GiftBox'
import { boxes } from '@/lib/messages'

interface GiftBoxGridProps {
  onOpenBox: (id: string) => void
}

export function GiftBoxGrid({ onOpenBox }: GiftBoxGridProps) {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 pb-24">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {boxes.map((box, i) => (
          <GiftBox
            key={box.id}
            label={box.label}
            tagline={box.tagline}
            emoji={box.emoji}
            color={box.color}
            index={i}
            peekPreviews={box.peekPreviews}
            onClick={() => onOpenBox(box.id)}
          />
        ))}
      </div>
    </div>
  )
}
