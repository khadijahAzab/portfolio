import Lenis from "lenis";

let lenis: Lenis | null = null;

export function initLenis() {
  lenis = new Lenis({ autoRaf: true, duration: 1.15 });
  return () => {
    lenis?.destroy();
    lenis = null;
  };
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -72, duration: 1.2 });
  else el.scrollIntoView({ behavior: "smooth" });
}
