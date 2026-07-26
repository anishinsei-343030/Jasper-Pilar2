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
          className="relative overflow-hidden rounded-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="card__border" />
          <div className="absolute inset-[1px] rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.97)' }} />
          <div className="relative z-10 p-5">
            <h3 className="text-lg font-heading text-[#0F172A] mb-2">{wish.title}</h3>
            <p className="font-serif text-[#475569] text-sm leading-relaxed">{wish.text}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
