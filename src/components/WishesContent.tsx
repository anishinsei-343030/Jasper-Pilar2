'use client'

import { motion } from 'framer-motion'
import { wishesList } from '@/lib/messages'

export function WishesContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      {wishesList.map((wish, i) => (
        <motion.div
          key={i}
          className="bg-white/20 rounded-xl p-5 border border-white/20 hover:bg-white/30 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <h3 className="text-lg font-heading text-[#2d1b00] mb-2">{wish.title}</h3>
          <p className="font-serif text-[#8b5a2b] text-sm leading-relaxed">{wish.text}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
