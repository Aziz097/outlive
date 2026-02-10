
import { HeroSection } from "@/components/sections/hero"
import { ProblemStatement } from "@/components/sections/problem-statement"
import { FourHorsemen } from "@/components/sections/four-horsemen"
import { LongevityPillars } from "@/components/sections/longevity-pillars"
import { MidCTA } from "@/components/sections/mid-cta"
import { AuthorSection } from "@/components/sections/author"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { GuaranteeSection } from "@/components/sections/guarantee"
import { Footer } from "@/components/sections/footer"
import { ScrollProgress } from "@/components/shared/scroll-progress"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <ProblemStatement />
        <FourHorsemen />
        <LongevityPillars />
        <MidCTA />
        <AuthorSection />
        <TestimonialsSection />
        <GuaranteeSection />
      </main>
      <Footer />
    </>
  )
}
