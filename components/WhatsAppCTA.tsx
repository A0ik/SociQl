"use client";

import { MessageCircle, ArrowRight } from "lucide-react";

export function WhatsAppCTA() {
  const handleClick = () => {
    const message = encodeURIComponent("Bonjour ! Je souhaite discuter de mon projet. Pouvez-vous me donner plus d'informations ?");
    window.open(`https://wa.me/33749412756?text=${message}`, '_blank');
  };

  return (
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
          onClick={handleClick}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
        >
          <MessageCircle className="w-6 h-6" />
          Discutons sur WhatsApp
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
