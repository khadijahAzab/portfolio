const items = [
  "User-Centered Design",
  "Business Intelligence",
  "Figma",
  "Power BI",
  "Wireframing",
  "Prototyping",
  "Information Architecture",
  "Accessibility",
  "HTML / CSS",
  "Usability Testing",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div data-testid="marquee" className="overflow-hidden border-y border-[#E3DFD7] bg-[#F1EEE7] py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.25em] text-[#8C877E]">
              {item}
            </span>
            <span className="text-[#C9C3B8]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
