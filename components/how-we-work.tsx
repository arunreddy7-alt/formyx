"use client"

import { motion } from "framer-motion"
import { Type, Code2, Languages, Users, Database, ClipboardCheck, Network, Sparkles, Cpu, Activity, Zap, Workflow } from "lucide-react"

export default function HowWeWork() {

  const drawLeft = (sy: number) => {
    const mx = (190 + 300) / 2;
    return `M 190,${sy} C ${mx},${sy} ${mx},250 300,250`;
  };

  const drawRight = (ey: number) => {
    const mx = (700 + 810) / 2;
    return `M 700,250 C ${mx},250 ${mx},${ey} 810,${ey}`;
  };

  const leftNodes = [
    { id: 'input', label: 'Input', y: 100, icon: Type },
    { id: 'code', label: 'Code', y: 170, icon: Code2 },
    { id: 'language', label: 'Language', y: 330, icon: Languages },
    { id: 'agents_l', label: 'Agents', y: 400, icon: Users },
  ];

  const rightNodes = [
    { id: 'datasets', label: 'Datasets', y: 100, icon: Database },
    { id: 'agents_r', label: 'Agents', y: 170, icon: Users },
    { id: 'assessments', label: 'Assessments', y: 330, icon: ClipboardCheck },
    { id: 'api', label: 'API', y: 400, icon: Network },
  ];

  return (
    <section className="py-32 bg-[#020005] overflow-hidden relative font-sans text-white border-t border-white/5">

      {/* High Fidelity Typography Header */}
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex items-center justify-between w-full max-w-[1500px] mx-auto text-[10px] md:text-sm tracking-widest font-mono text-[#888] uppercase border-b border-white/5 pb-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#610094] to-[#3F0071]" />
            <span>HOW WE WORK & AUTOMATE</span>
          </div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#610094] to-[#3F0071] hidden sm:block font-bold">
                  // PROCESS FLOW
          </div>
        </div>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1] text-white mb-6 lg:mb-12">
          Infinite scalable.<br />
          Logic architectures.
        </h2>
      </div>

      {/* Heavy Violet Central Ambient Glow */}
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[600px] bg-gradient-to-r from-[#610094]/10 via-[#b255ff]/5 to-[#3F0071]/10 blur-[150px] mix-blend-screen rounded-[100%] pointer-events-none" />

      {/* Massive Responsive SVG Architecture Diagram */}
      <div className="w-full max-w-[1400px] mx-auto px-2 md:px-6 relative z-10">

        <div className="relative w-full aspect-[16/10] md:aspect-[2/1] lg:aspect-[21/9]">

          {/* Massive Central Glow for Architecture Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[30%] bg-gradient-to-br from-[#610094]/30 to-[#3F0071]/30 blur-[80px] mix-blend-screen rounded-full pointer-events-none" />

          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#610094" />
                <stop offset="100%" stopColor="#b255ff" />
              </linearGradient>
              <linearGradient id="flow-gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b255ff" />
                <stop offset="100%" stopColor="#3F0071" />
              </linearGradient>
            </defs>

            {/* Left Side Base Lines */}
            {leftNodes.map((n) => (
              <path
                key={`b-${n.id}`}
                d={drawLeft(n.y)}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1.5"
                fill="none"
              />
            ))}

            {/* Left Side Animated Flow Lasers */}
            {leftNodes.map((n, i) => (
              <motion.path
                key={`a-${n.id}`}
                d={drawLeft(n.y)}
                stroke="url(#flow-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="4 200"
                animate={{ strokeDashoffset: [-200, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: i * 0.4 }}
                fill="none"
              />
            ))}

            {/* Right Side Base Lines */}
            {rightNodes.map((n) => (
              <path
                key={`b-${n.id}`}
                d={drawRight(n.y)}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1.5"
                fill="none"
              />
            ))}

            {/* Right Side Animated Flow Lasers */}
            {rightNodes.map((n, i) => (
              <motion.path
                key={`a-${n.id}`}
                d={drawRight(n.y)}
                stroke="url(#flow-gradient-right)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="4 200"
                animate={{ strokeDashoffset: [0, -200] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: i * 0.4 }}
                fill="none"
              />
            ))}

            {/* Internal Core Connections */}
            {/* Left Core -> LLMs */}
            <path d="M 400,250 L 420,250" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
            <motion.path d="M 400,250 L 420,250" stroke="#b255ff" strokeWidth="2" strokeDasharray="3 15" animate={{ strokeDashoffset: [0, -18] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />

            {/* LLMs -> Right Core */}
            <path d="M 580,250 L 600,250" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
            <motion.path d="M 580,250 L 600,250" stroke="#b255ff" strokeWidth="2" strokeDasharray="3 15" animate={{ strokeDashoffset: [0, -18] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />

            {/* --- FOREIGN OBJECTS (HTML INSIDE SVG FOR PERFECT ALIGNMENT) --- */}

            {/* Left Nodes (Center X = 130, Width = 120, Heights = 40) */}
            {leftNodes.map((n, i) => (
              <foreignObject key={`fo-${n.id}`} x={130 - 60} y={n.y - 20} width="120" height="40" className="pointer-events-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full h-full bg-[#0A0510] border border-[#610094]/40 rounded-full flex items-center justify-start px-3 gap-2 shadow-[0_0_15px_rgba(97,0,148,0.2)] hover:border-[#b255ff]/70 cursor-pointer group"
                >
                  <n.icon className="w-3.5 h-3.5 text-[#b255ff] group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-medium tracking-wide text-white/90">{n.label}</span>
                </motion.div>
              </foreignObject>
            ))}

            {/* Right Nodes (Center X = 870, Width = 120, Heights = 40) */}
            {rightNodes.map((n, i) => (
              <foreignObject key={`fo-${n.id}`} x={870 - 60} y={n.y - 20} width="120" height="40" className="pointer-events-auto">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="w-full h-full bg-[#0A0510] border border-[#610094]/40 rounded-full flex items-center justify-start px-3 gap-2 shadow-[0_0_15px_rgba(97,0,148,0.2)] hover:border-[#b255ff]/70 cursor-pointer group"
                >
                  <n.icon className="w-3.5 h-3.5 text-[#b255ff] group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-medium tracking-wide text-white/90">{n.label}</span>
                </motion.div>
              </foreignObject>
            ))}

            {/* Agent Core (Center X = 350, Box Width = 100) */}
            <foreignObject x={350 - 50} y={250 - 70} width="100" height="140" className="pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="w-full h-full flex flex-col items-center justify-center p-1"
              >
                <div className="w-[72px] h-[72px] bg-[#0A0510] border border-[#610094]/50 rounded-xl flex items-center justify-center p-[6px] shadow-[0_0_30px_rgba(97,0,148,0.3)] hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-[#0A0510] border-2 border-white/10 rounded-lg flex items-center justify-center relative overflow-hidden group">
                    <Zap className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#610094]/30 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </div>
                </div>
                <span className="text-[9px] font-mono text-amber-300/80 tracking-widest uppercase mt-4">Intake Node</span>
              </motion.div>
            </foreignObject>

            {/* LLMs Central Node (Center X = 500, Box Width = 160) */}
            <foreignObject x={500 - 80} y={250 - 60} width="160" height="120" className="pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="w-full h-full flex flex-col items-center justify-center p-1"
              >
                <div className="w-[150px] h-[60px] bg-[#0A0510] border border-[#610094]/60 rounded-2xl flex items-center justify-center gap-1.5 px-2 shadow-[0_0_40px_rgba(97,0,148,0.4)] relative overflow-hidden">
                  {/* Left Chip */}
                  <div className="w-[40px] h-[40px] bg-black/40 border border-white/5 rounded-lg flex items-center justify-center hover:border-[#b255ff]/50 transition-colors">
                    <Activity className="w-4 h-4 text-emerald-400" />
                  </div>
                  {/* Core Chip */}
                  <div className="w-[44px] h-[44px] bg-[#0A0510] border-2 border-white/20 rounded-xl flex items-center justify-center relative hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#610094]/40 to-[#3F0071]/40 animate-pulse rounded-xl" />
                    <Cpu className="w-5 h-5 text-[#d08bff]" />
                  </div>
                  {/* Right Chip */}
                  <div className="w-[40px] h-[40px] bg-black/40 border border-white/5 rounded-lg flex items-center justify-center hover:border-[#b255ff]/50 transition-colors">
                    <Sparkles className="w-4 h-4 text-violet-400" />
                  </div>
                </div>
                <span className="text-[9px] font-mono text-[#888] tracking-widest uppercase mt-4">Model Core</span>
              </motion.div>
            </foreignObject>

            {/* Action Engine (Center X = 650, Box Width = 100) */}
            <foreignObject x={650 - 50} y={250 - 70} width="100" height="140" className="pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="w-full h-full flex flex-col items-center justify-center p-1"
              >
                <div className="w-[72px] h-[72px] bg-[#0A0510] border border-[#610094]/50 rounded-xl flex items-center justify-center p-[6px] shadow-[0_0_30px_rgba(97,0,148,0.3)] hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-[#0A0510] border-2 border-white/10 rounded-lg flex items-center justify-center relative overflow-hidden group">
                    <Workflow className="w-5 h-5 text-white group-hover:text-emerald-400 transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#610094]/30 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </div>
                </div>
                <span className="text-[9px] font-mono text-emerald-300/80 tracking-widest uppercase mt-4">Execution Node</span>
              </motion.div>
            </foreignObject>

          </svg>
        </div>
      </div>
    </section>
  )
}
