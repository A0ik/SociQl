'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Shield, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Sites pour restaurants',
    description:
      'Sites web et applications spécialisés pour le secteur de la restauration. Menu digital, commande en ligne, intégrations Uber Eats/Deliveroo et optimisation SEO local.',
  },
  {
    icon: Zap,
    title: 'Solutions IA automatisées',
    description:
      'Automatisation de vos processus métier avec des IA intelligentes. Gestion de devis, analyse de données et plus encore.',
  },
  {
    icon: Shield,
    title: 'Fiabilité & sécurité',
    description:
      'Code propre, sécurisé et maintenable. Déploiement professionnel avec suivi et support technique continu.',
  },
  {
    icon: Smartphone,
    title: '100% Responsive',
    description:
      'Design adaptatif pour tous les écrans. Une expérience utilisateur optimale sur mobile, tablette et desktop.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: '#FF6B35' }}
          >
            Pourquoi choisir SociQl ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une expertise technique complète au service de votre réussite digitale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient hover effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,160,122,0.18), transparent)',
                }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ backgroundColor: '#FFA07A' }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-2 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
              />

              {/* Border accent safe (sans dépendre de Tailwind arbitrary hover colors) */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: 'inset 0 0 0 2px #FFA07A' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
