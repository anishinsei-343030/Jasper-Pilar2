'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useStore } from '@/store/useStore'

export function FloatingButterfly() {
  const welcomeDismissed = useStore((s) => s.welcomeDismissed)
  const controls = useAnimation()

  useEffect(() => {
    if (!welcomeDismissed) return

    controls.set({ opacity: 0, x: 100, y: 0, scale: 0.8 })

    const t1 = setTimeout(() => {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 80, damping: 12, duration: 1.5 },
      })
    }, 1000)

    const t2 = setTimeout(() => {
      controls.start({
        x: '-42vw',
        y: '-40vh',
        scale: 0.7,
        transition: { duration: 8, ease: [0.43, 0.13, 0.23, 0.96] },
      })
    }, 5000)

    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [welcomeDismissed, controls])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      <motion.div
        className="absolute"
        style={{ right: '6%', top: '52%' }}
        animate={controls}
      >
        <div className="relative floating-butterfly">
          <div className="absolute inset-0 bg-[#3B82F6] opacity-15 blur-xl rounded-full scale-150" />
          <img
            src="/Icons/MessageIconInside.png"
            alt=""
            className="w-14 h-14 object-contain relative"
          />
        </div>
      </motion.div>
    </div>
  )
}
