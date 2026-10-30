import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useReveal } from "../hooks/useReveal.js";
import { profile } from "../data/portfolio.js";

export default function Contact() {
  const ref = useReveal();
  const items = [
    { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s|-/g, "")}` },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: `https://wa.me/${profile.whatsapp}`,
    },
  ];

  return (
    <section id="contact" ref={ref} className="bg-panel/30">
      <div className="section text-center">
        <div data-reveal>
          <p className="section-sub">Let's talk</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Have a project in mind or just want to say hi? My inbox is always open — reach out
            using any of the options below.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href }, i) => (
            <a
              key={label}
              data-reveal
              data-delay={i * 0.1}
              href={href}
              target={label === "WhatsApp" ? "_blank" : undefined}
              rel="noreferrer"
              className="card group p-6 transition hover:-translate-y-1 hover:border-brand-light/60"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-accent text-2xl text-white transition group-hover:scale-110">
                <Icon />
              </span>
              <h3 className="mt-4 font-bold text-white">{label}</h3>
              <p className="mt-1 break-words text-sm text-slate-400">{value}</p>
            </a>
          ))}
        </div>

        <a data-reveal href={`mailto:${profile.email}`} className="btn-primary mt-10">
          <FiMail /> Say Hello
        </a>
      </div>
    </section>
  );
}
