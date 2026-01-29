'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  GraduationCap,
  Target,
  Lightbulb,
  ExternalLink,
  Utensils,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BRAND_TITLE = '#FF6B35';
const BRAND_ACCENT = '#FFA07A';

const skills = [
  { name: 'React.js', level: 80 },
  { name: 'Next.js', level: 90 },
  { name: 'Python', level: 90 },
  { name: 'JavaScript / TypeScript', level: 93 },
  { name: 'HTML / CSS', level: 90 },
  { name: 'N8N (Automation)', level: 95 },
  { name: 'JSON / API REST', level: 85 },
  { name: 'IA & Machine Learning', level: 70 },
];

const achievements = [
  {
    icon: Utensils,
    title: 'OCrispy - Site E-commerce Restaurant',
    description:
      "Création complète d'un site de commande en ligne pour un restaurant de poulet frit. Lien qui redirige vers Uber Eat. Ce projet m'a permis de maîtriser React.js, Next.js et les API de paiement dans le contexte de la restauration.",
    tech: ['React.js', 'Next.js', 'Stripe API', 'Tailwind CSS'],
    link: 'https://ocrispy.com',
    image:
      'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    logo: '🍗',
  },
  {
    icon: Utensils,
    title: 'Cagraille - Site Vitrine Restaurant',
    description:
      "Développement d'un site web professionnel pour un restaurant avec présentation des menus, galerie photos et système de contact optimisé. Design responsive adapté à tous les appareils. J'ai approfondi mes compétences en design d'interface et en expérience utilisateur pour le secteur de la restauration.",
    tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
    link: 'https://cagraille.com',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
    logo: '🍽️',
  },
  {
    icon: Utensils,
    title: 'Dwich62 - Sandwicherie Digitale',
    description:
      "Site responsive pour une sandwicherie locale avec menu digital interactif, formulaire de contact et système de panier avancé. Premier projet professionnel qui m'a enseigné l'importance de l'expérience utilisateur dans le secteur de la restauration rapide et du référencement local.",
    tech: ['HTML5', 'CSS3', 'JavaScript', 'SEO Local'],
    link: 'https://dwich62.com',
    image:
      'https://images.unsplash.com/photo-1521390188864-e34c440c3e77?w=400&h=300&fit=crop',
    logo: '🥪',
  },
  {
    icon: Lightbulb,
    title: 'IA Devis Automatisés',
    description:
      "Solution révolutionnaire qui automatise la réponse de devis dans le secteur immobilier. Utilisation de l'API OpenAI pour comprendre les demandes clients, N8N pour orchestrer les workflows et d'LLM pour la gestion de prix et plus. Cette IA réduit le temps de traitement de 95% tout en augmentant la précision.",
    tech: ['Python', 'OpenAI API', 'N8N', 'JSON', 'Webhooks'],
    link: null,
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    logo: '🤖',
  },
];

