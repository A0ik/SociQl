"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, FileText, Send, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  openDirectlyToForm?: boolean;
  preSelectedService?: string;
}

const services = [
  { id: "site-web", name: "Site Web Vitrine", value: "Site Web Vitrine" },
  { id: "ecommerce", name: "E-commerce", value: "E-commerce" },
  { id: "refonte", name: "Refonte de Site", value: "Refonte de Site" },
  { id: "maintenance", name: "Maintenance & Support", value: "Maintenance & Support" },
  { id: "ia", name: "Solutions IA & Automatisation", value: "Solutions IA & Automatisation" },
];

export function ContactModal({ isOpen, onClose, openDirectlyToForm = false, preSelectedService = "" }: ContactModalProps) {
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

  useEffect(() => {
    if (openDirectlyToForm && isOpen) {
      setShowForm(true);
    }
  }, [openDirectlyToForm, isOpen]);

  useEffect(() => {
    if (preSelectedService && isOpen) {
      setFormData((prev) => ({
        ...prev,
        services: [preSelectedService],
      }));
    }
  }, [preSelectedService, isOpen]);

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent("Bonjour ! Je suis intéressé, pouvez-vous me donner des informations ?");
    window.open(`https://wa.me/33749412756?text=${message}`, '_blank');
    onClose();
  };

  const handleWhatsAppDevis = () => {
    const message = encodeURIComponent("Bonjour ! Je souhaite demander un devis. Pouvez-vous me donner plus d'informations ?");
    window.open(`https://wa.me/33749412756?text=${message}`, '_blank');
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
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
            <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 sm:p-8 overflow-hidden">
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
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 hover:rotate-90"
                aria-label="Fermer"
              >
                <X className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
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
                <p className="text-sm sm:text-base text-orange-100">
                  {showForm
                    ? "Remplissez ce formulaire simple et recevez une réponse personnalisée"
                    : "Choisissez votre mode de contact préféré"}
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-8 max-h-[calc(95vh-140px)] overflow-y-auto custom-scrollbar">
              {!showForm ? (
                <div className="space-y-3 sm:space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppDirect}
                    className="w-full flex items-center justify-between p-4 sm:p-6 border-2 border-orange-200 rounded-xl sm:rounded-2xl hover:border-orange-500 hover:bg-orange-50 transition-all group"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-base sm:text-xl font-bold text-gray-900">Devis via WhatsApp</h3>
                        <p className="text-xs sm:text-sm text-gray-500">Réponse Rapide</p>
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl text-gray-400 group-hover:text-orange-500 group-hover:translate-x-2 transition-all">→</div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDevisClick}
                    className="w-full flex items-center justify-between p-4 sm:p-6 border-2 border-orange-500 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl sm:rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all group shadow-lg"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                        <FileText className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-base sm:text-xl font-bold">Devis en ligne</h3>
                        <p className="text-xs sm:text-sm text-orange-100">Formulaire détaillé • Email</p>
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl text-white/70 group-hover:translate-x-2 transition-all">→</div>
                  </motion.button>
                </div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Prénom *</label>
                      <input
                        type="text"
                        required
                        value={formData.prenom}
                        onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Nom *</label>
                      <input
                        type="text"
                        required
                        value={formData.nom}
                        onChange={(e) => setFormData({...formData, nom: e.target.value})}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.telephone}
                      onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Nom du projet</label>
                      <input
                        type="text"
                        value={formData.nomSite}
                        onChange={(e) => setFormData({...formData, nomSite: e.target.value})}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Site actuel (si existant)</label>
                      <input
                        type="url"
                        value={formData.lienSite}
                        onChange={(e) => setFormData({...formData, lienSite: e.target.value})}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">Services souhaités *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleServiceToggle(service.value)}
                          className={`p-2 sm:p-3 text-left rounded-lg border-2 transition-all text-xs sm:text-sm ${
                            formData.services.includes(service.value)
                              ? "border-orange-500 bg-orange-50 text-orange-900 font-medium"
                              : "border-gray-200 hover:border-orange-300 hover:bg-orange-50/50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                              formData.services.includes(service.value)
                                ? "border-orange-500 bg-orange-500"
                                : "border-gray-300"
                            }`}>
                              {formData.services.includes(service.value) && (
                                <svg className="w-3 h-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M5 13l4 4L19 7"></path>
                                </svg>
                              )}
                            </div>
                            <span>{service.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Détails du projet</label>
                    <textarea
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-sm sm:text-base"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <p className="text-green-800 text-sm sm:text-base font-medium">✓ Devis envoyé avec succès ! Vous recevrez une réponse sous 24h.</p>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <p className="text-red-800 text-sm sm:text-base font-medium">✗ Erreur lors de l'envoi. Veuillez réessayer.</p>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting || formData.services.length === 0}
                    className="w-full py-4 sm:py-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer ma demande
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
