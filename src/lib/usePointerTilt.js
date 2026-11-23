import { useEffect } from "react"
import { useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react"

export default function usePointerTilt(ref, { max = 8, pan = 0 } = {}) {
  const reduced = useReducedMotion()
  const nx = useMotionValue(0.5)
  const ny = useMotionValue(0.5)

  const spring = { stiffness: 140, damping: 18 }
  const rotateX = useSpring(useTransform(ny, [0, 1], [max, -max]), spring)
  const rotateY = useSpring(useTransform(nx, [0, 1], [-max, max]), spring)
  const panX = useSpring(useTransform(nx, [0, 1], [`-${pan}%`, `${pan}%`]), spring)
  const panY = useSpring(useTransform(ny, [0, 1], [`-${pan}%`, `${pan}%`]), spring)
  const glareX = useTransform(nx, (v) => `${v * 100}%`)
  const glareY = useTransform(ny, (v) => `${v * 100}%`)

  useEffect(() => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const move = (e) => {
      const r = el.getBoundingClientRect()
      nx.set((e.clientX - r.left) / r.width)
      ny.set((e.clientY - r.top) / r.height)
    }
    const leave = () => {
      nx.set(0.5)
      ny.set(0.5)
    }
    el.addEventListener("pointermove", move, { passive: true })
    el.addEventListener("pointerleave", leave)
    return () => {
      el.removeEventListener("pointermove", move)
      el.removeEventListener("pointerleave", leave)
    }
  }, [reduced, nx, ny, ref])

  return { rotateX, rotateY, panX, panY, glareX, glareY, reduced }
}
