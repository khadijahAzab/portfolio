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

type CollegeKey = "all" | "computing" | "education" | "economics";
type Metric = "graduates" | "gpa";

const COLLEGES: { id: CollegeKey; label: string }[] = [
  { id: "all", label: "كل الكليات" },
  { id: "computing", label: "الحاسبات" },
  { id: "education", label: "التربية" },
  { id: "economics", label: "الإدارة والاقتصاد" },
];

const METRICS: { id: Metric; label: string }[] = [
  { id: "graduates", label: "الخريجين" },
  { id: "gpa", label: "المعدل" },
];

const YEARS = ["1436", "1438", "1439", "1441", "1442", "1443"];

const GRADUATES: Record<CollegeKey, number[]> = {
  all: [240, 410, 520, 610, 890, 817],
  computing: [58, 96, 121, 140, 205, 188],
  education: [70, 118, 150, 176, 258, 236],
  economics: [44, 72, 91, 106, 154, 142],
};

const GPA: Record<CollegeKey, number[]> = {
  all: [2.91, 2.95, 3.0, 3.04, 3.09, 3.02],
  computing: [3.05, 3.1, 3.14, 3.18, 3.22, 3.19],
  education: [2.98, 3.01, 3.06, 3.1, 3.12, 3.08],
  economics: [2.88, 2.9, 2.96, 3.0, 3.05, 3.01],
};

const META: Record<CollegeKey, { majors: number; nationalities: number; gpa: string }> = {
  all: { majors: 139, nationalities: 35, gpa: "3.02" },
  computing: { majors: 12, nationalities: 9, gpa: "3.19" },
  education: { majors: 18, nationalities: 11, gpa: "3.08" },
  economics: { majors: 15, nationalities: 8, gpa: "3.01" },
};

const TOP_COLLEGES = [
  { name: "التربية", value: 1008 },
  { name: "الحاسبات", value: 808 },
  { name: "الاقتصاد", value: 609 },
  { name: "التصاميم", value: 452 },
];

const SPLIT = [
  { name: "سعودي", value: 3368 },
  { name: "غير سعودي", value: 119 },
];

const SPLIT_COLORS = ["#0E6E64", "#C9A227"];

const tooltipStyle = {
  fontSize: 11,
  fontFamily: "JetBrains Mono Variable, monospace",
  border: "1px solid #E3DFD7",
  borderRadius: 8,
  background: "#FFFFFF",
};

export default function BIDashboard() {
  const [college, setCollege] = useState<CollegeKey>("all");
  const [metric, setMetric] = useState<Metric>("graduates");

  const rows = useMemo(
    () => YEARS.map((y, i) => ({ y, graduates: GRADUATES[college][i], gpa: GPA[college][i] })),
    [college]
  );
  const total = GRADUATES[college].reduce((a, b) => a + b, 0);
  const meta = META[college];

  return (
    <BrowserFrame url="app.powerbi.com · uqu-graduates-1446.pbix" className="mx-auto w-full max-w-3xl">
      <div data-testid="bi-dashboard" className="bg-[#F4F2ED] p-4 text-[#121212] sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-heading text-base leading-tight">بيانات الطلبة الخريجين — ١٤٤٦هـ</p>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8C877E]">
              Power BI · DAX · Interactive recreation
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5" dir="rtl">
            {COLLEGES.map((c) => (
              <button
                key={c.id}
                data-testid={`bi-college-${c.id}`}
                onClick={() => setCollege(c.id)}
                className={`rounded-full px-3 py-1 text-[10px] font-medium transition-colors duration-300 ${
                  college === c.id
                    ? "bg-[#0E6E64] text-white"
                    : "border border-[#D8D3C8] bg-white text-[#5A5751] hover:border-[#0E6E64]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { label: "عدد الخريجين", value: total.toLocaleString() },
            { label: "التخصصات", value: String(meta.majors) },
            { label: "الجنسيات", value: String(meta.nationalities) },
            { label: "متوسط المعدل", value: meta.gpa },
          ].map((k) => (
            <div key={k.label} className="rounded-lg border border-[#E3DFD7] bg-white p-2.5">
              <p className="text-[9px] text-[#8C877E]">{k.label}</p>
              <p className="mt-0.5 font-heading text-base">{k.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-5">
          <div className="rounded-lg border border-[#E3DFD7] bg-white p-3 sm:col-span-3">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-[9px] text-[#8C877E]">حسب سنة القبول</p>
              <div className="flex gap-1" dir="rtl">
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
                  <XAxis dataKey="y" tick={{ fontSize: 9, fill: "#8C877E" }} axisLine={false} tickLine={false} />
                  <YAxis
                    tick={{ fontSize: 9, fill: "#8C877E" }}
                    axisLine={false}
                    tickLine={false}
                    domain={metric === "gpa" ? [2.8, 3.3] : undefined}
                  />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Area
                    type="monotone"
                    dataKey={metric}
                    stroke="#0E6E64"
                    strokeWidth={1.5}
                    fill="#E0F65D"
                    fillOpacity={0.35}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-lg border border-[#E3DFD7] bg-white p-3 sm:col-span-2">
            <p className="mb-1 text-[9px] text-[#8C877E]">أعلى الكليات</p>
            <div className="h-36">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={TOP_COLLEGES} margin={{ top: 4, right: 4, bottom: 0, left: -22 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 8, fill: "#8C877E" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 9, fill: "#8C877E" }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="value" fill="#0E6E64" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-4 rounded-lg border border-[#E3DFD7] bg-white p-3">
          <div className="h-20 w-20 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={SPLIT} dataKey="value" innerRadius={22} outerRadius={36} strokeWidth={0}>
                  {SPLIT.map((s, i) => (
                    <Cell key={s.name} fill={SPLIT_COLORS[i]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5" dir="rtl">
            {SPLIT.map((s, i) => (
              <div key={s.name} className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: SPLIT_COLORS[i] }} aria-hidden="true" />
                <span className="text-[10px] text-[#5A5751]">
                  {s.name} · {s.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          <p className="ml-auto hidden font-mono text-[8px] uppercase tracking-[0.15em] text-[#8C877E] sm:block">
            Saudi / Non-Saudi
          </p>
        </div>
      </div>
    </BrowserFrame>
  );
}
