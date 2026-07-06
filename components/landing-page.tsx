"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone, MapPin, Mail } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export function LandingPage() {
  return (
    <main className="relative bg-background">
      {/* Animated background elements */}
      <motion.div
        className="pointer-events-none fixed inset-0 -z-5 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Floating circles - theme inspired */}
        {[
          { x: "5%", y: "10%", size: 200, duration: 20 },
          { x: "85%", y: "20%", size: 150, duration: 25 },
          { x: "10%", y: "70%", size: 180, duration: 22 },
          { x: "75%", y: "80%", size: 160, duration: 28 },
        ].map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5 blur-3xl"
            style={{ width: circle.size, height: circle.size, left: circle.x, top: circle.y }}
            animate={{
              y: [0, 30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: circle.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Decorative lines */}
        <svg className="absolute inset-0 h-full w-full opacity-5" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Hero Section */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
        {/* Background image with multiple layers */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url(/images/pizza-hero.png)" }}
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background/95" />
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.03, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(254, 223, 130, 0.1) 0%, transparent 70%)`,
            }}
          />
        </div>

        {/* Logo with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Pulsing concentric rings */}
          {[0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              aria-hidden
              className="absolute rounded-full border border-primary/25"
              style={{ width: 200 + i * 60, height: 200 + i * 60 }}
              animate={{ scale: [1, 1.15], opacity: [0.6, 0] }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
                delay: i * 0.8,
              }}
            />
          ))}

          {/* Soft dual glow */}
          <motion.div
            aria-hidden
            className="absolute size-72 rounded-full bg-primary/20 blur-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute size-80 rounded-full bg-secondary/10 blur-3xl"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Floating logo */}
          <motion.div
            animate={{ y: [0, -15, 0], rotateZ: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/images/logo.png"
              alt="El Parmigiano — La véritable cuisine italienne"
              width={340}
              height={300}
              priority
              className="relative h-auto w-56 drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)] sm:w-72 lg:w-80"
            />
          </motion.div>
        </motion.div>

        {/* Headline with letter spacing animation */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-16 max-w-4xl font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-7xl tracking-tight"
        >
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            La Véritable
          </span>
          <br />
          <span>Cuisine Italienne</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          Authentique. Raffinée. Passionnée. Depuis 2026, El Parmigiano vous invite à découvrir
          l&apos;essence même de la gastronomie italienne.
        </motion.p>

        {/* CTA Button */}
        <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="mt-10">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-3 rounded-md bg-primary px-8 py-4 font-serif text-lg font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
          >
            Découvrez Notre Menu
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Défilez</p>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="h-6 w-1 rounded-full bg-primary/40"
            />
          </div>
        </motion.div>
      </section>

      {/* Specialties Section */}
      <section className="relative px-6 py-20 sm:py-32">
        {/* Section background accent */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl mb-4"
          >
            Nos Spécialités
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Une sélection de plats élaborés avec passion et les ingrédients les plus fins
          </motion.p>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
            {[
              {
                title: "Pizzas Napolitaines",
                desc: "Traditionnelles et authentiques, cuites au feu de bois selon la recette originale.",
                price: "À partir de 10€",
                img: "/images/menu-pizza.png",
              },
              {
                title: "Panuozzo",
                desc: "Sandwichs italiens levés et croustillants, garnis de saveurs méditerranéennes.",
                price: "À partir de 7€",
                img: "/images/menu-panuozzo.png",
              },
              {
                title: "El Panino",
                desc: "Pains généreux remplis d'ingrédients frais et préparés selon vos envies.",
                price: "À partir de 5,50€",
                img: "/images/menu-panino.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                {/* Card image */}
                <motion.div
                  className="relative h-48 overflow-hidden bg-secondary/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </motion.div>

                {/* Card content */}
                <div className="relative p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.desc}
                  </p>
                  <motion.p
                    initial={{ color: "hsl(var(--primary))" }}
                    className="font-serif text-lg font-bold text-primary"
                  >
                    {item.price}
                  </motion.p>
                </div>

                {/* Hover accent */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/0 rounded-lg"
                  whileHover={{ borderColor: "hsl(var(--primary))" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative px-6 py-24 sm:py-32">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-6">
            Prêt à Savourer ?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Explorez notre menu complet et trouvez votre prochaine délicieuse découverte.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-10 py-4 font-serif font-bold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
          >
            Voir le Menu Complet
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="relative px-6 py-24 sm:py-32 border-t border-border/40">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2 className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl mb-16">
            Nous Contacter
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                lines: ["1 bis rue Guy Baudoin", "77000 Melun"],
              },
              {
                icon: Phone,
                title: "Téléphone",
                lines: ["0651475545", "0171857508"],
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["restaurantelparmigiano@gmail.com"],
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center"
                >
                  <motion.div
                    className="mb-4 flex justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="size-8 text-primary" />
                  </motion.div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-1">
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
