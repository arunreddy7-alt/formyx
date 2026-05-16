"use client"

import { motion } from "framer-motion"
import { Plug, Zap, Braces, Database, Network, Bell, Mail, Webhook, Box, Lock, Activity, CheckCircle, BarChart, Server } from "lucide-react"

export default function HowWeWork() {
  return (
    <section id="process" className="relative w-full h-[800px] sm:h-[1200px] bg-[#020005] overflow-hidden">
      
      {/* Deep Space Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b255ff]/10 blur-[150px] mix-blend-screen rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#610094]/10 blur-[150px] mix-blend-screen rounded-full pointer-events-none" />
      {/* Animated Vertical Light Beams */}
      <motion.div animate={{ opacity: [0, 0.1, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute left-[30%] top-0 bottom-0 w-[100px] bg-gradient-to-b from-transparent via-[#00ffff]/10 to-transparent blur-2xl" />
      <motion.div animate={{ opacity: [0, 0.15, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 2 }} className="absolute left-[60%] top-0 bottom-0 w-[150px] bg-gradient-to-b from-transparent via-[#ff00a0]/10 to-transparent blur-3xl" />

      {/* 2D Floating Header */}
      <div className="absolute top-16 lg:top-24 left-0 right-0 z-50 flex flex-col items-center text-center px-4 pointer-events-none">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(208,139,255,0.2)]"
        >
          <div className="w-2 h-2 rounded-full bg-[#b255ff] animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-[#d08bff] uppercase">Complete Workflows</span>
        </motion.div>

        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.05]"
        >
          Infinite scalable <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d08bff] via-[#8B3FA6] to-[#610094] italic">
            Architectures
          </span>
        </motion.h2>
      </div>

      {/* 3D Isometric Scene Wrapper */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: "2500px" }}>
        
        {/* Continuous Slow Rotating 3D World */}
        <motion.div
          style={{ transformStyle: "preserve-3d" }}
          initial={{ rotateX: 60, rotateZ: -45, y: -20, scale: 0.8 }}
          animate={{ rotateZ: [-45, -35, -45], y: [30, 50, 30] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="relative w-[1300px] h-[800px]"
        >
          {/* Top Floor Grid Layer */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_2px,transparent_2px),linear-gradient(to_bottom,#ffffff0c_2px,transparent_2px)] bg-[size:4rem_4rem] border-2 border-white/10 rounded-3xl" 
            style={{ transform: "translateZ(-80px)", boxShadow: "inset 0 0 150px rgba(0,0,0,0.9), 0 0 50px rgba(178,85,255,0.1)" }} 
          />
          {/* Deep Subfloor Grid (Creates extreme depth) */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_4px,transparent_4px),linear-gradient(to_bottom,#ffffff05_4px,transparent_4px)] bg-[size:8rem_8rem] rounded-3xl" 
            style={{ transform: "translateZ(-200px)", filter: "blur(2px)" }} 
          />

          {/* SVG Connection Wires on the Top Floor */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" style={{ transform: "translateZ(-80px)" }}>
            <defs>
              <linearGradient id="wire-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d08bff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00ffff" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="wire-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d08bff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ff00a0" stopOpacity="0.6" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Base Wires */}
            <g opacity="0.4">
              <path d="M 150 400 L 450 400" fill="none" stroke="url(#wire-grad)" strokeWidth="6" />
              <path d="M 450 400 C 600 400, 600 150, 750 150" fill="none" stroke="url(#wire-grad)" strokeWidth="6" />
              <path d="M 450 400 L 750 400" fill="none" stroke="url(#wire-grad)" strokeWidth="6" />
              <path d="M 450 400 C 600 400, 600 650, 750 650" fill="none" stroke="url(#wire-grad-2)" strokeWidth="6" />
              
              <path d="M 750 150 L 1050 150" fill="none" stroke="#00ffff" strokeWidth="6" />
              <path d="M 750 400 L 1050 400" fill="none" stroke="url(#wire-grad)" strokeWidth="6" />
              <path d="M 750 650 L 1050 650" fill="none" stroke="#ff00a0" strokeWidth="6" />
            </g>

            {/* Floor Anchors (Glowing attachment points) */}
            <g opacity="0.8" filter="url(#glow)">
              <circle cx="150" cy="400" r="10" fill="#d08bff" />
              <circle cx="450" cy="400" r="10" fill="#00ffff" />
              <circle cx="750" cy="150" r="10" fill="#00ffff" />
              <circle cx="750" cy="400" r="10" fill="#b255ff" />
              <circle cx="750" cy="650" r="10" fill="#ff00a0" />
              <circle cx="1050" cy="150" r="10" fill="#00ffff" />
              <circle cx="1050" cy="400" r="10" fill="#b255ff" />
              <circle cx="1050" cy="650" r="10" fill="#ff00a0" />
            </g>

            {/* Animated Data Particles */}
            <g filter="url(#glow)">
              <motion.path 
                d="M 150 400 L 450 400" fill="none" stroke="#fff" strokeWidth="6" strokeDasharray="15 285"
                animate={{ strokeDashoffset: [300, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
              <motion.path 
                d="M 450 400 C 600 400, 600 150, 750 150" fill="none" stroke="#fff" strokeWidth="6" strokeDasharray="15 365"
                animate={{ strokeDashoffset: [380, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.5 }}
              />
              <motion.path 
                d="M 450 400 L 750 400" fill="none" stroke="#fff" strokeWidth="6" strokeDasharray="15 285"
                animate={{ strokeDashoffset: [300, 0] }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear", delay: 0.7 }}
              />
              <motion.path 
                d="M 450 400 C 600 400, 600 650, 750 650" fill="none" stroke="#fff" strokeWidth="6" strokeDasharray="15 365"
                animate={{ strokeDashoffset: [380, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.2 }}
              />
              <motion.path 
                d="M 750 150 L 1050 150" fill="none" stroke="#fff" strokeWidth="6" strokeDasharray="15 285"
                animate={{ strokeDashoffset: [300, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "linear", delay: 2 }}
              />
              <motion.path 
                d="M 750 400 L 1050 400" fill="none" stroke="#fff" strokeWidth="6" strokeDasharray="15 285"
                animate={{ strokeDashoffset: [300, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "linear", delay: 1.8 }}
              />
              <motion.path 
                d="M 750 650 L 1050 650" fill="none" stroke="#fff" strokeWidth="6" strokeDasharray="15 285"
                animate={{ strokeDashoffset: [300, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "linear", delay: 1.6 }}
              />
            </g>
          </svg>

          {/* === Isometric Floating Nodes === */}
          
          {/* Node 1: Webhook */}
          <div className="absolute pointer-events-auto" style={{ left: 150, top: 400, transformStyle: "preserve-3d" }}>
            <motion.div 
              animate={{ z: [30, 50, 30] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative -left-1/2 -top-1/2 w-[260px] bg-[#0c0514]/90 backdrop-blur-xl border border-[#b255ff]/50 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(178,85,255,0.3)] hover:shadow-[0_40px_80px_rgba(178,85,255,0.6)] hover:-translate-y-2 transition-all cursor-pointer group"
            >
              <div className="bg-[#190d26]/80 px-4 py-3 border-b border-[#b255ff]/30 flex items-center justify-between group-hover:bg-[#190d26]">
                 <div className="flex items-center gap-2 text-white text-sm font-semibold"><Webhook className="w-5 h-5 text-[#d08bff]" /> Stripe Webhook</div>
                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
              </div>
              <div className="p-4 space-y-3">
                 <div className="flex justify-between items-center bg-black/40 px-3 py-2 rounded border border-white/5"><span className="uppercase text-[10px] text-neutral-400 font-bold tracking-wider">Method</span><span className="text-emerald-400 font-mono text-xs font-bold">POST</span></div>
                 <div className="flex justify-between items-center bg-black/40 px-3 py-2 rounded border border-white/5"><span className="uppercase text-[10px] text-neutral-400 font-bold tracking-wider">Auth</span><span className="text-[#00ffff] flex items-center gap-1 text-xs"><Lock className="w-3 h-3" /> Valid</span></div>
                 {/* Mini traffic chart */}
                 <div className="flex items-end gap-1 h-6 mt-2 opacity-50">
                    <motion.div animate={{ height: ["40%", "80%", "40%"] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-full bg-[#d08bff] rounded-t-sm" />
                    <motion.div animate={{ height: ["20%", "60%", "20%"] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-full bg-[#d08bff] rounded-t-sm" />
                    <motion.div animate={{ height: ["60%", "100%", "60%"] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-full bg-[#d08bff] rounded-t-sm" />
                    <motion.div animate={{ height: ["30%", "70%", "30%"] }} transition={{ duration: 1.4, repeat: Infinity }} className="w-full bg-[#d08bff] rounded-t-sm" />
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Node 2: Logic Router */}
          <div className="absolute pointer-events-auto" style={{ left: 450, top: 400, transformStyle: "preserve-3d" }}>
            <motion.div 
              animate={{ z: [50, 70, 50] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative -left-1/2 -top-1/2 w-[260px] bg-[#0c0514]/90 backdrop-blur-xl border border-[#00ffff]/40 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,255,255,0.2)] hover:shadow-[0_40px_80px_rgba(0,255,255,0.4)] hover:-translate-y-2 transition-all cursor-pointer group"
            >
              <div className="bg-white/5 px-4 py-3 border-b border-[#00ffff]/20 flex items-center gap-2 text-white text-sm font-semibold group-hover:bg-[#00ffff]/10 transition-colors">
                 <Network className="w-5 h-5 text-[#00ffff]" /> Core Router
              </div>
              <div className="p-4 space-y-3">
                 <div className="bg-black/40 border border-white/5 p-3 rounded space-y-2">
                    <div className="flex justify-between items-center text-xs"><span className="text-neutral-400">Load</span><span className="text-[#00ffff] font-mono">1.2ms</span></div>
                    <div className="w-full bg-black rounded-full h-1.5"><div className="bg-[#00ffff] h-1.5 rounded-full w-[35%]" /></div>
                 </div>
                 <div className="flex justify-between items-center bg-black/40 px-3 py-2 rounded border border-white/5"><span className="uppercase text-[10px] text-neutral-400 font-bold tracking-wider">Active Rules</span><span className="text-white font-mono text-xs">14</span></div>
              </div>
            </motion.div>
          </div>

          {/* Node 3: AI NLP */}
          <div className="absolute pointer-events-auto" style={{ left: 750, top: 150, transformStyle: "preserve-3d" }}>
            <motion.div 
              animate={{ z: [40, 60, 40] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="relative -left-1/2 -top-1/2 w-[260px] bg-[#0c0514]/90 backdrop-blur-xl border border-[#00ffff]/30 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,255,255,0.2)] hover:-translate-y-2 transition-all cursor-pointer"
            >
              <div className="bg-[#00ffff]/10 px-4 py-3 border-b border-[#00ffff]/20 flex justify-between items-center">
                 <div className="flex items-center gap-2 text-white text-sm font-semibold"><Activity className="w-5 h-5 text-[#00ffff]" /> NLP Engine</div>
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                    <Zap className="w-3 h-3 text-[#00ffff]" />
                 </motion.div>
              </div>
              <div className="p-4 space-y-3">
                 <div className="flex justify-between items-center bg-black/40 px-3 py-2 rounded border border-white/5"><span className="uppercase text-[10px] text-neutral-400 font-bold">Model</span><span className="text-[#00ffff] font-mono text-xs">Cohere V3</span></div>
                 <div className="text-xs text-neutral-500 font-mono italic">"Extracting intent..."</div>
              </div>
            </motion.div>
          </div>

          {/* Node 4: DB Layer */}
          <div className="absolute pointer-events-auto" style={{ left: 750, top: 400, transformStyle: "preserve-3d" }}>
            <motion.div 
              animate={{ z: [25, 45, 25] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="relative -left-1/2 -top-1/2 w-[260px] bg-[#0c0514]/90 backdrop-blur-xl border border-[#b255ff]/40 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(178,85,255,0.2)] hover:-translate-y-2 transition-all cursor-pointer"
            >
              <div className="bg-[#b255ff]/10 px-4 py-3 border-b border-[#b255ff]/20 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-white text-sm font-semibold"><Database className="w-5 h-5 text-[#b255ff]" /> Postgres DB</div>
                 <Server className="w-4 h-4 text-neutral-500" />
              </div>
              <div className="p-4 space-y-3">
                 <div className="flex justify-between items-center bg-black/40 px-3 py-2 rounded border border-white/5"><span className="uppercase text-[10px] text-neutral-400 font-bold">Action</span><span className="text-[#b255ff] font-mono text-xs">UPSERT</span></div>
                 <div className="flex justify-between items-center bg-black/40 px-3 py-2 rounded border border-white/5"><span className="uppercase text-[10px] text-neutral-400 font-bold">Latency</span><span className="text-white font-mono text-xs">8ms</span></div>
              </div>
            </motion.div>
          </div>

          {/* Node 5: Gen AI */}
          <div className="absolute pointer-events-auto" style={{ left: 750, top: 650, transformStyle: "preserve-3d" }}>
            <motion.div 
              animate={{ z: [35, 55, 35] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="relative -left-1/2 -top-1/2 w-[260px] bg-[#0c0514]/90 backdrop-blur-xl border border-[#ff00a0]/40 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(255,0,160,0.25)] hover:-translate-y-2 transition-all cursor-pointer"
            >
              <div className="bg-[#ff00a0]/10 px-4 py-3 border-b border-[#ff00a0]/20 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-white text-sm font-semibold"><Braces className="w-5 h-5 text-[#ff00a0]" /> OpenAI Gen AI</div>
                 <div className="w-2 h-2 bg-[#ff00a0] rounded-sm animate-ping" />
              </div>
              <div className="p-4 space-y-3">
                 <div className="flex justify-between items-center bg-black/40 px-3 py-2 rounded border border-white/5"><span className="uppercase text-[10px] text-neutral-400 font-bold">Model</span><span className="text-[#ff00a0] font-mono text-xs">GPT-4o</span></div>
                 <div className="text-xs text-neutral-300 font-mono tracking-tighter truncate opacity-80">Generating personalized email...<motion.span animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, repeat: Infinity }}>|</motion.span></div>
              </div>
            </motion.div>
          </div>

          {/* Remote Integrations - Endpoints */}

          {/* Node 6: Slack */}
          <div className="absolute pointer-events-auto" style={{ left: 1050, top: 150, transformStyle: "preserve-3d" }}>
            <motion.div 
              animate={{ z: [20, 40, 20] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="relative -left-1/2 -top-1/2 w-[220px] bg-[#0c0514]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#00ffff]/50 transition-colors shadow-[0_20px_40px_rgba(0,0,0,0.8)] cursor-pointer"
            >
              <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-white text-sm font-medium"><Bell className="w-4 h-4 text-[#00ffff]" /> Slack</div>
                 <CheckCircle className="w-3 h-3 text-emerald-500" />
              </div>
            </motion.div>
          </div>

          {/* Node 7: Warehouse */}
          <div className="absolute pointer-events-auto" style={{ left: 1050, top: 400, transformStyle: "preserve-3d" }}>
            <motion.div 
              animate={{ z: [10, 30, 10] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="relative -left-1/2 -top-1/2 w-[220px] bg-[#0c0514]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#b255ff]/50 transition-colors shadow-[0_20px_40px_rgba(0,0,0,0.8)] cursor-pointer"
            >
              <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-white text-sm font-medium"><Box className="w-4 h-4 text-[#b255ff]" /> Snowflake</div>
                 <CheckCircle className="w-3 h-3 text-emerald-500" />
              </div>
            </motion.div>
          </div>

          {/* Node 8: Mail */}
          <div className="absolute pointer-events-auto" style={{ left: 1050, top: 650, transformStyle: "preserve-3d" }}>
            <motion.div 
              animate={{ z: [25, 45, 25] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
              className="relative -left-1/2 -top-1/2 w-[220px] bg-[#0c0514]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff00a0]/50 transition-colors shadow-[0_20px_40px_rgba(0,0,0,0.8)] cursor-pointer"
            >
              <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-white text-sm font-medium"><Mail className="w-4 h-4 text-[#ff00a0]" /> SendGrid</div>
                 <CheckCircle className="w-3 h-3 text-emerald-500" />
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
