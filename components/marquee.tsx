"use client"
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div className="w-full py-4 bg-black text-white border-y border-white/10">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex">
          {[...Array(3)].map((_, i) => (
            <motion.h1
              key={i}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                duration: 10,
              }}
              className="text-[10vw] leading-none py-2 pr-10 font-bold tracking-tight"
            >
              FORMYX SOLUTIONS&nbsp;&nbsp;|&nbsp;&nbsp;
            </motion.h1>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee
