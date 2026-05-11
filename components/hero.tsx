import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl dark:bg-brand/15" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] translate-x-1/3 translate-y-1/3 rounded-full bg-fuchsia-400/20 blur-3xl dark:bg-fuchsia-500/10" />
      </div>

      <div className="container-page flex min-h-[calc(100vh-4rem)] flex-col justify-center py-24">
        <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--muted))]/50 px-4 py-1.5 text-xs font-medium text-[rgb(var(--muted-foreground))] animate-fade-up">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Available for new projects
        </p>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] animate-fade-up [animation-delay:80ms]">
          Hi, I&apos;m {siteConfig.name.split(" ")[0]}.
          <br />
          <span className="bg-gradient-to-r from-brand via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
            I build things
          </span>{" "}
          for the web.
        </h1>

        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-[rgb(var(--muted-foreground))] animate-fade-up [animation-delay:160ms]">
          {siteConfig.role}. I craft fast, accessible, and beautifully detailed
          digital experiences — from idea to production.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
          <Link href="#projects" className="btn-primary">
            View My Work <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={siteConfig.cvUrl}
            download
            className="btn-ghost"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
