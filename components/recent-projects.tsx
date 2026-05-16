"use client"

import { motion } from "framer-motion"
import { Zap, CheckCircle2, MessageSquare, Plus, Smartphone } from "lucide-react"

export default function RecentProjects({ onContact }: { onContact?: () => void }) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#05000a]" id="recent-projects">
      {/* Abstract Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d08bff]/10 blur-[150px] mix-blend-screen rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#610094]/20 blur-[150px] mix-blend-screen rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="flex flex-col items-start text-left space-y-8 md:pl-8 lg:pl-12 xl:pl-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-[#d08bff]/30 bg-[#d08bff]/10 px-4 py-1.5 text-sm font-medium text-[#d08bff]"
            >
              <Zap className="h-4 w-4 fill-[#d08bff]" />
              <span>GPT-Powered AI Agent Platform</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              AI Agents That Turn <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d08bff] to-[#610094]">
                Conversations Into <br className="hidden sm:block"/> Business Actions
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 text-lg sm:text-xl font-light leading-relaxed max-w-xl"
            >
              Formyx combines GPT-powered conversations and intelligent automation to help businesses capture leads, answer customers, automate workflows, and complete transactions automatically.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
            >
              <button 
                onClick={onContact}
                className="rounded-full bg-gradient-to-r from-[#d08bff] to-[#610094] hover:from-[#b255ff] hover:to-[#610094] px-8 py-4 text-white font-semibold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(208,139,255,0.3)] hover:shadow-[0_0_40px_rgba(208,139,255,0.5)]"
              >
                Create Your AI Chatbot Now
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 font-medium pt-2"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#d08bff]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#d08bff]" />
                <span>Setup in 10 minutes</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-[500px]"
          >
            {/* Floating Tags */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-6 top-12 z-20 hidden md:flex items-center gap-2 rounded-lg bg-[#b255ff]/10 border border-[#b255ff]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#b255ff] shadow-xl backdrop-blur-md"
            >
              <div className="h-2 w-2 rounded-full bg-[#b255ff] animate-pulse" />
              CRM Updated
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-14 md:-left-24 bottom-24 z-20 hidden md:flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-400 shadow-xl backdrop-blur-md"
            >
              <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              Lead Captured
            </motion.div>

            {/* Chat Container */}
            <div className="relative rounded-[2rem] border border-white/10 bg-[#0F0F13] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-3xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 bg-[#141418] px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#d08bff] to-[#610094] flex items-center justify-center shadow-inner">
                      <Smartphone className="h-5 w-5 text-white" />
                    </div>
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#141418] bg-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Formyx AI Agent</h3>
                    <p className="text-xs text-green-400 font-medium flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span> Online
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 text-neutral-500">
                  <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="p-6 space-y-6 h-[420px] overflow-hidden relative bg-[radial-gradient(ellipse_at_center,rgba(208,139,255,0.05)_0%,transparent_100%)] flex flex-col">
                {/* Agent Msg */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-3 max-w-[85%]"
                >
                  <div className="h-8 w-8 shrink-0 rounded-full bg-[#1b1b21] flex items-center justify-center text-xs border border-white/5">🤖</div>
                  <div className="rounded-2xl rounded-tl-sm bg-[#22222A] px-4 py-3 text-sm text-neutral-200 shadow-sm border border-white/5">
                    Hi! I'm your AI assistant. How can I help you today?
                  </div>
                </motion.div>

                {/* User Msg */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 }}
                  className="flex justify-end gap-3 w-full"
                >
                  <div className="rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#d08bff] to-[#610094] px-4 py-3 text-sm text-white font-medium shadow-[0_4px_15px_rgba(208,139,255,0.2)] max-w-[85%]">
                    I'd like to book a dental appointment for next Tuesday.
                  </div>
                </motion.div>

                {/* Agent Msg */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.5 }}
                  className="flex gap-3 max-w-[85%]"
                >
                  <div className="h-8 w-8 shrink-0 rounded-full bg-[#1b1b21] flex items-center justify-center text-xs border border-white/5">🤖</div>
                  <div className="rounded-2xl rounded-tl-sm bg-[#22222A] px-4 py-3 text-sm text-neutral-200 shadow-sm border border-white/5 leading-relaxed">
                    I found 3 available slots on Tuesday. Would you prefer 10:00 AM, 2:00 PM, or 4:30 PM?
                  </div>
                </motion.div>

                {/* User Msg */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 3.5 }}
                  className="flex justify-end gap-3 w-full"
                >
                  <div className="rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#d08bff] to-[#610094] px-4 py-3 text-sm text-white font-medium shadow-[0_4px_15px_rgba(208,139,255,0.2)] max-w-[85%]">
                    2:00 PM works great.
                  </div>
                </motion.div>
                
                {/* Agent Msg */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 4.5 }}
                  className="flex gap-3 max-w-[85%]"
                >
                  <div className="h-8 w-8 shrink-0 rounded-full bg-[#1b1b21] flex items-center justify-center text-xs border border-white/5">🤖</div>
                  <div className="rounded-2xl rounded-tl-sm bg-[#22222A] px-4 py-3 text-sm text-neutral-200 shadow-sm border border-white/5 leading-relaxed">
                    <span className="flex items-center gap-1.5 mb-2 text-green-400 font-semibold text-xs bg-green-500/10 w-fit px-2 py-0.5 rounded-full border border-green-500/20"><CheckCircle2 className="h-3 w-3" /> Appointment confirmed</span>
                    Your appointment is confirmed for Tuesday at 2:00 PM. A confirmation has been sent to your email. Anything else?
                  </div>
                </motion.div>

                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0F0F13] to-transparent pointer-events-none" />
              </div>

              {/* Chat Input */}
              <div className="border-t border-white/5 bg-[#141418] p-4 text-neutral-500 text-sm flex items-center gap-3">
                 <div className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                    <Plus className="h-4 w-4" />
                 </div>
                 <div className="flex-1 bg-[#1A1A1F] rounded-full px-5 py-2.5 border border-white/5 text-xs text-neutral-400 shadow-inner flex items-center">
                    Type your message...
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
