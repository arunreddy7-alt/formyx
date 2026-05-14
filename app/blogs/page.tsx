import Header from "@/components/header"
import { StickyFooter } from "@/components/sticky-footer"

const POSTS = [
  {
    title: "How Multi-Agent Systems are Replacing Legacy RPA",
    date: "May 12, 2026",
    category: "AI Architecture",
    excerpt: "Robotic Process Automation is brittle. Learn how dynamic, context-aware AI agents provide a more resilient approach to workflow automation.",
    image: "purple-gradient"
  },
  {
    title: "Enhancing Lead Qualification with Omnichannel LLMs",
    date: "May 05, 2026",
    category: "Growth & Sales",
    excerpt: "Discover how processing incoming customer interactions on WhatsApp and Web concurrently boosts qualified leads by 40%.",
    image: "pink-gradient"
  },
  {
    title: "Security & Guardrails in Enterprise AI Orchestration",
    date: "April 28, 2026",
    category: "Security",
    excerpt: "Why human-in-the-loop workflows aren't just for usability, but are paramount for SOC2 compliance in financial services applications.",
    image: "cyan-gradient"
  },
  {
    title: "The Ultimate Guide to RAG Knowledge Bases",
    date: "April 15, 2026",
    category: "Technical Deep-Dive",
    excerpt: "Setting up unstructured vector databases to give large language models the exact context they need without hallucination.",
    image: "dark-gradient"
  },
  {
    title: "Scaling Customer Support 10x with Automated Helpdesks",
    date: "April 02, 2026",
    category: "Customer Success",
    excerpt: "A case study examining internal helpdesk implementations that reduced average resolution time from 4 days to 4 minutes.",
    image: "purple-gradient"
  },
  {
    title: "Defining Memory Context Windows in Long-Term Chats",
    date: "March 19, 2026",
    category: "AI Architecture",
    excerpt: "When does an AI forget? Exploring sliding windows, vector embeddings, and persistent databases for seamless long-running chats.",
    image: "pink-gradient"
  },
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#610094]/30 selection:text-[#d08bff]">
      <Header onContact={() => {}} />

      <main className="pt-32 pb-40 min-h-screen">
        <div className="absolute top-0 -left-[20%] w-[600px] h-[600px] bg-[#610094]/15 blur-[200px] mix-blend-screen rounded-full pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-6 mt-16">
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d08bff] to-[#610094] italic font-serif font-light">Insights</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl font-light">
              Deep dives, technical guides, and industry analyses on the future of intelligent automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post, i) => (
              <article 
                key={i} 
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0c0c0e] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#610094]/50 hover:shadow-[0_10px_40px_rgba(97,0,148,0.15)] cursor-pointer"
              >
                <div className="aspect-[16/10] w-full relative overflow-hidden bg-[#1a0f2e]">
                  {/* Colorful generated placeholders */}
                  {post.image === 'purple-gradient' && <div className="absolute inset-0 bg-gradient-to-br from-[#610094]/40 to-black" />}
                  {post.image === 'pink-gradient' && <div className="absolute inset-0 bg-gradient-to-br from-[#b255ff]/40 to-black" />}
                  {post.image === 'cyan-gradient' && <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/20 to-black" />}
                  {post.image === 'dark-gradient' && <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black" />}
                  
                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]" />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-medium text-[#d08bff] uppercase tracking-wider bg-[#d08bff]/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-neutral-500">{post.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-white/90 group-hover:text-white transition-colors">{post.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">{post.excerpt}</p>
                  
                  <div className="mt-auto flex items-center text-sm font-medium text-[#d08bff] opacity-80 group-hover:opacity-100 transition-opacity">
                    Read article <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <StickyFooter />
    </div>
  )
}
