export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  tagline: string;
  objective: string;
  tools: string[];
  process: string[];
  deliverables: string;
  link?: string;
  linkLabel?: string;
  visual: "wasla" | "bloom" | "empwell" | "bi" | "challenge" | "techfix";
  images?: { src: string; caption: string }[];
}

export const profile = {
  name: "Khadijah Ahmed Azab",
  firstName: "Khadijah",
  lastName: "Ahmed Azab",
  role: "UI/UX Designer & BI Analyst",
  discipline: "Human-Computer Interaction",
  location: "Makkah, Saudi Arabia",
  email: "khadijahazab1425@gmail.com",
  phone: "+966 56 425 5164",
  phoneHref: "+966564255164",
  languages: ["Arabic", "English"],
  availability: "Open to UI/UX & BI opportunities",
  summary:
    "Human-Computer Interaction graduate with practical exposure to user experience, user interface, and user-centered digital solution development. Skilled in applying usability, accessibility, interaction design, information architecture, wireframing, and prototyping principles to simplify complex applications and improve digital experiences.",
};

export const stats = [
  { value: "6+", label: "End-to-end projects" },
  { value: "221", label: "Survey participants (Wasla)" },
  { value: "15", label: "Interfaces in 30 days" },
  { value: "6", label: "Professional certifications" },
];

export const skillGroups = [
  {
    title: "UI/UX & HCI",
    caption: "Design discipline",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Information Architecture",
      "Interaction Design",
      "Usability & Accessibility",
    ],
  },
  {
    title: "Data & BI",
    caption: "Analytical discipline",
    skills: [
      "Power BI",
      "Excel",
      "Data Visualization",
      "KPI Dashboards",
      "Arithmetical Analysis",
    ],
  },
  {
    title: "Tools & Code",
    caption: "Execution stack",
    skills: ["Figma", "HTML / CSS", "Canva", "PowerPoint", "Word", "Flutter & Dart (academic)"],
  },
];

export const softSkills = [
  "Communicating ideas clearly",
  "Organizing initiatives",
  "Cross-functional collaboration",
  "Teamwork",
  "Fast-paced delivery",
  "Organization & management",
];

export const experience = [
  {
    role: "IT Infrastructure Intern",
    company: "Makkah Health Cluster",
    period: "2025 · 5 months",
    highlights: [
      "Supported IT infrastructure operations in a fast-paced healthcare environment.",
      "Collaborated with technical teams to support digital workflows and efficient technology operations.",
      "Applied user-centered principles to improve software usability and overall user experience.",
      "Built practical understanding of technical support, digital systems, and workflow optimization.",
    ],
  },
];

export const education = {
  degree: "B.Sc. Human-Computer Interaction",
  institution: "Umm Al-Qura University",
  detail: "College of Computing · Department of Software Engineering",
  period: "2022 — 2026",
  honors: "Second-Class Honours",
};

export const certifications = [
  { name: "Visual Elements of User Interface Design", issuer: "Coursera" },
  { name: "User Experience Design", issuer: "Edraak" },
  { name: "Product Management", issuer: "Edraak" },
  { name: "The Art of Effective Communication Skills", issuer: "Edraak" },
  { name: "Introduction to the Internet of Things", issuer: "Satr Platform" },
  { name: "Product and Service Development", issuer: "Monsha'at" },
];

export const activities = [
  {
    title: "Hajjathon — 3rd Edition",
    role: "Participant",
    desc: "Competed in the third edition of the Hajj-focused innovation hackathon.",
  },
  {
    title: "Designathon",
    role: "Participant",
    desc: "Rapid design competition spanning research, ideation, and high-fidelity prototyping.",
  },
  {
    title: "College of Computing Club",
    role: "Speaker · Organizer · HCI Team",
    desc: "Contributed through public speaking, event organization, and HCI team involvement.",
  },
];

