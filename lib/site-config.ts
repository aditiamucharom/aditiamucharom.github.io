export const siteConfig = {
  name: "Aditia Mucharom",
  title: "Aditia Mucharom — Visual Storyteller",
  author: "Aditia Mucharom",
  role: "Visual Storyteller",
  description:
    "Creative professional focused on digital content, social media management, and minimal design.",
  url: "https://aditiamucharom.github.io",
  email: "zucko007tv@gmail.com",
  // Formspree endpoint — powers the contact form (no backend needed).
  formspreeEndpoint: "https://formspree.io/f/mwvyanrl",
  // Leave empty to hide the "Download CV" button in the hero section.
  cvUrl: "",
  social: {
    instagram: "https://www.instagram.com/aditiamucharom/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
