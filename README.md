# SociQl - Portfolio Professionnel

Site portfolio moderne et professionnel pour Salman Bacherki, développeur web et spécialiste en IA.

## 🚀 Fonctionnalités

- ✨ Design noir et blanc élégant avec animations fluides
- 📱 100% Responsive (mobile, tablette, desktop)
- ⚡ Performance optimale avec Next.js 14
- 🎨 Animations avec Framer Motion
- 📞 Contact WhatsApp intégré
- 🔍 SEO optimisé pour un meilleur référencement
- 📊 Présentation complète du portfolio et des services

## 📦 Technologies utilisées

- **Framework:** Next.js 14 (React 18)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 🛠️ Installation locale

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🔧 Résolution des problèmes

### Erreur "ChunkLoadError: Loading chunk failed"

Si vous rencontrez cette erreur, c'est un problème de cache Next.js. Voici la solution :

**Sur Windows :**
1. Fermez le serveur de développement (Ctrl+C)
2. Exécutez le script de réparation :
   ```bash
   fix.bat
   ```

**Ou manuellement :**
```bash
# 1. Arrêter le serveur (Ctrl+C)

# 2. Supprimer les caches
rmdir /s /q .next
rmdir /s /q node_modules

# 3. Réinstaller
npm install

# 4. Redémarrer
npm run dev
```

**Sur Mac/Linux :**
```bash
chmod +x fix.sh
./fix.sh
```

**Ou manuellement :**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Autres problèmes courants

**Port 3000 déjà utilisé :**
```bash
npm run dev -- -p 3001
```

**Erreurs de dépendances :**
```bash
npm cache clean --force
npm install
```

## 🌐 Déploiement sur Vercel

### Option 1 : Via l'interface Vercel (Recommandé)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository GitHub
4. Vercel détectera automatiquement Next.js
5. Cliquez sur "Deploy"

### Option 2 : Via la CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel
```

## 📁 Structure du projet

```
sociql-portfolio/
├── app/
│   ├── about/           # Page À Propos / Parcoursup
│   ├── portfolio/       # Page Portfolio
│   ├── services/        # Page Services & Tarifs
│   ├── mentions-legales/ # Mentions légales
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Page d'accueil
│   └── globals.css      # Styles globaux
├── components/
│   ├── ui/              # Composants UI réutilisables
│   ├── Navigation.tsx   # Navigation principale
│   ├── Footer.tsx       # Footer
│   ├── Hero.tsx         # Section Hero
│   ├── Features.tsx     # Section Features
│   └── WhatsAppContact.tsx # Module WhatsApp
├── lib/
│   └── utils.ts         # Fonctions utilitaires
└── public/              # Fichiers statiques
```

## 🎨 Personnalisation

### Modifier les couleurs

Éditez le fichier `app/globals.css` pour ajuster la palette de couleurs.

### Modifier le contenu

- **Portfolio:** `app/portfolio/page.tsx`
- **Services:** `app/services/page.tsx`
- **À Propos:** `app/about/page.tsx`

### Modifier le numéro WhatsApp

Dans `components/WhatsAppContact.tsx`, ligne 14 :
```typescript
const phoneNumber = '33749412756'; // Votre numéro
```

## 📧 Contact

- **Email:** contact@sociql.fr
- **WhatsApp:** +33 7 49 41 27 56
- **Adresse:** 24 rue Pablo Neruda, 77330 Ozoir-la-Ferrière

## 📄 Licence

© 2026 SociQl - Salman Bacherki. Tous droits réservés.
