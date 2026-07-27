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
        colors: ['#1D4ED8', '#3B82F6', '#93C5FD', '#0F172A'],
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#1D4ED8', '#3B82F6', '#93C5FD', '#0F172A'],
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="card__border" />
      <div className="relative z-10 rounded-2xl bg-white/97 m-[2px]">
        <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
      <motion.div
        className="w-24 h-24"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <img src="/Icons/GiftIconInside.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

        <motion.h3
          className="text-2xl sm:text-3xl font-heading text-[#0F172A]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {finaleMessage}
        </motion.h3>

        <motion.p
          className="font-serif text-[#475569] text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {finaleSubtext}
        </motion.p>

        <motion.div
          className="mt-8 w-16 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2 }}
        />
      </div>
      </div>
    </div>
  )
}
