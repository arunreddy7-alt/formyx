"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent, useMotionValue, useSpring as useFramerSpring } from "framer-motion"

const PROJECTS = [
  {
    title: "BODYARMOR",
    tags: "[MARKETING SITE] — [SPORTS]",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop"
  },
  {
    title: "FIT GREEN MIND",
    tags: "[E-COMMERCE] — [HEALTH]",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=300&auto=format&fit=crop"
  },
  {
    title: "VIRTUAL HORIZONS",
    tags: "[WEB3] — [EXPERIENCE]",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2000&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=300&auto=format&fit=crop"
  },
  {
    title: "FUTURE DYNAMICS",
    tags: "[AI PLATFORM] — [ENTERPRISE]",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop"
  }
];

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire native-scrolling flex block
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
      const index = Math.min(
          PROJECTS.length - 1,
          Math.max(0, Math.round(latest * (PROJECTS.length - 1)))
      );
      setActiveIndex(index);
  });

  // Realistic Curved Cursor Logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothCursorX = useFramerSpring(cursorX, springConfig);
  const smoothCursorY = useFramerSpring(cursorY, springConfig);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
     const handleMouseMove = (e: MouseEvent) => {
         cursorX.set(e.clientX);
         cursorY.set(e.clientY);
     };
     window.addEventListener("mousemove", handleMouseMove);
     return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <section ref={containerRef} className="relative flex flex-col md:flex-row bg-black text-white" id="recent-projects">
        
        {/* Custom Follow Cursor Overlay (Spring curved physics, offset not to block pointer) */}
        <motion.div 
            className="fixed top-0 left-0 pointer-events-none z-[100] bg-gradient-to-br from-[#610094] to-[#3F0071] text-white font-mono text-[10px] font-bold px-3 py-1.5 whitespace-nowrap"
            style={{
                x: smoothCursorX,
                y: smoothCursorY,
                opacity: isHovering ? 1 : 0,
                // Placing it to the bottom right of the native cursor
                translateX: "16px",
                translateY: "16px"
            }}
        >
            VIEW PROJECT
        </motion.div>

        {/* LEFT COLUMN: Sticky */}
        <div className="w-full md:w-[35%] lg:w-[25%] relative z-20 shrink-0">
            <div className="sticky top-0 h-screen flex flex-col justify-between p-8 md:p-12">
                {/* Header text */}
                <div>
                   <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                      Featured Work
                   </h2>
                   <p className="text-[#888888] text-sm leading-relaxed font-light">
                      We build websites where every scroll, every transition, and every interaction feels intentional. The details most teams skip are the details we care about most.
                   </p>
                </div>

                {/* Vertical Thumbnails Indicator */}
                <div className="relative flex flex-col gap-4 my-auto w-24">
                    {PROJECTS.map((proj, idx) => (
                        <div 
                           key={idx} 
                           className={`relative h-[60px] w-[80px] bg-zinc-900 overflow-hidden transition-all duration-500 ease-out focus:outline-none cursor-pointer ${activeIndex === idx ? 'opacity-100 ring-2 ring-white/20' : 'opacity-30 grayscale hover:opacity-60'}`}
                           onClick={() => setActiveIndex(idx)}
                        >
                            <img src={proj.thumbnail} alt={proj.title} className="w-full h-full object-cover" />
                        </div>
                    ))}
                    {/* The traveling indicator dot */}
                    <motion.div 
                        className="absolute -right-6 w-1.5 h-1.5 bg-gradient-to-b from-[#610094] to-[#3F0071]"
                        initial={false}
                        animate={{ y: activeIndex * 76 + 30 - 3 }} 
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                </div>

                {/* Bottom Left Button */}
                <div className="flex items-center">
                    <button className="bg-gradient-to-r from-[#610094] to-[#4c0074] text-white font-semibold text-xs px-6 py-3.5 tracking-widest uppercase hover:brightness-125 transition-all">
                        View All
                    </button>
                    <button className="bg-gradient-to-r from-[#4c0074] to-[#3F0071] text-white border-l border-white/20 px-4 py-3.5 hover:brightness-125 transition-all font-bold text-lg leading-none flex items-center justify-center">
                        +
                    </button>
                </div>
            </div>
        </div>

        {/* RIGHT COLUMN: Stacked physical actual scrolling projects array */}
        <div 
           className="w-full md:w-[65%] lg:w-[75%] flex flex-col bg-black"
           onMouseEnter={() => setIsHovering(true)}
           onMouseLeave={() => setIsHovering(false)}
        >
            {PROJECTS.map((proj, idx) => (
                <div key={idx} className="w-full h-[50vh] md:h-screen flex flex-col bg-black">
                    {/* Large mockup presentation layer */}
                    <div className="flex-1 relative w-full overflow-hidden flex items-center justify-center max-h-[calc(100vh-56px)] bg-[#e5e5e5]">
                         <img 
                            src={proj.image} 
                            className={`w-full h-full object-cover origin-center transition-transform duration-[1.5s] ease-out ${isHovering && activeIndex === idx ? 'scale-[1.03]' : 'scale-100'}`} 
                            alt={proj.title}
                         />
                    </div>

                    {/* Appended native footer label matching the references perfectly */}
                    <div className="h-14 bg-[#0F0F0F] text-[#888888] font-mono text-xs flex items-center justify-between px-6 shrink-0 relative z-20">
                        <span className="text-white font-sans text-sm tracking-wide font-medium">
                            {proj.title}
                        </span>
                        <span className="opacity-70 tracking-widest">
                            {proj.tags}
                        </span>
                    </div>
                </div>
            ))}
        </div>

    </section>
  )
}
