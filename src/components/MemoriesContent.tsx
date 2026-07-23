'use client'

import { motion } from 'framer-motion'

export function MemoriesContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <p className="font-serif text-[#8b5a2b] text-center text-lg">
        Drop your photos into <code className="bg-white/20 px-2 py-0.5 rounded text-sm">public/photos/</code> and they&apos;ll appear here.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl bg-white/20 border border-white/20 flex items-center justify-center text-[#8b5a2b]/40 text-4xl"
          >
            📷
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-[#8b5a2b]/60 font-serif italic">
        Every picture tells a story. I can&apos;t wait to see yours.
      </p>
    </motion.div>
  )
}
