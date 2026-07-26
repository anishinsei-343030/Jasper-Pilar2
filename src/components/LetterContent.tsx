'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { letterContent } from '@/lib/messages'

export function LetterContent() {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {!revealed ? (
        <div className="flex items-center justify-center py-16">
          <motion.div
            className="text-6xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            💌
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-sm max-w-none"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div className="card__border" />
            <div className="absolute inset-[2px] rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.97)' }} />
            <div className="relative z-10 p-6 sm:p-8">
            {letterContent.split('\n\n').map((paragraph, i) => (
              <motion.p
                key={i}
                className="font-serif text-[#0F172A] leading-relaxed mb-4 last:mb-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
