import type { Metadata } from "next";
import { Baloo_2, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { RouteScrollReset } from "@/components/route-scroll-reset";
import { ScrollProgress } from "@/components/scroll-progress";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-body", subsets: ["latin"] });
const baloo = Baloo_2({ variable: "--font-heading", subsets: ["latin"], weight: ["500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Vikram Sarabhai School | Bardoli",
  description: "Primary-focused, child-friendly learning in Bardoli, Surat with structured academics, values, and future skills.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" className={`${jakarta.variable} ${baloo.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--bg)] text-[var(--fg)]">
        <RouteScrollReset />
        <ScrollProgress />
        <div className="min-h-screen">
          <Navbar />
          <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}


