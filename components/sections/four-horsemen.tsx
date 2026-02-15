"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { HeartPulse, Microscope, Brain, Activity } from "lucide-react"

const horsemen = [
  {
    icon: HeartPulse,
    title: "Cardiovascular Disease",
    subtitle: "Atherosclerosis",
    stat: "#1",
    statLabel: "Global Killer",
    description: "Heart disease develops silently for decades before the first heart attack. We can screen and reverse it early.",
    color: "pink",
  },
  {
    icon: Activity,
    title: "Metabolic Dysfunction",
    subtitle: "Insulin Resistance",
    stat: "High",
    statLabel: "Root Cause",
    description: "Insulin resistance is the driver of almost all chronic disease. Fixing your metabolism is the most important step.",
    color: "cyan",
  },
  {
    icon: Brain,
    title: "Neurodegenerative",
    subtitle: "Alzheimer's",
    stat: "Zero",
    statLabel: "Effective Cures",
    description: "Once neurons are lost, they are gone forever. Protection must begin 20 years before symptoms appear.",
    color: "lavender",
  },
  {
    icon: Microscope,
    title: "Cancer",
    subtitle: "Unchecked Growth",
    stat: "Early",
    statLabel: "Detection Key",
    description: "Cancer is a metabolic disease as much as a genetic one. Learn the aggressive screening standard medicine skips.",
    color: "yellow",
  },
]

export function FourHorsemen() {
  return (
    <section id="four-horsemen" className="py-[var(--spacing-section)] bg-transparent relative">
      <Container size="lg">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-bold text-gray-500 tracking-widest uppercase mb-3">
            Know The Enemy
          </span>
          <h2 className="section-title text-gray-900 tracking-tight leading-snug font-bold">
            The Four Horsemen <span className="text-cyan-500 font-light italic">of Death</span>
          </h2>
        </motion.div>

        {/* Separate Cards Grid (Simplified Layout) */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 relative z-10">
          {horsemen.map((item, i) => {
            const Icon = item.icon
            let accentColor = "text-pink-500"
            if (item.color === "cyan") accentColor = "text-cyan-500"
            if (item.color === "lavender") accentColor = "text-indigo-500"
            if (item.color === "yellow") accentColor = "text-yellow-600"

            return (
              <motion.div
                key={item.title}
                className="card-zen p-[var(--spacing-card)] flex gap-5 hover-lift border border-white/60 bg-white/60 backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/70 shadow-sm backdrop-blur-sm border border-white/50 shrink-0`}>
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 ${accentColor}`} strokeWidth={2} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-heading text-lg font-bold text-gray-800 tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full bg-white/50 border border-white/60 uppercase tracking-widest ml-2 whitespace-nowrap ${accentColor}`}>
                      {item.stat}
                    </span>
                  </div>

                  <p className="text-[10px] text-gray-500 mb-2 font-semibold uppercase tracking-widest opacity-70">
                    {item.subtitle}
                  </p>

                  <p className="text-gray-600 text-[length:var(--font-size-p)] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
