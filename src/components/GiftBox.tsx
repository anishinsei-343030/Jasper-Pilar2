'use client'

import { motion } from 'framer-motion'

interface GiftBoxProps {
  label: string
  tagline: string
  emoji: string
  color: string
  index: number
  onClick: () => void
}

export function GiftBox({ label, tagline, emoji, color, index, onClick }: GiftBoxProps) {
  return (
    <motion.button
      className="relative w-full aspect-[4/5] rounded-2xl glass box-shadow cursor-pointer group perspective-[800px]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-between h-full p-6 relative">
        <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>

        <div
          className="w-4/5 h-[2px] rounded-full"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        />

        <div className="text-center">
          <h3 className="text-xl font-heading text-[#0F172A] mb-1">{label}</h3>
          <p className="text-xs font-serif text-[#475569]/70">{tagline}</p>
        </div>

        <div
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-lg"
          style={{ backgroundColor: color }}
        >
          <span className="text-white">✦</span>
        </div>
      </div>
    </motion.button>
  )
}
