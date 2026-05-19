"use client"

import React, { useState, useEffect } from "react"
import { SectionSeperator } from "./ui/section-seperator"
import Sseperator from "./ui/seperator"

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

const features = [
  { title: "GPT CONVERSATIONS", description: "Natural, context-aware AI that understands complex customer queries." },
  { title: "OMNICHANNEL MESSAGING", description: "Website, WhatsApp, Messenger, Instagram — one unified inbox." },
  { title: "AI LEAD QUALIFICATION", description: "Automatically score and qualify leads based on conversation signals." },
  { title: "APPOINTMENT AUTOMATION", description: "Check availability, book slots, send reminders — hands-free." },
  { title: "SMART WORKFLOW ENGINE", description: "Build multi-step automations triggered by conversation events." },
  { title: "EASY CRM INTEGRATION", description: "Manage leads, conversations, and pipeline in one place." },
  { title: "POWERFUL INTEGRATIONS", description: "Connect with Zapier, HubSpot, Salesforce, Calendly, and more." },
  { title: "VOICE AI", description: "AI-powered voice interactions for phone-based workflows." },
  { title: "REAL-TIME ANALYTICS", description: "Track conversations, conversion rates, and agent performance." },
  { title: "RAG KNOWLEDGE BASE", description: "Train your AI on docs, FAQs, and product catalogs." },
]

function FeatureBlock({ feature }: { feature: typeof features[0] }) {
    const [isHovering, setIsHovering] = useState(false);
    
    return (
        <div 
           className="flex flex-col group cursor-crosshair"
           onMouseEnter={() => setIsHovering(true)}
           onMouseLeave={() => setIsHovering(false)}
        >
            <div className={`font-mono text-sm tracking-wider uppercase flex items-center transition-all duration-300 font-medium h-6 ${isHovering ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#610094] to-[#3F0071]' : 'text-[#333]'}`}>
                {isHovering && <span className="text-[10px] mr-2 text-[#610094]">◆</span>}
                <ScrambleText text={feature.title} isHovering={isHovering} />
            </div>
            
            <div className={`w-full h-[1px] mt-3 mb-5 transition-all duration-300 ${isHovering ? 'bg-gradient-to-r from-[#610094] to-[#3F0071] opacity-70' : 'bg-[#111111]/15 opacity-100'}`} />
            
            <p className="text-[#666] text-sm md:text-base leading-relaxed pr-8 font-normal">
                {feature.description}
            </p>
        </div>
    )
}

export default function Features() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#F3F3F3] text-[#111111]" id="platform-features">
      <Sseperator />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1500px]">
         
         <div className="flex flex-col mb-24">
             <h2 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-16">
                 Next-Gen Features.<br/>
                 Limitless scale.
             </h2>

             <div className="flex items-center justify-between text-[10px] md:text-xs tracking-widest font-mono text-[#555] uppercase mt-4">
                 <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#610094] to-[#3F0071]" />
                      <span>PLATFORM FEATURES & CAPABILITIES</span>
                 </div>
                 <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#610094] to-[#3F0071] hidden md:block font-bold mt-1.5 md:mt-0">
                      // EVERYTHING INCLUDED
                 </div>
             </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
             {features.map((feature, i) => (
                 <FeatureBlock key={i} feature={feature} />
             ))}
         </div>
         
      </div>
    </section>
  )
}