export const projects: Project[] = [
  {
    id: "wasla",
    index: "01",
    title: "Wasla — Smart Subscription Hub",
    category: "Graduation Capstone · Mobile App",
    tagline: "A bilingual Arabic–English hub that tracks subscriptions, spending, and renewal reminders.",
    objective:
      "Graduation project at Umm Al-Qura University: help users regain control of recurring digital expenses through a single bilingual mobile app that tracks subscriptions, monitors spending, and sends renewal reminders before money leaves the account.",
    tools: ["Figma", "Firebase", "WCAG 2.1 AA", "Usability Testing"],
    process: [
      "Applied HCI and user-centered design principles from research through delivery.",
      "Engineered accessibility in: WCAG 2.1 AA contrast, adjustable font sizes, dark/light mode, responsive layouts.",
      "Validated demand with a quantitative survey of 221 participants.",
      "Ran think-aloud usability testing with 5 participants and iterated on the findings.",
    ],
    deliverables:
      "Working bilingual mobile app (iOS + Android), full Figma design system, accessibility audit, and usability test report.",
    link: "https://wasla-project.vercel.app/",
    linkLabel: "Visit live project",
    visual: "wasla",
    images: [
      { src: "/projects/wasla.webp", caption: "Live product — wasla-project.vercel.app" },
    ],
  },
  {
    id: "bloom",
    index: "02",
    title: "Bloom — Floral Commerce App",
    category: "Mobile UI/UX · E-Commerce",
    tagline: "A soft, sensory gifting flow — from bouquet discovery to a one-thumb checkout.",
    objective:
      "Design a mobile flower-gifting experience that removes choice fatigue: curated bouquets, a customized-bouquet builder, gifts and offers sections, and a payment flow gentle enough for a first-time buyer.",
    tools: ["Figma", "Design System", "Prototyping", "User Flows"],
    process: [
      "Mapped the gifting journey: browse → customize → cart → pay → success.",
      "Built a consistent lilac design language with reusable card, chip, and bottom-nav components.",
      "Designed the customized-bouquet builder with live flower, wrap, and ribbon selection.",
      "Completed the full purchase loop: cart, address, multi-method payment, and order success states.",
    ],
    deliverables:
      "12+ high-fidelity screens covering home, catalog, product, cart, payment, success, and profile — with a clickable prototype.",
    visual: "bloom",
    images: [
      { src: "/projects/bloom.webp", caption: "Full screen set — splash, catalog, product, cart, pay & success" },
    ],
  },
  {
    id: "empwell",
    index: "03",
    title: "EmpWell — Wellness Tracker",
    category: "Mobile UI/UX · Health Data",
    tagline: "A calm, glanceable health companion built on rings, trends, and quiet metrics.",
    objective:
      "Design an employee wellness app that makes daily health data — steps, heart rate, sleep, stress — readable in under ten seconds, on a dark interface built for low-glare, all-day use.",
    tools: ["Figma", "Information Architecture", "Data Visualization", "Design Tokens"],
    process: [
      "Structured the information architecture around a single 'Today' glance view.",
      "Designed data-dense widgets: step rings, BPM, distance, calories, and weekly bar trends.",
      "Built a per-day detail view with progress rings and resting heart-rate context.",
      "Kept a persistent five-tab navigation for one-thumb reachability.",
    ],
    deliverables:
      "High-fidelity dark-mode screens: onboarding, sign-up, Today dashboard, and daily detail analytics.",
    visual: "empwell",
    images: [
      { src: "/projects/empwell.webp", caption: "Login, onboarding, Today dashboard & daily detail" },
    ],
  },
  {
    id: "bi",
    index: "04",
    title: "Executive BI Intelligence Suite",
    category: "Business Intelligence · Power BI",
    tagline: "Retail telemetry distilled into an executive dashboard — filterable in one click.",
    objective:
      "Consolidate multi-branch retail performance into a single executive view: revenue, margin, and order volume with branch-level filtering and month-over-month reading — designed in Figma, modeled in Power BI.",
    tools: ["Power BI", "DAX", "Power Query", "Excel", "Figma"],
    process: [
      "Modeled sales data into a clean star schema for branch, product, and time dimensions.",
      "Wrote DAX measures for MoM growth, margin percentage, and order counts.",
      "Designed the dashboard canvas in Figma first — strict grid, restrained palette, clear hierarchy.",
      "Built drill-down interactivity so one filter click re-reads the entire page.",
    ],
    deliverables:
      "Interactive Power BI dashboard, DAX measure library, and an executive KPI sheet. Live interactive recreation below — try the filters.",
    visual: "bi",
  },
  {
    id: "challenge",
    index: "05",
    title: "15 Interfaces in 30 Days",
    category: "Design Sprint · Self-Challenge",
    tagline: "A month of deliberate daily practice across fifteen distinct interface problems.",
    objective:
      "Push range and speed: design fifteen complete, unrelated interfaces in one month — login, checkout, player, chat, error, countdown, and more — each with its own layout logic and visual tone.",
    tools: ["Figma", "Auto Layout", "Typography", "Micro-interactions"],
    process: [
      "Committed to one finished interface every second day for a month.",
      "Covered divergent domains: e-commerce, fitness, music, messaging, and system states.",
      "Designed the often-ignored states too: loading, empty, error 404, success, and failure.",
      "Reused an atomic component approach to keep velocity without losing polish.",
    ],
    deliverables:
      "15 complete high-fidelity interface concepts — including FloraGoGo, a fitness tracker, podcast player, chat, and state screens.",
    visual: "challenge",
    images: [
      { src: "/projects/challenge-1.webp", caption: "Board 1 — FloraGoGo, checkout, perfume store, fitness & profile" },
      { src: "/projects/challenge-2.webp", caption: "Board 2 — 404, podcast, success/error states, chat, store & countdown" },
    ],
  },
  {
    id: "techfix",
    index: "06",
    title: "TechFix — Device Repair Service",
    category: "Service Design · Mobile UI",
    tagline: "Transparent electronics repair — diagnose, track, and chat with real technicians.",
    objective:
      "Software Engineering fundamentals project: design a mobile service that makes device repair trustworthy — clear repair types, expert help on demand, camera-assisted diagnosis, and live order tracking.",
    tools: ["Figma", "Service Blueprinting", "User Flows", "Prototyping"],
    process: [
      "Mapped the full service journey: customer, technician, and courier touchpoints.",
      "Designed auth, repair-type selection, and expert-help entry points.",
      "Added a camera flow so users can show the defect instead of describing it.",
      "Closed the loop with order status timelines and technician chat.",
    ],
    deliverables:
      "Complete app flow: About, login/sign-up, home, repair, camera, chat, and contact screens.",
    visual: "techfix",
    images: [
      { src: "/projects/techfix.webp", caption: "Full 8-page flow — about, auth, home, repair, camera, chat & contact" },
    ],
  },
];

export const archive = [
  {
    title: "Recipes & Store App",
    course: "Information Architecture",
    desc: "IA-driven mobile app spanning home, recipe detail, store, cart, checkout, and profile.",
    image: "/projects/ia.webp",
  },
  {
    title: "Marketplace & Messaging",
    course: "Design Systems",
    desc: "Component-based e-commerce system: listings, product options, Mada/Tabby/Tamara payments, and chat.",
    image: "/projects/design-systems.webp",
  },
];
