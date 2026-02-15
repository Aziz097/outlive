"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { AmbientBackground } from "@/components/shared/ambient-background"
import { ShieldCheck, ChevronRight, Star } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden py-[var(--spacing-section)]">
      <AmbientBackground />

      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">

          {/* Content Column */}
          <motion.div
            className="flex flex-col gap-6 max-w-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Soft Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/70 backdrop-blur-md border border-gray-200 text-gray-700 shadow-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              #1 New York Times Bestseller
            </div>

            {/* Headline - NEW Title unrelated to book title exactly */}
            <h1 className="hero-headline text-gray-900 leading-[1.1] tracking-tight drop-shadow-sm font-bold">
              The Operating System for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-700">Longer Life</span>
            </h1>

            {/* Subtitle - Darker Gray */}
            <p className="section-subtitle text-[length:var(--font-size-h3)] text-gray-700 font-medium leading-relaxed max-w-md">
              Stop managing disease. Start engineering your health.
              A comprehensive strategy to live better, not just longer.
            </p>

            {/* Pricing & CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-5 mt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gray-900 text-white hover:bg-gray-800 transition-all rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold"
                onClick={() => scrollToSection("#guarantee")}
              >
                Start Reading — $9.99
                <ChevronRight className="w-4 h-4 ml-2 opacity-90" />
              </Button>

              <div className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                <span className="line-through decoration-red-400 decoration-2 opacity-60">$17.99</span>
                <span className="text-teal-700 bg-teal-100/50 border border-teal-100 px-2 py-0.5 rounded-md">Save 45%</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2 opacity-80">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm text-gray-700 font-medium">4.9/5 Average Rating</span>
            </div>
          </motion.div>

          {/* Image Column - Soft & Ethereal */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Soft Aura Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200 via-white to-pink-200 blur-3xl opacity-60 scale-110 rounded-full transition-opacity duration-1000 group-hover:opacity-80" />

              <Image
                src="/book_cover.webp"
                alt="Outlive Book Cover"
                width={420}
                height={580}
                priority
                className="relative z-10 rounded-xl shadow-2xl shadow-gray-200/50 transform transition-transform duration-700 hover:-translate-y-2 hover:rotate-1"
              />

              {/* Floating Glass Pill */}
              <div className="absolute -bottom-8 -left-8 z-20 bg-white/80 backdrop-blur-xl border border-white/60 p-4 rounded-2xl flex items-center gap-4 shadow-lg animate-float">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-full flex items-center justify-center text-cyan-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Strategy</p>
                  <p className="font-heading font-semibold text-gray-800">Medicine 3.0</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
