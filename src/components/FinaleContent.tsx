'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { finaleMessage, finaleSubtext } from '@/lib/messages'

export function FinaleContent() {
  const firedRef = useRef(false)

  useEffect(() => {
    if (firedRef.current) return
    firedRef.current = true

    const duration = 3000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#ff6b35', '#ff8fa3', '#ffd700', '#d4a373'],
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#ff6b35', '#ff8fa3', '#ffd700', '#d4a373'],
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }, [])

  return (
    <motion.div
      className="flex flex-col items-center justify-center py-12 text-center space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-7xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        🎁
      </motion.div>

      <motion.h3
        className="text-2xl sm:text-3xl font-heading text-[#2d1b00]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {finaleMessage}
      </motion.h3>

      <motion.p
        className="font-serif text-[#8b5a2b] text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {finaleSubtext}
      </motion.p>

      <motion.div
        className="mt-8 w-16 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#d4a373] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2 }}
      />
    </motion.div>
  )
}
