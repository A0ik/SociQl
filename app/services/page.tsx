'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PricingCard } from '@/components/ui/pricing-card';
import { ContactModal } from '@/components/ContactModal';
import { User, Building2, Rocket, Sparkles, Wrench, RefreshCw, ShoppingCart } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDirectlyToForm, setOpenDirectlyToForm] = useState(false);

  const handleOpenModal = (directToForm = false) => {
    setOpenDirectlyToForm(directToForm);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Services & Tarifs
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions adaptées à chaque projet, du site vitrine pour restaurant au e-commerce avec commande en ligne
            </p>
          </motion.div>

          {/* Pricing Cards - Offres Principales */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Standard */}
            <motion.div variants={itemVariants}>
              <PricingCard
                planName="Standard"
                description="Pour les entrepreneurs"
                price={549.99}
                originalPrice={689.99}
                billingCycle=""
                features={[
                  'Hébergement 1 an inclus',
                  'Design responsive professionnel',
                  'Menu / Carte digitale',
                  'Lien Uber Eats/Deliveroo',
                  'Support technique par email',
                ]}
                buttonText="Choisir Standard"
                icon={<User className="w-6 h-6" />}
                onButtonClick={() => handleOpenModal()}
              />
            </motion.div>

            {/* Plus (Popular) */}
            <motion.div variants={itemVariants}>
              <PricingCard
                variant="popular"
                planName="Plus"
                description="Pour les projets ambitieux"
                price={649.99}
                originalPrice={809.99}
                billingCycle=""
                features={[
                  'Hébergement 3 ans inclus',
                  'SEO Avancé (Google)',
                  'Suivi technique 1 an',
                  'Plusieurs pages incluses',
                  'Intégrations personnalisées',
                  'Optimisation des performances',
                ]}
                buttonText="Choisir Plus"
                icon={<Building2 className="w-6 h-6" />}
                onButtonClick={() => handleOpenModal()}
              />
            </motion.div>

            {/* Elite */}
            <motion.div variants={itemVariants}>
              <PricingCard
                planName="Elite"
                description="Solution complète premium"
                price={849.99}
                originalPrice={1059.99}
                billingCycle=""
                features={[
                  'Hébergement 3 ans inclus',
                  'Commandes WhatsApp intégrées',
                  'SEO Premium (multi-moteurs)',
                  'Maintenance prioritaire',
                  'Analytics avancés',
                  'Support prioritaire 24/7',
                  'Formation complète',
                  'Modifications illimitées 3 mois',
                ]}
                buttonText="Choisir Elite"
                icon={<Rocket className="w-6 h-6" />}
                onButtonClick={() => handleOpenModal()}
              />
            </motion.div>
          </motion.div>

          {/* Services Additionnels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Services Additionnels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Maintenance */}
              <motion.div variants={itemVariants}>
                <PricingCard
                  planName="Maintenance"
                  description="Support continu"
                  price={49.99}
                  originalPrice={62.99}
                  billingCycle="/mois"
                  features={[
                    'Mises à jour de sécurité',
                    'Corrections de bugs illimitées',
                    'Sauvegardes quotidiennes',
                    'Support prioritaire',
                    'Monitoring 24/7',
                  ]}
                  buttonText="S'abonner"
                  icon={<Wrench className="w-6 h-6" />}
                  onButtonClick={() => handleOpenModal()}
                />
              </motion.div>

              {/* Refonte */}
              <motion.div variants={itemVariants}>
                <PricingCard
                  planName="Refonte"
                  description="Modernisez votre site"
                  price={349.99}
                  originalPrice={439.99}
                  billingCycle=""
                  features={[
                    'Nouveau design 2026',
                    'Optimisation des performances',
                    'Migration de contenu',
                    'Formation complète',
                    'Support 3 mois',
                  ]}
                  buttonText="Demander un devis"
                  icon={<RefreshCw className="w-6 h-6" />}
                  onButtonClick={() => handleOpenModal()}
                />
              </motion.div>

              {/* E-commerce */}
              <motion.div variants={itemVariants}>
                <PricingCard
                  planName="E-commerce"
                  description="Boutique en ligne"
                  price={999.99}
                  originalPrice={1249.99}
                  billingCycle=""
                  features={[
                    'Panier avancé + Stripe',
                    'Gestion des stocks',
                    'Dashboard admin complet',
                    'SEO e-commerce optimisé',
                    'Formation + Support 3 mois',
                  ]}
                  buttonText="Commander"
                  icon={<ShoppingCart className="w-6 h-6" />}
                  onButtonClick={() => handleOpenModal()}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Custom IA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-black text-white rounded-3xl p-12 mb-16"
          >
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">Solution sur mesure</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Développement d'IA personnalisée
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Automatisation de vos processus métier avec des solutions d'intelligence artificielle sur mesure. Gestion de devis, analyse de données pour convertir le plus de clients possible.
              </p>
              <div className="space-y-4 text-left max-w-xl mx-auto mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Automatisation complète des devis pour l'immobilier et rénovation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Intégration N8N pour workflows complexes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Formation et support technique complet</p>
                </div>
              </div>
              <button
                onClick={() => handleOpenModal(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Demander un devis gratuit
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de Contact */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setOpenDirectlyToForm(false);
        }}
        openDirectlyToForm={openDirectlyToForm}
      />

      {/* Structured Data pour SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Development",
            "provider": {
              "@type": "Organization",
              "name": "SociQl"
            },
            "areaServed": "FR",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services Web",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Site Vitrine Standard"
                  },
                  "price": "550",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Site Web Plus"
                  },
                  "price": "650",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Solution Premium Elite"
                  },
                  "price": "850",
                  "priceCurrency": "EUR"
                }
              ]
            }
          })
        }}
      />
    </>
  );
}
