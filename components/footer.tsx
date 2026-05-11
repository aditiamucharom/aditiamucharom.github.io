import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const socials = [
  { href: siteConfig.social.github, label: "GitHub", icon: Github },
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: siteConfig.social.twitter, label: "Twitter", icon: Twitter },
  { href: siteConfig.social.instagram, label: "Instagram", icon: Instagram },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgb(var(--border))] py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-[rgb(var(--muted-foreground))]">
          &copy; {year} {siteConfig.name}. Built with Next.js &amp; Tailwind.
        </p>

        <div className="flex items-center gap-1">
          {socials.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-[rgb(var(--muted-foreground))] transition hover:border-[rgb(var(--border))] hover:text-[rgb(var(--foreground))]"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
