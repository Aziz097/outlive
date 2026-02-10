"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 origin-left z-[100] bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 opacity-80"
            style={{ scaleX }}
        />
    )
}
