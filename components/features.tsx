"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { MessageSquareText, Layers, Target, CalendarCheck, Network, Users, Blocks, Mic, LineChart, BrainCircuit } from "lucide-react"
import { SectionSeperator } from "./ui/section-seperator"
import Sseperator from "./ui/seperator"
import React, { MouseEvent } from "react"

const features = [
  {
    icon: MessageSquareText,
    title: "GPT-Powered Conversations",
    description: "Natural, context-aware AI that understands complex customer queries.",
  },
  {
    icon: Layers,
    title: "Omnichannel Messaging",
    description: "Website, WhatsApp, Messenger, Instagram — one unified inbox.",
  },
  {
    icon: Target,
    title: "AI Lead Qualification",
    description: "Automatically score and qualify leads based on conversation signals.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Automation",
    description: "Check availability, book slots, send reminders — hands-free.",
  },
  {
    icon: Network,
    title: "Smart Workflow Engine",
    description: "Build multi-step automations triggered by conversation events.",
  },
  {
    icon: Users,
    title: "Easy CRM Integration",
    description: "Manage leads, conversations, and pipeline in one place.",
  },
  {
    icon: Blocks,
    title: "Powerful Integrations",
    description: "Connect with Zapier, HubSpot, Salesforce, Calendly, and more.",
  },
  {
    icon: Mic,
    title: "Voice AI",
    description: "AI-powered voice interactions for phone-based workflows.",
  },
  {
    icon: LineChart,
    title: "Real-Time Analytics",
    description: "Track conversations, conversion rates, and agent performance.",
  },
  {
    icon: BrainCircuit,
    title: "RAG Knowledge Base",
    description: "Train your AI on docs, FAQs, and product catalogs.",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#05000a] p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(97,0,148,0.2)]"
    >
      {/* Background Soft Glow tracking mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(97, 0, 148, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Intense Border Glow tracking mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          maskImage: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
          WebkitMaskImage: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, black, transparent)`
        }}
      >
        <div className="absolute inset-0 rounded-2xl border border-[#d08bff] mix-blend-screen" />
      </motion.div>
      
      <div className="relative z-10 flex flex-col gap-6 h-full">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#610094]/30 to-[#3F0071]/10 border border-white/5 shadow-inner group-hover:bg-[#610094]/40 group-hover:border-[#b255ff]/40 transition-all duration-300">
          <feature.icon className="h-6 w-6 text-[#b255ff] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_15px_rgba(178,85,255,0.8)]" />
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors">
            {feature.title}
          </h3>
          <p className="text-sm font-light leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden bg-black" id="platform-features">
      <Sseperator />
      <SectionSeperator badgeText="Platform Features" />
      
      {/* Background ambient glow setup */}
      <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-[#610094]/10 blur-[200px] mix-blend-screen rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] -right-[15%] w-[500px] h-[500px] bg-[#b255ff]/10 blur-[200px] mix-blend-screen rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 mt-20">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white mb-6">
            Scale Operations with <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d08bff] to-[#610094]">Next-Gen Features</span>
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Everything you need to automate conversations, qualify leads, and orchestrate intelligent workflows seamlessly across every platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
