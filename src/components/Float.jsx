import { motion } from "motion/react"

export default function Float({ children, className = "", duration = 4, y = 16, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -y, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}
