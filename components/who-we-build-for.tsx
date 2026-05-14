"use client"

import { SectionSeperator } from "./ui/section-seperator"
import Sseperator from "./ui/seperator"

export default function WhoWeBuildFor() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-black via-black to-black/95" id="audience">
      <Sseperator />
      <SectionSeperator badgeText="Who We Build For" />

      <div className="container mx-auto px-4 mt-24 grid md:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Teams that value{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#610094] to-[#8B3FA6]">control,</span>
            <br />
            clarity, and scale
          </h2>

          <p className="text-white/50 text-lg leading-relaxed max-w-xl font-light">
            We partner with teams who want automation that integrates cleanly into real workflows — not fragile demos.
          </p>

          <div className="pt-4 flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-[#610094] to-transparent" />
            <span className="text-xs tracking-widest text-[#610094] uppercase font-medium">Proven Partnership</span>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-8">
          {[
            {
              title: "Founders & Growth Teams",
              desc: "Lead qualification, follow-ups, and engagement systems that convert without manual effort.",
              icon: "01",
            },
            {
              title: "Operations & Support",
              desc: "Automation that enforces process discipline while reducing repetitive human workload.",
              icon: "02",
            },
            {
              title: "Product & Engineering",
              desc: "RAG pipelines, multi-agent orchestration, and internal systems built for ownership and extensibility.",
              icon: "03",
            },
          ].map((item, idx) => (
            <div key={item.title} className="group">
              <div className="flex items-start gap-4 pb-6 pl-4 border-l-2 border-l-[#610094]/40 group-hover:border-l-[#610094] transition-colors relative">
                {/* Top accent line */}
                {idx !== 0 && (
                  <div className="absolute -top-4 left-0 right-0 h-px bg-gradient-to-r from-[#610094]/20 via-[#610094]/10 to-transparent" />
                )}
                <span className="text-2xl font-light text-[#610094]/60 group-hover:text-[#610094] transition-colors min-w-fit">
                  {item.icon}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-white group-hover:text-[#8B3FA6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed text-sm group-hover:text-white/50 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
