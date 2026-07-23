'use client'

import { createContext, useContext, useRef, useEffect, useCallback, useState } from 'react'
import { useStore, tracks } from '@/store/useStore'

interface AudioContextValue {
  play: () => void
  pause: () => void
  skip: () => void
  isPlaying: boolean
}

const AudioCtx = createContext<AudioContextValue>({
  play: () => {},
  pause: () => {},
  skip: () => {},
  isPlaying: false,
})

export const useAudio = () => useContext(AudioCtx)

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const currentTrack = useStore((s) => s.currentTrack)
  const audioEnabled = useStore((s) => s.audioEnabled)
  const nextTrack = useStore((s) => s.nextTrack)

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.loop = false
      audioRef.current.volume = 0.5
    }
    const audio = audioRef.current

    const handleEnded = () => {
      nextTrack()
    }
    audio.addEventListener('ended', handleEnded)
    return () => audio.removeEventListener('ended', handleEnded)
  }, [nextTrack])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !unlocked) return
    const track = tracks[currentTrack]
    if (!track) return
    audio.src = track.src
    audio.load()
    if (audioEnabled) {
      audio.play().catch(() => setIsPlaying(false))
      setIsPlaying(true)
    }
  }, [currentTrack, unlocked, audioEnabled])

  const unlock = useCallback(() => {
    if (!unlocked) {
      setUnlocked(true)
    }
  }, [unlocked])

  const play = useCallback(() => {
    unlock()
    const audio = audioRef.current
    if (!audio) return
    audio.play().catch(() => {})
    setIsPlaying(true)
  }, [unlock])

  const pause = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    setIsPlaying(false)
  }, [])

  const skip = useCallback(() => {
    nextTrack()
  }, [nextTrack])

  return (
    <AudioCtx.Provider value={{ play, pause, skip, isPlaying }}>
      <div onClick={unlock} onTouchStart={unlock}>
        {children}
      </div>
    </AudioCtx.Provider>
  )
}
