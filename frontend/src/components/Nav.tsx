import { scrollToId } from "@/lib/scroll";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E3DFD7]/80 bg-[#F8F7F4]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <button
          data-testid="nav-logo"
          onClick={() => scrollToId("top")}
          className="font-heading text-xl tracking-tight focus:ring-2 focus:ring-[#121212] focus:ring-offset-2 rounded-sm"
        >
          KA<span className="text-[#8C877E]">.</span>
        </button>
        <nav className="flex items-center gap-1 overflow-x-auto" aria-label="Primary">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => scrollToId(l.id)}
              className="rounded-full px-3 py-1.5 text-sm text-[#5A5751] transition-colors duration-300 hover:bg-[#F1EEE7] hover:text-[#121212] focus:ring-2 focus:ring-[#121212] focus:ring-offset-2"
            >
              {l.label}
            </button>
          ))}
          <a
            data-testid="nav-cv-download"
            href="/Khadijah_Azab_CV.pdf"
            download
            className="ml-2 hidden rounded-full bg-[#121212] px-4 py-1.5 text-sm text-[#F8F7F4] transition-colors duration-300 hover:bg-black sm:block focus:ring-2 focus:ring-[#121212] focus:ring-offset-2"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
