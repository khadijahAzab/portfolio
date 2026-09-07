import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { scrollToId } from "@/lib/scroll";

const ease = [0.16, 1, 0.3, 1] as const;

function MaskedLine({ text, delay, italic }: { text: string; delay: number; italic?: boolean }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className={`block font-heading tracking-tight leading-[0.98] ${italic ? "italic text-[#5A5751]" : ""}`}
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.95, ease, delay }}
      >
        {text}
      </motion.span>
    </span>
  );
}

const indexItems = [
  { id: "about", n: "01", label: "About" },
  { id: "skills", n: "02", label: "Skills" },
  { id: "experience", n: "03", label: "Experience" },
  { id: "projects", n: "04", label: "Projects" },
  { id: "contact", n: "05", label: "Contact" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 700], [0, 140]);
  const yCard = useTransform(scrollY, [0, 700], [0, -60]);

  return (
    <section id="top" data-testid="hero-section" className="relative overflow-hidden pt-16">
      <motion.span
        aria-hidden="true"
        style={{ y: yBg }}
        className="pointer-events-none absolute -right-8 top-24 select-none font-heading text-[26vw] leading-none text-transparent lg:text-[19rem] [-webkit-text-stroke:1px_#E3DFD7]"
      >
        HCI
      </motion.span>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-16 sm:px-10 lg:grid-cols-12 lg:gap-10 lg:px-16 lg:pt-24">
        <div className="lg:col-span-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-[#121212] font-semibold"
          >
            Portfolio — UI/UX Design × Business Intelligence
          </motion.p>

          <h1 className="mt-8 text-[17vw] sm:text-7xl lg:text-[6.5rem]">
            <MaskedLine text={profile.firstName} delay={0.2} />
            <MaskedLine text={profile.lastName} delay={0.34} italic />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.6 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-[#5A5751] sm:text-lg"
          >
            {profile.discipline} graduate designing interfaces people understand — and dashboards
            decisions depend on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.72 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-view-projects-button"
              onClick={() => scrollToId("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-[#121212] px-7 py-3.5 text-sm font-medium text-[#F8F7F4] transition-colors duration-300 hover:bg-black focus:ring-2 focus:ring-[#121212] focus:ring-offset-2"
            >
              View projects
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </button>
            <a
              data-testid="hero-cv-download"
              href="/Khadijah_Azab_CV.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-[#121212] px-7 py-3.5 text-sm font-medium transition-colors duration-300 hover:bg-[#121212] hover:text-[#F8F7F4] focus:ring-2 focus:ring-[#121212] focus:ring-offset-2"
            >
              Download CV
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.aside
          style={{ y: yCard }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.85 }}
          className="lg:col-span-4"
        >
          <div className="border border-[#E3DFD7] bg-[#F1EEE7] p-7">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#1B873F] animate-pulse-dot" aria-hidden="true" />
              <span data-testid="hero-availability" className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#121212]">
                {profile.availability}
              </span>
            </div>

            <div className="mt-7 border-t border-[#D8D3C8] pt-6">
              {indexItems.map((item) => (
                <button
                  key={item.id}
                  data-testid={`hero-index-${item.id}`}
                  onClick={() => scrollToId(item.id)}
                  className="group flex w-full items-baseline justify-between border-b border-[#D8D3C8] py-3 text-left last:border-0 focus:ring-2 focus:ring-[#121212] rounded-sm"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-heading italic text-sm text-[#8C877E]">{item.n}</span>
                    <span className="text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#8C877E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                </button>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-2 border-t border-[#D8D3C8] pt-6 text-sm text-[#5A5751]">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </div>
            <p className="mt-2 text-sm text-[#5A5751]">{profile.languages.join(" · ")}</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
