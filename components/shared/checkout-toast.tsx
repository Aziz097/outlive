"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingCart, ExternalLink, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CheckoutToast() {
    const [isVisible, setIsVisible] = useState(true)
    const [isClosed, setIsClosed] = useState(false)

    // Handle reappear logic
    useEffect(() => {
        let timer: NodeJS.Timeout

        if (isClosed) {
            timer = setTimeout(() => {
                setIsVisible(true)
                setIsClosed(false)
            }, 45000) // 45 seconds
        }

        return () => clearTimeout(timer)
    }, [isClosed])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 z-50 left-0 right-0 mx-auto md:mx-0 md:left-6 md:right-auto w-[90%] max-w-sm"
                >
                    <div className="relative bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl shadow-cyan-900/10 rounded-2xl p-4 overflow-hidden">
                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setIsVisible(false)
                                setIsClosed(true)
                            }}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                            aria-label="Close"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 bg-gradient-to-br from-cyan-100 to-blue-50 p-2 rounded-xl shadow-sm border border-cyan-50/50 hidden sm:block">
                                <CreditCard className="w-5 h-5 text-cyan-600" />
                            </div>
                            <div className="flex-1 pr-4">
                                <h4 className="text-sm font-bold text-gray-800 mb-0.5 leading-tight">
                                    Ready to start?
                                </h4>
                                <p className="text-[11px] text-gray-500 font-medium mb-3 leading-tight">
                                    Get the complete 15-page summary & guide.
                                </p>

                                <div className="grid grid-cols-2 gap-2">
                                    <Button
                                        size="sm"
                                        className="h-8 text-xs font-bold bg-gray-900 text-white hover:bg-gray-800 shadow-md rounded-lg"
                                        onClick={() => window.open("https://gumroad.com", "_blank")}
                                    >
                                        <ShoppingCart className="w-3 h-3 mr-1.5 opacity-90" />
                                        Gumroad
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-8 text-xs font-bold border-orange-200 text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-lg"
                                        onClick={() => window.open("https://etsy.com", "_blank")}
                                    >
                                        <ExternalLink className="w-3 h-3 mr-1.5 opacity-90" />
                                        Etsy
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
