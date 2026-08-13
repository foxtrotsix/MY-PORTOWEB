import Reveal from "./Reveal.jsx"

export default function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal dir="blur" amount={0.5}>
        <div className="mb-4 h-1 w-16 rounded-full bg-accent" />
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
          {"// "}{kicker}
        </p>
        <h2 className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  )
}
