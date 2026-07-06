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

export function LandingPage() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <div
            className="animate-slow-zoom h-full w-full bg-cover bg-center opacity-15"
            style={{ backgroundImage: "url(/images/pizza-hero.png)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        </div>

        {/* Logo with radiating glow rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Pulsing rings */}
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              aria-hidden
              className="absolute rounded-full border border-primary/30"
              style={{ width: 220, height: 220 }}
              animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
              transition={{
                duration: 3.6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
                delay: i * 1.2,
              }}
            />
          ))}

          {/* Soft glow */}
          <motion.div
            aria-hidden
            className="absolute size-56 rounded-full bg-primary/15 blur-3xl"
            animate={{ opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/images/logo.png"
              alt="El Parmigiano — La véritable cuisine italienne"
              width={340}
              height={300}
              priority
              className="h-auto w-56 drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] sm:w-72 lg:w-80"
            />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-12 max-w-3xl font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
        >
          La Véritable Cuisine Italienne
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-pretty font-serif text-lg italic leading-relaxed text-foreground/80 sm:text-xl"
        >
          {"Pizzas au feu de bois, panuozzo artisanal et spécialités italiennes. Une expérience gastronomique authentique à Melun."}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
        >
          <Link
            href="/menu"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-105"
          >
            Découvrir le Menu
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:0651475545"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary/10"
          >
            <Phone className="size-4" />
            Réserver
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <div className="size-6 border-b-2 border-r-2 border-primary/40 rotate-45" />
          </motion.div>
        </motion.div>
      </section>

      {/* Specialties Section */}
      <section className="relative px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-serif text-3xl font-bold text-foreground sm:text-4xl"
          >
            Nos Spécialités
          </motion.h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pizzas Napolitaines",
                desc: "Au feu de bois traditionnel, avec les meilleures recettes italiennes.",
                price: "À partir de 10€",
              },
              {
                title: "Panuozzo",
                desc: "Sandwich artisanal avec mozzarella fraîche et ingrédients sélectionnés.",
                price: "À partir de 7€",
              },
              {
                title: "El Panino",
                desc: "Panini savoureux avec vos choix de garnitures et sauces.",
                price: "À partir de 5,50€",
              },
              {
                title: "El Volcano",
                desc: "Escalope panée, mozzarella fondue, salade fraîche et tomates.",
                price: "À partir de 7€",
              },
              {
                title: "Boissons",
                desc: "Café, eau fraîche, boissons gazeuses et vins italiens.",
                price: "À partir de 1€",
              },
              {
                title: "Desserts",
                desc: "Tiramisu maison, cookies frais et pizzas sucrées à la Nutella.",
                price: "À partir de 3,50€",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-lg border border-primary/20 bg-card/40 p-6 backdrop-blur transition-all hover:border-primary/50 hover:bg-card/60"
              >
                <h3 className="font-serif text-xl font-semibold text-primary group-hover:text-primary/80">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                <p className="mt-4 font-serif text-lg italic text-primary">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-serif text-3xl font-bold text-foreground sm:text-4xl"
          >
            Prêt à Savourer ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-pretty font-serif text-lg italic text-foreground/80"
          >
            Consultez notre menu complet et réservez votre table dès maintenant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
          >
            <Link
              href="/menu"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-105"
            >
              Voir le Menu Complet
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative border-t border-primary/20 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-serif text-3xl font-bold text-foreground sm:text-4xl"
          >
            Nous Contacter
          </motion.h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: MapPin,
                label: "Adresse",
                content: ["1 bis rue Guy Baudoin", "77000 Melun"],
              },
              {
                icon: Phone,
                label: "Téléphone",
                content: ["06 51 47 55 45", "01 71 85 75 08"],
              },
              {
                icon: Mail,
                label: "Email",
                content: ["restaurantelparmigiano@gmail.com"],
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  <div className="rounded-full bg-primary/15 p-4">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">{item.label}</h3>
                    {item.content.map((line) => (
                      <p key={line} className="mt-1 text-sm text-foreground/70">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
