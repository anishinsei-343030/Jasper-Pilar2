'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photoCount = 19

export function MemoriesContent() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {Array.from({ length: photoCount }, (_, i) => (
          <motion.button
            key={i}
            className="relative aspect-square rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedPhoto(i + 1)}
          >
            <div className="card__border" />
            <div className="absolute inset-[2px] rounded-xl overflow-hidden">
              <img
                src={`/photos/Photo${i + 1}.jpg`}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.img
              key={selectedPhoto}
              src={`/photos/Photo${selectedPhoto}.jpg`}
              alt={`Photo ${selectedPhoto}`}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
