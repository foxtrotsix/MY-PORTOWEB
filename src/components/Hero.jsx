import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import Float from "./Float.jsx"
import Robot from "./Robot.jsx"
import { profile } from "../data.js"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -180])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 260])
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -320])
  const ringY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const codeY = useTransform(scrollYProgress, [0, 1], [0, -260])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section id="hero" ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div style={{ y: gridY }} className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <motion.div
        style={{ y: glowY }}
        className="absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[140px]"
        aria-hidden
      />
      <motion.div
        style={{ y: glowY }}
        className="absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />

      {/* orbit rings */}
      <motion.div
        style={{ y: ringY }}
        className="pointer-events-none absolute left-[4%] top-[16%] hidden h-40 w-40 rounded-full border border-line/60 lg:block"
        aria-hidden
      >
        <motion.div
          className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ originX: 0, originY: 80 }}
        />
      </motion.div>
      <motion.div
        style={{ y: ringY }}
        className="pointer-events-none absolute left-[8%] top-[28%] hidden h-6 w-6 rounded-full border border-accent/60 lg:block"
        aria-hidden
      />

      {/* floating code snippet (right) */}
      <motion.div
        style={{ y: codeY }}
        className="pointer-events-none absolute right-[6%] bottom-[14%] hidden select-none lg:block"
        aria-hidden
      >
        <Float duration={6} y={16}>
          <pre className="rounded-2xl border border-line bg-panel/70 p-5 font-mono text-xs leading-relaxed text-dim backdrop-blur-sm">
            <code>
              <span className="text-accent">def</span> <span className="text-ink">deploy</span>(robot):
              {"\n"}    <span className="text-accent">while</span> not ready:
              {"\n"}        robot.learn()
              {"\n"}        robot.tune()
              {"\n"}    <span className="text-accent">return</span> <span className="text-ink">ready</span>
            </code>
          </pre>
        </Float>
      </motion.div>

      {/* small floating squares */}
      {[
        { l: "70%", t: "18%", s: "h-3 w-3", c: "bg-accent/60", d: 5 },
        { l: "30%", t: "70%", s: "h-2 w-2", c: "bg-line", d: 6 },
        { l: "90%", t: "60%", s: "h-2.5 w-2.5", c: "border border-accent/50", d: 4.5 },
        { l: "18%", t: "40%", s: "h-2 w-2", c: "bg-accent/40", d: 5.5 },
      ].map((sq, i) => (
        <Float key={i} className={`pointer-events-none absolute hidden lg:block ${sq.s} ${sq.c}`} style={{ left: sq.l, top: sq.t }} duration={sq.d} y={14}>
          <div className="h-full w-full" />
        </Float>
      ))}

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono text-sm text-accent"
        >
          &gt; hello_world.initialize()
        </motion.p>
        <h1 className="text-5xl font-black leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            {profile.name.split(" ")[0]}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block text-dim"
          >
            {profile.name.split(" ").slice(1).join(" ") || "DEVELOPER"}
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-dim"
        >
          <span className="text-ink">{profile.role}</span>  {profile.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 font-mono text-sm font-bold text-white transition-colors hover:bg-accent-hi"
          >
            view_projects()
          </a>
          <a
            href="#about"
            className="rounded-full border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            about_me()
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: panelY }}
        className="absolute right-[8%] top-[22%] z-0 hidden select-none lg:block"
        aria-hidden
      >
        <Robot progress={scrollYProgress} />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-dim">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-8 w-px bg-accent"
          />
        </div>
      </motion.div>
    </section>
  )
}
