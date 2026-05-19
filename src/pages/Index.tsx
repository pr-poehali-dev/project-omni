import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { CatalogSection } from "@/components/sections/CatalogSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { CtaSection } from "@/components/sections/CtaSection"
import { FooterSection } from "@/components/sections/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CatalogSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default Index