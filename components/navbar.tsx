"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/#about", label: "Tentang" },
  { href: "/#projects", label: "Karya" },
  { href: "/resources", label: "Resources" },
  { href: "/#contact", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors ${
        scrolled
          ? "border-b border-[rgb(var(--border))] bg-[rgb(var(--background))]/80 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/#top"
          className="group inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
          aria-label={`${siteConfig.name} — home`}
        >
          {siteConfig.photoUrl && (
            <span className="relative inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-brand/40 ring-offset-2 ring-offset-[rgb(var(--background))] transition group-hover:ring-brand">
              <Image
                src={siteConfig.photoUrl}
                alt=""
                width={853}
                height={1280}
                sizes="36px"
                className="h-full w-full object-cover object-[center_20%]"
              />
            </span>
          )}
          <span>
            {siteConfig.name.split(" ")[0]}
            <span className="text-brand">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(var(--border))] transition hover:bg-[rgb(var(--muted))]"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[rgb(var(--border))] bg-[rgb(var(--background))]">
          <nav className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-[rgb(var(--muted))] transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
