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
        <div className="spinner mx-auto mb-6">
          <div className="spinner1">
            <img
              src="/photos/MainProfile.jpg"
              alt="Angelyn"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-heading text-[#0F172A] mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        For Angelyn
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl font-serif text-[#475569] max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        A little gift, wrapped with love
      </motion.p>

      <motion.div
        className="mt-8 w-20 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
    </div>
  )
}
