'use client';

import { useEffect, useRef } from 'react';

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
}

export const ShootingStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fonction pour redimensionner le canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Créer les météorites
    const meteors: Meteor[] = [];
    const numberOfMeteors = 15; // Nombre de météorites simultanées

    // Initialiser les météorites
    for (let i = 0; i < numberOfMeteors; i++) {
      meteors.push(createMeteor());
    }

    function createMeteor(): Meteor {
      // Position de départ : gauche-haut de l'écran (avec marge)
      const startX = Math.random() * (canvas!.width * 0.3); // 30% gauche
      const startY = Math.random() * (canvas!.height * 0.4); // 40% haut

      return {
        x: startX,
        y: startY,
        length: Math.random() * 80 + 40, // Longueur de la traînée (40-120px)
        speed: Math.random() * 3 + 2, // Vitesse (2-5)
        opacity: Math.random() * 0.5 + 0.5, // Opacité (0.5-1)
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3, // Angle ~45° avec variation
      };
    }

    function drawMeteor(meteor: Meteor) {
      if (!ctx || !canvas) return;

      // Calculer la position de fin de la traînée
      const endX = meteor.x - Math.cos(meteor.angle) * meteor.length;
      const endY = meteor.y - Math.sin(meteor.angle) * meteor.length;

      // Créer un gradient pour la traînée
      const gradient = ctx.createLinearGradient(
        meteor.x,
        meteor.y,
        endX,
        endY
      );

      gradient.addColorStop(0, `rgba(249, 115, 22, ${meteor.opacity})`);
      gradient.addColorStop(0.3, `rgba(249, 115, 22, ${meteor.opacity * 0.6})`);
      gradient.addColorStop(1, 'rgba(249, 115, 22, 0)');

      // Dessiner la traînée
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      
      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Dessiner l'étoile à la tête
      ctx.fillStyle = `rgba(249, 115, 22, ${meteor.opacity})`;
      ctx.beginPath();
      ctx.arc(meteor.x, meteor.y, 2, 0, Math.PI * 2);
      ctx.fill();

      // Effet de brillance (point blanc au centre)
      ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity * 0.8})`;
      ctx.beginPath();
      ctx.arc(meteor.x, meteor.y, 1, 0, Math.PI * 2);
      ctx.fill();
    }

    function updateMeteor(meteor: Meteor) {
      // Déplacer la météorite (gauche-haut vers droite-bas)
      meteor.x += Math.cos(meteor.angle) * meteor.speed;
      meteor.y += Math.sin(meteor.angle) * meteor.speed;

      // Si la météorite sort de l'écran, la réinitialiser
      if (
        meteor.x > canvas!.width + 100 ||
        meteor.y > canvas!.height + 100 ||
        meteor.x < -100 ||
        meteor.y < -100
      ) {
        const newMeteor = createMeteor();
        meteor.x = newMeteor.x;
        meteor.y = newMeteor.y;
        meteor.length = newMeteor.length;
        meteor.speed = newMeteor.speed;
        meteor.opacity = newMeteor.opacity;
        meteor.angle = newMeteor.angle;
      }
    }

    // Animation
    let animationFrameId: number;

    function animate() {
      if (!ctx || !canvas) return;

      // Effacer le canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Mettre à jour et dessiner chaque météorite
      meteors.forEach((meteor) => {
        updateMeteor(meteor);
        drawMeteor(meteor);
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'white',
        zIndex: 0,
      }}
    />
  );
};
