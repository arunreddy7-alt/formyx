"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionSeperator } from "./ui/section-seperator"
import Sseperator from "./ui/seperator"

const PROJECTS = [
  {
    title: "Global Supply Chain Copilot",
    client: "Logistics Enterprise",
    metric: "40% Faster Incident Resolution",
    description: "A centralized AI agent monitoring 10,000+ shipments in real-time, instantly flagging delays and automatically rerouting logistics.",
    image: "gradient-1",
  },
  {
    title: "Omnichannel Virtual Assistant",
    client: "Fintech Startup",
    metric: "92% Human Handoff Reduction",
    description: "Deployed a seamless multi-agent customer support flow across WhatsApp and Web, allowing users to securely check balances and initiate transfers.",
    image: "gradient-2",
  },
  {
    title: "Automated RFP Response Engine",
    client: "Healthcare SaaS",
    metric: "120+ Hours Saved per Month",
    description: "An AI system that instantly parses incoming Request for Proposals, cross-references previous answers in the knowledge base, and drafts 90% accurate responses.",
    image: "gradient-3",
  },
]

export default function RecentProjects() {
  return (
    <section className="py-24 relative overflow-hidden bg-black" id="recent-projects">
      <Sseperator />
      <SectionSeperator badgeText="Case Studies" />
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#610094]/10 blur-[250px] mix-blend-screen rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 mt-20">
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white mb-6">
            Recently <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d08bff] to-[#610094]">Shipped Projects</span>
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl font-light leading-relaxed">
            Take a look at the custom intelligent automation systems we've successfully deployed for high-growth teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col overflow-hidden rounded-[24px] bg-[#0c0c0e] border border-white/5 transition-all duration-300 hover:border-[#610094]/50 hover:shadow-[0_10px_40px_rgba(97,0,148,0.15)] hover:-translate-y-2"
            >
              {/* Asset Box */}
              <div className="relative h-56 w-full overflow-hidden bg-[#150a24]">
                {project.image === "gradient-1" && <div className="absolute inset-0 bg-gradient-to-br from-[#610094] to-black opacity-80" />}
                {project.image === "gradient-2" && <div className="absolute inset-0 bg-gradient-to-br from-[#b255ff] to-[#1a0f2e] opacity-80" />}
                {project.image === "gradient-3" && <div className="absolute inset-0 bg-gradient-to-tl from-[#00ffff]/30 to-[#610094] opacity-40" />}
                
                {/* Simulated UI elements inside abstract thumbnail */}
                <div className="absolute inset-0 p-8 flex flex-col gap-4 opacity-30 group-hover:opacity-70 transition-opacity duration-500">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-white/20" />
                    <div className="h-3 w-1/3 bg-white/20 rounded-full" />
                  </div>
                  <div className="mt-4 flex gap-4 w-full">
                    <div className="h-16 w-1/2 bg-black/40 rounded-xl border border-white/5 backdrop-blur-md" />
                    <div className="h-16 w-1/2 bg-black/40 rounded-xl border border-white/5 backdrop-blur-md" />
                  </div>
                  <div className="h-3 w-2/3 mt-2 bg-white/10 rounded-full" />
                </div>
              </div>

              {/* Content Box */}
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#d08bff]">{project.client}</span>
                  <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white/95 leading-snug mb-4 group-hover:text-white transition-colors tracking-tight">
                  {project.title}
                </h3>
                
                <div className="mb-6 inline-flex w-fit rounded-lg bg-[#b255ff]/10 border border-[#b255ff]/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#b255ff] shadow-sm">
                  {project.metric}
                </div>
                
                <p className="mt-auto text-[15px] text-neutral-400 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
