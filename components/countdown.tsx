"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Target opening date — adjust as needed for the real opening.
const TARGET = new Date()
TARGET.setDate(TARGET.getDate() + 32)
TARGET.setHours(19, 0, 0, 0)

const LABELS: Record<string, string> = {
  days: "Jours",
  hours: "Heures",
  minutes: "Minutes",
  seconds: "Secondes",
}

function getRemaining() {
  const diff = Math.max(0, TARGET.getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getRemaining> | null>(null)

  useEffect(() => {
    setTime(getRemaining())
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = ["days", "hours", "minutes", "seconds"] as const

  return (
    <div className="flex items-stretch justify-center gap-3 sm:gap-5">
      {units.map((unit, i) => (
        <motion.div
          key={unit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
          className="flex min-w-16 flex-col items-center gap-2 rounded-md border border-primary/25 bg-card/40 px-3 py-4 backdrop-blur-sm sm:min-w-24 sm:px-5"
        >
          <span className="font-serif text-3xl tabular-nums text-primary sm:text-5xl">
            {time ? String(time[unit]).padStart(2, "0") : "--"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
            {LABELS[unit]}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
