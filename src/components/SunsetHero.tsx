'use client'

import { motion } from 'framer-motion'

export function SunsetHero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="mb-6"
      >
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ffd700] p-[4px] shadow-lg glow-warm">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src="/photos/MainProfile.jpg"
              alt="Angelyn"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-heading text-[#2d1b00] mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        For Angelyn
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl font-serif text-[#8b5a2b] max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        A little gift, wrapped with love
      </motion.p>

      <motion.div
        className="mt-8 w-20 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#d4a373] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
    </div>
  )
}
