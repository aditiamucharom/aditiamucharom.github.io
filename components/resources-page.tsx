"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Download,
  Eye,
  Mail,
  Sparkles,
  Wand2,
} from "lucide-react";

const categories = [
  { label: "Lightroom Presets", value: "lightroom-presets" },
  { label: "LUTs", value: "luts" },
  { label: "Templates", value: "templates" },
  { label: "Assets", value: "assets" },
];

const resources = [
  {
    name: "Studio Modern",
    category: "Lightroom Preset",
    categoryGroup: "lightroom-presets",
    description: "Clean premium tone for modern studio portraits.",
    image: "/resources/studio-modern-preset.jpg",
    download: "/resources/am-studio-modern-preset-pack.zip",
  },
  {
    name: "AM 6 Cinematic LUTs",
    category: "LUT Pack",
    categoryGroup: "luts",
    description: "Six cinematic LUTs for faster video and photo color grading.",
    image: "/resources/lut-pack.jpg",
    gradient: "from-cyan-400/35 via-indigo-500/25 to-zinc-950",
    download: "/resources/am-6-cinematic-luts.zip",
  },
  {
    name: "AM Template Pack",
    category: "Template Pack",
    categoryGroup: "templates",
    description: "Ready-to-edit creative templates for faster content systems.",
    gradient: "from-violet-400/35 via-fuchsia-500/25 to-zinc-950",
    download: "/resources/am-template-pack.zip",
  },
  {
    name: "AM Creator Assets Pack",
    category: "Creative Assets",
    categoryGroup: "assets",
    description: "Useful creator assets for visual storytelling and branding.",
    gradient: "from-emerald-300/35 via-sky-500/20 to-zinc-950",
    download: "/resources/am-creator-assets-pack.zip",
  },
];

const featuredMeta = ["Mobile & Desktop", "DNG / XMP", "Free Download"];
const featuredPreset = {
  name: "Studio Modern",
  category: "Lightroom Preset",
  description:
    "Kumpulan preset Lightroom dengan tone modern, clean, dan profesional untuk hasil foto studio yang lebih maksimal.",
  image: "/resources/studio-modern-preset.jpg",
  download: "/resources/am-studio-modern-preset-pack.zip",
};

