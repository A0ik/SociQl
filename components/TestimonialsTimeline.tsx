"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thomas Dubois",
    company: "Le Bistrot Moderne",
    role: "Restaurateur",
    text: "Site magnifique livré en 2 semaines ! Les réservations en ligne ont boosté notre chiffre d'affaires de 40%.",
    rating: 5,
    date: "Janvier 2025",
    image: "👨‍🍳",
  },
  {
    name: "Sophie Martin",
    company: "Zen & Spa",
    role: "Propriétaire",
    text: "L'automatisation IA a transformé notre façon de travailler. On gagne un temps fou sur les devis et les réponses clients.",
    rating: 5,
    date: "Décembre 2024",
    image: "💆‍♀️",
  },
  {
    name: "Mathieu Rodriguez",
    company: "TechStart Solutions",
    role: "CEO de l'auto école Didier",
    text: "Équipe ultra réactive et professionnelle. Notre e-commerce tourne parfaitement, zéro bug depuis le lancement.",
    rating: 5,
    date: "Novembre 2024",
    image: "👨‍💼",
  },
  {
    name: "Julie Petit",
    company: "Atelier Créatif",
    role: "Designer",
    text: "Portfolio sublime qui reflète parfaitement mon style. Mes clients adorent et les demandes affluent !",
    rating: 5,
    date: "Octobre 2024",
    image: "🎨",
  },
];

export function TestimonialsTimeline() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Ils Nous Font Confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des clients satisfaits qui partagent leur expérience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-400 to-orange-200" />

          {/* Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-24"
              >
                {/* Point sur la timeline */}
                <div className="hidden md:flex absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-4 border-white shadow-lg z-10" />

                {/* Card */}
                <div className="bg-gradient-to-br from-white to-orange-50/30 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300 group relative overflow-hidden">
                  {/* Quote icon background */}
                  <Quote className="absolute top-4 right-4 w-16 h-16 text-orange-100 opacity-50" />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{testimonial.image}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.role} • {testimonial.company}
                        </p>
                        {/* Stars */}
                        <div className="flex gap-0.5 mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-orange-500 text-orange-500"
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full">
                        {testimonial.date}
                      </span>
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { number: "15+", label: "Clients Satisfaits" },
            { number: "4.9/5", label: "Note Moyenne" },
            { number: "100%", label: "Projets Livrés" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg"
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-orange-50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
