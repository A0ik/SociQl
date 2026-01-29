"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Fonction pour normaliser le texte (gérer les abréviations et variantes)
function normalizeText(text: string): string {
  const lowerText = text.toLowerCase();
  
  // Remplacer les abréviations communes
  const abbreviations: { [key: string]: string } = {
    'slt': 'salut',
    'bjr': 'bonjour',
    'bsr': 'bonsoir',
    'stp': 's\'il te plaît',
    'svp': 's\'il vous plaît',
    'vrmt': 'vraiment',
    'vrm': 'vraiment',
    'grv': 'grave',
    'tt': 'tout',
    'tkt': 't\'inquiète',
    'pcq': 'parce que',
    'dc': 'donc',
    'pr': 'pour',
    'msg': 'message',
    'rdv': 'rendez-vous',
    'pb': 'problème',
    'ok': 'd\'accord',
    'cc': 'coucou',
    'cv': 'ça va',
    'tlm': 'tout le monde',
    'cmb': 'combien',
    'qd': 'quand',
    'pq': 'pourquoi',
    'jsp': 'je sais pas',
    'jpp': 'j\'en peux plus',
    'mdr': '',
    'lol': '',
  };

  let normalized = lowerText;
  Object.entries(abbreviations).forEach(([abbr, full]) => {
    const regex = new RegExp(`\\b${abbr}\\b`, 'g');
    normalized = normalized.replace(regex, full);
  });

  return normalized;
}

