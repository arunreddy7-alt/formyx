"use client"
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div className="w-full py-2 bg-[#3F0071]">
      <div className="border-t-2 border-b-2 overflow-hidden whitespace-nowrap">
        <div className="flex">
          {[...Array(3)].map((_, i) => (
            <motion.h1
              key={i}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                duration: 8,
              }}
              className="text-[10vw] leading-none py-5 pr-10 font-inherit"
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
