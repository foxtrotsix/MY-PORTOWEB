import { motion } from "motion/react"

const states = {
  up: { opacity: 0, y: 50 },
  down: { opacity: 0, y: -50 },
  left: { opacity: 0, x: -60 },
  right: { opacity: 0, x: 60 },
  scale: { opacity: 0, scale: 0.85 },
  blur: { opacity: 0, filter: "blur(12px)" },
  float: { opacity: 0, y: 40, scale: 0.9 },
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  dir = "up",
  amount = 0.3,
}) {
  return (
    <motion.div
      className={className}
      initial={states[dir] || states.up}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
