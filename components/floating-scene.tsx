"use client"

import { motion } from "framer-motion"
import { Pizza, Wine, UtensilsCrossed, Croissant, Salad, Flame, ChefHat, Citrus } from "lucide-react"

type FloatItem = {
  Icon: typeof Pizza
  left: string
  top: string
  size: number
  duration: number
  delay: number
  drift: number
}

const ITEMS: FloatItem[] = [
  { Icon: Pizza, left: "8%", top: "18%", size: 46, duration: 7, delay: 0, drift: 18 },
  { Icon: Wine, left: "84%", top: "22%", size: 38, duration: 8, delay: 0.6, drift: -22 },
  { Icon: UtensilsCrossed, left: "16%", top: "68%", size: 40, duration: 9, delay: 1.1, drift: 16 },
  { Icon: Croissant, left: "78%", top: "70%", size: 42, duration: 7.5, delay: 0.3, drift: -16 },
  { Icon: Salad, left: "46%", top: "12%", size: 34, duration: 8.5, delay: 1.4, drift: 20 },
  { Icon: Flame, left: "90%", top: "48%", size: 32, duration: 6.5, delay: 0.9, drift: -14 },
  { Icon: ChefHat, left: "5%", top: "44%", size: 36, duration: 8, delay: 1.7, drift: 18 },
  { Icon: Citrus, left: "52%", top: "78%", size: 34, duration: 7.8, delay: 0.4, drift: -18 },
]

export function FloatingScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-[5] overflow-hidden">
      {ITEMS.map(({ Icon, left, top, size, duration, delay, drift }, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/50"
          style={{ left, top }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 0.9, 0.9, 0],
            y: [0, -drift, 0],
            x: [0, drift * 0.5, 0],
            rotate: [0, drift > 0 ? 12 : -12, 0],
            scale: [0.7, 1, 0.7],
          }}
          transition={{
            duration,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Icon style={{ width: size, height: size }} strokeWidth={1.25} />
        </motion.div>
      ))}
    </div>
  )
}
