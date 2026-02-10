"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { Dumbbell, Apple, Moon, Heart } from "lucide-react"

const pillars = [
  {
    icon: Dumbbell,
    num: "01",
    title: "Exercise",
    subtitle: "Potent Medicine",
    description: "Zone 2 for mitochondria. VO2 Max for longevity. Strength for independence.",
    color: "cyan",
  },
  {
    icon: Apple,
    num: "02",
    title: "Nutrition",
    subtitle: "Biochemistry",
    description: "Personalized nutrition. Protein synthesis. Glucose stability. Not dieting.",
    color: "yellow",
  },
  {
    icon: Moon,
    num: "03",
    title: "Sleep",
    subtitle: "Recovery",
    description: "Deep sleep cleans the brain. REM sleep stabilizes emotion. Non-negotiable.",
    color: "lavender",
  },
  {
    icon: Heart,
    num: "04",
    title: "Emotion",
    subtitle: "Resilience",
    description: "Suffering is optional. Emotional health determines the quality of your long life.",
    color: "rose",
  },
]

export function LongevityPillars() {
  return (
    <section id="pillars" className="py-12 lg:py-16 bg-transparent relative">
      <Container size="lg">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-bold text-gray-500 tracking-widest uppercase mb-3">
            The Framework
          </span>
          <h2 className="section-title text-gray-900 tracking-tight leading-snug font-bold">
            Medicine 3.0 <span className="text-yellow-500 font-light italic">Pillars</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            let accentColor = "text-cyan-600"
            if (pillar.color === "yellow") accentColor = "text-yellow-600"
            if (pillar.color === "lavender") accentColor = "text-indigo-500"
            if (pillar.color === "rose") accentColor = "text-pink-500"

            return (
              <motion.div
                key={pillar.title}
                className="card-zen p-6 hover-lift overflow-hidden relative border border-white/60 bg-white/60 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Subtle Watermark */}
                <span className="absolute -top-4 -right-2 text-8xl font-heading font-black text-gray-200/50 select-none z-0 rotate-12">
                  {pillar.num}
                </span>

                <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/70 shadow-sm backdrop-blur-sm mb-4 border border-white/50">
                  <Icon className={`w-5 h-5 ${accentColor}`} strokeWidth={2} />
                </div>
                <h3 className="relative z-10 font-heading text-lg font-bold text-gray-800 mb-1 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="relative z-10 text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest opacity-80">
                  {pillar.subtitle}
                </p>
                <p className="relative z-10 text-gray-600 text-sm leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
