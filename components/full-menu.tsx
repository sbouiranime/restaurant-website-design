"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface MenuItem {
  name: string
  price: string
  description: string
  image?: string
}

interface MenuCategory {
  title: string
  image: string
  items: MenuItem[]
}

const MENU_DATA: MenuCategory[] = [
  {
    title: "Pizzas Napolitaines",
    image: "/images/menu-pizza.png",
    items: [
      {
        name: "Pizza Margherita",
        price: "10€",
        description:
          "Sauce tomate San Marzano, mozzarella fior di latte, basilic frais, huile d'olive vierge extra.",
        image: "/images/products/pizza-margherita.png",
      },
      {
        name: "Pizza Marinara",
        price: "10€",
        description: "Sauce tomate, ail émincé, origan, olives, huile d'olive. (Sans fromage)",
      },
      {
        name: "Pizza Capricciosa",
        price: "12€",
        description:
          "Sauce tomate, mozzarella, jambon, champignons frais, cœurs d'artichauts, olives noires.",
        image: "/images/products/pizza-capricciosa.png",
      },
      {
        name: "Pizza Al Tonno",
        price: "12€",
        description: "Sauce tomate, mozzarella, thon, oignons rouges, olives noires.",
      },
      {
        name: "Pizza Napoli",
        price: "12€",
        description:
          "Sauce tomate, mozzarella, filets d'anchois, câpres, olives noires, origan.",
      },
      {
        name: "Pizza Pollo",
        price: "12€",
        description: "Sauce tomate, mozzarella, poulet mariné, poivron, origan, huile d'olive.",
      },
      {
        name: "Pizza Macinata",
        price: "12€",
        description:
          "Sauce tomate, mozzarella, viande hachée, poivron, oignon rouge, origan, huile d'olive.",
      },
      {
        name: "Pizza Ortolana (Végétarienne)",
        price: "12€",
        description:
          "Sauce tomate, mozzarella, aubergines, courgettes, poivrons, champignons frais, olives noires, basilic, huile d'olive.",
      },
      {
        name: "Pizza Quattro Formaggi",
        price: "12€",
        description: "Sauce tomate, mozzarella, roquefort, gruyère, parmesan.",
      },
      {
        name: "Pizza Pollo Bianca",
        price: "14€",
        description:
          "Sauce blanche, mozzarella, poulet rôti, poivron, champignons, olives.",
      },
      {
        name: "Pizza Parmigiano",
        price: "14€",
        description:
          "Crème à la truffe, mozzarella, champignons frais, copeaux de Parmigiano Reggiano, roquette, huile de truffe.",
      },
      {
        name: "Pizza Al Salmone",
        price: "15€",
        description:
          "Sauce blanche, mozzarella, saumon fumé, parmesan, citron, poivre noir, huile d'olive.",
      },
      {
        name: "Pizza Bresaola",
        price: "15€",
        description:
          "Sauce tomate, mozzarella. Après cuisson : bresaola, roquette fraîche, copeaux de Parmigiano Reggiano, filet d'huile d'olive.",
      },
      {
        name: "Pizza Della Casa",
        price: "15€",
        description: "Disponible uniquement le week-end. Recette différente chaque week-end.",
      },
    ],
  },
  {
    title: "Panuozzo",
    image: "/images/menu-panuozzo.png",
    items: [
      {
        name: "Panuozzo Classico",
        price: "7€",
        description: "Mozzarella, jambon, roquette, huile d'olive.",
      },
      {
        name: "Panuozzo Vegetariano",
        price: "7€",
        description: "Mozzarella, aubergines, courgettes, poivrons, champignons frais, roquette.",
      },
      {
        name: "Panuozzo Al Salmone",
        price: "8€",
        description: "Mozzarella, saumon fumé, tomate cerise, roquette.",
      },
      {
        name: "Panuozzo Bresaola",
        price: "9€",
        description:
          "Mozzarella, bresaola, roquette, Parmigiano Reggiano, crème de balsamique.",
      },
    ],
  },
  {
    title: "El Volcano",
    image: "/images/menu-volcano.png",
    items: [
      {
        name: "El Volcano Escalope",
        price: "7€",
        description:
          "Avant cuisson : Escalope panée, mozzarella, oignons rouges. Après cuisson : salade, tomates cerises, sauce maison.",
      },
      {
        name: "El Volcano Poulet",
        price: "7€",
        description:
          "Avant cuisson : Poulet grillé mariné, mozzarella, oignons rouges. Après cuisson : salade, tomates cerises, sauce maison.",
      },
      {
        name: "El Volcano Thon",
        price: "7€",
        description:
          "Avant cuisson : Thon, mozzarella, oignons rouges, olives noires. Après cuisson : salade, tomates cerises, sauce maison.",
      },
      {
        name: "El Volcano Jambon",
        price: "7€",
        description:
          "Avant cuisson : Jambon de dinde fumé, mozzarella, champignons frais. Après cuisson : salade, tomates cerises, sauce maison.",
      },
    ],
  },
  {
    title: "El Panino",
    image: "/images/menu-panino.png",
    items: [
      {
        name: "El Panino",
        price: "5,50€",
        description:
          "Choix : Thon (œuf en option), Jambon de dinde fumé, Poulet pané. Crudités au choix (salade, tomate, oignon). Sauces au choix : mayonnaise, ketchup, moutarde, harissa, algérienne, samouraï, sauce maison.",
      },
      {
        name: "Supplément : Champignons",
        price: "+1,50€",
        description: "",
      },
      {
        name: "Supplément : Burrata",
        price: "+3,00€",
        description: "",
      },
      {
        name: "Supplément : Œuf",
        price: "+1,50€",
        description: "",
      },
      {
        name: "Supplément : Mozzarella",
        price: "+1,50€",
        description: "",
      },
    ],
  },
  {
    title: "Boissons",
    image: "/images/menu-drinks.png",
    items: [
      {
        name: "Boisson fraîche (33 cl)",
        price: "1,50€",
        description: "",
      },
      {
        name: "Bouteille d'eau (50 cl)",
        price: "1,00€",
        description: "",
      },
      {
        name: "Café",
        price: "2,00€",
        description: "",
      },
    ],
  },
  {
    title: "Desserts",
    image: "/images/menu-desserts.png",
    items: [
      {
        name: "Tiramisu maison",
        price: "4,50€",
        description: "",
      },
      {
        name: "Cookie",
        price: "3,50€",
        description: "",
      },
      {
        name: "Mini Pizza Nutella",
        price: "5,50€",
        description: "",
      },
      {
        name: "Mini Pizza Nutella & Pistache",
        price: "6,50€",
        description: "",
      },
    ],
  },
]

