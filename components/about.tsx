import { Camera, Share2, PenTool, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Camera,
    title: "Visual Storytelling",
    description:
      "Merangkai narasi lewat foto, video, dan desain — membuat cerita yang mudah dirasakan.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Strategi konten dan manajemen media sosial untuk menumbuhkan audiens dan kehadiran brand.",
  },
  {
    icon: PenTool,
    title: "Digital Content",
    description:
      "Dari konsep sampai publikasi — konten digital yang relevan untuk audiens modern.",
  },
  {
    icon: Sparkles,
    title: "Minimal Craft",
    description:
      "Desain minimalis yang berfokus pada kejelasan — membiarkan cerita berbicara lebih dulu.",
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
          Saya seorang profesional kreatif yang berfokus pada konten digital,
          manajemen media sosial, dan desain minimalis. Saya percaya cerita yang
          baik lahir dari detail yang diperhatikan — dan itulah yang saya bawa
          ke setiap project.
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
