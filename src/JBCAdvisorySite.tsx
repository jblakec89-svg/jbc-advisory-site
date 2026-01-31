import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  CheckCircle2,
  LineChart,
  Layers,
  Building2,
  Compass,
  Shield,
  Users,
  Calendar,
  Mail,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const Container: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({
  children,
  className = "",
  id,
}) => (
  <div id={id} className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-background/50 px-3 py-1 text-xs sm:text-sm text-muted-foreground shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      {children}
    </span>
  );
}

function Glow() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-56 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -bottom-56 right-[-140px] h-[720px] w-[720px] rounded-full bg-accent/[0.04] blur-3xl" />
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <div className="mb-3">
          <Badge variant="secondary" className="rounded-full border-accent/20 bg-accent-muted/80 text-accent">
            {eyebrow}
          </Badge>
        </div>
      ) : null}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-muted-foreground leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Nav() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Outcomes", href: "#outcomes" },
    { label: "Engagement", href: "#engagement" },
    { label: "About", href: "#about" },
    { label: "Client Successes", href: "#client-successes" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <div className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur-2xl">
      <Container className="py-3 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2">
          {/* Bottom-right logo style: JBC | ADVISORY */}
          <div className="flex items-baseline gap-2">
            <div className="font-semibold text-lg tracking-tight">JBC</div>
            <div className="h-5 w-px bg-muted-foreground/60" />
            <div className="text-xs tracking-[0.25em] text-muted-foreground">
              ADVISORY
            </div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button asChild className="rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.10)]">
            <a href="#contact">
              Book intro <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Container>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Glow />

      <Container className="pt-8 pb-12 sm:pt-10 sm:pb-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-start"
        >
          <div>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
              <Pill>
                <Building2 className="mr-2 h-4 w-4" /> Growth Stage Operator
              </Pill>
              <Pill>
                <Shield className="mr-2 h-4 w-4" /> Finance & Ops
              </Pill>
              <Pill>
                <Compass className="mr-2 h-4 w-4" /> Founder-friendly Execution
              </Pill>
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Take your SaaS Company from growth to scale
            </motion.h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              JBC Advisory helps growth-stage SaaS mature their operations and finance—
              tightening planning and accountability, improving cash efficiency, and setting up
              the systems that make scaling predictable.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-2xl bg-foreground text-background hover:bg-foreground/90 shadow-sm">
                <a href="https://calendly.com/blake-cowan" target="_blank" rel="noopener noreferrer">
                  Schedule a 30-min intro <Calendar className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl border-foreground/20 hover:border-foreground/40">
                <a href="#services">
                  Explore services <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Planning & FP&A", "Operating Rhythms", "Driver-based modeling", "Analysis & Insights"].map(
                (t) => (
                  <div
                    key={t}
                    className="rounded-2xl border bg-background/60 px-4 py-3 text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{t}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <Card className="rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <CardHeader>
              <CardTitle className="text-base">What you get in the first 14 days</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <Layers className="h-5 w-5 mt-0.5" />
                <div>
                  <div className="font-medium">Operating diagnosis</div>
                  <div className="text-sm text-muted-foreground">
                    Quick read on systems, data, cadence, and decision rights.
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <LineChart className="h-5 w-5 mt-0.5" />
                <div>
                  <div className="font-medium">Driver-based model</div>
                  <div className="text-sm text-muted-foreground">
                    Understand your KPIs and trajectory
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Users className="h-5 w-5 mt-0.5" />
                <div>
                  <div className="font-medium">90‑day execution plan</div>
                  <div className="text-sm text-muted-foreground">
                    Prioritized roadmap with owners, milestones, and reporting.
                  </div>
                </div>
              </div>
              <Separator />
              <div className="text-sm text-muted-foreground">
                Ideal for founders, CFOs, and COOs at Seed → Series C companies.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
}

function CredibilityStrip() {
  return (
    <div className="border-y bg-muted/30">
      <Container className="py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted-foreground">
            Operator experience across leading SaaS businesses.
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
            {[
              "Business Operations",
              "Pricing & packaging",
              "Growth Modeling",
              "Fundraising & Due Diligence",
            ].map((x) => (
              <div
                key={x}
                className="rounded-2xl border bg-background px-4 py-3 text-xs sm:text-sm"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "Fractional Chief of Staff",
      desc: "Outsource preparation for executive content, board/investor meetings to someone who has done this before.",
      bullets: ["Executive support", "Meeting prep", "Strategic projects"],
      icon: <Compass className="h-5 w-5" />,
    },
    {
      title: "Operating cadence & accountability",
      desc: "Design the rhythm: weekly exec reviews, monthly operating reviews, QBRs, and board prep—so the company runs on facts, not vibes.",
      bullets: ["Decision rights", "KPI ownership", "Templates + rituals"],
      icon: <Layers className="h-5 w-5" />,
    },
    {
      title: "FP&A, forecasting, and cash efficiency",
      desc: "Build a forecast that’s explainable and durable. Improve burn multiple, runway management, and spend governance.",
      bullets: ["Driver-based model", "Budgeting", "Runway scenarios"],
      icon: <LineChart className="h-5 w-5" />,
    },
    {
      title: "Metrics, unit economics, and investor narrative",
      desc: "Create a KPI tree that matches your business model. Package performance into board and investor-ready reporting",
      bullets: ["KPI hierarchy", "Unit economics", "Story + materials"],
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Scale-up systems and org design",
      desc: "Lightweight systems that scale: tooling, data definitions, operating policies, and the org structure to run them.",
      bullets: ["Tooling roadmap", "Data definitions", "Org + hiring plan"],
      icon: <Users className="h-5 w-5" />,
    },
  ];

  return (
    <Container id="services" className="py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-end">
        <SectionTitle
          eyebrow="Services"
          title="Operator-led advisory for growth-stage SaaS"
          subtitle="Practical help that closes gaps quickly: establish the operating foundation, improve financial clarity, and create repeatable execution." 
        />
        <div className="text-sm text-muted-foreground">
          Typical engagement starts with a diagnosis and a 90‑day plan, then moves into
          execution support.
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <Card key={s.title} className="rounded-3xl">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-2xl border grid place-items-center">
                  {s.icon}
                </div>
                <div>
                  <CardTitle className="text-base">{s.title}</CardTitle>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {s.bullets.map((b) => (
                  <Badge key={b} variant="secondary" className="rounded-full">
                    {b}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}

function Outcomes() {
  const outcomes = [
    {
      k: "Execution",
      v: "A leadership cadence and operating model that creates clarity, commitments, and follow-through.",
    },
    {
      k: "Financial control",
      v: "Forecasting, budgeting, and spend governance that improve runway and confidence.",
    },
    {
      k: "Board readiness",
      v: "Clean metrics, consistent story, and compelling materials that drive alignment and stand up to scrutiny.",
    },
    {
      k: "Executive Leverage",
      v: "Support in making hard decisions and solving important problems.",
    },
  ];

  return (
    <div id="outcomes" className="bg-muted/30 border-y">
      <Container className="py-14 sm:py-18">
        <SectionTitle
          eyebrow="Outcomes"
          title="The results clients hire JBC for"
          subtitle="You’ll see progress in the things that matter: predictability, velocity, and confidence in decisions." 
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {outcomes.map((o) => (
            <div
              key={o.k}
              className="rounded-3xl border bg-background px-6 py-5"
            >
              <div className="text-sm text-muted-foreground">{o.k}</div>
              <div className="mt-2 font-medium leading-relaxed">{o.v}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function Engagement() {
  const modes = [
    {
      title: "Sprint (2–3 weeks)",
      desc: "Diagnose + align. Ideal when you need a fast, grounded plan: ad hoc projects in need of a leader",
      items: [
        "Operating assessment",
        "KPI map + reporting outline",
        "Cross-functional program management",
        "Optional exec alignment workshop",
      ],
      cta: "Start with a sprint",
    },
    {
      title: "Fractional operator (1–3 days/week)",
      desc: "Hands-on execution to build the muscle and ship improvements.",
      items: [
        "Cadence + templates",
        "Model rebuild or upgrade",
        "Monthly board pack",
        "Team coaching + hiring help",
      ],
      cta: "Discuss fractional support",
      featured: true,
    },
    {
      title: "Advisory retainer", 
      desc: "Light-touch support for leaders who already have strong execution." ,
      items: [
        "Monthly strategy session",
        "Async review of materials",
        "Budgeting, Financial Planning, Analysis",
        "Ongoing calibration",
      ],
      cta: "Explore a retainer",
    },
  ];

  return (
    <Container id="engagement" className="py-16 sm:py-24">
      <SectionTitle
        eyebrow="Engagement"
        title="Engagement models"
        subtitle="Pick the level of support that matches your urgency and internal bandwidth." 
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {modes.map((m) => (
          <Card
            key={m.title}
            className={`rounded-3xl ${m.featured ? "border-foreground" : ""}`}
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-base">{m.title}</CardTitle>
                {m.featured ? (
                  <Badge className="rounded-full">Most common</Badge>
                ) : null}
              </div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {m.desc}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                {m.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span className="text-muted-foreground">{it}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full rounded-2xl">
                <a href="#contact">
                  {m.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border bg-background p-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] items-start">
          <div>
            <div className="font-medium">What I’ll ask for on day one</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Prior plans and decks, your current model, KPI dashboards, org chart, and a list
              of the top 5 decisions you’re struggling with.
            </p>
          </div>
          <div>
            <div className="font-medium">What you’ll get back</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              A clear diagnosis, a prioritized plan, and shipped improvements—plus a team that
              feels more confident about what “good” looks like.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

function About() {
  return (
    <div id="about" className="bg-muted/30 border-y">
      <Container className="py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <SectionTitle
            eyebrow="Founder"
            title="Operator-led advisory, built on real scale-up experience"
            subtitle="JBC Advisory is founded by Blake Cowan,  a growth-stage SaaS operator who has spent the last decade building and running Business Operations, Finance, and Analytics inside leading software companies such as LinkedIn, Invision, Invoice2go, and BILL.com." 
          />

          <Card className="rounded-3xl">
            <CardContent className="p-6 space-y-5">

              <p className="text-sm text-muted-foreground leading-relaxed">
                Blake started JBC Advisory to bring that same operator mindset to founders and
                leadership teams who want practical, high-leverage help — not slide decks or
                recycled Big 4 frameworks. He values relationships over transactions, action over perfection, and has a disdain for bullshit and bureacracy. 
              </p>

              <div className="grid gap-3 sm:grid-cols-2 text-sm">
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5" />
                  <span className="text-muted-foreground">Built BizOps, FP&A, Analytics functions</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5" />
                  <span className="text-muted-foreground">Chief of Staff</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5" />
                  <span className="text-muted-foreground">Pricing & packaging strategy</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5" />
                  <span className="text-muted-foreground">Driver-based SaaS models</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5" />
                  <span className="text-muted-foreground">Seed → Series C experience</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5" />
                  <span className="text-muted-foreground">B2B SaaS focus</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="text-sm font-medium">Typical clients</div>
                <p className="text-sm text-muted-foreground">
                  Founders, CFOs, COOs, and Heads of Ops at growth-stage SaaS companies who
                  need clearer planning, tighter execution, and better operating hygiene.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" className="rounded-2xl">
                  <a href="#contact">Contact</a>
                </Button>
                <Button asChild className="rounded-2xl">
                  <a href="https://calendly.com/blake-cowan" target="_blank" rel="noopener noreferrer">
                    Book intro <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}


function ClientSuccesses() {
  return (
    <div id="client-successes" className="border-y bg-muted/30">
      <Container className="py-14 sm:py-18">
        <SectionTitle
          eyebrow="Client Successes"
          title="Results we've helped teams achieve"
          subtitle="Growth-stage SaaS companies that strengthened operations, planning, and scale."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Card className="rounded-2xl">
            <CardContent className="p-6 flex flex-col items-center justify-center min-h-[140px]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-muted text-accent">
                <Building2 className="h-5 w-5" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-left w-full max-w-md">
                Designed a General Manager-based ownership model for leading FinTech org, transitioning from murky ownership to heightened accountability and results.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6 flex flex-col items-center justify-center min-h-[140px]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-muted text-accent">
                <LineChart className="h-5 w-5" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-left w-full max-w-md">
                Built a comprehensive P&L and growth model that supported a $620M sell-side acquisition, battle tested through third party diligence.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6 flex flex-col items-center justify-center min-h-[140px]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-muted text-accent">
                <FileText className="h-5 w-5" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-left w-full max-w-md">
                Developed compelling Investor materials and narrative that secured successful $100M Series C fundraise.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6 flex flex-col items-center justify-center min-h-[140px]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-muted text-accent">
                <Layers className="h-5 w-5" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-left w-full max-w-md">
                Implemented company-wide planning framework to connect strategy, budgeting, and OKRs into a cohesive cycle.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}

function Contact() {
  return (
    <Container id="contact" className="py-20 sm:py-28">
      <div className="rounded-[28px] border bg-background p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Let’s talk
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If you’re building a SaaS business and want a stronger operating cadence,
              clearer financial planning, and board-ready reporting, I can help.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>
                  Email: <span className="text-foreground">jblakec89@gmail.com</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  Scheduling:{" "}
                  <a 
                    href="https://calendly.com/blake-cowan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    calendly.com/blake-cowan
                  </a>
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Seed → Series C",
                "B2B SaaS",
                "Finance & Ops",
                "BizOps cadence",
                "Pricing / packaging",
              ].map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-base">Project inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "This is a demo form. Wire it to your email provider (e.g., Formspree) or CRM (HubSpot)."
                  );
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-sm">Name</label>
                  <input
                    className="mt-1 w-full rounded-2xl border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm">Work email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-2xl border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm">Company + stage</label>
                  <input
                    className="mt-1 w-full rounded-2xl border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Company, funding stage"
                  />
                </div>
                <div>
                  <label className="text-sm">What are you trying to accomplish?</label>
                  <textarea
                    className="mt-1 w-full min-h-[110px] rounded-2xl border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="A few sentences is perfect"
                  />
                </div>
                <Button type="submit" className="w-full rounded-2xl" size="lg">
                  Send inquiry <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="text-xs text-muted-foreground">
                  Prefer email? Send a note and I’ll respond within 1–2 business days.
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}

function Footer() {
  const logoSrc = "/jbc-mark.png";
  return (
    <div className="border-t">
      <Container className="py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="JBC Advisory" className="h-7 w-auto" />
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} JBC Advisory. All rights reserved.
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#services" className="text-muted-foreground transition-colors hover:text-accent">
              Services
            </a>
            <a href="#about" className="text-muted-foreground transition-colors hover:text-accent">
              About
            </a>
            <a href="#client-successes" className="text-muted-foreground transition-colors hover:text-accent">
              Client Successes
            </a>
            <a
              href="#contact"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function JBCAdvisorySite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50/40 to-background text-foreground tracking-tight">
      <Nav />
      <div className="w-full min-w-full overflow-hidden border-b border-border/80 leading-[0]">
        <img
          src="/cityscape-banner.png"
          alt="Cityscapes of Memphis, Hong Kong, and San Francisco"
          className="block w-full min-w-full object-cover object-center sm:h-44 md:h-52 lg:h-60 xl:h-72"
          style={{ filter: "contrast(0.96) grayscale(0.12)" }}
        />
      </div>
      <Hero />
      <CredibilityStrip />
      <Services />
      <Outcomes />
      <Engagement />
      <About />
      <ClientSuccesses />
      <Contact />
      <Footer />
    </div>
  );
}