export function FullMenu() {
  const pizzas = MENU_DATA[0].items
  const otherCategories = MENU_DATA.slice(1)
  const pizzasFirstHalf = pizzas.slice(0, 7)
  const pizzasSecondHalf = pizzas.slice(7, 14)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="mx-auto max-w-5xl space-y-20 px-6 py-8">
      {/* Hero Pizza Image spanning full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative h-96 w-full overflow-hidden rounded-lg"
      >
        <Image
          src="/images/menu-pizza.png"
          alt="Pizza Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </motion.div>

      {/* Pizza Section with 7-7 split */}
      <motion.section className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center font-serif text-3xl font-bold text-primary md:text-4xl"
        >
          Pizzas Napolitaines
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {/* Left Column */}
          <div className="space-y-6">
            {pizzasFirstHalf.map((item) => (
              <motion.div key={item.name} variants={itemVariants} className="group overflow-hidden rounded-lg border border-primary/20 bg-card/50 p-4 transition-all hover:border-primary/40 hover:bg-card">
                {item.image && (
                  <div className="relative mb-3 h-40 w-full overflow-hidden rounded-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-lg text-foreground transition-colors group-hover:text-primary md:text-xl">
                    {item.name}
                  </h3>
                  <span className="whitespace-nowrap font-serif text-lg italic text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed md:text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {pizzasSecondHalf.map((item) => (
              <motion.div key={item.name} variants={itemVariants} className="group overflow-hidden rounded-lg border border-primary/20 bg-card/50 p-4 transition-all hover:border-primary/40 hover:bg-card">
                {item.image && (
                  <div className="relative mb-3 h-40 w-full overflow-hidden rounded-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-lg text-foreground transition-colors group-hover:text-primary md:text-xl">
                    {item.name}
                  </h3>
                  <span className="whitespace-nowrap font-serif text-lg italic text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed md:text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Other Categories */}
      {otherCategories.map((category, categoryIdx) => (
        <motion.section
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          <div
            className={`grid grid-cols-1 gap-8 ${
              categoryIdx % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-2"
            }`}
          >
            {/* Category Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative h-80 w-full overflow-hidden rounded-lg ${
                categoryIdx % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />
            </motion.div>

            {/* Category Items */}
            <motion.div
              className={`space-y-6 ${categoryIdx % 2 === 1 ? "md:order-1" : ""}`}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl">
                {category.title}
              </h2>

              <div className="space-y-5">
                {category.items.map((item) => (
                  <motion.div key={item.name} variants={itemVariants} className="group">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-base text-foreground transition-colors group-hover:text-primary md:text-lg">
                        {item.name}
                      </h3>
                      <span className="whitespace-nowrap font-serif text-base italic text-primary">
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed md:text-sm">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      ))}
    </div>
  )
}
