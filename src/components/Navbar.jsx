import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import gsap from "gsap";
import { navLinks, profile } from "../data/portfolio.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef(null);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  // entrance animation
  useEffect(() => {
    gsap.from("[data-nav]", { y: -30, opacity: 1, duration: 0.7, ease: "power3.out" });
  }, []);

  // background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the section currently in view (home page only)
  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    const t = setTimeout(() => {
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 200);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, [onHome]);

  // mobile menu slide animation
  useEffect(() => {
    if (!menuRef.current) return;
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      data-nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 pt-5 ${
        scrolled || open
          ? "border-b border-line bg-ink/90 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/#home" onClick={close} className="text-xl font-extrabold text-white">
          {profile.name.split(" ")[0]}
          <span className="gradient-text">.dev</span>
        </Link>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link
                to={`/#${l.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition hover:text-white ${
                  onHome && active === l.id
                    ? "bg-brand/20 text-white"
                    : "text-slate-400"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/#contact" className="btn-primary hidden !py-2 lg:inline-flex">
          Hire Me
        </Link>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg p-2 text-2xl text-white lg:hidden"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div ref={menuRef} className="overflow-hidden lg:hidden">
          <ul className="flex flex-col gap-1 px-5 pb-5 sm:px-8">
            {navLinks.map((l) => (
              <li key={l.id}>
                <Link
                  to={`/#${l.id}`}
                  onClick={close}
                  className="block rounded-lg px-4 py-3 font-medium text-slate-300 hover:bg-panel hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