export function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].value);
  const activeCategoryLabel =
    categories.find((category) => category.value === activeCategory)?.label ??
    categories[0].label;
  const filteredResources = resources.filter(
    (resource) => resource.categoryGroup === activeCategory,
  );

  return (
    <>
      <section id="top" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-14rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
          <div className="absolute bottom-[-12rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        <div className="container-page py-20 sm:py-28 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
              <Sparkles className="h-3.5 w-3.5" />
              Resources
            </p>
            <h1 className="font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Creative resources
              <br />
              <span className="bg-gradient-to-r from-brand via-fuchsia-400 to-sky-300 bg-clip-text text-transparent">
                for creators.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[rgb(var(--muted-foreground))] sm:text-xl">
              Preset, tools, dan asset gratis untuk membantu workflow kreatif
              jadi lebih cepat, konsisten, dan estetik.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="#freebies" className="btn-primary">
                Explore Freebies <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#featured" className="btn-ghost">
                <Eye className="h-4 w-4" /> See Featured Preset
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="featured"
        className="border-t border-[rgb(var(--border))] py-20 sm:py-28"
      >
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              Featured Freebies
            </p>
            <h2 className="section-title">
              Preset utama untuk foto studio modern.
            </h2>
            <p className="section-subtitle text-lg">
              Starting point untuk portrait studio yang clean, natural, dan
              terasa premium.
            </p>
          </div>

          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgb(var(--muted))]/30 shadow-2xl shadow-brand/10">
            <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-brand/10 via-fuchsia-500/5 to-sky-400/10" />
            <div className="relative grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="min-h-[24rem] bg-gradient-to-br from-zinc-950 via-indigo-950 to-fuchsia-950 p-4 sm:p-6">
                <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
                  <Image
                    src={featuredPreset.image}
                    alt="Studio Modern Lightroom preset pack preview"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 48vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
                    {featuredPreset.name}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                    {featuredPreset.category}
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Free
                  </span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-black tracking-tight sm:text-5xl">
                  {featuredPreset.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-[rgb(var(--muted-foreground))] sm:text-lg">
                  {featuredPreset.description}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {featuredMeta.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="#showcase" className="btn-ghost">
                    <Eye className="h-4 w-4" /> Preview Preset
                  </Link>
                  <a href={featuredPreset.download} download className="btn-primary">
                    <Download className="h-4 w-4" /> Download
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        id="freebies"
        className="border-t border-[rgb(var(--border))] py-20 sm:py-28"
      >
        <div className="container-page">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Categories
              </p>
              <h2 className="section-title">Browse by resource type.</h2>
            </div>
            <p className="max-w-xl text-[rgb(var(--muted-foreground))]">
              Preset menjadi fokus awal, lalu akan berkembang ke LUT, template,
              wallpaper, dan asset visual lain.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveCategory(category.value)}
                aria-pressed={activeCategory === category.value}
                className={`group rounded-2xl border p-5 text-left transition hover:border-brand/50 hover:bg-[rgb(var(--muted))]/45 hover:shadow-xl hover:shadow-brand/10 ${
                  activeCategory === category.value
                    ? "border-brand/60 bg-brand/10 shadow-xl shadow-brand/10"
                    : "border-white/10 bg-[rgb(var(--muted))]/25"
                }`}
              >
                <div
                  className={`mb-8 inline-flex h-11 w-11 items-center justify-center rounded-full transition group-hover:bg-brand group-hover:text-white ${
                    activeCategory === category.value
                      ? "bg-brand text-white"
                      : "bg-brand/10 text-brand"
                  }`}
                >
                  <Wand2 className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold">
                  {category.label}
                </h3>
              </button>
            ))}
          </div>

          <div className="mt-20">
            <div className="mb-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Resource Grid
              </p>
              <h2 className="section-title">{activeCategoryLabel}</h2>
            </div>

            {filteredResources.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredResources.map((resource) => (
                <article
                  key={resource.name}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[rgb(var(--muted))]/25 transition hover:border-brand/50 hover:bg-[rgb(var(--muted))]/45 hover:shadow-xl hover:shadow-brand/10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/25 to-zinc-950">
                    {"image" in resource && resource.image ? (
                      <Image
                        src={resource.image}
                        alt={`${resource.name} preview`}
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${resource.gradient}`}
                      />
                    )}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.22),transparent_28%)]" />
                    {"image" in resource && resource.image && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                    )}
                    <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
                      Free
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                          {resource.category}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-bold">
                          {resource.name}
                        </h3>
                      </div>
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                        Free
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-[rgb(var(--muted-foreground))]">
                      {resource.description}
                    </p>
                    {"download" in resource && resource.download ? (
                      <a
                        href={resource.download}
                        download
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[rgb(var(--border))] px-4 py-2 text-sm font-semibold transition hover:bg-[rgb(var(--muted))] focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-[rgb(var(--background))]"
                      >
                        <Download className="h-4 w-4" /> Download
                      </a>
                    ) : (
                      <button type="button" className="mt-6 btn-ghost px-4 py-2">
                        View Details
                      </button>
                    )}
                  </div>
                </article>
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-white/10 bg-[rgb(var(--muted))]/25 p-8 text-center">
                <p className="font-display text-2xl font-bold">
                  {activeCategoryLabel} segera hadir.
                </p>
                <p className="mx-auto mt-3 max-w-xl text-[rgb(var(--muted-foreground))]">
                  Kategori ini sudah disiapkan, tapi item freebie-nya belum
                  dipublikasikan.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        id="showcase"
        className="border-t border-[rgb(var(--border))] py-20 sm:py-28"
      >
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Before / After
              </p>
              <h2 className="section-title">A cinematic shift in one step.</h2>
              <p className="text-lg text-[rgb(var(--muted-foreground))]">
                See how a simple preset can transform ordinary photos into a
                more cinematic and consistent visual style.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[rgb(var(--muted))]/25">
                <div className="aspect-[4/5] bg-gradient-to-br from-zinc-700 via-zinc-900 to-black" />
                <div className="border-t border-white/10 p-4 text-sm font-semibold">
                  Before
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.75rem] border border-brand/30 bg-[rgb(var(--muted))]/25 shadow-xl shadow-brand/10">
                <div className="aspect-[4/5] bg-gradient-to-br from-indigo-500/45 via-fuchsia-500/25 to-black" />
                <div className="border-t border-white/10 p-4 text-sm font-semibold">
                  After
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))] py-20 sm:py-28">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgb(var(--muted))]/30 p-6 shadow-2xl shadow-brand/10 sm:p-10 lg:p-12">
            <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-fuchsia-500/10" />
            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                  Updates
                </p>
                <h2 className="section-title">Get future resources first.</h2>
                <p className="text-[rgb(var(--muted-foreground))]">
                  Masukkan email kamu untuk mendapatkan update preset, template,
                  dan creative resources gratis berikutnya.
                </p>
              </div>
              <form className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="resource-email" className="sr-only">
                  Email
                </label>
                <input
                  id="resource-email"
                  name="email"
                  type="email"
                  placeholder="email@domain.com"
                  className="min-h-12 flex-1 rounded-full border border-white/10 bg-black/20 px-5 text-sm outline-none transition placeholder:text-[rgb(var(--muted-foreground))] focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
                <button type="button" className="btn-primary min-h-12">
                  <Mail className="h-4 w-4" /> Get Access
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))] py-20 sm:py-28">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-black tracking-tight sm:text-5xl">
            Need something more custom?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[rgb(var(--muted-foreground))]">
            Available for creative direction, branding, visual storytelling, and
            content systems.
          </p>
          <div className="mt-8">
            <Link href="/#contact" className="btn-primary">
              Let&apos;s Work Together <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
