"use client"

import { useState, useEffect } from "react"

import Header from "@/components/header"
import Hero from "@/components/hero"
import CoreCapabilities from "@/components/core-capabilities"
import Marquee from "@/components/marquee"
import HowWeWork from "@/components/how-we-work"
import WhatMakesUsDifferent from "@/components/diff"
import { FAQSection } from "@/components/faq-section"
import { StickyFooter } from "@/components/sticky-footer"
import Popup from "@/components/popup"
import Industries from "@/components/industries"
import Features from "@/components/features"

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // lock scroll when popup open
  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? "hidden" : ""
  }, [isPopupOpen])

  return (
    <div className="min-h-screen bg-black text-white dark">
      <Header onContact={() => setIsPopupOpen(true)} />


      <Hero onContact={() => setIsPopupOpen(true)} />

      <Features />
      <CoreCapabilities />
      <Marquee />
      <Industries />
      <HowWeWork />
      <WhatMakesUsDifferent />
      <FAQSection />
      <div className="h-64 sm:h-[350px] w-full pointer-events-none" />
      <StickyFooter />

      {/* SINGLE popup instance */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        companyName="Formyx"
      />
    </div>
  )
}
