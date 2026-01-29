'use client';

import { motion } from 'framer-motion';
import { Target, Code2, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Target,
    number: "01",
    title: 'Analyse & Stratégie',
    description: 'Nous commençons par comprendre vos besoins, vos objectifs et votre marché. Ensemble, nous définissons la stratégie digitale qui vous correspond.',
  },
  {
    icon: Code2,
    number: "02",
    title: 'Développement Agile',
    description: 'Nous développons votre solution en itérations rapides. Vous suivez l\'avancement en temps réel et validez chaque étape du projet.',
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: 'Tests & Optimisation',
    description: 'Chaque fonctionnalité est testée rigoureusement. Performance, sécurité et expérience utilisateur sont nos priorités absolues.',
  },
  {
    icon: Rocket,
    number: "04",
    title: 'Lancement & Suivi',
    description: 'Nous déployons votre projet et assurons un suivi continu. Formation, maintenance et support technique pour garantir votre succès.',
  },
];

export function Approche() {
  return (
    <section id="approche" className="py-16 sm:py-20 lg:py-32 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            style={{ color: "#FF6B35" }}
          >
            Notre Approche
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Une méthodologie éprouvée qui garantit la réussite de votre projet digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-white p-6 sm:p-8 rounded-3xl border-2 border-gray-200 transition-all duration-300 hover:shadow-2xl"
              style={
                {
                  // petit trick: on garde ton border gris normal,
                  // et on met la couleur accent en hover via inline style + group-hover class sur un pseudo? nope.
                  // Donc on fait simple: on laisse border gray en base et on passe en accent via onMouseEnter/Leave? non.
                  // Solution safe: on remplace juste hover:border-black par une classe neutre
                  // et on met une bordure accent permanente ultra légère via boxShadow.
                  boxShadow: "0 0 0 0 rgba(0,0,0,0)",
                } as React.CSSProperties
              }
            >
              {/* Number */}
              <div
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-6xl sm:text-8xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors pointer-events-none"
                style={{ color: "#FFA07A", opacity: 0.18 }}
              >
                {step.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#FFA07A" }}
                >
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA après la section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
            Prêt à transformer votre idée en réalité digitale ?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a href="/services" className="inline-block">
              <button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                style={{ backgroundColor: "#FF6B35" }}
              >
                Découvrir nos services
              </button>
            </a>
            <a href="/portfolio" className="inline-block">
              <button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black border-2 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                style={{ borderColor: "#FFA07A" }}
              >
                Voir nos réalisations
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}