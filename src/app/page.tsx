'use client'

import { SunsetHero } from '@/components/SunsetHero'
import { GiftBoxGrid } from '@/components/GiftBoxGrid'
import { GiftOverlay } from '@/components/GiftOverlay'
import { MemoriesContent } from '@/components/MemoriesContent'
import { LetterContent } from '@/components/LetterContent'
import { WishesContent } from '@/components/WishesContent'
import { FinaleContent } from '@/components/FinaleContent'
import { useStore } from '@/store/useStore'
import { boxes } from '@/lib/messages'

export default function Home() {
  const activeBox = useStore((s) => s.activeBox)
  const openBox = useStore((s) => s.openBox)
  const closeBox = useStore((s) => s.closeBox)

  const currentBox = boxes.find((b) => b.id === activeBox)

  const renderContent = () => {
    switch (activeBox) {
      case 'memories':
        return <MemoriesContent />
      case 'letter':
        return <LetterContent />
      case 'wishes':
        return <WishesContent />
      case 'finale':
        return <FinaleContent />
      default:
        return null
    }
  }

  return (
    <main className="relative min-h-screen">
      <SunsetHero />
      <GiftBoxGrid onOpenBox={openBox} />

      <GiftOverlay
        isOpen={!!activeBox}
        onClose={closeBox}
        title={currentBox?.label ?? ''}
        color={currentBox?.color ?? '#d4a373'}
      >
        {renderContent()}
      </GiftOverlay>
    </main>
  )
}
