"use client"

import Sseperator from "./ui/seperator"
import { SectionSeperator } from "./ui/section-seperator"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import React, { useRef, useState } from "react"
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

function DotIcon({ title, description, matrix }: { title: string, description: string, matrix: number[] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-crosshair flex justify-center w-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-7 gap-1 md:gap-[5px]">
        {matrix.map((val, i) => (
          <div
            key={i}
            className={`w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full transition-all duration-300 ${val ? (isHovered ? 'bg-[#610094]' : 'bg-[#D0D0D0]') : 'bg-transparent'}`}
          />
        ))}
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -20 : 10, scale: isHovered ? 1 : 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 pointer-events-none min-w-[200px]"
      >
        <div className="bg-white text-black px-5 py-3 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-center flex flex-col gap-1 border border-black/5">
          <span className="text-xs font-bold whitespace-nowrap">{title}</span>
          <span className="text-[10px] text-gray-500 leading-tight block w-[200px] whitespace-normal">
            {description}
          </span>
        </div>
      </motion.div>
    </div>
  )
}

function DecoDotIcon({ matrix }: { matrix: number[] }) {
  return (
    <div className="grid grid-cols-7 gap-1.5 md:gap-2">
      {matrix.map((val, i) => (
        <div
          key={i}
          className={`w-[6px] md:w-[8px] h-[6px] md:h-[8px] rounded-full transition-colors duration-500 ${val ? 'bg-white/40 group-hover:bg-[#D6A1D6]' : 'bg-transparent'}`}
        />
      ))}
    </div>
  )
}

