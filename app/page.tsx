"use client"

import { useState, useEffect } from "react"

import Header from "@/components/header"
import Hero from "@/components/hero"
import CoreCapabilities from "@/components/core-capabilities"
import WhoWeBuildFor from "@/components/who-we-build-for"
import Marquee from "@/components/marquee"
import HowWeWork from "@/components/how-we-work"
import WhatMakesUsDifferent from "@/components/diff"
import HowClientsUseFormyx from "@/components/usage"
import { FAQSection } from "@/components/faq-section"
import { StickyFooter } from "@/components/sticky-footer"
import Popup from "@/components/popup"
import Industries from "@/components/industries"
import Features from "@/components/features"
import RecentProjects from "@/components/recent-projects"

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
      <RecentProjects />
      <CoreCapabilities />
      <WhoWeBuildFor />
      <Marquee />
      <Industries />
      <HowWeWork />
      <WhatMakesUsDifferent />
      <HowClientsUseFormyx />
      <FAQSection />
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
