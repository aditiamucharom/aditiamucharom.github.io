export const siteConfig = {
  name: "Aditia Mucharom",
  title: "Aditia Mucharom — Visual Storyteller",
  author: "Aditia Mucharom",
  role: "Visual Storyteller",
  tagline: "Creative Lead untuk brand, komunitas, dan produk digital",
  description:
    "Aditia Mucharom adalah Creative Lead dan visual storyteller yang membantu brand, komunitas, dan produk digital membangun narasi visual yang rapi, konsisten, dan mudah dipercaya.",
  url: "https://aditiamucharom.com",
  email: "zucko007tv@gmail.com",
  // Formspree endpoint — powers the contact form (no backend needed).
  formspreeEndpoint: "https://formspree.io/f/mwvyanrl",
  // Leave empty to hide the "Download CV" button in the hero section.
  cvUrl: "",
  // Path to profile photo (placed under /public). Leave empty to hide.
  photoUrl: "/aditia.jpg",
  photoAlt: "Portrait of Aditia Mucharom",
  social: {
    instagram: "https://www.instagram.com/aditiamucharom/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
