"use client"

import { SectionSeperator } from "./ui/section-seperator"
import Sseperator from "./ui/seperator"

export default function WhatMakesUsDifferent() {
  return (
    <section
      className="relative bg-black py-32 overflow-hidden -mt-px"
      id="difference"
    >
      <Sseperator />
      <SectionSeperator badgeText="Our Philosophy" />

      <div className="container mx-auto px-4 mt-24 max-w-4xl text-center relative">
        <div className="relative z-10 space-y-8">
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Automation should adapt to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#610094] to-[#8B3FA6]">
              your business
            </span>
            <br />
            not the other way around
          </h2>

          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              "We don't sell tools. We design systems that respect how your teams already work.",
              "Every workflow is transparent, auditable, and built with human oversight where it matters.",
              "You own the logic, the data, and the future evolution of what we build.",
            ].map((text, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-xl border border-white/8 bg-white/5 backdrop-blur-sm transition-all hover:border-white/20"
              >
                <p className="text-lg text-white/60 leading-relaxed group-hover:text-white/75 transition-colors">
                  {text}
                </p>

                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#610094] to-[#8B3FA6] rounded-full group-hover:h-8 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
