"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/layout/container"
import { GraduationCap, Stethoscope, Award, BookOpen } from "lucide-react"

export function AuthorSection() {
  return (
    <section id="author" className="py-12 lg:py-16 relative bg-transparent">
      <Container size="lg">
        <motion.div
          className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-cyan-100/30 rounded-full blur-3xl opacity-60 scale-110" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-100/40">
              <Image
                src="/author.webp"
                alt="Dr. Peter Attia"
                width={600}
                height={700}
                className="w-full h-auto object-cover grayscale opacity-100 transition-all duration-700 hover:grayscale-0"
              />
            </div>

            {/* Credential Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-white/90 backdrop-blur-xl border border-white/60 p-5 rounded-2xl shadow-lg border-t border-white animate-float">
              <div className="flex items-center gap-4">
                <div className="bg-cyan-50 p-3 rounded-xl border border-cyan-100/50">
                  <Stethoscope className="w-5 h-5 text-cyan-600" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Founded</p>
                  <p className="font-heading font-bold text-gray-800 text-lg">Early Medical</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-bold text-gray-500 tracking-widest uppercase mb-4">
              The Mind Behind The Method
            </span>
            <h2 className="section-title text-gray-900 mb-6 tracking-tight font-bold">
              Peter Attia, MD
            </h2>

            <div className="prose prose-lg text-gray-600 font-medium mb-8 leading-relaxed">
              <p className="mb-4">
                Dr. Peter Attia is the founder of Early Medical, a medical practice that applies the principles of Medicine 3.0 to lengthen lifespan and simultaneously improve healthspan.
              </p>
              <p>
                Host of <strong>The Drive</strong>, one of the most respected podcasts in health, medicine, and longevity.
              </p>
            </div>

            {/* Stats / Credentials Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 border border-white/60 hover:bg-white/80 transition-all shadow-sm backdrop-blur-md">
                <GraduationCap className="w-5 h-5 text-gray-400 mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-heading font-bold text-gray-800">Stanford</h4>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest opacity-80">M.D. Degree</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 border border-white/60 hover:bg-white/80 transition-all shadow-sm backdrop-blur-md">
                <Award className="w-5 h-5 text-gray-400 mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-heading font-bold text-gray-800">Johns Hopkins</h4>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest opacity-80">Surgery Fellow</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 border border-white/60 hover:bg-white/80 transition-all shadow-sm backdrop-blur-md">
                <BookOpen className="w-5 h-5 text-gray-400 mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-heading font-bold text-gray-800">#1 Bestseller</h4>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest opacity-80">NYT & Der Spiegel</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
