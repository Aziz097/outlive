"use client"

import { Container } from "@/components/layout/container"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 relative bg-transparent border-t border-gray-100/50">
      <Container size="sm">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <p className="text-gray-400 text-xs font-light tracking-wide">
            © {currentYear} Outlive Guide. Educational purpose only. Not medical advice.
          </p>
          <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
            Designed for Longevity
          </p>
        </div>
      </Container>
    </footer>
  )
}
