import { FaBriefcase } from "react-icons/fa";
import { useReveal } from "../hooks/useReveal.js";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" ref={ref} className="bg-panel/30">
      <div className="section">
        <div data-reveal>
          <p className="section-sub">Where I've worked</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="relative mt-10 space-y-6 border-l-2 border-line pl-8">
          {experience.map((x, i) => (
            <div key={x.role} data-reveal data-delay={i * 0.1} className="relative">
              <span className="absolute -left-[46px] top-5 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-accent text-white">
                <FaBriefcase />
              </span>
              <div className="card p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  {x.period}
                </span>
                <h3 className="mt-1 text-lg font-bold text-white">{x.role}</h3>
                <p className="text-brand-light">{x.company}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-400">
                  {x.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
