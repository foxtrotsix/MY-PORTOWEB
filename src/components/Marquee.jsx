import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

export default function Marquee({
  text = ["ROS2", "Computer Vision", "IoT", "Embedded", "AI", "Robotics"],
  reverse = false,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ["0%", "-50%"] : ["-50%", "0%"],
  )

  const row = [...text, ...text, ...text, ...text]

  return (
    <div ref={ref} className="overflow-hidden border-y border-line bg-panel py-5">
      <motion.div style={{ x }} className="flex w-max whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 font-mono text-2xl font-black uppercase tracking-tight text-dim"
          >
            {t}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
