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
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm text-muted-foreground">
      {children}
    </span>
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
          <Badge variant="secondary" className="rounded-full">
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
    { label: "Contact", href: "#contact" },
  ];
  return (
    <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container className="py-3 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-foreground text-background grid place-items-center font-semibold">
            J
          </div>
          <div className="leading-tight">
            <div className="font-semibold">JBC Advisory</div>
            <div className="text-xs text-muted-foreground">Operator-led advisory</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground transition"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button asChild className="rounded-2xl">
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
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-foreground" />
        <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full blur-3xl opacity-20 bg-foreground" />
      </div>

      <Container className="pt-14 pb-10 sm:pt-20 sm:pb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Pill>
                <Building2 className="mr-2 h-4 w-4" /> Growth-stage SaaS operators
              </Pill>
              <Pill>
                <Shield className="mr-2 h-4 w-4" /> Finance + Ops rigor
              </Pill>
              <Pill>
                <Compass className="mr-2 h-4 w-4" /> Founder-friendly execution
              </Pill>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight">
              Build the operating system that takes your SaaS company from
              <span className="whitespace-nowrap"> growth</span> to <span className="whitespace-nowrap">scale</span>.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              JBC Advisory helps growth-stage SaaS teams mature their operations and finance—
              tightening planning and accountability, improving cash efficiency, and setting up
              the systems that make scaling predictable.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="#contact">
                  Schedule a 30-min intro <Calendar className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl">
                <a href="#services">
                  Explore services <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Planning & FP&A", "Ops cadence", "Unit economics", "Board-ready metrics"].map(
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

          <Card className="rounded-3xl shadow-sm">
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
                  <div className="font-medium">Metric map + model sanity</div>
                  <div className="text-sm text-muted-foreground">
                    Clean KPI hierarchy and a forecast you can trust.
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
              "BizOps leadership",
              "Pricing & packaging",
              "Enterprise analytics",
              "Forecasting & runway",
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
      title: "Operating cadence & accountability",
      desc: "Design the rhythm: weekly exec reviews, monthly operating reviews, QBRs, and board prep—so the company runs on facts, not vibes.",
      bullets: ["Decision rights", "KPI ownership", "Templates + rituals"],
      icon: <Layers className="h-5 w-5" />,
    },
    {
      title: "FP&A, forecasting, and cash efficiency",
      desc: "Build a forecast that's explainable and durable. Improve burn multiple, runway management, and spend governance.",
      bullets: ["Driver-based model", "Budgeting", "Runway scenarios"],
      icon: <LineChart className="h-5 w-5" />,
    },
    {
      title: "Metrics, unit economics, and investor narrative",
      desc: "Create a KPI tree that matches your business model. Package performance into board-ready and investor-ready reporting.",
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
    <Container id="services" className="py-14 sm:py-18">
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
      v: "A leadership cadence that creates clarity, commitments, and follow-through.",
    },
    {
      k: "Financial control",
      v: "Forecasting, budgeting, and spend governance that improve runway and confidence.",
    },
    {
      k: "Board readiness",
      v: "Clean metrics, consistent story, and materials that stand up to scrutiny.",
    },
    {
      k: "Scale leverage",
      v: "Systems, tooling, and org design that reduce drag as the company grows.",
    },
  ];

  return (
    <div id="outcomes" className="bg-muted/30 border-y">
      <Container className="py-14 sm:py-18">
        <SectionTitle
          eyebrow="Outcomes"
          title="The results clients hire JBC for"
          subtitle="You'll see progress in the things that matter: predictability, velocity, and confidence in decisions."
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
      desc: "Diagnose + align. Ideal when you need a fast, grounded plan.",
      items: [
        "Operating assessment",
        "KPI map + reporting outline",
        "90‑day roadmap",
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
        "Decision support",
        "Ongoing calibration",
      ],
      cta: "Explore a retainer",
    },
  ];

  return (
    <Container id="engagement" className="py-14 sm:py-18">
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
            <div className="font-medium">What I'll ask for on day one</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Prior plans and decks, your current model, KPI dashboards, org chart, and a list
              of the top 5 decisions you're struggling with.
            </p>
          </div>
          <div>
            <div className="font-medium">What you'll get back</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              A clear diagnosis, a prioritized plan, and shipped improvements—plus a team that
              feels more confident about what "good" looks like.
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
            eyebrow="About"
            title="Built by an operator who's lived the scale-up challenges"
            subtitle="JBC Advisory is led by a SaaS operator with deep experience in Business Operations, Finance, and Analytics—helping leadership teams create clarity and execution speed."
          />

          <Card className="rounded-3xl">
            <CardContent className="p-6 space-y-4">
              <div className="text-sm text-muted-foreground">
                Add your bio here. Suggested structure:
              </div>
              <ul className="space-y-2 text-sm">
                {["1–2 sentences on your operator background (roles, companies).",
                  "Your sweet spot: Seed → Series C, SaaS, B2B preferred.",
                  "3–5 proof points (cadences implemented, models rebuilt, pricing work, board prep).",
                  "Where you work: SF Bay Area + remote."]
                  .map((x) => (
                    <li key={x} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5" />
                      <span className="text-muted-foreground">{x}</span>
                    </li>
                  ))}
              </ul>
              <Separator />
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" className="rounded-2xl">
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact
                  </a>
                </Button>
                <Button asChild className="rounded-2xl">
                  <a href="#contact">
                    Request a case study <ArrowRight className="ml-2 h-4 w-4" />
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

function Insights() {
  const posts = [
    {
      title: "From 'busy' to 'operationally excellent': the cadence playbook",
      desc: "How to design weekly/monthly rhythms that improve decisions without adding bureaucracy.",
    },
    {
      title: "Driver-based forecasting for SaaS: what actually matters",
      desc: "A simple framework for models leaders can explain and trust.",
    },
    {
      title: "Board decks that reduce questions, not raise them",
      desc: "A structure for metrics + narrative that builds confidence with investors.",
    },
  ];

  return (
    <Container className="py-14 sm:py-18">
      <SectionTitle
        eyebrow="Insights"
        title="Thought leadership"
        subtitle="Publish short, tactical pieces that signal expertise and help prospects see your approach."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.title} className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-base">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </div>
              <Button variant="link" className="px-0 mt-3">
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}

function Contact() {
  return (
    <Container id="contact" className="py-14 sm:py-18">
      <div className="rounded-[28px] border bg-background p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Let's talk
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If you're building a SaaS business and want a stronger operating cadence,
              clearer financial planning, and board-ready reporting, I can help.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>
                  Email: <span className="text-foreground">hello@jbcadvisory.com</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  Scheduling: <span className="text-foreground">Add Calendly link</span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Seed → Series C",
                "B2B SaaS",
                "Finance + Ops",
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
                    className="mt-1 w-full rounded-2xl border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm">Work email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-2xl border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm">Company + stage</label>
                  <input
                    className="mt-1 w-full rounded-2xl border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                    placeholder="Company, funding stage"
                  />
                </div>
                <div>
                  <label className="text-sm">What are you trying to accomplish?</label>
                  <textarea
                    className="mt-1 w-full min-h-[110px] rounded-2xl border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                    placeholder="A few sentences is perfect"
                  />
                </div>
                <Button type="submit" className="w-full rounded-2xl" size="lg">
                  Send inquiry <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="text-xs text-muted-foreground">
                  Prefer email? Send a note and I'll respond within 1–2 business days.
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
  return (
    <div className="border-t">
      <Container className="py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JBC Advisory. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#services" className="text-muted-foreground hover:text-foreground">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground">
              About
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground"
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
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <CredibilityStrip />
      <Services />
      <Outcomes />
      <Engagement />
      <About />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
}
