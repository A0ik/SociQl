import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AIChatbot } from "@/components/AIChatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SociQl - Développeur Web & IA | Salman Bacherki",
  description: "Développement web professionnel pour restaurants et solutions IA sur mesure. Création de sites e-commerce, vitrines et applications web. Spécialisé en React.js, Next.js et automatisation IA.",
  keywords: ["développeur web", "site restaurant", "création site internet", "IA sur mesure", "React.js", "Next.js", "automatisation", "freelance", "Ozoir-la-Ferrière", "menu digital", "commande en ligne"],
  authors: [{ name: "Salman Bacherki" }],
  openGraph: {
    title: "SociQl - Développeur Web & Devis automatisé grâce IA",
    description: "Transformez vos idées en solutions digitales professionnelles - Spécialiste sites web pour restaurants",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
