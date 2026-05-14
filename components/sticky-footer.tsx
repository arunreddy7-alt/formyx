"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Linkedin, Twitter } from "lucide-react"

export function StickyFooter() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100
          setIsAtBottom(isNearBottom)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.div
          className="fixed bottom-0 left-0 z-50 h-64 sm:h-80 w-full"
          style={{ backgroundColor: "#3F0071" }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="relative h-full w-full overflow-hidden px-6 sm:px-12 py-6 sm:py-12">
            
            {/* Brand Mark */}
            <motion.h2
              className="
                absolute
                bottom-0 left-0
                translate-y-1/4 sm:translate-y-1/3
                select-none
                font-bold
                leading-none
                text-[64px]
                sm:text-[192px]
                text-white
              "
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              FORMYX
            </motion.h2>

            {/* Copyright and Socials */}
            <div
              className="
                absolute
                top-6 right-6
                sm:top-auto sm:bottom-6 sm:right-8
                flex flex-col sm:flex-row items-end sm:items-center gap-4 sm:gap-8
              "
            >
              <div className="flex items-center gap-4 text-white">
                <a href="#" className="hover:text-white/60 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white/60 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white/60 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
              <div className="text-xs sm:text-sm text-white/60 text-right sm:text-left">
                © {new Date().getFullYear()} Formyx Solutions. All rights reserved.
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}