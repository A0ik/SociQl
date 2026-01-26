import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Tarifs - SociQl | Solutions Digitales Sur Mesure',
  description: 'Découvrez nos services de création de sites web, applications et solutions d\'IA. Du site vitrine au e-commerce, des tarifs transparents pour tous les budgets. Devis gratuit sous 24h.',
  keywords: 'tarifs création site web, prix développement web, devis site internet, agence web tarifs, création site vitrine, e-commerce prix, maintenance site web, refonte site web',
  openGraph: {
    title: 'Services & Tarifs - SociQl',
    description: 'Solutions digitales sur mesure : site vitrine dès 550€, e-commerce, applications mobiles et IA personnalisée. Devis gratuit.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://sociql.fr/services',
    siteName: 'SociQl',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Tarifs - SociQl',
    description: 'Solutions digitales sur mesure : site vitrine dès 550€, e-commerce, applications et IA.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
