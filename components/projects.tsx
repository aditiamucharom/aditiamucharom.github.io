import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";
import { projects } from "@/lib/projects-data";
import { siteConfig } from "@/lib/site-config";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 sm:py-32 border-t border-[rgb(var(--border))]"
    >
      <div className="container-page">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
          Karya
        </p>
        <h2 className="section-title">Project yang membentuk cara saya bekerja.</h2>
        <p className="section-subtitle text-lg">
          Pilihan project yang menunjukkan perpaduan strategi, visual, dan
          sistem kreatif. Dokumentasi visual lain bisa dilihat di{" "}
          <Link
            href={siteConfig.social.instagram}
            className="underline underline-offset-4 hover:text-brand"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
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
                {p.logo ? (
                  <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
                    <div className="relative h-full w-full">
                      <Image
                        src={p.logo}
                        alt={p.logoAlt ?? `${p.title} logo`}
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                        className="object-contain drop-shadow-sm"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-black text-[rgb(var(--foreground))]/10">
                      {p.title
                        .split(/[\s.]+/)
                        .filter(Boolean)
                        .map((w) => w[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 3)}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                {p.category && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {p.category}
                  </p>
                )}
                <h3 className="mt-1 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-[rgb(var(--muted-foreground))]">
                  {p.description}
                </p>

                <dl className="mt-5 grid gap-3 border-t border-[rgb(var(--border))] pt-5 text-sm">
                  <div>
                    <dt className="font-semibold text-[rgb(var(--foreground))]">
                      Peran
                    </dt>
                    <dd className="mt-1 text-[rgb(var(--muted-foreground))]">
                      {p.role}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[rgb(var(--foreground))]">
                      Fokus
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {p.scope.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand"
                        >
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[rgb(var(--foreground))]">
                      Hasil
                    </dt>
                    <dd className="mt-1 text-[rgb(var(--muted-foreground))]">
                      {p.outcome}
                    </dd>
                  </div>
                </dl>

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

                {p.href && (
                  <div className="mt-5">
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                    >
                      Kunjungi site <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Instagram className="h-4 w-4" /> Lihat karya lain di Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
