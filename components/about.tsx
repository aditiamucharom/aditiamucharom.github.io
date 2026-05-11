import { Code2, Palette, Rocket, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Readable, maintainable, and well-tested code that scales with the team.",
  },
  {
    icon: Palette,
    title: "Design Sense",
    description:
      "A strong eye for detail — typography, spacing, motion, and interaction.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Fast-loading, accessible experiences built with modern web standards.",
  },
  {
    icon: Sparkles,
    title: "Craft",
    description:
      "I care about the little things that make a product feel polished.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-page">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
          About
        </p>
        <h2 className="section-title">A little about me</h2>
        <p className="section-subtitle text-lg">
          I&apos;m a developer who enjoys turning ideas into real, usable
          products. I work across the stack, but I have a soft spot for
          thoughtful frontend work — the kind that feels fast and effortless to
          use.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--muted))]/40 p-6 transition hover:border-brand/50 hover:bg-[rgb(var(--muted))]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold">{title}</h3>
              <p className="mt-1 text-sm text-[rgb(var(--muted-foreground))]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
