import type { NavItem, SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Vikram Sarabhai School",
  shortName: "Vikram Sarabhai School",
  location: "Bardoli, Surat, Gujarat",
  email: "admissions@vikramsarabhaischool.in",
  phones: ["+91 97261 00148", "+91 97262 00148"],
  address: "Vikram Sarabhai School, Astan area, Bardoli Taluka, Surat District, Gujarat - 394601",
  brand: {
    palette: {
      bg: "#FFF5E8",
      ink: "#171717",
      primary: "#0F6877",
      accent: "#F36B2A",
      support: "#42C7B8",
      highlight: "#FFD45A",
    },
    motif: "default",
    buttonStyle: "pill",
    sectionSpacing: "airy",
  },
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Activities", href: "/activities" },
  { label: "AI Learning", href: "/ai-learning" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  quick: navigation,
  admissions: [
    { label: "Admissions Process", href: "/admissions#process" },
    { label: "Documents Required", href: "/admissions#documents" },
    { label: "FAQ", href: "/admissions#faq" },
  ],
};

export const socialLinks = [
  { platform: "Facebook", url: "https://facebook.com/", ariaLabel: "Follow us on Facebook" },
  { platform: "Instagram", url: "https://instagram.com/", ariaLabel: "Follow us on Instagram" },
  { platform: "YouTube", url: "https://youtube.com/", ariaLabel: "Follow us on YouTube" },
] as const;

