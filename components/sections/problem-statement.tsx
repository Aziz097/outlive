"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { AlertTriangle, Clock, TrendingDown } from "lucide-react"

const issues = [
  {
    icon: AlertTriangle,
    title: "Medicine 2.0 is Broken",
    description: "Modern healthcare waits for you to break before fixing you. This reactive model is obsolete for longevity.",
    color: "pink",
  },
  {
    icon: Clock,
    title: "Healthspan > Lifespan",
    description: "Living longer means nothing if the last decade is spent in decline. We must square the longevity curve.",
    color: "cyan",
  },
  {
    icon: TrendingDown,
    title: "The Silent Creep",
    description: "Heart disease and cancer begin decades before symptoms appear. You need early, aggressive intervention.",
    color: "yellow",
  },
]

export function ProblemStatement() {
  return (
    <section id="problem" className="py-[var(--spacing-section)] bg-transparent relative">
      <Container size="lg">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-bold text-gray-500 tracking-widest uppercase mb-3">
            The Reality Check
          </span>
          <h2 className="section-title text-gray-900 tracking-tight leading-snug font-bold">
            Why Standard Care <span className="text-pink-500 font-light italic">Fails You</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {issues.map((issue, i) => {
            const Icon = issue.icon
            let iconColor = "text-pink-500"

            if (issue.color === "cyan") iconColor = "text-cyan-500"
            if (issue.color === "yellow") iconColor = "text-yellow-600"

            return (
              <motion.div
                key={issue.title}
                className="card-zen p-[var(--spacing-card)] hover-lift border border-white/60 bg-white/60 backdrop-blur-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-3 relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm shadow-sm border border-white/50 shrink-0`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} strokeWidth={2} />
                  </div>
                  <h3 className="font-heading text-[length:var(--font-size-h3)] font-bold text-gray-800 tracking-tight mb-0">
                    {issue.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-[length:var(--font-size-p)] font-medium leading-relaxed relative z-10">
                  {issue.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
