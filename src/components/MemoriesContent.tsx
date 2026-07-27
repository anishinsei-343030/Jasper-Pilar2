'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photoCount = 19

export function MemoriesContent() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const goToPrev = useCallback(() => {
    setSelectedPhoto(p => p === 1 ? photoCount : p! - 1)
  }, [])

  const goToNext = useCallback(() => {
    setSelectedPhoto(p => p === photoCount ? 1 : p! + 1)
  }, [])

  useEffect(() => {
    if (selectedPhoto === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev()
      else if (e.key === 'ArrowRight') goToNext()
      else if (e.key === 'Escape') setSelectedPhoto(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedPhoto, goToPrev, goToNext])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-24 h-24"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img src="./Icons/GalleryIconInside.png" alt="" className="w-full h-full object-contain" />
        </motion.div>
      </div>
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
                src={`./photos/Photo${i + 1}.jpg`}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white text-xl transition-colors z-10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <motion.img
              key={selectedPhoto}
              src={`./photos/Photo${selectedPhoto}.jpg`}
              alt={`Photo ${selectedPhoto}`}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain px-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 20 }}
            />

            <button
              onClick={(e) => { e.stopPropagation(); goToNext() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white text-xl transition-colors z-10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-serif">
              {selectedPhoto} / {photoCount}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
