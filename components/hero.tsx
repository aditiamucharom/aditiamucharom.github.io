import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl dark:bg-brand/15" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] translate-x-1/3 translate-y-1/3 rounded-full bg-fuchsia-400/20 blur-3xl dark:bg-fuchsia-500/10" />
      </div>

      <div className="container-page flex min-h-[calc(100vh-4rem)] flex-col justify-center py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* LEFT: text */}
          <div className="order-2 lg:order-1">
            <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--muted))]/50 px-4 py-1.5 text-xs font-medium text-[rgb(var(--muted-foreground))] animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for new projects
            </p>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] animate-fade-up [animation-delay:80ms]">
              Hi, I&apos;m {siteConfig.name.split(" ")[0]}.
              <br />
              <span className="bg-gradient-to-r from-brand via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
                Bridging aesthetics
              </span>{" "}
              with systems.
            </h1>

            <p className="mt-6 max-w-xl text-lg sm:text-xl text-[rgb(var(--muted-foreground))] animate-fade-up [animation-delay:160ms]">
              {siteConfig.tagline}. Crafting visual stories that connect
              people, brands, and communities — from strategy to screen.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
              <Link href="#projects" className="btn-primary">
                View My Work <ArrowRight className="h-4 w-4" />
              </Link>
              {siteConfig.cvUrl && (
                <a href={siteConfig.cvUrl} download className="btn-ghost">
                  <Download className="h-4 w-4" /> Download CV
                </a>
              )}
            </div>
          </div>

          {/* RIGHT: photo */}
          {siteConfig.photoUrl && (
            <div className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none animate-fade-up [animation-delay:320ms]">
              {/* Decorative backdrop */}
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/30 via-fuchsia-400/20 to-amber-300/30 blur-2xl dark:from-brand/30 dark:via-fuchsia-500/15 dark:to-amber-500/15"
              />
              <div
                aria-hidden
                className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-[2rem] border-2 border-brand/40"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-[rgb(var(--border))] bg-[rgb(var(--muted))] shadow-2xl">
                <Image
                  src={siteConfig.photoUrl}
                  alt={siteConfig.photoAlt}
                  width={853}
                  height={1280}
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="aspect-[4/5] h-auto w-full object-cover"
                />
                {/* Subtle bottom gradient for any text overlays later */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