function ScrubText() {
  const el = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: el,
    offset: ["start 0.85", "start 0.25"]
  });

  const text = "We combine cutting-edge AI, strategic logic and automation to create bespoke workflows that drive your success.";
  const words = text.split(" ");

  return (
    <div ref={el} className="w-full lg:max-w-[1050px] text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] leading-[1.15] font-medium tracking-tight flex flex-wrap gap-x-2 md:gap-x-3 lg:gap-x-[14px] gap-y-1 lg:gap-y-1.5">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const colorOpacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        return (
          <motion.span key={i} style={{ opacity: colorOpacity }} className="text-[#111111]">
            {word}
          </motion.span>
        )
      })}
    </div>
  )
}

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
      <section className="relative py-40 bg-black overflow-hidden" id="features">
        <Sseperator />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 max-w-[1500px]"
        >
          <div className="flex justify-center mb-16">
            <SectionSeperator badgeText="Core Capabilities" />
          </div>

          {/* High-Tech Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1400px] mx-auto mt-12 xl:mt-24">
            {CAPABILITIES.map((cap, idx) => {
              const matrices = [
                // 1. Chip/Processor
                [
                  0, 1, 0, 1, 0, 1, 0,
                  1, 1, 1, 1, 1, 1, 1,
                  0, 1, 0, 0, 0, 1, 0,
                  1, 1, 0, 1, 0, 1, 1,
                  0, 1, 0, 0, 0, 1, 0,
                  1, 1, 1, 1, 1, 1, 1,
                  0, 1, 0, 1, 0, 1, 0
                ],
                // 2. User
                [
                  0, 0, 1, 1, 1, 0, 0,
                  0, 1, 0, 0, 0, 1, 0,
                  0, 1, 0, 0, 0, 1, 0,
                  0, 0, 1, 1, 1, 0, 0,
                  0, 1, 1, 1, 1, 1, 0,
                  1, 1, 0, 0, 0, 1, 1,
                  1, 0, 0, 0, 0, 0, 1
                ],
                // 3. Server
                [
                  1, 1, 1, 1, 1, 1, 1,
                  1, 0, 1, 0, 0, 0, 1,
                  1, 1, 1, 1, 1, 1, 1,
                  0, 0, 0, 0, 0, 0, 0,
                  1, 1, 1, 1, 1, 1, 1,
                  1, 0, 1, 0, 0, 0, 1,
                  1, 1, 1, 1, 1, 1, 1
                ],
                // 4. Integration Plug
                [
                  0, 1, 1, 0, 1, 1, 0,
                  0, 1, 1, 0, 1, 1, 0,
                  0, 0, 1, 1, 1, 0, 0,
                  0, 0, 0, 1, 0, 0, 0,
                  0, 0, 0, 1, 0, 0, 0,
                  0, 0, 1, 1, 1, 0, 0,
                  0, 0, 1, 1, 1, 0, 0
                ]
              ];

              return (
                <motion.div
                  key={idx}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="relative z-10 w-full h-[360px] bg-[#050505] border border-white/5 p-8 group rounded-2xl overflow-hidden cursor-crosshair shadow-2xl"
                >
                  {/* Tech Symbol */}
                  <div className="absolute top-10 left-10 transition-transform duration-500 group-hover:scale-[1.15] origin-top-left">
                    <DecoDotIcon matrix={matrices[idx]} />
                  </div>

                  {/* Content Container */}
                  <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                    <motion.h3
                      variants={{ hover: { y: -8 }, rest: { y: 0 } }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="text-2xl font-bold text-white leading-tight"
                    >
                      {cap.title}
                    </motion.h3>

                    <motion.div
                      variants={{ hover: { opacity: 1, y: 10 }, rest: { opacity: 0, y: 20 } }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                      className="absolute top-[80%] pt-2 left-0 w-full pointer-events-none"
                    >
                      <p className="text-sm font-medium leading-relaxed text-[#A0A0A0]">
                        {cap.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Hover tech glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#610094]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* ── Business Impact ── */}
      <section className="relative py-32 md:py-48 bg-[#F3F3F3] text-[#111111] border-t border-black/10" id="impact">
        <motion.div
          ref={impactRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 md:px-12 max-w-[1500px]"
        >
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16 md:mb-24">
            <div className="w-full md:w-[250px] shrink-0 text-[10px] md:text-xs tracking-widest font-mono text-[#888] uppercase pt-2">
              OUR BUSINESS IMPACT
            </div>

            <ScrubText />
          </div>

          {/* The Dot Matrix Icons Row */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between w-full max-w-[1500px] gap-8 md:gap-4 mx-auto pt-8">
            {BUSINESS_IMPACT.map((item, idx) => (
              <DotIcon
                key={idx}
                title={item.title}
                description={item.description}
                matrix={
                  // 1: Heart
                  idx === 0 ? [
                    0, 1, 1, 0, 1, 1, 0,
                    1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1,
                    0, 1, 1, 1, 1, 1, 0,
                    0, 0, 1, 1, 1, 0, 0,
                    0, 0, 0, 1, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0
                  ] :
                    // 2: X shape
                    idx === 1 ? [
                      1, 1, 0, 0, 0, 1, 1,
                      0, 1, 1, 0, 1, 1, 0,
                      0, 0, 1, 1, 1, 0, 0,
                      0, 0, 0, 1, 0, 0, 0,
                      0, 0, 1, 1, 1, 0, 0,
                      0, 1, 1, 0, 1, 1, 0,
                      1, 1, 0, 0, 0, 1, 1
                    ] :
                      // 3: Coffee cup
                      idx === 2 ? [
                        0, 0, 1, 0, 1, 0, 0,
                        0, 1, 0, 0, 0, 1, 0,
                        0, 0, 0, 0, 0, 0, 0,
                        1, 1, 1, 1, 1, 1, 1,
                        1, 1, 1, 1, 1, 1, 1,
                        1, 1, 1, 1, 1, 1, 0,
                        0, 1, 1, 1, 1, 0, 0
                      ] :
                        // 4: Sparkle
                        idx === 3 ? [
                          0, 0, 0, 1, 0, 0, 0,
                          0, 0, 0, 1, 0, 0, 0,
                          0, 0, 1, 1, 1, 0, 0,
                          1, 1, 1, 1, 1, 1, 1,
                          0, 0, 1, 1, 1, 0, 0,
                          0, 0, 0, 1, 0, 0, 0,
                          0, 0, 0, 1, 0, 0, 0
                        ] :
                          // 5: House
                          idx === 4 ? [
                            0, 0, 0, 1, 0, 0, 0,
                            0, 0, 1, 1, 1, 0, 0,
                            0, 1, 1, 1, 1, 1, 0,
                            1, 1, 1, 1, 1, 1, 1,
                            1, 1, 0, 0, 0, 1, 1,
                            1, 1, 0, 0, 0, 1, 1,
                            1, 1, 0, 0, 0, 1, 1
                          ] :
                            // 6: Briefcase
                            [
                              0, 0, 1, 1, 1, 0, 0,
                              0, 0, 1, 0, 1, 0, 0,
                              1, 1, 1, 1, 1, 1, 1,
                              1, 0, 0, 0, 0, 0, 1,
                              1, 0, 0, 0, 0, 0, 1,
                              1, 0, 0, 0, 0, 0, 1,
                              1, 1, 1, 1, 1, 1, 1
                            ]
                }
              />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  )
}
