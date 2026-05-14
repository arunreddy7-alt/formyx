"use client"

import Sseperator from "./ui/seperator"
import { motion, useInView } from "framer-motion"
import { Suspense, useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import Earth from "./ui/globe"
import ScrambleHover from "./ui/scramble"
import { FollowerPointerCard } from "./ui/following-pointer"
import { cn } from "@/lib/utils"

export default function CoreCapabilitiesInteractive() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { theme } = useTheme()

  const [isOrchHover, setIsOrchHover] = useState(false)
  const [isHumanHover, setIsHumanHover] = useState(false)
  const [isMemoryHover, setIsMemoryHover] = useState(false)
  const [isObserveHover, setIsObserveHover] = useState(false)
  const [isIntegrationHover, setIsIntegrationHover] = useState(false)

  const [baseColor, setBaseColor] = useState<[number, number, number]>([0.247, 0.0, 0.443])
  const [glowColor, setGlowColor] = useState<[number, number, number]>([0.38, 0.0, 0.58])
  const [dark, setDark] = useState<number>(theme === "dark" ? 1 : 0)

  useEffect(() => {
    setDark(theme === "dark" ? 1 : 0)
  }, [theme])

  return (
    <section className="relative py-40" id="features">
      <Sseperator />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto flex flex-col items-center gap-12 "
      >
        <h2
          className={cn(
            "bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-[54px]",
          )}
        >
          Core Capabilities
        </h2>

        <FollowerPointerCard title="Formyx Platform">
          <div className="grid grid-cols-12 gap-6">
            {/* Multi-Agent Orchestration */}
            <motion.div
              onMouseEnter={() => setIsOrchHover(true)}
              onMouseLeave={() => setIsOrchHover(false)}
              className="col-span-12 md:col-span-6 rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(63,0,113,0.25)" }}
            >
              <h3 className="text-2xl font-semibold">Multi-Agent Orchestration</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Coordinate agents using shared memory, interrupts, and conditional logic.
              </p>

              <div className="mt-6 flex justify-center">
                <ScrambleHover
                  text="multi-agent"
                  scrambleSpeed={60}
                  maxIterations={18}
                  className="bg-gradient-to-r from-[#3F0071] to-[#610094] bg-clip-text text-lg text-transparent"
                  isHovering={isOrchHover}
                  setIsHovering={setIsOrchHover}
                />
              </div>
            </motion.div>

            {/* Human-in-the-Loop */}
            <motion.div
              onMouseEnter={() => setIsHumanHover(true)}
              onMouseLeave={() => setIsHumanHover(false)}
              className="col-span-12 md:col-span-6 rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(63,0,113,0.25)" }}
            >
              <h3 className="text-2xl font-semibold">Human-in-the-Loop Control</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Reviews, approvals, and escalations exactly where needed.
              </p>

              <div className="mt-8 flex justify-center gap-6">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-7 w-7 rounded-full bg-[#610094]/70"
                    animate={isHumanHover ? { scale: [1, 1.5, 1] } : {}}
                    transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Memory & Context */}
            <motion.div
              onMouseEnter={() => setIsMemoryHover(true)}
              onMouseLeave={() => setIsMemoryHover(false)}
              className="col-span-12 md:col-span-6 rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(63,0,113,0.25)" }}
            >
              <h3 className="text-2xl font-semibold">Memory & Context Persistence</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Long-term memory across sessions, workflows, and agents.
              </p>

              <div className="mt-8 flex justify-center gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="h-3 w-12 rounded-full bg-[#610094]/60"
                    animate={isMemoryHover ? { opacity: [0.3, 1, 0.3] } : {}}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Observability */}
            <motion.div
              onMouseEnter={() => setIsObserveHover(true)}
              onMouseLeave={() => setIsObserveHover(false)}
              className="col-span-12 md:col-span-6 rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(63,0,113,0.25)" }}
            >
              <h3 className="text-2xl font-semibold">Observability & Guardrails</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Monitor decisions, failures, retries, and cost in real time.
              </p>

              <div className="mt-8 flex items-end justify-center gap-2 h-20">
                {[20, 35, 50, 30, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-4 rounded bg-[#610094]/70"
                    style={{ height: h }}
                    animate={isObserveHover ? { height: [h, h + 20, h] } : {}}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Integration + Earth */}
            <motion.div
              onMouseEnter={() => setIsIntegrationHover(true)}
              onMouseLeave={() => setIsIntegrationHover(false)}
              className="col-span-12 rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold">Integration-First by Design</h3>
              <p className="mt-2 max-w-xl text-sm text-zinc-400">
                Agents run inside your existing stack — no rip and replace.
              </p>

              <div className="relative mt-6 flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-[1/1.15]">
                  <Suspense fallback={<div className="absolute inset-0 rounded-full bg-white/5" />}>
                    <Earth
                      baseColor={baseColor}
                      glowColor={glowColor}
                      markerColor={[0, 0, 0]}
                      dark={dark}
                    />
                  </Suspense>
                </div>
              </div>
            </motion.div>
          </div>
        </FollowerPointerCard>
      </motion.div>
    </section>
  )
}
