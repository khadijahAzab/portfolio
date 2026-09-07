import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BrowserFrame } from "./Frames";

type Metric = "revenue" | "margin" | "orders";

const METRICS: { id: Metric; label: string }[] = [
  { id: "revenue", label: "Revenue" },
  { id: "margin", label: "Margin" },
  { id: "orders", label: "Orders" },
];

const BRANCHES = ["All", "Makkah", "Jeddah", "Riyadh"] as const;

const MONTHLY: Record<(typeof BRANCHES)[number], { m: string; revenue: number; margin: number; orders: number }[]> = {
  All: [
    { m: "Jan", revenue: 820, margin: 31, orders: 1240 },
    { m: "Feb", revenue: 760, margin: 29, orders: 1180 },
    { m: "Mar", revenue: 910, margin: 34, orders: 1390 },
    { m: "Apr", revenue: 880, margin: 33, orders: 1310 },
    { m: "May", revenue: 1040, margin: 36, orders: 1520 },
    { m: "Jun", revenue: 1120, margin: 38, orders: 1640 },
  ],
  Makkah: [
    { m: "Jan", revenue: 310, margin: 33, orders: 470 },
    { m: "Feb", revenue: 290, margin: 31, orders: 440 },
    { m: "Mar", revenue: 350, margin: 36, orders: 520 },
    { m: "Apr", revenue: 340, margin: 35, orders: 500 },
    { m: "May", revenue: 410, margin: 39, orders: 590 },
    { m: "Jun", revenue: 440, margin: 41, orders: 640 },
  ],
  Jeddah: [
    { m: "Jan", revenue: 280, margin: 30, orders: 430 },
    { m: "Feb", revenue: 260, margin: 28, orders: 410 },
    { m: "Mar", revenue: 320, margin: 33, orders: 480 },
    { m: "Apr", revenue: 300, margin: 32, orders: 450 },
    { m: "May", revenue: 360, margin: 35, orders: 530 },
    { m: "Jun", revenue: 390, margin: 37, orders: 570 },
  ],
  Riyadh: [
    { m: "Jan", revenue: 230, margin: 30, orders: 340 },
    { m: "Feb", revenue: 210, margin: 28, orders: 330 },
    { m: "Mar", revenue: 240, margin: 32, orders: 390 },
    { m: "Apr", revenue: 240, margin: 31, orders: 360 },
    { m: "May", revenue: 270, margin: 33, orders: 400 },
    { m: "Jun", revenue: 290, margin: 35, orders: 430 },
  ],
};

const CATEGORIES = [
  { name: "Grocery", value: 38 },
  { name: "Electronics", value: 26 },
  { name: "Apparel", value: 21 },
  { name: "Home", value: 15 },
];

const CHANNELS = [
  { name: "In-store", value: 54 },
  { name: "Online", value: 34 },
  { name: "App", value: 12 },
];

const CHANNEL_COLORS = ["#121212", "#8C877E", "#D8D3C8"];

const tooltipStyle = {
  fontSize: 11,
  fontFamily: "JetBrains Mono Variable, monospace",
  border: "1px solid #E3DFD7",
  borderRadius: 8,
  background: "#FFFFFF",
};

export default function BIDashboard() {
  const [metric, setMetric] = useState<Metric>("revenue");
  const [branch, setBranch] = useState<(typeof BRANCHES)[number]>("All");

  const rows = MONTHLY[branch];
  const kpis = useMemo(() => {
    const totalRevenue = rows.reduce((a, r) => a + r.revenue, 0);
    const totalOrders = rows.reduce((a, r) => a + r.orders, 0);
    const avgMargin = rows.reduce((a, r) => a + r.margin, 0) / rows.length;
    const mom = ((rows[5].revenue - rows[4].revenue) / rows[4].revenue) * 100;
    return { totalRevenue, totalOrders, avgMargin, mom };
  }, [rows]);

  return (
    <BrowserFrame url="app.powerbi.com · executive-suite.pbix" className="mx-auto w-full max-w-3xl">
      <div data-testid="bi-dashboard" className="bg-[#F4F2ED] p-4 text-[#121212] sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-heading text-base leading-tight">Retail Performance — H1</p>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8C877E]">
              Power BI · DAX · Star schema · Live demo
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {BRANCHES.map((b) => (
              <button
                key={b}
                data-testid={`bi-branch-${b.toLowerCase()}`}
                onClick={() => setBranch(b)}
                className={`rounded-full px-3 py-1 text-[10px] font-medium transition-colors duration-300 ${
                  branch === b
                    ? "bg-[#121212] text-[#F8F7F4]"
                    : "border border-[#D8D3C8] bg-white text-[#5A5751] hover:border-[#121212]"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { label: "Revenue", value: `SAR ${(kpis.totalRevenue / 1000).toFixed(2)}M` },
            { label: "Avg margin", value: `${kpis.avgMargin.toFixed(1)}%` },
            { label: "Orders", value: kpis.totalOrders.toLocaleString() },
            { label: "MoM growth", value: `+${kpis.mom.toFixed(1)}%` },
          ].map((k) => (
            <div key={k.label} className="rounded-lg border border-[#E3DFD7] bg-white p-2.5">
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#8C877E]">{k.label}</p>
              <p className="mt-0.5 font-heading text-base">{k.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-5">
          <div className="rounded-lg border border-[#E3DFD7] bg-white p-3 sm:col-span-3">
            <div className="mb-1 flex items-center justify-between">
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#8C877E]">
                Monthly {metric}
              </p>
              <div className="flex gap-1">
                {METRICS.map((m) => (
                  <button
                    key={m.id}
                    data-testid={`bi-metric-${m.id}`}
                    onClick={() => setMetric(m.id)}
                    className={`rounded-full px-2 py-0.5 text-[9px] transition-colors duration-300 ${
                      metric === m.id ? "bg-[#E0F65D] text-[#121212]" : "text-[#8C877E] hover:text-[#121212]"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-36">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={rows} margin={{ top: 4, right: 4, bottom: 0, left: -18 }}>
                  <XAxis dataKey="m" tick={{ fontSize: 9, fill: "#8C877E" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 9, fill: "#8C877E" }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Area
                    type="monotone"
                    dataKey={metric}
                    stroke="#121212"
                    strokeWidth={1.5}
                    fill="#E0F65D"
                    fillOpacity={0.35}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-lg border border-[#E3DFD7] bg-white p-3 sm:col-span-2">
            <p className="mb-1 font-mono text-[8px] uppercase tracking-[0.15em] text-[#8C877E]">
              Category mix %
            </p>
            <div className="h-36">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CATEGORIES} margin={{ top: 4, right: 4, bottom: 0, left: -22 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 8, fill: "#8C877E" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 9, fill: "#8C877E" }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="value" fill="#121212" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-4 rounded-lg border border-[#E3DFD7] bg-white p-3">
          <div className="h-20 w-20 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={CHANNELS} dataKey="value" innerRadius={22} outerRadius={36} strokeWidth={0}>
                  {CHANNELS.map((c, i) => (
                    <Cell key={c.name} fill={CHANNEL_COLORS[i]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            {CHANNELS.map((c, i) => (
              <div key={c.name} className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: CHANNEL_COLORS[i] }} aria-hidden="true" />
                <span className="text-[10px] text-[#5A5751]">
                  {c.name} · {c.value}%
                </span>
              </div>
            ))}
          </div>
          <p className="ml-auto hidden font-mono text-[8px] uppercase tracking-[0.15em] text-[#8C877E] sm:block">
            Channel share
          </p>
        </div>
      </div>
    </BrowserFrame>
  );
}
