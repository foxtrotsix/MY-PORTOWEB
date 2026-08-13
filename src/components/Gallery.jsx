import { gallery } from "../data.js"
import Section from "./Section.jsx"
import Reveal from "./Reveal.jsx"

const SIZES = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
]

const DIRS = ["float", "scale", "blur", "up", "left", "scale"]

export default function Gallery() {
  return (
    <Section id="gallery" kicker="snapshots" title="Gallery">
      <div className="grid auto-rows-[160px] grid-cols-2 gap-4 md:grid-cols-4">
        {gallery.map((g, i) => (
          <Reveal
            key={g.cap}
            dir={DIRS[i % DIRS.length]}
            delay={(i % 3) * 0.05}
            className={SIZES[i % SIZES.length]}
          >
            <a
              href={g.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="zoom"
              className="group relative block h-full w-full overflow-hidden rounded-2xl border border-line bg-panel"
            >
              <img
                src={g.src}
                alt={g.cap}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/10" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12 font-mono text-xs text-ink transition-transform duration-500 group-hover:translate-y-0">
                <span className="flex items-center justify-between">
                  <span>{g.cap}</span>
                  <span className="text-accent">view →</span>
                </span>
              </figcaption>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
