'use client'

import { motion } from 'framer-motion'
import { wishesList } from '@/lib/messages'

export function WishesContent() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center">
        <motion.div
          className="w-24 h-24"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img src="./Icons/WishIconInside.png" alt="" className="w-full h-full object-contain" />
        </motion.div>
      </div>
      {wishesList.map((wish, i) => (
        <motion.div
          key={i}
          className="relative overflow-hidden rounded-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="card__border" />
          <div className="relative z-10 rounded-xl bg-white/97 m-[2px] p-5">
            <h3 className="text-lg font-heading text-[#0F172A] mb-2">{wish.title}</h3>
            <p className="font-serif text-[#475569] text-sm leading-relaxed">{wish.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
