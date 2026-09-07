import { Reveal, SectionHeading } from "@/components/Reveal";
import { profile, stats } from "@/data/portfolio";

const ARCH_IMAGE =
  "https://images.unsplash.com/photo-1725291634187-a2120847f40b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxhcmFiaWMlMjBzYXVkaSUyMGFyY2hpdGVjdHVyZSUyMG1pbmltYWwlMjBnZW9tZXRyaWN8ZW58MHx8fHwxNzg4NzcyOTA5fDA&ixlib=rb-4.1.0&q=85";

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <SectionHeading chapter="01" overline="About" title="Design with a hypothesis, ship with evidence." />

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-heading text-xl leading-relaxed sm:text-2xl">{profile.summary}</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px border border-[#E3DFD7] bg-[#E3DFD7] sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="bg-[#F8F7F4]">
                <div className="p-6" data-testid={`stat-${i}`}>
                  <div className="font-heading text-3xl sm:text-4xl">{s.value}</div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8C877E]">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="lg:col-span-5">
          <figure>
            <div className="overflow-hidden rounded-t-[10rem] border border-[#E3DFD7]">
              <img
                src={ARCH_IMAGE}
                alt="Minimalist Saudi geometric archway — the architectural heritage of Makkah"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C877E]">
              <span>Makkah, Saudi Arabia</span>
              <span>Fig. 01</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
