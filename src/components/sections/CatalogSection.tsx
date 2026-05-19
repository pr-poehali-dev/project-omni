import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Droplets, Sun, Thermometer, ShoppingCart } from "lucide-react"
import Icon from "@/components/ui/icon"

const plants = [
  {
    id: 1,
    name: "Монстера делициоза",
    latin: "Monstera deliciosa",
    price: 2490,
    size: "60–80 см",
    image: "https://cdn.poehali.dev/projects/c029dddb-9b51-4061-b355-d288dea2b92f/files/059886f3-bf6c-4b93-98d3-32901ab8e205.jpg",
    badge: "Хит",
    description: "Икона тропического стиля. Крупные резные листья с характерными прорезями создают эффектный акцент в любом интерьере. Растёт быстро и неприхотлива в уходе.",
    care: {
      water: "Раз в 7–10 дней",
      light: "Яркий рассеянный свет",
      temp: "18–26 °C",
    },
    tags: ["Тропические", "Крупные"],
  },
  {
    id: 2,
    name: "Фикус лирата",
    latin: "Ficus lyrata",
    price: 3900,
    size: "80–100 см",
    image: "https://cdn.poehali.dev/projects/c029dddb-9b51-4061-b355-d288dea2b92f/files/38819022-6b54-4a81-a460-cb1bd2630a25.jpg",
    badge: "Премиум",
    description: "Дизайнерский любимец, украшающий обложки интерьерных журналов. Огромные скрипковидные листья с выраженными прожилками. Требует постоянного места — не любит переездов.",
    care: {
      water: "Раз в 5–7 дней",
      light: "Яркий непрямой свет",
      temp: "18–24 °C",
    },
    tags: ["Деревья", "Крупные"],
  },
  {
    id: 3,
    name: "Орхидея фаленопсис",
    latin: "Phalaenopsis",
    price: 1290,
    size: "30–50 см",
    image: "https://cdn.poehali.dev/projects/c029dddb-9b51-4061-b355-d288dea2b92f/files/99e93b16-3fa3-4337-9e4e-fd2d781ba9f1.jpg",
    badge: "Цветущая",
    description: "Царица подоконников. Цветёт 2–3 месяца, после отдыха зацветает снова. Элегантна и неприхотлива — идеальный подарок и украшение любой комнаты.",
    care: {
      water: "Раз в 10–14 дней",
      light: "Рассеянный свет",
      temp: "20–28 °C",
    },
    tags: ["Цветущие", "Компактные"],
  },
  {
    id: 4,
    name: "Сансевиерия",
    latin: "Sansevieria trifasciata",
    price: 890,
    size: "40–60 см",
    image: "https://cdn.poehali.dev/projects/c029dddb-9b51-4061-b355-d288dea2b92f/files/357b42ed-2374-4f0a-b0c1-9e4e19073642.jpg",
    badge: "Неприхотливая",
    description: "«Тёщин язык» — живёт вопреки всему. Выдерживает редкий полив, сухой воздух и слабое освещение. Очищает воздух и выделяет кислород даже ночью. Идеальна для новичков.",
    care: {
      water: "Раз в 2–4 недели",
      light: "Любое освещение",
      temp: "15–30 °C",
    },
    tags: ["Для новичков", "Компактные"],
  },
  {
    id: 5,
    name: "Потос (эпипремнум)",
    latin: "Epipremnum aureum",
    price: 690,
    size: "Ампельный",
    image: "https://cdn.poehali.dev/projects/c029dddb-9b51-4061-b355-d288dea2b92f/files/5b251b03-c575-4994-9666-6d7258d1785b.jpg",
    badge: "Ампельный",
    description: "Вьющийся красавец с сердцевидными листьями. Отлично смотрится в подвесных кашпо и на высоких полках. Быстро растёт, легко размножается. Выдерживает тень и забывчивость в поливе.",
    care: {
      water: "Раз в 7–10 дней",
      light: "Полутень или свет",
      temp: "16–24 °C",
    },
    tags: ["Ампельные", "Для новичков"],
  },
  {
    id: 6,
    name: "Суккуленты микс",
    latin: "Succulent mix",
    price: 490,
    size: "10–15 см",
    image: "https://cdn.poehali.dev/projects/c029dddb-9b51-4061-b355-d288dea2b92f/files/c643a704-fc8d-4951-941e-8d8f61922fef.jpg",
    badge: "Набор",
    description: "Набор из 3 разных суккулентов в стильных бетонных горшочках. Запасают воду в листьях и почти не требуют ухода. Отличный подарок и оформление рабочего стола.",
    care: {
      water: "Раз в 2–3 недели",
      light: "Яркий прямой свет",
      temp: "15–30 °C",
    },
    tags: ["Суккуленты", "Компактные"],
  },
]

