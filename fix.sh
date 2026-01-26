#!/bin/bash

echo "🧹 Nettoyage du cache Next.js..."

# Supprimer les dossiers de cache
rm -rf .next
rm -rf node_modules
rm -rf .vercel

echo "📦 Réinstallation des dépendances..."
npm install

echo "✨ Redémarrage du serveur de développement..."
npm run dev
