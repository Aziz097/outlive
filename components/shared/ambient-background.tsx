"use client"

import { motion } from "framer-motion"

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-white">
      {/* Aurora Mesh Gradient - Fullscreen */}

      {/* Cyan/Teal (Top Left) */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[120vw] h-[120vh] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
        style={{ background: "#AEEEEE" }}
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Lavender/Pink (Top Right) */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[100vw] h-[100vh] rounded-full blur-[120px] opacity-35 mix-blend-multiply"
        style={{ background: "#F8D7DA" }}
        animate={{
          x: [40, -40, 40],
          y: [20, -20, 20],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Yellow/Gold (Bottom Left) */}
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 w-[110vw] h-[100vh] rounded-full blur-[110px] opacity-30 mix-blend-multiply"
        style={{ background: "#FFFACD" }}
        animate={{
          x: [-30, 30, -30],
          y: [40, -40, 40],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Green/Mint (Bottom Right) */}
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[100vw] h-[120vh] rounded-full blur-[130px] opacity-25 mix-blend-multiply"
        style={{ background: "#E2F0CB" }}
        animate={{
          x: [20, -20, 20],
          y: [-50, 50, -50],
          scale: [1.05, 1, 1.05],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Overlay noise to reduce banding */}

    </div>
  )
}
