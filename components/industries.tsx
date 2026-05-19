"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

const CHARS = "ABCDEFGHIJ!<>-_\\/[]{}—=+*^?#";

function ScrambleText({ text, isHovering }: { text: string, isHovering: boolean }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    let interval: NodeJS.Timeout;

    const animate = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setDisplayText(text.split("").map((letter, index) => {
          // Keep spaces intact
          if (letter === " ") return " ";
          if (index < Math.floor(iteration)) {
            return text[index];
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join(""));

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 2; // adjust speed of decoding here
      }, 35);
    }
    animate();
    return () => clearInterval(interval);
  }, [isHovering, text]);

  return <span>{displayText}</span>;
}

const industries = [
  { title: "REAL ESTATE", description: "Property inquiries, site visit booking, lead qualification for agents & brokers." },
  { title: "HEALTHCARE", description: "Appointment scheduling, patient intake, insurance queries, and follow-ups." },
  { title: "EDUCATION", description: "Admission inquiries, enrollment workflows, course recommendations." },
  { title: "HOSPITALITY", description: "Room booking, guest services, concierge automation, upsell offers." },
  { title: "RETAIL", description: "Product discovery, order tracking, inventory checks, returns handling." },
  { title: "FINANCIAL SERVICES", description: "Loan applications, account queries, KYC automation, advisory support." },
  { title: "ENTERPRISE", description: "Internal helpdesk, HR workflows, IT support automation, vendor management." },
  { title: "MANUFACTURING", description: "Product inquiries, distributor support, order tracking, service requests, and CRM/ERP-integrated automation." },
]

function IndustryBlock({ 
  industry, 
  textColor, 
  lineColor, 
  paragraphColor 
}: { 
  industry: typeof industries[0],
  textColor: MotionValue<string>,
  lineColor: MotionValue<string>,
  paragraphColor: MotionValue<string>
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="flex flex-col group cursor-crosshair pb-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative w-full h-6 font-mono text-sm tracking-wider uppercase font-medium">
          
          {/* Base Scroll-Aware Text */}
          <motion.div 
              style={{ color: textColor, opacity: isHovering ? 0 : 1 }} 
              className="absolute inset-0 flex items-center transition-opacity duration-300 pointer-events-none"
          >
              <ScrambleText text={industry.title} isHovering={false} />
          </motion.div>
          
          {/* Hover Gradient Text */}
          <motion.div 
              style={{ opacity: isHovering ? 1 : 0 }} 
              className="absolute inset-0 flex items-center transition-opacity duration-300 pointer-events-none"
          >
              <span className="text-[10px] mr-2 text-[#610094]">◆</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#610094] to-[#3F0071]">
                  <ScrambleText text={industry.title} isHovering={isHovering} />
              </span>
          </motion.div>
      </div>

      <div className="relative w-full h-[1px] mt-3 mb-5">
          <motion.div style={{ backgroundColor: lineColor, opacity: isHovering ? 0 : 1 }} className="absolute inset-0 transition-opacity duration-300 pointer-events-none" />
          <motion.div style={{ opacity: isHovering ? 1 : 0 }} className="absolute inset-0 bg-gradient-to-r from-[#610094] to-[#3F0071] opacity-70 transition-opacity duration-300 pointer-events-none" />
      </div>

      <motion.p style={{ color: paragraphColor }} className="text-sm md:text-base leading-relaxed pr-8 font-normal">
        {industry.description}
      </motion.p>
    </div>
  )
}

export default function Industries() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end 100%", "end 30%"]
  });

  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#F3F3F3", "#020005"]);
  const heroText = useTransform(scrollYProgress, [0, 1], ["#111111", "#ffffff"]);
  const subText = useTransform(scrollYProgress, [0, 1], ["#555555", "#888888"]);
  const lineBg = useTransform(scrollYProgress, [0, 1], ["rgba(17,17,17,0.15)", "rgba(255,255,255,0.1)"]);

  return (
    <motion.section 
        ref={containerRef}
        style={{ backgroundColor }}
        className="py-32 relative overflow-hidden" 
        id="industries"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-[1500px]">

        <div className="flex flex-col mb-24">
          <motion.h2 
            style={{ color: heroText }}
            className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-16"
          >
            Intelligent automation.<br />
            One single platform.
          </motion.h2>

          <div className="flex items-center justify-between text-[10px] md:text-xs tracking-widest font-mono uppercase mt-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#610094] to-[#3F0071]" />
              <motion.span style={{ color: subText }}>SUPPORTED INDUSTRIES & USE CASES</motion.span>
            </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#610094] to-[#3F0071] hidden md:block font-bold mt-1.5 md:mt-0">
                      // COMPLETE COVERAGE
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {industries.map((ind, i) => (
            <IndustryBlock 
                key={i} 
                industry={ind}
                textColor={heroText}
                lineColor={lineBg}
                paragraphColor={subText}
            />
          ))}
        </div>

      </div>
    </motion.section>
  )
}
