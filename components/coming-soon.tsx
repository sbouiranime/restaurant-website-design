"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FloatingScene } from "@/components/floating-scene"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function ComingSoon() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* Ambient background image */}
      <div className="absolute inset-0 -z-10">
        <div
          className="animate-slow-zoom h-full w-full bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url(/images/pizza-hero.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      </div>

      {/* Floating themed icons */}
      <FloatingScene />

      {/* Eyebrow */}
      <motion.p
        custom={0}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="animate-flicker mb-6 text-xs uppercase tracking-[0.45em] text-primary sm:text-sm"
      >
        Ouverture Prochaine
      </motion.p>

      {/* Wordmark */}
      <motion.h1
        custom={1}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="font-serif text-6xl leading-[0.9] text-foreground sm:text-8xl lg:text-9xl"
      >
        El<span className="italic text-primary"> Parmigiano</span>
      </motion.h1>

      <motion.div
        custom={2}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mt-6 flex items-center gap-4 text-muted-foreground"
      >
        <span className="h-px w-10 bg-primary/40" />
        <span className="text-sm uppercase tracking-[0.3em]">
          Cuisine Italienne · Melun
        </span>
        <span className="h-px w-10 bg-primary/40" />
      </motion.div>

      {/* Teaser line */}
      <motion.p
        custom={3}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mt-8 max-w-xl text-pretty font-serif text-lg italic leading-relaxed text-foreground/90 sm:text-xl"
      >
        {"Quelque chose de délicieux mijote à Melun. Bientôt, l'Italie s'invite à votre table."}
      </motion.p>

      {/* Animated "coming soon" badge */}
      <motion.div
        custom={4}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative mt-12 flex items-center gap-5"
      >
        <span className="h-px w-12 bg-primary/40 sm:w-20" />
        <motion.span
          animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.04, 1] }}
          transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="font-serif text-2xl uppercase tracking-[0.5em] text-primary sm:text-4xl"
        >
          Prochainement
        </motion.span>
        <span className="h-px w-12 bg-primary/40 sm:w-20" />
      </motion.div>

      {/* CTA */}
      <motion.div
        custom={5}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mt-12"
      >
        <Link
          href="/menu"
          className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-105"
        >
          Ce qui vous attend
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  )
}
