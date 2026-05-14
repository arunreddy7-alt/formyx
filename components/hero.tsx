"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef, useMemo } from "react"
import { Button } from "./ui/button"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function MinimalWireframe() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05
      meshRef.current.rotation.x -= delta * 0.03
    }
  })

  return (
    <mesh ref={meshRef}>
      {/* 20-segment wireframe sphere for a classic, extremely clean tech look */}
      <sphereGeometry args={[2.8, 20, 20]} />
      <meshBasicMaterial color="#610094" wireframe transparent opacity={0.2} />
    </mesh>
  )
}

function FloatingDust() {
  const pointsRef = useRef<THREE.Points>(null)

  const particleCount = 1500
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      // Spread particles widely around the background
      pos[i * 3] = (Math.random() - 0.5) * 25
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 2
    }
    return pos
  }, [])

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Increased speed slightly for a more obvious movement
      pointsRef.current.rotation.y -= delta * 0.05
      pointsRef.current.rotation.x -= delta * 0.03
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  )
}

export default function Hero({ onContact }: { onContact: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-[#020005] flex items-center justify-center overflow-hidden">

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#3F0071]/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Minimal 3D Element with Floating Dust */}
      {mounted && (
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }} className="w-full h-full opacity-80">
            <MinimalWireframe />
            <FloatingDust />
          </Canvas>
        </div>
      )}

      {/* Clean, Minimal Typography Container */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="max-w-3xl text-center flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest text-[#d08bff] uppercase backdrop-blur-md">
              Intelligent AI Automation
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="mb-8 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]"
          >
            Intelligent Solutions
            <br />
            for{" "}
            <span className="bg-gradient-to-b from-[#610094] to-[#3F0071] bg-clip-text text-transparent italic">
              Effortless Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mb-10 max-w-xl text-base sm:text-lg text-gray-400 font-light leading-relaxed"
          >
            We help businesses grow faster, scale smarter, and reach wider audiences
            through responsive AI automation and Gen AI solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="pointer-events-auto"
          >
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-sm font-medium tracking-wide text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors pointer-events-auto cursor-pointer"
              onClick={onContact}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
