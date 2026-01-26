"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PhoneCall, FileText, Send, Loader2, Sparkles, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  openDirectlyToForm?: boolean;
}

const services = [
  { id: "standard", name: "Standard - Site vitrine", value: "Standard - 549.99€" },
  { id: "plus", name: "Plus - Projet ambitieux", value: "Plus - 649.99€" },
  { id: "elite", name: "Elite - Solution premium", value: "Elite - 849.99€" },
  { id: "maintenance", name: "Maintenance - Support continu", value: "Maintenance - 49.99€/mois" },
  { id: "refonte", name: "Refonte - Modernisation", value: "Refonte - 349.99€" },
  { id: "ecommerce", name: "E-commerce - Boutique en ligne", value: "E-commerce - 999.99€" },
  { id: "ia", name: "IA personnalisée - Sur mesure", value: "IA personnalisée" },
];

export function ContactModal({ isOpen, onClose, openDirectlyToForm = false }: ContactModalProps) {
  const [showForm, setShowForm] = useState(openDirectlyToForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    nomSite: "",
    lienSite: "",
    services: [] as string[],
    details: "",
  });

  // Ouvrir directement le formulaire si demandé
  useState(() => {
    if (openDirectlyToForm && isOpen) {
      setShowForm(true);
    }
  });

  const handleCall = () => {
    window.location.href = "tel:+33749412756";
    onClose();
  };

  const handleDevisClick = () => {
    setShowForm(true);
  };

  const handleServiceToggle = (serviceValue: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceValue)
        ? prev.services.filter((s) => s !== serviceValue)
        : [...prev.services, serviceValue],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          onClose();
          setShowForm(false);
          setFormData({
            prenom: "",
            nom: "",
            email: "",
            telephone: "",
            nomSite: "",
            lienSite: "",
            services: [],
            details: "",
          });
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
      setShowForm(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-2 sm:p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-2xl max-h-[95vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header avec gradient noir pur */}
            <div className="relative bg-black text-white p-4 sm:p-8 overflow-hidden">
              {/* Effet de brillance animé */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, white 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, white 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, white 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              <button
                onClick={() => {
                  onClose();
                  setShowForm(false);
                }}
                className="absolute top-3 right-3 sm:top-6 sm:right-6 text-white/80 hover:text-white transition-colors hover:rotate-90 duration-300 z-10"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-3 sm:mb-4 border border-white/20"
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">Réponse sous 24h</span>
                </motion.div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                  {showForm ? "Devis gratuit" : "Démarrons votre projet"}
                </h2>
                <p className="text-sm sm:text-base text-gray-300">
                  {showForm
                    ? "Remplissez ce formulaire simple et recevez une réponse personnalisée"
                    : "Choisissez votre mode de contact préféré"}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-8 max-h-[calc(95vh-140px)] overflow-y-auto">
              {!showForm ? (
                /* Choix du mode de contact */
                <div className="space-y-3 sm:space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCall}
                    className="w-full flex items-center justify-between p-4 sm:p-6 border-2 border-gray-200 rounded-xl sm:rounded-2xl hover:border-black hover:bg-gray-50 transition-all group relative overflow-hidden"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-black to-gray-700 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <PhoneCall className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-base sm:text-xl font-bold mb-0 sm:mb-1">Appeler</h3>
                        <p className="text-xs sm:text-sm text-gray-500">
                          +33 7 49 41 27 56
                        </p>
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl text-gray-400 group-hover:text-black group-hover:translate-x-2 transition-all">
                      →
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDevisClick}
                    className="w-full flex items-center justify-between p-4 sm:p-6 border-2 border-black bg-black text-white rounded-xl sm:rounded-2xl hover:bg-gray-900 transition-all group relative overflow-hidden"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20">
                        <FileText className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-base sm:text-xl font-bold mb-0 sm:mb-1">Devis personnalisé</h3>
                        <p className="text-xs sm:text-sm text-gray-300">
                          Réponse par email sous 24h
                        </p>
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl text-white/70 group-hover:translate-x-2 transition-all">
                      →
                    </div>
                  </motion.button>
                </div>
              ) : (
                /* Formulaire de devis optimisé mobile */
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Prénom et Nom */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-700">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.prenom}
                        onChange={(e) =>
                          setFormData({ ...formData, prenom: e.target.value })
                        }
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Jean"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-700">
                        Nom *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nom}
                        onChange={(e) =>
                          setFormData({ ...formData, nom: e.target.value })
                        }
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  {/* Email et Téléphone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="jean@exemple.fr"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-700">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telephone}
                        onChange={(e) =>
                          setFormData({ ...formData, telephone: e.target.value })
                        }
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                  </div>

                  {/* Nom du projet */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-700">
                      Nom de votre projet
                    </label>
                    <input
                      type="text"
                      value={formData.nomSite}
                      onChange={(e) =>
                        setFormData({ ...formData, nomSite: e.target.value })
                      }
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="Ex: Mon Restaurant"
                    />
                  </div>

                  {/* Lien du site (toujours visible) */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-700 flex items-center gap-2">
                      <LinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      Lien de votre site internet actuel (si vous en avez un)
                    </label>
                    <input
                      type="url"
                      value={formData.lienSite}
                      onChange={(e) =>
                        setFormData({ ...formData, lienSite: e.target.value })
                      }
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="https://mon-site-actuel.fr"
                    />
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-700">
                      Services souhaités * ({formData.services.length} sélectionné{formData.services.length > 1 ? 's' : ''})
                    </label>
                    <div className="space-y-2 max-h-40 sm:max-h-56 overflow-y-auto border-2 border-gray-200 rounded-lg sm:rounded-xl p-2 sm:p-4 bg-gray-50 custom-scrollbar">
                      {services.map((service) => {
                        const isSelected = formData.services.includes(service.value);
                        return (
                          <label
                            key={service.id}
                            className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg cursor-pointer transition-all ${
                              isSelected
                                ? "bg-gray-800 text-white shadow-md"
                                : "bg-white hover:bg-gray-100 border border-gray-200"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => handleServiceToggle(service.value)}
                              className="w-4 h-4 sm:w-5 sm:h-5 rounded border-2 border-gray-300 text-black focus:ring-black cursor-pointer"
                            />
                            <span className={`text-xs sm:text-sm font-medium ${isSelected ? 'text-white' : 'text-gray-700'}`}>
                              {service.name}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Détails du projet */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-700">
                      Décrivez votre projet * <span className="text-gray-500 font-normal">(en quelques mots)</span>
                    </label>
                    <textarea
                      required
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      rows={3}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none transition-all"
                      placeholder="Vos besoins principaux, vos objectifs..."
                    />
                  </div>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-3 sm:p-4 bg-green-50 border-2 border-green-200 rounded-lg sm:rounded-xl text-green-800 text-xs sm:text-sm"
                      >
                        <p className="font-semibold">✅ Demande envoyée !</p>
                        <p className="text-xs mt-1">Vous recevrez une réponse détaillée sous 24h.</p>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-3 sm:p-4 bg-red-50 border-2 border-red-200 rounded-lg sm:rounded-xl text-red-800 text-xs sm:text-sm"
                      >
                        ❌ Erreur. Réessayez ou appelez-nous au +33 7 49 41 27 56
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Buttons */}
                  <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowForm(false)}
                      disabled={isSubmitting}
                      className="flex-1 border-2 hover:bg-gray-50 rounded-lg sm:rounded-xl py-4 sm:py-6 text-sm sm:text-base"
                    >
                      Retour
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting || formData.services.length === 0}
                      className="flex-1 bg-black hover:bg-gray-800 text-white rounded-lg sm:rounded-xl py-4 sm:py-6 disabled:opacity-50 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                          <span className="hidden sm:inline">Envoi...</span>
                          <span className="sm:hidden">...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Envoyer
                        </>
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
