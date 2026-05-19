"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SectionSeperator } from "./ui/section-seperator"
import Sseperator from "./ui/seperator"

export default function WhatMakesUsDifferent() {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Map scroll progress to the width of the active progress bar (from 0% to 100%)
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const steps = [
    {
      id: "01",
      title: "Systems That Adapt",
      text: "We don't sell tools. We design systems that respect how your teams already work.",
    },
    {
      id: "02",
      title: "Transparent & Auditable",
      text: "Every workflow is transparent, auditable, and built with human oversight where it matters.",
    },
    {
      id: "03",
      title: "Total Ownership",
      text: "You own the logic, the data, and the future evolution of what we build.",
    },
  ]

  return (
    // CAUTION: Removing overflow-hidden is REQUIRED for position: sticky to work properly in CSS!
    <section ref={containerRef} className="relative bg-[#020005] py-32 -mt-px border-t border-white/5" id="difference">

      {/* Kept your Separators intact */}
      <Sseperator />
      <SectionSeperator badgeText="Our Philosophy" />

      <div className="container mx-auto px-6 max-w-[1400px] mt-24">
        {/* We make the parent relative for the sticky element to track within */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 lg:gap-32 relative items-start">

          {/* Left Column (Sticky) */}
          <div className="md:w-[45%] flex flex-col pt-4 md:sticky md:top-40 z-10 hidden md:flex h-fit">

            {/* Dynamic Progress Bar Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center w-full max-w-sm mb-12 relative"
            >
              {/* Background track line */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
              {/* Active animated line bound to scroll progress */}
              <motion.div
                style={{ width: progressWidth }}
                className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-[#610094] to-[#b255ff] -translate-y-1/2 z-0"
              />

              <div className="w-full flex justify-between z-10 relative">
                {["01", "02", "03"].map((num, i) => (
                  <div key={num} className="bg-[#020005] px-3">
                    <span className={`text-[10px] sm:text-xs font-mono font-bold tracking-widest ${i === 0 ? 'text-[#b255ff]' : 'text-white/40'}`}>
                      {num}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-medium tracking-tight leading-[1] text-white mb-8 pr-12"
            >
              Automation should adapt to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#610094] to-[#b255ff]">
                your business
              </span>
              <br />
              not the other way around
            </motion.h2>
          </div>

          {/* Right Column (Scrolls past) */}
          <div className="md:w-[55%] flex flex-col">
            <div className="pb-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col sm:flex-row gap-6 sm:gap-12 py-12 lg:py-20 ${idx !== 0 ? 'border-t border-white/5' : ''}`}
                >
                  <div className="text-[#b255ff] text-xl font-mono font-bold shrink-0 pt-1">
                    {step.id}
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#888] leading-relaxed text-base md:text-lg pr-4 font-light mt-4">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
