export type Project = {
  title: string;
  category?: string;
  description: string;
  role: string;
  scope: string[];
  outcome: string;
  tags: string[];
  image?: string;
  /** Path to a square/transparent brand logo shown on the project card. */
  logo?: string;
  /** Optional alt text override for the logo. Defaults to `${title} logo`. */
  logoAlt?: string;
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Pesantara.id",
    category: "Koperasi Digital & Marketplace",
    description:
      "Platform koperasi digital yang menghubungkan komunitas lokal lewat pengalaman marketplace modern.",
    role: "Creative direction & brand storytelling",
    scope: ["Identitas visual", "Narasi marketplace", "Konten komunitas"],
    outcome:
      "Brand terasa lebih mudah dipahami sebagai ekosistem koperasi digital yang modern dan dekat dengan komunitas.",
    tags: ["Koperasi Digital", "Marketplace", "Brand Identity"],
    logo: "/pesantara-logo.png",
    href: "https://pesantara.id",
  },
  {
    title: "Ahwarumi Creative",
    category: "Digital Marketing Agency",
    description:
      "Agensi digital marketing untuk brand yang membutuhkan strategi konten dan eksekusi kreatif end-to-end.",
    role: "Founder & creative lead",
    scope: ["Content strategy", "Creative direction", "Campaign planning"],
    outcome:
      "Membentuk positioning agensi yang lebih jelas sebagai partner kreatif untuk pertumbuhan brand.",
    tags: ["Digital Marketing", "Content Strategy", "Creative Direction"],
    logo: "/ahwarumi-logo.png",
  },
  {
    title: "Zucko Studios",
    category: "Studio Kreatif",
    description:
      "Studio kreatif yang mengolah visual storytelling, desain minimalis, dan identitas brand yang bermakna.",
    role: "Visual direction & identity system",
    scope: ["Visual storytelling", "Minimal design", "Brand system"],
    outcome:
      "Membangun fondasi visual yang ringkas, fleksibel, dan mudah dikembangkan untuk berbagai kebutuhan kreatif.",
    tags: ["Creative Studio", "Visual Storytelling", "Minimal Design"],
    logo: "/zucko-logo.png",
  },
];
