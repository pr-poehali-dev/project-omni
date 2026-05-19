import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Заказала монстеру — приехала огромная, красивая и абсолютно здоровая. Упаковка просто супер, ни один листочек не пострадал!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Анна Смирнова",
    role: "Москва",
  },
  {
    text: "Долго искал редкий фикус лирата — нашёл только здесь. Привезли быстро, вместе с инструкцией по уходу. Растение прижилось отлично.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Максим Волков",
    role: "Санкт-Петербург",
  },
  {
    text: "Беру растения только здесь уже второй год. Качество всегда на высоте, а поддержка помогает подобрать то, что подойдёт именно моей квартире.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Елена Козлова",
    role: "Екатеринбург",
  },
  {
    text: "Орхидея цветёт уже третий раз — и это после доставки! Думала, не выживет в дороге, но всё обошлось. Очень благодарна.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Светлана Парк",
    role: "Казань",
  },
  {
    text: "Подарил жене букет суккулентов в горшочках — она в восторге. Оригинально, живое и уже несколько месяцев радует глаз.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Алексей Иванов",
    role: "Новосибирск",
  },
  {
    text: "Когда пальма через неделю начала желтеть, написала в поддержку — мне тут же помогли разобраться с поливом. Сервис на пятёрку!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Ирина Белова",
    role: "Краснодар",
  },
  {
    text: "Оформила офис растениями из этого магазина. Всё приехало живым и красивым. Сотрудники довольны, атмосфера стала намного уютнее.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Наталья Фёдорова",
    role: "HR-директор, Москва",
  },
  {
    text: "Заказываю сюда уже пятый раз. Ассортимент огромный, цены честные, доставка быстрая. Лучший цветочный онлайн-магазин из всех, что пробовала.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Дарья Чен",
    role: "Ростов-на-Дону",
  },
  {
    text: "Кактус доехал в идеальном состоянии, хотя я переживала. Грамотная упаковка, вежливый курьер и ещё бонусный пакетик с удобрением!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Ольга Ким",
    role: "Воронеж",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["Roommy", "Houzz", "Живой Уголок", "GreenLife", "Садовый мир", "Интерьер+"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Отзывы</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Что говорят наши покупатели
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Более 5 000 довольных клиентов по всей России.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Нас упоминали в</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}