const badgeColors: Record<string, string> = {
  "Хит": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Премиум": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Цветущая": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "Неприхотливая": "bg-green-500/20 text-green-400 border-green-500/30",
  "Ампельный": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Набор": "bg-orange-500/20 text-orange-400 border-orange-500/30",
}

export function CatalogSection() {
  const [selected, setSelected] = useState<typeof plants[0] | null>(null)

  return (
    <section id="catalog" className="px-6 py-24 bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Каталог</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Популярные растения
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance">
            Каждое растение выращено в питомнике и готово к переезду в ваш дом.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {plants.map((plant, i) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setSelected(plant)}
              className="group cursor-pointer rounded-2xl border border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/70 hover:bg-zinc-900/80 transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full border ${badgeColors[plant.badge]}`}>
                  {plant.badge}
                </span>
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="font-heading font-semibold text-zinc-100 text-base">{plant.name}</h3>
                  <p className="text-xs text-zinc-500 italic mt-0.5">{plant.latin}</p>
                </div>
                <p className="text-sm text-zinc-500 line-clamp-2 mb-4">{plant.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-zinc-100">
                    {plant.price.toLocaleString("ru-RU")} ₽
                  </span>
                  <span className="text-xs text-zinc-600">{plant.size}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full overflow-hidden pointer-events-auto shadow-2xl">
                <div className="relative h-60">
                  <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-950/60 flex items-center justify-center hover:bg-zinc-950 transition-colors"
                  >
                    <X className="w-4 h-4 text-zinc-300" />
                  </button>
                  <span className={`absolute bottom-4 left-4 text-xs font-medium px-2.5 py-1 rounded-full border ${badgeColors[selected.badge]}`}>
                    {selected.badge}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-heading font-bold text-zinc-100 text-xl">{selected.name}</h3>
                    <p className="text-sm text-zinc-500 italic">{selected.latin} · {selected.size}</p>
                  </div>
                  <p className="text-zinc-400 text-sm mb-5 leading-relaxed">{selected.description}</p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-zinc-800/50 rounded-xl p-3 flex flex-col items-center gap-1.5">
                      <Droplets className="w-4 h-4 text-blue-400" />
                      <span className="text-xs text-zinc-500 text-center leading-tight">{selected.care.water}</span>
                    </div>
                    <div className="bg-zinc-800/50 rounded-xl p-3 flex flex-col items-center gap-1.5">
                      <Sun className="w-4 h-4 text-yellow-400" />
                      <span className="text-xs text-zinc-500 text-center leading-tight">{selected.care.light}</span>
                    </div>
                    <div className="bg-zinc-800/50 rounded-xl p-3 flex flex-col items-center gap-1.5">
                      <Thermometer className="w-4 h-4 text-red-400" />
                      <span className="text-xs text-zinc-500 text-center leading-tight">{selected.care.temp}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-zinc-100">
                      {selected.price.toLocaleString("ru-RU")} ₽
                    </span>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 text-zinc-900 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
