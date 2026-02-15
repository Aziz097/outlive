"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { ShieldCheck, Zap, Lock, FileText, Clock, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "High-Resolution PDF (Mobile Optimized)",
  "Lifetime Access + Updates",
  "Instant Download",
  "30-Day Money Back Guarantee",
]

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-[var(--spacing-section)] relative overflow-hidden bg-transparent">
      {/* Background Ambience */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

      <Container size="lg">
        <motion.div
          className="relative z-10 card-zen p-[var(--spacing-card-lg)] text-center max-w-4xl mx-auto backdrop-blur-3xl bg-white/70 border border-white/60 shadow-2xl shadow-cyan-100/40"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-sm animate-pulse">
            <Zap className="w-3 h-3" />
            Limited Offer
          </div>

          <h2 className="section-title text-gray-900 mb-6 tracking-tight font-bold">
            Invest directly in your <span className="text-cyan-600 font-light italic">Future Self</span>
          </h2>

          <p className="text-[length:var(--font-size-h3)] text-gray-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            The complete Medicine 3.0 strategy guide. A small price for a longer, better life.
          </p>

          {/* Pricing Card Section */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-[var(--spacing-card)] border border-white/80 mb-10 inline-block w-full max-w-sm mx-auto shadow-xl shadow-gray-200/50 transform transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-6xl font-heading font-black text-gray-900 tracking-tighter">$9.99</span>
              <div className="flex flex-col items-start">
                <span className="text-sm text-gray-500 line-through decoration-pink-300 decoration-1">$17.99</span>
                <span className="text-[10px] font-bold text-pink-500 bg-pink-100/50 px-2 py-0.5 rounded-md text-center w-full">SAVE 45%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-8 font-bold uppercase tracking-wide">One-time payment, lifetime access</p>

            <ul className="text-left space-y-3 mb-8 border-t border-dashed border-gray-100 pt-6">
              {features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-bold">
                  <div className="w-5 h-5 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 flex-shrink-0">
                    <ShieldCheck className="w-3 h-3" strokeWidth={3} />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="w-full bg-gray-900 text-white hover:bg-gray-800 h-14 text-lg font-bold rounded-2xl shadow-lg shadow-gray-200 hover:shadow-xl transition-all hover:scale-[1.02]"
                onClick={() => window.open("https://lynk.id/chroniclelabs/2lvgdnn4qr3r", "_blank")}
              >
                <ShoppingCart className="w-4 h-4 mr-2 opacity-90" />
                Get Instant Access
              </Button>
            </div>
          </div>

          {/* Trust Badges - Softer */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs text-gray-500 font-bold uppercase tracking-widest opacity-80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Secure
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              Private
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              Instant
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              24/7
            </div>
          </div>

        </motion.div>
      </Container>
    </section>
  )
}
