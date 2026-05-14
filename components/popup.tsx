"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { MeshGradient } from "@paper-design/shaders-react"

interface DemoRequestModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit?: (formData: FormData) => void | Promise<void>
  companyName?: string
}

interface FormData {
  name: string
  email: string
  website: string
  message: string
}

export default function Popup({ isOpen, onClose, onSubmit, companyName = "Acme" }: DemoRequestModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    website: "",
    message: "",
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
  
      if (!res.ok) throw new Error("Failed")
  
      setFormData({
        name: "",
        email: "",
        website: "",
        message: "",
      })
  
      onClose()
    } catch (err) {
      console.error("Submit failed", err)
    } finally {
      setIsSubmitting(false)
    }
  }
  

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-3 sm:p-2">
          <motion.div
            initial={{ y: 72, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 48, opacity: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ borderRadius: "24px" }}
            className="
              relative flex
              w-full
              max-w-5xl
              sm:max-h-[90vh]
              h-screen
              sm:h-auto
              overflow-y-auto
              flex-col
              sm:flex-col
              md:flex-row
            "
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              layout={false}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute inset-0
                sm:h-full
                h-full
                overflow-hidden
                pointer-events-none
              "
              style={{
                borderRadius: "24px",
              }}
            >
              <MeshGradient
                speed={1}
                colors={["#610094", "#150050", "#8700f2", "#3F0071"]}
                distortion={0.8}
                swirl={0.1}
                grainMixer={0}
                grainOverlay={0}
                className="inset-0 sticky top-0"
                style={{ height: "100%", width: "100%" }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.35,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="
                relative z-10
                flex flex-col
                md:flex-row
                w-full
                min-h-full
                items-start
                md:items-center
                px-4 py-6
                sm:px-6 sm:py-8
                md:px-8 md:py-10
                lg:p-16
                gap-6
                sm:gap-8
                md:gap-12
                lg:gap-16
              "
            >
              <div className="flex-1 flex flex-col justify-center space-y-3 w-full order-1 md:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-none tracking-[-0.03em]">
                  Talk to sales
                </h2>

                <ul className="space-y-3 sm:space-y-4 md:space-y-6 pt-4 text-sm sm:text-base">
                  <li className="relative pl-5">
                    <span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-white" />
                    Learn how {companyName} can transform your business with tailored solutions and flexible pricing
                    options.
                  </li>
                  <li className="relative pl-5">
                    <span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-white" />
                    Experience firsthand how {companyName} Platform accelerates delivery &amp; drives results.
                  </li>
                </ul>

                <div className="pt-4 sm:pt-6 md:pt-8 mt-4 sm:mt-6 md:mt-8 border-t border-white/20">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-[150%] mb-3 sm:mb-4">
                    contact@formyxsolutions.com
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base md:text-lg text-white/80">
                    <span>+91 95424 58159</span>
                    <span>|</span>
                    <span>+91 85198 73005</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full order-2 md:order-2">
                <form className="space-y-3 sm:space-y-4 md:space-y-5" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[9px] sm:text-[10px] text-white mb-1.5 sm:mb-2 tracking-[0.5px] uppercase"
                    >
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="
                        w-full h-9 sm:h-10 px-3 sm:px-4 rounded-lg
                        bg-white/10 backdrop-blur-md
                        border border-white/20
                        text-white placeholder:text-white/50
                        hover:bg-white/15
                        focus:outline-none focus:ring-1 focus:ring-white/40
                        transition-all text-xs sm:text-sm
                      "
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[9px] sm:text-[10px] text-white mb-1.5 sm:mb-2 tracking-[0.5px] uppercase"
                    >
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="
                        w-full h-9 sm:h-10 px-3 sm:px-4 rounded-lg
                        bg-white/10 backdrop-blur-md
                        border border-white/20
                        text-white placeholder:text-white/50
                        hover:bg-white/15
                        focus:outline-none focus:ring-1 focus:ring-white/40
                        transition-all text-xs sm:text-sm
                      "
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {/* Website */}
                    <div className="flex-1">
                      <label
                        htmlFor="website"
                        className="block text-[9px] sm:text-[10px] text-white mb-1.5 sm:mb-2 tracking-[0.5px] uppercase"
                      >
                        COMPANY WEBSITE
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="
                          w-full h-9 sm:h-10 px-3 sm:px-4 rounded-lg
                          bg-white/10 backdrop-blur-md
                          border border-white/20
                          text-white placeholder:text-white/50
                          hover:bg-white/15
                          focus:outline-none focus:ring-1 focus:ring-white/40
                          transition-all text-xs sm:text-sm
                        "
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[9px] sm:text-[10px] text-white mb-1.5 sm:mb-2 tracking-[0.5px] uppercase"
                    >
                      BRIEF DESCRIPTION ABOUT YOUR COMPANY / BUSINESS
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="
                        w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
                        bg-white/10 backdrop-blur-md
                        border border-white/20
                        text-white placeholder:text-white/50
                        hover:bg-white/15
                        focus:outline-none focus:ring-1 focus:ring-white/40
                        transition-all resize-none text-xs sm:text-sm
                      "
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      w-full h-9 sm:h-10 rounded-full
                      bg-white text-[#150050]
                      font-medium tracking-[-0.03em]
                      text-sm sm:text-base
                      hover:bg-white/90
                      hover:cursor-pointer
                      transition-colors
                      disabled:opacity-50 disabled:cursor-not-allowed
                    "
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.button
              onClick={onClose}
              className="absolute right-3 sm:right-6 top-3 sm:top-6 z-20 flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center text-white bg-white/10 hover:bg-white/20 transition-colors hover:cursor-pointer rounded-full"
              aria-label="Close"
            >
              <X className="h-4 sm:h-5 w-4 sm:w-5" />
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
