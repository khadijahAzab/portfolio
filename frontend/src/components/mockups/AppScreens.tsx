import {
  Search,
  ShoppingCart,
  User,
  LayoutGrid,
  ChevronLeft,
  Minus,
  Plus,
  Home,
  Footprints,
  Bot,
  HeartPulse,
  Heart,
  Moon,
  Zap,
  Bell,
  Smartphone,
  BatteryCharging,
  Camera,
  Wifi,
  Check,
  Play,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { PhoneFrame, BrowserFrame } from "./Frames";

/* ---------- Bloom ---------- */

const bloomFlowers = [
  { name: "Golden Serenity", price: "170 S.R", tone: "from-[#F6E8C8] to-[#E8C87A]" },
  { name: "Butterfly Bloom", price: "120 S.R", tone: "from-[#E7D6F2] to-[#B48FC7]" },
  { name: "Velvet Roses", price: "150 S.R", tone: "from-[#F6D2D2] to-[#C96A6A]" },
  { name: "Pink Tulip", price: "50 S.R", tone: "from-[#FBE0E8] to-[#E89AB5]" },
];

function BloomNav() {
  return (
    <div className="mt-auto flex items-center justify-around border-t border-[#E3CBE6] py-2.5 text-[#8A6E99]">
      <LayoutGrid className="h-4 w-4" aria-hidden="true" />
      <ShoppingCart className="h-4 w-4" aria-hidden="true" />
      <User className="h-4 w-4" aria-hidden="true" />
    </div>
  );
}

function BloomHome() {
  return (
    <div className="flex h-full flex-col bg-[#F2E3F3] px-3.5 pt-8 text-[#3D2B45]">
      <div className="text-center font-heading text-2xl italic">Bloom</div>
      <div className="mt-3 flex h-8 items-center gap-2 rounded-full bg-white px-3 text-[10px] text-[#9B8AA3]">
        <Search className="h-3 w-3" aria-hidden="true" />
        search…
      </div>
      <p className="mt-3 text-[10px] font-semibold">Categories</p>
      <div className="mt-1.5 flex gap-1.5">
        <span className="rounded-full bg-[#B48FC7] px-3 py-1 text-[9px] text-white">Bouquets</span>
        <span className="rounded-full border border-[#B48FC7] px-3 py-1 text-[9px] text-[#8A6E99]">
          Customized bouquet
        </span>
      </div>
      <p className="mt-3 text-[10px] font-semibold">Best seller</p>
      <div className="mt-1.5 grid grid-cols-2 gap-2">
        {bloomFlowers.map((f) => (
          <div key={f.name} className="rounded-xl bg-white/90 p-2">
            <div className={`flex h-14 items-center justify-center rounded-lg bg-gradient-to-br ${f.tone}`}>
              <Heart className="h-4 w-4 text-white/80" aria-hidden="true" />
            </div>
            <p className="mt-1.5 truncate text-[9px] font-medium">{f.name}</p>
            <p className="text-[8px] text-[#9B8AA3]">{f.price}</p>
          </div>
        ))}
      </div>
      <BloomNav />
    </div>
  );
}

function BloomProduct() {
  return (
    <div className="flex h-full flex-col bg-[#F2E3F3] text-[#3D2B45]">
      <div className="px-3.5 pt-8">
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </div>
      <div className="mx-3.5 mt-2 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F6E8C8] to-[#E8C87A]">
        <Heart className="h-8 w-8 text-white/80" aria-hidden="true" />
      </div>
      <div className="flex items-baseline justify-between px-3.5 pt-3">
        <p className="text-xs font-semibold">Golden Serenity</p>
        <p className="text-xs font-semibold">170 S.R</p>
      </div>
      <p className="px-3.5 pt-1.5 text-[8.5px] leading-relaxed text-[#7A6486]">
        White gerbera daisies, yellow roses and chamomile, wrapped in creamy paper tied with a
        golden satin ribbon.
      </p>
      <div className="flex items-center gap-3 px-3.5 pt-3">
        <div className="flex items-center gap-2.5 rounded-full border border-[#B48FC7] px-2.5 py-1">
          <Minus className="h-3 w-3" aria-hidden="true" />
          <span className="text-[10px]">1</span>
          <Plus className="h-3 w-3" aria-hidden="true" />
        </div>
        <span className="flex-1 rounded-full bg-[#B48FC7] py-1.5 text-center text-[9px] font-medium text-white">
          Add to cart
        </span>
      </div>
      <BloomNav />
    </div>
  );
}

function BloomPay() {
  return (
    <div className="flex h-full flex-col bg-[#F2E3F3] px-3.5 pt-8 text-[#3D2B45]">
      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      <p className="mt-2 text-center font-mono text-xs tracking-[0.3em]">PAY</p>
      <div className="mt-3 rounded-xl bg-white/90 p-2.5">
        <p className="text-[9px] font-semibold">Address</p>
        <p className="mt-1 text-[8px] leading-relaxed text-[#7A6486]">
          Umm Bin Abdullah Street, Alaziziyah, Makkah
        </p>
      </div>
      <div className="mt-2.5 rounded-xl bg-white/90 p-2.5">
        <p className="text-[9px] font-semibold">Payment method</p>
        {["Cash on delivery", "Apple Pay", "Visa"].map((m, i) => (
          <div key={m} className="mt-1.5 flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full border ${i === 0 ? "border-[#8A6E99] bg-[#B48FC7]" : "border-[#C9B3D6]"}`}
              aria-hidden="true"
            />
            <span className="text-[8.5px]">{m}</span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex items-center justify-between rounded-xl bg-white/90 p-2.5 text-[8.5px]">
        <span>Elegance coordination</span>
        <span className="font-semibold">446 S.R</span>
      </div>
      <span className="mx-auto mt-3 w-2/3 rounded-full bg-[#B48FC7] py-1.5 text-center text-[9px] font-medium text-white">
        Pay
      </span>
      <BloomNav />
    </div>
  );
}

export function BloomMockups() {
  return (
    <div className="group flex flex-wrap items-start justify-center gap-6">
      <PhoneFrame label="Home · Catalog">
        <BloomHome />
      </PhoneFrame>
      <PhoneFrame label="Product detail" className="sm:translate-y-8 sm:group-hover:translate-y-6">
        <BloomProduct />
      </PhoneFrame>
      <PhoneFrame label="Payment">
        <BloomPay />
      </PhoneFrame>
    </div>
  );
}

/* ---------- EmpWell ---------- */

function EmpNav() {
  return (
    <div className="mt-auto flex items-center justify-around border-t border-[#1C3157] py-2.5 text-[#5F7BA6]">
      <Home className="h-4 w-4 text-[#E8F0FA]" aria-hidden="true" />
      <Footprints className="h-4 w-4" aria-hidden="true" />
      <Bot className="h-4 w-4" aria-hidden="true" />
      <HeartPulse className="h-4 w-4" aria-hidden="true" />
      <User className="h-4 w-4" aria-hidden="true" />
    </div>
  );
}

const weekBars = [
  ["#E8857A", 40],
  ["#63D2C0", 62],
  ["#F2C14E", 48],
  ["#5FA8E8", 82],
  ["#E8857A", 55],
  ["#63D2C0", 70],
  ["#F2C14E", 92],
] as const;

function EmpToday() {
  return (
    <div className="flex h-full flex-col bg-[#0A1A33] px-3.5 pt-8 text-[#E8F0FA]">
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 rounded-full bg-gradient-to-br from-[#63D2C0] to-[#5FA8E8]" aria-hidden="true" />
        <span className="font-heading text-sm tracking-wide">EmpWell</span>
      </div>
      <p className="mt-4 text-[11px] font-medium text-[#63D2C0]">Today</p>
      <div className="mt-1.5 rounded-xl bg-[#12264A] p-3">
        <div className="flex items-baseline justify-between">
          <span className="font-heading text-xl">11,300</span>
          <span className="text-[8px] text-[#8FA6C9]">Steps</span>
        </div>
        <div className="mt-2.5 flex justify-between text-center">
          {[
            ["75", "BPM"],
            ["2.5", "KM"],
            ["650", "CAL"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="text-[10px] font-semibold">{v}</p>
              <p className="text-[7px] text-[#8FA6C9]">{l}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3.5 text-[11px] font-medium text-[#63D2C0]">Weekly health</p>
      <div className="mt-1.5 flex h-24 items-end justify-between rounded-xl bg-[#12264A] px-3 pb-2 pt-3">
        {weekBars.map(([color, h], i) => (
          <span
            key={i}
            className="w-2.5 rounded-t-sm"
            style={{ height: `${h}%`, backgroundColor: color }}
            aria-hidden="true"
          />
        ))}
      </div>
      <EmpNav />
    </div>
  );
}

function EmpDetail() {
  const r = 40;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex h-full flex-col bg-[#0A1A33] px-3.5 pt-8 text-[#E8F0FA]">
      <div className="flex items-center justify-between">
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        <span className="text-[10px] text-[#63D2C0]">20 March</span>
      </div>
      <div className="relative mx-auto mt-3 h-32 w-32">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r={r} fill="none" stroke="#1C3157" strokeWidth="9" />
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="#E8857A"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={`${c * 0.78} ${c}`}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-heading text-base">11,300</span>
          <span className="text-[7px] text-[#8FA6C9]">Steps</span>
        </div>
      </div>
      <div className="mt-4 space-y-2.5">
        {[
          { icon: HeartPulse, color: "#5FA8E8", v: "75 bpm", l: "66 bpm resting heart rate" },
          { icon: Moon, color: "#9B7EDE", v: "7 hr 26 min", l: "1 hr 15 min awake" },
          { icon: Zap, color: "#F2C14E", v: "56% stress", l: "stress level is normal" },
        ].map((row) => (
          <div key={row.v} className="flex items-center gap-2.5 border-t border-[#1C3157] pt-2.5">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full"
              style={{ backgroundColor: `${row.color}22` }}
            >
              <row.icon className="h-3.5 w-3.5" style={{ color: row.color }} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-semibold">{row.v}</p>
              <p className="text-[7.5px] text-[#8FA6C9]">{row.l}</p>
            </div>
          </div>
        ))}
      </div>
      <EmpNav />
    </div>
  );
}

export function EmpWellMockups() {
  return (
    <div className="group flex flex-wrap items-start justify-center gap-6">
      <PhoneFrame label="Today dashboard" dark>
        <EmpToday />
      </PhoneFrame>
      <PhoneFrame label="Daily detail" dark className="sm:translate-y-8 sm:group-hover:translate-y-6">
        <EmpDetail />
      </PhoneFrame>
    </div>
  );
}

/* ---------- Wasla ---------- */

const subs = [
  { name: "Netflix", price: "56 SAR", due: "in 3 days", tone: "#C96A6A", initial: "N" },
  { name: "Spotify", price: "21 SAR", due: "in 9 days", tone: "#4F9D69", initial: "S" },
  { name: "Shahid VIP", price: "35 SAR", due: "in 12 days", tone: "#5FA8E8", initial: "ش" },
  { name: "iCloud+", price: "11 SAR", due: "in 20 days", tone: "#8C877E", initial: "i" },
];

export function WaslaMockup() {
  return (
    <BrowserFrame url="wasla-project.vercel.app" className="mx-auto w-full max-w-2xl">
      <div className="bg-[#F7F5F0] p-5 text-[#1E2A38] sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2E5C8A] font-heading text-sm text-white">
              و
            </span>
            <span className="font-heading text-lg">Wasla · وصلة</span>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-[#8C877E]" aria-hidden="true" />
            <span className="rounded-full border border-[#D8D3C8] px-2.5 py-1 font-mono text-[9px] text-[#5A5751]">
              ع | EN
            </span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#2E5C8A] p-4 text-white">
            <p className="text-[9px] uppercase tracking-[0.15em] text-white/70">Monthly spend</p>
            <p className="mt-1 font-heading text-2xl">248 SAR</p>
            <p className="mt-1 text-[9px] text-white/70">4 active subscriptions</p>
          </div>
          <div className="rounded-xl border border-[#E3DFD7] bg-white p-4">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[#8C877E]">Next renewal</p>
            <p className="mt-1 font-heading text-2xl">3 days</p>
            <p className="mt-1 text-[9px] text-[#C96A6A]">Netflix · 56 SAR reminder set</p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {subs.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-3 rounded-xl border border-[#E3DFD7] bg-white px-3.5 py-2.5"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-md text-[11px] font-semibold text-white"
                style={{ backgroundColor: s.tone }}
              >
                {s.initial}
              </span>
              <span className="flex-1 text-[11px] font-medium">{s.name}</span>
              <span className="text-[10px] text-[#5A5751]">{s.price}/mo</span>
              <span className="rounded-full bg-[#F1EEE7] px-2 py-0.5 text-[8.5px] text-[#5A5751]">{s.due}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center font-mono text-[8.5px] uppercase tracking-[0.2em] text-[#8C877E]">
          WCAG 2.1 AA · Dark/Light mode · Adjustable type
        </p>
      </div>
    </BrowserFrame>
  );
}

/* ---------- TechFix ---------- */

function TechRepair() {
  return (
    <div className="flex h-full flex-col bg-[#F7F5F0] px-3.5 pt-8 text-[#1E2A38]">
      <p className="font-heading text-lg">TechFix</p>
      <p className="mt-1 text-[9px] text-[#8C877E]">What needs repair today?</p>
      <div className="mt-3.5 space-y-2">
        {[
          { icon: Smartphone, label: "Screen replacement" },
          { icon: BatteryCharging, label: "Battery & charging" },
          { icon: Camera, label: "Camera module" },
          { icon: Wifi, label: "Connectivity & board" },
        ].map((r) => (
          <div
            key={r.label}
            className="flex items-center gap-2.5 rounded-xl border border-[#E3DFD7] bg-white px-3 py-2.5"
          >
            <r.icon className="h-3.5 w-3.5 text-[#E76F51]" aria-hidden="true" />
            <span className="text-[10px] font-medium">{r.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-3.5 rounded-xl bg-[#1E2A38] p-3 text-white">
        <p className="text-[10px] font-semibold">Not sure what's wrong?</p>
        <p className="mt-0.5 text-[8.5px] text-white/70">Scan it with the camera or ask an expert.</p>
        <span className="mt-2 inline-block rounded-full bg-[#E76F51] px-3 py-1 text-[9px] font-medium">
          Get expert help
        </span>
      </div>
      <div className="mt-auto flex items-center justify-around border-t border-[#E3DFD7] py-2.5 text-[#8C877E]">
        <Home className="h-4 w-4 text-[#1E2A38]" aria-hidden="true" />
        <Camera className="h-4 w-4" aria-hidden="true" />
        <User className="h-4 w-4" aria-hidden="true" />
      </div>
    </div>
  );
}

function TechTrack() {
  const steps = ["Diagnosed", "In repair", "Quality check", "Ready for pickup"];
  return (
    <div className="flex h-full flex-col bg-[#F7F5F0] px-3.5 pt-8 text-[#1E2A38]">
      <p className="text-[9px] text-[#8C877E]">Order #1284</p>
      <p className="mt-0.5 font-heading text-lg">iPhone 13 · Screen</p>
      <div className="mt-4 space-y-0">
        {steps.map((s, i) => (
          <div key={s} className="flex gap-2.5">
            <div className="flex flex-col items-center">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full ${
                  i < 2 ? "bg-[#4F9D69] text-white" : "border border-[#D8D3C8] bg-white"
                }`}
              >
                {i < 2 && <Check className="h-3 w-3" aria-hidden="true" />}
              </span>
              {i < steps.length - 1 && <span className="h-7 w-px bg-[#D8D3C8]" aria-hidden="true" />}
            </div>
            <div className="pb-4">
              <p className="text-[10px] font-medium">{s}</p>
              <p className="text-[8px] text-[#8C877E]">{i < 2 ? "Completed" : "Pending"}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1 rounded-xl border border-[#E3DFD7] bg-white p-3">
        <p className="text-[9px] font-semibold">Ahmed · Technician</p>
        <p className="mt-1.5 w-fit rounded-lg rounded-tl-none bg-[#F1EEE7] px-2.5 py-1.5 text-[9px]">
          Screen arrived — repair starts today.
        </p>
      </div>
      <div className="mt-auto flex items-center justify-around border-t border-[#E3DFD7] py-2.5 text-[#8C877E]">
        <Home className="h-4 w-4 text-[#1E2A38]" aria-hidden="true" />
        <Camera className="h-4 w-4" aria-hidden="true" />
        <User className="h-4 w-4" aria-hidden="true" />
      </div>
    </div>
  );
}

export function TechFixMockups() {
  return (
    <div className="group flex flex-wrap items-start justify-center gap-6">
      <PhoneFrame label="Repair selection">
        <TechRepair />
      </PhoneFrame>
      <PhoneFrame label="Live tracking + chat" className="sm:translate-y-8 sm:group-hover:translate-y-6">
        <TechTrack />
      </PhoneFrame>
    </div>
  );
}

/* ---------- 15 Interfaces challenge ---------- */

function MiniLogin() {
  return (
    <div className="flex h-full flex-col justify-center gap-1.5 bg-[#FBF4EC] p-2.5">
      <p className="font-heading text-[11px] italic text-[#7A4A2B]">FloraGoGo</p>
      <div className="h-3.5 rounded-full bg-white" />
      <div className="h-3.5 rounded-full bg-white" />
      <div className="mt-1 h-3.5 rounded-full bg-[#7A4A2B]" />
    </div>
  );
}

function Mini404() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[#121212] text-[#F8F7F4]">
      <p className="font-heading text-2xl">404</p>
      <p className="mt-1 text-[6px] text-[#9E9990]">page not found</p>
      <div className="mt-2 h-3 w-10 rounded-full bg-[#E0F65D]" />
    </div>
  );
}

function MiniCountdown() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1.5 bg-gradient-to-b from-[#1B2A4A] to-[#3D2B45] text-white">
      <p className="font-mono text-[6px] tracking-[0.3em]">NEW YEAR</p>
      <div className="flex gap-1">
        {["87", "03", "26"].map((n) => (
          <span key={n} className="rounded bg-white/15 px-1.5 py-1 font-heading text-[10px]">
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

function MiniPodcast() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 bg-[#F1EEE7] p-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2D6A4F]">
        <Play className="h-3.5 w-3.5 text-white" aria-hidden="true" />
      </span>
      <div className="h-1 w-full rounded-full bg-[#D8D3C8]">
        <div className="h-full w-2/3 rounded-full bg-[#2D6A4F]" />
      </div>
      <div className="flex gap-2 text-[#2D6A4F]">
        <SkipBack className="h-2.5 w-2.5" aria-hidden="true" />
        <SkipForward className="h-2.5 w-2.5" aria-hidden="true" />
      </div>
    </div>
  );
}

function MiniChat() {
  return (
    <div className="flex h-full flex-col justify-center gap-1.5 bg-white p-2.5">
      <div className="h-3 w-3/5 rounded-lg rounded-tl-none bg-[#F1EEE7]" />
      <div className="ml-auto h-3 w-1/2 rounded-lg rounded-tr-none bg-[#2E5C8A]" />
      <div className="h-3 w-2/3 rounded-lg rounded-tl-none bg-[#F1EEE7]" />
      <div className="ml-auto h-3 w-2/5 rounded-lg rounded-tr-none bg-[#2E5C8A]" />
      <div className="mt-1 h-3.5 rounded-full border border-[#E3DFD7]" />
    </div>
  );
}

function MiniFitness() {
  return (
    <div className="flex h-full flex-col justify-center bg-[#0A1A33] p-2.5 text-white">
      <p className="font-heading text-sm">1,745</p>
      <p className="text-[6px] text-[#63D2C0]">STEPS TODAY</p>
      <div className="mt-2 flex h-8 items-end gap-1">
        {[40, 70, 50, 90, 60, 80].map((h, i) => (
          <span key={i} className="w-1.5 rounded-t-sm bg-[#63D2C0]" style={{ height: `${h}%` }} aria-hidden="true" />
        ))}
      </div>
    </div>
  );
}

const minis = [
  { label: "01 · Login", el: <MiniLogin /> },
  { label: "07 · Error 404", el: <Mini404 /> },
  { label: "13 · Countdown", el: <MiniCountdown /> },
  { label: "09 · Podcast", el: <MiniPodcast /> },
  { label: "12 · Chat", el: <MiniChat /> },
  { label: "04 · Fitness", el: <MiniFitness /> },
];

export function ChallengeMockups() {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4">
      {minis.map((m) => (
        <div key={m.label} className="group">
          <div className="overflow-hidden rounded-xl border border-[#D4CFC4] bg-[#FAF9F6] p-1 transition-transform duration-500 group-hover:-translate-y-1.5">
            <div className="aspect-[9/16] overflow-hidden rounded-lg">{m.el}</div>
          </div>
          <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-[#8C877E]">
            {m.label}
          </p>
        </div>
      ))}
    </div>
  );
}
