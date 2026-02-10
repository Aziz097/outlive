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
    <section id="four-horsemen" className="py-12 lg:py-16 bg-transparent relative">
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

        <div className="grid sm:grid-cols-2 gap-6 relative z-10">
          {horsemen.map((item, i) => {
            const Icon = item.icon
            let accentColor = "text-pink-500"
            if (item.color === "cyan") accentColor = "text-cyan-500"
            if (item.color === "lavender") accentColor = "text-indigo-500"
            if (item.color === "yellow") accentColor = "text-yellow-600"

            return (
              <motion.div
                key={item.title}
                className="card-zen p-8 hover-lift border border-white/60 bg-white/60 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/70 shadow-sm backdrop-blur-sm border border-white/50`}>
                    <Icon className={`w-6 h-6 ${accentColor}`} strokeWidth={2} />
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-heading font-bold text-gray-700`}>{item.stat}</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider opacity-80">{item.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-800 mb-1 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[10px] text-gray-500 mb-3 font-semibold uppercase tracking-widest opacity-70">{item.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
