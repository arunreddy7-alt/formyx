"use client"

import { SectionSeperator } from "./ui/section-seperator"
import Sseperator from "./ui/seperator"

export default function HowClientsUseFormyx() {
  return (
    <section
      className="relative bg-black py-32 overflow-hidden -mt-px"
      id="usage"
    >
      <Sseperator />
      <SectionSeperator badgeText="Real-World Use Cases" />

      <div className="container mx-auto px-4 mt-24 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Inbound lead qualification",
              desc: "AI agents qualify intent, capture context, and route leads into the right pipelines automatically.",
              accent: "from-[#610094]",
            },
            {
              title: "Customer support automation",
              desc: "Resolve repetitive queries instantly while escalating edge cases with full conversational context.",
              accent: "from-[#8B3FA6]",
            },
            {
              title: "Internal knowledge systems",
              desc: "RAG pipelines that surface accurate answers from internal documents and tools.",
              accent: "from-[#610094]",
            },
            {
              title: "Multi-step operational workflows",
              desc: "Coordinate tasks across teams, tools, and approvals without brittle scripts.",
              accent: "from-[#8B3FA6]",
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/5 backdrop-blur-xl p-8 transition-all hover:border-white/20"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${item.accent} to-transparent blur-xl`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white leading-tight max-w-xs">
                    {item.title}
                  </h3>
                  <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-xs font-medium text-white/60">
                    {idx + 1}
                  </div>
                </div>
                <p className="text-white/50 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>

              <div
                className={`absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r ${item.accent} to-transparent transition-all duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
