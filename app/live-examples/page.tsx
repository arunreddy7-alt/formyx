"use client"

import Header from "@/components/header"
import { StickyFooter } from "@/components/sticky-footer"
import { Play } from "lucide-react"

const EXAMPLES = [
  {
    title: "Healthcare Intake Automation",
    industry: "Healthcare",
    description: "Watch the AI agent parse a patient's unstructured text, query the backend EMR for context, and securely book a specialist appointment while adhering to HIPAA guidelines.",
  },
  {
    title: "Real Estate Property Matching",
    industry: "Real Estate",
    description: "An agent that captures buyer requirements, searches internal listings, and proactively schedules a viewing with the assigned broker over WhatsApp.",
  },
  {
    title: "Cross-Border Wealth Advisory",
    industry: "Financial Services",
    description: "Using RAG to ingest dense tax documents and rapidly advise clients on KYC procedures before securely handing off to a human advisor.",
  },
  {
    title: "E-Commerce Return Resolution",
    industry: "Retail",
    description: "Handling a frustrated customer's return request by instantly verifying the order ID, initiating the refund via Stripe, and generating a shipping label in under 10 seconds.",
  },
]

export default function LiveExamplesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header onContact={() => {}} />

      <main className="pt-32 pb-40 min-h-screen">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#610094]/15 blur-[200px] mix-blend-screen rounded-full pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-6 mt-16">
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d08bff] to-[#610094] italic font-serif font-light">Interactive Examples</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl font-light">
              See exact reconstructions of Formyx's advanced AI agents executing multi-step business workflows in real time.
            </p>
          </div>

          <div className="space-y-12">
            {EXAMPLES.map((ex, i) => (
              <div key={i} className="group relative rounded-[2rem] border border-white/5 bg-[#05000a] p-8 md:p-12 overflow-hidden transition-all hover:border-[#610094]/30">
                <div className="absolute inset-0 bg-gradient-to-br from-[#610094]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:items-center">
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center rounded-full bg-[#1a0f2e] border border-[#610094]/30 px-4 py-1.5 text-xs font-semibold text-[#d08bff] uppercase tracking-wider backdrop-blur-sm">
                      {ex.industry}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-white/95">
                      {ex.title}
                    </h2>
                    <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-xl">
                      {ex.description}
                    </p>
                    <button className="flex items-center gap-3 rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-neutral-200 transition-colors">
                      <Play className="h-4 w-4" fill="currentColor" /> Watch Execution
                    </button>
                  </div>
                  
                  <div className="flex-1 relative">
                    <div className="aspect-[4/3] w-full rounded-2xl bg-[#0c0c0e] border border-white/10 flex flex-col overflow-hidden shadow-2xl relative">
                      {/* Fake Terminal / Chat Window */}
                      <div className="h-12 border-b border-white/10 bg-[#151515] flex items-center px-4 gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/20" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                        <div className="h-3 w-3 rounded-full bg-green-500/20" />
                        <div className="ml-auto text-xs text-neutral-500 font-mono">Agent Execution Sandbox</div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-center items-center">
                        <div className="h-16 w-16 mb-6 rounded-2xl bg-[#1a0f2e] border border-[#610094]/40 flex items-center justify-center animate-bounce">
                          <div className="h-6 w-6 rounded-full bg-[#d08bff] animate-pulse" />
                        </div>
                        <p className="text-neutral-500 font-mono text-sm tracking-widest text-center">AWAITING CONNECTION...</p>
                      </div>
                      
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-[#d08bff] text-white flex items-center justify-center shadow-[0_0_40px_rgba(208,139,255,0.6)] hover:scale-110 transition-transform cursor-pointer">
                          <Play className="h-8 w-8 ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <StickyFooter />
    </div>
  )
}
