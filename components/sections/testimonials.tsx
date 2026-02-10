"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote: "This book completely changed my paradigm on health. It's not just theory—I implemented the Zone 2 training and protein protocols immediately.",
        name: "Michael R.",
        role: "Software Executive, 42",
        initials: "MR",
        color: "cyan",
    },
    {
        quote: "Finally, a roadmap that makes sense. The section on cognitive decline was terrifying but empowering. I'm now taking proactive steps for brain health.",
        name: "Sarah Jenkins",
        role: "Attorney, San Francisco",
        initials: "SJ",
        color: "lavender",
    },
    {
        quote: "The best $29 I've spent on my health. The framework for emotional health was the missing piece for me. Highly recommended for any high performer.",
        name: "David Chen",
        role: "Founder, Austin TX",
        initials: "DC",
        color: "yellow",
    },
]

export function TestimonialsSection() {
    return (
        <section className="py-16 relative bg-transparent">
            <Container size="lg">
                <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <motion.span
                            className="inline-block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Social Proof
                        </motion.span>

                        <motion.h2
                            className="section-title text-gray-900 tracking-tight font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Trust The <span className="font-light italic text-cyan-600">Process</span>
                        </motion.h2>
                    </div>

                    {/* Testimonial Cards */}
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {testimonials.map((testimonial, index) => {

                            return (
                                <motion.div
                                    key={testimonial.name}
                                    className="card-zen p-8 hover-lift border border-white/60 bg-white/60 backdrop-blur-md"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <Quote className="w-5 h-5 text-gray-300 mb-6 -scale-x-100 fill-gray-200" strokeWidth={1} />

                                    <p className="text-gray-700 font-medium leading-relaxed mb-6 min-h-[80px] text-sm">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>

                                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100/50">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white shadow-sm font-bold text-xs text-gray-500 border border-gray-100`}>
                                            {testimonial.initials}
                                        </div>
                                        <div>
                                            <p className="font-heading text-sm font-bold text-gray-800">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    )
}
