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
    <section id="faq" className="relative overflow-hidden py-24 pb-100 bg-black">
      <Sseperator />

      <div className="container mx-auto px-4">
        <SectionSeperator badgeText="FAQs" />

        <motion.h2
          className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium text-white md:text-[54px] md:leading-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Common{" "}
          <span className="bg-gradient-to-b from-white via-[#610094] to-[#3F0071] bg-clip-text text-transparent">
            questions
          </span>{" "}
          answered
        </motion.h2>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.08)_inset] transition-all hover:border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
              <div className="flex items-start justify-between">
                <h3 className="pr-4 text-white font-medium">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {openItems.includes(index) ? (
                    <Minus className="text-[#610094]" size={24} />
                  ) : (
                    <Plus className="text-[#610094]" size={24} />
                  )}
                </motion.div>
              </div>

              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    className="mt-4  text-white/70 leading-relaxed overflow-hidden"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}