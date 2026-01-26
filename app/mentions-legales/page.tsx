'use client';

import { motion } from 'framer-motion';

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Mentions Légales</h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Informations légales</h2>
              <p className="text-gray-700 mb-2">
                <strong>Raison sociale :</strong> SociQl
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Forme juridique :</strong> Auto-entrepreneur
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Responsable :</strong> Salman Bacherki
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Adresse :</strong> 24 rue Pablo Neruda, 77330 Ozoir-la-Ferrière, France
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email :</strong> contact@sociql.fr
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Téléphone :</strong> +33 7 49 41 27 56
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Hébergement</h2>
              <p className="text-gray-700 mb-2">
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
              </p>
              <p className="text-gray-700">
                <strong>Site web :</strong>{' '}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline"
                >
                  vercel.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Propriété intellectuelle</h2>
              <p className="text-gray-700">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de SociQl, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord écrit préalable de SociQl.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Protection des données personnelles</h2>
              <p className="text-gray-700 mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-gray-700">
                Les données collectées via les formulaires de contact sont uniquement utilisées pour répondre à vos demandes et ne sont jamais transmises à des tiers. Pour exercer vos droits, contactez-nous à l'adresse : contact@sociql.fr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
              <p className="text-gray-700">
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de tracking ou publicitaire n'est utilisé sans votre consentement explicite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Limitation de responsabilité</h2>
              <p className="text-gray-700">
                SociQl s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, SociQl ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site et décline toute responsabilité pour toute imprécision, inexactitude ou omission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Droit applicable</h2>
              <p className="text-gray-700">
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm text-gray-600">
                Dernière mise à jour : Janvier 2026
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
