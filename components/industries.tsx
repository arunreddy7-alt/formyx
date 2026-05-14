"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Building2, HeartPulse, GraduationCap, Hotel, ShoppingBag, Landmark, Briefcase, Factory } from "lucide-react"
import { SectionSeperator } from "./ui/section-seperator"
import Sseperator from "./ui/seperator"
import React, { MouseEvent } from "react"

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property inquiries, site visit booking, lead qualification for agents & brokers.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Appointment scheduling, patient intake, insurance queries, and follow-ups.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Admission inquiries, enrollment workflows, course recommendations.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Room booking, guest services, concierge automation, upsell offers.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Product discovery, order tracking, inventory checks, returns handling.",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Loan applications, account queries, KYC automation, advisory support.",
  },
  {
    icon: Briefcase,
    title: "Enterprise",
    description: "Internal helpdesk, HR workflows, IT support automation, vendor management.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Product inquiries, distributor support, order tracking, service requests, and CRM/ERP-integrated automation.",
  },
]

function IndustryCard({ industry, index }: { industry: typeof industries[0], index: number }) {
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
          <industry.icon className="h-6 w-6 text-[#b255ff] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_15px_rgba(178,85,255,0.8)]" />
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors">
            {industry.title}
          </h3>
          <p className="text-sm font-light leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
            {industry.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Industries() {
  return (
    <section className="py-24 relative overflow-hidden bg-black" id="industries">
      <Sseperator />
      <SectionSeperator badgeText="Industries" />
      
      {/* Background ambient glow setup */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#610094]/10 blur-[150px] mix-blend-screen rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#3F0071]/20 blur-[150px] mix-blend-screen rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 mt-20">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-white mb-6">
            Intelligent Automation for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d08bff] to-[#610094]">Every Industry</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl font-light leading-relaxed">
            We adapt cutting-edge AI directly into your specific workflows, 
            accelerating growth and reducing manual overhead without disrupting what already works.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <IndustryCard key={i} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
