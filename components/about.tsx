import Image from "next/image";
import { Camera, Share2, PenTool, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const highlights = [
  {
    icon: Camera,
    title: "Visual Storytelling",
    description:
      "Mengubah ide menjadi narasi visual yang mudah dipahami, dirasakan, dan diingat.",
  },
  {
    icon: Share2,
    title: "Content Strategy",
    description:
      "Menyusun arah konten, pilar pesan, dan format yang relevan untuk audiens.",
  },
  {
    icon: PenTool,
    title: "Creative Direction",
    description:
      "Menjaga visual, tone, dan eksekusi kreatif tetap selaras di setiap touchpoint.",
  },
  {
    icon: Sparkles,
    title: "Brand Systems",
    description:
      "Membangun struktur identitas yang rapi agar brand mudah dipakai ulang dan berkembang.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-page">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
          Tentang
        </p>
        <h2 className="section-title">
          Creative direction untuk brand yang ingin tampil lebih serius.
        </h2>

        {/* Photo + bio side-by-side on md+, stacked on mobile */}
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-12 mb-14">
          {siteConfig.photoUrl && (
            <div className="relative mx-auto md:mx-0">
              <div
                aria-hidden
                className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-br from-brand/30 via-fuchsia-400/20 to-amber-300/20 blur-xl"
              />
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-[rgb(var(--background))] shadow-xl ring-2 ring-brand/40 sm:h-56 sm:w-56">
                <Image
                  src={siteConfig.photoUrl}
                  alt={siteConfig.photoAlt}
                  width={853}
                  height={1280}
                  sizes="(max-width: 640px) 11rem, 14rem"
                  className="h-full w-full object-cover object-[center_20%]"
                />
              </div>
            </div>
          )}

          <div>
            <p className="text-lg sm:text-xl leading-relaxed">
              <strong className="text-[rgb(var(--foreground))]">
                Saya membantu brand menemukan cara tampil yang bukan cuma
                menarik, tapi juga jelas, konsisten, dan mudah dipercaya.
              </strong>{" "}
              Fokus saya ada di visual storytelling, strategi konten, dan
              sistem kreatif yang membuat ide besar bisa dieksekusi dengan
              arah yang terukur.
            </p>
            <p className="mt-4 text-[rgb(var(--muted-foreground))]">
              Dari identitas visual, kampanye media sosial, sampai narasi
              komunitas, saya menggabungkan rasa estetika dengan proses yang
              sistematis agar brand punya wajah, suara, dan ritme komunikasi
              yang lebih solid.
            </p>
          </div>
        </div>

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
