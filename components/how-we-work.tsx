"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We begin with a free audit call to understand your business, existing systems, and growth objectives. This helps us identify automation opportunities with real impact.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "We design a clear execution blueprint aligned with your workflows, industry constraints, and long-term goals. Nothing generic. Everything intentional.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Our team builds and integrates your AI systems—automation pipelines, agents, or Gen-AI workflows—engineered for reliability, security, and scale.",
  },
  {
    step: "04",
    title: "Launch & Training",
    description:
      "We deploy the solution into your environment and train your team to use it effectively, ensuring a smooth transition with zero disruption.",
  },
  {
    step: "05",
    title: "Optimization",
    description:
      "We monitor performance, refine workflows, and improve outputs based on real usage—ensuring the system keeps getting better over time.",
  },
  {
    step: "06",
    title: "Ongoing Support",
    description:
      "You receive continuous support and enhancements as your business evolves. Our systems scale with you, not against you.",
  },
]

export default function HowWeWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32 bg-black">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#610094]/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/3">
            <div className="w-2 h-2 rounded-full bg-[#610094]" />
            <span className="text-xs tracking-widest text-white/60 uppercase">Our Process</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
            A clear process.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#610094] via-[#8B3FA6] to-[#610094]">
              Built for execution.
            </span>
          </h2>
          <p className="text-white/50 leading-relaxed text-lg">
            Our approach is structured, transparent, and engineered to deliver measurable outcomes—not surface-level
            automation.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="relative h-full rounded-xl border border-white/8 bg-gradient-to-b from-white/4 to-white/1 backdrop-blur-sm p-6 hover:border-[#610094]/40 hover:bg-gradient-to-b hover:from-white/6 hover:to-white/2 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#610094]/20 to-[#610094]/5 border border-[#610094]/20 mb-4 group-hover:from-[#610094]/30 group-hover:to-[#610094]/10 transition-all">
                  <span className="text-[#610094] text-sm font-semibold">{item.step}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#8B3FA6] transition-colors">
                  {item.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                  {item.description}
                </p>

                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-[#610094]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Connection line to next item (hidden on mobile) */}
              {index % 3 !== 2 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
