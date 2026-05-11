import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/projects-data";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 sm:py-32 border-t border-[rgb(var(--border))]"
    >
      <div className="container-page">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
          Work
        </p>
        <h2 className="section-title">Selected projects</h2>
        <p className="section-subtitle text-lg">
          A handful of things I&apos;ve built recently. More on my{" "}
          <Link
            href="https://github.com/aditiamucharom"
            className="underline underline-offset-4 hover:text-brand"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          .
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--muted))]/30 transition hover:border-brand/50 hover:bg-[rgb(var(--muted))]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand/20 via-fuchsia-400/10 to-amber-300/20 dark:from-brand/25 dark:via-fuchsia-500/10 dark:to-amber-500/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-5xl font-black text-[rgb(var(--foreground))]/10">
                    {p.title
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-[rgb(var(--muted-foreground))]">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--background))] px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  {p.href && (
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                    >
                      Live <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                  {p.repo && (
                    <Link
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} source code`}
                      className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgb(var(--border))] hover:bg-[rgb(var(--background))] transition"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
