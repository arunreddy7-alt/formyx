"use client"

import { motion } from "framer-motion"
import { Play, Maximize } from "lucide-react"
import { SectionSeperator } from "./ui/section-seperator"
import Sseperator from "./ui/seperator"

export default function ProductDemo() {
  return (
    <section className="py-24 relative overflow-hidden bg-black" id="product-demo">
      <Sseperator />
      <SectionSeperator badgeText="Product Demo" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#610094]/10 blur-[250px] mix-blend-screen rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 mt-20">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white mb-6">
            See the Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d08bff] to-[#610094]">In Action</span>
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Watch how our intelligent orchestration agent automatically manages context, escalates required tasks, and drives end-to-end operational efficiency.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#05000a] p-2 shadow-2xl backdrop-blur-sm"
        >
          {/* Animated Border Behind Player */}
          <div className="absolute -inset-[1px] rounded-[18px] bg-gradient-to-r from-transparent via-[#b255ff]/30 to-[#00ffff]/20 opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
          
          <div className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-[#09090b]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f2e]/80 to-[#0c051a]" />
            
            {/* Abstract Animation inside Player to simulate activity */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity duration-700">
              <div className="h-64 w-64 animate-ping rounded-full bg-[#d08bff] mix-blend-screen blur-3xl opacity-20" style={{ animationDuration: "3s" }} />
              <div className="absolute h-96 w-96 animate-pulse rounded-full bg-[#610094] mix-blend-screen blur-[100px] opacity-30" style={{ animationDuration: "4s" }} />
            </div>

            {/* Video Controls Hover UI */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-black/60 px-4 py-3 backdrop-blur-md border border-white/10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
              <div className="flex items-center gap-4 w-full">
                <button className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center pl-0.5 hover:scale-105 transition-transform shrink-0">
                  <Play className="h-4 w-4" fill="currentColor" />
                </button>
                <div className="h-1.5 flex-1 rounded-full bg-white/20 overflow-hidden relative group/scrubber cursor-pointer">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#d08bff] to-[#610094]" />
                  {/* Scrubber handle */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/3 h-3 w-3 bg-white rounded-full opacity-0 group-hover/scrubber:opacity-100 transition-opacity shadow-md" />
                </div>
                <span className="text-xs text-white/70 font-medium shrink-0">01:24 / 03:45</span>
              </div>
              <Maximize className="h-4 w-4 text-white/70 hover:text-white transition-colors ml-6 shrink-0" />
            </div>

            {/* Huge Play Button Center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="h-20 w-20 rounded-full bg-[#610094]/40 border border-[#b255ff]/40 flex items-center justify-center backdrop-blur-xl group-hover:scale-110 group-hover:bg-[#610094]/60 transition-all duration-300 shadow-[0_0_50px_rgba(97,0,148,0.4)]">
                <Play className="h-8 w-8 text-white ml-1 translate-x-px" fill="currentColor" />
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
