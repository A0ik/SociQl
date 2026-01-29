"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const titles = useMemo(
    () => [
      "innovantes",
      "sur mesure",
      "professionnelles",
      "performantes",
      "modernes",
      "créatives",
      "optimisées",
      "élégantes",
      "intelligentes",
      "évolutives",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const scrollToApproche = () => {
    const approche = document.getElementById("approche");
    if (approche) {
      approche.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "/services";
  };

  return (
    <>
      <div className="w-full relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex gap-6 sm:gap-8 py-16 sm:py-20 lg:py-32 items-center justify-center flex-col">
            <div className="relative z-20">
              <Button
                variant="secondary"
                size="sm"
                className="gap-2 sm:gap-4 text-xs sm:text-sm cursor-pointer relative z-20"
                onClick={scrollToApproche}
                type="button"
              >
                Découvrir notre approche{" "}
                <MoveRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>

            <div className="flex gap-4 sm:gap-6 flex-col">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl max-w-5xl tracking-tighter text-center font-regular leading-tight">
                <span className="block mb-2 sm:mb-4" style={{ color: "#FF6B35" }}>
                  Des solutions
                </span>

                <span className="relative flex w-full justify-center text-center pb-4 sm:pb-6 md:pb-8 lg:pb-12 pt-2 sm:pt-3 md:pt-4 h-[80px] sm:h-[100px] md:h-[120px] lg:h-[160px] xl:h-[200px]">
                  <AnimatePresence mode="wait">
                    {titles.map((title, index) =>
                      titleNumber === index ? (
                        <motion.span
                          key={`${title}-${index}`}
                          className="absolute font-semibold whitespace-nowrap"
                          style={{ color: "#FFA07A" }}
                          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {title}
                        </motion.span>
                      ) : null
                    )}
                  </AnimatePresence>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center px-4">
                De la création de sites web professionnels aux applications sur
                mesure, nous développons des solutions digitales qui font la
                différence. Votre succès est notre priorité.
              </p>
            </div>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 relative z-20">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-2 sm:gap-4 w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 cursor-pointer relative z-20 border-2"
                style={{
                  backgroundColor: "rgba(255,160,122,0.25)",
                  borderColor: "#FFA07A",
                  color: "#111827",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,160,122,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,160,122,0.25)";
                }}
                type="button"
              >
                Prendre contact <PhoneCall className="w-4 h-4" />
              </button>

              <button
                onClick={handleServicesClick}
                className="inline-flex items-center justify-center gap-2 sm:gap-4 w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 cursor-pointer relative z-20 border-2"
                style={{
                  backgroundColor: "#FF6B35",
                  borderColor: "#FF6B35",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#E85A2D";
                  e.currentTarget.style.borderColor = "#E85A2D";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FF6B35";
                  e.currentTarget.style.borderColor = "#FF6B35";
                }}
                type="button"
              >
                Nos services <MoveRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export { AnimatedHero };