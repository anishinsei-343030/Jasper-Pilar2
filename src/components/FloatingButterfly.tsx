'use client'

import { motion } from 'framer-motion'

export function FloatingButterfly() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src="/Icons/MessageIconInside.png"
            alt=""
            className="w-20 h-20 object-contain"
          />
        </motion.div>
      </div>
    </div>
  )
}
