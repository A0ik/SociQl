"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  ShoppingCart, 
  RefreshCw, 
  Settings, 
  Brain,
  Sparkles,
  CheckCircle2,
  MessageCircle
} from "lucide-react";

const services = [
  {
    id: "site-web",
    icon: Globe,
    title: "Site Web Vitrine",
    description: "Un site professionnel qui convertit vos visiteurs en clients",
    features: [
      "Design sur mesure responsive",
      "Optimisation SEO incluse",
      "Hébergement et nom de domaine",
      "Formulaire de contact intelligent",
      "Intégration réseaux sociaux",
      "Formation complète",
    ],
    gradient: "from-orange-500 to-orange-600",
    delay: 0,
    whatsappMessage: "Bonjour ! Je suis intéressé par un Site Web Vitrine. Pouvez-vous me donner plus d'informations ?",
  },
  {
    id: "e-commerce",
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Boutique en ligne complète pour vendre vos produits 24/7",
    features: [
      "Catalogue produits illimité",
      "Paiement sécurisé Stripe",
      "Gestion des stocks",
      "Suivi des commandes",
      "Dashboard administrateur",
      "Livraison et facturation",
    ],
    gradient: "from-orange-500 to-red-500",
    delay: 0.1,
    whatsappMessage: "Bonjour ! Je suis intéressé par une solution E-commerce. Pouvez-vous me donner plus d'informations ?",
  },
  {
    id: "refonte",
    icon: RefreshCw,
    title: "Refonte de Site",
    description: "Modernisez votre site existant avec les dernières technologies",
    features: [
      "Analyse de l'existant",
      "Design moderne et épuré",
      "Amélioration des performances",
      "Migration de contenu",
      "Optimisation mobile",
      "Formation à la nouvelle interface",
    ],
    gradient: "from-orange-600 to-red-600",
    delay: 0.2,
    whatsappMessage: "Bonjour ! Je suis intéressé par une Refonte de Site. Pouvez-vous me donner plus d'informations ?",
  },
  {
    id: "maintenance",
    icon: Settings,
    title: "Maintenance & Support",
    description: "Un accompagnement continu pour votre site web",
    features: [
      "Mises à jour de sécurité",
      "Sauvegarde quotidienne",
      "Support technique prioritaire",
      "Modifications de contenu",
      "Monitoring 24/7",
      "Rapport mensuel",
    ],
    gradient: "from-orange-500 to-amber-600",
    delay: 0.3,
    whatsappMessage: "Bonjour ! Je suis intéressé par vos services de Maintenance & Support. Pouvez-vous me donner plus d'informations ?",
  },
  {
    id: "ia",
    icon: Brain,
    title: "Solutions IA & Automatisation",
    description: "Automatisez vos processus avec l'intelligence artificielle",
    features: [
      "Chatbots intelligents",
      "Automatisation de devis",
      "Réponses emails automatiques",
      "Workflows personnalisés",
      "Intégrations N8N",
      "Gain de temps jusqu'à 95%",
    ],
    gradient: "from-orange-600 to-orange-700",
    delay: 0.4,
    whatsappMessage: "Bonjour ! Je suis intéressé par vos Solutions IA & Automatisation. Pouvez-vous me donner plus d'informations ?",
  },
];

export default function ServicesPage() {
  const handleServiceClick = (whatsappMessage: string) => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/33749412756?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-sm rounded-full mb-6 border border-orange-500/20"
          >
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-600">Nos Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Des solutions digitales
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
              qui propulsent votre business
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Du site vitrine à l'automatisation IA, nous créons des solutions sur mesure qui transforment votre présence en ligne.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-orange-200">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: service.delay + idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleServiceClick(service.whatsappMessage)}
                    className={`relative w-full py-4 px-6 rounded-xl font-semibold text-white overflow-hidden group/btn transition-all hover:scale-105 shadow-md hover:shadow-xl`}
                  >
                    <span className={`absolute inset-0 bg-gradient-to-r ${service.gradient}`} />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Demander un devis
                      <MessageCircle className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 rounded-3xl p-12 text-center overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Contactez-nous sur WhatsApp pour discuter de vos objectifs.
              </p>
              <button
                onClick={() => {
                  const message = encodeURIComponent("Bonjour ! Je souhaite discuter de mon projet. Pouvez-vous me donner plus d'informations ?");
                  window.open(`https://wa.me/33749412756?text=${message}`, '_blank');
                }}
                className="group px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2"
              >
                Discutons de votre projet
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
