"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { BookOpen, Target, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
    { icon: BookOpen, value: "400+", label: "Research", color: "cyan" },
    { icon: Target, value: "50+", label: "Tactics", color: "lavender" },
    { icon: TrendingUp, value: "4", label: "Frameworks", color: "yellow" },
    { icon: Users, value: "10K+", label: "Readers", color: "green" },
]

export function MidCTA() {
    const scrollToSection = (id: string) => {
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section className="py-[var(--spacing-section)] relative overflow-hidden bg-transparent">
            <Container size="lg">
                <motion.div
                    className="relative z-10 card-zen p-[var(--spacing-card-lg)] overflow-hidden border border-white/60 bg-white/60 backdrop-blur-3xl shadow-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Subtle light leak */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

                    <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
                        {/* Left: Copy */}
                        <div className="text-left">
                            <h2 className="section-title text-gray-900 mb-4 tracking-tight font-bold">
                                Not Just a Book. <br />An <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Operating System</span>.
                            </h2>
                            <p className="text-[length:var(--font-size-h3)] text-gray-600 mb-6 leading-relaxed font-medium">
                                Outlive shifts the focus from lifespan to healthspan.
                                It's about adding life to your years, not just years to your life.
                            </p>
                            <Button
                                size="lg"
                                className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8 py-6 font-semibold text-lg hover-lift shadow-lg hover:shadow-xl"
                                onClick={() => scrollToSection("#guarantee")}
                            >
                                Start Your Journey
                            </Button>
                        </div>

                        {/* Right: Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => {
                                const Icon = stat.icon

                                return (
                                    <motion.div
                                        key={i}
                                        className="bg-white/60 backdrop-blur-md p-[var(--spacing-card)] rounded-2xl border border-white/70 text-center hover:bg-white/80 transition-all duration-500 shadow-sm"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Icon className="w-6 h-6 text-gray-600 mx-auto mb-2" strokeWidth={2} />
                                        <div className="text-2xl font-bold text-gray-800 mb-1 tracking-tight">
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest opacity-80">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
