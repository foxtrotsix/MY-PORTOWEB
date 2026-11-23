import { useRef } from "react"
import { motion, useMotionTemplate, useReducedMotion, useTransform } from "motion/react"
import Float from "./Float.jsx"
import usePointerTilt from "../lib/usePointerTilt.js"
import robotImg from "../assets/img/profile.jpeg"

export default function Robot({ progress }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { rotateX, rotateY, panX, panY, glareX, glareY } = usePointerTilt(ref, { max: 10, pan: 3 })
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.1), transparent 60%)`

  const close = useTransform(progress, [0, 0.85], reduced ? [0, 0] : [0, 100])
  const clip = useMotionTemplate`inset(0 0 ${close}% 0)`
  const lineTop = useTransform(close, [0, 100], [100, 0])

  return (
    <div ref={ref} aria-hidden className="[perspective:1100px]">
      <Float duration={5} y={16}>
        <motion.div style={{ rotateX, rotateY }} className="relative">
          <div className="relative aspect-[4/5] w-52 overflow-hidden rounded-2xl border border-line bg-panel/70 backdrop-blur-sm lg:w-64">
            <motion.div style={{ clipPath: clip }} className="absolute inset-0">
              <motion.img
                src={robotImg}
                alt=""
                className="absolute inset-0 h-full w-full scale-[1.18] object-cover"
                style={{ x: panX, y: panY }}
              />
              <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-accent">
                FIA-3 // ONLINE
              </span>
              <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-dim">
                PWR 98% · SAR MODE
              </span>
              <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                style={{ top: lineTop }}
              />
            </motion.div>
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{ background: glare }}
            />
          </div>
        </motion.div>
      </Float>
    </div>
  )
}
