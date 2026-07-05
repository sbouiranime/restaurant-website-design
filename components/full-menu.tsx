"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface MenuItem {
  name: string
  price: string
  description: string
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
        description: "Mozzarella fraîche, tomate, basilic, huile d'olive vierge extra.",
      },
      {
        name: "Panuozzo Jambon & Roquette",
        price: "8€",
        description: "Jambon cru, roquette fraîche, mozzarella, tomate fraîche.",
      },
      {
        name: "Panuozzo Tonno & Pesto",
        price: "8€",
        description: "Thon, pesto genovese, mozzarella, tomate, olives.",
      },
      {
        name: "Panuozzo Bufala",
        price: "9€",
        description: "Mozzarella di Bufala, tomates cerises, basilic frais, réduction balsamique.",
      },
    ],
  },
  {
    title: "El Volcano",
    image: "/images/menu-volcano.png",
    items: [
      {
        name: "El Volcano",
        price: "7€",
        description:
          "Escalope de poulet panée, mozzarella fondante, salade fraîche, tomate, mayonnaise maison. Servi dans une demi-pizza chaude.",
      },
      {
        name: "El Volcano Spicy",
        price: "8€",
        description:
          "Escalope de poulet panée, mozzarella fondante, roquette, tomate, sauce sriracha, mayonnaise épicée.",
      },
      {
        name: "El Volcano Tonno",
        price: "8€",
        description: "Escalope de poulet panée, thon, mozzarella, salade fraîche, citron.",
      },
    ],
  },
  {
    title: "El Panino",
    image: "/images/menu-panino.png",
    items: [
      {
        name: "El Panino Tonno",
        price: "5.50€",
        description: "Thon, mayonnaise, oignons rouges, tomate fraîche, roquette.",
      },
      {
        name: "El Panino Pollo",
        price: "5.50€",
        description: "Poulet rôti, salade fraîche, tomate, mayonnaise maison.",
      },
      {
        name: "El Panino Mortadelle",
        price: "6€",
        description: "Mortadelle de Bologne, pistachio, mozzarella fraîche, roquette.",
      },
      {
        name: "El Panino Veggie",
        price: "5.50€",
        description:
          "Tomates rôties, aubergines grillées, courgettes, roquette, mozzarella, pesto.",
      },
      {
        name: "El Panino Prosciutto",
        price: "6.50€",
        description: "Jambon de Parme, mozzarella fraîche, roquette, tomate, vinaigre balsamique.",
      },
    ],
  },
  {
    title: "Boissons",
    image: "/images/menu-drinks.png",
    items: [
      {
        name: "Eau Minérale",
        price: "2.50€",
        description: "Plate ou pétillante",
      },
      {
        name: "Espresso",
        price: "2€",
        description: "Classique italien",
      },
      {
        name: "Soft Drinks",
        price: "3€",
        description: "Coca, Sprite, Fanta",
      },
      {
        name: "Vin Blanc / Rouge",
        price: "4.50€ verre",
        description: "Sélection italienne premium",
      },
    ],
  },
  {
    title: "Desserts",
    image: "/images/menu-desserts.png",
    items: [
      {
        name: "Tiramisu",
        price: "5€",
        description: "Classique italien avec mascarpone et cacao.",
      },
      {
        name: "Biscuits Italiens",
        price: "3€",
        description: "Amaretti, cantucci, ou biscottis.",
      },
      {
        name: "Pizza Nutella",
        price: "4.50€",
        description: "Pâte fraîche, Nutella, sucre cristallisé.",
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function FullMenu() {
  const pizzas = MENU_DATA[0].items
  const otherCategories = MENU_DATA.slice(1)
  const pizzasFirstHalf = pizzas.slice(0, 6)
  const pizzasSecondHalf = pizzas.slice(6, 12)
  const centerPizza = pizzas[12]

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      {/* Hero Pizza Image spanning full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative mb-0 h-96 w-full overflow-hidden rounded-t-lg"
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

      {/* Pizza Section - Two Column Layout */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
        className="overflow-hidden rounded-b-lg border-t-0 border border-primary/20 bg-card/40 backdrop-blur pb-8 pt-8"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="px-6 md:px-8 mb-8">
          <h2 className="font-serif text-4xl text-primary md:text-5xl">
            Pizzas Napolitaines
          </h2>
          <div className="mt-3 h-1 w-16 bg-gradient-to-r from-primary to-primary/30" />
        </motion.div>

        {/* Two Column Grid for Pizzas */}
        <motion.div
          className="grid grid-cols-1 gap-8 px-6 md:grid-cols-2 md:px-8"
          variants={containerVariants}
        >
          {/* Left Column */}
          <div className="space-y-6">
            {pizzasFirstHalf.map((item) => (
              <motion.div key={item.name} variants={itemVariants} className="group">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-lg text-foreground transition-colors group-hover:text-primary md:text-xl">
                    {item.name}
                  </h3>
                  <span className="whitespace-nowrap font-serif text-lg italic text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed md:text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {pizzasSecondHalf.map((item) => (
              <motion.div key={item.name} variants={itemVariants} className="group">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-lg text-foreground transition-colors group-hover:text-primary md:text-xl">
                    {item.name}
                  </h3>
                  <span className="whitespace-nowrap font-serif text-lg italic text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed md:text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Center Pizza - Signature Item */}
        {centerPizza && (
          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center px-6 md:px-8"
          >
            <div className="group max-w-xs text-center">
              <h3 className="font-serif text-xl text-foreground transition-colors group-hover:text-primary md:text-2xl">
                {centerPizza.name}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed md:text-sm">
                {centerPizza.description}
              </p>
              <span className="mt-3 block font-serif text-lg italic text-primary">
                {centerPizza.price}
              </span>
            </div>
          </motion.div>
        )}
      </motion.section>

      {/* Other Categories */}
      <div className="space-y-20 mt-20">
        {otherCategories.map((category, categoryIdx) => (
          <motion.section
            key={category.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="overflow-hidden rounded-lg border border-primary/20 bg-card/40 backdrop-blur"
          >
            {/* Category Header with Image */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Image */}
              <motion.div
                variants={itemVariants}
                className="relative h-56 overflow-hidden md:h-full md:min-h-96"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
              </motion.div>

              {/* Title and Items */}
              <div className="flex flex-col justify-start gap-8 p-6 md:p-8">
                <motion.div variants={itemVariants}>
                  <h2 className="font-serif text-4xl text-primary md:text-5xl">
                    {category.title}
                  </h2>
                  <div className="mt-3 h-1 w-16 bg-gradient-to-r from-primary to-primary/30" />
                </motion.div>

                {/* Items Grid */}
                <motion.div className="space-y-4" variants={containerVariants}>
                  {category.items.slice(0, 5).map((item) => (
                    <motion.div key={item.name} variants={itemVariants} className="group">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-serif text-lg text-foreground transition-colors group-hover:text-primary md:text-xl">
                          {item.name}
                        </h3>
                        <span className="whitespace-nowrap font-serif text-lg italic text-primary">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed md:text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Extended Items (if more than 5) */}
            {category.items.length > 5 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={containerVariants}
                className="border-t border-primary/10 px-6 py-8 md:px-8"
              >
                <motion.div className="space-y-4" variants={containerVariants}>
                  {category.items.slice(5).map((item) => (
                    <motion.div key={item.name} variants={itemVariants} className="group">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-serif text-lg text-foreground transition-colors group-hover:text-primary md:text-xl">
                          {item.name}
                        </h3>
                        <span className="whitespace-nowrap font-serif text-lg italic text-primary">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed md:text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  )
}
