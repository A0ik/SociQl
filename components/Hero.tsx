'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Bonjour ! Je suis intéressé, pouvez-vous me donner des informations ?");
    window.open(`https://wa.me/33749412756?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '700ms' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200"
          >
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-900">Développeur Web & Devis automatisé grâce à l'IA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            Transformez vos idées
            <br />
            en{' '}
            <span className="relative inline-block">
              <span className="relative z-10">solutions digitales</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-gradient-to-r from-orange-400 to-orange-500 opacity-30 -z-0"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Sites web professionnels pour restaurants, applications sur mesure et solutions IA pour automatiser votre business. De l'idée au déploiement, je transforme vos projets en réalité digitale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/services">
              <Button size="lg" className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0">
                Découvrir mes services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="px-8 py-3 rounded-lg border-2 border-orange-200 text-gray-900 font-medium hover:bg-orange-50 hover:border-orange-300 transition-all"
            >
              Prendre contact
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Temps gagné</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Sites créés</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24h</div>
              <div className="text-sm text-gray-600">Réponse garantie</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
