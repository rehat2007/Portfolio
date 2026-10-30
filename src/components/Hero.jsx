import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FiDownload, FiEye } from "react-icons/fi";
import { profile, socials } from "../data/portfolio.js";

export default function Hero() {
  const root = useRef(null);
  const roleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-h]", { y: 40, opacity: 0, duration: 0.8, stagger: 0.12, delay: 0.2 })
        .from("[data-photo]", { scale: 0.85, opacity: 0, duration: 1, ease: "back.out(1.4)" }, "-=0.9")
        .from("[data-social]", { y: 20, opacity: 0, stagger: 0.08, duration: 0.5 }, "-=0.4");

      // floating photo + glow
      gsap.to("[data-photo]", { y: -10, duration: 2.6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.2 });
      gsap.to("[data-ring]", { rotate: 360, duration: 18, repeat: -1, ease: "none" });

      // rotating role text
      const roles = profile.roles;
      let i = 0;
      const swap = () => {
        i = (i + 1) % roles.length;
        gsap.timeline()
          .to(roleRef.current, { y: -16, opacity: 0, duration: 0.35 })
          .add(() => (roleRef.current.textContent = roles[i]))
          .fromTo(roleRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 });
      };
      const id = setInterval(swap, 2600);
      return () => clearInterval(id);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={root} className="relative overflow-hidden pt-28 md:pt-32 lg:pt-36">
      {/* background glows */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-accent/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 md:grid-cols-2 md:pb-28">
        {/* text */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <p data-h className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Hello, I'm
          </p>
          <h1 data-h className="mt-2 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <h2 data-h className="mt-3 h-9 text-2xl font-bold sm:text-3xl">
            <span ref={roleRef} className="gradient-text inline-block">
              {profile.roles[0]}
            </span>
          </h2>
          <p data-h className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-slate-400 md:mx-0">
            {profile.tagline}
          </p>

          {/* resume buttons */}
          <div data-h className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href={profile.resume} download className="btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-outline">
              <FiEye /> View Resume
            </a>
          </div>

          {/* socials */}
          <div className="mt-8 flex justify-center gap-3 md:justify-start">
            {socials.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                data-social
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                title={name}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-panel text-lg text-slate-300 transition hover:-translate-y-1 hover:border-brand-light hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* photo */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div
              data-ring
              className="absolute -inset-3 rounded-full border-2 border-dashed border-brand-light/60"
            />
            <img
              data-photo
              src={profile.photo}
              alt={`${profile.name} – ${profile.designation}`}
              className="relative h-60 w-60 rounded-full border-4 border-panel object-cover shadow-2xl shadow-brand/30 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
