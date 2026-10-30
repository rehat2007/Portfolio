import { FaGraduationCap } from "react-icons/fa";
import { useReveal } from "../hooks/useReveal.js";
import { education } from "../data/portfolio.js";

export default function Education() {
  const ref = useReveal();
  return (
    <section id="education" ref={ref} className="section">
      <div data-reveal>
        <p className="section-sub">My academic journey</p>
        <h2 className="section-title">Education</h2>
      </div>

      <div className="relative mt-10 space-y-6 border-l-2 border-line pl-8">
        {education.map((e, i) => (
          <div key={e.degree} data-reveal data-delay={i * 0.1} className="relative">
            <span className="absolute -left-[46px] top-5 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-accent text-white">
              <FaGraduationCap />
            </span>
            <div className="card p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                {e.period}
              </span>
              <h3 className="mt-1 text-lg font-bold text-white">{e.degree}</h3>
              <p className="text-brand-light">{e.institute}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{e.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
