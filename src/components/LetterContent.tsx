'use client'

import { motion } from 'framer-motion'
import { letterContent } from '@/lib/messages'

export function LetterContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className="card__border" />
        <div className="absolute inset-[2px] rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.97)' }} />
        <div className="relative z-10 p-6 sm:p-8">
          <div className="prose prose-sm max-w-none">
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
      </div>
    </motion.div>
  )
}
