"use client";

import { motion } from "framer-motion";
import { MessageCircle, Palette, Code, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Discussion",
    description: "On échange sur votre projet, vos besoins et vos objectifs",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Palette,
    title: "2. Design",
    description: "Création de maquettes modernes et sur mesure validées avec vous",
    color: "from-orange-600 to-red-500",
  },
  {
    icon: Code,
    title: "3. Développement",
    description: "Code propre, rapide et sécurisé avec les dernières technologies",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Rocket,
    title: "4. Lancement",
    description: "Mise en ligne de votre projet et formation complète",
    color: "from-red-600 to-orange-700",
  },
  {
    icon: CheckCircle,
    title: "5. Support",
    description: "Maintenance continue et accompagnement à long terme",
    color: "from-orange-700 to-orange-500",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Notre Processus
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour transformer votre idée en succès digital
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale centrale (desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-300 via-red-400 to-orange-300 rounded-full" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-5/12 relative">
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300 group">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Point central (desktop) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} border-4 border-white shadow-lg`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
