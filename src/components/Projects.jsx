import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { projects } from "../data.js"

export default function Projects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-75%"])

  return (
    <section id="projects" ref={ref} className="relative" style={{ height: "340vh" }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mb-10 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent"
          >
            {"// "}my_work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Projects
          </motion.h2>
        </div>
        <motion.div style={{ x }} className="flex w-max gap-6 pl-6 pr-[8vw]">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="view"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex w-[80vw] shrink-0 flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-colors hover:border-accent sm:w-[60vw] lg:w-[36vw]"
            >
              <div className="h-1 w-full bg-accent/70" />
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 rounded-full bg-bg/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-dim">{p.desc}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="font-mono text-[11px] text-accent">open on GitHub</span>
                  <span className="font-mono text-lg text-accent transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
