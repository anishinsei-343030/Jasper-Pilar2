'use client'

import { create } from 'zustand'

export const tracks = [
  { src: '/music/Track1.mp3', label: 'Track 1' },
  { src: '/music/Track2.mp3', label: 'Track 2' },
  { src: '/music/Track3.mp3', label: 'Track 3' },
  { src: '/music/Track4.mp3', label: 'Track 4' },
]

function shuffleArray(len: number, avoid?: number): number[] {
  const arr = Array.from({ length: len }, (_, i) => i)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  if (avoid !== undefined && arr[0] === avoid && len > 1) {
    const swap = 1 + Math.floor(Math.random() * (len - 1));
    [arr[0], arr[swap]] = [arr[swap], arr[0]]
  }
  return arr
}

const initialOrder = shuffleArray(tracks.length)

interface Store {
  activeBox: string | null
  openBox: (id: string) => void
  closeBox: () => void
  audioEnabled: boolean
  toggleAudio: () => void
  currentTrack: number
  nextTrack: () => void
  shuffleOrder: number[]
  shufflePos: number
}

export const useStore = create<Store>((set) => ({
  activeBox: null,
  openBox: (id) => set({ activeBox: id }),
  closeBox: () => set({ activeBox: null }),
  audioEnabled: true,
  toggleAudio: () =>
    set((s) => ({ audioEnabled: !s.audioEnabled })),
  currentTrack: initialOrder[0] ?? 0,
  nextTrack: () =>
    set((s) => {
      const nextPos = s.shufflePos + 1
      if (nextPos >= s.shuffleOrder.length) {
        const newOrder = shuffleArray(tracks.length, s.currentTrack)
        return { shuffleOrder: newOrder, shufflePos: 0, currentTrack: newOrder[0] }
      }
      return { shufflePos: nextPos, currentTrack: s.shuffleOrder[nextPos] }
    }),
  shuffleOrder: initialOrder,
  shufflePos: 0,
}))
