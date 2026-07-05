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
        description: "Mozzarella, jambon, roquette, huile d'olive.",
      },
      {
        name: "Panuozzo Vegetariano",
        price: "7€",
        description:
          "Mozzarella, aubergines, courgettes, poivrons, champignons frais, roquette.",
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
          "Choix : Thon (œuf en option), Jambon de dinde fumé, Poulet pané. Avec crudités au choix et sauces maison.",
      },
      {
        name: "Supplément Champignons",
        price: "+1,50€",
        description: "Champignons frais supplémentaires",
      },
      {
        name: "Supplément Burrata",
        price: "+3,00€",
        description: "Fromage burrata crémeux",
      },
      {
        name: "Supplément Œuf",
        price: "+1,50€",
        description: "Œuf supplémentaire",
      },
      {
        name: "Supplément Mozzarella",
        price: "+1,50€",
        description: "Mozzarella fraîche supplémentaire",
      },
    ],
  },
  {
    title: "Boissons",
    image: "/images/menu-drinks.png",
    items: [
      {
        name: "Boisson fraîche",
        price: "1,50€",
        description: "33 cl",
      },
      {
        name: "Bouteille d'eau",
        price: "1,00€",
        description: "50 cl",
      },
      {
        name: "Café",
        price: "2,00€",
        description: "Espresso ou allongé",
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
        description: "Préparation traditionnelle",
      },
      {
        name: "Cookie",
        price: "3,50€",
        description: "Gourmand et croustillant",
      },
      {
        name: "Mini Pizza Nutella",
        price: "5,50€",
        description: "La touche sucrée",
      },
      {
        name: "Mini Pizza Nutella & Pistache",
        price: "6,50€",
        description: "La spécialité de la maison",
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function FullMenu() {
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

      {MENU_DATA.map((category, categoryIdx) => (
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
              viewport={{ once: true, margin: "-60px" }}
              variants={containerVariants}
              className="border-t border-primary/20 px-6 py-8 md:px-8"
            >
              <motion.div className="space-y-4" variants={containerVariants}>
                {category.items.slice(5).map((item) => (
                  <motion.div key={item.name} variants={itemVariants} className="group">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-lg text-foreground transition-colors group-hover:text-primary">
                        {item.name}
                      </h3>
                      <span className="whitespace-nowrap font-serif text-lg italic text-primary">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
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
  )
}
