import { useRef } from "react"
import { motion, useMotionTemplate } from "motion/react"
import usePointerTilt from "../lib/usePointerTilt.js"

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null)
  const { rotateX, rotateY, glareX, glareY } = usePointerTilt(ref, { max: 7 })
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.1), transparent 60%)`

  return (
    <div ref={ref} className={`group [perspective:1100px] ${className}`}>
      <motion.div style={{ rotateX, rotateY }} className="relative">
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: glare }}
        />
      </motion.div>
    </div>
  )
}
