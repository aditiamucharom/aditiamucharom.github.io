export const siteConfig = {
  name: "Aditia Mucharom",
  title: "Aditia Mucharom — Portfolio",
  author: "Aditia Mucharom",
  role: "Developer & Builder",
  description:
    "Personal portfolio of Aditia Mucharom — developer, builder, and lifelong learner.",
  url: "https://aditiamucharom.github.io",
  email: "hello@example.com",
  // Paste your Formspree endpoint here to enable the contact form.
  // Sign up free at https://formspree.io and replace the value below.
  // Example: "https://formspree.io/f/xxxxxxx"
  formspreeEndpoint: "https://formspree.io/f/mwvyanrl",
  cvUrl: "/cv.pdf",
  social: {
    github: "https://github.com/aditiamucharom",
    linkedin: "https://www.linkedin.com/in/aditiamucharom",
    twitter: "https://twitter.com/aditiamucharom",
    instagram: "https://instagram.com/aditiamucharom",
  },
} as const;

export type SiteConfig = typeof siteConfig;
