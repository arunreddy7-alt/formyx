"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"

export default function Hero({ onContact }: { onContact: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen w-full bg-[#050B14] flex flex-col items-center justify-center overflow-hidden">
      
      {/* ============================================================== */}
      {/* DYNAMIC VIDEO BACKGROUND                                       */}
      {/* ============================================================== */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none bg-[#050B14]">
          <video 
             autoPlay 
             loop 
             muted 
             playsInline 
             preload="metadata"
             poster="https://image.mux.com/BF02ixx7qhj8tO2b02tmY5qDdygS2nXS5m1zuPJfGmDko/thumbnail.jpg"
             className="object-cover w-full h-full opacity-70 scale-105"
          >
              <source src="https://stream.mux.com/BF02ixx7qhj8tO2b02tmY5qDdygS2nXS5m1zuPJfGmDko/high.mp4" type="video/mp4" />
          </video>
          {/* Subtle noise and darkening overlay to make text pop */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
      </div>

      
      
      {/* ============================================================== */}
      {/* FOREGROUND CENTRAL TYPOGRAPHY                                  */}
      {/* ============================================================== */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center pt-20 w-full">
        
        {/* Massive Center-Aligned Text */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center font-black tracking-[-0.03em] leading-[0.9] text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[115px] text-[#F5F5F0] drop-shadow-2xl w-full"
        >
            <span className="whitespace-normal break-words max-w-full">INTELLIGENT</span>
            <span className="whitespace-normal break-words max-w-full">SOLUTIONS <span className="font-light">-</span> FOR</span>
            <span className="whitespace-normal break-words max-w-full">EFFORTLESS</span>
            <span className="whitespace-normal break-words max-w-full">GROWTH</span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-12 sm:mt-16 mb-8 sm:mb-10 max-w-xl text-sm sm:text-lg text-white/70 font-medium leading-relaxed text-center drop-shadow-md px-4"
        >
          We help businesses grow faster, scale smarter, and reach wider audiences
          through responsive AI automation and Gen AI solutions.
        </motion.p>

        {/* Contact CTA */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
           className="pointer-events-auto"
        >
          <Button
            size="lg"
            className="rounded-full px-10 py-6 sm:py-7 text-sm font-semibold tracking-wide text-[#050B14] bg-[#F5F5F0] hover:bg-white hover:scale-105 transition-all shadow-xl pointer-events-auto cursor-pointer"
            onClick={onContact}
          >
            Start a Project
          </Button>
        </motion.div>
        
      </div>

    </section>
  )
}
