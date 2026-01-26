import { AnimatedHero } from '@/components/ui/animated-hero';
import { Features } from '@/components/Features';
import { Approche } from '@/components/Approche';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { ShootingStars } from '@/components/ui/shooting-stars';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'SociQl - Solutions Digitales Sur Mesure | Création de Sites Web & Applications',
  description: 'Agence digitale spécialisée en création de sites web, applications sur mesure et solutions d\'IA. De la conception au déploiement, nous transformons vos idées en produits digitaux performants.',
  keywords: 'création site web, développement web, application sur mesure, agence digitale, IA personnalisée, automatisation, site vitrine, e-commerce, SEO, design responsive',
  authors: [{ name: 'SociQl' }],
  creator: 'SociQl',
  publisher: 'SociQl',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://sociql.fr',
    title: 'SociQl - Solutions Digitales Sur Mesure',
    description: 'Création de sites web professionnels, applications sur mesure et solutions d\'IA. Transformez votre présence digitale avec SociQl.',
    siteName: 'SociQl',
    images: [
      {
        url: 'https://sociql.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SociQl - Solutions Digitales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SociQl - Solutions Digitales Sur Mesure',
    description: 'Création de sites web professionnels, applications sur mesure et solutions d\'IA.',
    images: ['https://sociql.fr/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-google-verification',
  },
};

export default function Home() {
  return (
    <>
      {/* Hero avec étoiles filantes */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <ShootingStars />
        <AnimatedHero />
      </section>

      {/* Section Approche */}
      <Approche />

      {/* Features */}
      <Features />
      
      {/* Section Avantages avec BackgroundBeams */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-muted/30 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Pourquoi choisir SociQl ?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Des solutions digitales qui font la différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Zap,
                title: "Rapide & Efficace",
                description: "Développement agile pour des résultats concrets rapidement"
              },
              {
                icon: Shield,
                title: "Sécurisé & Fiable",
                description: "Code propre et sécurisé, maintenance assurée"
              },
              {
                icon: Sparkles,
                title: "Innovation & IA",
                description: "Intégration d'IA pour automatiser votre business"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-6 sm:p-8 bg-background rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black/5 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <BackgroundBeams className="opacity-20" />
      </section>

      {/* CTA Section avec fond animé */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-black text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Prêt à transformer vos idées ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Discutons de votre projet et créons ensemble une solution digitale qui dépasse vos attentes
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Link href="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 group border-2 border-white">
                Découvrir nos services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 border-2 border-white/20">
                Voir nos réalisations
              </Button>
            </Link>
          </div>
        </div>
        <BackgroundBeams className="opacity-10" />
      </section>

      {/* Structured Data pour SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SociQl",
            "url": "https://sociql.fr",
            "logo": "https://sociql.fr/logo.png",
            "description": "Agence digitale spécialisée en création de sites web, applications sur mesure et solutions d'IA",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "FR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33749412756",
              "contactType": "customer service",
              "email": "contact@sociql.fr",
              "availableLanguage": ["French", "English"]
            },
            "sameAs": [
              "https://www.linkedin.com/company/sociql",
              "https://twitter.com/sociql"
            ],
            "founder": {
              "@type": "Person",
              "name": "SociQl Team"
            },
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "5-10"
            },
            "areaServed": {
              "@type": "Country",
              "name": "France"
            },
            "serviceType": [
              "Web Development",
              "Mobile App Development",
              "AI Solutions",
              "E-commerce Development",
              "SEO Optimization"
            ]
          })
        }}
      />
    </>
  );
}
