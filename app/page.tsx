import { AnimatedHero } from '@/components/ui/animated-hero';
import { Features } from '@/components/Features';
import { Approche } from '@/components/Approche';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { TestimonialsTimeline } from '@/components/TestimonialsTimeline';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { ShootingStars } from '@/components/ui/shooting-stars';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Sparkles, MessageCircle } from 'lucide-react';

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

      {/* CTA Final ORANGE */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à transformer votre idée en réalité ?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Contactez-nous sur WhatsApp pour discuter de votre projet et obtenir un devis gratuit.
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Bonjour ! Je souhaite discuter de mon projet. Pouvez-vous me donner plus d'informations ?");
              window.open(`https://wa.me/33749412756?text=${message}`, '_blank');
            }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
          >
            <MessageCircle className="w-6 h-6" />
            Discutons sur WhatsApp
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

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
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#FF6B35' }}
            >
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
                className="group relative p-6 sm:p-8 bg-background rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300"
                  style={{ backgroundColor: 'rgba(255,160,122,0.18)' }}
                >
                  <item.icon
                    className="w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300"
                    style={{ color: '#FFA07A' }}
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {item.description}
                </p>

                {/* Accent bordure au hover, safe (pas dépendant de Tailwind) */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: 'inset 0 0 0 2px #FFA07A' }}
                />
              </div>
            ))}
          </div>
        </div>
        <BackgroundBeams className="opacity-20" />
      </section>

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
