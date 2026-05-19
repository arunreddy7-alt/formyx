"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionSeperator } from "./ui/section-seperator"
import Sseperator from "./ui/seperator"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  const faqs = [
    {
      question: "What does Formyx Solutions actually do?",
      answer:
        "Formyx Solutions helps businesses grow and scale using intelligent AI automation and next-generation Gen AI systems. We design AI-powered websites, chatbots, automation pipelines, and custom AI solutions that improve efficiency, customer engagement, and operational performance.",
    },
    {
      question: "How can AI automation help my business?",
      answer:
        "AI automation reduces manual work, improves response times, captures leads automatically, and enables businesses to operate 24/7. From customer support and lead qualification to internal workflows, automation helps teams move faster while scaling without added overhead.",
    },
    {
      question: "Do you build custom AI solutions or only templates?",
      answer:
        "All our solutions are custom-built. We architect AI systems around your specific workflows, industry standards, and growth plans. This includes RAG pipelines, multi-agent systems, and end-to-end automation tailored precisely to your business needs.",
    },
    {
      question: "Can AI work with our existing tools and systems?",
      answer:
        "Yes. Our solutions are integration-first. We connect AI systems with your existing CRMs, websites, social platforms, internal tools, APIs, and databases—without forcing migrations or disrupting current operations.",
    },
    {
      question: "Is AI suitable for small or growing businesses?",
      answer:
        "Absolutely. AI is not just for enterprises. We design scalable solutions that start lean and grow with your business, helping startups and SMEs automate intelligently without unnecessary complexity or cost.",
    },
  ]

  return (
    <section id="faq" className="relative overflow-hidden py-32 bg-[#020005]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            
            {/* Left Side: Typography */}
            <div className="lg:w-[35%] flex flex-col">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-[#b255ff] text-xs font-mono tracking-widest uppercase mb-6"
                >
                    FREQUENTLY ASKED QUESTIONS
                </motion.div>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-medium tracking-tight leading-[1] text-white mb-6"
                >
                      What Problem Are You Trying to Solve?     
                </motion.h2>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-[#888] text-sm md:text-base leading-relaxed"
                >
                    Short answers to branding, AI automation, system integration, workflows, apps, and post-launch support.
                </motion.p>
            </div>

            {/* Right Side: Accordion */}
            <div className="lg:w-[65%] flex flex-col mt-8 lg:mt-0">
                {faqs.map((faq, index) => {
                    const isOpen = openItems.includes(index)
                    return (
                        <div key={index} className="border-b border-white/10 overflow-hidden">
                            
                            {/* Item header */}
                            <div 
                                className="flex items-center justify-between py-8 cursor-pointer group" 
                                onClick={() => toggleItem(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault()
                                        toggleItem(index)
                                    }
                                }}
                            >
                                <div className="flex items-start gap-5 pr-8">
                                    {/* The Square Bullet */}
                                    <span className={`mt-2.5 w-2.5 h-2.5 flex-shrink-0 ${isOpen ? 'bg-[#b255ff]' : 'bg-white/20 group-hover:bg-white/40'} transition-colors duration-300`} />
                                    
                                    <h3 className={`text-lg md:text-[22px] tracking-tight font-medium transition-colors duration-300 ${isOpen ? 'text-[#b255ff]' : 'text-white'}`}>
                                        {faq.question}
                                    </h3>
                                </div>
                                <div className={`flex-shrink-0 transition-colors duration-300 ${isOpen ? 'text-[#b255ff]' : 'text-[#555] group-hover:text-white'}`}>
                                    {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                                </div>
                            </div>
                            
                            {/* Content */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                    >
                                        <div className="pl-[30px] pr-8 pb-8 text-[#aaa] font-light leading-relaxed text-sm md:text-base">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            
                        </div>
                    )
                })}
            </div>
            
        </div>
      </div>
    </section>
  )
}