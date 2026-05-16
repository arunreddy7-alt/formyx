"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, MotionValue } from "framer-motion";

// Locations data
const COUNTRIES = [
  { name: "United States", short: "USA Hub", flag: "🇺🇸", desc: "Leading enterprise AI deployments across North America and key hubs." },
  { name: "United Kingdom", short: "UK Edge Node", flag: "🇬🇧", desc: "European financial sector automation and London edge servers." },
  { name: "Canada", short: "Tech North", flag: "🇨🇦", desc: "Northern tech hubs and advanced AI operational centers." },
  { name: "Singapore", short: "APAC Center", flag: "🇸🇬", desc: "Asia-Pacific data hub and extreme-low-latency networks." },
  { name: "Australia", short: "Oceania Systems", flag: "🇦🇺", desc: "Oceanic logistics and advanced technological operations." }
];

// Extracted component to avoid calling hooks inside a map loop
function CountryWheelItem({ country, idx, smoothProgress, activeIndex, totalLength, isMobile }: { 
    country: any, idx: number, smoothProgress: MotionValue<number>, activeIndex: number, totalLength: number, isMobile: boolean 
}) {
    const y = useTransform(smoothProgress, (p) => {
        const diff = (p * (totalLength - 1)) - idx;
        return diff * (isMobile ? -75 : -120); // Tighter stacking on mobile
    });
    
    const rotateX = useTransform(smoothProgress, (p) => {
        const diff = (p * (totalLength - 1)) - idx;
        return diff * 45;
    });
    
    const scale = useTransform(smoothProgress, (p) => {
        const diff = Math.abs((p * (totalLength - 1)) - idx);
        return Math.max(0.6, 1 - (diff * 0.15));
    });

    return (
        <motion.div 
            style={{ y, rotateX, scale, transformStyle: "preserve-3d" }}
            className="absolute left-0 w-full flex items-center justify-center md:justify-start origin-center md:origin-left"
        >
           <h2 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight whitespace-nowrap transition-all duration-700 ${activeIndex === idx ? 'text-white opacity-100' : 'text-gray-500 opacity-40'}`}>
               {country.name}
           </h2>
        </motion.div>
    );
}

export default function GlobalClients() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      // Small check for ensuring we only run UI logic based on mobile limits
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Spring smoothing for comfortable mousewheel usage
  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 120 });
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Drive the active index purely off scroll
  useMotionValueEvent(smoothProgress, "change", (latest) => {
      const index = Math.min(
          COUNTRIES.length - 1,
          Math.max(0, Math.round(latest * (COUNTRIES.length - 1)))
      );
      setActiveIndex(index);
  });

  // Moves the description up slowly as the scroll reaches the very end (mobile only to close gap)
  const descriptionY = useTransform(smoothProgress, [0.8, 1], [0, isMobile ? -100 : 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#05000a] text-white">
        
        {/* Sticky container that stays fixed on screen while we scroll the section */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-[#05000a]">
            
            {/* Extremely subtle background light leak matching the image */}
            <div className="absolute top-0 right-0 w-[800px] h-screen bg-gradient-to-r from-transparent to-[#d08bff]/5 pointer-events-none" />

            {/* MAIN HEADING AT THE TOP */}
            <div className="absolute top-16 md:top-24 left-0 w-full text-center z-50 pointer-events-none px-6">
                <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1]">
                    Borderless Scale <br className="md:hidden" />
                    for <span className="bg-gradient-to-b from-[#610094] to-[#3F0071] bg-clip-text text-transparent italic">Maximum Impact</span>
                </h2>
                <p className="mt-4 md:mt-6 text-xs md:text-base text-gray-400 max-w-xl mx-auto font-medium">
                    Deploying next-generation infrastructure across strategic global hubs, guaranteeing seamless operational continuity everywhere.
                </p>
            </div>

            {/* The 4-part layout precisely mimicking the user's reference image */}
            <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8 items-center h-full relative z-10 pt-32 md:pt-10 pb-12">
                
                {/* COLUMN 1: Editorial Micro-Label ("They trust us") */}
                <div className="col-span-12 md:col-span-2 hidden md:block">
                    <p className="text-gray-400 font-sans text-xs flex items-center gap-4 whitespace-nowrap opacity-70">
                        <span className="w-6 h-[1px] bg-gray-500" /> They trust us
                    </p>
                </div>

                {/* COLUMN 2: 3D Perspective Country Names Wheel */}
                <div 
                  className="w-full md:col-span-5 relative h-[50vh] md:h-[60vh] flex flex-col justify-center mt-6 md:mt-0" 
                  style={{ perspective: "1500px" }}
                >
                    <div 
                       className="relative w-full h-full flex items-center md:items-center justify-center md:justify-start" 
                       style={{ transform: isMobile ? "rotateY(0deg)" : "rotateY(10deg)", transformStyle: "preserve-3d" }}
                    >
                        {COUNTRIES.map((country, idx) => (
                            <CountryWheelItem 
                                key={country.name} 
                                country={country} 
                                idx={idx} 
                                smoothProgress={smoothProgress} 
                                activeIndex={activeIndex}
                                totalLength={COUNTRIES.length}
                                isMobile={isMobile}
                            />
                        ))}
                    </div>
                </div>

                {/* COLUMN 3 & 4: Static Logo & Description Text */}
                <div className="w-full md:col-span-5 h-[20vh] md:h-full relative flex items-center justify-center md:justify-between">
                    
                    {/* The static "Logo" equivalent showing the currently active country seamlessly aligned in the center right */}
                    <div className="absolute left-0 w-64 h-20 overflow-hidden hidden lg:block">
                         {COUNTRIES.map((c, i) => (
                             <div 
                                key={c.name} 
                                className={`absolute inset-0 flex items-center transition-all duration-700 ${activeIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                             >
                                 <h3 className="text-xl tracking-[0.2em] font-normal text-white uppercase">
                                     {c.name}
                                 </h3>
                             </div>
                         ))}
                    </div>

                    {/* The typography description pushed to the right, exactly matching the reference cropped image */}
                    <motion.div 
                        style={{ y: descriptionY }} 
                        className="relative z-20 w-full md:ml-auto max-w-[320px] md:max-w-[280px] text-center md:text-left mt-auto md:mt-0 px-4 md:px-0"
                    >
                         <p className="text-[#a0a0a0] text-sm md:text-base leading-relaxed font-normal antialiased">
                             From multinational companies to independent brands, we have been fortunate to work in a diversity of projects and clients.
                         </p>
                    </motion.div>

                </div>
            </div>
            
            {/* Top and bottom fade out boundaries */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#05000a] to-transparent pointer-events-none z-30" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05000a] to-transparent pointer-events-none z-30" />
        </div>
    </section>
  );
}
