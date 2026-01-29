import { AnimatedHero } from '@/components/ui/animated-hero';
import { Features } from '@/components/Features';
import { Approche } from '@/components/Approche';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { TestimonialsTimeline } from '@/components/TestimonialsTimeline';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { Zap, Shield, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'SociQl - Solutions Digitales Sur Mesure | Création de Sites Web & Applications',
  description:
    "Agence digitale spécialisée en création de sites web, applications sur mesure et solutions d'IA. De la conception au déploiement, nous transformons vos idées en produits digitaux performants.",
  keywords:
    'création site web, développement web, application sur mesure, agence digitale, IA personnalisée, automatisation, site vitrine, e-commerce, SEO, design responsive',
  authors: [{ name: 'SociQl' }],
  creator: 'SociQl',
  publisher: 'SociQl',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://sociql.fr',
    title: 'SociQl - Solutions Digitales Sur Mesure',
    description:
      "Création de sites web professionnels, applications sur mesure et solutions d'IA. Transformez votre présence digitale avec SociQl.",
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
    description:
      "Création de sites web professionnels, applications sur mesure et solutions d'IA.",
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-orange-50/20">
        <ShootingStars />
        <AnimatedHero />
      </section>

      {/* Section Approche */}
      <Approche />

      {/* Features */}
      <Features />

      {/* Timeline Processus */}
      <ProcessTimeline />

      {/* Timeline Avis Clients */}
      <TestimonialsTimeline />

      {/* Section Avantages ORANGE CLEAN */}
      <section className="relative py-20 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Pourquoi choisir SociQl ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions digitales qui font la différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Rapide & Efficace',
                description: 'Développement agile pour des résultats concrets rapidement',
              },
              {
                icon: Shield,
                title: 'Sécurisé & Fiable',
                description: 'Code propre et sécurisé, maintenance assurée',
              },
              {
                icon: Sparkles,
                title: 'Innovation & IA',
                description: "Intégration d'IA pour automatiser votre business",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <BackgroundBeams className="opacity-10" />
      </section>

      {/* CTA Final WhatsApp */}
      <WhatsAppCTA />

      {/* Structured Data pour SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SociQl',
            url: 'https://sociql.fr',
            logo: 'https://sociql.fr/logo.png',
            description:
              "Agence digitale spécialisée en création de sites web, applications sur mesure et solutions d'IA",
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'FR',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+33749412756',
              contactType: 'customer service',
              email: 'contact@sociql.fr',
              availableLanguage: ['French', 'English'],
            },
            sameAs: ['https://www.linkedin.com/company/sociql', 'https://twitter.com/sociql'],
            founder: {
              '@type': 'Person',
              name: 'SociQl Team',
            },
            numberOfEmployees: {
              '@type': 'QuantitativeValue',
              value: '5-10',
            },
            areaServed: {
              '@type': 'Country',
              name: 'France',
            },
            serviceType: [
              'Web Development',
              'Mobile App Development',
              'AI Solutions',
              'E-commerce Development',
              'SEO Optimization',
            ],
          }),
        }}
      />
    </>
  );
}
