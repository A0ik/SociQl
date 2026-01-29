'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const BRAND_TITLE = '#FF6B35';
const BRAND_ACCENT = '#FFA07A';

const projects = [
  {
    title: 'OCrispy',
    description:
      'Site e-commerce pour un restaurant de poulet frit. Interface moderne, système de commande relier à Uber Eat / Deliveroo et intégration des paiements sécurisés.',
    tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Stripe'],
    link: 'https://ocrispy.vercel.app',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    category: 'Restaurant E-commerce',
  },
  {
    title: 'Cagraille',
    description:
      "Site web pour un restaurant avec présentation des menus, galerie photos et système de contact. Design responsive et optimisé pour l'expérience utilisateur.",
    tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
    link: 'https://cagraille.vercel.app',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    category: 'Restaurant Vitrine',
  },
  {
    title: 'Dwich62',
    description:
      'Site vitrine professionnel pour une sandwicherie locale avec menu digital interactif, formulaire de contact et intégrations de livraison (Uber Eats, Deliveroo).',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    link: 'https://dwich62.fr',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&q=80',
    category: 'Restaurant Vitrine',
  },
  {
    title: 'IA Devis Automatisés',
    description:
      "Solution d'intelligence artificielle révolutionnaire pour l'automatisation complète des devis dans le secteur immobilier et rénovation. Analyse des demandes clients, calcul intelligent des coûts et génération de devis professionnels en quelques secondes.",
    tech: ['Python', 'N8N', 'OpenAI API', 'JSON', 'Automation'],
    link: '#contact',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    category: 'IA & Automation',
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: BRAND_TITLE }}
          >
            Mes Réalisations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sites web professionnels pour restaurants et solutions d'intelligence artificielle qui
            illustrent mon expertise en développement
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge category */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 text-white text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: BRAND_TITLE,
                      boxShadow: '0 10px 25px rgba(255,107,53,0.25)',
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* léger overlay premium */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255,160,122,0.00) 0%, rgba(255,160,122,0.18) 100%)',
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full border"
                      style={{
                        backgroundColor: 'rgba(255,160,122,0.18)',
                        borderColor: 'rgba(255,160,122,0.35)',
                        color: '#111827',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium transition-all"
                  style={{ color: BRAND_TITLE }}
                >
                  <span className="group-hover:underline underline-offset-4">
                    {project.link === '#contact' ? 'Me contacter' : 'Voir le projet'}
                  </span>
                  <ExternalLink
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    style={{ color: BRAND_ACCENT }}
                  />
                </a>
              </div>

              {/* bordure accent au hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: `inset 0 0 0 2px ${BRAND_ACCENT}` }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 p-12 rounded-2xl border"
          style={{
            background: 'rgba(255,160,122,0.12)',
            borderColor: 'rgba(255,160,122,0.35)',
          }}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: BRAND_TITLE }}>
            Vous avez un projet en tête ?
          </h2>
          <p className="text-gray-700 mb-6">
            Discutons de votre vision et créons ensemble quelque chose d'exceptionnel
          </p>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-opacity hover:opacity-90 text-white"
            style={{ backgroundColor: BRAND_TITLE }}
          >
            Découvrir mes services
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
