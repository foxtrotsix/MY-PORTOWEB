import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 250, damping: 25 })
  const ringY = useSpring(y, { stiffness: 250, damping: 25 })
  const [hover, setHover] = useState(false)
  const [down, setDown] = useState(false)
  const [label, setLabel] = useState("")

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      const t = e.target.closest("a, button, [data-cursor]")
      setHover(t !== null)
      setLabel(t?.dataset?.cursor || "")
    }
    const press = () => setDown(true)
    const release = () => setDown(false)

    window.addEventListener("mousemove", move, { passive: true })
    window.addEventListener("mouseover", over, { passive: true })
    window.addEventListener("mousedown", press)
    window.addEventListener("mouseup", release)
    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", over)
      window.removeEventListener("mousedown", press)
      window.removeEventListener("mouseup", release)
    }
  }, [x, y])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent lg:block"
        style={{ left: x, top: y }}
      />
      <motion.div
        className="pointer-events-none fixed z-[99] hidden items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70 lg:flex"
        style={{ left: ringX, top: ringY, width: 40, height: 40 }}
        animate={{
          scale: down ? 0.7 : hover ? (label ? 1.6 : 1.8) : 1,
          backgroundColor: hover ? "rgba(176,18,46,0.12)" : "rgba(176,18,46,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {label && (
          <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
            {label}
          </span>
        )}
      </motion.div>
    </>
  )
}
