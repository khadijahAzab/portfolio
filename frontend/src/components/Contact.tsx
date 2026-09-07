import { ArrowUpRight, Copy, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/portfolio";

async function copy(text: string, label: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  } catch {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    if (ok) toast.success(`${label} copied to clipboard`);
    else toast.error("Copy failed — please copy manually");
  }
}

export default function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="bg-[#121212] text-[#F8F7F4]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="font-heading italic text-base text-[#9E9990]">05</span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] font-semibold text-[#E0F65D]">
              Contact
            </span>
          </div>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl tracking-tight leading-[1.05] sm:text-5xl lg:text-6xl">
            Let's design what the data is trying to say.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-[#2B2824] border-y border-[#2B2824]">
          <Reveal>
            <div className="group flex flex-wrap items-center gap-4 py-7">
              <Mail className="h-5 w-5 text-[#9E9990]" aria-hidden="true" />
              <a
                data-testid="contact-email-link"
                href={`mailto:${profile.email}`}
                className="font-heading text-xl tracking-tight transition-colors duration-300 hover:text-[#E0F65D] sm:text-3xl"
              >
                {profile.email}
              </a>
              <button
                data-testid="copy-email-button"
                onClick={() => copy(profile.email, "Email")}
                aria-label="Copy email address"
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#2B2824] text-[#9E9990] transition-colors duration-300 hover:border-[#E0F65D] hover:text-[#E0F65D] focus:ring-2 focus:ring-[#E0F65D]"
              >
                <Copy className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="group flex flex-wrap items-center gap-4 py-7">
              <Phone className="h-5 w-5 text-[#9E9990]" aria-hidden="true" />
              <a
                data-testid="contact-phone-link"
                href={`tel:${profile.phoneHref}`}
                className="font-heading text-xl tracking-tight transition-colors duration-300 hover:text-[#E0F65D] sm:text-3xl"
                dir="ltr"
              >
                {profile.phone}
              </a>
              <button
                data-testid="copy-phone-button"
                onClick={() => copy(profile.phone, "Phone number")}
                aria-label="Copy phone number"
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#2B2824] text-[#9E9990] transition-colors duration-300 hover:border-[#E0F65D] hover:text-[#E0F65D] focus:ring-2 focus:ring-[#E0F65D]"
              >
                <Copy className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex items-center gap-4 py-7">
              <MapPin className="h-5 w-5 text-[#9E9990]" aria-hidden="true" />
              <span className="font-heading text-xl tracking-tight sm:text-3xl">{profile.location}</span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-[#9E9990]">
                {profile.availability}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#9E9990]">
              © 2026 {profile.name} — {profile.discipline}, Umm Al-Qura University
            </p>
            <a
              data-testid="contact-cv-download"
              href="/Khadijah_Azab_CV.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full bg-[#E0F65D] px-6 py-3 text-sm font-medium text-[#121212] transition-colors duration-300 hover:bg-[#F0FF8A] focus:ring-2 focus:ring-[#E0F65D] focus:ring-offset-2 focus:ring-offset-[#121212]"
            >
              Download CV
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
