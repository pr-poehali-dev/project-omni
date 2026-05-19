import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"
import { Leaf, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8">
          <Leaf className="w-4 h-4 text-green-400" />
          <span className="text-sm text-zinc-400">Доставка живых растений по всей России</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-zinc-100 block">Живая природа —</span>
          <span className="bg-gradient-to-r from-green-600 via-green-300 to-green-500 bg-clip-text text-transparent">
            прямо домой.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Более 300 видов комнатных растений с гарантией приживаемости. Подберём, упакуем и доставим — вам останется только поставить на подоконник.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#features">
            <LiquidCtaButton>Смотреть каталог</LiquidCtaButton>
          </a>
          <a
            href="#pricing"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>Условия доставки</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Hero image */}
        <div className="mt-12 mb-4 rounded-2xl overflow-hidden border border-zinc-800/50 max-w-2xl mx-auto shadow-2xl">
          <img
            src="https://cdn.poehali.dev/projects/c029dddb-9b51-4061-b355-d288dea2b92f/files/2ba124ba-a9a9-4bca-a493-f289888b7d09.jpg"
            alt="Комнатные растения"
            className="w-full object-cover max-h-72"
          />
        </div>

        {/* Social proof */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="Покупатель"
                className="w-10 h-10 rounded-full border-2 border-zinc-950 hover:-translate-y-1 transition object-cover z-[1]"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="Покупатель"
                className="w-10 h-10 rounded-full border-2 border-zinc-950 hover:-translate-y-1 transition object-cover z-[2]"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
                alt="Покупатель"
                className="w-10 h-10 rounded-full border-2 border-zinc-950 hover:-translate-y-1 transition object-cover z-[3]"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                alt="Покупатель"
                className="w-10 h-10 rounded-full border-2 border-zinc-950 hover:-translate-y-1 transition object-cover z-[4]"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="Покупатель"
                className="w-10 h-10 rounded-full border-2 border-zinc-950 hover:-translate-y-1 transition object-cover z-[5]"
              />
            </div>
            <div className="h-8 w-px bg-zinc-800" />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FACC15"
                    stroke="#FACC15"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                ))}
                <span className="text-zinc-400 font-medium ml-1 text-sm">4.9</span>
              </div>
              <p className="text-sm text-zinc-500">
                Нам доверяют <span className="text-zinc-300 font-medium">5 000+</span> покупателей
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}