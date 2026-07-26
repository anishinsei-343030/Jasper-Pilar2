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
  const opacities = ['opacity-35', 'opacity-65', 'opacity-95', 'opacity-100']
  const emojiSizes = ['text-lg sm:text-xl', 'text-sm sm:text-base', 'text-xs sm:text-sm', 'text-[8px] sm:text-[10px]']
  const textSizes = ['text-[14px] sm:text-base', 'text-[11px] sm:text-sm', 'text-[9px] sm:text-xs', 'text-[7px] sm:text-[9px]']
  if (item.startsWith('/photos/') || item.startsWith('/Icons/')) {
    return (
      <img
        src={item}
        alt=""
        className={`w-full h-full rounded object-cover ${opacities[layerIndex]}`}
      />
    )
  }
  if (item.length <= 2) {
    return <span className={`text-white ${opacities[layerIndex]} ${emojiSizes[layerIndex]}`}>{item}</span>
  }
  return (
    <span className={`text-white ${opacities[layerIndex]} ${textSizes[layerIndex]} leading-tight text-right max-w-[90%] line-clamp-2`}>
      {item}
    </span>
  )
}

export function GiftBox({ label, tagline, emoji, color, index, peekPreviews, onClick }: GiftBoxProps) {
  return (
    <motion.button
      className="gift-card relative w-full aspect-[4/5] cursor-pointer group overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      <div className="card__border" />
      <div className="absolute inset-[2px] rounded-2xl overflow-hidden box-shadow" style={{ zIndex: 1, background: 'rgba(255, 255, 255, 0.97)' }}>
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
        <div className="relative z-10 flex flex-col items-center h-full p-6">
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="transition-all duration-500 [transition-timing-function:cubic-bezier(0.05,0,0.7,1)] group-hover:-translate-y-40 group-hover:scale-110">
              {emoji.startsWith('/Icons/') ? (
                <img src={emoji} alt="" className="w-16 h-16 object-contain mx-auto" />
              ) : (
                <span className="text-5xl">{emoji}</span>
              )}
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-heading text-[#0F172A] mb-1">{label}</h3>
            <p className="text-xs font-serif text-[#475569]/70">{tagline}</p>
          </div>
        </div>
      </div>
      <div
        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-lg"
        style={{ backgroundColor: color, zIndex: 2 }}
      >
        <span className="text-white">✦</span>
      </div>
    </motion.button>
  )
}
