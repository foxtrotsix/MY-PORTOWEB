import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const BOOT = [
  "> initializing porto.robot ...",
  "> loading ROS2 modules ........ OK",
  "> mounting perception stack ... OK",
  "> calibrating actuators ....... OK",
  "> establishing uplink ......... OK",
  "> system ready.",
]

export default function Splash({ onDone }) {
  const [lineCount, setLineCount] = useState(0)
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineCount((c) => {
        if (c >= BOOT.length) {
          clearInterval(lineTimer)
          return c
        }
        return c + 1
      })
    }, 320)
    return () => clearInterval(lineTimer)
  }, [])

  useEffect(() => {
    const dur = BOOT.length * 320 + 700
    const start = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur)
      setProgress(p)
      if (p < 1) raf = requestAnimationFrame(tick)
      else {
        setTimeout(() => setLeaving(true), 250)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (leaving) {
      const t = setTimeout(onDone, 900)
      return () => clearTimeout(t)
    }
  }, [leaving, onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-bg"
      animate={leaving ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* corner brackets */}
      <motion.span
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pointer-events-none absolute left-6 top-6 h-10 w-10 border-l-2 border-t-2 border-accent"
      />
      <motion.span
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pointer-events-none absolute right-6 top-6 h-10 w-10 border-r-2 border-t-2 border-accent"
      />
      <motion.span
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="pointer-events-none absolute bottom-6 left-6 h-10 w-10 border-b-2 border-l-2 border-accent"
      />
      <motion.span
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 border-b-2 border-r-2 border-accent"
      />

      {/* corner HUD labels */}
      {[
        { text: "SYS.LINK // EST 2026", pos: "left-6 top-20" },
        { text: "LAT -6.20 · LON 106.84", pos: "right-6 top-20" },
        { text: "PWR 98% · TEMP 42C", pos: "left-6 bottom-20" },
        { text: "v0.1.0-rc", pos: "right-6 bottom-20" },
      ].map((c, i) => (
        <motion.span
          key={c.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.15 }}
          className={`pointer-events-none absolute hidden font-mono text-[10px] uppercase tracking-widest text-dim sm:block ${c.pos}`}
        >
          {c.text}
        </motion.span>
      ))}

      {/* animated scan line */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* rotating radar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="pointer-events-none absolute right-[10%] top-[14%] hidden md:block"
      >
        <div className="relative h-24 w-24 rounded-full border border-line/60">
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "conic-gradient(from 0deg, rgba(176,18,46,0.5), transparent 60deg)",
            }}
          />
          <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        </div>
      </motion.div>

      {/* floating tech glyphs */}
      {["</>", "{ }", "#!", "0x1F"].map((g, i) => {
        const spots = [
          { left: "8%", top: "68%", dur: 4 },
          { left: "88%", top: "72%", dur: 5 },
          { left: "12%", top: "30%", dur: 4.5 },
          { left: "85%", top: "26%", dur: 5.5 },
        ]
        const s = spots[i]
        return (
          <motion.span
            key={g}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.6, 0], y: [0, -14, -14, 0] }}
            transition={{ duration: s.dur, repeat: Infinity, delay: i * 0.5 }}
            className="pointer-events-none absolute hidden font-mono text-xl text-accent/50 md:block"
            style={{ left: s.left, top: s.top }}
          >
            {g}
          </motion.span>
        )
      })}

      <div className="relative flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-5xl font-black tracking-tight sm:text-7xl"
        >
          <span className="text-accent">&lt;</span>ROBOTICS
          <span className="text-accent">/&gt;</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 font-mono text-sm text-dim"
        >
          Yuan B Albyan - booting personal uplink
        </motion.p>

        <div className="mt-10 flex h-24 w-full max-w-md flex-col items-start justify-end gap-1 overflow-hidden text-left font-mono text-xs text-dim">
          <AnimatePresence>
            {BOOT.slice(0, lineCount).map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-left"
              >
                {line}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-4 h-1 w-full max-w-md overflow-hidden rounded-full bg-line">
          <motion.div
            className="h-full bg-accent"
            style={{ width: `${progress * 100}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        <p className="mt-2 font-mono text-[11px] text-dim">
          {Math.round(progress * 100)}%
        </p>
      </div>
    </motion.div>
  )
}
