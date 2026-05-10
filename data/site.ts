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
      bg: "#061224",
      ink: "#E9F3FF",
      primary: "#1B8CFF",
      accent: "#FF8A34",
      support: "#52D6C5",
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