export default function AboutPage() {
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
            À Propos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mon parcours, mes compétences et mon ambition : intégrer une prépa MP2I
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 mb-12"
        >
          <div className="flex items-start gap-4 mb-6">
            <GraduationCap className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: BRAND_TITLE }} />
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: BRAND_TITLE }}>
                Salman Bacherki
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                L'informatique est un domaine qui me passione, me passionne tellement que j'ai transformé cette passion en expertise concrète à travers des projets réels qui ont impacté non seulement des particuliers mais aussi des entreprises. Mon objectif est d'intégrer une{' '}
                <span className="font-semibold" style={{ color: BRAND_TITLE }}>
                  Prépa MP2I
                </span>{' '}
                pour approfondir mes connaissances en mathématiques et informatique, et devenir{' '}
                <span className="font-semibold" style={{ color: BRAND_TITLE }}>
                  Ingénieur en Data Science et Intelligence Artificielle
                </span>
                .
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Au lycée, j'ai choisi les spécialités{' '}
                <span className="font-semibold" style={{ color: BRAND_TITLE }}>
                  Mathématiques
                </span>
                ,{' '}
                <span className="font-semibold" style={{ color: BRAND_TITLE }}>
                  Physique-Chimie
                </span>{' '}
                et{' '}
                <span className="font-semibold" style={{ color: BRAND_TITLE }}>
                  Mathématiques Expertes
                </span>
                , ce qui m'a permis de développer une rigueur scientifique essentielle pour mes projets de développement. Mon parcours autodidacte en programmation, couplé à ces bases scientifiques solides, me donne une approche unique pour résoudre des problèmes complexes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ color: BRAND_TITLE }}>
            <Code2 className="w-8 h-8" style={{ color: BRAND_TITLE }} />
            Compétences Techniques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>

                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 1 }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${BRAND_TITLE} 0%, ${BRAND_ACCENT} 100%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Achievements avec images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ color: BRAND_TITLE }}>
            Réalisations & Apprentissages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const CardContent = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={achievement.link ? { y: -5, scale: 1.02 } : {}}
                  className={cn(
                    'bg-white rounded-2xl border overflow-hidden transition-all duration-300',
                    achievement.link ? 'hover:shadow-2xl cursor-pointer' : 'hover:shadow-lg'
                  )}
                  style={{
                    borderColor: 'rgba(0,0,0,0.08)',
                  }}
                >
                  {/* Image */}
                  {achievement.image && (
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />

                      {/* overlay doux */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.18) 100%)',
                        }}
                      />

                      {/* Logo overlay */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-lg">
                        {achievement.logo}
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold flex-1">{achievement.title}</h3>
                      {achievement.link && (
                        <ExternalLink
                          className="w-5 h-5 flex-shrink-0 ml-2 transition-colors"
                          style={{ color: BRAND_ACCENT }}
                        />
                      )}
                    </div>

                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {achievement.tech.map((tech, techIndex) => (
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
                  </div>

                  {/* bordure accent au hover */}
                  {achievement.link && (
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ boxShadow: `inset 0 0 0 2px ${BRAND_ACCENT}` }}
                    />
                  )}
                </motion.div>
              );

              return achievement.link ? (
                <Link
                  key={index}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  {CardContent}
                </Link>
              ) : (
                CardContent
              );
            })}
          </div>
        </motion.div>

        {/* Why MP2I - FOND ORANGE PREMIUM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="rounded-3xl p-8 md:p-12"
          style={{
            background: 'linear-gradient(135deg, #FF6B35 0%, #E85A2D 55%, #FF6B35 100%)',
            color: '#ffffff',
          }}
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Target className="w-8 h-8" style={{ color: '#ffffff' }} />
            Pourquoi la Prépa MP2I ?
          </h2>

          <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.92)' }}>
            <p>
              Franchement, la MP2I c'est exactement ce qu'il me faut. J'ai passé des mois à coder, à créer des sites, à automatiser des trucs avec de l'IA... et à chaque fois je me rends compte qu'il me manque les bases théoriques solides pour aller encore plus loin.
            </p>
            <p>
              Je veux pas juste savoir "comment ça marche" en surface. Je veux comprendre les{' '}
              <span className="font-semibold" style={{ color: '#ffffff' }}>
                algorithmes en profondeur
              </span>
              , maîtriser les{' '}
              <span className="font-semibold" style={{ color: '#ffffff' }}>
                maths qui se cachent derrière l'IA
              </span>
              , et être capable de créer des solutions vraiment innovantes, pas juste reproduire ce qui existe déjà.
            </p>
            <p>La MP2I me permettra de :</p>

            <ul className="space-y-3 ml-6">
              {[
                "Passer du \"je sais coder\" au \"je comprends pourquoi ça marche\" avec des bases solides en structures de données et algorithmes",
                "Enfin maîtriser les maths appliquées à l'IA et au Machine Learning, pas juste utiliser des bibliothèques",
                "Développer une vraie expertise en architecture logicielle pour créer des systèmes qui tiennent la route",
                "Atteindre mon objectif ultime : devenir Ingénieur Data Science et créer des IA qui changent vraiment les choses",
              ].map((txt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 font-bold"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    →
                  </span>
                  <span>{txt}</span>
                </li>
              ))}
            </ul>

            <p className="pt-4">
              Mon parcours autodidacte m'a appris à{' '}
              <span className="font-semibold" style={{ color: '#ffffff' }}>
                pas lâcher l'affaire
              </span>{' '}
              et à{' '}
              <span className="font-semibold" style={{ color: '#ffffff' }}>
                trouver des solutions créatives
              </span>
              . Maintenant je veux transformer cette détermination en excellence académique. La prépa ça va être dur, je le sais, mais je suis prêt à tout donner pour atteindre mes objectifs.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// mini helper (tu utilises déjà cn ailleurs, mais ici c'est safe sans import en plus)
function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
