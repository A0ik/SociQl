"use client";

import { AnimatedHero } from "@/components/ui/animated-hero";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Retour à l'accueil</span>
          </Link>
        </div>
      </nav>

      <div className="pt-20">
        {/* Section 1: Animated Hero */}
        <section className="relative min-h-screen flex items-center justify-center bg-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <AnimatedHero />
        </section>

        {/* Section 2: Background Beams avec formulaire */}
        <section className="h-screen w-full relative flex flex-col items-center justify-center bg-background">
          <div className="max-w-2xl mx-auto p-4 relative z-10">
            <h1 className="text-4xl md:text-6xl max-w-2xl tracking-tight text-center font-bold mb-4">
              Rejoignez-nous
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto my-4 text-base text-center">
              Inscrivez-vous pour recevoir nos actualités et découvrir nos dernières 
              solutions digitales. Nous développons des projets qui font la différence.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-6">
              <Input
                type="email"
                placeholder="votre@email.com"
                className="flex-1"
              />
              <Button>
                S'inscrire
              </Button>
            </div>
          </div>
          <BackgroundBeams />
        </section>

        {/* Section 3: Exemple d'utilisation mixte */}
        <section className="min-h-screen flex items-center justify-center bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pourquoi choisir SociQL ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Nous combinons expertise technique et créativité pour créer des solutions 
              digitales qui répondent à vos besoins spécifiques.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
              <div className="p-6 bg-background rounded-lg border shadow-sm">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction client</div>
              </div>
              <div className="p-6 bg-background rounded-lg border shadow-sm">
                <div className="text-4xl font-bold mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </div>
              <div className="p-6 bg-background rounded-lg border shadow-sm">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support disponible</div>
              </div>
            </div>
            <div className="mt-12">
              <Link href="/services">
                <Button size="lg">
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </div>
          <BackgroundBeams className="opacity-30" />
        </section>
      </div>
    </div>
  );
}
