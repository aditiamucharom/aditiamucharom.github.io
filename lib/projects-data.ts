export type Project = {
  title: string;
  category?: string;
  description: string;
  tags: string[];
  image?: string;
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Pesantara.id",
    category: "Koperasi Digital & Marketplace",
    description:
      "Platform koperasi digital yang menghubungkan komunitas lokal lewat pengalaman marketplace modern — dari branding, konten, hingga identitas visual.",
    tags: ["Koperasi Digital", "Marketplace", "Brand Identity"],
    href: "https://pesantara.id",
  },
  {
    title: "Ahwarumi Creative",
    category: "Digital Marketing Agency",
    description:
      "Agensi digital marketing yang menghadirkan strategi konten, creative direction, dan kampanye end-to-end untuk brand yang ingin tumbuh.",
    tags: ["Digital Marketing", "Content Strategy", "Creative Direction"],
  },
  {
    title: "Zucko Studios",
    category: "Studio Kreatif",
    description:
      "Studio kreatif yang bergerak di ranah visual storytelling, desain minimalis, dan pembangunan identitas brand yang bermakna.",
    tags: ["Creative Studio", "Visual Storytelling", "Minimal Design"],
  },
];
