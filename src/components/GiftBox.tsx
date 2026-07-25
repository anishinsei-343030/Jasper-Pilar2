'use client'

import { motion } from 'framer-motion'

interface GiftBoxProps {
  label: string
  tagline: string
  emoji: string
  color: string
  index: number
  peekPreviews: string[]
  onClick: () => void
}

function PeekPreview({ item, layerIndex }: { item: string; layerIndex: number }) {
  const imgSizes = [
    'w-52 h-52 sm:w-56 sm:h-56',
    'w-40 h-40 sm:w-44 sm:h-44',
    'w-28 h-28 sm:w-32 sm:h-32',
    'w-12 h-12 sm:w-14 sm:h-14',
  ]
  const emojiSizes = ['text-lg sm:text-xl', 'text-sm sm:text-base', 'text-xs sm:text-sm', 'text-[8px] sm:text-[10px]']
  const textSizes = ['text-[10px] sm:text-xs', 'text-[8px] sm:text-[10px]', 'text-[6px] sm:text-[8px]', 'text-[4px] sm:text-[6px]']
  if (item.startsWith('/photos/') || item.startsWith('/Icons/')) {
    return (
      <img
        src={item}
        alt=""
        className={`${imgSizes[layerIndex]} rounded object-cover opacity-40`}
      />
    )
  }
  if (item.length <= 2) {
    return <span className={`text-white/40 ${emojiSizes[layerIndex]}`}>{item}</span>
  }
  return (
    <span className={`text-white/35 ${textSizes[layerIndex]} leading-tight text-right max-w-[90%] line-clamp-2`}>
      {item}
    </span>
  )
}

export function GiftBox({ label, tagline, emoji, color, index, peekPreviews, onClick }: GiftBoxProps) {
  return (
    <motion.button
      className="gift-card relative w-full aspect-[4/5] rounded-2xl glass box-shadow cursor-pointer group"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      <div
        className="gift-bg"
        style={{
          background: `radial-gradient(circle at 30% 107%, ${color}44, ${color}22 60%, transparent 90%)`,
        }}
      />
      <div className="peek peek-1" style={{ borderTopColor: `${color}88` }}>
        <PeekPreview item={peekPreviews[0]} layerIndex={0} />
      </div>
      <div className="peek peek-2" style={{ borderTopColor: `${color}66` }}>
        <PeekPreview item={peekPreviews[1]} layerIndex={1} />
      </div>
      <div className="peek peek-3" style={{ borderTopColor: `${color}44` }}>
        <PeekPreview item={peekPreviews[2]} layerIndex={2} />
      </div>
      <div className="peek peek-4" style={{ borderTopColor: `${color}22` }}>
        <PeekPreview item={peekPreviews[3]} layerIndex={3} />
      </div>
      <div className="flex flex-col items-center justify-between h-full p-6 relative z-10">
        <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
          {emoji.startsWith('/Icons/') ? (
            <img src={emoji} alt="" className="w-16 h-16 object-contain mx-auto" />
          ) : (
            emoji
          )}
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