// Fonction intelligente pour détecter l'intention de la question
function getSmartResponse(userMessage: string): string {
  const normalized = normalizeText(userMessage);
  
  // Messages vides ou incompréhensibles
  if (!normalized.trim() || normalized.length < 2) {
    return "Hmm, j'ai pas bien capté ton message 😅 Tu peux reformuler ? Ou dis-moi juste ce que tu cherches : prix, portfolio, devis...";
  }

  // Messages bizarres / spam / clavier chat
  if (/^[qwertyuiopasdfghjklzxcvbnm]{10,}$|^[0-9]{10,}$|^[!@#$%^&*()]{5,}$/i.test(normalized)) {
    return "Haha, je crois que ton clavier a fait n'importe quoi ! 😄 Pas de souci, dis-moi ce que tu veux savoir : nos services, les prix, le portfolio ?";
  }

  // Insultes ou langage inapproprié (reste pro)
  if (/(connard|putain|merde|con|idiot|nul|naze)/i.test(normalized)) {
    return "Hey, restons courtois ! 😊 Je suis là pour t'aider avec ton projet web. Qu'est-ce qui t'intéresse ?";
  }

  // Questions existentielles / philosophiques
  if (/(sens de la vie|pourquoi on existe|dieu|42|philosophie)/i.test(normalized)) {
    return "Ah la grande question ! 🤔 Moi je dirais : créer des sites web incroyables, c'est déjà un bon début ! 😄 Sinon, je peux t'aider avec un projet concret ?";
  }

  // Blagues / humour
  if (/(blague|joke|rigole|drôle|mdr|lol|ptdr)/i.test(normalized)) {
    return "Haha j'adore l'humour ! 😄 Mais je suis surtout bon pour créer des sites web. Tu as un projet ? Ou tu veux juste discuter des prix ?";
  }

  // Questions sur l'IA elle-même
  if (/(qui es-tu|c'est quoi|tu es qui|chatbot|robot|ia|intelligence)/i.test(normalized) && /(toi|tu)/i.test(normalized)) {
    return "Moi ? Je suis le chatbot de SociQl ! 🤖 Je suis là pour répondre à tes questions sur nos services, te donner des prix, te montrer nos projets... Bref, t'aider à lancer ton site web ! Qu'est-ce qui t'intéresse ?";
  }

  // Questions sur la météo / hors sujet
  if (/(météo|temps qu'il fait|température|soleil|pluie|neige)/i.test(normalized)) {
    return "La météo ? 🌤️ J'y connais rien ! Par contre, je peux te parler de sites web, d'apps, de prix... C'est quoi ton projet ?";
  }

  // Questions sur le sport / actualités
  if (/(foot|football|psg|om|tennis|basket|sport|match)/i.test(normalized)) {
    return "Le sport c'est cool ! ⚽ Mais moi je suis plutôt dev web. Tu aurais besoin d'un site pour ton club ou ton équipe ? 😊";
  }

  // Questions sur bouffe / restaurants (mais pas pour un projet)
  if (/(faim|manger|pizza|burger|resto|restaurant)/i.test(normalized) && !/(site|web|projet|créer)/i.test(normalized)) {
    return "J'ai pas de pizzas malheureusement ! 🍕 Mais si tu as un resto et que tu veux un site web avec menu digital, commande en ligne... là je peux t'aider ! On parle projet ?";
  }

  // Salutations
  if (/(salut|bonjour|bonsoir|coucou|hey|hello|yo|wesh|ouais|oe)/i.test(normalized) && normalized.split(' ').length <= 3) {
    const responses = [
      "Salut ! 👋 Je peux t'aider avec quoi aujourd'hui ? Prix, portfolio, devis... ?",
      "Hey ! 😊 T'as un projet en tête ou tu veux juste des infos ?",
      "Yo ! 🔥 Dis-moi ce que tu cherches et je t'aide !",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Ça va / Comment ça va
  if (/(ça va|comment ça va|tu vas bien|comment tu vas|cv)/i.test(normalized) && normalized.split(' ').length <= 5) {
    return "Ça roule ! 😎 Et toi, t'as un projet web en tête ? Ou tu veux juste discuter des tarifs ?";
  }

  // Oui / Non / OK (réponses courtes)
  if (/^(oui|non|ok|d'accord|peut-être|ouais|nan|nope)$/i.test(normalized.trim())) {
    return "OK ! Mais du coup... tu cherches quoi exactement ? 😄 Prix, portfolio, devis ?";
  }

  // Merci
  if (/(merci|thank|thx|thanks)/i.test(normalized)) {
    return "Avec plaisir ! 😊 Hésite pas si t'as d'autres questions !";
  }

  // Au revoir
  if (/(au revoir|bye|ciao|tchao|salut|à plus|à bientôt)/i.test(normalized) && normalized.split(' ').length <= 3) {
    return "À bientôt ! 👋 N'hésite pas si tu as un projet !";
  }

  // Prix / Tarifs avec contexte
  if (/(prix|tarif|coût|combien|budget|€|euro|payer|payement|cher|coute)/i.test(normalized)) {
    if (/site|web|internet/.test(normalized)) {
      return "Nos tarifs site web 💰 :\n\n• Standard : 549€ (site vitrine)\n• Plus : 649€ (site pro + SEO)\n• Elite : 849€ (site premium complet)\n• E-commerce : 999€ (boutique en ligne)\n\nPromo -20% en cours ! Tu veux un devis perso ? Donne-moi ton email ! 📧";
    }
    if (/ia|intelligence|automatisation|bot/.test(normalized)) {
      return "Solutions IA 🤖 :\n\n• Chatbot : à partir de 500€\n• Automatisation : 1000-2000€\n• Solution sur mesure : sur devis\n\nC'est quoi ton idée exactement ?";
    }
    return "Nos tarifs 💰 :\n\n• Site vitrine : 549€\n• Site pro : 649€\n• Site premium : 849€\n• E-commerce : 999€\n\nPromo -20% ! Tu veux plus d'infos sur un service en particulier ?";
  }

  // Délai / Temps avec plus de contexte
  if (/(délai|temps|combien de temps|durée|quand|rapidement|vite|livre|livraison|urgent|rapide)/i.test(normalized)) {
    if (/urgent/.test(normalized)) {
      return "Projet urgent ? On gère ! ⚡\n\n• Site vitrine : 7-10 jours\n• E-commerce : 2-3 semaines\n\nDonne-moi tes coordonnées et on trouve une solution rapide ! 🚀";
    }
    return "Délais moyens ⏱️ :\n\n• Site vitrine : 1-2 semaines\n• E-commerce : 3-4 semaines\n• Solution IA : 2-4 semaines\n\nT'as une deadline précise ?";
  }

  // Services avec détection du type
  if (/(service|faire|proposer|offre|développer|créer|site|application|app|vous faites|tu fais)/i.test(normalized)) {
    if (/restaurant|resto|bouffe|menu/.test(normalized)) {
      return "Spécial restaurants ! 🍔\n\n• Site avec menu digital\n• Commande en ligne\n• Intégration Uber Eats\n• Menu QR code\n• SEO local\n\nOn a fait OCrispy, Dwich62... Regarde le portfolio ! 🔥";
    }
    if (/ia|intelligence|automatisation|automatiser/.test(normalized)) {
      return "Solutions IA ! 🤖\n\n• Chatbots (comme moi !)\n• Automatisation devis\n• Emails automatiques\n• Workflows N8N\n\n95% de temps gagné pour nos clients ! T'as quoi à automatiser ?";
    }
    return "On fait tout en web ! 🚀\n\n• Sites (restaurants, e-commerce, vitrines)\n• Apps sur mesure\n• Solutions IA\n• Chatbots\n• SEO\n\nQu'est-ce qui t'intéresse ?";
  }

  // Portfolio / Exemples
  if (/(portfolio|exemple|projet|réalisation|travail|voir|montrer|ocrispy|cagraille|dwich)/i.test(normalized)) {
    return "Nos projets qui cartonnent ! 🎨\n\n• **OCrispy** - E-commerce poulet frit\n• **Cagraille** - Site resto + photos pro\n• **Dwich62** - Menu digital + panier\n• **IA Devis** - Bot automatique\n\nVa sur notre Portfolio pour tout voir ! Tu veux un site similaire ?";
  }

  // Contact / Devis avec plus d'options
  if (/(contact|devis|estimation|appel|téléphone|email|mail|rendez-vous|discuter|parler|coordonnées)/i.test(normalized)) {
    return "Parfait, on peut se parler ! 📞\n\nChoisis ton option :\n\n1️⃣ **Rapide** : Donne-moi ton email ici et je te réponds sous 24h\n2️⃣ **Direct** : contact@sociql.fr\n3️⃣ **Urgent** : WhatsApp au 07 49 41 27 56\n4️⃣ **Détaillé** : Remplis le formulaire sur /services\n\nQu'est-ce qui t'arrange le plus ? 😊";
  }

  // Technologies
  if (/(techno|langage|react|next|python|javascript|framework|stack|quel|utiliser|coder)/i.test(normalized)) {
    return "Notre stack technique ? On est à la pointe ! 💻\n\n**Frontend** :\n• React.js & Next.js (comme ce site !)\n• Tailwind CSS pour le design\n• TypeScript pour la qualité\n\n**Backend** :\n• Node.js / Python\n• Bases de données modernes\n\n**IA** :\n• OpenAI API (GPT)\n• N8N pour l'automatisation\n\nTout est moderne, rapide et scalable ! Des questions techniques ? 🤓";
  }

  // Réseaux sociaux / Marketing
  if (/(réseau|social|instagram|facebook|tiktok|pub|publicité|marketing|seo|référencement|google)/i.test(normalized)) {
    return "Le marketing digital, on gère ça aussi ! 📱\n\n• **SEO** : Optimisation pour Google (référencement naturel)\n• **SEO Local** : Apparaître dans les recherches près de chez toi\n• **Meta tags** : Partage pro sur réseaux sociaux\n• **Analytics** : Suivi des performances\n\nOn ne fait pas de pub payante par contre, mais on optimise ton site pour qu'il soit trouvé ! Ça t'intéresse ? 🎯";
  }

  // Design / Graphisme
  if (/(design|graphisme|logo|couleur|style|beau|moderne|UI|UX|interface)/i.test(normalized)) {
    return "Le design c'est notre dada ! 🎨\n\n• Design moderne et élégant\n• UI/UX optimisé (facile à utiliser)\n• Animations fluides\n• Responsive (parfait sur mobile)\n• Couleurs et typo personnalisées\n\nRegarde ce site, on l'a fait nous-mêmes ! Tu aimes le style ? On peut faire pareil (ou différent) pour toi ! 😎";
  }

  // Maintenance / Bugs
  if (/(maintenance|bug|problème|après|sav|support|garantie|panne|marche pas|erreur)/i.test(normalized)) {
    return "On te laisse pas tomber après la livraison ! 🛠️\n\n• Support 24/7 par email\n• Corrections de bugs **gratuites** pendant 3 mois\n• Formation complète à l'utilisation\n• Maintenance disponible sur abonnement (optionnel)\n• Mises à jour de sécurité incluses\n\nTon site tourne bien, on s'assure qu'il reste au top ! 💪";
  }

  // Paiement détaillé
  if (/(paiement|payer|carte|virement|facture|acompte|3 fois|plusieurs fois|échelonné)/i.test(normalized)) {
    return "Paiement flexible et transparent ! 💳\n\n**Échelonnement** :\n• 30% au démarrage du projet\n• 40% à mi-parcours (quand tu valides)\n• 30% à la livraison finale\n\n**Moyens** :\n• Virement bancaire (préféré)\n• Stripe si besoin\n• Facture officielle fournie\n\nOn peut aussi discuter d'autres arrangements si besoin ! 😊";
  }

  // Questions sur l'IA / Ce chatbot
  if (/(toi|tu es qui|comment tu|marche|fonctionnes|chatbot|bot|intelligent)/i.test(normalized)) {
    return "Moi ? Je suis le chatbot de SociQl ! 🤖\n\nJe suis là pour :\n• Répondre à tes questions 24/7\n• T'orienter vers les bonnes infos\n• Prendre tes coordonnées pour un devis\n• Être sympa et utile !\n\nJe comprends même les abréviations et le langage SMS 😎 T'as vu ? Je suis plutôt cool non ? On peut en créer un comme moi pour ton business !";
  }

  // Localisation avec plus de détails
  if (/(où|localisation|adresse|région|ville|paris|île-de-france|venir|bureau|rendez-vous physique)/i.test(normalized)) {
    return "On est basés en Île-de-France ! 📍\n\n**Adresse** : Ozoir-la-Ferrière (77330)\n**Zone** : On travaille partout en France (et même à l'international !)\n**Rencontre** : Possible en visio ou en personne si t'es dans le coin\n\nT'es où toi ? On peut organiser un call Zoom si tu préfères ! 💻";
  }

  // Concurrence / Comparaison
  if (/(concurrent|autre|moins cher|mieux|pourquoi vous|différence)/i.test(normalized)) {
    return "Bonne question ! Pourquoi nous ? 💡\n\n✅ **Prix transparents** (pas de surprise)\n✅ **Délais respectés** (on est sérieux)\n✅ **Support après-vente** (on reste dispo)\n✅ **Vraie expertise IA** (pas que du web basique)\n✅ **Jeune et réactif** (on répond vite)\n✅ **Portfolio qui parle** (regarde nos projets)\n\nOn est peut-être pas les moins chers, mais on est les meilleurs rapport qualité/prix ! 🔥";
  }

  // Doutes / Hésitations
  if (/(hésite|sais pas|réfléchir|penser|jsp|doute|peut-être|voir)/i.test(normalized)) {
    return "C'est normal d'hésiter ! 🤔\n\nPas de pression, prends ton temps ! Voilà ce que tu peux faire :\n\n1. Regarde notre **Portfolio** pour voir notre travail\n2. Lis les **témoignages** clients (bientôt sur le site)\n3. Demande un **devis gratuit** sans engagement\n4. Pose-moi **toutes tes questions**\n5. Compare avec d'autres (on assume !)\n\nT'as besoin d'infos spécifiques pour te décider ? 😊";
  }

  // Merci / Positif
  if (/(merci|super|top|cool|parfait|génial|excellent|bien|ok d'accord|ça marche)/i.test(normalized)) {
    const responses = [
      "Avec plaisir ! 😊 Si t'as d'autres questions, hésite pas ! Je suis là 24/7. Sinon, file voir notre portfolio ou demande un devis !",
      "Content de t'aider ! 🔥 N'oublie pas qu'on peut te faire un devis perso gratuit si tu nous donnes ton email !",
      "De rien ! 💪 Autre chose ? Sinon on peut passer à l'action : devis, appel, visite du portfolio... dis-moi !",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Au revoir
  if (/(bye|au revoir|ciao|salut|à plus|à bientôt|a plus|bb|bisous)/i.test(normalized)) {
    const responses = [
      "Salut ! 👋 Reviens quand tu veux, je suis toujours là ! Et pense à checker notre portfolio ! 🔥",
      "Ciao ! 😊 N'hésite pas à revenir, et si t'as un projet, tu sais où me trouver ! À bientôt !",
      "À plus ! 💪 Si tu changes d'avis ou t'as des questions, je suis là 24/7. Bonne journée !",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Insultes / Négatif (réponse cool)
  if (/(nul|merde|con|débile|pourri|arnaque|cher|trop cher)/i.test(normalized)) {
    return "Ouch... 😅 Je sens que t'es pas convaincu ! Pas de souci, on peut en discuter. Qu'est-ce qui te bloque exactement ? Le prix ? Le délai ? Dis-moi, on peut sûrement trouver une solution ! 💬";
  }

  // Détection si l'utilisateur donne son email
  if (/@/.test(userMessage) && /\.(com|fr|net|org)/.test(userMessage)) {
    return "Super ! 📧 J'ai bien noté ton email. Notre équipe va te contacter sous 24h max pour discuter de ton projet en détail !\n\nEn attendant, tu peux aller voir notre Portfolio pour avoir des idées ! 🎨\n\nD'autres questions en attendant ? 😊";
  }

  // Réponse par défaut ultra-intelligente
  const defaultResponses = [
    `Je capte ce que tu veux savoir ! 🤔\n\nPour te répondre au mieux, dis-moi :\n• C'est pour quel type de projet ?\n• T'as un budget en tête ?\n• C'est urgent ou tu as du temps ?\n\nOu si tu préfères, visite notre page **Services** pour tout voir en détail ! 📋`,
    `Hmm, ta question est un peu large ! 🤓\n\nJe peux t'aider sur :\n• Nos services (sites web, IA, etc.)\n• Les prix et tarifs\n• Les délais\n• Notre portfolio\n• Prendre tes coordonnées\n\nC'est quoi qui t'intéresse le plus ? 😊`,
    `Intéressant ! 💡 Pour te donner la meilleure réponse, précise un peu :\n\n• Tu veux créer quoi exactement ?\n• C'est pour toi ou ton business ?\n• T'as déjà une idée du budget ?\n\nOu balance-moi direct ton email et on en discute en détail ! 📧`,
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { 
      text: "Bonjour ! 👋 Je suis l'assistant virtuel de SociQl. Posez-moi n'importe quelle question sur nos services, tarifs, projets ou pour obtenir un devis. Je comprends même les abréviations ! 😊", 
      isUser: false 
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage = inputValue;
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInputValue("");
    setIsTyping(true);

    // Simuler un délai de réflexion (plus réaliste)
    setTimeout(() => {
      const response = getSmartResponse(userMessage);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Bouton flottant */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-black text-white rounded-full shadow-2xl flex items-center justify-center group"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Effet de pulsation */}
            <motion.div
              className="absolute inset-0 rounded-full bg-black"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-full sm:max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-h-[80vh] flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-black to-gray-800 text-white p-3 sm:p-4 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Assistant SociQl</h3>
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      En ligne
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50 min-h-[300px] max-h-[50vh]">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-3 py-2 sm:px-4 sm:py-2 rounded-2xl text-sm sm:text-base whitespace-pre-line ${
                        message.isUser
                          ? "bg-black text-white rounded-br-none"
                          : "bg-white text-gray-800 shadow-sm border border-gray-200 rounded-bl-none"
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white text-gray-800 shadow-sm border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-none">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-3 sm:p-4 bg-white border-t flex-shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex gap-2"
                >
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Posez votre question..."
                    className="flex-1 text-sm sm:text-base"
                    disabled={isTyping}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="shrink-0"
                    disabled={isTyping || !inputValue.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Réponses instantanées · Comprend les abréviations
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
