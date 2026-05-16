"use client"

import Sseperator from "./ui/seperator"
import { SectionSeperator } from "./ui/section-seperator"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

const CAPABILITIES = [
  {
    title: "AI Workflow Automation",
    description:
      "End-to-end process automation across your operations. Our agents handle multi-step workflows — from lead intake to fulfillment — so your team focuses on strategy, not repetitive tasks.",
  },
  {
    title: "Human-in-the-Loop Control",
    description:
      "Reviews, approvals, and escalations exactly where needed. Every critical decision passes through your team before execution — full visibility, zero blind spots.",
  },
  {
    title: "Private Server Development",
    description:
      "Models run on your infrastructure, your data never leaves. We design and build AI automations tailored to your business, not generic templates — deployed on your private servers.",
  },
  {
    title: "Custom Model Integration",
    description:
      "Connect GPT, Claude, Llama, or proprietary models to your stack. We wire the best-fit model into your existing tools, APIs, and databases — no vendor lock-in, full flexibility.",
  },
]

const BUSINESS_IMPACT = [
  {
    title: "Instant Lead Response",
    description:
      "Every inbound lead gets immediate, intelligent follow-up — day or night.",
    num: "01",
  },
  {
    title: "Lower Operating Costs",
    description:
      "Automate repetitive tasks without adding headcount or management overhead.",
    num: "02",
  },
  {
    title: "Data Stays Private",
    description:
      "AI runs on your own servers. No customer data sent to third-party APIs.",
    num: "03",
  },
  {
    title: "24/7 Operations",
    description:
      "Your business runs even when your team is off. No gaps, no missed tasks.",
    num: "04",
  },
  {
    title: "Fewer Errors",
    description:
      "Automated workflows eliminate the human errors common in manual processes.",
    num: "05",
  },
  {
    title: "Scales With You",
    description:
      "Add new automations as you grow, no rearchitecting the whole system.",
    num: "06",
  },
]

export default function CoreCapabilitiesInteractive() {
  const ref = useRef(null)
  const impactRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isImpactInView = useInView(impactRef, { once: true, amount: 0.2 })

  return (
    <>
      {/* ── Core Capabilities ── */}
      <section className="relative py-40" id="features">
        <Sseperator />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto flex flex-col items-center gap-12"
        >
          <SectionSeperator badgeText="Core Capabilities" />

            <div className="grid grid-cols-12 gap-6">
              {CAPABILITIES.map((cap, i) => (
                  <motion.div
                    key={i}
                    className="col-span-12 md:col-span-6 rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl flex flex-col gap-4"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(63,0,113,0.25)",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <h3 className="text-xl font-semibold md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#d08bff] to-[#610094]">{cap.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed md:text-base">
                      {cap.description}
                    </p>
                  </motion.div>
              ))}
            </div>
        </motion.div>
      </section>

      {/* ── Business Impact ── */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-black to-black/95" id="impact">
        <Sseperator />

        <motion.div
          ref={impactRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto flex flex-col items-center gap-12"
        >
          <SectionSeperator badgeText="Business Impact" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {BUSINESS_IMPACT.map((item, i) => (
              <motion.div
                key={i}
                className="group rounded-xl border border-white/5 bg-black/40 backdrop-blur-xl p-6 hover:border-[#610094]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-lg font-light text-[#610094]/60 group-hover:text-[#610094] transition-colors min-w-fit">
                    {item.num}
                  </span>
                  <h3 className="text-base font-semibold text-white/90 group-hover:text-[#8B3FA6] transition-colors">{item.title}</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed pl-8 group-hover:text-white/50 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  )
}
