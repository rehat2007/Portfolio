import { useReveal } from "../hooks/useReveal.js";
import { about } from "../data/portfolio.js";

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} className="section">
      <div data-reveal>
        <p className="section-sub">Get to know me</p>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="space-y-5 leading-relaxed lg:col-span-3">
          {about.paragraphs.map((p, i) => (
            <p key={i} data-reveal data-delay={i * 0.08}>
              {p}
            </p>
          ))}
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div data-reveal className="card p-6">
            <h3 className="font-bold text-white">Beyond the code</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {about.hobbies.map((h) => (
                <span
                  key={h.label}
                  className="rounded-full border border-line bg-ink px-4 py-2 text-sm transition hover:border-brand-light hover:text-white"
                >
                  {h.emoji} {h.label}
                </span>
              ))}
            </div>
          </div>

          <div data-reveal data-delay="0.1" className="card p-6">
            <h3 className="font-bold text-white">My personality</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {about.traits.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-brand/15 px-4 py-2 text-sm font-medium text-brand-light"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
